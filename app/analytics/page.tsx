'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { AnalyticsDashboard } from '@/components/analytics/analytics-dashboard'

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Analytics Dashboard</h1>
          <p className="text-muted-foreground">Track your website traffic, users, and engagement metrics</p>
        </div>
        <AnalyticsDashboard />
      </main>
    </div>
  )
}
