import { compare } from 'bcryptjs'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import connectDB from '../../../../../lib/db'
import User from '../../../../../lib/models/User'

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'you@example.com' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        await connectDB()

        if (!credentials?.email || !credentials?.password)
          throw new Error('Missing email or password')

        const user = await User.findOne({ email: credentials.email }).select(
          '+password'
        )
        if (!user) throw new Error('Invalid credentials')

        const isValid = await compare(credentials.password, user.password)
        if (!isValid) throw new Error('Invalid credentials')

        return {
          id: user._id.toString(),
          email: user.email,
          name: `${user.firstname} ${user.lastname}`,
        }
      },
    }),
  ],
  session: { strategy: 'jwt' },
  pages: {
    signIn: '/login',
  },
  secret: process.env.NEXTAUTH_SECRET,
})

export { handler as GET, handler as POST }
