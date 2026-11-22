// Type Imports
import type { Metadata } from 'next'

import type { Locale } from '@configs/i18n'

// Config Imports
import { i18n } from '@configs/i18n'

// Util Imports
import { pageOpenGraph } from '@/utils/seo'

// Component Imports
import PricingView from '@views/front-pages/pages/PricingView'
import JsonLd from '@views/front-pages/shared/JsonLd'
import { pricingFaqs } from '@views/front-pages/pages/pricingFaqs'

export const metadata: Metadata = {
  title: 'Small Business Accounting Software Pricing',
  description:
    'Compare AccounTrack pricing plans from Free to Premium. Start free, pay monthly or yearly and upgrade when your business and team grow.',
  alternates: { canonical: '/en/pricing' },
  openGraph: pageOpenGraph('Small Business Accounting Software Pricing | AccounTrack', 'Compare AccounTrack pricing plans from Free to Premium. Start free, pay monthly or yearly and upgrade when your business and team grow.', '/en/pricing')
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
          '@type': 'FAQPage',
          mainEntity: pricingFaqs.map(faq => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: { '@type': 'Answer', text: faq.answer }
          }))
        }}
      />
      <PricingView lang={lang} />
    </>
  )
}

export default Page
