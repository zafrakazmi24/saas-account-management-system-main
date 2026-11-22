import type { MetadataRoute } from 'next'

import { siteConfig } from '@configs/siteConfig'

// Private, logged-in areas (they also send a noindex tag)
const privatePaths = [
  'dashboards',
  'platform',
  'customers',
  'suppliers',
  'products',
  'categories',
  'invoices',
  'payments',
  'expenses',
  'income',
  'reports',
  'plans',
  'company',
  'company-subscriptions',
  'settings',
  'notifications',
  'user-management'
]

const robots = (): MetadataRoute.Robots => ({
  rules: [
    {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/*/forgot-password', '/*/reset-password', '/*/invitation/', '/*/verify-email', ...privatePaths.map(p => `/*/${p}`)]
    }
  ],
  sitemap: `${siteConfig.url}/sitemap.xml`,
  host: siteConfig.url
})

export default robots
