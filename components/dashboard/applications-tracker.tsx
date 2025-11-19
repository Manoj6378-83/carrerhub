'use client'

import Link from 'next/link'
import { Calendar, MapPin, DollarSign, CheckCircle, Clock, AlertCircle, Download } from 'lucide-react'

const applications = [
  {
    id: 1,
    position: 'Senior React Developer',
    company: 'Tech Solutions Inc',
    logo: '🔷',
    appliedDate: '2025-01-15',
    status: 'shortlisted',
    salary: '$120k - $160k',
    location: 'Remote',
    nextStep: 'Interview scheduled for Jan 22'
  },
  {
    id: 2,
    position: 'UX/UI Designer',
    company: 'Creative Studios',
    logo: '🎨',
    appliedDate: '2025-01-12',
    status: 'reviewing',
    salary: '$80k - $120k',
    location: 'New York, NY',
    nextStep: 'Under review - usually takes 3-5 days'
  },
  {
    id: 3,
    position: 'Content Writer',
    company: 'Digital Media Co',
    logo: '📝',
    appliedDate: '2025-01-10',
    status: 'applied',
    salary: '$50-100/hour',
    location: 'Anywhere',
    nextStep: 'Waiting to hear back'
  },
  {
    id: 4,
    position: 'Data Analyst',
    company: 'Finance Plus',
    logo: '📊',
    appliedDate: '2025-01-08',
    status: 'rejected',
    salary: '$100k - $140k',
    location: 'San Francisco, CA',
    nextStep: 'Application rejected'
  },
  {
    id: 5,
    position: 'Virtual Assistant',
    company: 'Freelance Hub',
    logo: '🤝',
    appliedDate: '2025-01-05',
    status: 'hired',
    salary: '$20-35/hour',
    location: 'Remote',
    nextStep: 'Congratulations! You were hired!'
  }
]

export function ApplicationsTracker() {
  const stats = {
    total: applications.length,
    shortlisted: applications.filter(a => a.status === 'shortlisted').length,
    reviewing: applications.filter(a => a.status === 'reviewing').length,
    hired: applications.filter(a => a.status === 'hired').length
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'shortlisted': return <CheckCircle className="size-5 text-accent" />
      case 'reviewing': return <Clock className="size-5 text-primary" />
      case 'rejected': return <AlertCircle className="size-5 text-destructive" />
      case 'hired': return <CheckCircle className="size-5 text-accent fill-accent" />
      default: return <Clock className="size-5 text-muted-foreground" />
    }
  }

  const getStatusLabel = (status: string) => {
    const labels: Record<string, string> = {
      shortlisted: 'Shortlisted',
      reviewing: 'Under Review',
      applied: 'Applied',
      rejected: 'Rejected',
      hired: 'Hired'
    }
    return labels[status] || 'Applied'
  }

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      shortlisted: 'bg-accent/10 text-accent',
      reviewing: 'bg-primary/10 text-primary',
      applied: 'bg-muted text-muted-foreground',
      rejected: 'bg-destructive/10 text-destructive',
      hired: 'bg-green-500/10 text-green-600'
    }
    return colors[status] || 'bg-muted text-muted-foreground'
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Application Tracker</h1>
        <p className="text-muted-foreground">Monitor your job applications and responses</p>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-card border border-border rounded-xl p-6">
          <p className="text-muted-foreground text-sm mb-1">Total Applications</p>
          <p className="text-3xl font-bold text-foreground">{stats.total}</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-6">
          <p className="text-muted-foreground text-sm mb-1">Shortlisted</p>
          <p className="text-3xl font-bold text-accent">{stats.shortlisted}</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-6">
          <p className="text-muted-foreground text-sm mb-1">Under Review</p>
          <p className="text-3xl font-bold text-primary">{stats.reviewing}</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-6">
          <p className="text-muted-foreground text-sm mb-1">Hired</p>
          <p className="text-3xl font-bold text-green-600">{stats.hired}</p>
        </div>
      </div>

      {/* Applications List */}
      <div className="space-y-4">
        {applications.map(app => (
          <div key={app.id} className="bg-card border border-border rounded-xl p-6 hover:shadow-md hover:border-primary/50 transition">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              {/* Left - Job Info */}
              <div className="flex gap-4 flex-1 min-w-0">
                <span className="text-3xl flex-shrink-0">{app.logo}</span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-lg text-card-foreground mb-1 line-clamp-2">{app.position}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{app.company}</p>

                  <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <MapPin size={14} /> {app.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign size={14} /> {app.salary}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} /> Applied {app.appliedDate}
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground bg-muted/30 p-2 rounded">
                    {app.nextStep}
                  </p>
                </div>
              </div>

              {/* Right - Status & Actions */}
              <div className="flex flex-col items-start md:items-end gap-3">
                <div className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm ${getStatusColor(app.status)}`}>
                  {getStatusIcon(app.status)}
                  {getStatusLabel(app.status)}
                </div>

                <div className="flex gap-2">
                  <Link
                    href={`/job/${app.id}`}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition font-medium text-sm"
                  >
                    View Job
                  </Link>
                  {app.status === 'shortlisted' && (
                    <button className="px-4 py-2 border border-border rounded-lg hover:bg-muted transition font-medium text-sm">
                      Interview Prep
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Filters or Empty State */}
      <div className="mt-8 p-6 bg-muted/30 border border-border rounded-xl text-center">
        <p className="text-muted-foreground">
          Track your applications in real-time. Check back here for updates on your submissions.
        </p>
      </div>
    </div>
  )
}
