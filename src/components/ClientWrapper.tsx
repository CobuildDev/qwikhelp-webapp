'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SessionProvider } from 'next-auth/react'
import React from 'react'
import OnlyMobile from './OnlyMobile'

const queryClient = new QueryClient()

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <OnlyMobile>{children}</OnlyMobile>
      </QueryClientProvider>
    </SessionProvider>
  )
}
