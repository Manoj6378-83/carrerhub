'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { UserProfile } from '@/components/profile/user-profile'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function ProfilePage() {
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
        <UserProfile user={user as any} />
      </div>
      <Footer />
    </main>
  )
}
