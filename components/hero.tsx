'use client'

import Link from 'next/link'
import { Search, MapPin } from 'lucide-react'
import { useState } from 'react'

export function Hero() {
  const [searchQuery, setSearchQuery] = useState('')
  const [location, setLocation] = useState('')

  return (
    <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
              Find Your Perfect <span className="text-primary">Job</span> or <span className="text-accent">Gig</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Discover thousands of job opportunities, freelance work, and part-time gigs. Connect with top companies and start earning today.
            </p>
          </div>

          {/* Search Bar */}
          <div className="bg-card border border-border rounded-xl p-4 md:p-6 shadow-sm">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-3 md:top-4 size-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Job title or keyword..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <div className="relative">
                <MapPin className="absolute left-4 top-3 md:top-4 size-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full md:w-40 pl-12 pr-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <Link
                href={`/jobs?search=${searchQuery}&location=${location}`}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition font-medium whitespace-nowrap"
              >
                Search
              </Link>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 pt-8">
            <div className="space-y-1">
              <p className="text-2xl md:text-3xl font-bold text-primary">50K+</p>
              <p className="text-sm md:text-base text-muted-foreground">Active Jobs</p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl md:text-3xl font-bold text-accent">10K+</p>
              <p className="text-sm md:text-base text-muted-foreground">Companies</p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl md:text-3xl font-bold text-primary">500K+</p>
              <p className="text-sm md:text-base text-muted-foreground">Job Seekers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
