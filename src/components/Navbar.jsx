import React, { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const Navbar = () => {
    const [open, setOpen] = useState(false)

    return (
        <section>
            <div className='flex h-16 items-center justify-between rounded-2xl px-2 sm:px-4 md:px-20'>
                <div className='h-full w-fit flex items-center gap-3'>
                    <a href="#home" className='font-brand text-xl font-bold flex-wrap text-neutral-200 hover:opacity-90 sm:text-2xl'>
                        <span className='text-orange-700 text-xl font-bold sm:text-2xl'>.</span>AG
                    </a>
                </div>

                <div className='flex items-center gap-4'>
                    <div className='hidden md:flex gap-8 font-brand text-white'>
                        <a href="#about" className='opacity-75 hover:opacity-100 duration-300'>About</a>
                        <a href="#skills" className='opacity-75 hover:opacity-100 duration-300'>Skills</a>
                        <a href="#project" className='opacity-75 hover:opacity-100 duration-300'>Project</a>
                        <a href="#experience" className='opacity-75 hover:opacity-100 duration-300'>Experience</a>
                        <a href="#contact" className='opacity-75 hover:opacity-100 duration-300'>Contact</a>
                    </div>

                    <a target='_blank' href='https://drive.google.com/file/d/1BR9XbVwD65CTjV3iwixlVBDzgX6hQadC/view?usp=sharing' className='hidden md:flex flex-row items-center gap-2 border border-white text-white px-4 py-1 opacity-75 rounded-2xl hover:bg-[#292929] hover:scale-105 duration-300 hover:text-white hover:opacity-100 font-semibold cursor-pointer' aria-label='Open resume'>
                        Resume
                        <ArrowUpRight size={20} strokeWidth={2} />
                    </a>

                    <button onClick={() => setOpen(!open)} className='md:hidden p-2 rounded-lg text-white opacity-90 hover:opacity-100' aria-label='Toggle menu' aria-expanded={open}>
                        {open ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            <div className='h-0.5 w-full bg-[#292929] mt-2 '></div>

            {open && (
                <div className='md:hidden mt-3 px-2 sm:px-4'>
                    <div className='flex flex-col gap-3 bg-transparent text-white'>
                        <a href="#about" onClick={() => setOpen(false)} className='py-2 opacity-80 hover:opacity-100 duration-200'>About</a>
                        <a href="#skills" onClick={() => setOpen(false)} className='py-2 opacity-80 hover:opacity-100 duration-200'>Skills</a>
                        <a href="#project" onClick={() => setOpen(false)} className='py-2 opacity-80 hover:opacity-100 duration-200'>Project</a>
                        <a href="#experience" onClick={() => setOpen(false)} className='py-2 opacity-80 hover:opacity-100 duration-200'>Experience</a>
                        <a href="#contact" onClick={() => setOpen(false)} className='py-2 opacity-80 hover:opacity-100 duration-200'>Contact</a>

                        <div className='pt-2'>
                            <a target='_blank' href='https://drive.google.com/file/d/1BR9XbVwD65CTjV3iwixlVBDzgX6hQadC/view?usp=sharing' className='flex w-full justify-center border border-white px-4 py-2 text-white rounded-2xl opacity-90 hover:bg-[#292929] duration-200 font-semibold'>
                                Resume
                                <ArrowUpRight size={18} strokeWidth={2} />
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Navbar
