import { ArrowUpRight, Dot } from 'lucide-react'
import React from 'react'

const Home = () => {
  return (
    <section className='mt-20'>
      <div className='w-2/3'>
        <div className='flex flex-col gap-10 h-full'>
          <div className='flex w-fit items-center  border border-gray-500 rounded-full px-4 py-1'>
            <span className='mr-2 h-1.5 w-1.5 rounded-full bg-green-400'></span>
            <p className='text-sm text-nowr ap text-gray-500'>Open to Software Developer roles</p>
          </div>
          <div>
            <h1 className='text-6xl font-bold text-neutral-200'>Hey, I'm <span className='text-orange-700'>Anubhav</span> Gupta</h1>
          </div>
          <div className='flex flex-col gap-2 h-full'>
            <p className='text-lg text-gray-400 mt-4'>
              Full-Stack Developer · MERN · Next.js · C++
            </p>
            <p className='text-gray-300  text-lg mt-4'>
              I turn ideas into production-ready products — from database schema to pixel-perfect UI. Currently seeking opportunities to contribute my skills and grow as a developer.
            </p>
            <p className='text-gray-400 mt-4'>
              India-based · Open to remote & hybrid roles
            </p>
          </div>
          <div className='flex flex-row gap-5'>
            <button className='bg-white text-gray-700 text-sm px-6 py-2 rounded-full hover:scale-110 duration-300 cursor-pointer'>
              View Projects
            </button>
            <button className='bg-orange-700 text-white px-6 py-2 rounded-full hover:bg-orange-800 
          hover:scale-110 transition-colors duration-300 text-sm cursor-pointer'>
              Contact Me
            </button>
            <button className=' border border-gray-700 text-neutral-200 text-sm px-6 py-2 rounded-full hover:scale-110 duration-300 cursor-pointer flex items-center'>
              Resume
              <ArrowUpRight size={22} strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home