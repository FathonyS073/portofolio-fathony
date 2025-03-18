import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from "../../assets/Picture/Logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const menu = [
    { id: "home", name: "Home" },
    { id: "about", name: "About" },
    { id: "experience", name: "Experience" },
    { id: "project", name: "Project" },
    { id: "contact", name: "Contact" },
  ];

  // Function untuk scroll ke section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setNav(false); // Tutup menu di mode mobile
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50">
      <div className="py-5 mx-auto max-w-[1200px] flex justify-between items-center px-6">
        {/* Logo */}
        <img src={Logo} className="w-[100px] md:w-[120px]" />

        {/* Desktop Navbar */}
        <div className="hidden md:flex gap-9 pr-4">
          {menu.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="hover:text-gray-400 transition"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Mobile Burger Icon */}
        <div onClick={handleNav} className="block md:hidden cursor-pointer">
          {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed left-0 top-0 w-[60%] h-full bg-gray-900 text-white p-5 ease-in-out duration-300 ${
          nav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center">
          <img src={Logo} className="w-[100px]" />
          <div onClick={handleNav} className="cursor-pointer">
            <AiOutlineClose size={25} />
          </div>
        </div>
        <ul className="mt-6 space-y-4">
          {menu.map((item) => (
            <li
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-lg font-semibold hover:text-gray-400 transition cursor-pointer"
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
