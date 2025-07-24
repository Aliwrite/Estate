import React from 'react'

const Testimonials = () => {

    const testimonialData = [
    {
      name: 'John Doe',
      title: 'Home Buyer',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
      alt: 'John Doe',
      rating: 5,
      text: 'Working with this real estate team was a fantastic experience. They helped me find my dream home and made the process so smooth. Highly recommend!'
    },
    {
      name: 'Jane Smith',
      title: 'Home Seller',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
      alt: 'Jane Smith',
      rating: 4,
      text: 'I was impressed with how quickly my home sold. The team was professional and attentive to my needs. I would definitely work with them again.'
    },
    {
      name: 'Alice Johnson',
      title: 'First-time Buyer',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
      alt: 'Alice Johnson',
      rating: 5,
      text: 'As a first-time home buyer, I had a lot of questions and concerns. The team was patient and guided me through every step. I couldn’t be happier with my new home!'
    }
  ]

  return (
    <div id='Testimonials' className='flex flex-col items-center justify-center container bg-white text-black mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden '>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 '>Customer <span className='font-light underline underline-offset-4 decoration-1 under'>Testimonials</span></h1>
        <p className='text-gray-500 max-w-80 text-center mb-8'>Real Stories from Those Who Found Home with Us</p>
        
        <div className='flex flex-col md:flex-row items-center justify-between text-center gap-10'>
            {testimonialData.map((testimonial, index) => (
                <div key={index} className='flex flex-col items-center justify-center max-w-[340px] min-h-[400px] bg-white p-6 border rounded-lg shadow-lg mb-6'>
                    <img src={testimonial.image} alt={testimonial.alt} className='object-cover w-20 h-20 rounded-full mb-4' />
                    <div className='flex flex-col'>
                        <h2 className='text-xl font-semibold'>{testimonial.name}</h2>
                        <p className='text-gray-600'>{testimonial.title}</p>
                        <div className='mt-2'>
                            {[...Array(testimonial.rating)].map((_, i) => (
                                <span key={i} className='text-yellow-500 text-xl'>★</span>
                            ))}
                        </div>
                        <p className='text-gray-800 mt-2'>{testimonial.text}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Testimonials