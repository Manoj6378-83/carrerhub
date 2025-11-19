'use client'

import { Card } from '@/components/ui/card'
import { Users, TrendingUp, Eye, Clock } from 'lucide-react'

interface MetricCard {
  title: string
  value: string
  change: string
  icon: React.ReactNode
  bgColor: string
}

export function AnalyticsOverview() {
  const metrics: MetricCard[] = [
    {
      title: 'Total Users',
      value: '12,543',
      change: '+23% from last month',
      icon: <Users className="w-6 h-6" />,
      bgColor: 'bg-blue-500/10',
    },
    {
      title: 'Page Views',
      value: '47,892',
      change: '+18% from last month',
      icon: <Eye className="w-6 h-6" />,
      bgColor: 'bg-green-500/10',
    },
    {
      title: 'Avg. Session Duration',
      value: '4m 32s',
      change: '+12% from last month',
      icon: <Clock className="w-6 h-6" />,
      bgColor: 'bg-purple-500/10',
    },
    {
      title: 'Bounce Rate',
      value: '32.4%',
      change: '-5% from last month',
      icon: <TrendingUp className="w-6 h-6" />,
      bgColor: 'bg-orange-500/10',
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric, idx) => (
        <Card key={idx} className="p-6 border border-border hover:border-primary/50 transition-colors">
          <div className={`w-12 h-12 rounded-lg ${metric.bgColor} flex items-center justify-center mb-4 text-primary`}>
            {metric.icon}
          </div>
          <h3 className="text-sm font-medium text-muted-foreground mb-1">{metric.title}</h3>
          <div className="flex items-end justify-between">
            <p className="text-2xl font-bold text-foreground">{metric.value}</p>
          </div>
          <p className="text-xs text-green-600 dark:text-green-400 mt-2">{metric.change}</p>
        </Card>
      ))}
    </div>
  )
}
