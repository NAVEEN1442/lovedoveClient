import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Star, Heart } from 'lucide-react';
import logo from '../assets/logo.jpg'; // Adjust the path as necessary

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-xl' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                <img src={logo} className=' rounded-full '  />
              </div>
              <div>
                <div className={`text-xl font-bold transition-colors ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}>
                  Lavie Davie Petocare
                </div>
                <div className="hidden sm:flex items-center space-x-2">
                  <div className="flex items-center">
                    <Star className="h-3 w-3 text-yellow-400 fill-current" />
                    <span className={`text-xs font-medium ml-1 ${
                      isScrolled ? 'text-gray-600' : 'text-white/90'
                    }`}>4.8</span>
                    <span className={`text-xs ml-1 ${
                      isScrolled ? 'text-gray-500' : 'text-white/70'
                    }`}>(89 reviews)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            {['Home', 'Services', 'About', 'Reviews', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase() === 'reviews' ? 'testimonials' : item.toLowerCase())}
                className={`font-medium transition-all duration-200 hover:scale-105 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-purple-600' 
                    : 'text-white hover:text-purple-200'
                }`}
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:9987223678
"
              className="flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              <Phone className="h-4 w-4 mr-2" />
              Call Now
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-xl">
            {['Home', 'Services', 'About', 'Reviews', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase() === 'reviews' ? 'testimonials' : item.toLowerCase())}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-purple-600 transition-colors duration-200"
              >
                {item}
              </button>
            ))}
            <a
              href="tel:9987223678"
              className="flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-200 mx-4"
            >
              <Phone className="h-4 w-4 mr-2" />
              Call Now
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;