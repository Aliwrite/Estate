import React, { useState } from 'react'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='absolute top-0 left-0 w-full h-16 flex items-center justify-between px-8 md:px-20 lg:px-32 z-20'>
      <h1 className='text-white font-medium text-2xl'>Estate</h1>
      
      {/* Desktop Menu */}
      <ul className='hidden md:flex items-center gap-6'>
        <li><a href="#Header" className='text-white no-underline hover:underline'>Home</a></li>
        <li><a href="#About" className='text-white no-underline hover:underline'>About</a></li>
        <li><a href="#Projects" className='text-white no-underline hover:underline'>Projects</a></li>
        <li><a href="#Testimonials" className='text-white no-underline hover:underline'>Testimonials</a></li>
      </ul>
      <button className='hidden md:block px-8 py-2 bg-blue-500 rounded-full border-none text-white font-medium hover:bg-blue-600 transition-colors'>
        Sign Up
      </button>

      {/* Mobile Hamburger */}
      <button
        className='md:hidden flex items-center justify-center text-white focus:outline-none'
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='fixed top-0 left-0 w-full h-screen bg-black/80 flex flex-col items-center justify-center gap-8 z-30'>
          <button
            className='absolute top-6 right-6 text-white text-3xl'
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            &times;
          </button>
          <a href="#Header" className='text-white text-2xl font-medium' onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#About" className='text-white text-2xl font-medium' onClick={() => setMenuOpen(false)}>About</a>
          <a href="#Projects" className='text-white text-2xl font-medium' onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#Testimonials" className='text-white text-2xl font-medium' onClick={() => setMenuOpen(false)}>Testimonials</a>
          <button className='px-8 py-2 bg-blue-500 rounded-full border-none text-white font-medium mt-4' onClick={() => setMenuOpen(false)}>
            Sign Up
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar