'use client'

import { MapPin, DollarSign, Heart, Bookmark, Share2, Flag, ExternalLink } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

const jobsData: Record<string, any> = {
  '1': {
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
    rating: 4.8,
    urgent: true,
    applyUrl: 'https://www.indeed.com/jobs?q=Senior+React+Developer',
    platform: 'Indeed',
    fullDescription: `
    We're looking for an experienced Senior React Developer to join our growing team at Tech Solutions Inc. You'll be working on cutting-edge web applications that serve millions of users.
    
    Key Responsibilities:
    • Design and implement robust React components and applications
    • Collaborate with UX/UI designers to create intuitive user interfaces
    • Optimize application performance and ensure scalability
    • Participate in code reviews and mentor junior developers
    • Contribute to technical documentation and best practices
    
    Requirements:
    • 5+ years of professional React development experience
    • Strong proficiency in TypeScript
    • Experience with Node.js and backend integration
    • Knowledge of testing frameworks (Jest, React Testing Library)
    • Understanding of web performance optimization
    • Experience with modern development tools and git workflows
    
    Nice to Have:
    • Experience with Next.js
    • Knowledge of GraphQL
    • Experience with CI/CD pipelines
    • Contributions to open-source projects
    
    Benefits:
    • Competitive salary and performance bonuses
    • Flexible work arrangements (Remote)
    • Comprehensive health insurance
    • Professional development budget
    • Unlimited PTO
    • Stock options
    `,
    applicants: 234,
    views: 1205,
    aboutCompany: 'Tech Solutions Inc is a leading software development company specializing in enterprise solutions.',
    companySize: '500+ employees',
    companyRating: 4.8,
    companyReviews: 234
  },
  '2': {
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
    rating: 4.6,
    urgent: false,
    applyUrl: 'https://www.linkedin.com/jobs/search/?keywords=UX%2FUI+Designer',
    platform: 'LinkedIn',
    fullDescription: `
    Creative Studios is seeking a talented UX/UI Designer to join our creative team. You'll work on designing user experiences for multiple product lines.
    
    Key Responsibilities:
    • Create wireframes, mockups, and prototypes
    • Collaborate with product and engineering teams
    • Conduct user research and usability testing
    • Develop design systems and style guides
    • Iterate on designs based on user feedback
    
    Requirements:
    • 3+ years of UX/UI design experience
    • Proficiency in Figma or similar design tools
    • Understanding of design principles and user psychology
    • Strong portfolio demonstrating design process
    • Excellent communication and collaboration skills
    `,
    applicants: 156,
    views: 892,
    aboutCompany: 'Creative Studios is a digital design agency focused on creating exceptional user experiences.',
    companySize: '100-200 employees',
    companyRating: 4.6,
    companyReviews: 189
  }
}

export function JobDetail({ jobId }: { jobId: string }) {
  const [liked, setLiked] = useState(false)
  const [saved, setSaved] = useState(false)

  const job = jobsData[jobId] || jobsData['1']

  const handleApplyClick = () => {
    window.open(job.applyUrl, '_blank')
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-card border border-border rounded-xl p-6 md:p-8">
        <div className="flex items-start justify-between gap-4 mb-6">
          <div className="flex items-start gap-4">
            <span className="text-5xl">{job.logo}</span>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-card-foreground mb-2">
                {job.title}
              </h1>
              <Link
                href={`/company/${job.company.toLowerCase()}`}
                className="text-primary hover:text-primary/80 font-medium"
              >
                {job.company}
              </Link>
            </div>
          </div>
          <div className="flex gap-2 flex-shrink-0">
            <button
              onClick={() => setLiked(!liked)}
              className="p-3 text-muted-foreground hover:text-accent hover:bg-accent/10 rounded-lg transition"
            >
              <Heart
                size={20}
                className={liked ? 'fill-current text-accent' : ''}
              />
            </button>
            <button
              onClick={() => setSaved(!saved)}
              className="p-3 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition"
            >
              <Bookmark
                size={20}
                className={saved ? 'fill-current text-primary' : ''}
              />
            </button>
            <button className="p-3 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition">
              <Share2 size={20} />
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <p className="text-muted-foreground text-sm">Salary</p>
            <p className="font-bold text-lg">{job.salary}</p>
          </div>
          <div>
            <p className="text-muted-foreground text-sm">Job Type</p>
            <p className="font-bold text-lg">{job.type}</p>
          </div>
          <div>
            <p className="text-muted-foreground text-sm">Location</p>
            <p className="font-bold text-lg">{job.location}</p>
          </div>
          <div>
            <p className="text-muted-foreground text-sm">Posted</p>
            <p className="font-bold text-lg">{job.posted}</p>
          </div>
        </div>
      </div>

      {/* Quick Apply */}
      <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 className="font-bold text-lg">Ready to apply?</h3>
          <p className="text-primary-foreground/80 text-sm">
            You'll be redirected to <span className="font-semibold">{job.platform}</span> to complete your application
          </p>
        </div>
        <button 
          onClick={handleApplyClick}
          className="px-6 py-2 bg-primary-foreground text-primary rounded-lg hover:opacity-90 transition font-medium whitespace-nowrap flex items-center gap-2 self-start md:self-auto"
        >
          Apply on {job.platform}
          <ExternalLink size={16} />
        </button>
      </div>

      {/* About Job */}
      <div className="bg-card border border-border rounded-xl p-6 md:p-8">
        <h2 className="text-2xl font-bold text-card-foreground mb-4">About This Job</h2>
        <div className="prose prose-sm max-w-none text-card-foreground space-y-4">
          {job.fullDescription.split('\n').map((line: string, i: number) => (
            line.trim() && <p key={i}>{line.trim()}</p>
          ))}
        </div>
      </div>

      {/* Skills Required */}
      <div className="bg-card border border-border rounded-xl p-6 md:p-8">
        <h3 className="text-xl font-bold text-card-foreground mb-4">Skills Required</h3>
        <div className="flex flex-wrap gap-2">
          {job.tags.map(tag => (
            <span
              key={tag}
              className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Company Info */}
      <div className="bg-card border border-border rounded-xl p-6 md:p-8">
        <h3 className="text-xl font-bold text-card-foreground mb-4">About {job.company}</h3>
        <p className="text-card-foreground mb-4">{job.aboutCompany}</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <p className="text-muted-foreground text-sm">Company Size</p>
            <p className="font-bold">{job.companySize}</p>
          </div>
          <div>
            <p className="text-muted-foreground text-sm">Rating</p>
            <p className="font-bold">{job.companyRating} ⭐</p>
          </div>
          <div>
            <p className="text-muted-foreground text-sm">Reviews</p>
            <p className="font-bold">{job.companyReviews} reviews</p>
          </div>
        </div>
        <Link
          href={`/company/${job.company.toLowerCase()}`}
          className="inline-block mt-4 px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition font-medium"
        >
          View Company Profile
        </Link>
      </div>

      {/* Report Job */}
      <button className="w-full px-4 py-3 border border-destructive text-destructive rounded-lg hover:bg-destructive/5 transition font-medium flex items-center justify-center gap-2">
        <Flag size={18} />
        Report This Job
      </button>
    </div>
  )
}
