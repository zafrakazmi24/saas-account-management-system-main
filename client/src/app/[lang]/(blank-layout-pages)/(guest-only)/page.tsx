// Type Imports
import type { Metadata } from 'next'

import type { Locale } from '@configs/i18n'

// Config Imports
import { i18n } from '@configs/i18n'

// Component Imports
import LandingPage from '@views/front-pages/landing/LandingPage'
import { pageOpenGraph } from '@/utils/seo'
import JsonLd from '@views/front-pages/shared/JsonLd'
import { siteConfig, absoluteUrl } from '@configs/siteConfig'

export const metadata: Metadata = {
  title: { absolute: 'AccounTrack | Business Account Management Software for Invoices & Expenses' },
  description:
    'Manage customers, suppliers, invoices, payments and expenses in one simple platform. AccounTrack is account management software built for small businesses.',
  alternates: { canonical: '/en' },
  openGraph: pageOpenGraph(
    'AccounTrack | Business Account Management Software',
    'Manage customers, suppliers, invoices, payments and expenses in one simple platform built for small businesses.',
    '/en'
  )
}

type Props = {
  params: Promise<{ lang: string }>
}

const Page = async (props: Props) => {
  const params = await props.params

  const lang: Locale = i18n.locales.includes(params.lang as Locale) ? (params.lang as Locale) : i18n.defaultLocale

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Organization',
              name: siteConfig.name,
              url: siteConfig.url,
              logo: absoluteUrl('/icon-512.png'),
              email: siteConfig.contact.email,
              sameAs: Object.values(siteConfig.social).filter(Boolean)
            },
            {
              '@type': 'WebSite',
              name: siteConfig.name,
              url: siteConfig.url
            },
            {
              '@type': 'SoftwareApplication',
              name: siteConfig.name,
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'Web',
              description:
                'Account management software for managing customers, suppliers, invoices, payments, expenses and reports.',
              offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }
            }
          ]
        }}
      />
      <LandingPage lang={lang} />
    </>
  )
}

export default Page
