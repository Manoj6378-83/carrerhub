'use client'

import { useEffect, useState } from 'react'
import { Card } from '@/components/ui/card'
import { AnalyticsOverview } from './analytics-overview'
import { TrafficChart } from './traffic-chart'
import { DeviceBreakdown } from './device-breakdown'
import { PageStats } from './page-stats'
import { UserBehavior } from './user-behavior'
import { TrafficSources } from './traffic-sources'

export function AnalyticsDashboard() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <div className="space-y-6">
      {/* Overview Cards */}
      <AnalyticsOverview />

      {/* Traffic Chart */}
      <TrafficChart />

      {/* Device and Source Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DeviceBreakdown />
        <TrafficSources />
      </div>

      {/* Detailed Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PageStats />
        <UserBehavior />
      </div>
    </div>
  )
}
