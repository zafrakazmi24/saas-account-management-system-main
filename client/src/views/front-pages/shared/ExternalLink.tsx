'use client'

import type { ReactNode } from 'react'

import Link from '@mui/material/Link'

/** Link to another website: opens in a new tab and does not pass referrer or window access. */
const ExternalLink = ({ href, children }: { href: string; children: ReactNode }) => (
  <Link href={href} target='_blank' rel='noopener noreferrer' underline='always'>
    {children}
  </Link>
)

export default ExternalLink
