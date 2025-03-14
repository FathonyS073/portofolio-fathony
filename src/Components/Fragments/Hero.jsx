import React from 'react';
import PictureHero from '../../assets/Picture/Hero.png';
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <div>
      <div className='text-white max-w-[1200px] h-[70vh] mx-auto flex flex-col-reverse sm:flex-row justify-center items-center left-0'>
        {/* Bagian Kiri (Profil) */}
        <div className=" rounded-lg ml-0  mx-auto justify-center">
          <p className='text-xl md:text-2xl text-gray-400 py-1'>Hello! I'am</p>
          <h1 className="text-3xl md:text-5xl font-bold">Fathony</h1>
          <p className='text-lg md:text-xl text-gray-400 py-2'>Currently Learning about</p>
          {/* Kontainer untuk TypeAnimation dengan tinggi tetap */}
          <h1 className='text-2xl md:text-5xl font-bold min-h-[60px]'>
            <TypeAnimation 
              sequence={[
                'UI/UX Design', 1000, 
                'Web Developer', 1000,
                'Data Science', 1000,
              ]} 
              wrapper="span" // Mengubah dari <h1> ke <span> agar tidak membuat perubahan tata letak
              cursor={true} 
              repeat={Infinity} 
            />
          </h1>
          <div className="text-5xl flex justify-start gap-5 my-2 ">
            <a target='_blank' href="https://github.com/FathonyS073"><AiFillGithub/></a>
            <a target='_blank' href="https://www.linkedin.com/in/syaennulloh/"><AiFillLinkedin/></a>
            <a target='_blank' href="https://www.instagram.com/ui.syaennulloh_/">
            <AiFillInstagram/>
            </a>
          </div>
        </div>

        {/* Bagian Kanan (Gambar) */}
        <div className="my-auto">
          <img 
            src={PictureHero} 
            alt="HeroPicture" 
            className='w-[300px] sm:w-[500px] mx-auto h-auto rounded-full'
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
