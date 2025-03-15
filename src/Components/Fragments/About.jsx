import React from "react";
import AboutPicture from "../../assets/Picture/About.png";

const About = () => {
  return (
    <div className="text-white py-10 bg-[#232325] h-auto" id="about">
      <div className="flex sm:flex-col-reverse items-center md:gap-12 px-10 max-w-6xl mx-auto">
        <div>
          <div className="w-[400px] h-full">
            <img
              src={AboutPicture}
              alt=""
              className="object-cover bg-gray-700 rounded-xl h-[300px] filter grayscale hover:grayscale-0 transition duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
