// React Imports
import type { ReactNode } from 'react'

// Type Imports
import type { Locale } from '@configs/i18n'

// Component Imports
import LandingNavbar from '@views/front-pages/landing/LandingNavbar'
import LandingFooter from '@views/front-pages/landing/LandingFooter'

/** Shared chrome (navbar + footer) for the public marketing pages. */
const PublicPageLayout = ({ lang, children }: { lang: Locale; children: ReactNode }) => {
  return (
    <div className='flex flex-col is-full bs-full'>
      <LandingNavbar lang={lang} />
      <main className='flex-1'>{children}</main>
      <LandingFooter lang={lang} />
    </div>
  )
}

export default PublicPageLayout
