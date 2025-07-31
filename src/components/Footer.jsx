import React from 'react';
import { Heart, Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white py-16 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Lavie Davie Petocare</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              We've been pet parents from childhood and it's the most amazing job. 
              We love taking care of pets and making sure they stay happy and healthy 
              in our loving home environment.
            </p>
            <div className="flex space-x-4">
              
              <a
                href="https://www.facebook.com/people/Lavie-Davie-Petocare/61550543266513"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center text-blue-400 hover:text-blue-300 hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="mailto:laviedaviepetocare@gmail.com"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center text-purple-400 hover:text-purple-300 hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="tel:9987223678"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center text-green-400 hover:text-green-300 hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-bold">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Services', 'About Us', 'Reviews', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => document.getElementById(item.toLowerCase() === 'reviews' ? 'testimonials' : item.toLowerCase().replace(' us', '').replace(' ', ''))?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-2 transform inline-block"
                  >
                    → {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-bold">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-purple-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p className="font-medium text-white">Address:</p>
                  <p>Santacruz & Virar</p>
                  
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-400" />
                <div className="text-gray-300">
                  <p className="font-medium text-white">Phone:</p>
                  <p>9987223678</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <div className="text-gray-300">
                  <p className="font-medium text-white">Email:</p>
                  <p className="break-all">laviedaviepetocare@gmail.com</p>
                </div>
              </div>
              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <p className="font-medium text-white mb-2">Hours:</p>
                <p className="text-gray-300">Mon-Sat: 8am-8pm</p>
                <p className="text-gray-300">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 Lavie Davie Petocare. All rights reserved. Made with{' '}
            <Heart className="h-4 w-4 inline text-pink-500 mx-1" /> 
            for pets and their families in Mumbai.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;