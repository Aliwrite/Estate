import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div id='Header' className='min-h-screen text-white flex flex-col items-center justify-center bg-cover overflow-hidden bg-fixed' style={{backgroundImage: 'url(https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg)'}}>
        <div className='min-h-screen absolute top-0 left-0 w-full bg-black/40'></div>
        <Navbar />
        <div className='z-10 text-center'>
            <h1 className='text-3xl sm:text-5xl lg:text-7xl font-bold mb-8'>Find Your Perfect <br />Living Space.</h1>
            <a href="#About" className='px-8 py-2 rounded-sm bg-btransparent border-white border-2 mr-4'>Explore</a>
            <a href="#Contact" className='px-8 py-2 rounded-sm bg-blue-500 border-2 border-blue-500 '>Contact Us</a>
        </div>
    </div>
  )
}

export default Header