'use client'

import Link from 'next/link'
import { Zap, DollarSign, Heart, Bookmark, ExternalLink, Clock, Users } from 'lucide-react'
import { useState, useMemo } from 'react'

const allGigs = [
  {
    id: 1,
    title: 'Write 10 Blog Posts about Tech',
    provider: 'Tech Magazine',
    logo: '📝',
    budget: '$500-1000',
    type: 'Project',
    skills: ['Writing', 'SEO'],
    description: 'Need 10 high-quality blog posts about latest tech trends',
    posted: '2 hours ago',
    bids: 12,
    rating: 4.8,
    urgent: true,
    platform: 'Upwork',
    applyUrl: 'https://www.upwork.com/jobs'
  },
  {
    id: 2,
    title: 'Logo Design for Startup',
    provider: 'StartUp Brand',
    logo: '🎨',
    budget: '$200-300',
    type: 'Fixed Price',
    skills: ['Design'],
    description: 'Create a modern logo for our new fintech startup',
    posted: '4 hours ago',
    bids: 8,
    rating: 4.9,
    urgent: true,
    platform: 'Fiverr',
    applyUrl: 'https://www.fiverr.com/search/gigs'
  },
  {
    id: 3,
    title: 'Web Scraping Project',
    provider: 'Data Solutions',
    logo: '⚙️',
    budget: '$300-600',
    type: 'Project',
    skills: ['Programming'],
    description: 'Scrape and organize data from e-commerce websites',
    posted: '1 day ago',
    bids: 15,
    rating: 4.7,
    urgent: false,
    platform: 'Upwork',
    applyUrl: 'https://www.upwork.com/jobs'
  },
  {
    id: 4,
    title: 'Virtual Assistant - Email Management',
    provider: 'Executive VA',
    logo: '🤝',
    budget: '$20-30/hr',
    type: 'Hourly',
    skills: ['Virtual Assistant'],
    description: 'Help manage emails and schedule for busy executive',
    posted: '3 hours ago',
    bids: 5,
    rating: 4.6,
    urgent: false,
    platform: 'Belay',
    applyUrl: 'https://www.belay.com'
  },
  {
    id: 5,
    title: 'Translate 5000 Words English to Spanish',
    provider: 'Translation Firm',
    logo: '🌐',
    budget: '$250-400',
    type: 'Fixed Price',
    skills: ['Translation'],
    description: 'Translate business documents from English to Spanish',
    posted: '6 hours ago',
    bids: 10,
    rating: 4.8,
    urgent: false,
    platform: 'Upwork',
    applyUrl: 'https://www.upwork.com/jobs'
  },
  {
    id: 6,
    title: 'Social Media Manager for 3 Months',
    provider: 'E-Commerce Co',
    logo: '📱',
    budget: '$15-25/hr',
    type: 'Hourly',
    skills: ['Marketing'],
    description: 'Manage social media accounts and create content',
    posted: '5 hours ago',
    bids: 9,
    rating: 4.5,
    urgent: false,
    platform: 'Upwork',
    applyUrl: 'https://www.upwork.com/jobs'
  },
  {
    id: 7,
    title: 'Create 30-Second Marketing Video',
    provider: 'Marketing Agency',
    logo: '🎬',
    budget: '$150-250',
    type: 'Fixed Price',
    skills: ['Video Editing'],
    description: 'Edit and create promotional video for product launch',
    posted: '8 hours ago',
    bids: 6,
    rating: 4.9,
    urgent: true,
    platform: 'Fiverr',
    applyUrl: 'https://www.fiverr.com/search/gigs'
  },
  {
    id: 8,
    title: 'Data Entry - Product Catalog',
    provider: 'Retail Store',
    logo: '📊',
    budget: '$100-200',
    type: 'Micro Task',
    skills: ['Data Entry'],
    description: 'Enter 500+ product details into database',
    posted: '1 day ago',
    bids: 18,
    rating: 4.4,
    urgent: false,
    platform: 'Upwork',
    applyUrl: 'https://www.upwork.com/jobs'
  },
  {
    id: 9,
    title: 'Mobile App UI Design',
    provider: 'Tech Startup',
    logo: '📲',
    budget: '$800-1500',
    type: 'Project',
    skills: ['Design', 'Programming'],
    description: 'Design UI/UX for fitness tracking mobile app',
    posted: '2 days ago',
    bids: 11,
    rating: 4.8,
    urgent: false,
    platform: 'Upwork',
    applyUrl: 'https://www.upwork.com/jobs'
  },
  {
    id: 10,
    title: 'SEO Blog Post Writing',
    provider: 'Digital Agency',
    logo: '📈',
    budget: '$50-100/post',
    type: 'Fixed Price',
    skills: ['Writing', 'SEO'],
    description: 'Write SEO-optimized blog posts for SaaS company',
    posted: '3 days ago',
    bids: 25,
    rating: 4.7,
    urgent: false,
    platform: 'Upwork',
    applyUrl: 'https://www.upwork.com/jobs'
  },
]

export function GigList({ filters }: any) {
  const [liked, setLiked] = useState<number[]>([])
  const [saved, setSaved] = useState<number[]>([])

  const filteredGigs = useMemo(() => {
    return allGigs.filter(gig => {
      if (filters.search && !gig.title.toLowerCase().includes(filters.search.toLowerCase())) {
        return false
      }
      if (filters.gigType.length > 0 && !filters.gigType.includes(gig.type)) {
        return false
      }
      if (filters.budget && gig.budget !== filters.budget) {
        return false
      }
      if (filters.skills.length > 0 && !filters.skills.some((s: string) => gig.skills.includes(s))) {
        return false
      }
      return true
    }).sort((a, b) => {
      if (filters.sortBy === 'budget-high') {
        return parseInt(b.budget.split('$')[1]) - parseInt(a.budget.split('$')[1])
      }
      if (filters.sortBy === 'urgent') {
        return a.urgent ? -1 : 1
      }
      return 0
    })
  }, [filters])

  const toggleLike = (id: number) => {
    setLiked(prev => prev.includes(id) ? prev.filter(l => l !== id) : [...prev, id])
  }

  const toggleSave = (id: number) => {
    setSaved(prev => prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id])
  }

  const handleApply = (applyUrl: string) => {
    window.open(applyUrl, '_blank')
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-6">
        <p className="text-muted-foreground">
          Showing <span className="font-bold text-foreground">{filteredGigs.length}</span> gigs
        </p>
      </div>

      {filteredGigs.length === 0 ? (
        <div className="bg-card border border-border rounded-xl p-12 text-center">
          <p className="text-muted-foreground text-lg">No gigs found matching your criteria.</p>
          <p className="text-muted-foreground text-sm mt-2">Try adjusting your filters.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredGigs.map(gig => (
            <div
              key={gig.id}
              className="bg-card border border-border rounded-xl p-5 md:p-6 hover:shadow-md hover:border-accent/50 transition"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                {/* Gig Info */}
                <div className="flex-1 min-w-0 group">
                  <div className="flex items-start gap-3 mb-4">
                    <span className="text-3xl flex-shrink-0">{gig.logo}</span>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-bold text-lg text-card-foreground group-hover:text-accent transition break-words">
                        {gig.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{gig.provider}</p>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2 flex-shrink-0">
                  <button
                    onClick={() => toggleLike(gig.id)}
                    className="p-2 text-muted-foreground hover:text-accent hover:bg-accent/10 rounded-lg transition"
                  >
                    <Heart
                      size={20}
                      className={liked.includes(gig.id) ? 'fill-current text-accent' : ''}
                    />
                  </button>
                  <button
                    onClick={() => toggleSave(gig.id)}
                    className="p-2 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition"
                  >
                    <Bookmark
                      size={20}
                      className={saved.includes(gig.id) ? 'fill-current text-primary' : ''}
                    />
                  </button>
                </div>
              </div>

              {/* Details */}
              <div className="flex flex-wrap gap-3 mb-4">
                <div className="flex items-center gap-1 text-sm text-muted-foreground bg-muted rounded-full px-3 py-1">
                  <DollarSign size={14} /> {gig.budget}
                </div>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                  gig.type === 'Project'
                    ? 'bg-accent/10 text-accent'
                    : gig.type === 'Hourly'
                    ? 'bg-primary/10 text-primary'
                    : 'bg-secondary/10 text-secondary'
                }`}>
                  {gig.type}
                </span>
                {gig.urgent && (
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-red-500/10 text-red-600">
                    ⚡ Urgent
                  </span>
                )}
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-4">
                {gig.skills.map(skill => (
                  <span key={skill} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">
                    {skill}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-4 border-t border-border gap-3">
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock size={14} /> {gig.posted}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users size={14} /> {gig.bids} bids
                  </span>
                  <span className="flex items-center gap-1">
                    ⭐ {gig.rating}
                  </span>
                </div>
                <button
                  onClick={() => handleApply(gig.applyUrl)}
                  className="px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition font-medium text-sm flex items-center gap-2 justify-center"
                >
                  Bid Now
                  <ExternalLink size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
