import React from 'react'

import {HiArrowNarrowRight} from 'react-icons/hi'
const Home = () => {
  return (
    <div  name ='home' className='w-full h-screen bg-[#184080]'>
        
        {/* Container */}
        <div className ='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-black'>Hi, My name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-black'>Michael Botha</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-black'>I am a Software Engineer</h2>
            <p className='text-black py-4 max-w-[700px]' >I’m a graduate of North-West University with a BSc degree in Information Technology. Currently, I am busy with a certificate in Machine learning and Data science from MIT. 
              I enjoy a handful of outdoor activities like hiking, surfing and golfing as these are great excuses for me to take out my drone and create some awesome content.</p>
            <div>
                <a href="https://drive.google.com/drive/folders/1nMVqdLmpwajgoWyscHvN5Sg9BHFYedoE" target="_blank">
                <button className='text-grey group border-2 px-6 py-3 my-2 flex items-center hover:bg-gray-500 hover:border-gray-800'>My Drone footage
                <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3'/>
                </span>
                </button>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Home