'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import OnlyMobile from './OnlyMobile'

const queryClient = new QueryClient()

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <OnlyMobile>{children}</OnlyMobile>
    </QueryClientProvider>
  )
}
