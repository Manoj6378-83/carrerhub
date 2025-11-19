'use client'

import Link from 'next/link'
import { Heart } from 'lucide-react'
import { useState } from 'react'

const similarJobs = [
  {
    id: 7,
    title: 'Python Backend Developer',
    company: 'StartUp Labs',
    logo: '🚀',
    salary: '$110k - $150k',
    type: 'Full-time',
    liked: false
  },
  {
    id: 3,
    title: 'Content Writer (Freelance)',
    company: 'Digital Media Co',
    logo: '📝',
    salary: '$50-100/hour',
    type: 'Freelance',
    liked: false
  },
  {
    id: 8,
    title: 'Graphic Designer',
    company: 'Design Studio Co',
    logo: '🎨',
    salary: '$70k - $100k',
    type: 'Full-time',
    liked: false
  },
  {
    id: 12,
    title: 'Technical Writer',
    company: 'Software Solutions',
    logo: '📚',
    salary: '$65k - $95k',
    type: 'Full-time',
    liked: false
  }
]

export function SimilarJobs({ jobId }: { jobId: string }) {
  const [liked, setLiked] = useState<number[]>([])

  const toggleLike = (id: number) => {
    setLiked(prev => prev.includes(id) ? prev.filter(l => l !== id) : [...prev, id])
  }

  return (
    <div className="bg-card border border-border rounded-xl p-6 space-y-4 sticky top-24">
      <h3 className="text-xl font-bold text-card-foreground">Similar Jobs</h3>
      <div className="space-y-3">
        {similarJobs.map(job => (
          <Link
            key={job.id}
            href={`/job/${job.id}`}
            className="block p-4 bg-muted/30 border border-border rounded-lg hover:border-primary/50 transition group"
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <span className="text-2xl flex-shrink-0">{job.logo}</span>
              <button
                onClick={(e) => {
                  e.preventDefault()
                  toggleLike(job.id)
                }}
                className="text-muted-foreground hover:text-accent transition"
              >
                <Heart
                  size={16}
                  className={liked.includes(job.id) ? 'fill-current text-accent' : ''}
                />
              </button>
            </div>
            <h4 className="font-bold text-sm text-card-foreground group-hover:text-primary transition line-clamp-2 mb-1">
              {job.title}
            </h4>
            <p className="text-xs text-muted-foreground mb-2">{job.company}</p>
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                {job.type}
              </span>
              <span className="text-xs font-bold text-foreground">{job.salary}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
