'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CompanyProfile } from '@/components/companies/company-profile'
import { useParams } from 'next/navigation'

export default function CompanyPage() {
  const params = useParams()
  const name = params?.name as string

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Header />
      <div className="flex-1">
        <CompanyProfile companyName={name} />
      </div>
      <Footer />
    </main>
  )
}
