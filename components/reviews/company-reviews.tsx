'use client'

import { Star, Briefcase, ThumbsUp } from 'lucide-react'
import { useState } from 'react'

const reviews = [
  {
    id: 1,
    company: 'Tech Solutions Inc',
    author: 'Sarah Johnson',
    role: 'Senior Developer',
    rating: 5,
    title: 'Amazing place to work!',
    text: 'Great company culture, excellent pay, and amazing benefits. Would definitely recommend to anyone looking for a job in tech.',
    helpful: 124,
    date: '2025-01-10'
  },
  {
    id: 2,
    company: 'Tech Solutions Inc',
    author: 'Mike Chen',
    role: 'Product Manager',
    rating: 4,
    title: 'Great work environment',
    text: 'Good work-life balance and supportive management. The only downside is occasional unclear communication from leadership.',
    helpful: 89,
    date: '2025-01-08'
  },
  {
    id: 3,
    company: 'Creative Studios',
    author: 'Emma Williams',
    role: 'Designer',
    rating: 5,
    title: 'Perfect for creatives',
    text: 'Amazing creative team, lots of freedom to experiment with new ideas. The pay could be better, but the experience is priceless.',
    helpful: 156,
    date: '2025-01-05'
  },
  {
    id: 4,
    company: 'Finance Plus',
    author: 'Alex Rodriguez',
    role: 'Analyst',
    rating: 4,
    title: 'Professional environment',
    text: 'Very professional workplace with good benefits and career growth opportunities. Can be stressful during busy seasons.',
    helpful: 102,
    date: '2025-01-01'
  }
]

export function CompanyReviews() {
  const [filterRating, setFilterRating] = useState<number | null>(null)
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null)

  const companies = Array.from(new Set(reviews.map(r => r.company)))

  const filtered = reviews.filter(review =>
    (!filterRating || review.rating === filterRating) &&
    (!selectedCompany || review.company === selectedCompany)
  )

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Company Reviews</h1>
        <p className="text-muted-foreground">Read authentic reviews from current and former employees</p>
      </div>

      {/* Filters */}
      <div className="bg-card border border-border rounded-xl p-6 mb-8">
        <h3 className="font-bold mb-4">Filter Reviews</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-3">Company</label>
            <select
              value={selectedCompany || ''}
              onChange={(e) => setSelectedCompany(e.target.value || null)}
              className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
            >
              <option value="">All Companies</option>
              {companies.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-3">Rating</label>
            <div className="flex gap-2">
              <button
                onClick={() => setFilterRating(null)}
                className={`flex-1 px-4 py-2 rounded-lg transition font-medium ${
                  filterRating === null
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-foreground hover:bg-muted/80'
                }`}
              >
                All
              </button>
              {[5, 4, 3, 2, 1].map(rating => (
                <button
                  key={rating}
                  onClick={() => setFilterRating(rating)}
                  className={`px-4 py-2 rounded-lg transition font-medium ${
                    filterRating === rating
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-foreground hover:bg-muted/80'
                  }`}
                >
                  {rating}★
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div className="space-y-4">
        {filtered.map(review => (
          <div key={review.id} className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} size={16} className="fill-accent text-accent" />
                  ))}
                </div>
                <h3 className="font-bold text-lg text-foreground">{review.title}</h3>
              </div>
              <button className="px-3 py-1 text-sm border border-border rounded-lg hover:bg-muted transition flex items-center gap-1 whitespace-nowrap">
                <ThumbsUp size={14} />
                Helpful ({review.helpful})
              </button>
            </div>

            <div className="space-y-2 mb-4">
              <p className="font-medium text-foreground">{review.company}</p>
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <Briefcase size={14} />
                {review.author} • {review.role}
              </p>
              <p className="text-xs text-muted-foreground">{review.date}</p>
            </div>

            <p className="text-foreground text-sm">{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
