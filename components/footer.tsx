'use client'

import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Instagram, Mail } from 'lucide-react'

const footerSections = [
  {
    title: 'For Job Seekers',
    links: [
      { label: 'Browse Jobs', href: '/jobs' },
      { label: 'Browse Gig Work', href: '/gig-work' },
      { label: 'Companies', href: '/companies' },
      { label: 'Reviews', href: '/reviews' },
      { label: 'Salary Guide', href: '/salary-guide' }
    ]
  },
  {
    title: 'For Employers',
    links: [
      { label: 'Post a Job', href: '/post-job' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Solutions', href: '/solutions' },
      { label: 'HR Tools', href: '/hr-tools' },
      { label: 'Resources', href: '/resources' }
    ]
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' }
    ]
  }
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* Footer Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">C</span>
              </div>
              <span className="font-bold text-lg">CareerHub</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Your ultimate platform for jobs, gig work, and career opportunities.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition">
                <Instagram size={20} />
              </Link>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="font-bold text-card-foreground">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="bg-muted/50 border border-border rounded-xl p-6 md:p-8 mb-12">
          <div className="max-w-2xl">
            <h3 className="font-bold text-lg mb-2">Subscribe to our newsletter</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Get the latest job opportunities and career tips delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground"
              />
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition font-medium whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; 2025 CareerHub. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-primary transition">Privacy</Link>
            <Link href="/terms" className="hover:text-primary transition">Terms</Link>
            <Link href="/cookies" className="hover:text-primary transition">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
