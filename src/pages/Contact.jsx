import { Code, Link, Mail, MapPin, Send } from 'lucide-react'
import { useState } from 'react'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xlgajado'

const Contact = () => {
  const [status, setStatus] = useState('idle')

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus('sending')

    const form = event.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error('Message failed')
      }

      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id='contact' className='min-h-screen w-full pb-16 pt-24 text-white'>
      <div className='mx-auto max-w-6xl'>
        <div className='mb-10'>
          <p className='inline-flex items-center rounded-full border border-neutral-700 px-4 py-1 text-xs uppercase tracking-[0.2em] text-neutral-400'>
            Contact
          </p>
          <h1 className='mt-5 text-4xl font-bold text-neutral-100 sm:text-5xl'>
            Let&apos;s <span className='text-orange-700'>Connect</span>
          </h1>
        </div>

        <div className='grid gap-6 lg:grid-cols-[0.85fr_1.15fr]'>
            {/* left side */}
          <aside className='rounded-2xl border border-neutral-800 bg-gradient-to-b from-neutral-900/80 to-neutral-950/40 p-6 sm:p-8'>
            <h2 className='text-2xl font-bold text-neutral-100'>Get in touch</h2>
            <p className='mt-4 text-sm leading-relaxed text-neutral-400 sm:text-base'>
              Have a project, role, or collaboration in mind? Send a message and I&apos;ll get back
              to you.
            </p>

            <div className='mt-8 space-y-3'>
              <a
                href='mailto:anubhavgupta1045@gmail.com'
                className='group flex items-center gap-3 rounded-xl border border-neutral-800 bg-neutral-950/50 px-4 py-3 transition duration-300 hover:border-orange-700/60 hover:bg-neutral-900'
              >
                <span className='flex h-10 w-10 items-center justify-center rounded-lg bg-orange-700/15 text-orange-300'>
                  <Mail size={18} />
                </span>
                <span className='text-sm text-neutral-300'>anubhavgupta1045@gmail.com</span>
              </a>

              <a
                href='https://www.linkedin.com/in/anubhav-gupta-08b1bb277/'
                target='_blank'
                rel='noreferrer'
                className='group flex items-center gap-3 rounded-xl border border-neutral-800 bg-neutral-950/50 px-4 py-3 transition duration-300 hover:border-orange-700/60 hover:bg-neutral-900'
              >
                <span className='flex h-10 w-10 items-center justify-center rounded-lg bg-orange-700/15 text-orange-300'>
                  <Link size={18} />
                </span>
                <span className='text-sm text-neutral-300'>LinkedIn</span>
              </a>

              <a
                href='https://github.com/anubxc'
                target='_blank'
                rel='noreferrer'
                className='group flex items-center gap-3 rounded-xl border border-neutral-800 bg-neutral-950/50 px-4 py-3 transition duration-300 hover:border-orange-700/60 hover:bg-neutral-900'
              >
                <span className='flex h-10 w-10 items-center justify-center rounded-lg bg-orange-700/15 text-orange-300'>
                <Code size={18} />
                </span>
                <span className='text-sm text-neutral-300'>GitHub</span>
              </a>

              <div className='flex items-center gap-3 rounded-xl border border-neutral-800 bg-neutral-950/50 px-4 py-3'>
                <span className='flex h-10 w-10 items-center justify-center rounded-lg bg-orange-700/15 text-orange-300'>
                  <MapPin size={18} />
                </span>
                <span className='text-sm text-neutral-300'>India · Remote / Hybrid</span>
              </div>
            </div>
          </aside>

        {/* right side */}
          <form
            onSubmit={handleSubmit}
            className='rounded-2xl border border-neutral-800 bg-gradient-to-b from-neutral-900/80 to-neutral-950/40 p-6 sm:p-8'
          >
            <input type='text' name='_gotcha' className='hidden' tabIndex='-1' autoComplete='off' />

            <div className='grid gap-5 sm:grid-cols-2'>
              <div>
                <label htmlFor='name' className='text-sm font-medium text-neutral-300'>
                  Name
                </label>
                <input
                  id='name'
                  name='name'
                  type='text'
                  required
                  className='mt-2 w-full rounded-xl border border-neutral-800 bg-neutral-950/70 px-4 py-3 text-sm text-neutral-100 outline-none transition duration-300 placeholder:text-neutral-600 focus:border-orange-700/70'
                  placeholder='Your name'
                />
              </div>

              <div>
                <label htmlFor='email' className='text-sm font-medium text-neutral-300'>
                  Email
                </label>
                <input
                  id='email'
                  name='email'
                  type='email'
                  required
                  className='mt-2 w-full rounded-xl border border-neutral-800 bg-neutral-950/70 px-4 py-3 text-sm text-neutral-100 outline-none transition duration-300 placeholder:text-neutral-600 focus:border-orange-700/70'
                  placeholder='you@example.com'
                />
              </div>
            </div>

            <div className='mt-5'>
              <label htmlFor='subject' className='text-sm font-medium text-neutral-300'>
                Subject
              </label>
              <input
                id='subject'
                name='subject'
                type='text'
                className='mt-2 w-full rounded-xl border border-neutral-800 bg-neutral-950/70 px-4 py-3 text-sm text-neutral-100 outline-none transition duration-300 placeholder:text-neutral-600 focus:border-orange-700/70'
                placeholder='Project, role, or collaboration'
              />
            </div>

            <div className='mt-5'>
              <label htmlFor='message' className='text-sm font-medium text-neutral-300'>
                Message
              </label>
              <textarea
                id='message'
                name='message'
                required
                rows='7'
                className='mt-2 w-full resize-none rounded-xl border border-neutral-800 bg-neutral-950/70 px-4 py-3 text-sm text-neutral-100 outline-none transition duration-300 placeholder:text-neutral-600 focus:border-orange-700/70'
                placeholder='Tell me about your idea...'
              ></textarea>
            </div>

            <div className='mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
              <button
                type='submit'
                disabled={status === 'sending'}
                className='inline-flex w-fit items-center gap-2 rounded-full bg-orange-700 px-5 py-3 text-sm font-medium text-white transition duration-300 hover:bg-orange-800 disabled:cursor-not-allowed disabled:opacity-60'
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
                <Send size={16} />
              </button>

              {status === 'success' && (
                <p className='text-sm text-emerald-300'>Message sent successfully.</p>
              )}
              {status === 'error' && (
                <p className='text-sm text-orange-300'>Message could not be sent.</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
