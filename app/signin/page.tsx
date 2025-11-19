'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { SigninForm } from '@/components/auth/signin-form'
import Link from 'next/link'

export default function SigninPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Header />
      <div className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
            <p className="text-muted-foreground">Sign in to your CareerHub account</p>
          </div>

          <SigninForm />

          <p className="text-center text-muted-foreground mt-6">
            Don't have an account?{' '}
            <Link href="/signup" className="text-primary hover:text-primary/80 font-medium">
              Create one
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </main>
  )
}
