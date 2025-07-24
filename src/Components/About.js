import React from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

const About = () => {

    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <div id='About' className='flex flex-col items-center justify-center container bg-white text-black mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden '>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 '>About <span className='font-light underline underline-offset-4 decoration-1 under'>Our Brand</span></h1>
        <p className='text-gray-500 max-w-80 text-center mb-8'>Passionate About Properties, Dedicated to Your Vision</p>
        <div className='flex flex-col md:flex-row md:items-start items-center md:gap-20 w-full max-w-6xl p-8'>
                <img className='w-full sm:w-1/2 max-w-lg' src="https://estatedev.in/assets/brand_img-DEuaOSfY.png" alt="" />
            <div className='flex flex-col gap-4 text-left'>
                <div className='grid grid-cols-2 gap-8 md:mb-10 mb-4 md:mt-4 mt-8'>
                    <div className='flex flex-col'>
                        <h2 ref={ref} className='text-4xl font-semibold'>{inView && <CountUp end={10} duration={2} />}+</h2>
                        <p className='text-gray-700'>Years of Excellence</p>
                    </div>
                    <div className='flex flex-col'>
                        <h2 ref={ref} className='text-4xl font-semibold'>{inView && <CountUp end={12} duration={3} />}+</h2>
                        <p className='text-gray-700'>Projects Completed</p>
                    </div>
                    <div className='flex flex-col'>
                        <h2 ref={ref} className='text-4xl font-semibold'>{inView && <CountUp end={20} duration={2} />}+</h2>
                        <p className='text-gray-700'>Mn. Sq. Ft. Delivered</p>
                    </div>
                    <div className='flex flex-col'>
                        <h2 ref={ref} className='text-4xl font-semibold'>{inView && <CountUp end={25} duration={3} />}+</h2>
                        <p className='text-gray-700'>Ongoing Projects</p>
                    </div>
                </div>
                <div>
                    <p className='text-gray-700 md:mb-10 mb-8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <a href="#" className='px-8 py-2 rounded-sm bg-blue-500 border-2 border-blue-500 text-white'>Learn More</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About