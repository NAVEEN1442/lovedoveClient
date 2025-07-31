import React from 'react';
import { Heart, Shield, Clock, Home, Star, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Home Based Boarding For Cats',
      price: '₹550 - ₹1,000',
      description: 'Specialized care for your feline friends in a comfortable home environment with experienced cat lovers.',
      icon: <Heart className="h-10 w-10" />,
      gradient: 'from-purple-500 to-pink-500',
      features: ['24/7 Supervision', 'Cozy Home Environment', 'Individual Attention', 'Daily Photo Updates', 'Specialized Cat Care']
    },
    {
      title: 'Home Based Boarding For Dogs',
      price: '₹600 - ₹1,000',
      description: 'Premium boarding for dogs with plenty of love, exercise, and personalized care in a family setting.',
      icon: <Home className="h-10 w-10" />,
      gradient: 'from-blue-500 to-purple-500',
      features: ['24/7 Supervision', 'Daily Exercise & Play', 'Home Comfort', 'Regular Updates', 'Behavioral Care']
    }
  ];

  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Safe & Secure',
      description: 'Your pets are in the safest hands with our experienced and loving caregivers',
      color: 'text-green-500'
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: '24/7 Supervision',
      description: 'Round-the-clock care and monitoring to ensure your pet\'s health and happiness',
      color: 'text-blue-500'
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Loving Environment',
      description: 'Home-based care that makes your pet feel comfortable, loved, and part of the family',
      color: 'text-pink-500'
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: 'No Cages',
      description: 'Complete freedom in a home environment - no cages, no kennels, just comfort',
      color: 'text-purple-500'
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Heading */}
    <div className="text-center mb-12 sm:mb-16">
      <div className="inline-flex items-center bg-purple-100 px-4 py-2 rounded-full mb-4">
        <Star className="h-4 w-4 text-purple-600 mr-2" />
        <span className="text-purple-800 font-medium text-sm sm:text-base">Premium Pet Boarding</span>
      </div>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
        Our Boarding Services
      </h2>
      <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        We provide exceptional home-based boarding services where your pets receive 
        personalized care, love, and attention in a comfortable family environment.
      </p>
    </div>

    {/* Services Grid */}
    <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-20">
      {services.map((service, index) => (
        <div
          key={index}
          className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
          
          <div className="relative p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center mb-6">
              <div className={`bg-gradient-to-br ${service.gradient} p-4  rounded-2xl text-white shadow-lg mb-4 sm:mb-0`}>
                {service.icon}
              </div>
              <div className="sm:ml-4">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{service.title}</h3>
                <div className="flex items-center mt-1">
                  <span className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                    {service.price}
                  </span>
                  <span className="text-gray-500 ml-2 text-sm sm:text-base">per day</span>
                </div>
              </div>
            </div>

            <p className="text-gray-600 mb-5 sm:mb-6 leading-relaxed text-sm sm:text-base">{service.description}</p>

            <div className="space-y-2 sm:space-y-3 mb-6">
              {service.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                </div>
              ))}
            </div>

            <a
              href="tel:9987223678"
              className={`w-full bg-gradient-to-r ${service.gradient} text-white py-3 px-5 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 text-center block transform hover:scale-105 text-sm sm:text-base`}
            >
              Book This Service
            </a>
          </div>
        </div>
      ))}
    </div>

    {/* Features Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {features.map((feature, index) => (
        <div key={index} className="text-center group">
          <div className="bg-white w-16 h-16 sm:w-20 sm:h-20 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
            {React.cloneElement(feature.icon, { className: `h-6 w-6 sm:h-8 sm:w-8 ${feature.color}` })}
          </div>
          <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{feature.title}</h4>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{feature.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default Services;