'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FiltersProps {
  filters: any
  setFilters: (filters: any) => void
}

export function JobsFilters({ filters, setFilters }: FiltersProps) {
  const [expandedSections, setExpandedSections] = useState({
    jobType: true,
    salary: true,
    location: true,
    category: true
  })

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const jobTypes = ['Full-time', 'Part-time', 'Freelance', 'Contract']
  const salaryRanges = [
    { label: '$20k - $40k', value: '20-40' },
    { label: '$40k - $60k', value: '40-60' },
    { label: '$60k - $100k', value: '60-100' },
    { label: '$100k - $150k', value: '100-150' },
    { label: '$150k+', value: '150+' }
  ]
  const locations = ['Remote', 'USA', 'UK', 'Canada', 'Australia', 'Europe']
  const categories = ['Technology', 'Design', 'Writing', 'Business', 'Customer Service', 'Sales', 'Education', 'Creative']

  return (
    <div className="sticky top-24 space-y-4">
      {/* Search */}
      <div className="bg-card border border-border rounded-lg p-4">
        <input
          type="text"
          placeholder="Search jobs..."
          value={filters.search}
          onChange={(e) => setFilters({ ...filters, search: e.target.value })}
          className="w-full px-3 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground"
        />
      </div>

      {/* Sort By */}
      <div className="bg-card border border-border rounded-lg p-4">
        <label className="block text-sm font-medium text-card-foreground mb-3">Sort By</label>
        <select
          value={filters.sortBy}
          onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
          className="w-full px-3 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
        >
          <option value="recent">Most Recent</option>
          <option value="relevant">Most Relevant</option>
          <option value="salary-high">Highest Salary</option>
          <option value="salary-low">Lowest Salary</option>
        </select>
      </div>

      {/* Job Type Filter */}
      <FilterSection
        title="Job Type"
        expanded={expandedSections.jobType}
        onToggle={() => toggleSection('jobType')}
      >
        <div className="space-y-2">
          {jobTypes.map(type => (
            <label key={type} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.jobType.includes(type)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setFilters({ ...filters, jobType: [...filters.jobType, type] })
                  } else {
                    setFilters({ ...filters, jobType: filters.jobType.filter((t: string) => t !== type) })
                  }
                }}
                className="w-4 h-4 rounded accent-primary"
              />
              <span className="text-sm text-foreground">{type}</span>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* Salary Range Filter */}
      <FilterSection
        title="Salary Range"
        expanded={expandedSections.salary}
        onToggle={() => toggleSection('salary')}
      >
        <div className="space-y-2">
          {salaryRanges.map(range => (
            <label key={range.value} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="salary"
                value={range.value}
                checked={filters.salary === range.value}
                onChange={(e) => setFilters({ ...filters, salary: e.target.value })}
                className="w-4 h-4 accent-primary"
              />
              <span className="text-sm text-foreground">{range.label}</span>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* Location Filter */}
      <FilterSection
        title="Location"
        expanded={expandedSections.location}
        onToggle={() => toggleSection('location')}
      >
        <div className="space-y-2">
          {locations.map(location => (
            <label key={location} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="location"
                value={location}
                checked={filters.location === location}
                onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                className="w-4 h-4 accent-primary"
              />
              <span className="text-sm text-foreground">{location}</span>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* Category Filter */}
      <FilterSection
        title="Category"
        expanded={expandedSections.category}
        onToggle={() => toggleSection('category')}
      >
        <div className="space-y-2">
          {categories.map(cat => (
            <label key={cat} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="category"
                value={cat}
                checked={filters.category === cat}
                onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                className="w-4 h-4 accent-primary"
              />
              <span className="text-sm text-foreground">{cat}</span>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* Clear Filters */}
      <button
        onClick={() => setFilters({
          search: '',
          jobType: [],
          salary: '',
          location: '',
          category: '',
          sortBy: 'recent'
        })}
        className="w-full px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition font-medium text-sm"
      >
        Clear All Filters
      </button>
    </div>
  )
}

interface FilterSectionProps {
  title: string
  expanded: boolean
  onToggle: () => void
  children: React.ReactNode
}

function FilterSection({ title, expanded, onToggle, children }: FilterSectionProps) {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-4 py-3 flex items-center justify-between hover:bg-muted/50 transition font-medium text-card-foreground"
      >
        {title}
        <ChevronDown size={20} className={`transition ${expanded ? 'rotate-180' : ''}`} />
      </button>
      {expanded && (
        <div className="px-4 py-3 border-t border-border space-y-2">
          {children}
        </div>
      )}
    </div>
  )
}
