'use client'

import Link from 'next/link'
import { MapPin, DollarSign, Heart, Trash2, Clock } from 'lucide-react'
import { useState } from 'react'

const savedJobs = [
  {
    id: 1,
    title: 'Senior React Developer',
    company: 'Tech Solutions Inc',
    logo: '🔷',
    location: 'Remote',
    salary: '$120k - $160k',
    type: 'Full-time',
    tags: ['React', 'TypeScript', 'Node.js'],
    savedDate: '2025-01-15',
    posted: '2 hours ago'
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
    savedDate: '2025-01-14',
    posted: '3 hours ago'
  },
  {
    id: 7,
    title: 'Python Backend Developer',
    company: 'StartUp Labs',
    logo: '🚀',
    location: 'Remote',
    salary: '$110k - $150k',
    type: 'Full-time',
    tags: ['Python', 'Django', 'PostgreSQL'],
    savedDate: '2025-01-13',
    posted: '8 hours ago'
  },
  {
    id: 12,
    title: 'Technical Writer',
    company: 'Software Solutions',
    logo: '📚',
    location: 'Remote',
    salary: '$65k - $95k',
    type: 'Full-time',
    tags: ['Documentation', 'Technical', 'Writing'],
    savedDate: '2025-01-12',
    posted: '4 days ago'
  }
]

export function SavedJobs() {
  const [jobs, setJobs] = useState(savedJobs)

  const handleRemove = (id: number) => {
    setJobs(jobs.filter(job => job.id !== id))
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Saved Jobs</h1>
        <p className="text-muted-foreground">{jobs.length} jobs saved for later</p>
      </div>

      {jobs.length === 0 ? (
        <div className="bg-card border border-border rounded-xl p-12 text-center">
          <Heart size={48} className="mx-auto text-muted-foreground mb-4 opacity-50" />
          <p className="text-lg font-medium text-foreground mb-2">No saved jobs yet</p>
          <p className="text-muted-foreground mb-6">Start exploring and save jobs you're interested in</p>
          <Link href="/jobs" className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition font-medium inline-block">
            Browse Jobs
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {jobs.map(job => (
            <div key={job.id} className="bg-card border border-border rounded-xl p-6 hover:shadow-md hover:border-primary/50 transition">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                {/* Left */}
                <Link href={`/job/${job.id}`} className="flex gap-4 flex-1 min-w-0 group">
                  <span className="text-3xl flex-shrink-0">{job.logo}</span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-lg text-card-foreground group-hover:text-primary transition line-clamp-2 mb-1">
                      {job.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">{job.company}</p>

                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <MapPin size={14} /> {job.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign size={14} /> {job.salary}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} /> {job.posted}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {job.tags.map(tag => (
                        <span key={tag} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>

                {/* Right */}
                <div className="flex gap-2 flex-shrink-0">
                  <Link
                    href={`/job/${job.id}`}
                    className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition font-medium text-sm whitespace-nowrap"
                  >
                    Apply Now
                  </Link>
                  <button
                    onClick={() => handleRemove(job.id)}
                    className="px-3 py-2 border border-destructive text-destructive rounded-lg hover:bg-destructive/5 transition"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
