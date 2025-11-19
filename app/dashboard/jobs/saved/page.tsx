'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { SavedJobs } from '@/components/dashboard/saved-jobs'

export default function SavedJobsPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Header />
      <div className="flex-1">
        <SavedJobs />
      </div>
      <Footer />
    </main>
  )
}
