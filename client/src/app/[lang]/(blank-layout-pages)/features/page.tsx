// Type Imports
import type { Metadata } from 'next'

import type { Locale } from '@configs/i18n'

// Config Imports
import { i18n } from '@configs/i18n'

// Util Imports
import { pageOpenGraph } from '@/utils/seo'

// Component Imports
import FeaturesView from '@views/front-pages/pages/FeaturesView'

export const metadata: Metadata = {
  title: 'Features: Invoice Software, Expenses & Reports',
  description:
    'Explore AccounTrack features: invoice management, payment and expense tracking, customer and supplier records, reports, dashboards and role-based team access.',
  alternates: { canonical: '/en/features' },
  openGraph: pageOpenGraph('Features: Invoice Software, Expenses & Reports | AccounTrack', 'Explore AccounTrack features: invoice management, payment and expense tracking, customer and supplier records, reports, dashboards and role-based team access.', '/en/features')
}

type Props = {
  params: Promise<{ lang: string }>
}

const Page = async (props: Props) => {
  const params = await props.params

  const lang: Locale = i18n.locales.includes(params.lang as Locale) ? (params.lang as Locale) : i18n.defaultLocale

  return (
    <>
      <FeaturesView lang={lang} />
    </>
  )
}

export default Page
