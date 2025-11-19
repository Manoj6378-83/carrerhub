'use client'

import { Card } from '@/components/ui/card'
import { Clock, MousePointer, Zap } from 'lucide-react'

interface BehaviorMetric {
  metric: string
  value: string
  description: string
  icon: React.ReactNode
}

export function UserBehavior() {
  const behaviors: BehaviorMetric[] = [
    {
      metric: 'Avg. Session Duration',
      value: '4m 32s',
      description: 'Average time users spend on site',
      icon: <Clock className="w-5 h-5" />,
    },
    {
      metric: 'Pages per Session',
      value: '3.2',
      description: 'Average pages viewed per session',
      icon: <MousePointer className="w-5 h-5" />,
    },
    {
      metric: 'Conversion Rate',
      value: '8.4%',
      description: 'Jobs clicked / Total visitors',
      icon: <Zap className="w-5 h-5" />,
    },
  ]

  return (
    <Card className="p-6 border border-border">
      <h2 className="text-xl font-bold text-foreground mb-6">User Behavior</h2>
      <div className="space-y-4">
        {behaviors.map((behavior, idx) => (
          <div key={idx} className="p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
            <div className="flex items-start gap-4">
              <div className="text-primary mt-1">{behavior.icon}</div>
              <div className="flex-1">
                <p className="text-sm font-medium text-muted-foreground mb-1">{behavior.metric}</p>
                <p className="text-2xl font-bold text-foreground">{behavior.value}</p>
                <p className="text-xs text-muted-foreground mt-2">{behavior.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
        <p className="text-sm text-blue-700 dark:text-blue-400">
          💡 <span className="font-semibold">Tip:</span> Your mobile users are engaging 2.3x more than desktop users. Consider optimizing your mobile experience further.
        </p>
      </div>
    </Card>
  )
}
