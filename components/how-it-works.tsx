'use client'

import { Search, FileText, MessageSquare, CheckCircle } from 'lucide-react'

const steps = [
  {
    icon: Search,
    title: 'Search & Browse',
    description: 'Explore thousands of job opportunities, freelance gigs, and part-time positions tailored to your skills.'
  },
  {
    icon: FileText,
    title: 'Create Profile',
    description: 'Build your professional profile, showcase your experience, skills, and get discovered by employers.'
  },
  {
    icon: MessageSquare,
    title: 'Connect',
    description: 'Chat with employers and companies directly. Negotiate terms, ask questions, and build relationships.'
  },
  {
    icon: CheckCircle,
    title: 'Get Hired',
    description: 'Secure your job or gig, start working, and begin earning money on your own terms.'
  }
]

export function HowItWorks() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="space-y-4 mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get started in four simple steps and begin your journey to financial freedom.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                )}

                <div className="space-y-4">
                  <div className="relative z-10 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg text-card-foreground">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
