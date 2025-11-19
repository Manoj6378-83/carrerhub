'use client'

import Link from 'next/link'
import { Menu, X, BarChart3 } from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">C</span>
            </div>
            <span className="font-bold text-xl hidden sm:inline">CareerHub</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/jobs" className="text-foreground hover:text-primary transition">Jobs</Link>
            <Link href="/companies" className="text-foreground hover:text-primary transition">Companies</Link>
            <Link href="/gig-work" className="text-foreground hover:text-primary transition">Gig Work</Link>
            <Link href="/reviews" className="text-foreground hover:text-primary transition">Reviews</Link>
            <Link href="/browse" className="text-foreground hover:text-primary transition">Browse</Link>
            <Link href="/analytics" className="text-foreground hover:text-primary transition flex items-center gap-1">
              <BarChart3 size={18} />
              Analytics
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/signin" className="px-6 py-2 text-foreground hover:bg-muted rounded-lg transition">
              Sign In
            </Link>
            <Link href="/signup" className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition font-medium">
              Post a Job
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-3 border-t border-border pt-4">
            <Link href="/jobs" className="block text-foreground hover:text-primary transition py-2">Jobs</Link>
            <Link href="/companies" className="block text-foreground hover:text-primary transition py-2">Companies</Link>
            <Link href="/gig-work" className="block text-foreground hover:text-primary transition py-2">Gig Work</Link>
            <Link href="/reviews" className="block text-foreground hover:text-primary transition py-2">Reviews</Link>
            <Link href="/browse" className="block text-foreground hover:text-primary transition py-2">Browse</Link>
            <Link href="/analytics" className="block text-foreground hover:text-primary transition py-2 flex items-center gap-2">
              <BarChart3 size={18} />
              Analytics
            </Link>
            <div className="flex gap-3 pt-3 border-t border-border">
              <Link href="/signin" className="flex-1 px-4 py-2 text-center text-foreground hover:bg-muted rounded-lg transition">
                Sign In
              </Link>
              <Link href="/signup" className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition font-medium">
                Post a Job
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
