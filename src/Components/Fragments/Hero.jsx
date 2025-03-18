import React from "react";
import PictureHero from "../../assets/Picture/Hero.png";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="  w-full flex justify-center py-28" id="home">
      <div className=" text-white max-w-screen-xl w-full mx-auto flex flex-col-reverse md:flex-row items-center gap-10 px-6 md:px-12">
        {/* Bagian Kiri (Profil) */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-xl md:text-2xl text-gray-400 my-2">Hello! I'am</p>
          <h1 className="text-3xl md:text-5xl font-bold">Fathony</h1>
          <p className="text-lg md:text-xl text-gray-400 mt-2">
            Currently Learning about
          </p>
          <h1 className="text-3xl md:text-5xl font-bold min-h-[60px] my-1 md:my-4 ">
            <TypeAnimation
              sequence={[
                "UI/UX Design",
                1000,
                "Web Developer",
                1000,
                "Data Science",
                1000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
            />
          </h1>
          <div className="text-3xl md:text-4xl flex justify-center md:justify-start gap-2 my-1 md:my-4 text-purple-600">
            <a target="_blank" href="https://github.com/FathonyS073">
              <AiFillGithub />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/syaennulloh/">
              <AiFillLinkedin />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/ui.syaennulloh_/"
            >
              <AiFillInstagram />
            </a>
          </div>

          <div className="flex justify-center md:justify-start mt-5">
            <a
              href="https://drive.google.com/file/d/1w3RkCUOMDXLu9tpYYkfBDrEUT-s_X9rY/view?usp=sharing"
              target="_blank"
              className="rounded-md bg-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-purple-400 transition duration-300"
            >
              Download My Resume
            </a>
          </div>
        </div>

        {/* Bagian Kanan (Gambar) */}
        <div className="flex-1 flex justify-center">
          <img
            src={PictureHero}
            alt="HeroPicture"
            className="w-[250px] sm:w-[400px] md:w-[450px] rounded-full "
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
