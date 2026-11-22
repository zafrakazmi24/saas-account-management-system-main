'use client'

// Next Imports
import NextLink from 'next/link'
import Image from 'next/image'

// MUI Imports
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'

// Type Imports
import type { Locale } from '@configs/i18n'

// Component Imports
import PublicPageLayout from '@views/front-pages/shared/PublicPageLayout'
import PageHero from '@views/front-pages/shared/PageHero'
import ExternalLink from '@views/front-pages/shared/ExternalLink'

// Util Imports
import { getLocalizedUrl } from '@/utils/i18n'

const values = [
  {
    icon: 'ri-layout-grid-line',
    title: 'Simple by design',
    description:
      'Business software should not need a training course. We keep every screen focused on one job so owners and staff can get on with their day.'
  },
  {
    icon: 'ri-shield-check-line',
    title: 'Your data stays yours',
    description:
      'Every company works in its own separate workspace, and access is controlled by role, so people only see what they need to see.'
  },
  {
    icon: 'ri-line-chart-line',
    title: 'Clear numbers, better decisions',
    description:
      'Invoices, payments, expenses and income feed straight into reports, so you always know where the business stands.'
  }
]

const audiences = [
  'Small businesses replacing spreadsheets and paper records',
  'Shops, traders and service providers who invoice customers regularly',
  'Growing teams that need owners, managers, accountants and staff working in one place',
  'Business owners who run more than one company and want each kept separate'
]

const AboutView = ({ lang }: { lang: Locale }) => {
  return (
    <PublicPageLayout lang={lang}>
      <PageHero
        eyebrow='About AccounTrack'
        title='Account management software built for small businesses'
        description='AccounTrack brings customers, suppliers, products, invoices, payments, expenses and reports into one organized platform, so running your accounts feels simple instead of stressful.'
      />

      <section className='mli-auto max-is-[1200px] pli-4 sm:pli-6 lg:pli-10 plb-10 lg:plb-16'>
        <Grid container spacing={8} alignItems='center'>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant='h4' component='h2' className='font-bold mbe-3'>
              Our mission
            </Typography>
            <Typography variant='body1' color='text.secondary' className='mbe-4 leading-relaxed'>
              Many small businesses still keep their accounts across spreadsheets, notebooks and chat messages. It works
              until an invoice is lost, a payment is forgotten or a report is needed in a hurry.
            </Typography>
            <Typography variant='body1' color='text.secondary' className='mbe-4 leading-relaxed'>
              AccounTrack exists to give every business, whatever its size, one dependable place for its records. You
              create invoices, record payments and expenses, and see the results in{' '}
              <NextLink href={getLocalizedUrl('/features', lang)}>reports and dashboards</NextLink> without any extra
              work.
            </Typography>
            <Typography variant='body1' color='text.secondary' className='leading-relaxed'>
              If you are new to the idea, the{' '}
              <ExternalLink href='https://en.wikipedia.org/wiki/Accounting_software'>
                accounting software overview on Wikipedia
              </ExternalLink>{' '}
              explains what this kind of tool does and why businesses adopt it.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Image
              src='/images/accountrack/accounting-team-collaboration.svg'
              alt='Business owner, manager, accountant and employee connected to one shared AccounTrack company workspace'
              width={800}
              height={520}
              className='is-full bs-auto'
            />
          </Grid>
        </Grid>
      </section>

      <section className='bg-backgroundDefault'>
        <div className='mli-auto max-is-[1200px] pli-4 sm:pli-6 lg:pli-10 plb-16 lg:plb-20'>
          <div className='text-center max-is-[720px] mli-auto mbe-10'>
            <Typography variant='h4' component='h2' className='font-bold mbe-3'>
              What we believe in
            </Typography>
            <Typography variant='body1' color='text.secondary'>
              Three ideas shape every feature we add to the platform.
            </Typography>
          </div>
          <Grid container spacing={5}>
            {values.map(value => (
              <Grid key={value.title} size={{ xs: 12, md: 4 }}>
                <Card variant='outlined' className='h-full' sx={{ borderRadius: 3 }}>
                  <CardContent className='flex flex-col items-start gap-3'>
                    <div className='flex items-center justify-center is-11 bs-11 rounded-lg bg-primaryLighter text-primary'>
                      <i className={value.icon} style={{ fontSize: 22 }} />
                    </div>
                    <Typography variant='h6' component='h3' className='font-semibold'>
                      {value.title}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      {value.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </section>

      <section className='mli-auto max-is-[900px] pli-4 sm:pli-6 plb-16 lg:plb-20'>
        <Typography variant='h4' component='h2' className='font-bold mbe-4'>
          Who AccounTrack is for
        </Typography>
        <ul className='flex flex-col gap-3 list-none pli-0 mbe-6'>
          {audiences.map(item => (
            <li key={item} className='flex items-start gap-3'>
              <i className='ri-check-line text-primary text-[20px] mbs-[2px]' />
              <Typography variant='body1'>{item}</Typography>
            </li>
          ))}
        </ul>
        <Typography variant='body1' color='text.secondary' className='leading-relaxed'>
          Each company runs in its own secure workspace using a{' '}
          <ExternalLink href='https://en.wikipedia.org/wiki/Multitenancy'>multi-tenant architecture</ExternalLink>, and
          team members get access through{' '}
          <ExternalLink href='https://en.wikipedia.org/wiki/Role-based_access_control'>
            role-based access control
          </ExternalLink>
          .
        </Typography>

        <div className='flex flex-wrap gap-4 mbs-8'>
          <Button component={NextLink} href={getLocalizedUrl('/register', lang)} variant='contained' size='large'>
            Create a free account
          </Button>
          <Button component={NextLink} href={getLocalizedUrl('/contact', lang)} variant='outlined' size='large'>
            Contact us
          </Button>
        </div>
      </section>
    </PublicPageLayout>
  )
}

export default AboutView
