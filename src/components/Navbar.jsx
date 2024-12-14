import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Project', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className="bg-transparant fixed top-0 left-0 w-full z-50 bg-opacity-90">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Logo on the left */}
        <div className="absolute left-4 sm:left-6 lg:left-8 top-1/2 -translate-y-1/2">
          <a 
            href="#home" 
            className="text-4xl font-bold text-teal-400 hover:text-white 
            transition-colors duration-300 ease-in-out transform hover:scale-105"
          >
            Df.
          </a>
        </div>

        {/* Desktop Navigation Center */}
        <div className="flex justify-center items-center py-4">
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-base text-teal-400 font-medium hover:text-white 
                relative group transition-colors duration-300"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-400 
                group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            {/* Resume Button */}
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 
              px-4 py-2 bg-teal-400 text-base text-black-400 rounded-lg shadow-lg 
              hover:bg-white hover:text-gray-900 transition-all duration-300 
              transform hover:scale-105 hover:shadow-xl"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Toggle Right */}
          <div className="md:hidden absolute right-4 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2">
            <button 
              onClick={toggleMenu}
              aria-label="Toggle Menu"
              className="text-teal-400 hover:text-white focus:outline-none 
              transition-colors duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden absolute left-0 right-0 bg-gray-800">
            <div className="px-4 pt-2 pb-4 space-y-2">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={toggleMenu}
                  className="block py-2 text-base text-teal-400 hover:bg-gray-700 
                  rounded-md transition-colors duration-300"
                >
                  {item.name}
                </a>
              ))}
              {/* Resume Button for Mobile */}
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full text-center py-2 text-base bg-teal-400 text-gray-900 
                rounded-md hover:bg-white transition-colors duration-300"
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
