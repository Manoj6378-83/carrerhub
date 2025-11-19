'use client'

import Link from 'next/link'

export function CTA() {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Start Earning?</h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Join our community of successful professionals and start your journey to financial independence today.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="px-8 py-3 bg-primary-foreground text-primary rounded-lg hover:opacity-90 transition font-medium"
            >
              Create Free Account
            </Link>
            <Link
              href="/jobs"
              className="px-8 py-3 border-2 border-primary-foreground text-primary-foreground rounded-lg hover:bg-primary-foreground/10 transition font-medium"
            >
              Browse Jobs Now
            </Link>
          </div>

          <p className="text-sm text-primary-foreground/70">
            No credit card required. Start applying in minutes.
          </p>
        </div>
      </div>
    </section>
  )
}
