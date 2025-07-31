import React from 'react';
import { MapPin, Phone, Clock, Star, ArrowRight, Shield, Heart } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Happy pets"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-purple-800/70 to-pink-900/80"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-pink-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Shield className="h-4 w-4 text-white mr-2" />
                <span className="text-white text-sm font-medium">Trusted Pet Care Since Years</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Your Pet's
                <span className="block bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Home Away
                </span>
                <span className="block">From Home</span>
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed max-w-lg">
                Premium pet boarding services in Mumbai with 24/7 care, love, and attention. 
                Your furry family members deserve nothing but the best.
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-2xl font-bold text-white">4.8</span>
              <span className="text-white/80">(89 Google Reviews)</span>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-pink-400" />
                  <div>
                    <p className="font-semibold text-white">Location</p>
                    <p className="text-sm text-white/80">Santacruz & Virar</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20">
                <div className="flex items-center space-x-3">
                  <Phone className="h-6 w-6 text-purple-400" />
                  <div>
                    <p className="font-semibold text-white">Call Us</p>
                    <p className="text-sm text-white/80">9987223678
</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="tel:9987223678"
                className="group bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl text-center flex items-center justify-center"
              >
                Book Your Pet's Stay
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300 text-center backdrop-blur-sm"
              >
                Explore Services
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Happy pets at Lavie Davie Petocare"
                className="rounded-3xl shadow-2xl w-full h-96 object-cover border-4 border-white/20"
              />
              <div className="absolute -bottom-8 -left-8 bg-gradient-to-r from-pink-500 to-purple-600 p-6 rounded-2xl shadow-2xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white flex items-center">
                    <Heart className="h-8 w-8 mr-2" />
                    24/7
                  </div>
                  <div className="text-sm text-white/90">Loving Care</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;