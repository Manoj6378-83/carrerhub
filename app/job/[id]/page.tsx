'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { JobDetail } from '@/components/jobs/job-detail'
import { SimilarJobs } from '@/components/jobs/similar-jobs'
import { useParams } from 'next/navigation'

export default function JobPage() {
  const params = useParams()
  const jobId = params?.id

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <JobDetail jobId={jobId as string} />
          </div>
          <div className="lg:col-span-1">
            <SimilarJobs jobId={jobId as string} />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
