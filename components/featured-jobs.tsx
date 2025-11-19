'use client'

import Link from 'next/link'
import { MapPin, DollarSign, Briefcase, Heart } from 'lucide-react'
import { useState } from 'react'

const jobs = [
  {
    id: 1,
    title: 'Senior React Developer',
    company: 'Tech Solutions Inc',
    logo: '🔷',
    location: 'Remote',
    salary: '$120k - $160k',
    type: 'Full-time',
    tags: ['React', 'TypeScript', 'Node.js'],
    posted: '2 hours ago',
    urgent: true
  },
  {
    id: 2,
    title: 'UX/UI Designer',
    company: 'Creative Studios',
    logo: '🎨',
    location: 'New York, NY',
    salary: '$80k - $120k',
    type: 'Full-time',
    tags: ['Figma', 'Design', 'UI'],
    posted: '5 hours ago',
    urgent: false
  },
  {
    id: 3,
    title: 'Content Writer (Freelance)',
    company: 'Digital Media Co',
    logo: '📝',
    location: 'Anywhere',
    salary: '$50-100/hour',
    type: 'Freelance',
    tags: ['Writing', 'SEO', 'Content'],
    posted: '1 day ago',
    urgent: false
  },
  {
    id: 4,
    title: 'Data Analyst',
    company: 'Finance Plus',
    logo: '📊',
    location: 'San Francisco, CA',
    salary: '$100k - $140k',
    type: 'Full-time',
    tags: ['SQL', 'Python', 'Tableau'],
    posted: '3 hours ago',
    urgent: true
  },
  {
    id: 5,
    title: 'Virtual Assistant',
    company: 'Freelance Hub',
    logo: '🤝',
    location: 'Remote',
    salary: '$20-35/hour',
    type: 'Part-time',
    tags: ['Admin', 'Communication', 'Organization'],
    posted: '6 hours ago',
    urgent: false
  },
  {
    id: 6,
    title: 'Digital Marketing Manager',
    company: 'Growth Agency',
    logo: '📱',
    location: 'Los Angeles, CA',
    salary: '$90k - $130k',
    type: 'Full-time',
    tags: ['Marketing', 'SEO', 'Analytics'],
    posted: '4 hours ago',
    urgent: false
  }
]

export function FeaturedJobs() {
  const [liked, setLiked] = useState<number[]>([])

  const toggleLike = (id: number) => {
    setLiked(prev => prev.includes(id) ? prev.filter(l => l !== id) : [...prev, id])
  }

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="space-y-4 mb-12">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Featured Opportunities</h2>
              <p className="text-muted-foreground mt-2">Discover the latest job openings and gig work</p>
            </div>
            <Link href="/jobs" className="text-primary hover:text-primary/80 transition font-medium">
              View all →
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {jobs.map(job => (
            <div
              key={job.id}
              className="bg-card border border-border rounded-xl p-5 md:p-6 hover:shadow-md hover:border-primary/50 transition"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-start gap-3 flex-1 min-w-0">
                  <span className="text-3xl flex-shrink-0">{job.logo}</span>
                  <div className="min-w-0">
                    <h3 className="font-bold text-base md:text-lg text-card-foreground line-clamp-2 break-words">
                      {job.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{job.company}</p>
                  </div>
                </div>
                <button
                  onClick={() => toggleLike(job.id)}
                  className="flex-shrink-0 text-muted-foreground hover:text-accent transition"
                >
                  <Heart
                    size={20}
                    className={liked.includes(job.id) ? 'fill-current text-accent' : ''}
                  />
                </button>
              </div>

              {/* Info Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                <div className="flex items-center gap-1 text-xs md:text-sm text-muted-foreground bg-muted rounded-full px-3 py-1">
                  <MapPin size={14} /> {job.location}
                </div>
                <div className="flex items-center gap-1 text-xs md:text-sm text-muted-foreground bg-muted rounded-full px-3 py-1">
                  <DollarSign size={14} /> {job.salary}
                </div>
              </div>

              {/* Job Type Badge */}
              <div className="mb-4">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                  job.type === 'Full-time'
                    ? 'bg-primary/10 text-primary'
                    : job.type === 'Freelance'
                    ? 'bg-accent/10 text-accent'
                    : 'bg-secondary/10 text-secondary'
                }`}>
                  {job.type}
                </span>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-4">
                {job.tags.map(tag => (
                  <span key={tag} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-xs text-muted-foreground">{job.posted}</span>
                <Link
                  href={`/job/${job.id}`}
                  className="text-primary hover:text-primary/80 font-medium text-sm transition"
                >
                  View Job →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
