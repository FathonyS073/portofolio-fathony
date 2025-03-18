import React from "react";
import AboutPicture from "../../assets/Picture/About.png";

const About = () => {
  return (
    <div className="py-28 text-white bg-[#232325] h-auto" id="about">
      <div className="flex sm:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
        {/* Gambar */}
        <div className="w-full flex-1">
          <img
            src={AboutPicture}
            alt="About Me"
            className="object-cover rounded-xl w-full h-auto filter grayscale hover:grayscale-0"
          />
        </div>

        {/* Konten */}
        <div className="flex flex-col flex-1">
          <div className="p-2">
            <div className="text-gray-300">
              <h3 className="text-4xl font-semibold mb-5">
                About <span className="primary-text">Me</span>
              </h3>
              <p className="text-justify leading-7 mx-auto">
                Hi, I’m <strong>Fathony Syaennulloh</strong>, a{" "}
                <strong>UI/UX Designer, Data Analyst, and Web Developer</strong>{" "}
                with a passion for{" "}
                <strong>technology and self-development</strong>. I’ve won{" "}
                <strong>national UI/UX competitions</strong>, mentored
                designers, and built projects in{" "}
                <strong>data analysis and web development</strong>. Skilled in{" "}
                <strong>
                  Figma, Adobe Suite, Tableau, Looker Studio, and Laravel
                </strong>
                , I focus on{" "}
                <strong>user-centered designs and data-driven solutions</strong>
                . Let’s connect and create something amazing! 🚀
              </p>
            </div>
          </div>

          {/* Section Projects di bawah */}
          <div className="flex justify-start ">
            <div className="bg-[#33333]/40 p-5 rounded-lg">
              <h3 className="md:text-4xl text-2xl font-semibold text-white">
                10 <span className="primary-text">+</span>
              </h3>
              <p className="md:text-base text-xs">Projects</p>
            </div>
            <div className="bg-[#33333]/40 p-5 rounded-lg">
              <h3 className="md:text-4xl text-2xl font-semibold text-white">
                5 <span className="primary-text">+</span>
              </h3>
              <p className="md:text-base text-xs">achievement</p>
            </div>
            <div className="bg-[#33333]/40 p-5 rounded-lg">
              <h3 className="md:text-4xl text-2xl font-semibold text-white">
                2<span className="primary-text">+</span>
              </h3>
              <p className="md:text-base text-xs">Experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
