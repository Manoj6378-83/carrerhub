'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { JobSeekerDashboard } from '@/components/dashboard/job-seeker-dashboard'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function JobSeekerPage() {
  const router = useRouter()
  const [user, setUser] = useState(null)

  useEffect(() => {
    const userData = localStorage.getItem('user')
    if (!userData) {
      router.push('/signin')
      return
    }
    setUser(JSON.parse(userData))
  }, [router])

  if (!user) return null

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Header />
      <div className="flex-1">
        <JobSeekerDashboard user={user as any} />
      </div>
      <Footer />
    </main>
  )
}
