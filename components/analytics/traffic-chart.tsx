'use client'

import { Card } from '@/components/ui/card'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export function TrafficChart() {
  const data = [
    { date: 'Jan 1', users: 2400, pageViews: 4200, sessions: 2200 },
    { date: 'Jan 2', users: 2800, pageViews: 4900, sessions: 2600 },
    { date: 'Jan 3', users: 2100, pageViews: 3900, sessions: 2100 },
    { date: 'Jan 4', users: 3500, pageViews: 5200, sessions: 3200 },
    { date: 'Jan 5', users: 3200, pageViews: 5800, sessions: 3100 },
    { date: 'Jan 6', users: 4100, pageViews: 6500, sessions: 3900 },
    { date: 'Jan 7', users: 4800, pageViews: 7200, sessions: 4200 },
  ]

  return (
    <Card className="p-6 border border-border">
      <h2 className="text-xl font-bold text-foreground mb-6">Traffic Over Time</h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="date" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1f2937', 
                border: '1px solid #374151',
                borderRadius: '8px'
              }}
              labelStyle={{ color: '#fff' }}
            />
            <Legend />
            <Line type="monotone" dataKey="users" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} />
            <Line type="monotone" dataKey="pageViews" stroke="#10b981" strokeWidth={2} dot={{ r: 4 }} />
            <Line type="monotone" dataKey="sessions" stroke="#f59e0b" strokeWidth={2} dot={{ r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}
