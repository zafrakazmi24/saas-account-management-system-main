'use client'

// React Imports
import type { ReactNode } from 'react'

// MUI Imports
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'

type Props = {
  eyebrow?: string
  title: string
  description: string
  children?: ReactNode
}

/** Top-of-page banner. Renders the page's single <h1>. */
const PageHero = ({ eyebrow, title, description, children }: Props) => {
  return (
    <section className='relative overflow-hidden'>
      <div
        aria-hidden
        className='absolute inset-block-start-0 inset-inline-0 bs-[360px] bg-primaryLighter opacity-40 -z-10'
        style={{ maskImage: 'linear-gradient(to bottom, black, transparent)' }}
      />
      <div className='mli-auto max-is-[900px] pli-4 sm:pli-6 plb-14 lg:plb-20 flex flex-col items-center text-center gap-4'>
        {eyebrow ? <Chip label={eyebrow} color='primary' variant='tonal' size='small' className='font-medium' /> : null}
        <Typography variant='h1' className='text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-bold leading-[1.15]'>
          {title}
        </Typography>
        <Typography variant='body1' color='text.secondary' className='max-is-[680px] leading-relaxed'>
          {description}
        </Typography>
        {children}
      </div>
    </section>
  )
}

export default PageHero
