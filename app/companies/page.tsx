'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CompaniesBrowser } from '@/components/companies/companies-browser'

export default function CompaniesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Companies Directory',
            description: 'Browse top companies and read employee reviews on CareerHub',
            url: 'https://carrerhub.com/companies',
            mainEntity: {
              '@type': 'ItemList',
              itemListElement: [
                {
                  '@type': 'Organization',
                  name: 'Tech Companies',
                  description: 'Leading technology companies hiring now',
                },
              ],
            },
          }),
        }}
      />
      <main className="min-h-screen bg-background flex flex-col">
        <Header />
        <div className="flex-1">
          <CompaniesBrowser />
        </div>
        <Footer />
      </main>
    </>
  )
}
