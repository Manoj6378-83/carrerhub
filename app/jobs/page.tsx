'use client'

import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { JobsFilters } from '@/components/jobs/jobs-filters'
import { JobsList } from '@/components/jobs/jobs-list'
import { useState } from 'react'

// Note: Metadata export works only in server components, but page uses 'use client'
// Solution: Create a separate layout or use dynamic metadata via route handlers
export default function JobsPage() {
  const [filters, setFilters] = useState({
    search: '',
    jobType: [] as string[],
    salary: '',
    location: '',
    category: '',
    sortBy: 'recent'
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Job Listings',
            description: 'Browse 50,000+ job opportunities on CareerHub',
            url: 'https://carrerhub.vercel.app/jobs',
            mainEntity: {
              '@type': 'ItemList',
              itemListElement: [
                {
                  '@type': 'JobPosting',
                  title: 'Senior React Developer',
                  jobLocation: {
                    '@type': 'Place',
                    address: {
                      '@type': 'PostalAddress',
                      addressCountry: 'IN',
                    },
                  },
                  employmentType: 'FULL_TIME',
                  validThrough: '2025-12-31T00:00:00Z',
                },
              ],
            },
          }),
        }}
      />
      <main className="min-h-screen bg-background">
        <Header />
        
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Find Your Next Opportunity</h1>
            <p className="text-muted-foreground">50,000+ jobs and gig opportunities waiting for you</p>
          </div>

          <div className="grid lg:grid-cols-4 gap-6">
            <div className="lg:col-span-1">
              <JobsFilters filters={filters} setFilters={setFilters} />
            </div>

            <div className="lg:col-span-3">
              <JobsList filters={filters} />
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </>
  )
}
