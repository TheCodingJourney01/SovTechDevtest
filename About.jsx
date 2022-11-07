
import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#184080] text-black'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi, Here is more about Me. Please have a look</p>
            </div>
            <div>
              <p>I am a hardworking, organized individual with a go-getter attitude. I never shy away from a challenge but rather face the challenge head-on as this is an opportunity to learn. I enjoy working in teams and consider myself to be a team player. I believe that I would be an asset to SovTech because I consider myself to be a well-rounded developer. I will always put my work first and make sure that my deadlines are met. Whilst studying for my BSc Degree I have done multiple internships as a student which I believe gave me a good insight into how development is done in practice in comparison to how we taught to develop in theory </p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;