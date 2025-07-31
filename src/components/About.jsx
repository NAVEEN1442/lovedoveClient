import React from 'react';
import { Users, Award, Heart, Phone, Star } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 text-white relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image section */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1458925/pexels-photo-1458925.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Happy pet in care"
              className="rounded-3xl shadow-2xl w-full h-96 object-cover border-4 border-white/20"
            />
            <div className="absolute -top-6 -right-6 bg-gradient-to-r from-pink-500 to-purple-600 p-4 rounded-2xl shadow-2xl">
              <div className="flex items-center space-x-2">
                <Star className="h-6 w-6 text-yellow-400 fill-current" />
                <span className="text-white font-bold">4.8 Rating</span>
              </div>
            </div>
          </div>

          {/* Textual content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                <Heart className="h-4 w-4 text-pink-400 mr-2" />
                <span className="text-white text-sm font-medium">Where Your Pet Feels Right at Home</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Welcome to <span className="text-pink-300">Lavie Davie Petocare</span>
              </h2>

              <div className="space-y-4 text-lg text-white/90 leading-relaxed">
                <p>
                  At Lavie Davie Petocare, we’re not just pet sitters — we’re lifelong pet lovers who see your furry friend as part of the family. With years of hands-on experience, we’ve created a home full of love, comfort, and personal attention.
                </p>
                <p>
                  Every pet has a unique personality. Whether it’s belly rubs, a quiet corner to nap, or their favorite treats — we get to know what makes them feel loved and tailor our care just for them.
                </p>
                <p>
                  We know how hard it is to leave your pet behind. That’s why we treat every animal with the same love, respect, and devotion we give our own. Tail wags, purrs, and peace of mind — all in one place.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20">
                <div className="bg-gradient-to-r from-pink-500 to-purple-600 w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold">200+</div>
                <div className="text-sm text-white/80">Happy Clients</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20">
                <div className="bg-gradient-to-r from-yellow-500 to-orange-600 w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold">4.8</div>
                <div className="text-sm text-white/80">Star Rating</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20">
                <div className="bg-gradient-to-r from-green-500 to-teal-600 w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm text-white/80">Care & Support</div>
              </div>
            </div>

            {/* Team section */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-3xl border border-white/20">
              <h4 className="text-xl font-bold mb-4 flex items-center">
                <Phone className="h-5 w-5 mr-2 text-pink-400" />
                Meet Our Loving Team
              </h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center">
                    <span className="font-bold text-white text-lg">L</span>
                  </div>
                  <div>
                    <p className="font-bold text-white">Lavie <span className='text-[#c0b0b0] italic text-[14px]'>(Founder & CEO)</span></p>
                    <a href="tel:9987223678" className="text-pink-300 hover:text-pink-200 transition-colors">
                      📞 9987223678
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center">
                    <span className="font-bold text-white text-lg">C</span>
                  </div>
                  <div>
                    <p className="font-bold text-white">Clara <span className='text-[#c0b0b0] italic text-[14px]'>(Managing Director)</span></p>
                    <a href="tel:9821481749" className="text-purple-300 hover:text-purple-200 transition-colors">
                      📞 9821481749
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
