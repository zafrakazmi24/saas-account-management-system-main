'use client'

// Next Imports
import NextLink from 'next/link'

// MUI Imports
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

// Type Imports
import type { Locale } from '@configs/i18n'

// Component Imports
import PublicPageLayout from '@views/front-pages/shared/PublicPageLayout'
import PageHero from '@views/front-pages/shared/PageHero'
import PricingSection from '@views/front-pages/landing/PricingSection'
import { pricingFaqs } from '@views/front-pages/pages/pricingFaqs'

// Util Imports
import { getLocalizedUrl } from '@/utils/i18n'

const PricingView = ({ lang }: { lang: Locale }) => {
  return (
    <PublicPageLayout lang={lang}>
      <PageHero
        eyebrow='Pricing'
        title='Small business accounting software'
        description='Start free and upgrade only when your team grows. Compare plans below, then create your account in minutes.'
      />

      <PricingSection lang={lang} />

      <section className='mli-auto max-is-[900px] pli-4 sm:pli-6 plb-16 lg:plb-20'>
        <Typography variant='h4' component='h2' className='font-bold mbe-6 text-center'>
          Pricing questions
        </Typography>
        <div className='flex flex-col gap-4'>
          {pricingFaqs.map(faq => (
            <Card key={faq.question} variant='outlined' sx={{ borderRadius: 3 }}>
              <CardContent>
                <Typography variant='subtitle1' component='h3' className='font-semibold mbe-1'>
                  {faq.question}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  {faq.answer}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
        <Typography variant='body1' color='text.secondary' className='mbs-8 text-center'>
          Not sure which plan fits? Read about <NextLink href={getLocalizedUrl('/features', lang)}>what is included</NextLink>{' '}
          or <NextLink href={getLocalizedUrl('/contact', lang)}>ask us a question</NextLink>.
        </Typography>
      </section>
    </PublicPageLayout>
  )
}

export default PricingView
