'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { GigFilters } from '@/components/gig/gig-filters'
import { GigList } from '@/components/gig/gig-list'
import { useState } from 'react'

export default function GigWorkPage() {
  const [filters, setFilters] = useState({
    search: '',
    gigType: [] as string[],
    budget: '',
    skills: [] as string[],
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
            name: 'Gig Work & Freelance Opportunities',
            description: 'Browse 10,000+ freelance gigs and short-term projects on CareerHub',
            url: 'https://carrerhub.com/gig-work',
            mainEntity: {
              '@type': 'ItemList',
              itemListElement: [
                {
                  '@type': 'Thing',
                  name: 'Freelance Projects & Gigs',
                  description: 'Short-term flexible work opportunities'
                }
              ]
            }
          })
        }}
      />
      <main className="min-h-screen bg-background">
        <Header />
        
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Freelance Gigs & Projects</h1>
            <p className="text-muted-foreground">10,000+ flexible projects and gig opportunities waiting for you</p>
          </div>

          <div className="grid lg:grid-cols-4 gap-6">
            <div className="lg:col-span-1">
              <GigFilters filters={filters} setFilters={setFilters} />
            </div>

            <div className="lg:col-span-3">
              <GigList filters={filters} />
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </>
  )
}
