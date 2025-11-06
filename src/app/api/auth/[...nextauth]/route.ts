import { compare } from 'bcryptjs'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password)
          throw new Error('Missing fields')

        //replace this with real db model
        const user = {
          id: '1',
          email: 'test@email.com',
          password: '$2a$10$whateverHashedPasswordHere',
        }

        const isValid = await compare(credentials.password, user.password)
        if (!isValid) throw new Error('Invalid credentials')

        return { id: user.id, email: user.email }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
})

export { handler as GET, handler as POST }
