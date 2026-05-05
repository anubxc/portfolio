import { ExternalLink } from 'lucide-react'
import React from 'react'

const projects = [
  {
    title: 'EcoBin - Smart Waste Management System',
    description:
      'Full-stack waste management platform with smart bin tracking, reward tokens, user dashboards, feedback workflows, and admin analytics for sustainable action.',
    image:
      './ecobin.png',
    stack: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    live: 'https://ecobin-v1.onrender.com',
    github: 'https://github.com/anubxc/ecobin',
  },
  {
    title: 'AI Interview Planner',
    description:
      'AI-powered platform that analyzes resumes and generates personalized interview questions and preparation plans.',
    image:
      './interview.png',
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Groq API'],
    live: '#',
    github: '#',
  },
  {
    title: 'Post Uploader & Feed App',
    description:
      'Full-stack social feed application with secure uploads, dynamic posts, and optimized image handling.',
    image:
      './feed-app.jpg',
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'ImageKit'],
    live: '#',
    github: '#',
  },
  {
    title: 'Study Scheduler',
    description:
      'Responsive study scheduling interface with complete CRUD operations and smooth UX across devices.',
    image:
      './study-scheduler.jpg',
    stack: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    live: '#',
    github: '#',
  },
]

const Projects = () => {
  return (
    <section id='project' className='min-h-screen w-full pb-16 pt-24 text-white'>
      <div className='mx-auto max-w-6xl'>
        <div className='mb-10'>
          <p className='inline-flex items-center rounded-full border border-neutral-700 px-4 py-1 text-xs uppercase tracking-[0.2em] text-neutral-400'>
            Work
          </p>
          <h1 className='mt-5 text-4xl font-bold text-neutral-100 sm:text-5xl'>
            <span className='text-orange-700'>Pro</span>jects
          </h1>
          <p className='mt-4 max-w-3xl text-base leading-relaxed text-neutral-400 sm:text-lg'>
            A selection of products I&apos;ve built across full-stack apps, interactive UI, and
            real-world problem solving.
          </p>
        </div>

        <div className='grid gap-6 md:grid-cols-2'>
          {projects.map((project) => (
            <article
              key={project.title}
              className='overflow-hidden rounded-2xl border border-neutral-800 bg-gradient-to-b from-neutral-900/80 to-neutral-950/40 transition duration-300 hover:-translate-y-1 hover:border-orange-700/60'
            >
              <img
                className='h-52 w-full object-cover'
                src={project.image}
                alt={project.title}
                loading='lazy'
              />

              <div className='p-5 sm:p-6'>
                <h2 className='text-xl font-semibold text-neutral-100'>{project.title}</h2>
                <p className='mt-3 text-sm leading-relaxed text-neutral-400 sm:text-base'>
                  {project.description}
                </p>

                <div className='mt-4 flex flex-wrap gap-2'>
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className='rounded-full border border-neutral-700 bg-neutral-900/70 px-3 py-1 text-xs text-neutral-200 sm:text-sm'
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className='mt-6 flex gap-3'>
                  <a
                    href={project.live}
                    target='_blank'
                    className='inline-flex items-center gap-2 rounded-full bg-orange-700 px-4 py-2 text-sm font-medium text-white transition duration-300 hover:bg-orange-800'
                  >
                    Live Demo
                    <ExternalLink size={16} />
                  </a>
                  <a
                    href={project.github}
                    target='_blank'
                    className='inline-flex items-center gap-2 rounded-full border border-neutral-700 px-4 py-2 text-sm text-neutral-200 transition duration-300 hover:border-neutral-500 hover:bg-neutral-900'
                  >
                    Source
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      width='16'
                      height='16'
                      fill='currentColor'
                      aria-hidden='true'
                    >
                      <path d='M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48 0-.24-.01-.88-.01-1.73-2.78.6-3.37-1.18-3.37-1.18-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.04 1.53 1.04.9 1.54 2.35 1.09 2.93.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.53 9.53 0 0 1 12 6.8c.85 0 1.7.12 2.5.35 1.9-1.29 2.74-1.02 2.74-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.35 4.69-4.58 4.94.36.31.68.93.68 1.87 0 1.35-.01 2.43-.01 2.76 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10Z' />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
