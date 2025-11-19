'use client'

import Link from 'next/link'
import { MapPin, DollarSign, Heart, Bookmark, ExternalLink } from 'lucide-react'
import { useState, useMemo } from 'react'

interface JobsListProps {
  filters: any
}

const allJobs = [
  {
    id: 1,
    title: 'Senior React Developer',
    company: 'Tech Solutions Inc',
    logo: '🔷',
    location: 'Remote',
    salary: '$120k - $160k',
    type: 'Full-time',
    category: 'Technology',
    tags: ['React', 'TypeScript', 'Node.js'],
    posted: '2 hours ago',
    description: 'Join our team as a Senior React Developer and help build the next generation of web applications.',
    urgent: true,
    rating: 4.8,
    platform: 'Indeed',
    applyUrl: 'https://www.indeed.com/jobs?q=Senior+React+Developer'
  },
  {
    id: 2,
    title: 'UX/UI Designer',
    company: 'Creative Studios',
    logo: '🎨',
    location: 'New York, NY',
    salary: '$80k - $120k',
    type: 'Full-time',
    category: 'Design',
    tags: ['Figma', 'Design', 'UI'],
    posted: '5 hours ago',
    description: 'Create beautiful and intuitive user interfaces for our suite of products.',
    urgent: false,
    rating: 4.6,
    platform: 'LinkedIn',
    applyUrl: 'https://www.linkedin.com/jobs/search/?keywords=UX%2FUI+Designer'
  },
  {
    id: 3,
    title: 'Content Writer (Freelance)',
    company: 'Digital Media Co',
    logo: '📝',
    location: 'Anywhere',
    salary: '$50-100/hour',
    type: 'Freelance',
    category: 'Writing',
    tags: ['Writing', 'SEO', 'Content'],
    posted: '1 day ago',
    description: 'Write engaging content for our blog and social media channels.',
    urgent: false,
    rating: 4.9,
    platform: 'Naukri',
    applyUrl: 'https://www.naukri.com/jobs-freelance-writing'
  },
  {
    id: 4,
    title: 'Data Analyst',
    company: 'Finance Plus',
    logo: '📊',
    location: 'San Francisco, CA',
    salary: '$100k - $140k',
    type: 'Full-time',
    category: 'Business',
    tags: ['SQL', 'Python', 'Tableau'],
    posted: '3 hours ago',
    description: 'Analyze complex data sets and provide actionable insights to drive business decisions.',
    urgent: true,
    rating: 4.7,
    platform: 'LinkedIn',
    applyUrl: 'https://www.linkedin.com/jobs/search/?keywords=Data+Analyst'
  },
  {
    id: 5,
    title: 'Virtual Assistant',
    company: 'Freelance Hub',
    logo: '🤝',
    location: 'Remote',
    salary: '$20-35/hour',
    type: 'Part-time',
    category: 'Business',
    tags: ['Admin', 'Communication', 'Organization'],
    posted: '6 hours ago',
    description: 'Provide administrative support to busy entrepreneurs and executives.',
    urgent: false,
    rating: 4.5,
    platform: 'Indeed',
    applyUrl: 'https://www.indeed.com/jobs?q=Virtual+Assistant'
  },
  {
    id: 6,
    title: 'Digital Marketing Manager',
    company: 'Growth Agency',
    logo: '📱',
    location: 'Los Angeles, CA',
    salary: '$90k - $130k',
    type: 'Full-time',
    category: 'Sales',
    tags: ['Marketing', 'SEO', 'Analytics'],
    posted: '4 hours ago',
    description: 'Lead our digital marketing efforts and drive growth for our clients.',
    urgent: false,
    rating: 4.4,
    platform: 'Glassdoor',
    applyUrl: 'https://www.glassdoor.com/Job/jobs.htm?sc.keyword=Digital+Marketing+Manager'
  },
  {
    id: 7,
    title: 'Python Backend Developer',
    company: 'StartUp Labs',
    logo: '🚀',
    location: 'Remote',
    salary: '$110k - $150k',
    type: 'Full-time',
    category: 'Technology',
    tags: ['Python', 'Django', 'PostgreSQL'],
    posted: '8 hours ago',
    description: 'Build scalable backend systems for our next-generation platform.',
    urgent: true,
    rating: 4.8,
    platform: 'Indeed',
    applyUrl: 'https://www.indeed.com/jobs?q=Python+Backend+Developer'
  },
  {
    id: 8,
    title: 'Graphic Designer',
    company: 'Design Studio Co',
    logo: '🎨',
    location: 'Remote',
    salary: '$70k - $100k',
    type: 'Full-time',
    category: 'Design',
    tags: ['Adobe', 'Branding', 'Illustration'],
    posted: '12 hours ago',
    description: 'Create stunning visual designs for print and digital media.',
    urgent: false,
    rating: 4.7,
    platform: 'LinkedIn',
    applyUrl: 'https://www.linkedin.com/jobs/search/?keywords=Graphic+Designer'
  },
  {
    id: 9,
    title: 'E-commerce Manager',
    company: 'Online Retail Plus',
    logo: '🛍️',
    location: 'UK',
    salary: '$60k - $85k',
    type: 'Full-time',
    category: 'Business',
    tags: ['E-commerce', 'Shopify', 'Analytics'],
    posted: '1 day ago',
    description: 'Manage and optimize our e-commerce platform for maximum conversions.',
    urgent: false,
    rating: 4.6,
    platform: 'Naukri',
    applyUrl: 'https://www.naukri.com/jobs'
  },
  {
    id: 10,
    title: 'Customer Service Rep',
    company: 'Support Central',
    logo: '☎️',
    location: 'Remote',
    salary: '$30k - $45k',
    type: 'Full-time',
    category: 'Customer Service',
    tags: ['Support', 'Communication', 'CRM'],
    posted: '2 days ago',
    description: 'Provide excellent customer support and resolve customer issues.',
    urgent: false,
    rating: 4.3,
    platform: 'Indeed',
    applyUrl: 'https://www.indeed.com/jobs?q=Customer+Service'
  },
  {
    id: 11,
    title: 'SEO Specialist',
    company: 'Digital Marketing Co',
    logo: '📈',
    location: 'Canada',
    salary: '$55k - $80k',
    type: 'Full-time',
    category: 'Sales',
    tags: ['SEO', 'Analytics', 'Content'],
    posted: '3 days ago',
    description: 'Drive organic traffic and improve search rankings for our clients.',
    urgent: false,
    rating: 4.5,
    platform: 'Glassdoor',
    applyUrl: 'https://www.glassdoor.com/Job/jobs.htm?sc.keyword=SEO+Specialist'
  },
  {
    id: 12,
    title: 'Technical Writer',
    company: 'Software Solutions',
    logo: '📚',
    location: 'Remote',
    salary: '$65k - $95k',
    type: 'Full-time',
    category: 'Writing',
    tags: ['Documentation', 'Technical', 'Writing'],
    posted: '4 days ago',
    description: 'Create technical documentation and user guides for our software products.',
    urgent: false,
    rating: 4.6,
    platform: 'LinkedIn',
    applyUrl: 'https://www.linkedin.com/jobs/search/?keywords=Technical+Writer'
  }
]

export function JobsList({ filters }: JobsListProps) {
  const [liked, setLiked] = useState<number[]>([])
  const [saved, setSaved] = useState<number[]>([])

  const filteredJobs = useMemo(() => {
    return allJobs.filter(job => {
      if (filters.search && !job.title.toLowerCase().includes(filters.search.toLowerCase()) && 
          !job.company.toLowerCase().includes(filters.search.toLowerCase())) {
        return false
      }
      if (filters.jobType.length > 0 && !filters.jobType.includes(job.type)) {
        return false
      }
      if (filters.location && job.location !== filters.location) {
        return false
      }
      if (filters.category && job.category !== filters.category) {
        return false
      }
      return true
    }).sort((a, b) => {
      if (filters.sortBy === 'salary-high') {
        return parseInt(b.salary.split('$')[1]) - parseInt(a.salary.split('$')[1])
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
          Showing <span className="font-bold text-foreground">{filteredJobs.length}</span> jobs
        </p>
      </div>

      {filteredJobs.length === 0 ? (
        <div className="bg-card border border-border rounded-xl p-12 text-center">
          <p className="text-muted-foreground text-lg">No jobs found matching your criteria.</p>
          <p className="text-muted-foreground text-sm mt-2">Try adjusting your filters.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredJobs.map(job => (
            <div
              key={job.id}
              className="bg-card border border-border rounded-xl p-5 md:p-6 hover:shadow-md hover:border-primary/50 transition"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                {/* Job Info */}
                <Link href={`/job/${job.id}`} className="flex-1 min-w-0 group">
                  <div className="flex items-start gap-3 mb-4">
                    <span className="text-3xl flex-shrink-0">{job.logo}</span>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-bold text-lg text-card-foreground group-hover:text-primary transition break-words">
                        {job.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{job.company}</p>
                    </div>
                  </div>
                </Link>

                {/* Actions */}
                <div className="flex gap-2 flex-shrink-0">
                  <button
                    onClick={() => toggleLike(job.id)}
                    className="p-2 text-muted-foreground hover:text-accent hover:bg-accent/10 rounded-lg transition"
                  >
                    <Heart
                      size={20}
                      className={liked.includes(job.id) ? 'fill-current text-accent' : ''}
                    />
                  </button>
                  <button
                    onClick={() => toggleSave(job.id)}
                    className="p-2 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition"
                  >
                    <Bookmark
                      size={20}
                      className={saved.includes(job.id) ? 'fill-current text-primary' : ''}
                    />
                  </button>
                </div>
              </div>

              {/* Details */}
              <div className="flex flex-wrap gap-3 mb-4">
                <div className="flex items-center gap-1 text-sm text-muted-foreground bg-muted rounded-full px-3 py-1">
                  <MapPin size={14} /> {job.location}
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground bg-muted rounded-full px-3 py-1">
                  <DollarSign size={14} /> {job.salary}
                </div>
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
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-4 border-t border-border gap-3">
                <div className="flex items-center justify-between flex-1">
                  <span className="text-xs text-muted-foreground">{job.posted}</span>
                  <span className="inline-flex items-center gap-1 text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">
                    <ExternalLink size={12} />
                    {job.platform}
                  </span>
                </div>
                <button
                  onClick={() => handleApply(job.applyUrl)}
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition font-medium text-sm flex items-center gap-2 justify-center"
                >
                  Apply Now
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
