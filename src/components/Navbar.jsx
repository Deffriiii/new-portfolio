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
    <nav className=" bg-secondary fixed top-0 left-0 w-full z-50 bg-opacity-90">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Logo di kiri */}
        <div className="absolute left-4 sm:left-6 lg:left-8 top-1/2 -translate-y-1/2">
          <a 
            href="#home" 
            className="text-2xl font-bold text-dark hover:text-light 
            transition-colors duration-300 ease-in-out transform hover:scale-105"
          >
            Df.
          </a>
        </div>

        {/* Desktop Navigation di tengah */}
        <div className="flex justify-center items-center py-4">
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-base text-dark font-medium hover:text-light 
                relative group transition-colors duration-300"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-light 
                group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            {/* Tombol Resume/CV */}
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 
              px-4 py-2 bg-dark text-base text-light rounded-lg shadow-lg 
              hover:bg-secondary hover:text-light transition-all duration-300 
              transform hover:scale-105 hover:shadow-xl"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Toggle di kanan */}
          <div className="md:hidden absolute right-4 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2">
            <button 
              onClick={toggleMenu}
              aria-label="Toggle Menu"
              className="text-dark hover:text-light focus:outline-none 
              transition-colors duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden absolute left-0 right-0 bg-secondary">
            <div className="px-4 pt-2 pb-4 space-y-2">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={toggleMenu}
                  className="block py-2 text-base text-dark hover:bg-light 
                  rounded-md transition-colors duration-300"
                >
                  {item.name}
                </a>
              ))}
              {/* Resume di Mobile */}
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full text-center py-2 text-base bg-blue-600 text-white 
                rounded-md hover:bg-blue-700 transition-colors duration-300"
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
