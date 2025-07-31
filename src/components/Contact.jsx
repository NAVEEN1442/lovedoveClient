import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, MessageCircle } from 'lucide-react';

const Contact = () => {
  const hours = [
    { day: 'Monday', time: '8:00 AM - 8:00 PM', isOpen: true },
    { day: 'Tuesday', time: '8:00 AM - 8:00 PM', isOpen: true },
    { day: 'Wednesday', time: '8:00 AM - 8:00 PM', isOpen: true },
    { day: 'Thursday', time: '8:00 AM - 8:00 PM', isOpen: true },
    { day: 'Friday', time: '8:00 AM - 8:00 PM', isOpen: true },
    { day: 'Saturday', time: '8:00 AM - 8:00 PM', isOpen: true },
    { day: 'Sunday', time: 'Closed', isOpen: false }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-purple-100 px-4 py-2 rounded-full mb-4">
            <MessageCircle className="h-4 w-4 text-purple-600 mr-2" />
            <span className="text-purple-800 font-medium">Get In Touch</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ready to Book Your Pet's Stay?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Contact us today to discuss your pet's needs and schedule their boarding experience. 
            We're here to answer all your questions and ensure your pet gets the best care.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Side Cards */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {/* Phone Card */}
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-2xl">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 ml-4">Phone Numbers</h3>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-2xl">
                  <p className="font-semibold text-gray-900">Main Line</p>
                  <a href="tel:08369841539" className="text-purple-600 hover:text-purple-700 text-lg font-medium">
                    083698 41539
                  </a>
                </div>
                <div className="p-4 bg-gray-50 rounded-2xl">
                  <p className="font-semibold text-gray-900">Lavie</p>
                  <a href="tel:9987223678" className="text-purple-600 hover:text-purple-700 text-lg font-medium">
                    9987223678
                  </a>
                </div>
                <div className="p-4 bg-gray-50 rounded-2xl">
                  <p className="font-semibold text-gray-900">Clara Aunty</p>
                  <a href="tel:8369841539" className="text-purple-600 hover:text-purple-700 text-lg font-medium">
                    8369841539
                  </a>
                </div>
              </div>
            </div>

            {/* Location Card with Map */}
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-2xl">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 ml-4">Location</h3>
              </div>
              <div className="p-4 bg-gray-50 rounded-2xl space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Holy Cross Church, Juhu Koliwada,<br />
                  Santacruz (West),<br />
                  Mumbai, Maharashtra 400049
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Holy+Cross+Church,+Juhu+Koliwada,+Santacruz+(West),+Mumbai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-700 font-semibold flex items-center"
                >
                  Get Directions
                  <MapPin className="h-4 w-4 ml-1" />
                </a>
                <div className="aspect-video rounded-xl overflow-hidden shadow-md">
                  <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.642409689428!2d72.826889!3d19.123262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9bd1f7bdf0b%3A0xccc62f7d23c9dbfd!2sHoly%20Cross%20Church%2C%20Juhu%20Koliwada!5e0!3m2!1sen!2sin!4v1710165218572"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Email + Social Media */}
            <div className="md:col-span-2 bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-4 rounded-2xl">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 ml-4">Email & Social Media</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 bg-gray-50 rounded-2xl">
                  <p className="font-semibold text-gray-900 mb-2">Email Address</p>
                  <a 
                    href="mailto:laviedaviepetocare@gmail.com"
                    className="text-purple-600 hover:text-purple-700 font-medium break-all"
                  >
                    laviedaviepetocare@gmail.com
                  </a>
                </div>
                <div className="p-4 bg-gray-50 rounded-2xl">
                  <p className="font-semibold text-gray-900 mb-3">Follow Us</p>
                  <div className="space-y-2">
                    
                    <a
                      href="https://www.facebook.com/people/Lavie-Davie-Petocare/61550543266513"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 hover:text-blue-700 font-medium"
                    >
                      <Facebook className="h-5 w-5 mr-2" />
                      Lavie Davie Petocare
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hours Card */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-green-500 to-teal-500 p-4 rounded-2xl">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 ml-4">Opening Hours</h3>
            </div>
            <ul className="divide-y divide-gray-100">
              {hours.map((schedule, index) => (
                <li key={index} className="flex justify-between items-center py-3">
                  <span className="font-medium text-gray-700">{schedule.day}</span>
                  <span
                    className={`text-sm font-semibold px-3 py-1 rounded-full ${
                      schedule.isOpen
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {schedule.time}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-gray-200 text-center">
              <p className="text-gray-600 mb-4">Ready to book your pet's stay?</p>
              <a
                href="tel:08369841539"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-6 rounded-2xl font-bold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 block text-center transform hover:scale-105 shadow-lg"
              >
                📞 Call Now to Book
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
