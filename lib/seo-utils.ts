export const generateJobPostingSchema = (job: any) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title,
    description: job.description,
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: job.location,
        addressCountry: 'IN',
      },
    },
    baseSalary: {
      '@type': 'PriceSpecification',
      priceCurrency: 'INR',
      price: job.salaryMin && job.salaryMax 
        ? `${job.salaryMin}-${job.salaryMax}` 
        : job.salary,
    },
    employmentType: job.jobType?.toUpperCase() || 'FULL_TIME',
    validThrough: job.deadlineDate || new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString(),
    hiringOrganization: {
      '@type': 'Organization',
      name: job.company,
      sameAs: job.companyWebsite,
      logo: job.companyLogo,
    },
    applicantLocationRequirements: {
      '@type': 'Country',
      name: 'India',
    },
    skills: job.skills || [],
    qualifications: job.requirements || [],
  }
}

export const generateCompanySchema = (company: any) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: company.name,
    description: company.description,
    url: company.website,
    logo: company.logo,
    foundingDate: company.founded,
    headquarterAddress: {
      '@type': 'PostalAddress',
      addressLocality: company.location,
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Support',
      email: company.email,
    },
    sameAs: [
      company.linkedin,
      company.twitter,
      company.facebook,
    ].filter(Boolean),
  }
}

export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
