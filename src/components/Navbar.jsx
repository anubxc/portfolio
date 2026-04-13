import { ArrowUpRight, MoveUpRight } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <section>
      <div className=' h-16 px-20 flex items-center rounded-2xl justify-between'>
        <div className='h-full w-fit flex items-center gap-3'>
          <h1 className='font-bold text-2xl flex-wrap text-neutral-200 font-brand'><span className='text-orange-700 font-bold text-2xl'>.</span>AG</h1>
        </div>
        <div className='flex gap-12 items-center'>
          <div className='flex gap-8  font-brand  text-white'>
            <a href="#about" className='opacity-75 hover:opacity-100 duration-300'>About</a>
            <a href="#skills" className='opacity-75 hover:opacity-100 duration-300'>Skills</a>
            <a href="#project" className='opacity-75 hover:opacity-100 duration-300'>Project</a>
            <a href="#experience" className='opacity-75 hover:opacity-100 duration-300'>Experience</a>
            <a href="#contact" className='opacity-75 hover:opacity-100 duration-300'>Contact</a>
          </div>
          <button className='flex border border-white text-white px-4 py-1 opacity-75 rounded-2xl hover:bg-[#292929] hover:scale-105 duration-300 hover:text-white hover:opacity-100 font-semibold cursor-pointer '>Resume<ArrowUpRight size={22} strokeWidth={2} /></button>
        </div>
      </div>
      <div className='h-0.5 w-full bg-[#292929] mt-2 '></div>
    </section>
  )
}

export default Navbar
