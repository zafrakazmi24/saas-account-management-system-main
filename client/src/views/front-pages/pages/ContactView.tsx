'use client'

// Next Imports
import NextLink from 'next/link'

// MUI Imports
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Link from '@mui/material/Link'

// Type Imports
import type { Locale } from '@configs/i18n'

// Component Imports
import PublicPageLayout from '@views/front-pages/shared/PublicPageLayout'
import PageHero from '@views/front-pages/shared/PageHero'
import ContactForm from '@views/front-pages/pages/ContactForm'

// Config Imports
import { siteConfig } from '@configs/siteConfig'

// Util Imports
import { getLocalizedUrl } from '@/utils/i18n'

const ContactView = ({ lang }: { lang: Locale }) => {
  const { email, phone, city, region, country, hours } = siteConfig.contact
  const place = [city, region, country].filter(Boolean).join(', ')

  const details = [
    {
      icon: 'ri-mail-line',
      label: 'Email',
      value: (
        <Link href={`mailto:${email}`} underline='always'>
          {email}
        </Link>
      )
    },
    ...(phone
      ? [
          {
            icon: 'ri-phone-line',
            label: 'Phone',
            value: (
              <Link href={`tel:${phone.replace(/\s+/g, '')}`} underline='always'>
                {phone}
              </Link>
            )
          }
        ]
      : []),
    { icon: 'ri-map-pin-line', label: 'Location', value: <span>{place}</span> },
    { icon: 'ri-time-line', label: 'Support hours', value: <span>{hours}</span> }
  ]

  return (
    <PublicPageLayout lang={lang}>
      <PageHero
        eyebrow='Contact us'
        title='Contact AccounTrack'
        description={`Questions about plans, features or getting started? Send us a message. We are based in ${city} and reply during business hours.`}
      />

      <section className='mli-auto max-is-[1100px] pli-4 sm:pli-6 lg:pli-10 plb-10 lg:plb-16'>
        <Grid container spacing={8}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography variant='h5' component='h2' className='font-bold mbe-4'>
              Get in touch
            </Typography>
            <div className='flex flex-col gap-4'>
              {details.map(item => (
                <Card key={item.label} variant='outlined' sx={{ borderRadius: 3 }}>
                  <CardContent className='flex items-start gap-4'>
                    <div className='flex shrink-0 items-center justify-center is-11 bs-11 rounded-lg bg-primaryLighter text-primary'>
                      <i className={item.icon} style={{ fontSize: 22 }} />
                    </div>
                    <div>
                      <Typography variant='subtitle2' component='h3' className='font-semibold'>
                        {item.label}
                      </Typography>
                      <Typography variant='body2' color='text.secondary' component='div'>
                        {item.value}
                      </Typography>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Typography variant='body2' color='text.secondary' className='mbs-6'>
              Looking for answers first? Browse our <NextLink href={getLocalizedUrl('/features', lang)}>features</NextLink>{' '}
              and <NextLink href={getLocalizedUrl('/pricing', lang)}>pricing</NextLink>, or{' '}
              <NextLink href={getLocalizedUrl('/about', lang)}>read about AccounTrack</NextLink>.
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Typography variant='h5' component='h2' className='font-bold mbe-4'>
              Send us a message
            </Typography>
            <ContactForm />
          </Grid>
        </Grid>
      </section>
    </PublicPageLayout>
  )
}

export default ContactView
