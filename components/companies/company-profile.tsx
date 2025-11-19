'use client'

import Link from 'next/link'
import { Star, MapPin, Users, Globe, Briefcase } from 'lucide-react'

const companyData: Record<string, any> = {
  'tech-solutions-inc': {
    name: 'Tech Solutions Inc',
    logo: '🔷',
    rating: 4.8,
    reviews: 234,
    founded: 2015,
    location: 'San Francisco, CA',
    website: 'techsolutions.com',
    employees: 500,
    industry: 'Technology',
    description: 'Tech Solutions Inc is a leading software development company specializing in enterprise solutions and web applications.',
    about: 'Founded in 2015, Tech Solutions Inc has been at the forefront of digital transformation. We help businesses of all sizes achieve their goals through innovative technology solutions.',
    culture: 'We believe in fostering a culture of innovation, collaboration, and continuous learning. Our team is passionate about solving complex problems and delivering exceptional results.',
    benefits: ['Health Insurance', 'Unlimited PTO', 'Remote Work', 'Stock Options', 'Professional Development', '401k Matching'],
    jobs: 45
  }
}

export function CompanyProfile({ companyName }: { companyName: string }) {
  const company = companyData[companyName] || companyData['tech-solutions-inc']

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8 mb-8">
        <div className="flex items-start gap-6 mb-6">
          <span className="text-6xl">{company.logo}</span>
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-2">{company.name}</h1>
            <p className="text-muted-foreground text-lg">{company.industry}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          <div>
            <p className="text-muted-foreground text-sm">Rating</p>
            <div className="flex items-center gap-1 mt-1">
              <Star size={16} className="fill-accent text-accent" />
              <span className="font-bold text-lg">{company.rating}</span>
              <span className="text-muted-foreground text-sm">({company.reviews} reviews)</span>
            </div>
          </div>
          <div>
            <p className="text-muted-foreground text-sm">Employees</p>
            <p className="font-bold text-lg mt-1">{company.employees}+</p>
          </div>
          <div>
            <p className="text-muted-foreground text-sm">Founded</p>
            <p className="font-bold text-lg mt-1">{company.founded}</p>
          </div>
          <div>
            <p className="text-muted-foreground text-sm">Open Positions</p>
            <p className="font-bold text-lg mt-1">{company.jobs}</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* About */}
          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4">About {company.name}</h2>
            <p className="text-foreground mb-4">{company.about}</p>
            <p className="text-muted-foreground">{company.description}</p>
          </div>

          {/* Culture */}
          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4">Our Culture</h2>
            <p className="text-foreground">{company.culture}</p>
          </div>

          {/* Benefits */}
          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4">Benefits & Perks</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {company.benefits.map((benefit: string) => (
                <div key={benefit} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Contact Info */}
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-bold text-lg mb-4">Company Info</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-muted-foreground flex-shrink-0" />
                <span className="text-foreground">{company.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe size={18} className="text-muted-foreground flex-shrink-0" />
                <a href={`https://${company.website}`} target="_blank" className="text-primary hover:text-primary/80">
                  {company.website}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Briefcase size={18} className="text-muted-foreground flex-shrink-0" />
                <span className="text-foreground">{company.jobs} open positions</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <Link
            href={`/jobs?company=${company.name}`}
            className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition font-medium text-center block"
          >
            View Open Jobs
          </Link>

          {/* Reviews CTA */}
          <Link
            href="/reviews"
            className="w-full px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/5 transition font-medium text-center block"
          >
            Read Reviews
          </Link>
        </div>
      </div>
    </div>
  )
}
