import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'

export default function ContactForm() {
  return (
    <form id='contact-form' name='contact-form' className='space-y-4' netlify>
      <input type='hidden' name='form-name' value='contact-form' />
      <div className='space-y-1'>
        <Label htmlFor='nameOrOrganization'>Name/Organization</Label>
        <Input
          type='text'
          id='nameOrOrganization'
          name='nameOrOrganization'
          placeholder='Enter your name or organization'
          required
        />
      </div>
      <div className='space-y-1'>
        <Label htmlFor='email'>Email</Label>
        <Input
          type='email'
          id='email'
          name='email'
          placeholder='Enter your email'
          required
        />
      </div>
      <div className='space-y-1'>
        <Label htmlFor='message'>Message</Label>
        <Textarea
          id='message'
          name='message'
          rows='4'
          placeholder='Enter your message'
          required
        />
      </div>
      <button
        type='submit'
        className='w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
      >
        Submit
      </button>
    </form>
  )
}
