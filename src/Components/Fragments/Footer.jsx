import React from "react";
import { FaGithubSquare, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="footer"
      className="mt-12 w-max-[800px] border-t border-gray-500 text-center mb-5"
    >
      <p className="my-5 text-gray-500 gap-4 text-lg">
        Portofolio Fathony Syaennulloh
      </p>
      <div className="inline-flex text-gray-500 gap-4 text-lg">
        <a href="https://github.com/FathonyS073">
          <FaGithubSquare />
        </a>
        <a href="https://www.instagram.com/ui.syaennulloh_/">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/syaennulloh/">
          <FaLinkedinIn />
        </a>
      </div>
    </div>
  );
};

export default Footer;
