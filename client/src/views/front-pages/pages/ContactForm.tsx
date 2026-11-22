'use client'

// React Imports
import { useState } from 'react'
import type { FormEvent } from 'react'

// MUI Imports
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Alert from '@mui/material/Alert'

// Config Imports
import { siteConfig } from '@configs/siteConfig'

/**
 * Contact form. There is no mail server behind it: on submit it opens the
 * visitor's email app with the message pre-filled and addressed to us.
 */
const ContactForm = () => {
  const [sent, setSent] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') || '').trim()
    const email = String(data.get('email') || '').trim()
    const subject = String(data.get('subject') || '').trim() || 'Question about AccounTrack'
    const message = String(data.get('message') || '').trim()

    const body = `${message}\n\n---\nName: ${name}\nReply-to: ${email}`

    window.location.href = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-4' aria-label='Contact form'>
      <TextField name='name' label='Your name' required fullWidth autoComplete='name' />
      <TextField name='email' label='Your email' type='email' required fullWidth autoComplete='email' />
      <TextField name='subject' label='Subject' fullWidth />
      <TextField name='message' label='How can we help?' required fullWidth multiline minRows={5} />
      <Button type='submit' variant='contained' size='large'>
        Send message
      </Button>
      {sent ? (
        <Alert severity='info'>
          Your email app should now open with your message ready to send. If nothing opens, write to us directly at{' '}
          {siteConfig.contact.email}.
        </Alert>
      ) : (
        <Typography variant='caption' color='text.secondary'>
          Sending opens your email app with this message addressed to {siteConfig.contact.email}.
        </Typography>
      )}
    </form>
  )
}

export default ContactForm
