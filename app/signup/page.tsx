'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { SignupForm } from '@/components/auth/signup-form'
import Link from 'next/link'

export default function SignupPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Header />
      <div className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Create Your Account</h1>
            <p className="text-muted-foreground">Join thousands earning on CareerHub</p>
          </div>
          
          <SignupForm />

          <p className="text-center text-muted-foreground mt-6">
            Already have an account?{' '}
            <Link href="/signin" className="text-primary hover:text-primary/80 font-medium">
              Sign In
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </main>
  )
}
