// Type Imports
import type { Metadata } from 'next'

import type { Locale } from '@configs/i18n'

// Config Imports
import { i18n } from '@configs/i18n'

// Util Imports
import { pageOpenGraph } from '@/utils/seo'

// Component Imports
import ContactView from '@views/front-pages/pages/ContactView'
import JsonLd from '@views/front-pages/shared/JsonLd'
import { siteConfig, absoluteUrl } from '@configs/siteConfig'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact the AccounTrack team with questions about plans, features or getting started. Find our email, location and support hours, or send us a message.',
  alternates: { canonical: '/en/contact' },
  openGraph: pageOpenGraph('Contact Us | AccounTrack', 'Contact the AccounTrack team with questions about plans, features or getting started. Find our email, location and support hours, or send us a message.', '/en/contact')
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
          '@type': 'Organization',
          name: siteConfig.name,
          url: siteConfig.url,
          logo: absoluteUrl('/icon-512.png'),
          email: siteConfig.contact.email,
          ...(siteConfig.contact.phone ? { telephone: siteConfig.contact.phone } : {}),
          address: {
            '@type': 'PostalAddress',
            addressLocality: siteConfig.contact.city,
            ...(siteConfig.contact.region ? { addressRegion: siteConfig.contact.region } : {}),
            addressCountry: siteConfig.contact.country
          },
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'customer support',
            email: siteConfig.contact.email,
            availableLanguage: 'English'
          }
        }}
      />
      <ContactView lang={lang} />
    </>
  )
}

export default Page
