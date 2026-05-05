import { ArrowUpRight, MoveUpRight } from 'lucide-react'
import React from 'react'

const About = () => {
  const stats = [
    { value: '2+', label: 'Years Coding' },
    { value: '12+', label: 'Projects Completed' },
    // { value: '1', label: 'Experiment Built' },
    // { value: '15+', label: 'Users Served' },
  ]

  const socials = [
    {
      name: 'GitHub',
      href: 'https://github.com/anubxc',
      icon: 'M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48 0-.24-.01-.88-.01-1.73-2.78.6-3.37-1.18-3.37-1.18-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.04 1.53 1.04.9 1.54 2.35 1.09 2.93.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.53 9.53 0 0 1 12 6.8c.85 0 1.7.12 2.5.35 1.9-1.29 2.74-1.02 2.74-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.35 4.69-4.58 4.94.36.31.68.93.68 1.87 0 1.35-.01 2.43-.01 2.76 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10Z',
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/anubhav-gupta-08b1bb277/',
      icon: 'M6.94 5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3 8.48h4V21H3V8.48Zm6.34 0h3.98v1.68h.06c.56-1.03 1.92-2.11 3.95-2.11 4.22 0 5 2.78 5 6.39V21h-3.95v-5.71c0-1.36-.03-3.11-1.9-3.11-1.9 0-2.19 1.48-2.19 3.01V21H9.34V8.48Z',
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/anubxc',
      icon: 'M12 2c2.72 0 3.06.01 4.12.06 1.06.05 1.79.22 2.42.47a4.9 4.9 0 0 1 1.78 1.16 4.9 4.9 0 0 1 1.16 1.78c.24.63.42 1.36.47 2.42.05 1.06.06 1.4.06 4.12s-.01 3.06-.06 4.12c-.05 1.06-.23 1.79-.47 2.42a5.3 5.3 0 0 1-2.94 2.94c-.63.24-1.36.42-2.42.47-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.79-.23-2.42-.47a4.9 4.9 0 0 1-1.78-1.16 4.9 4.9 0 0 1-1.16-1.78c-.24-.63-.42-1.36-.47-2.42C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.06.23-1.79.47-2.42A4.9 4.9 0 0 1 3.69 3.7 4.9 4.9 0 0 1 5.47 2.53c.63-.24 1.36-.42 2.42-.47C8.94 2.01 9.28 2 12 2Zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm5.25-3.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z',
    },
    {
      name: 'Email',
      href: 'mailto:anubhavgupta1045@gmail.com',
      icon: 'M3 4h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm17 3.24-7.93 7.1a1 1 0 0 1-1.33 0L3 7.21V18h17V7.24ZM4.51 6l6.82 6.02L18.05 6H4.51Z',
    },
  ]

  return (
    <section id='about' className='min-h-screen pt-24 pb-16 text-white'>
      <div className='mx-auto max-w-6xl'>
        <div className='mb-12'>
          <p className='inline-flex items-center rounded-full border border-neutral-700 px-4 py-1 text-xs uppercase tracking-[0.2em] text-neutral-400'>
            About Me
          </p>
          <h1 className='mt-5 text-3xl font-bold text-neutral-100 sm:text-5xl'>
            Who <span className='text-orange-700'>I</span> Am
          </h1>
        </div>

        <div className='grid gap-8 lg:grid-cols-[1.5fr_1fr]'>
          <article className='rounded-2xl border border-neutral-800 bg-gradient-to-b from-neutral-900/80 to-neutral-950/40 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] sm:p-8'>
            <p className='font-brand text-base leading-relaxed text-neutral-300 sm:text-lg'>
              I&apos;m a final year B.Tech Computer Science student and a frontend-focused developer skilled in React.js, JavaScript (ES6+), and the MERN stack, with a strong foundation in building scalable and high-performance web applications. I work with tools and technologies like Tailwind CSS, Node.js, Express, MongoDB, and JWT, and I enjoy enhancing user experiences through clean UI, efficient architecture, and smooth interactions.
            </p>
            {/* <p className='mt-6 font-brand text-lg leading-relaxed text-neutral-300'>
              I have hands-on experience as a Frontend Developer at Edunet Foundation, where I built a responsive study scheduler with full CRUD functionality and optimized performance across browsers. I&apos;ve also developed projects like an AI Interview Planner and a full-stack post feed app, gaining practical experience in integrating APIs, handling authentication, and building real-world, user-focused applications.
            </p> */}

            <div className='mt-8 grid gap-4 sm:grid-cols-2'>
              {stats.map((item) => (
                <div
                  key={item.label}
                  className='rounded-xl border border-neutral-800 bg-neutral-900/60 p-3.5 transition duration-300 hover:-translate-y-0.5 hover:border-orange-700/60 sm:p-4'
                >
                  <p className='text-2xl font-bold text-neutral-100 sm:text-3xl'>
                    {item.value}
                  </p>
                  <p className='mt-1 text-sm text-neutral-400'>{item.label}</p>
                </div>
              ))}
            </div>
          </article>

          <aside className='rounded-2xl border border-neutral-800 bg-neutral-900/50 p-5 sm:p-8'>
            <h2 className='text-lg font-semibold text-neutral-100 sm:text-xl'>Find Me</h2>
            <p className='mt-2 text-sm leading-relaxed text-neutral-400'>
              Let&apos;s connect and build something meaningful together.
            </p>

            <div className='mt-6 space-y-3'>
              {socials.map((social) => (
                <a
                  target="_blank"
                  key={social.name}
                  href={social.href}
                  className='group flex items-center justify-between rounded-xl border border-neutral-800 bg-neutral-950/50 px-3.5 py-3 transition duration-300 hover:border-orange-700/60 hover:bg-neutral-900 sm:px-4'
                >
                  <div className='flex items-center gap-3'>
                    <span className='flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-800/70 text-neutral-300 transition group-hover:bg-orange-700/20 group-hover:text-orange-300'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        width='18'
                        height='18'
                        fill='currentColor'
                      >
                        <path d={social.icon}></path>
                      </svg>
                    </span>
                    <span className='text-sm font-medium text-neutral-200'>
                      {social.name}
                    </span>
                  </div>
                  <span className='text-xs uppercase tracking-wider text-neutral-500 transition group-hover:text-orange-300'>
                    <ArrowUpRight />
                  </span>
                </a>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default About
