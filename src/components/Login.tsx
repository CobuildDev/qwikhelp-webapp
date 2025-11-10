'use client'
import { Eye, EyeOff } from 'lucide-react'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'sonner'
import SocialAuth from './SocialAuth'

export default function AuthScreens() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()

    const res = await signIn('credentials', {
      redirect: false,
      email,
      password,
    })

    if (res?.error) {
      toast.error('Invalid email or password')
      return
    }

    toast.success('Login successful!')
    router.push('/home')
  }

  return (
    <div className='flex flex-col h-full py-12 px-4 max-w-md mx-auto'>
      <LoginScreen
        email={email}
        password={password}
        showPassword={showPassword}
        setEmail={setEmail}
        setPassword={setPassword}
        setShowPassword={setShowPassword}
        handleLogin={handleLogin}
      />
    </div>
  )
}

// ---------------------- Login Screen ----------------------

interface LoginScreenProps {
  email: string
  password: string
  showPassword: boolean
  setEmail: (email: string) => void
  setPassword: (password: string) => void
  setShowPassword: (show: boolean) => void
  handleLogin: (e: React.FormEvent) => void
}

const LoginScreen = ({
  email,
  password,
  showPassword,
  setEmail,
  setPassword,
  setShowPassword,
  handleLogin,
}: LoginScreenProps) => {
  const router = useRouter()
  return (
    <>
      <div className='flex justify-center mb-6'>
        <Image src='/icons/icon.png' alt='App Icon' width={100} height={100} />
      </div>
      <h1 className='text-2xl font-bold text-center mb-2'>Login</h1>
      <p className='text-sm text-gray-400 text-center mb-8'>
        Welcome back! Please sign in to <br /> access your account.
      </p>

      <div className='flex-1'>
        <form onSubmit={handleLogin}>
          <div className='mb-4'>
            <input
              type='email'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full px-4 py-3 bg-gray-50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
              required
            />
          </div>

          <div className='mb-2 relative'>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-full px-4 py-3 bg-gray-50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 pr-12'
              required
            />
            <button
              type='button'
              onClick={() => setShowPassword(!showPassword)}
              className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-400'
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <div className='text-right mb-8'>
            <button
              type='button'
              className='text-sm text-blue-500 cursor-pointer font-medium'
              onClick={() => router.push('/forgot')}
            >
              Forget Password?
            </button>
          </div>

          <button
            type='submit'
            className={`w-full py-3.5 rounded-xl font-semibold text-white mb-6 ${
              email && password
                ? 'bg-blue-500 hover:bg-blue-600'
                : 'bg-gray-300 cursor-not-allowed'
            }`}
            disabled={!email || !password}
          >
            Continue
          </button>
        </form>

        <SocialAuth />
      </div>

      <div className='text-center text-sm text-gray-600 mt-5'>
        Don't have an account?{' '}
        <Link href='/signup' className='text-blue-500 font-semibold'>
          Sign Up
        </Link>
      </div>
    </>
  )
}
