'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { BrowseAll } from '@/components/browse/browse-all'

export default function BrowsePage() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Header />
      <div className="flex-1">
        <BrowseAll />
      </div>
      <Footer />
    </main>
  )
}
