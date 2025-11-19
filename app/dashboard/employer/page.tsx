'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { EmployerDashboard } from '@/components/dashboard/employer-dashboard'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function EmployerPage() {
  const router = useRouter()
  const [user, setUser] = useState(null)

  useEffect(() => {
    const userData = localStorage.getItem('user')
    if (!userData) {
      router.push('/signin')
      return
    }
    const parsedUser = JSON.parse(userData)
    if (parsedUser.userType !== 'employer') {
      router.push('/dashboard/jobs')
      return
    }
    setUser(parsedUser)
  }, [router])

  if (!user) return null

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Header />
      <div className="flex-1">
        <EmployerDashboard user={user as any} />
      </div>
      <Footer />
    </main>
  )
}
