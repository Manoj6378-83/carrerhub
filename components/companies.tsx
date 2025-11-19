'use client'

import Link from 'next/link'
import { Star } from 'lucide-react'

const companies = [
  { name: 'Tech Solutions Inc', logo: '🔷', rating: 4.8, reviews: 234, jobs: 45 },
  { name: 'Creative Studios', logo: '🎨', rating: 4.6, reviews: 189, jobs: 28 },
  { name: 'Digital Media Co', logo: '📝', rating: 4.9, reviews: 312, jobs: 52 },
  { name: 'Finance Plus', logo: '📊', rating: 4.7, reviews: 156, jobs: 31 },
  { name: 'Growth Agency', logo: '📱', rating: 4.5, reviews: 201, jobs: 38 },
  { name: 'Innovation Labs', logo: '🚀', rating: 4.8, reviews: 267, jobs: 42 },
]

export function Companies() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="space-y-4 mb-12">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Top Companies Hiring</h2>
              <p className="text-muted-foreground mt-2">Work with industry leaders and innovative startups</p>
            </div>
            <Link href="/companies" className="text-primary hover:text-primary/80 transition font-medium">
              View all →
            </Link>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {companies.map((company) => (
            <Link
              key={company.name}
              href={`/company/${company.name.toLowerCase()}`}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-md hover:border-primary/50 transition group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-4xl">{company.logo}</span>
                  <div className="text-right">
                    <div className="flex items-center gap-1 justify-end">
                      <Star size={16} className="fill-accent text-accent" />
                      <span className="font-bold">{company.rating}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{company.reviews} reviews</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-lg text-card-foreground mb-2">{company.name}</h3>
                  <p className="text-sm text-muted-foreground">{company.jobs} active jobs</p>
                </div>

                <button className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition font-medium text-sm">
                  View Profile
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
