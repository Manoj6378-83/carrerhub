'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { RecommendedJobs } from '@/components/dashboard/recommended-jobs'

export default function RecommendationsPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Header />
      <div className="flex-1">
        <RecommendedJobs />
      </div>
      <Footer />
    </main>
  )
}
