import React from 'react'

const skillGroups = [
  {
    title: 'Frontend',
    accent: 'text-orange-500',
    ring: 'hover:border-orange-700/60',
    skills: [
      'HTML5',
      'CSS3',
      'JavaScript (ES6+)',
      'React',
      'Tailwind CSS',
      'Bootstrap',
      'GSAP',
      'Framer Motion',
    ],
  },
  {
    title: 'Backend',
    accent: 'text-sky-400',
    ring: 'hover:border-sky-600/60',
    skills: ['Node.js', 'Express', 'MongoDB', 'JWT Auth', 'REST API Design', 'Multer', 'Zod', 'Bcrypt'],
  },
  {
    title: 'Design',
    accent: 'text-pink-400',
    ring: 'hover:border-pink-600/60',
    skills: ['Figma', 'UI/UX Design', 'Prototyping', 'Component Design'],
  },
  {
    title: 'Tools',
    accent: 'text-emerald-400',
    ring: 'hover:border-emerald-600/60',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'npm Workspaces', 'Vercel', 'Render'],
  },
]

const Skills = () => {
  return (
    <section className='min-h-screen w-full pb-16 pt-24 text-white'>
      <div className='mx-auto max-w-6xl'>
        <div className='mb-10'>
          <p className='inline-flex items-center rounded-full border border-neutral-700 px-4 py-1 text-xs uppercase tracking-[0.2em] text-neutral-400'>
            Skills
          </p>
          <h1 className='mt-5 text-4xl font-bold text-neutral-100 sm:text-5xl'>
            My <span className='text-orange-700'>Tool</span>kit
          </h1>
          <p className='mt-4 max-w-3xl text-base leading-relaxed text-neutral-400 sm:text-lg'>
            I&apos;m constantly refining my daily production stack, exploring new technologies,
            and leveraging practical tools to ship high-quality products faster.
          </p>
        </div>

        <div className='grid gap-6 sm:grid-cols-2'>
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className={`rounded-2xl border border-neutral-800 bg-gradient-to-b from-neutral-900/80 to-neutral-950/40 p-6 transition duration-300 ${group.ring}`}
            >
              <h2 className={`text-xl font-semibold ${group.accent}`}>{group.title}</h2>
              <div className='mt-5 flex flex-wrap gap-3'>
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className='rounded-full border border-neutral-700 bg-neutral-900/70 px-4 py-2 text-sm text-neutral-200 transition duration-300 hover:border-neutral-500 hover:bg-neutral-800'
                  >
                    {skill}
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

export default Skills
