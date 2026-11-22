'use client'

// React Imports
import type { ReactNode } from 'react'

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

type Feature = { icon: string; title: string; description: string }

type Group = {
  id: string
  title: string
  intro: ReactNode
  features: Feature[]
  image?: { src: string; alt: string }
}

const groups: Group[] = [
  {
    id: 'invoicing',
    title: 'Invoicing and payments',
    intro: (
      <>
        Create an{' '}
        <ExternalLink href='https://www.investopedia.com/terms/i/invoice.asp'>invoice</ExternalLink> in a few clicks,
        record the payments that come in and see at a glance what is still outstanding.
      </>
    ),
    features: [
      {
        icon: 'ri-file-list-3-line',
        title: 'Invoice management',
        description: 'Create, send and track invoices from one consistent workflow.'
      },
      {
        icon: 'ri-bank-card-line',
        title: 'Payment tracking',
        description: 'Record payments against invoices and keep an accurate view of what is outstanding.'
      },
      {
        icon: 'ri-line-chart-line',
        title: 'Income tracking',
        description: 'Capture income sources separately from invoicing for a fuller financial picture.'
      }
    ],
    image: {
      src: '/images/accountrack/business-invoice-management-dashboard.svg',
      alt: 'AccounTrack invoice dashboard showing paid, pending and overdue invoice totals'
    }
  },
  {
    id: 'records',
    title: 'Customers, suppliers and products',
    intro: 'Keep every business relationship and every item you sell in one searchable place.',
    features: [
      {
        icon: 'ri-user-3-line',
        title: 'Customer management',
        description: 'Keep a complete record of every customer, their contacts and their history.'
      },
      {
        icon: 'ri-truck-line',
        title: 'Supplier management',
        description: 'Track suppliers and vendor details alongside the purchases you make from them.'
      },
      {
        icon: 'ri-box-3-line',
        title: 'Product management',
        description: 'Organize your product and service catalog with categories that make sense for your business.'
      },
      {
        icon: 'ri-wallet-3-line',
        title: 'Expense management',
        description: 'Log and categorize business expenses so nothing slips through the cracks.'
      }
    ]
  },
  {
    id: 'reports',
    title: 'Reports and business insights',
    intro: 'Turn everyday records into clear reports that support real business decisions.',
    features: [
      {
        icon: 'ri-bar-chart-2-line',
        title: 'Reports and analytics',
        description: 'Sales, customer and invoice reports built from the data you already enter.'
      },
      {
        icon: 'ri-dashboard-3-line',
        title: 'Dashboards',
        description: 'See revenue, expenses and activity at a glance the moment you log in.'
      }
    ],
    image: {
      src: '/images/accountrack/business-reports-analytics-chart.svg',
      alt: 'Bar and line chart comparing monthly business income and expenses in AccounTrack reports'
    }
  },
  {
    id: 'team-security',
    title: 'Team access and data security',
    intro: (
      <>
        Invite your team and give each person the right level of access. Companies are kept apart using a{' '}
        <ExternalLink href='https://en.wikipedia.org/wiki/Multitenancy'>multi-tenant design</ExternalLink>.
      </>
    ),
    features: [
      {
        icon: 'ri-group-line',
        title: 'User management',
        description: 'Invite your team and manage who has access to your company workspace.'
      },
      {
        icon: 'ri-shield-keyhole-line',
        title: 'Role-based access control',
        description: 'Give owners, managers, accountants and employees exactly the access they need.'
      },
      {
        icon: 'ri-building-4-line',
        title: 'Multi-tenant architecture',
        description: 'Run one or more companies from the same account with isolated, secure data.'
      }
    ],
    image: {
      src: '/images/accountrack/secure-multi-tenant-business-data.svg',
      alt: 'Shield and padlock protecting separate company data sets in AccounTrack'
    }
  }
]

const FeaturesView = ({ lang }: { lang: Locale }) => {
  return (
    <PublicPageLayout lang={lang}>
      <PageHero
        eyebrow='Features'
        title='Business account management features'
        description='Everything a growing business needs to manage customers, invoices, payments, expenses and reports, without juggling spreadsheets or separate tools.'
      >
        <div className='flex flex-wrap justify-center gap-4 mbs-2'>
          <Button component={NextLink} href={getLocalizedUrl('/register', lang)} variant='contained' size='large'>
            Get started free
          </Button>
          <Button component={NextLink} href={getLocalizedUrl('/pricing', lang)} variant='outlined' size='large'>
            See pricing
          </Button>
        </div>
      </PageHero>

      {groups.map((group, index) => (
        <section
          key={group.id}
          id={group.id}
          className={`${index % 2 === 1 ? 'bg-backgroundDefault' : ''} scroll-mt-20`}
        >
          <div className='mli-auto max-is-[1200px] pli-4 sm:pli-6 lg:pli-10 plb-14 lg:plb-20'>
            <Grid container spacing={8} alignItems='center' direction={index % 2 === 1 ? 'row-reverse' : 'row'}>
              <Grid size={{ xs: 12, md: group.image ? 6 : 12 }}>
                <Typography variant='h4' component='h2' className='font-bold mbe-3'>
                  {group.title}
                </Typography>
                <Typography variant='body1' color='text.secondary' className='mbe-6 leading-relaxed'>
                  {group.intro}
                </Typography>
                <Grid container spacing={4}>
                  {group.features.map(feature => (
                    <Grid key={feature.title} size={{ xs: 12, sm: group.image ? 12 : 6, md: group.image ? 12 : 3 }}>
                      <Card variant='outlined' className='h-full' sx={{ borderRadius: 3 }}>
                        <CardContent className='flex items-start gap-4'>
                          <div className='flex shrink-0 items-center justify-center is-11 bs-11 rounded-lg bg-primaryLighter text-primary'>
                            <i className={feature.icon} style={{ fontSize: 22 }} />
                          </div>
                          <div>
                            <Typography variant='subtitle1' component='h3' className='font-semibold'>
                              {feature.title}
                            </Typography>
                            <Typography variant='body2' color='text.secondary'>
                              {feature.description}
                            </Typography>
                          </div>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              {group.image ? (
                <Grid size={{ xs: 12, md: 6 }}>
                  <Image src={group.image.src} alt={group.image.alt} width={800} height={520} className='is-full bs-auto' />
                </Grid>
              ) : null}
            </Grid>
          </div>
        </section>
      ))}

      <section className='mli-auto max-is-[900px] pli-4 sm:pli-6 plb-16 text-center'>
        <Typography variant='h4' component='h2' className='font-bold mbe-3'>
          Ready to try AccounTrack?
        </Typography>
        <Typography variant='body1' color='text.secondary' className='mbe-6'>
          Start on the free plan, or <NextLink href={getLocalizedUrl('/about', lang)}>learn more about us</NextLink>.
          Have a question? <NextLink href={getLocalizedUrl('/contact', lang)}>Contact our team</NextLink>.
        </Typography>
        <Button component={NextLink} href={getLocalizedUrl('/register', lang)} variant='contained' size='large'>
          Create a free account
        </Button>
      </section>
    </PublicPageLayout>
  )
}

export default FeaturesView
