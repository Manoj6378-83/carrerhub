'use client'

import Link from 'next/link'
import { MapPin, DollarSign, Heart, Bookmark } from 'lucide-react'
import { useState } from 'react'

const recommendedJobs = [
  {
    id: 1,
    title: 'Senior React Developer',
    company: 'Tech Solutions Inc',
    logo: '🔷',
    location: 'Remote',
    salary: '$120k - $160k',
    type: 'Full-time',
    match: 95,
    tags: ['React', 'TypeScript', 'Node.js']
  },
  {
    id: 7,
    title: 'Python Backend Developer',
    company: 'StartUp Labs',
    logo: '🚀',
    location: 'Remote',
    salary: '$110k - $150k',
    type: 'Full-time',
    match: 88,
    tags: ['Python', 'Django', 'PostgreSQL']
  },
  {
    id: 4,
    title: 'Data Analyst',
    company: 'Finance Plus',
    logo: '📊',
    location: 'San Francisco, CA',
    salary: '$100k - $140k',
    type: 'Full-time',
    match: 82,
    tags: ['SQL', 'Python', 'Tableau']
  },
  {
    id: 6,
    title: 'Digital Marketing Manager',
    company: 'Growth Agency',
    logo: '📱',
    location: 'Los Angeles, CA',
    salary: '$90k - $130k',
    type: 'Full-time',
    match: 76,
    tags: ['Marketing', 'SEO', 'Analytics']
  }
]

export function RecommendedJobs() {
  const [liked, setLiked] = useState<number[]>([])
  const [saved, setSaved] = useState<number[]>([])

  const toggleLike = (id: number) => {
    setLiked(prev => prev.includes(id) ? prev.filter(l => l !== id) : [...prev, id])
  }

  const toggleSave = (id: number) => {
    setSaved(prev => prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id])
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Recommended for You</h1>
        <p className="text-muted-foreground">Jobs tailored to your profile and preferences</p>
      </div>

      <div className="space-y-4">
        {recommendedJobs.map(job => (
          <div key={job.id} className="bg-card border border-border rounded-xl p-6 hover:shadow-md hover:border-primary/50 transition">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              {/* Left */}
              <div className="flex gap-4 flex-1 min-w-0">
                <span className="text-3xl flex-shrink-0">{job.logo}</span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-lg text-card-foreground line-clamp-2 mb-1">{job.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{job.company}</p>

                  <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin size={14} /> {job.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign size={14} /> {job.salary}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Match Score */}
              <div className="flex items-center gap-4 flex-shrink-0">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg">
                    {job.match}%
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Match</p>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {job.tags.map(tag => (
                  <span key={tag} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
              <Link
                href={`/job/${job.id}`}
                className="flex-1 md:flex-none px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition font-medium text-center"
              >
                View Job
              </Link>
              <button
                onClick={() => toggleLike(job.id)}
                className={`px-4 py-2 border rounded-lg transition font-medium flex items-center gap-2 ${
                  liked.includes(job.id)
                    ? 'border-accent bg-accent/10 text-accent'
                    : 'border-border text-foreground hover:border-accent'
                }`}
              >
                <Heart size={18} className={liked.includes(job.id) ? 'fill-current' : ''} />
                Like
              </button>
              <button
                onClick={() => toggleSave(job.id)}
                className={`px-4 py-2 border rounded-lg transition font-medium flex items-center gap-2 ${
                  saved.includes(job.id)
                    ? 'border-primary bg-primary/10 text-primary'
                    : 'border-border text-foreground hover:border-primary'
                }`}
              >
                <Bookmark size={18} className={saved.includes(job.id) ? 'fill-current' : ''} />
                Save
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
