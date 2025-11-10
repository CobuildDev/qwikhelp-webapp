import bcrypt from 'bcryptjs'
import { NextResponse } from 'next/server'
import connectDB from '../../../../../lib/db'
import User from '../../../../../lib/models/User'

export async function POST(req: Request) {
  try {
    const { firstname, lastname, email, password, confirmPassword } =
      await req.json()

    if (!firstname || !lastname || !email || !password || !confirmPassword) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      )
    }

    if (password !== confirmPassword) {
      return NextResponse.json(
        { message: 'Passwords do not match' },
        { status: 400 }
      )
    }

    await connectDB()

    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return NextResponse.json(
        { message: 'Email already in use' },
        { status: 400 }
      )
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = await User.create({
      firstname,
      lastname,
      email,
      password: hashedPassword,
    })

    return NextResponse.json(
      {
        message: 'Signup successful',
        user: {
          id: newUser._id,
          firstname: newUser.firstname,
          lastname: newUser.lastname,
          email: newUser.email,
        },
      },
      { status: 201 }
    )
  } catch (error: any) {
    console.error('Signup error:', error)
    return NextResponse.json(
      { message: 'Server error', error: error.message },
      { status: 500 }
    )
  }
}
