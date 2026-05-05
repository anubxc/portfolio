import { ArrowUpRight } from 'lucide-react'
import React from 'react'

const Home = () => {
  return (
    <section id='home' className='mt-20'>
      <div className='w-2/3'>
        <div className='flex h-full flex-col gap-10'>
          <div className='mt-5'>
            <h1 className='text-6xl font-bold text-neutral-200'>
              Hey, I&apos;m <span className='text-orange-600'>Anubhav</span> Gupta
            </h1>
          </div>

          <div className='flex h-full flex-col gap-2'>
            <div className='flex flex-wrap items-center gap-3 text-base text-neutral-400 sm:text-lg'>
              <span className='font-medium text-neutral-200'>MERN Stack Developer</span>
              <span className='h-1 w-1 rounded-full bg-orange-500/80' />
              <span className='text-neutral-500'>Building scalable web products</span>
            </div>

            <p className='mt-4 text-lg text-gray-300'>
              I turn ideas into production-ready products - from database schema to
              pixel-perfect UI. Currently seeking opportunities to contribute my skills
              and grow as a developer.
            </p>

            <p className='mt-4 text-gray-400'>
              Uttar Pradesh, India-based - Open to remote and hybrid roles
            </p>
          </div>

          <div className='flex flex-row gap-5'>
            <a
              href='#project'
              className='cursor-pointer rounded-full bg-white px-6 py-2 text-sm text-gray-700 duration-300 hover:scale-110'
            >
              View Projects
            </a>
            <a
              href='#contact'
              className='cursor-pointer rounded-full bg-orange-700 px-6 py-2 text-sm text-white transition-colors duration-300 hover:scale-110 hover:bg-orange-800'
            >
              Contact Me
            </a>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://drive.google.com/file/d/1BR9XbVwD65CTjV3iwixlVBDzgX6hQadC/view?usp=sharing'
              className='flex cursor-pointer items-center rounded-full border border-gray-700 px-6 py-2 text-sm text-neutral-200 duration-300 hover:scale-110'
            >
              Resume
              <ArrowUpRight size={22} strokeWidth={2} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
