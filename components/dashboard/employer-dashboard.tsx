'use client'

import Link from 'next/link'
import { TrendingUp, Users, Eye, Clock, LogOut, Plus } from 'lucide-react'
import { useRouter } from 'next/navigation'

export function EmployerDashboard({ user }: { user: any }) {
  const router = useRouter()

  const stats = [
    { label: 'Active Jobs', value: '12', icon: TrendingUp, color: 'text-primary' },
    { label: 'Applications', value: '234', icon: Users, color: 'text-accent' },
    { label: 'Profile Views', value: '1,247', icon: Eye, color: 'text-secondary' },
    { label: 'Open Positions', value: '5', icon: Clock, color: 'text-orange-600' }
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
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Employer Dashboard</h1>
            <p className="text-muted-foreground">Manage jobs, applications, and candidates</p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <Link
              href="/post-job"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition font-medium flex items-center gap-2"
            >
              <Plus size={18} />
              <span className="hidden sm:inline">Post Job</span>
            </Link>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-destructive text-primary-foreground rounded-lg hover:opacity-90 transition font-medium flex items-center gap-2"
            >
              <LogOut size={18} />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <div key={stat.label} className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-start justify-between mb-3">
                <Icon className={`size-5 ${stat.color}`} />
              </div>
              <p className="text-muted-foreground text-sm mb-1">{stat.label}</p>
              <p className="text-3xl font-bold text-foreground">{stat.value}</p>
            </div>
          )
        })}
      </div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Active Jobs */}
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Active Job Listings</h2>
              <Link href="/dashboard/jobs" className="text-primary hover:text-primary/80 text-sm font-medium">
                View all →
              </Link>
            </div>
            <div className="space-y-3">
              {[
                { title: 'Senior React Developer', applications: 34, views: 456, posted: '2 days ago' },
                { title: 'UX/UI Designer', applications: 28, views: 342, posted: '5 days ago' },
                { title: 'Data Analyst', applications: 19, views: '289', posted: '1 week ago' },
                { title: 'Backend Developer', applications: 41, views: 523, posted: '3 days ago' }
              ].map((job, i) => (
                <div key={i} className="p-4 bg-muted/30 border border-border rounded-lg hover:border-primary/50 transition cursor-pointer">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-foreground">{job.title}</h3>
                    <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">Active</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{job.applications} applications</span>
                    <span>{job.views} views</span>
                    <span className="ml-auto">{job.posted}</span>
                  </div>
                </div>
              ))}
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
                { name: 'Sarah Johnson', position: 'Senior React Developer', status: 'Review' },
                { name: 'Mike Chen', position: 'UX/UI Designer', status: 'Interview' },
                { name: 'Emma Williams', position: 'Data Analyst', status: 'Applied' },
                { name: 'Alex Rodriguez', position: 'Senior React Developer', status: 'Review' }
              ].map((app, i) => (
                <div key={i} className="p-4 bg-muted/30 border border-border rounded-lg hover:border-primary/50 transition">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="font-bold text-foreground">{app.name}</p>
                      <p className="text-sm text-muted-foreground">{app.position}</p>
                    </div>
                    <button className="text-primary hover:text-primary/80 font-medium text-sm px-3 py-1 border border-primary rounded-lg transition">
                      View
                    </button>
                  </div>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                    app.status === 'Interview'
                      ? 'bg-accent/10 text-accent'
                      : app.status === 'Review'
                      ? 'bg-primary/10 text-primary'
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {app.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Sidebar */}
        <div className="space-y-6">
          {/* Company Profile */}
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-bold mb-4">Company Profile</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Company Name</p>
                <p className="font-bold text-foreground">Tech Solutions Inc</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Profile Completeness</p>
                <div className="w-full bg-muted rounded-full h-2 mt-2">
                  <div className="bg-primary rounded-full h-2 w-3/4"></div>
                </div>
                <p className="text-xs text-muted-foreground mt-1">75% Complete</p>
              </div>
              <Link
                href="/company/profile"
                className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition font-medium text-center text-sm"
              >
                Edit Profile
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {[
                { label: 'Post New Job', href: '/post-job' },
                { label: 'View Analytics', href: '#' },
                { label: 'Pricing Plans', href: '/pricing' },
                { label: 'Help & Support', href: '#' }
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block p-3 bg-muted/30 border border-border rounded-lg hover:border-primary/50 transition text-sm font-medium text-foreground text-center"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Subscription */}
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-6">
            <h3 className="font-bold mb-2">Upgrade Plan</h3>
            <p className="text-sm text-muted-foreground mb-4">Get access to premium features and analytics</p>
            <button className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition font-medium text-sm">
              View Plans
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
