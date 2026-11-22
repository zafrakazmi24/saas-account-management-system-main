'use client'

// Next Imports
import NextLink from 'next/link'

// MUI Imports
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'

// Type Imports
import type { Locale } from '@configs/i18n'

// Component Imports
import Logo from '@components/layout/shared/Logo'

// Config Imports
import themeConfig from '@configs/themeConfig'
import { siteConfig, absoluteUrl } from '@configs/siteConfig'

// Util Imports
import { getLocalizedUrl } from '@/utils/i18n'

type FooterLink = {
  label: string
  href: string
}

const LandingFooter = ({ lang }: { lang: Locale }) => {
  const year = new Date().getFullYear()
  const { city, region, country, email } = siteConfig.contact
  const place = [city, region, country].filter(Boolean).join(', ')

  const shareUrl = encodeURIComponent(absoluteUrl(`/${lang}`))
  const shareText = encodeURIComponent('AccounTrack: business account management software for invoices, payments and expenses')

  const shareLinks = [
    { label: 'Share on Facebook', icon: 'ri-facebook-fill', href: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}` },
    { label: 'Share on LinkedIn', icon: 'ri-linkedin-fill', href: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}` },
    { label: 'Share on X', icon: 'ri-twitter-x-fill', href: `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}` },
    { label: 'Share on WhatsApp', icon: 'ri-whatsapp-line', href: `https://wa.me/?text=${shareText}%20${shareUrl}` }
  ]

  const profileLinks = [
    { label: 'AccounTrack on Facebook', icon: 'ri-facebook-fill', href: siteConfig.social.facebook },
    { label: 'AccounTrack on LinkedIn', icon: 'ri-linkedin-fill', href: siteConfig.social.linkedin },
    { label: 'AccounTrack on X', icon: 'ri-twitter-x-fill', href: siteConfig.social.x },
    { label: 'AccounTrack on Instagram', icon: 'ri-instagram-line', href: siteConfig.social.instagram }
  ].filter(item => item.href)

  const productLinks: FooterLink[] = [
    { label: 'Features', href: getLocalizedUrl('/features', lang) },
    { label: 'Pricing', href: getLocalizedUrl('/pricing', lang) },
    { label: 'Dashboard', href: getLocalizedUrl('/login', lang) }
  ]

  const companyLinks: FooterLink[] = [
    { label: 'About Us', href: getLocalizedUrl('/about', lang) },
    { label: 'Contact Us', href: getLocalizedUrl('/contact', lang) },
    { label: 'Privacy Policy', href: getLocalizedUrl('/privacy-policy', lang) },
    { label: 'Terms of Service', href: getLocalizedUrl('/terms-of-service', lang) }
  ]

  const accountLinks: FooterLink[] = [
    { label: 'Login', href: getLocalizedUrl('/login', lang) },
    { label: 'Get Started', href: getLocalizedUrl('/register', lang) }
  ]

  const renderLink = (link: FooterLink) => {
    const isAnchor = link.href.startsWith('#')

    return (
      <li key={link.label}>
        <Typography
          component={isAnchor ? 'a' : NextLink}
          href={link.href}
          color='text.secondary'
          className='hover:text-primary transition-colors no-underline'
          variant='body2'
        >
          {link.label}
        </Typography>
      </li>
    )
  }

  return (
    <footer className='border-bs bg-backgroundPaper'>
      <div className='mli-auto max-is-[1200px] pli-4 sm:pli-6 lg:pli-10 plb-14'>
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-8'>
          <div className='col-span-2 sm:col-span-1 flex flex-col gap-3'>
            <Logo />
            <Typography variant='body2' color='text.secondary' className='max-is-[240px]'>
              Multi-tenant account management for growing businesses.
            </Typography>
            <Typography variant='body2' color='text.secondary' component='address' className='not-italic'>
              {place}
              <br />
              <a href={`mailto:${email}`} className='hover:text-primary no-underline text-inherit'>
                {email}
              </a>
            </Typography>
            {profileLinks.length ? (
              <div className='flex items-center gap-3'>
                {profileLinks.map(item => (
                  <a key={item.label} href={item.href} target='_blank' rel='noopener noreferrer' aria-label={item.label} className='text-textSecondary hover:text-primary'>
                    <i className={`${item.icon} text-[20px]`} />
                  </a>
                ))}
              </div>
            ) : null}
          </div>

          <div>
            <Typography variant='subtitle2' component='h2' className='font-semibold mbe-3'>
              Product
            </Typography>
            <ul className='flex flex-col gap-2 list-none pli-0'>{productLinks.map(renderLink)}</ul>
          </div>

          <div>
            <Typography variant='subtitle2' component='h2' className='font-semibold mbe-3'>
              Company
            </Typography>
            <ul className='flex flex-col gap-2 list-none pli-0'>{companyLinks.map(renderLink)}</ul>
          </div>

          <div>
            <Typography variant='subtitle2' component='h2' className='font-semibold mbe-3'>
              Account
            </Typography>
            <ul className='flex flex-col gap-2 list-none pli-0'>{accountLinks.map(renderLink)}</ul>
          </div>
        </div>

        <Divider className='mbs-10 mbe-6' />

        <div className='flex items-center justify-center sm:justify-start gap-3 mbe-6 flex-wrap'>
          <Typography variant='body2' color='text.secondary'>
            Share AccounTrack:
          </Typography>
          {shareLinks.map(item => (
            <a
              key={item.label}
              href={item.href}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={item.label}
              className='text-textSecondary hover:text-primary'
            >
              <i className={`${item.icon} text-[20px]`} />
            </a>
          ))}
        </div>

        <div className='flex flex-col sm:flex-row items-center justify-between gap-4'>
          <Typography variant='body2' color='text.secondary'>
            © {year} {themeConfig.templateName}. All rights reserved.
          </Typography>
          <div className='flex items-center gap-4'>
            <Typography
              component={NextLink}
              href={getLocalizedUrl('/privacy-policy', lang)}
              variant='body2'
              color='text.secondary'
              className='hover:text-primary transition-colors no-underline'
            >
              Privacy Policy
            </Typography>
            <Typography
              component={NextLink}
              href={getLocalizedUrl('/terms-of-service', lang)}
              variant='body2'
              color='text.secondary'
              className='hover:text-primary transition-colors no-underline'
            >
              Terms of Service
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default LandingFooter
