'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { PostJobForm } from '@/components/jobs/post-job-form'

export default function PostJobPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Header />
      <div className="flex-1">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="max-w-3xl">
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Post a New Job</h1>
              <p className="text-muted-foreground">Reach thousands of qualified candidates on CareerHub</p>
            </div>
            <PostJobForm />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
