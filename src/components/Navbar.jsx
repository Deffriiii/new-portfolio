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
    <nav className="bg-transparent fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a 
            href="#home" 
            className="text-4xl font-bold text-amber-600 hover:text-white 
            transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Df.
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-base text-amber-600 font-medium hover:text-white 
                relative group transition-all duration-300"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 
                group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* Resume Button - Desktop */}
          <div className="hidden md:block">
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-amber-600 text-gray-900 rounded-lg 
              hover:bg-white transition-all duration-300 transform hover:scale-105 
              hover:shadow-lg font-medium"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className="md:hidden text-amber-600 hover:text-white focus:outline-none 
            transition-colors duration-300 p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div 
          className={`md:hidden absolute top-full left-0 right-0 bg-gray-900/95 
          backdrop-blur-sm transform transition-all duration-300 ease-in-out
          ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
        >
          <div className="px-4 py-3 space-y-3 border-t border-gray-700">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={toggleMenu}
                className="block py-2.5 px-4 text-amber-600 hover:bg-amber-600/10 
                rounded-lg transition-all duration-300 text-lg font-medium"
              >
                {item.name}
              </a>
            ))}
            {/* Resume Button - Mobile */}
            <div className="pt-2 pb-3">
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full text-center py-3 bg-amber-600 text-gray-900 
                rounded-lg hover:bg-amber-500 transition-all duration-300 font-medium 
                shadow-lg hover:shadow-xl"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;