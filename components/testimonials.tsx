'use client'

import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Full-time Employee',
    avatar: '👩‍💼',
    text: 'CareerHub helped me find my dream job within 2 weeks. The platform is so easy to use and the job listings are constantly updated.',
    rating: 5
  },
  {
    name: 'Mike Chen',
    role: 'Freelance Developer',
    avatar: '👨‍💻',
    text: 'I\'ve been using CareerHub for freelance projects and earn $5000+ monthly. The opportunities are endless here!',
    rating: 5
  },
  {
    name: 'Emma Williams',
    role: 'Part-time Virtual Assistant',
    avatar: '👩‍💼',
    text: 'Perfect for balancing my studies and earning some extra money. Very supportive community and transparent hiring process.',
    rating: 4
  },
  {
    name: 'Alex Rodriguez',
    role: 'Full-stack Developer',
    avatar: '👨‍💻',
    text: 'The best job platform I\'ve used. Great companies, fair salaries, and excellent customer support throughout the process.',
    rating: 5
  }
]

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="space-y-4 mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">What People Are Saying</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join thousands of successful job seekers who found their perfect role on CareerHub
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-6 space-y-4">
              {/* Rating */}
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>

              {/* Text */}
              <p className="text-card-foreground italic">"{testimonial.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <span className="text-2xl">{testimonial.avatar}</span>
                <div>
                  <p className="font-bold text-card-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
