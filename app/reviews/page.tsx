'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CompanyReviews } from '@/components/reviews/company-reviews'

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Header />
      <div className="flex-1">
        <CompanyReviews />
      </div>
      <Footer />
    </main>
  )
}
