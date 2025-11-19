'use client'

import { Card } from '@/components/ui/card'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

export function TrafficSources() {
  const data = [
    { source: 'Organic Search', users: 4200, percentage: 42 },
    { source: 'Direct', users: 3100, percentage: 31 },
    { source: 'Social Media', users: 1800, percentage: 18 },
    { source: 'Referral', users: 900, percentage: 9 },
  ]

  return (
    <Card className="p-6 border border-border">
      <h2 className="text-xl font-bold text-foreground mb-6">Traffic Sources</h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="source" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1f2937', 
                border: '1px solid #374151',
                borderRadius: '8px'
              }}
              labelStyle={{ color: '#fff' }}
            />
            <Bar dataKey="users" fill="#3b82f6" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-6 space-y-2">
        {data.map((item, idx) => (
          <div key={idx} className="flex items-center justify-between p-2">
            <span className="text-sm text-muted-foreground">{item.source}</span>
            <span className="text-sm font-bold text-foreground">{item.percentage}%</span>
          </div>
        ))}
      </div>
    </Card>
  )
}
