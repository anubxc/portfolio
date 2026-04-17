const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#project' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const Footer = () => {
  return (
    <footer className='border-t border-neutral-800 py-8 text-white'>
      <div className='mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between'>
        <div>
          <h2 className='font-brand text-2xl font-bold text-neutral-100'>
            <span className='text-orange-700'>.</span>AG
          </h2>
          <p className='mt-2 text-sm text-neutral-500'>
            Building clean, practical web experiences.
          </p>
        </div>

        <nav className='flex flex-wrap gap-4 text-sm text-neutral-400'>
          {quickLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className='transition duration-300 hover:text-orange-300'
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className='mx-auto mt-6 flex max-w-6xl flex-col gap-2 border-t border-neutral-900 pt-5 text-xs text-neutral-600 sm:flex-row sm:items-center sm:justify-between'>
        <p>&copy; 2026 Anubhav Gupta. All rights reserved.</p>
        <p>Built with React and &#10084; by Anubhav</p>
      </div>
    </footer>
  )
}

export default Footer
