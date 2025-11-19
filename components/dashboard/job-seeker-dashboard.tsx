'use client'

import Link from 'next/link'
import { Heart, Bookmark, MessageSquare, TrendingUp, LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'

export function JobSeekerDashboard({ user }: { user: any }) {
  const router = useRouter()

  const stats = [
    { label: 'Applications', value: '8', icon: MessageSquare },
    { label: 'Saved Jobs', value: '24', icon: Bookmark },
    { label: 'Profile Views', value: '142', icon: TrendingUp },
    { label: 'Shortlisted', value: '3', icon: Heart }
  ]

  const handleLogout = () => {
    localStorage.removeItem('user')
    router.push('/')
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 md:p-8 mb-8">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Welcome back, {user.fullName.split(' ')[0]}</h1>
            <p className="text-muted-foreground">Your dashboard is ready for action</p>
          </div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-destructive text-primary-foreground rounded-lg hover:opacity-90 transition font-medium flex items-center gap-2"
          >
            <LogOut size={18} />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <div key={stat.label} className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-start justify-between mb-3">
                <Icon className="size-5 text-muted-foreground" />
                <span className="text-2xl font-bold text-primary">{stat.value}</span>
              </div>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </div>
          )
        })}
      </div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Quick Actions */}
          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <Link
                href="/jobs"
                className="px-4 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition font-medium text-center"
              >
                Browse Jobs
              </Link>
              <Link
                href="/profile"
                className="px-4 py-3 border border-primary text-primary rounded-lg hover:bg-primary/5 transition font-medium text-center"
              >
                Edit Profile
              </Link>
            </div>
          </div>

          {/* Recent Applications */}
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Recent Applications</h2>
              <Link href="#" className="text-primary hover:text-primary/80 text-sm font-medium">
                View all →
              </Link>
            </div>
            <div className="space-y-3">
              {[
                { company: 'Tech Solutions Inc', position: 'Senior React Developer', status: 'Under Review' },
                { company: 'Creative Studios', position: 'UX/UI Designer', status: 'Shortlisted' },
                { company: 'Digital Media Co', position: 'Content Writer', status: 'Applied' }
              ].map((app, i) => (
                <div key={i} className="p-4 bg-muted/30 border border-border rounded-lg flex items-start justify-between">
                  <div>
                    <p className="font-bold text-foreground">{app.position}</p>
                    <p className="text-sm text-muted-foreground">{app.company}</p>
                  </div>
                  <span className={`text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap ${
                    app.status === 'Shortlisted'
                      ? 'bg-accent/10 text-accent'
                      : app.status === 'Under Review'
                      ? 'bg-primary/10 text-primary'
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {app.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Saved Jobs */}
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Saved Jobs</h2>
              <Link href="#" className="text-primary hover:text-primary/80 text-sm font-medium">
                View all →
              </Link>
            </div>
            <div className="space-y-3">
              {[
                { company: 'StartUp Labs', position: 'Python Backend Developer', salary: '$110k - $150k' },
                { company: 'Finance Plus', position: 'Data Analyst', salary: '$100k - $140k' },
                { company: 'Software Solutions', position: 'Technical Writer', salary: '$65k - $95k' }
              ].map((job, i) => (
                <div key={i} className="p-4 bg-muted/30 border border-border rounded-lg flex items-start justify-between">
                  <div>
                    <p className="font-bold text-foreground">{job.position}</p>
                    <p className="text-sm text-muted-foreground">{job.company}</p>
                  </div>
                  <p className="text-sm font-bold text-foreground whitespace-nowrap ml-4">{job.salary}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Sidebar */}
        <div className="space-y-6">
          {/* Profile Completeness */}
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-bold mb-4">Profile Completeness</h3>
            <div className="space-y-3">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Progress</span>
                  <span className="text-sm font-bold text-primary">65%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary rounded-full h-2 w-2/3"></div>
                </div>
              </div>
              <ul className="text-sm space-y-2 mt-4">
                <li className="flex items-center gap-2">
                  <span className="text-accent">✓</span>
                  <span className="text-muted-foreground">Profile photo added</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-muted">○</span>
                  <span className="text-muted-foreground">Resume added</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">✓</span>
                  <span className="text-muted-foreground">Experience added</span>
                </li>
              </ul>
            </div>
            <Link
              href="/profile"
              className="mt-4 w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition font-medium text-center block text-sm"
            >
              Complete Profile
            </Link>
          </div>

          {/* Recommended for You */}
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-bold mb-4">Recommended for You</h3>
            <div className="space-y-3">
              {[
                'React Developer Jobs',
                'Remote Full-time',
                '$120k+ Salary'
              ].map((rec, i) => (
                <Link
                  key={i}
                  href="#"
                  className="p-3 bg-muted/30 border border-border rounded-lg hover:border-primary/50 transition text-sm font-medium text-foreground block text-center"
                >
                  {rec}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
