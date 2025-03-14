import React from 'react'
import PictureHero from '../../assets/Picture/Hero.png'
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai'
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <div>
      <div className='bg-white max-w-[1200px] h-[80vh] mx-auto flex flex-col-reverse sm:flex-row justify-center align-center'>
        <div className="bg-blue-300 flex-col my-auto mx-auto">
          <p className='text-xl md:text-6md sm:text-4md text-gray-400 py-3'>Hello!</p>
          <h1 class="text-3xl md:text-5lg sm:text-4lg font-bold">I'am Fathony</h1>
          <p className='text-lg md:text-6md sm:text-4md text-gray-400 py-3'>Currently Learning about</p>
          <h1 className='text-2xl md:text-5xl sm:text-4xl font-bold'> 
            <TypeAnimation 
            sequence={
              [
                'UI/UX Design', 1000, 
                'Web Developer', 1000,
                'Data Science', 1000,

              ]} 
              wrapper="h1" 
              cursor={true} 
              repeat={Infinity} />
          </h1>
          <div className="flex justify-center items-center">
            <p className='text-xl md:text-5xl sm:text-4xl font-bold text-gray-400'> </p>
          </div>

        </div>
        <div className="my-auto">
          <img src={PictureHero} alt="HeroPicture" 
          className='w-[300px] sm:w-[500px] mx-auto h-auto rounded-full'/>
        </div>

      </div>
    </div>
  )
}

export default Hero