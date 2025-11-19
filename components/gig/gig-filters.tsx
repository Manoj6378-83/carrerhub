'use client'

import { Zap, DollarSign, Tag } from 'lucide-react'

export function GigFilters({ filters, setFilters }: any) {
  const gigTypes = ['Micro Task', 'Project', 'Hourly', 'Fixed Price']
  const budgetRanges = ['Under $100', '$100-500', '$500-1000', '$1000+']
  const skills = ['Writing', 'Design', 'Programming', 'Data Entry', 'Virtual Assistant', 'Marketing', 'Video Editing', 'Translation']

  return (
    <div className="space-y-6 sticky top-20">
      {/* Search */}
      <div>
        <label className="block text-sm font-semibold mb-3">Search</label>
        <input
          type="text"
          placeholder="Search gigs..."
          value={filters.search}
          onChange={(e) => setFilters({ ...filters, search: e.target.value })}
          className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
        />
      </div>

      {/* Gig Type */}
      <div>
        <label className="block text-sm font-semibold mb-3 flex items-center gap-2">
          <Zap size={16} /> Gig Type
        </label>
        <div className="space-y-2">
          {gigTypes.map(type => (
            <label key={type} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.gigType.includes(type)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setFilters({ ...filters, gigType: [...filters.gigType, type] })
                  } else {
                    setFilters({ ...filters, gigType: filters.gigType.filter((t: string) => t !== type) })
                  }
                }}
                className="rounded"
              />
              <span className="text-sm">{type}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Budget */}
      <div>
        <label className="block text-sm font-semibold mb-3 flex items-center gap-2">
          <DollarSign size={16} /> Budget
        </label>
        <select
          value={filters.budget}
          onChange={(e) => setFilters({ ...filters, budget: e.target.value })}
          className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
        >
          <option value="">Any Budget</option>
          {budgetRanges.map(range => (
            <option key={range} value={range}>{range}</option>
          ))}
        </select>
      </div>

      {/* Skills */}
      <div>
        <label className="block text-sm font-semibold mb-3 flex items-center gap-2">
          <Tag size={16} /> Skills
        </label>
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {skills.map(skill => (
            <label key={skill} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.skills.includes(skill)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setFilters({ ...filters, skills: [...filters.skills, skill] })
                  } else {
                    setFilters({ ...filters, skills: filters.skills.filter((s: string) => s !== skill) })
                  }
                }}
                className="rounded"
              />
              <span className="text-sm">{skill}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Sort */}
      <div>
        <label className="block text-sm font-semibold mb-3">Sort By</label>
        <select
          value={filters.sortBy}
          onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
          className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
        >
          <option value="recent">Most Recent</option>
          <option value="budget-high">Highest Budget</option>
          <option value="budget-low">Lowest Budget</option>
          <option value="urgent">Urgent Projects</option>
        </select>
      </div>

      {/* Clear Filters */}
      <button
        onClick={() => setFilters({ search: '', gigType: [], budget: '', skills: [], sortBy: 'recent' })}
        className="w-full px-4 py-2 border border-border rounded-lg hover:bg-muted transition text-sm font-medium"
      >
        Clear Filters
      </button>
    </div>
  )
}
