import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'; // Perbaiki nama ikon
import Logo from '../../assets/Picture/Logo.png';
import NavbarItem from '../Elements/NavbarItem';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    const menu = [
        { id: 1, name: 'Home' },
        { id: 2, name: 'About' },
        { id: 3, name: 'Experience' },
        { id: 4, name: 'Project' },
        { id: 5, name: 'Contact' }
    ];

    return (
        <div className='w-full left-0 z-50 top-0'>
            <div className="flex justify-between items-center px-6 py-4">
                {/* Logo */}
                <img src={Logo} className='w-[130px] md:w-[170px]' />

                {/* Desktop Navbar */}
                <div className="hidden md:flex gap-9 pr-4">
                    {menu.map((item) => (
                        <NavbarItem key={item.id} name={item.name} />
                    ))}
                </div>

                {/* Mobile Burger Icon */}
                <div onClick={handleNav} className='block md:hidden cursor-pointer text-white'>
                    {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`fixed left-0 top-0 w-[60%] h-full bg-gray-900 text-white p-5 ease-in-out duration-300 ${nav ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex justify-between items-center">
                    <img src={Logo} className='w-[100px]' />
                    <div onClick={handleNav} className='cursor-pointer'>
                        <AiOutlineClose size={25} />
                    </div>
                </div>
                <ul className='mt-6 space-y-4'>
                    {menu.map((item) => (
                        <li key={item.id} className='text-lg font-semibold hover:text-gray-400 transition'>
                            {item.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
