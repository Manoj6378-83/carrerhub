'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ApplicationsTracker } from '@/components/dashboard/applications-tracker'

export default function ApplicationsPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Header />
      <div className="flex-1">
        <ApplicationsTracker />
      </div>
      <Footer />
    </main>
  )
}
