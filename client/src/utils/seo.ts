import type { Metadata } from 'next'

import { siteConfig } from '@configs/siteConfig'

export const ogImages = [
  {
    url: siteConfig.ogImage,
    width: 1200,
    height: 630,
    alt: 'AccounTrack business account management software dashboard'
  }
]

/**
 * Page-level openGraph replaces the parent's openGraph entirely, so every page that
 * sets its own social-preview text must also repeat the image and site name.
 */
export const pageOpenGraph = (title: string, description: string, path: string): Metadata['openGraph'] => ({
  title,
  description,
  url: path,
  siteName: siteConfig.name,
  type: 'website',
  images: ogImages
})
