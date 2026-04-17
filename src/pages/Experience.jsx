import React from 'react'

const experiences = [
  {
    role: 'Frontend Developer Intern',
    company: 'Edunet Foundation',
    period: 'Oct 2025 - Nov 2025',
    type: 'Internship · Remote',
    duration: '2 months',
    points: [
      'Built a responsive task management app using HTML, CSS, and JavaScript.',
      'Implemented full CRUD functionality for managing study tasks.',
      'Used DOM manipulation to dynamically update tasks in real time.',
      'Stored and retrieved data using localStorage for persistence.',
    ],
    stack: ['HTML5', 'CSS3', 'JavaScript', 'React'],
  },
  // {
  //   role: 'Backend Developer',
  //   company: 'Self Employed',
  //   period: '2025 - Present',
  //   type: 'Self Employed',
  //   duration: 'Present',
  //   points: [
  //     'Built responsive and interactive interfaces using React, CSS3, and JavaScript',
  //     'Created developer-ready UI designs in Figma with reusable components and clear structure',
  //     'Enhanced user experience with GSAP animations, prototyping, and structured flows using Lucidchart',
  //   ],
  //   stack: ['React', 'CSS3', 'JavaScript', 'Figma', 'Lucidchart', 'GSAP'],
  // },
]

const Experience = () => {
  return (
    <section id='experience' className='min-h-screen w-full pb-16 pt-24 text-white'>
      <div className='mx-auto max-w-6xl'>
        <div className='mb-10 grid gap-6 md:grid-cols-[1.3fr_1fr] md:items-end'>
          <div>
            <p className='inline-flex items-center rounded-full border border-neutral-700 px-4 py-1 text-xs uppercase tracking-[0.2em] text-neutral-400'>
              Journey
            </p>
            <h1 className='mt-5 text-4xl font-bold text-neutral-100 sm:text-5xl'>
              <span className='text-orange-700'>Exp</span>erience
            </h1>
          </div>
          <p className='text-base leading-relaxed text-neutral-400 sm:text-lg'>
            Working on practical solutions that improve product thinking, system design,
            and implementation quality.
          </p>
        </div>

        <div className='space-y-6'>
          {experiences.map((item) => (
            <article
              key={`${item.role}-${item.company}`}
              className='rounded-2xl border border-neutral-800 bg-gradient-to-b from-neutral-900/80 to-neutral-950/40 p-6 sm:p-7'
            >
              <div className='flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
                <div>
                  <h2 className='text-2xl font-bold text-neutral-100'>{item.role}</h2>
                  <p className='mt-1 text-lg font-semibold text-orange-700'>{item.company}</p>
                </div>
                <p className='text-sm font-medium text-neutral-400 sm:text-base'>{item.period}</p>
              </div>

              <div className='mt-4 flex flex-wrap items-center gap-3'>
                <span className='text-sm font-medium text-neutral-300 sm:text-base'>{item.type}</span>
                <span className='rounded-full border border-neutral-700 px-3 py-1 text-xs uppercase tracking-wide text-orange-300'>
                  {item.duration}
                </span>
              </div>

              <ul className='mt-6 space-y-3'>
                {item.points.map((point) => (
                  <li key={point} className='flex items-start gap-3 text-sm text-neutral-300 sm:text-base'>
                    <span className='mt-1.5 h-2 w-2 rounded-full bg-orange-600'></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className='mt-6 flex flex-wrap gap-2'>
                {item.stack.map((tech) => (
                  <span
                    key={tech}
                    className='rounded-full border border-neutral-700 bg-neutral-900/70 px-3 py-1 text-xs text-orange-300 sm:text-sm'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
