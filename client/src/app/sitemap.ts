import type { MetadataRoute } from 'next'

import { siteConfig, publicRoutes } from '@configs/siteConfig'

const sitemap = (): MetadataRoute.Sitemap => {
  const lastModified = new Date()

  return publicRoutes.map(route => ({
    url: `${siteConfig.url}/${siteConfig.defaultLocale}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority
  }))
}

export default sitemap
