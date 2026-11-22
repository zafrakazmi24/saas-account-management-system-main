/**
 * Single source of truth for public-site details used by SEO metadata,
 * the sitemap, robots.txt, structured data and the Contact page.
 *
 * TODO before going live: replace the placeholder values below (or set the
 * matching NEXT_PUBLIC_* environment variables in Vercel).
 */
export const siteConfig = {
  name: 'AccounTrack',
  tagline: 'Business account management software',

  // Public web address, no trailing slash. Use your custom domain, or your
  // *.vercel.app address if you have no domain yet.
  url: (process.env.NEXT_PUBLIC_SITE_URL || 'https://your-project.vercel.app').replace(/\/$/, ''),

  // Default locale used in the sitemap and canonical URLs
  defaultLocale: 'en',

  // Contact details shown on the Contact page and in structured data.
  // Use real details: Local SEO depends on them.
  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'zafrakazmi224@gmail.com',
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || '',
    city: process.env.NEXT_PUBLIC_CONTACT_CITY || 'Islamabad',
    region: process.env.NEXT_PUBLIC_CONTACT_REGION || '',
    country: process.env.NEXT_PUBLIC_CONTACT_COUNTRY || 'Pakistan',
    hours: 'Monday to Friday, 9:00 AM to 6:00 PM'
  },

  // Add your real profile URLs; empty values are not rendered.
  social: {
    facebook: process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK || '',
    linkedin: process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN || '',
    x: process.env.NEXT_PUBLIC_SOCIAL_X || '',
    instagram: process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM || ''
  },

  // Search Console "HTML tag" verification code (just the content value)
  googleVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',

  ogImage: '/images/accountrack/og-accountrack-business-accounts-software.png'
}

export const absoluteUrl = (path = '') => `${siteConfig.url}${path.startsWith('/') ? path : `/${path}`}`

/** Public, indexable routes (without the locale prefix). Used by the sitemap and navigation. */
export const publicRoutes = [
  { path: '', priority: 1, changeFrequency: 'weekly' as const },
  { path: '/features', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/pricing', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/login', priority: 0.5, changeFrequency: 'yearly' as const },
  { path: '/register', priority: 0.7, changeFrequency: 'yearly' as const },
  { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' as const },
  { path: '/terms-of-service', priority: 0.3, changeFrequency: 'yearly' as const }
]
