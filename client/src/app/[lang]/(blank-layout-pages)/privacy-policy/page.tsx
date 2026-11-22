// Type Imports
import type { Metadata } from 'next'

import type { Locale } from '@configs/i18n'

// Config Imports
import { i18n } from '@configs/i18n'

// Component Imports
import PrivacyPolicyView from '@views/front-pages/legal/PrivacyPolicyView'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Read the AccounTrack privacy policy: what information we collect, how we use it, how long we keep it and how we protect your business data.',
  alternates: { canonical: '/en/privacy-policy' }
}

type Props = {
  params: Promise<{ lang: string }>
}

const Page = async (props: Props) => {
  const params = await props.params

  const lang: Locale = i18n.locales.includes(params.lang as Locale) ? (params.lang as Locale) : i18n.defaultLocale

  return <PrivacyPolicyView lang={lang} />
}

export default Page
