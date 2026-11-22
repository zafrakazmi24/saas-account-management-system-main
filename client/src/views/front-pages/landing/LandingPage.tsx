// Type Imports
import type { Locale } from '@configs/i18n'

// Component Imports
import LandingNavbar from './LandingNavbar'
import HeroSection from './HeroSection'
import ValueSection from './ValueSection'
import FeaturesSection from './FeaturesSection'
import HowItWorksSection from './HowItWorksSection'
import PricingSection from './PricingSection'
import BenefitsSection from './BenefitsSection'
import SecuritySection from './SecuritySection'
import ShowcaseSection from './ShowcaseSection'
import CtaSection from './CtaSection'
import LandingFooter from './LandingFooter'

const LandingPage = ({ lang }: { lang: Locale }) => {
  return (
    <div className='flex flex-col is-full bs-full'>
      <LandingNavbar lang={lang} />
      <main className='flex-1'>
        <HeroSection lang={lang} />
        <ValueSection />
        <FeaturesSection lang={lang} />
        <HowItWorksSection />
        <PricingSection lang={lang} />
        <BenefitsSection />
        <SecuritySection />
        <ShowcaseSection lang={lang} />
        <CtaSection lang={lang} />
      </main>
      <LandingFooter lang={lang} />
    </div>
  )
}

export default LandingPage
