import bcrypt from 'bcryptjs'
import { NextResponse } from 'next/server'

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

    const hashedPassword = await bcrypt.hash(password, 10)

    const fakeUser = {
      id: 'temp-id-123',
      firstname,
      lastname,
      email,
      password: hashedPassword,
    }

    return NextResponse.json(
      { message: 'Signup successful (TEMP)', user: fakeUser },
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
