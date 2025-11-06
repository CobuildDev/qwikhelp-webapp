'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useSignupMutation } from '../../services/auth.service'
import SocialAuth from './SocialAuth'

export default function SignUp() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false,
  })

  const router = useRouter()
  const { mutate: signup, isPending, isError, error } = useSignupMutation()

  const allFilled =
    formData.firstName &&
    formData.lastName &&
    formData.email &&
    formData.password &&
    formData.confirmPassword &&
    formData.termsAccepted

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    signup(
      {
        firstname: formData.firstName,
        lastname: formData.lastName,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
      },
      {
        onSuccess: () => router.push('/home'),
      }
    )
  }

  return (
    <section className='bg-[#fafafa] min-h-screen py-8 px-2'>
      <div className='max-w-md mx-auto flex flex-col gap-6'>
        {/* Heading */}
        <div className='flex justify-center flex-col gap-1 items-center'>
          <h1 className='text-[28px] font-bold text-[#1a1a1a]'>
            Create Account
          </h1>
          <p className='font-normal text-[14px] text-[#9ca3af] text-center leading-5'>
            Fill your information below or register
            <br />
            with your social account
          </p>
        </div>
        {/* Form */}
        <form onSubmit={handleSubmit} className='gap-4 flex flex-col'>
          <input
            type='text'
            name='firstName'
            placeholder='Joseph'
            value={formData.firstName}
            onChange={handleChange}
            className='border-0 px-4 w-full py-3.5 rounded-xl bg-white text-[15px] shadow-sm'
          />
          <input
            type='text'
            name='lastName'
            placeholder='Nwaneri'
            value={formData.lastName}
            onChange={handleChange}
            className='border-0 px-4 w-full py-3.5 rounded-xl bg-white text-[15px] shadow-sm'
          />
          <input
            type='email'
            name='email'
            placeholder='nwanerijoseph3@gmail.com'
            value={formData.email}
            onChange={handleChange}
            className='border-0 px-4 w-full py-3.5 rounded-xl bg-white text-[15px] shadow-sm'
          />
          <input
            type='password'
            name='password'
            placeholder='Password'
            value={formData.password}
            onChange={handleChange}
            className='border-0 px-4 w-full py-3.5 rounded-xl bg-white text-[15px] shadow-sm'
          />
          <input
            type='password'
            name='confirmPassword'
            placeholder='Confirm Password'
            value={formData.confirmPassword}
            onChange={handleChange}
            className='border-0 px-4 w-full py-3.5 rounded-xl bg-white text-[15px] shadow-sm'
          />

          {/* Terms & Condition */}
          <div className='flex gap-3 items-center px-3'>
            <input
              type='checkbox'
              name='termsAccepted'
              checked={formData.termsAccepted}
              onChange={handleChange}
              className='w-5 h-5 accent-[#3b82f6] rounded'
            />
            <span className='text-[14px] text-[#4b5563]'>
              I have agreed with the{' '}
              <Link href='/' className='text-[#3b82f6] font-medium'>
                Term & Condition
              </Link>
            </span>
          </div>

          <button
            type='submit'
            className={`py-3 px-6 w-full rounded-xl font-semibold text-white text-[16px] transition-all mt-2 ${
              allFilled
                ? 'bg-[#2563eb] cursor-pointer hover:bg-[#1d5ee9]'
                : 'bg-gray-400 cursor-not-allowed'
            }`}
            disabled={!allFilled || isPending}
          >
            {isPending ? 'Creating account...' : 'Sign up'}
          </button>
        </form>
        {/* Divider */}
        <div className='flex items-center gap-3'>
          <div className='flex-1 h-px bg-[#e5e7eb]'></div>
          <span className='text-[13px] text-[#9ca3af]'>or sign up with</span>
          <div className='flex-1 h-px bg-[#e5e7eb]'></div>
        </div>
        <SocialAuth />
        {/* Login Link */}
        <div className='text-center text-[14px] text-[#4b5563] mt-2'>
          Already have an account?{' '}
          <Link href='/login' className='text-[#3b82f6] font-semibold'>
            Login
          </Link>
        </div>
      </div>
    </section>
  )
}
