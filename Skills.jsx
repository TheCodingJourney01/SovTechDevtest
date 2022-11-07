import React from 'react'
import csharp from '../assets/c-s.png'
import css from '../assets/css.png'
import java from '../assets/java.png'
import html from '../assets/html.png'
import javascript from '../assets/javascript.png'
import python from '../assets/Python.png'
import sql from '../assets/sql.png'
import github from '../assets/github.png'



const Skills = () => {
    return (
      <div name='skills' className='w-full h-screen bg-[#184080] text-black'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Skills</p>
                <p className='py-4'>These are a few of the technologies I have worked with</p>
            </div>
  
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={csharp} alt="C#" />
                    <p className='my-4 font-bold'>C#</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={css} alt="CSS" />
                    <p className='my-4 font-bold'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={javascript} alt="JAVASCRIPT" />
                    <p className='my-4 font-bold'>JAVASCRIPT</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={java} alt="JAVA" />
                    <p className='my-4 font-bold'>JAVA</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={html} alt="HTML" />
                    <p className='my-4 font-bold'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={python} alt="Python" />
                    <p className='my-4 font-bold'>PYTHON</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={sql} alt="SQL" />
                    <p className='my-4 font-bold'>SQL</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={github} alt="GITHUB" />
                    <p className='my-4 font-bold'>GITHUB</p>
                </div>
            </div>
        </div>
      </div>
    );
  };
  
  export default Skills;