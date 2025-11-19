'use client'

import Link from 'next/link'
import { Code2, Palette, PenTool, BarChart3, Users, Megaphone, Headphones, TrendingUp, GraduationCap, Camera, Music, Package } from 'lucide-react'

const categories = [
  { name: 'Technology', icon: Code2, count: '5,234 jobs', color: 'text-blue-600' },
  { name: 'Design', icon: Palette, count: '2,156 jobs', color: 'text-pink-600' },
  { name: 'Writing', icon: PenTool, count: '1,876 jobs', color: 'text-purple-600' },
  { name: 'Business', icon: BarChart3, count: '3,421 jobs', color: 'text-green-600' },
  { name: 'Customer Service', icon: Headphones, count: '2,345 jobs', color: 'text-orange-600' },
  { name: 'Sales & Marketing', icon: Megaphone, count: '2,876 jobs', color: 'text-red-600' },
  { name: 'Education', icon: GraduationCap, count: '1,234 jobs', color: 'text-indigo-600' },
  { name: 'Creative', icon: Camera, count: '1,567 jobs', color: 'text-cyan-600' },
]

export function Categories() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Browse by Category</h2>
          <p className="text-muted-foreground max-w-2xl">
            Explore thousands of jobs and gig opportunities across different industries and skill levels.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <Link
                key={category.name}
                href={`/jobs?category=${category.name.toLowerCase()}`}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-md hover:border-primary/50 transition group"
              >
                <div className="space-y-3">
                  <div className={`w-12 h-12 bg-muted rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition`}>
                    <Icon className={`size-6 ${category.color}`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-card-foreground">{category.name}</h3>
                    <p className="text-sm text-muted-foreground">{category.count}</p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
