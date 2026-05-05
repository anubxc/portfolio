import { ArrowUpRight } from 'lucide-react'
import React from 'react'

const Home = () => {
  return (
    <section id='home' className='mt-16 sm:mt-20'>
      <div className='w-full md:w-2/3'>
        <div className='flex h-full flex-col gap-10'>
          <div className='mt-5'>
            <h1 className='text-4xl font-bold text-neutral-200 sm:text-5xl lg:text-6xl'>
              Hey, I&apos;m <span className='text-orange-600'>Anubhav</span> Gupta
            </h1>
          </div>

          <div className='flex h-full flex-col gap-2'>
            <div className='flex flex-wrap items-center gap-3 text-sm text-neutral-400 sm:text-lg'>
              <span className='font-medium text-neutral-200'>MERN Stack Developer</span>
              <span className='h-1 w-1 rounded-full bg-orange-500/80' />
              <span className='text-neutral-500'>Building scalable web products</span>
            </div>

            <p className='mt-4 text-base text-gray-300 sm:text-lg'>
              I turn ideas into production-ready products - from database schema to
              pixel-perfect UI. Currently seeking opportunities to contribute my skills
              and grow as a developer.
            </p>

            <p className='mt-4 text-sm text-gray-400 sm:text-base'>
              Uttar Pradesh, India-based - Open to remote and hybrid roles
            </p>
          </div>

          <div className='flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-5'>
            <a
              href='#project'
              className='inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm text-gray-700 duration-300 hover:scale-105 sm:w-auto'
            >
              View Projects
            </a>
            <a
              href='#contact'
              className='inline-flex w-full items-center justify-center rounded-full bg-orange-700 px-5 py-2.5 text-sm text-white transition-colors duration-300 hover:scale-105 hover:bg-orange-800 sm:w-auto'
            >
              Contact Me
            </a>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://drive.google.com/file/d/1BR9XbVwD65CTjV3iwixlVBDzgX6hQadC/view?usp=sharing'
              className='inline-flex w-full items-center justify-center rounded-full border border-gray-700 px-5 py-2.5 text-sm text-neutral-200 duration-300 hover:scale-105 sm:w-auto'
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
