'use client'

// Next Imports
import NextLink from 'next/link'
import Image from 'next/image'

// MUI Imports
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

// Type Imports
import type { Locale } from '@configs/i18n'

// Util Imports
import { getLocalizedUrl } from '@/utils/i18n'

const showcases = [
  {
    href: '/features',
    image: '/images/accountrack/business-invoice-management-dashboard.svg',
    alt: 'AccounTrack invoice dashboard with paid, pending and overdue invoice totals',
    title: 'Invoices and payments, under control',
    description: 'See what is paid, pending and overdue at a glance.',
    cta: 'Explore features'
  },
  {
    href: '/about',
    image: '/images/accountrack/accounting-team-collaboration.svg',
    alt: 'Owner, manager, accountant and employee sharing one AccounTrack company workspace',
    title: 'Built for the whole team',
    description: 'Owners, managers, accountants and staff work in one shared workspace.',
    cta: 'About AccounTrack'
  },
  {
    href: '/contact',
    image: '/images/accountrack/secure-multi-tenant-business-data.svg',
    alt: 'Shield protecting separate, isolated company data in AccounTrack',
    title: 'Secure, separate company data',
    description: 'Every company runs in its own isolated workspace.',
    cta: 'Ask us a question'
  }
]

const ShowcaseSection = ({ lang }: { lang: Locale }) => {
  return (
    <section className='bg-backgroundDefault'>
      <div className='mli-auto max-is-[1200px] pli-4 sm:pli-6 lg:pli-10 plb-16 lg:plb-20'>
        <div className='text-center max-is-[720px] mli-auto mbe-10'>
          <Typography variant='h3' component='h2' className='font-bold mbe-3'>
            See AccounTrack in action
          </Typography>
          <Typography variant='body1' color='text.secondary'>
            A quick look at how the platform keeps your invoices, team and company data organized.
          </Typography>
        </div>

        <Grid container spacing={5}>
          {showcases.map(item => (
            <Grid key={item.href} size={{ xs: 12, md: 4 }}>
              <Card variant='outlined' className='h-full' sx={{ borderRadius: 3 }}>
                <Image src={item.image} alt={item.alt} width={800} height={520} className='is-full bs-auto' loading='lazy' />
                <CardContent className='flex flex-col items-start gap-2'>
                  <Typography variant='h6' component='h3' className='font-semibold'>
                    {item.title}
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    {item.description}
                  </Typography>
                  <Typography
                    component={NextLink}
                    href={getLocalizedUrl(item.href, lang)}
                    variant='body2'
                    color='primary'
                    className='font-medium mbs-1'
                  >
                    {item.cta} →
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  )
}

export default ShowcaseSection
