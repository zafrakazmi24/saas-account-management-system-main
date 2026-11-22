// Plain data module (no 'use client') so both server pages and client views can import it
export const pricingFaqs = [
  {
    question: 'Is there a free plan?',
    answer:
      'Yes. The Free plan supports up to 2 users with basic invoicing and community support, so you can try AccounTrack before paying anything.'
  },
  {
    question: 'Do you offer yearly billing?',
    answer:
      'Yes. Every paid plan lists both a monthly and a yearly price, and the yearly price works out lower than twelve monthly payments.'
  },
  {
    question: 'How many people can use my account?',
    answer:
      'It depends on the plan: Free supports up to 2 users, Regular up to 5, Standard up to 15 and Premium has no user limit.'
  },
  {
    question: 'Is my business data kept separate from other companies?',
    answer:
      'Yes. AccounTrack is multi-tenant, which means every company works in its own isolated workspace, and access inside it is controlled by user role.'
  }
]
