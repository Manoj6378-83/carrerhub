import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://carrerhub.com'
  
  // Main pages
  const mainPages = [
    { url: baseUrl, changeFrequency: 'daily', priority: 1.0 },
    { url: `${baseUrl}/jobs`, changeFrequency: 'hourly', priority: 0.9 },
    { url: `${baseUrl}/companies`, changeFrequency: 'daily', priority: 0.8 },
    { url: `${baseUrl}/reviews`, changeFrequency: 'daily', priority: 0.7 },
    { url: `${baseUrl}/browse`, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/signup`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/signin`, changeFrequency: 'monthly', priority: 0.5 },
  ]

  return mainPages.map((page) => ({
    url: page.url,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency as any,
    priority: page.priority,
  }))
}
