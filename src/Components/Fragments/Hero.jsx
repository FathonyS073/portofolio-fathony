import React from 'react'
import PictureHero from '../../assets/Picture/Hero.png'
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai'
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <div>
      <div className='bg-white max-w-[1200px] h-[80vh] mx-auto flex flex-col-reverse sm:flex-row justify-center align-center'>
        <div className="bg-blue-300 flex-col my-auto mx-auto">
          <p className='text-xl md:text-5xl sm:text-4xl font-bold text-gray-400'>Hello I'm Fathony</p>
          <h1 className='text-2xl md:text-5xl sm:text-4xl font-bold md:py-6'>I'm a <TypeAnimation sequence={['Front-End Developer', 1000, 'Back-End Developer', 1000]} wrapper="h1" cursor={true} repeat={Infinity} /></h1>

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