import React from 'react'

const Footer = () => {
  return (
    <div id='Footer' className='w-full bg-gray-900 mt-6 pt-8 px-8 md:px-20 lg:px-32 text-white overflow-hidden'>
        <div className='container mx-auto flex flex-col md:flex-row items-start justify-between'>
            <div className='w-full md:w-1/3 mb-8 md:mb-0'>
                <h1 className='text-white font-medium text-2xl'>Logo</h1>
                <p className='mt-4 text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error modi libero corporis voluptatibus reprehenderit voluptatem pariatur eveniet quos nobis.</p>
            </div>
            <div className='w-full md:w-1/5 mb-8 md:mb-0'>
                <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
                <ul className='flex flex-col text-gray-400 space-y-2'>
                    <a href="#" className='hover:text-white'>Home</a>
                    <a href="#" className='hover:text-white'>About Us</a>
                    <a href="#" className='hover:text-white'>Contact Us</a>
                    <a href="#" className='hover:text-white'>Privacy Policy</a>
                </ul>
            </div>
            <div className='w-full md:w-1/3 mb-8 md:mb-0'>
                <h3 className='text-white text-lg font-bold mb-4'>Subscribe</h3>
                <p className='text-gray-400 mb-4 max-w-80'>The latest news, articles, and resources, sent to your inbox weekly.</p>
                <div className='flex gap-2'>
                    <input type="email" placeholder='Enter your email' className='w-full p-2 rounded-md bg-gray-800 text-white focus:outline-none' />
                    <button className='bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition-colors'>Subscribe</button>
                </div>
            </div>
        </div>
        <div className='text-center mt-8 py-8 border-t border-gray-700 pt-4'>
            <p className='text-gray-500'>© 2023 Estate. All rights reserved.</p>
            <p className='text-gray-500'>Designed by Ali Hassan</p>
        </div>
    </div>
  )
}

export default Footer