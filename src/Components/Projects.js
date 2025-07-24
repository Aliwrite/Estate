import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';

const Projects = () => {

    const projectsData = [
        {
            title: "Project 1",
            price: "$500,000",
            location: "New York",
            image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg"
        },
        {
            title: "Project 2",
            price: "$750,000",
            location: "Los Angeles",
            image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg"
        },
        {
            title: "Project 3",
            price: "$600,000",
            location: "Chicago",
            image: "https://images.pexels.com/photos/5587964/pexels-photo-5587964.jpeg"
        },
        {
            title: "Project 4",
            price: "$800,000",
            location: "Miami",
            image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg"
        },
        {
            title: "Project 5",
            price: "$1,200,000",
            location: "San Francisco",
            image: "https://images.pexels.com/photos/276593/pexels-photo-276593.jpeg"
        },
        {
            title: "Project 6",
            price: "$950,000",
            location: "Seattle",
            image: "https://images.pexels.com/photos/7031408/pexels-photo-7031408.jpeg"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(1);

    const nextProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length)
    }

    const prevProject = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1)
    }

useEffect(() => {
    const updateCardsToShow = () => {
        if (window.innerWidth >= 1024) {
            setCardsToShow(projectsData.length);
        } else {
            setCardsToShow(1);
        }
    };
    updateCardsToShow(); // Initial check
    window.addEventListener('resize', updateCardsToShow); // Update on resize
    return () => {
        window.removeEventListener('resize', updateCardsToShow); // Cleanup listener
    };
},[])

  return (
    <div id='Projects' className='flex flex-col items-center justify-center container bg-white text-black mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden '>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 '>Projects <span className='font-light underline underline-offset-4 decoration-1 under'>Completed</span></h1>
        <p className='text-gray-500 max-w-80 text-center mb-8'>Crafting Spaces, Building Legacies—Explore Our Portfolio</p>
        <div className='flex flex-row items-center justify-end w-full max-w-6xl p-8'>
            <FontAwesomeIcon onClick={prevProject} icon={faArrowLeft} className='font-light text-xl text-blue-500 cursor-pointer p-3 mr-4 bg-gray-300 rounded-sm' />
            <FontAwesomeIcon onClick={nextProject} icon={faArrowRight} className='font-light text-xl text-blue-500 cursor-pointer p-3 bg-gray-300 rounded-sm' />
        </div>

        <div className='overflow-hidden'>
            <div className='flex gap-8 transition-transform duration-500 ease-in-out transform'
            style={{transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`}}
            >
                {projectsData.map((project, index) => (
                    <div key={index} className='relative flex-shrink-0 w-full sm:w-1/4'>
                        <img src={project.image} alt={project.title} className='min-h-[300px] object-cover w-full mb-14' />
                        <div className='absolute right-0 left-0 bottom-5 flex justify-center'>
                            <div className='inline-block bg-white shadow-md w-3/4 px-4 py-2 text-center'>
                                <h2 className='text-xl font-semibold text-gray-800'>
                                    {project.title}
                                </h2>
                                <p className='text-gray-600 text-sm'>
                                    {project.price} <span>|</span> {project.location}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        
    </div>
  )
}

export default Projects