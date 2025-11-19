import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CareerHub - Find Jobs, Gig Work & Remote Jobs Online | India\'s #1 Job Board',
  description: 'Discover 50,000+ job opportunities, gig work, freelance, part-time & remote jobs. Compare top companies, read employee reviews, and start earning today. Join millions of job seekers on CareerHub.',
  keywords: 'job board, online jobs, gig work, part-time jobs, freelance, remote work, career, employment, job search, job portal',
  openGraph: {
    title: 'CareerHub - Find Jobs & Gig Work Online',
    description: 'Discover 50,000+ job opportunities and start earning today.',
    type: 'website',
    url: 'https://carrerhub.com',
  },
}

import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { FeaturedJobs } from '@/components/featured-jobs'
import { Categories } from '@/components/categories'
import { HowItWorks } from '@/components/how-it-works'
import { Companies } from '@/components/companies'
import { Testimonials } from '@/components/testimonials'
import { CTA } from '@/components/cta'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <>
      {/* JSON-LD structured data for homepage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'CareerHub - Find Jobs & Gig Work',
            description: 'Discover job opportunities and gig work on CareerHub.',
            url: 'https://carrerhub.com',
            mainEntity: {
              '@type': 'WebApplication',
              name: 'CareerHub',
              applicationCategory: 'BusinessApplication',
              offers: {
                '@type': 'AggregateOffer',
                priceCurrency: 'INR',
                price: '0',
                description: 'Free job search and gig work platform',
              },
            },
          }),
        }}
      />
      <main className="min-h-screen">
        <Header />
        <Hero />
        <FeaturedJobs />
        <Categories />
        <HowItWorks />
        <Companies />
        <Testimonials />
        <CTA />
        <Footer />
      </main>
    </>
  )
}
