'use client'

import { Card } from '@/components/ui/card'
import { TrendingUp, TrendingDown } from 'lucide-react'

interface PageStat {
  page: string
  views: number
  uniqueUsers: number
  avgTimeOnPage: string
  bounceRate: number
  trend: 'up' | 'down'
}

export function PageStats() {
  const pages: PageStat[] = [
    {
      page: '/ (Home)',
      views: 12540,
      uniqueUsers: 8230,
      avgTimeOnPage: '3m 45s',
      bounceRate: 28,
      trend: 'up',
    },
    {
      page: '/jobs',
      views: 10230,
      uniqueUsers: 7120,
      avgTimeOnPage: '5m 12s',
      bounceRate: 22,
      trend: 'up',
    },
    {
      page: '/companies',
      views: 6540,
      uniqueUsers: 4890,
      avgTimeOnPage: '4m 08s',
      bounceRate: 35,
      trend: 'down',
    },
    {
      page: '/dashboard',
      views: 5890,
      uniqueUsers: 3540,
      avgTimeOnPage: '8m 30s',
      bounceRate: 12,
      trend: 'up',
    },
  ]

  return (
    <Card className="p-6 border border-border">
      <h2 className="text-xl font-bold text-foreground mb-6">Top Pages</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-3 font-semibold text-muted-foreground">Page</th>
              <th className="text-right py-3 px-3 font-semibold text-muted-foreground">Views</th>
              <th className="text-right py-3 px-3 font-semibold text-muted-foreground">Users</th>
              <th className="text-right py-3 px-3 font-semibold text-muted-foreground">Avg Time</th>
              <th className="text-right py-3 px-3 font-semibold text-muted-foreground">Bounce</th>
            </tr>
          </thead>
          <tbody>
            {pages.map((page, idx) => (
              <tr key={idx} className="border-b border-border hover:bg-muted/50 transition-colors">
                <td className="py-3 px-3 text-foreground font-medium">{page.page}</td>
                <td className="text-right py-3 px-3 text-foreground">{page.views.toLocaleString()}</td>
                <td className="text-right py-3 px-3 text-foreground">{page.uniqueUsers.toLocaleString()}</td>
                <td className="text-right py-3 px-3 text-foreground">{page.avgTimeOnPage}</td>
                <td className="text-right py-3 px-3">
                  <div className="flex items-center justify-end gap-2">
                    <span className="text-foreground">{page.bounceRate}%</span>
                    {page.trend === 'up' ? (
                      <TrendingDown className="w-4 h-4 text-green-600" />
                    ) : (
                      <TrendingUp className="w-4 h-4 text-red-600" />
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}
