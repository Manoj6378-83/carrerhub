'use client'

import Link from 'next/link'
import { Star, MapPin, Users, TrendingUp } from 'lucide-react'
import { useState } from 'react'

const companies = [
  { name: 'Tech Solutions Inc', logo: '🔷', rating: 4.8, reviews: 234, employees: 500, jobs: 45, industry: 'Technology' },
  { name: 'Creative Studios', logo: '🎨', rating: 4.6, reviews: 189, employees: 150, jobs: 28, industry: 'Design' },
  { name: 'Digital Media Co', logo: '📝', rating: 4.9, reviews: 312, employees: 300, jobs: 52, industry: 'Media' },
  { name: 'Finance Plus', logo: '📊', rating: 4.7, reviews: 156, employees: 450, jobs: 31, industry: 'Finance' },
  { name: 'Growth Agency', logo: '📱', rating: 4.5, reviews: 201, employees: 200, jobs: 38, industry: 'Marketing' },
  { name: 'Innovation Labs', logo: '🚀', rating: 4.8, reviews: 267, employees: 180, jobs: 42, industry: 'Technology' },
  { name: 'StartUp Labs', logo: '⚡', rating: 4.7, reviews: 134, employees: 75, jobs: 15, industry: 'Technology' },
  { name: 'Software Solutions', logo: '💻', rating: 4.6, reviews: 189, employees: 250, jobs: 33, industry: 'Software' }
]

export function CompaniesBrowser() {
  const [search, setSearch] = useState('')
  const [industry, setIndustry] = useState('')

  const filtered = companies.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) &&
    (!industry || c.industry === industry)
  )

  const industries = Array.from(new Set(companies.map(c => c.industry)))

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Top Hiring Companies</h1>
        <p className="text-muted-foreground">Explore {companies.length} companies and their open positions</p>
      </div>

      {/* Filters */}
      <div className="bg-card border border-border rounded-xl p-4 md:p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Search companies..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground"
          />
          <select
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            className="px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
          >
            <option value="">All Industries</option>
            {industries.map(ind => (
              <option key={ind} value={ind}>{ind}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Companies Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(company => (
          <Link
            key={company.name}
            href={`/company/${company.name.toLowerCase().replace(/\s+/g, '-')}`}
            className="bg-card border border-border rounded-xl p-6 hover:shadow-md hover:border-primary/50 transition group"
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <span className="text-5xl">{company.logo}</span>
                <div className="text-right flex items-center gap-1">
                  <Star size={16} className="fill-accent text-accent" />
                  <span className="font-bold">{company.rating}</span>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg text-card-foreground group-hover:text-primary transition mb-2">{company.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{company.industry}</p>
              </div>

              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Users size={14} /> {company.employees} employees
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp size={14} /> {company.jobs} open positions
                </div>
                <div className="flex items-center gap-2">
                  <Star size={14} /> {company.reviews} reviews
                </div>
              </div>

              <button className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition font-medium text-sm">
                View Profile
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
