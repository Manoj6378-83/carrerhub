import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'CareerHub - Find Jobs, Gig Work & Remote Jobs Online | Earn Money',
  description: 'Discover 50,000+ job opportunities, gig work, freelance, part-time & remote jobs. Compare top companies, read employee reviews, and start earning today on CareerHub - India\'s fastest growing job platform.',
  keywords: 'job board, online jobs, gig work, part-time jobs, freelance jobs, remote work, career, employment, job search, job portal, naukri, indeed, linkedin jobs',
  authors: [{ name: 'CareerHub' }],
  creator: 'CareerHub',
  formatDetection: {
    email: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://carrerhub.com',
  },
  openGraph: {
    title: 'CareerHub - Find Jobs & Gig Work Online | India\'s Job Platform',
    description: 'Discover 50,000+ job opportunities, gig work, and compare companies. Start earning today on CareerHub.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://carrerhub.com',
    siteName: 'CareerHub',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CareerHub - Find Jobs & Gig Work Online',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CareerHub - Find Jobs & Gig Work Online',
    description: 'Discover job opportunities, gig work, and start earning today.',
    images: ['/twitter-image.jpg'],
    creator: '@careerhub',
  },
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE_HERE',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'CareerHub',
              url: 'https://carrerhub.com',
              logo: 'https://carrerhub.com/logo.png',
              description: 'CareerHub is a comprehensive job board and gig work platform connecting job seekers with opportunities.',
              sameAs: [
                'https://twitter.com/careerhub',
                'https://facebook.com/careerhub',
                'https://linkedin.com/company/careerhub',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Customer Support',
                email: 'support@carrerhub.com',
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              url: 'https://carrerhub.com',
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://carrerhub.com/jobs?search={search_term_string}',
                },
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
        <link rel="prefetch" href="/jobs" />
        <link rel="prefetch" href="/companies" />
        <link rel="dns-prefetch" href="https://cdn.example.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
