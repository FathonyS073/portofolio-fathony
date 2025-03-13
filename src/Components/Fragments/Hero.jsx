import React from 'react'
import PictureHero from '../../assets/Picture/Hero.png'

const Hero = () => {
  return (
    <div>
      <div className='bg-white max-w-[1200px] h-[80vh] mx-auto flex flex-col-reverse sm:flex-row justify-center align-center'>
        <div className="text-8xl">
          Text
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