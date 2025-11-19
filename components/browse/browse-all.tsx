'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, Grid, List } from 'lucide-react'

const allItems = [
  { type: 'jobs', title: 'Browse All Jobs', description: '50,000+ job listings', icon: '💼', href: '/jobs' },
  { type: 'companies', title: 'Browse Companies', description: '10,000+ companies hiring', icon: '🏢', href: '/companies' },
  { type: 'gig', title: 'Gig Work', description: 'Freelance projects and short-term gigs', icon: '⚡', href: '/gig-work' },
  { type: 'reviews', title: 'Company Reviews', description: 'Read authentic employee reviews', icon: '⭐', href: '/reviews' },
  { type: 'remote', title: 'Remote Jobs', description: 'Work from anywhere', icon: '🌍', href: '/jobs?location=Remote' },
  { type: 'startup', title: 'Startup Jobs', description: 'Join early-stage companies', icon: '🚀', href: '/jobs?type=startup' }
]

export function BrowseAll() {
  const [viewType, setViewType] = useState<'grid' | 'list'>('grid')
  const [search, setSearch] = useState('')

  const filtered = allItems.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.description.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Browse Everything</h1>
        <p className="text-muted-foreground">Explore all features and categories</p>
      </div>

      {/* Search */}
      <div className="relative mb-8">
        <Search className="absolute left-4 top-3.5 size-5 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search categories..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-12 pr-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground"
        />
      </div>

      {/* View Toggle */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setViewType('grid')}
          className={`p-2 rounded-lg transition ${viewType === 'grid' ? 'bg-primary text-primary-foreground' : 'bg-muted text-foreground'}`}
        >
          <Grid size={20} />
        </button>
        <button
          onClick={() => setViewType('list')}
          className={`p-2 rounded-lg transition ${viewType === 'list' ? 'bg-primary text-primary-foreground' : 'bg-muted text-foreground'}`}
        >
          <List size={20} />
        </button>
      </div>

      {/* View */}
      {viewType === 'grid' ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(item => (
            <Link
              key={item.type}
              href={item.href}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-md hover:border-primary/50 transition group"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="font-bold text-lg text-card-foreground group-hover:text-primary transition mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </Link>
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map(item => (
            <Link
              key={item.type}
              href={item.href}
              className="bg-card border border-border rounded-xl p-4 hover:shadow-md hover:border-primary/50 transition flex items-center gap-4 group"
            >
              <span className="text-3xl">{item.icon}</span>
              <div className="flex-1">
                <h3 className="font-bold text-card-foreground group-hover:text-primary transition">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
