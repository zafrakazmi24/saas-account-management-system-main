// Type Imports
import type { Metadata } from 'next'

import type { Locale } from '@configs/i18n'

// Config Imports
import { i18n } from '@configs/i18n'

// Util Imports
import { pageOpenGraph } from '@/utils/seo'

// Component Imports
import AboutView from '@views/front-pages/pages/AboutView'

export const metadata: Metadata = {
  title: 'About Us – Business Accounting Software',
  description:
    'Learn about AccounTrack, the account management software that helps small businesses manage customers, invoices, payments and expenses in one place.',
  alternates: { canonical: '/en/about' },
  openGraph: pageOpenGraph('About Us | AccounTrack', 'Learn about AccounTrack, the account management software that helps small businesses manage customers, invoices, payments and expenses in one place.', '/en/about')
}

type Props = {
  params: Promise<{ lang: string }>
}

const Page = async (props: Props) => {
  const params = await props.params

  const lang: Locale = i18n.locales.includes(params.lang as Locale) ? (params.lang as Locale) : i18n.defaultLocale

  return (
    <>
      <AboutView lang={lang} />
    </>
  )
}

export default Page
