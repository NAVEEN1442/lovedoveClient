import React, { useState, useEffect } from 'react';
import { Heart, Phone, Mail, MapPin, Clock, Star, Shield, Home, Users, ChevronDown, Menu, X, Dog, Cat, Bird, Rabbit, ArrowRight, CheckCircle, Award, Sparkles, Instagram, Camera, Grid, ChevronLeft, ChevronRight } from 'lucide-react';
import logo from './assets/logo.png';



function App() {

  const hero = "https://res.cloudinary.com/dxpm4uj4t/video/upload/v1754746152/AQPJ3qQHFS7ZHiv6G2A37GIrUM7BWaOUkcqUFGpvxqKC53p4GQAjWZztV61zDTde_GIhXQHSH1ivhf1ccYG9c6NnN5lkWaN5tgAiDxc_1_u0hh4o.mp4";
  const hero2 = "https://res.cloudinary.com/dxpm4uj4t/video/upload/v1754746158/AQMJeJxpkwJ6-pvEAX1yG1k7-Gm5N0fGFx5xGMKH3GCcbXEIii3JSxSX9iCGYRJRepIAkdBq41y47sISiEXAnrsGsX0-imi1_ctMWD4_cwei50.mp4";
  const hero3 = "https://res.cloudinary.com/dxpm4uj4t/video/upload/v1754746159/AQN1WgB1_j8On6W6v1iMyuVFtXdSj_r0_m2uLlPW0rpjWaecASs0v-nbsGuUwTu3LcEJMVSMHYK3c_yqTfZrjuhCcy5RaZ24Y-Hl6j4_oiehbq.mp4";

  const videos = [hero, hero2, hero3];


  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
const [currentImageCount, setCurrentImageCount] = useState(8);

const [currentVideoIndex, setCurrentVideoIndex] = useState(0);


  const handleVideoEnd = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };


  // Gallery images
const galleryImages = [
  { url: "https://res.cloudinary.com/dxpm4uj4t/image/upload/v1754743546/WhatsApp_Image_2025-08-09_at_18.12.20_1f7fbe44_zzxvod.jpg" },
  { url: "https://res.cloudinary.com/dxpm4uj4t/image/upload/v1754743541/WhatsApp_Image_2025-08-02_at_08.35.17_7b433eba_vzf59o.jpg" },
  { url: "https://res.cloudinary.com/dxpm4uj4t/image/upload/v1754743541/WhatsApp_Image_2025-08-02_at_08.35.10_4b125262_k3hetn.jpg" },
  { url: "https://res.cloudinary.com/dxpm4uj4t/image/upload/v1754743541/WhatsApp_Image_2025-08-02_at_08.35.11_6d4a68d0_ihhsis.jpg" },
  { url: "https://res.cloudinary.com/dxpm4uj4t/image/upload/v1754743541/WhatsApp_Image_2025-08-02_at_08.35.07_d36b3af4_v2nwbm.jpg" },
  { url: "https://res.cloudinary.com/dxpm4uj4t/image/upload/v1754743541/WhatsApp_Image_2025-08-02_at_08.35.06_4f8d080c_o45l6x.jpg" },
  { url: "https://res.cloudinary.com/dxpm4uj4t/image/upload/v1754743541/WhatsApp_Image_2025-08-02_at_08.33.59_0592c5d3_ycgs6z.jpg" },
  { url: "https://res.cloudinary.com/dxpm4uj4t/image/upload/v1754743541/WhatsApp_Image_2025-08-01_at_22.05.25_f1108d63_qcu1ou.jpg" },
  { url: "https://res.cloudinary.com/dxpm4uj4t/image/upload/v1754743540/WhatsApp_Image_2025-08-01_at_22.05.24_0a136bdf_nnmvgk.jpg" },
  { url: "https://res.cloudinary.com/dxpm4uj4t/image/upload/v1754743540/WhatsApp_Image_2025-08-01_at_22.05.25_cb387d85_h7topf.jpg" },
  { url: "https://res.cloudinary.com/dxpm4uj4t/image/upload/v1754743540/WhatsApp_Image_2025-08-01_at_22.05.24_a2df03bf_ffprft.jpg" },
  { url: "https://res.cloudinary.com/dxpm4uj4t/image/upload/v1754743540/WhatsApp_Image_2025-08-01_at_21.51.47_0bb16fe3_ejkzwf.jpg" },
  { url: "https://res.cloudinary.com/dxpm4uj4t/image/upload/v1754743536/IMG-20250802-WA0017_aqlqof.jpg" },
  { url: "https://res.cloudinary.com/dxpm4uj4t/image/upload/v1754743536/IMG-20250802-WA0016_mciwdy.jpg" },
  { url: "https://res.cloudinary.com/dxpm4uj4t/image/upload/v1754743535/IMG-20250801-WA0092_duqlto.jpg" },
  { url: "https://res.cloudinary.com/dxpm4uj4t/image/upload/v1754743535/IMG-20250801-WA0091_rwglph.jpg" },
  { url: "https://res.cloudinary.com/dxpm4uj4t/image/upload/v1754743535/IMG-20250801-WA0088_s9czvy.jpg" },
  { url: "https://res.cloudinary.com/dxpm4uj4t/image/upload/v1754743534/IMG-20250801-WA0090_fycp8m.jpg" },
  { url: "https://res.cloudinary.com/dxpm4uj4t/image/upload/v1754743534/IMG-20250801-WA0089_yumxgm.jpg" },
  { url: "https://res.cloudinary.com/dxpm4uj4t/image/upload/v1754743534/IMG-20250801-WA0086_ej8oeg.jpg" },
  { url: "https://res.cloudinary.com/dxpm4uj4t/image/upload/v1754743534/IMG-20250801-WA0087_kxestk.jpg" },
  { url: "https://res.cloudinary.com/dxpm4uj4t/image/upload/v1754743529/IMG-20250801-WA0075_tqtsvo.jpg" },
  { url: "https://res.cloudinary.com/dxpm4uj4t/image/upload/v1754743528/IMG-20250801-WA0085_eizgdd.jpg" },
  { url: "https://res.cloudinary.com/dxpm4uj4t/image/upload/v1754743528/IMG-20250801-WA0077_ajylbs.jpg" },
  { url: "https://res.cloudinary.com/dxpm4uj4t/image/upload/v1754743528/IMG-20250801-WA0084_qz3qk2.jpg" },
  { url: "https://res.cloudinary.com/dxpm4uj4t/image/upload/v1754743506/IMG-20250801-WA0027_hnxfiw.jpg" },
  { url: "https://res.cloudinary.com/dxpm4uj4t/image/upload/v1754743506/IMG-20250801-WA0030_uzbmcc.jpg" },
  { url: "https://res.cloudinary.com/dxpm4uj4t/image/upload/v1754743506/IMG-20250801-WA0024_mkhqw3.jpg" },
  { url: "https://res.cloudinary.com/dxpm4uj4t/image/upload/v1754743506/IMG-20250801-WA0023_jbgjnr.jpg" },
  { url: "https://res.cloudinary.com/dxpm4uj4t/image/upload/v1754743505/IMG-20250801-WA0022_sffbrr.jpg" },
  { url: "https://res.cloudinary.com/dxpm4uj4t/image/upload/v1754743505/IMG-20250801-WA0021_g766sh.jpg" },
  { url: "https://res.cloudinary.com/dxpm4uj4t/image/upload/v1754743505/IMG-20250801-WA0029_zr9dqv.jpg" },
  { url: "https://res.cloudinary.com/dxpm4uj4t/image/upload/v1754743507/IMG-20250801-WA0032_j8znzb.jpg" },
  { url: "https://res.cloudinary.com/dxpm4uj4t/image/upload/v1754743507/IMG-20250801-WA0031_szejic.jpg" },
  { url: "https://res.cloudinary.com/dxpm4uj4t/image/upload/v1754743507/IMG-20250801-WA0033_xhtjgh.jpg" },
  { url: "https://res.cloudinary.com/dxpm4uj4t/image/upload/v1754743507/IMG-20250801-WA0035_tfgdkd.jpg" },
  { url: "https://res.cloudinary.com/dxpm4uj4t/image/upload/v1754743507/IMG-20250801-WA0026_xisb2j.jpg" },
  { url: "https://res.cloudinary.com/dxpm4uj4t/image/upload/v1754743507/IMG-20250801-WA0034_pfasws.jpg" },
  { url: "https://res.cloudinary.com/dxpm4uj4t/image/upload/v1754743507/IMG-20250801-WA0036_lpw8fm.jpg" },
  { url: "https://res.cloudinary.com/dxpm4uj4t/image/upload/v1754743508/IMG-20250801-WA0037_fslab5.jpg" },
  { url: "https://res.cloudinary.com/dxpm4uj4t/image/upload/v1754743508/IMG-20250801-WA0038_rlm6du.jpg" },
  { url: "https://res.cloudinary.com/dxpm4uj4t/image/upload/v1754743508/IMG-20250801-WA0040_qdfoig.jpg" },
  { url: "https://res.cloudinary.com/dxpm4uj4t/image/upload/v1754743509/IMG-20250801-WA0041_glmtgw.jpg" },
  { url: "https://res.cloudinary.com/dxpm4uj4t/image/upload/v1754743509/IMG-20250801-WA0042_osyraf.jpg" },
  { url: "https://res.cloudinary.com/dxpm4uj4t/image/upload/v1754743509/IMG-20250801-WA0043_lqwz88.jpg" },
  { url: "https://res.cloudinary.com/dxpm4uj4t/image/upload/v1754743509/IMG-20250801-WA0044_jizzta.jpg" },
  { url: "https://res.cloudinary.com/dxpm4uj4t/image/upload/v1754743509/IMG-20250801-WA0046_wy0kcn.jpg" },
  { url: "https://res.cloudinary.com/dxpm4uj4t/image/upload/v1754743510/IMG-20250801-WA0051_ce7smb.jpg" },
  { url: "https://res.cloudinary.com/dxpm4uj4t/image/upload/v1754743510/IMG-20250801-WA0053_ncgnhn.jpg" },
  { url: "https://res.cloudinary.com/dxpm4uj4t/image/upload/v1754743510/IMG-20250801-WA0052_vn6auv.jpg" },
  { url: "https://res.cloudinary.com/dxpm4uj4t/image/upload/v1754743510/IMG-20250801-WA0054_men7nl.jpg" },
  { url: "https://res.cloudinary.com/dxpm4uj4t/image/upload/v1754743511/IMG-20250801-WA0056_um8civ.jpg" },
  { url: "https://res.cloudinary.com/dxpm4uj4t/image/upload/v1754743518/IMG-20250801-WA0061_x4blz8.jpg" },
  { url: "https://res.cloudinary.com/dxpm4uj4t/image/upload/v1754743519/IMG-20250801-WA0065_ndw6cg.jpg" },
  { url: "https://res.cloudinary.com/dxpm4uj4t/image/upload/v1754743519/IMG-20250801-WA0064_rng38y.jpg" },
  { url: "https://res.cloudinary.com/dxpm4uj4t/image/upload/v1754743519/IMG-20250801-WA0062_c6xydf.jpg" },
  { url: "https://res.cloudinary.com/dxpm4uj4t/image/upload/v1754743520/IMG-20250801-WA0066_mnaj8k.jpg" },
  { url: "https://res.cloudinary.com/dxpm4uj4t/image/upload/v1754743521/IMG-20250801-WA0063_tctwud.jpg" },
  { url: "https://res.cloudinary.com/dxpm4uj4t/image/upload/v1754743520/IMG-20250801-WA0070_ru7u2c.jpg" },
  { url: "https://res.cloudinary.com/dxpm4uj4t/image/upload/v1754743525/IMG-20250801-WA0073_g3z1jp.jpg" }
];



  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'gallery', 'care', 'booking', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handlePhoneCall = (phoneNumber) => {
    window.open(`tel:${phoneNumber}`, '_self');
  };

  const handleEmail = () => {
    window.open('mailto:laviedaviepetocare@gmail.com', '_self');
  };

  const handleInstagram = () => {
    window.open('https://www.instagram.com/laviedavie_petocare?igsh=MWRqZjUzODgyaHAyeA==', '_blank');
  };

  const openGallery = (index = 0) => {
    setCurrentImageIndex(index);
    setShowGallery(true);
    document.body.style.overflow = 'hidden';
  };

  const closeGallery = () => {
    setShowGallery(false);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const NavLink = ({ href, children, className = "" }) => (
    <button
      onClick={() => scrollToSection(href)}
      className={`transition-all duration-300 hover:text-[#F44366] hover:scale-105 ${
        activeSection === href ? 'text-[#F44366] font-semibold' : 'text-gray-700'
      } ${className}`}
    >
      {children}
    </button>
  );

  return (
    <div className="min-h-screen bg-white overflow-x-hidden font-figma">
      {/* Gallery Modal */}
        {showGallery && (
          <div className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4">
            <button
              onClick={closeGallery}
              className="absolute top-4 right-4 text-white hover:text-[#F875AA] transition-colors duration-300 z-10"
            >
              <X className="h-8 w-8" />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-[#F875AA] transition-colors duration-300 z-10"
            >
              <ChevronLeft className="h-12 w-12" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-[#F875AA] transition-colors duration-300 z-10"
            >
              <ChevronRight className="h-12 w-12" />
            </button>

            <div className="max-w-4xl max-h-[90vh] w-full flex flex-col items-center">
              <div className="w-full flex justify-center items-center max-h-[80vh] overflow-hidden">
                <img
                  src={galleryImages[currentImageIndex].url}
           
                  className="max-w-full max-h-[80vh] object-contain rounded-lg"
                />
              </div>

              <div className="text-center text-white/70 mt-2">
                {currentImageIndex + 1} of {galleryImages.length}
              </div>
            </div>
          </div>
        )}

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-[#FDDDE6] transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2 ">
              <img className=' h-14 w-14 rounded-full ' src={logo} />
              <span className="text-xl font-bold text-[#F44366] hover:scale-105 transition-transform duration-300 cursor-pointer">
                Lavie Davie Petocare
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <NavLink href="home">Home</NavLink>
              <NavLink href="about">Our Story</NavLink>
              <NavLink href="services">Services</NavLink>
              <NavLink href="gallery">Gallery</NavLink>
              <NavLink href="care">Care Philosophy</NavLink>
              <NavLink href="booking">Booking</NavLink>
              <NavLink href="contact">Contact</NavLink>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-[#F44366] transition-all duration-300 hover:scale-110"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-[#FDDDE6] animate-slideDown">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <NavLink href="home" className="block px-3 py-2 hover:bg-[#FDDDE6] rounded-lg">Home</NavLink>
                <NavLink href="about" className="block px-3 py-2 hover:bg-[#FDDDE6] rounded-lg">Our Story</NavLink>
                <NavLink href="services" className="block px-3 py-2 hover:bg-[#FDDDE6] rounded-lg">Services</NavLink>
                <NavLink href="gallery" className="block px-3 py-2 hover:bg-[#FDDDE6] rounded-lg">Gallery</NavLink>
                <NavLink href="care" className="block px-3 py-2 hover:bg-[#FDDDE6] rounded-lg">Care Philosophy</NavLink>
                <NavLink href="booking" className="block px-3 py-2 hover:bg-[#FDDDE6] rounded-lg">Booking</NavLink>
                <NavLink href="contact" className="block px-3 py-2 hover:bg-[#FDDDE6] rounded-lg">Contact</NavLink>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-[#FDDDE6] via-white to-[#F875AA]/10 relative overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-4 h-4 bg-[#F875AA] rounded-full animate-float opacity-60"></div>
          <div className="absolute top-40 right-20 w-6 h-6 bg-[#F44366] rounded-full animate-float-delayed opacity-40"></div>
          <div className="absolute bottom-40 left-20 w-3 h-3 bg-[#F875AA] rounded-full animate-float opacity-50"></div>
          <div className="absolute bottom-20 right-10 w-5 h-5 bg-[#FDDDE6] rounded-full animate-float-delayed opacity-70"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div className={`text-center lg:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex justify-center lg:justify-start items-center space-x-2 mb-6">
              <span className="text-2xl animate-bounce">🐾</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#F44366] hover:scale-105 transition-transform duration-500">
                Lavie Davie Petocare
              </h1>
              <span className="text-2xl animate-bounce animation-delay-200">🐾</span>
            </div>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-8 font-medium animate-fadeInUp animation-delay-300">
              "A Second Home for Your Pets"
            </p>
            <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto lg:mx-0 mb-12 leading-relaxed animate-fadeInUp animation-delay-500">
              Welcome to Lavie Davie Petocare, where every paw, claw, and feather is welcomed with love.
              Nestled in the heart of a warm, pet-loving home, we offer personalized, home-based boarding 
              for pets who deserve nothing less than comfort, care, and cuddles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fadeInUp animation-delay-700">
              <button 
                onClick={() => handlePhoneCall('+919987223678')}
                className="group bg-[#F44366] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-[#F875AA] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5 group-hover:animate-bounce" />
                <span>Book Now</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="group border-2 border-[#F875AA] text-[#F875AA] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-[#F875AA] hover:text-white transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Our Services</span>
                <Sparkles className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              </button>
            </div>
          </div>
          
          {/* Hero Image */}
           <div className={`relative transition-all duration-1000 animation-delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500 group">
                    <video
                      src={videos[currentVideoIndex]}
                      alt="Happy pets together"
                      className="w-full h-64 sm:h-80 lg:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                      autoPlay
                      muted
                      loop={false}   // Loop off, so onEnded triggers
                      playsInline
                      onEnded={handleVideoEnd}
                      controls  // optional: remove if you don't want controls
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#F44366]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <p className="text-lg font-semibold">Where every pet feels at home</p>
                    </div>
                  </div>

                  {/* Floating badges */}
                  <div className="absolute -top-4 -right-4 bg-[#F875AA] text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold animate-pulse shadow-lg">
                    30+ Years Experience
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-[#F44366] text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold animate-pulse shadow-lg">
                    Trusted by 100+ Families
                  </div>
                </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <span className="text-2xl mb-4 block animate-bounce">💫</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F44366] mb-6 hover:scale-105 transition-transform duration-300">Our Story</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeInLeft">
              <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                <img 
                  src="https://res.cloudinary.com/dxpm4uj4t/image/upload/v1754743546/WhatsApp_Image_2025-08-09_at_18.12.20_1f7fbe44_zzxvod.jpg" 
                  alt="Pet care professionals" 
                  className="w-full h-64 sm:h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#F875AA]/30 to-[#F44366]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
            
            <div className="animate-fadeInRight">
              <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed hover:text-gray-800 transition-colors duration-300">
                Lavie Davie Petocare was lovingly founded on <strong className="text-[#F44366]">29th August 2019</strong>, but our bond 
                with animals goes back decades. Raised in a home filled with pets of all kinds, caring for 
                animals is second nature to us.
              </p>
              <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed hover:text-gray-800 transition-colors duration-300">
                Led by <strong className="text-[#F44366]">Lavie and Clara</strong>, a passionate mother-daughter team with over 
                <strong className="text-[#F875AA]"> 30+ years of real-world experience</strong>, we've created a safe, nurturing space 
                where pets feel secure, seen, and deeply loved.
              </p>
              <p className="text-base sm:text-lg text-[#F44366] font-semibold animate-pulse">
                This isn't a facility. This is our home — and now, it can be your pet's home too.
              </p>
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-[#FDDDE6] p-4 rounded-xl text-center hover:scale-105 transition-transform duration-300 group">
                  <div className="text-xl sm:text-2xl font-bold text-[#F44366] mb-1 group-hover:animate-bounce">30+</div>
                  <div className="text-gray-700 text-sm">Years Experience</div>
                </div>
                <div className="bg-[#FDDDE6] p-4 rounded-xl text-center hover:scale-105 transition-transform duration-300 group">
                  <div className="text-xl sm:text-2xl font-bold text-[#F44366] mb-1 group-hover:animate-bounce">2019</div>
                  <div className="text-gray-700 text-sm">Founded</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-[#FDDDE6]/30 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 text-6xl">🐾</div>
          <div className="absolute top-20 right-20 text-4xl">🐱</div>
          <div className="absolute bottom-20 left-20 text-5xl">🐶</div>
          <div className="absolute bottom-10 right-10 text-3xl">🦜</div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 animate-fadeInUp">
            <span className="text-2xl mb-4 block animate-bounce">🐾🐾</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F44366] mb-6 hover:scale-105 transition-transform duration-300">What We Offer</h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
              We don't just provide pet services — we create meaningful, comforting experiences for your beloved companions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group animate-fadeInUp">
              <div className="relative mb-4">
                <Home className="h-12 w-12 text-[#F875AA] group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#F44366] rounded-full animate-ping opacity-75"></div>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#F44366] mb-3 group-hover:text-[#F875AA] transition-colors duration-300">Home-Style Boarding</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Your pets are welcomed into a peaceful, loving home — not a sterile kennel. 
                At our Santacruz & Virar locations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group animate-fadeInUp animation-delay-200">
              <div className="relative mb-4">
                <Users className="h-12 w-12 text-[#F875AA] group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#F44366] rounded-full animate-ping opacity-75"></div>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#F44366] mb-3 group-hover:text-[#F875AA] transition-colors duration-300">Pet Sitting</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We bring our care to your doorstep. Perfect for pets who prefer 
                their own environment and familiar surroundings.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group animate-fadeInUp animation-delay-400">
              <div className="relative mb-4">
                <Dog className="h-12 w-12 text-[#F875AA] group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#F44366] rounded-full animate-ping opacity-75"></div>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#F44366] mb-3 group-hover:text-[#F875AA] transition-colors duration-300">Dog Walking</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Gentle, dedicated dog walks tailored to your pet's pace and temperament. 
                Based on slot availability.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group animate-fadeInUp animation-delay-600">
              <div className="relative mb-4">
                <Clock className="h-12 w-12 text-[#F875AA] group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#F44366] rounded-full animate-ping opacity-75"></div>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#F44366] mb-3 group-hover:text-[#F875AA] transition-colors duration-300">Pet Visits</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Perfect for busy days or short trips. We stop by to feed, clean, 
                play with, or offer companionship to your pet.
              </p>
            </div>
          </div>

          {/* Service Images Gallery */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
            <div onClick={() => scrollToSection('gallery')} className="relative rounded-2xl  overflow-hidden shadow-xl group animate-fadeInUp">
              <img 
                src="https://res.cloudinary.com/dxpm4uj4t/image/upload/v1754743536/IMG-20250802-WA0016_mciwdy.jpg" 
                alt="Dog boarding" 
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#F44366]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="font-semibold">Home-Style Boarding</p>
                <div className="flex items-center mt-1">
                  <Camera className="h-4 w-4 mr-1" />
                  <span className="text-sm">View Gallery</span>
                </div>
              </div>
            </div>
            
            <div onClick={() => scrollToSection('gallery')} className="relative rounded-2xl  overflow-hidden shadow-xl group animate-fadeInUp animation-delay-200">
              <img 
                src="https://res.cloudinary.com/dxpm4uj4t/image/upload/v1754743535/IMG-20250801-WA0091_rwglph.jpg" 
                alt="Pet sitting" 
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#F875AA]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="font-semibold">Professional Pet Sitting</p>
                <div className="flex items-center mt-1">
                  <Camera className="h-4 w-4 mr-1" />
                  <span className="text-sm">View Gallery</span>
                </div>
              </div>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-xl group animate-fadeInUp animation-delay-400 cursor-pointer" onClick={() => scrollToSection('gallery')}>
              <img 
                src="https://res.cloudinary.com/dxpm4uj4t/image/upload/v1754743520/IMG-20250801-WA0066_mnaj8k.jpg" 
                alt="Dog walking" 
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#F44366]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="font-semibold">Click to view our loving home</p>
                <div className="flex items-center mt-1">
                  <Camera className="h-4 w-4 mr-1" />
                  <span className="text-sm">View Gallery</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pets We Welcome */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-500 animate-fadeInUp">
            <h3 className="text-xl sm:text-2xl font-bold text-[#F44366] mb-6 text-center">We Welcome</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 text-center">
              <div className="flex flex-col items-center group hover:scale-110 transition-transform duration-300">
                <Cat className="h-8 sm:h-10 w-8 sm:w-10 text-[#F875AA] mb-2 group-hover:animate-bounce" />
                <span className="text-xs sm:text-sm text-gray-700 group-hover:text-[#F44366] transition-colors duration-300">Cats 🐱</span>
              </div>
              <div className="flex flex-col items-center group hover:scale-110 transition-transform duration-300">
                <Dog className="h-8 sm:h-10 w-8 sm:w-10 text-[#F875AA] mb-2 group-hover:animate-bounce" />
                <span className="text-xs sm:text-sm text-gray-700 group-hover:text-[#F44366] transition-colors duration-300">Small & Medium Dogs 🐶</span>
              </div>
              <div className="flex flex-col items-center group hover:scale-110 transition-transform duration-300">
                <Rabbit className="h-8 sm:h-10 w-8 sm:w-10 text-[#F875AA] mb-2 group-hover:animate-bounce" />
                <span className="text-xs sm:text-sm text-gray-700 group-hover:text-[#F44366] transition-colors duration-300">Rabbits 🐰</span>
              </div>
              <div className="flex flex-col items-center group hover:scale-110 transition-transform duration-300">
                <Heart className="h-8 sm:h-10 w-8 sm:w-10 text-[#F875AA] mb-2 group-hover:animate-bounce" />
                <span className="text-xs sm:text-sm text-gray-700 group-hover:text-[#F44366] transition-colors duration-300">Guinea Pigs 🐹</span>
              </div>
              <div className="flex flex-col items-center group hover:scale-110 transition-transform duration-300">
                <Shield className="h-8 sm:h-10 w-8 sm:w-10 text-[#F875AA] mb-2 group-hover:animate-bounce" />
                <span className="text-xs sm:text-sm text-gray-700 group-hover:text-[#F44366] transition-colors duration-300">Tortoises 🐢</span>
              </div>
              <div className="flex flex-col items-center group hover:scale-110 transition-transform duration-300">
                <Bird className="h-8 sm:h-10 w-8 sm:w-10 text-[#F875AA] mb-2 group-hover:animate-bounce" />
                <span className="text-xs sm:text-sm text-gray-700 group-hover:text-[#F44366] transition-colors duration-300">Birds & Parrots 🦜</span>
              </div>
            </div>
            <p className="text-center text-red-600 mt-6 font-medium animate-pulse text-sm sm:text-base">
              ❌ We do not accommodate large dog breeds or exotic animals like fish.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
<section id="gallery" className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16 animate-fadeInUp">
      <span className="text-2xl mb-4 block animate-bounce">📸</span>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F44366] mb-6 hover:scale-105 transition-transform duration-300">Our Loving Home Gallery</h2>
      <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
        Take a peek into our warm, welcoming environment where your pets feel truly at home.
      </p>
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
      {galleryImages.slice(0, currentImageCount).map((image, index) => (
        <div 
          key={index}
          className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group cursor-pointer animate-fadeInUp"
          style={{ animationDelay: `${index * 0.1}s` }}
          onClick={() => openGallery(index)}
        >
          <img 
            src={image.url}
            alt={image.alt}
            className="w-full h-32 sm:h-40 lg:h-48 object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F44366]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <Camera className="h-8 w-8 text-white animate-bounce" />
          </div>
        </div>
      ))}
    </div>

    {currentImageCount < galleryImages.length && (
      <div className="text-center animate-fadeInUp">
        <button 
          onClick={() => setCurrentImageCount(prev => Math.min(prev + 8, galleryImages.length))}
          className="group bg-gradient-to-r from-[#F44366] to-[#F875AA] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 mx-auto"
        >
          <Grid className="h-5 w-5 group-hover:animate-bounce" />
          <span>Load More Images</span>
          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    )}
  </div>
</section>


      {/* Care Philosophy Section */}
      <section id="care" className="py-20 bg-gradient-to-br from-[#FDDDE6]/30 to-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <span className="text-2xl mb-4 block animate-bounce">🌸</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F44366] mb-6 hover:scale-105 transition-transform duration-300">A Glimpse into Our Care Philosophy</h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
              At Lavie Davie, we believe care isn't just about routines — it's about relationships.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-fadeInLeft">
              <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                <img 
                  src="https://res.cloudinary.com/dxpm4uj4t/image/upload/v1754743512/IMG-20250801-WA0058_sbj2u0.jpg" 
                  alt="Pet care philosophy" 
                  className="w-full h-64 sm:h-100 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#F875AA]/20 to-[#F44366]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-sm font-semibold text-[#F44366] animate-pulse">
                  💖 Love & Care
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 animate-fadeInRight">
              <div className="bg-[#FDDDE6] p-6 rounded-2xl hover:scale-105 transition-all duration-300 group">
                <Home className="h-10 w-10 text-[#F44366] mb-4 group-hover:animate-bounce" />
                <h3 className="text-lg font-semibold text-[#F44366] mb-3">Home-Like Comfort</h3>
                <p className="text-gray-700 text-sm">
                  No cages. No confinement. Just open, loving spaces where pets are free to roam, rest, and feel safe.
                </p>
              </div>

              <div className="bg-[#FDDDE6] p-6 rounded-2xl hover:scale-105 transition-all duration-300 group">
                <Clock className="h-10 w-10 text-[#F44366] mb-4 group-hover:animate-bounce" />
                <h3 className="text-lg font-semibold text-[#F44366] mb-3">Personalized Schedules</h3>
                <p className="text-gray-700 text-sm">
                  Custom feeding times to special dietary needs or medication routines — we follow your instructions to the letter.
                </p>
              </div>

              <div className="bg-[#FDDDE6] p-6 rounded-2xl hover:scale-105 transition-all duration-300 group">
                <Heart className="h-10 w-10 text-[#F44366] mb-4 group-hover:animate-bounce" />
                <h3 className="text-lg font-semibold text-[#F44366] mb-3">Gentle Handling</h3>
                <p className="text-gray-700 text-sm">
                  We understand that pets feel stress differently. Our experience helps us care for even the most sensitive pets.
                </p>
              </div>

              <div className="bg-[#FDDDE6] p-6 rounded-2xl hover:scale-105 transition-all duration-300 group">
                <Star className="h-10 w-10 text-[#F44366] mb-4 group-hover:animate-bounce" />
                <h3 className="text-lg font-semibold text-[#F44366] mb-3">Hygiene & Cleanliness</h3>
                <p className="text-gray-700 text-sm">
                  Everything is regularly sanitized — from bowls to bedding, ensuring your pet stays healthy and safe.
                </p>
              </div>
            </div>
          </div>

          {/* Timing Info */}
          <div className="bg-gradient-to-r from-[#F875AA]/10 to-[#F44366]/10 p-6 sm:p-8 rounded-2xl animate-fadeInUp">
            <div className="text-center mb-8">
              <Clock className="h-12 w-12 text-[#F44366] mx-auto mb-4 animate-spin-slow" />
              <h3 className="text-xl sm:text-2xl font-bold text-[#F44366] mb-4">Check-In & Check-Out</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              <div className="text-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-lg font-semibold text-[#F44366] mb-2">Check-In</h4>
                <p className="text-gray-700 text-xl font-bold">9:00 AM - 5:00 PM</p>
              </div>
              <div className="text-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-lg font-semibold text-[#F44366] mb-2">Check-Out</h4>
                <p className="text-gray-700 text-xl font-bold">7:00 AM - 8:00 AM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fadeInUp">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F44366] mb-6 hover:scale-105 transition-transform duration-300">
              Trusted by Pet Parents Across Mumbai
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-4xl mx-auto mb-8">
              Over the years, Lavie Davie Petocare has become a cherished and trusted name in the pet care community — 
              not just because of what we do, but how we do it.
            </p>
            <div className="flex justify-center items-center space-x-2 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 sm:h-8 w-6 sm:w-8 text-[#F875AA] fill-current animate-pulse" style={{animationDelay: `${i * 0.2}s`}} />
              ))}
            </div>
            <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 mb-8">
              <div className="bg-[#FDDDE6] p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <Award className="h-10 sm:h-12 w-10 sm:w-12 text-[#F875AA] mx-auto mb-4 animate-bounce" />
                <h3 className="text-lg sm:text-xl font-bold text-[#F44366] mb-2">100+</h3>
                <p className="text-gray-700">Happy Pet Families</p>
              </div>
              <div className="bg-[#FDDDE6] p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CheckCircle className="h-10 sm:h-12 w-10 sm:w-12 text-[#F875AA] mx-auto mb-4 animate-bounce" />
                <h3 className="text-lg sm:text-xl font-bold text-[#F44366] mb-2">5 Star</h3>
                <p className="text-gray-700">Average Rating</p>
              </div>
              <div className="bg-[#FDDDE6] p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <Heart className="h-10 sm:h-12 w-10 sm:w-12 text-[#F875AA] mx-auto mb-4 animate-bounce" />
                <h3 className="text-lg sm:text-xl font-bold text-[#F44366] mb-2">6 Years</h3>
                <p className="text-gray-700">Of Loving Care</p>
              </div>
            </div>
            <p className="text-[#F44366] font-semibold text-base sm:text-lg animate-pulse">
              ❤ Because their comfort is your peace of mind — and your trust is our biggest reward.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 bg-gradient-to-br from-[#FDDDE6]/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <span className="text-2xl mb-4 block animate-bounce">✍</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F44366] mb-6 hover:scale-105 transition-transform duration-300">How to Book</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
            <div className="text-center bg-white p-6 rounded-2xl hover:scale-105 transition-all duration-300 animate-fadeInUp group">
              <div className="bg-[#F875AA] text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold group-hover:animate-bounce">1</div>
              <h3 className="text-lg font-semibold text-[#F44366] mb-3">Pre-Booking Trial</h3>
              <p className="text-gray-700 text-sm">
                A short trial session helps us understand your pet's temperament, energy, and needs.
              </p>
            </div>

            <div className="text-center bg-white p-6 rounded-2xl hover:scale-105 transition-all duration-300 animate-fadeInUp animation-delay-200 group">
              <div className="bg-[#F875AA] text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold group-hover:animate-bounce">2</div>
              <h3 className="text-lg font-semibold text-[#F44366] mb-3">Booking Form & Payment</h3>
              <p className="text-gray-700 text-sm">
                Mandatory booking form and advance payment. Booking your slot in advance is compulsory.
              </p>
            </div>

            <div className="text-center bg-white p-6 rounded-2xl hover:scale-105 transition-all duration-300 animate-fadeInUp animation-delay-400 group sm:col-span-2 lg:col-span-1">
              <div className="bg-[#F875AA] text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold group-hover:animate-bounce">3</div>
              <h3 className="text-lg font-semibold text-[#F44366] mb-3">Appointment-Based Visits</h3>
              <p className="text-gray-700 text-sm">
                Since this is our home, no walk-ins are allowed. All visits must be scheduled ahead.
              </p>
            </div>
          </div>

          {/* Booking CTA */}
          <div className="text-center mb-16 animate-fadeInUp">
            <button 
              onClick={() => handlePhoneCall('+919987223678')}
              className="group bg-gradient-to-r from-[#F44366] to-[#F875AA] text-white px-8 sm:px-12 py-4 sm:py-6 rounded-full font-bold text-base sm:text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3 mx-auto"
            >
              <Phone className="h-5 sm:h-6 w-5 sm:w-6 group-hover:animate-bounce" />
              <span>Book Your Pet's Stay Today</span>
              <ArrowRight className="h-5 sm:h-6 w-5 sm:w-6 group-hover:translate-x-2 transition-transform duration-300" />
            </button>
          </div>

          {/* Our Promise */}
          <div className="bg-[#F875AA]/10 p-6 sm:p-8 rounded-2xl mb-16 animate-fadeInUp">
            <h3 className="text-xl sm:text-2xl font-bold text-[#F44366] mb-6 text-center">🛏 Our Promise</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
              <div className="flex flex-col items-center group hover:scale-110 transition-transform duration-300">
                <Home className="h-6 sm:h-8 w-6 sm:w-8 text-[#F875AA] mb-2 group-hover:animate-bounce" />
                <span className="text-xs sm:text-sm text-gray-700">Familiar, homely setting</span>
              </div>
              <div className="flex flex-col items-center group hover:scale-110 transition-transform duration-300">
                <Clock className="h-6 sm:h-8 w-6 sm:w-8 text-[#F875AA] mb-2 group-hover:animate-bounce" />
                <span className="text-xs sm:text-sm text-gray-700">Meals as per instructions</span>
              </div>
              <div className="flex flex-col items-center group hover:scale-110 transition-transform duration-300">
                <Dog className="h-6 sm:h-8 w-6 sm:w-8 text-[#F875AA] mb-2 group-hover:animate-bounce" />
                <span className="text-xs sm:text-sm text-gray-700">Walks, play, and rest</span>
              </div>
              <div className="flex flex-col items-center group hover:scale-110 transition-transform duration-300">
                <Heart className="h-6 sm:h-8 w-6 sm:w-8 text-[#F875AA] mb-2 group-hover:animate-bounce" />
                <span className="text-xs sm:text-sm text-gray-700">One-on-one attention</span>
              </div>
              <div className="flex flex-col items-center group hover:scale-110 transition-transform duration-300 col-span-2 sm:col-span-1">
                <Phone className="h-6 sm:h-8 w-6 sm:w-8 text-[#F875AA] mb-2 group-hover:animate-bounce" />
                <span className="text-xs sm:text-sm text-gray-700">Updates upon request</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <span className="text-2xl mb-4 block animate-bounce">📞</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F44366] mb-6 hover:scale-105 transition-transform duration-300">Contact Information</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div className="animate-fadeInLeft">
              <div className="space-y-8">
                <div className="bg-[#FDDDE6] p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-[#F44366] mb-4 flex items-center">
                    <Sparkles className="h-6 w-6 mr-2 animate-spin-slow" />
                    Leadership Team
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center group hover:scale-105 transition-transform duration-300">
                      <button 
                        onClick={() => handlePhoneCall('+919987223678')}
                        className="flex items-center group-hover:text-[#F44366] transition-colors duration-300"
                      >
                        <Phone className="h-5 w-5 text-[#F875AA] mr-3 group-hover:animate-bounce" />
                        <div>
                          <p className="font-semibold text-gray-800">Lavie (Founder & CEO)</p>
                          <p className="text-gray-600">+91 99872 23678</p>
                        </div>
                      </button>
                    </div>
                    <div className="flex items-center group hover:scale-105 transition-transform duration-300">
                      <button 
                        onClick={() => handlePhoneCall('+919821481749')}
                        className="flex items-center group-hover:text-[#F44366] transition-colors duration-300"
                      >
                        <Phone className="h-5 w-5 text-[#F875AA] mr-3 group-hover:animate-bounce" />
                        <div>
                          <p className="font-semibold text-gray-800">Clara (Managing Director)</p>
                          <p className="text-gray-600">+91 98214 81749</p>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-[#FDDDE6] p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-[#F44366] mb-4 flex items-center">
                    <Mail className="h-6 w-6 mr-2 animate-pulse" />
                    General Inquiries
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center group hover:scale-105 transition-transform duration-300">
                      <button 
                        onClick={() => handlePhoneCall('+918097193678')}
                        className="flex items-center group-hover:text-[#F44366] transition-colors duration-300"
                      >
                        <Phone className="h-5 w-5 text-[#F875AA] mr-3 group-hover:animate-bounce" />
                        <div>
                          <p className="font-semibold text-gray-800">Front Desk</p>
                          <p className="text-gray-600">+91 80971 93678</p>
                        </div>
                      </button>
                    </div>
                    <div className="flex items-center group hover:scale-105 transition-transform duration-300">
                      <button 
                        onClick={handleEmail}
                        className="flex items-center group-hover:text-[#F44366] transition-colors duration-300"
                      >
                        <Mail className="h-5 w-5 text-[#F875AA] mr-3 group-hover:animate-bounce" />
                        <div>
                          <p className="font-semibold text-gray-800">Complaints / Feedback</p>
                          <p className="text-gray-600">laviedaviepetocare@gmail.com</p>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Instagram */}
                <div className="bg-[#FDDDE6] p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-[#F44366] mb-4 flex items-center">
                    <Instagram className="h-6 w-6 mr-2 animate-pulse" />
                    Follow Us
                  </h3>
                  <button 
                    onClick={handleInstagram}
                    className="flex items-center group hover:scale-105 transition-transform duration-300 hover:text-[#F44366]"
                  >
                    <Instagram className="h-5 w-5 text-[#F875AA] mr-3 group-hover:animate-bounce" />
                    <div>
                      <p className="font-semibold text-gray-800">@laviedavie_petocare</p>
                      <p className="text-gray-600">Follow our daily pet adventures</p>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Locations */}
            <div className="animate-fadeInRight">
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl sm:text-2xl font-semibold text-[#F44366] mb-6 text-center flex items-center justify-center">
                  <MapPin className="h-8 w-8 mr-2 animate-pulse" />
                  Our Locations
                </h3>
                <div className="space-y-6">
                  <div className="bg-[#FDDDE6] p-6 rounded-xl hover:scale-105 transition-all duration-300 group">
                    <div className="flex items-center mb-3">
                      <MapPin className="h-6 w-6 text-[#F44366] mr-2 group-hover:animate-bounce" />
                      <h4 className="text-lg font-semibold text-[#F44366]">Santacruz (West)</h4>
                    </div>
                    <p className="text-gray-700 text-sm">
                      Centrally located and easy to access. Perfect for quick visits and regular boarding.
                    </p>
                  </div>

                  <div className="bg-[#FDDDE6] p-6 rounded-xl hover:scale-105 transition-all duration-300 group">
                    <div className="flex items-center mb-3">
                      <MapPin className="h-6 w-6 text-[#F44366] mr-2 group-hover:animate-bounce" />
                      <h4 className="text-lg font-semibold text-[#F44366]">Virar (West)</h4>
                    </div>
                    <p className="text-gray-700 text-sm">
                      Quieter, more spacious environment ideal for longer stays and pets who need extra space.
                    </p>
                  </div>
                </div>
                <p className="text-center text-gray-600 text-sm mt-6 italic animate-pulse">
                  Location details are shared upon confirmed booking. Walk-ins are not permitted.
                </p>
              </div>

              {/* Location Image */}
              <div className="mt-8 relative rounded-2xl overflow-hidden shadow-xl group">
                <img 
                  src="https://res.cloudinary.com/dxpm4uj4t/image/upload/v1754743506/IMG-20250801-WA0024_mkhqw3.jpg" 
                  alt="Our pet care locations" 
                  className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#F44366]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-lg font-semibold">Visit our loving homes</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16 animate-fadeInUp">
            <button 
              onClick={() => handlePhoneCall('+919987223678')}
              className="group bg-gradient-to-r from-[#F44366] to-[#F875AA] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 mx-auto"
            >
              <Phone className="h-5 w-5 group-hover:animate-bounce" />
              <span>Contact Us Today</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#F44366] to-[#F875AA] text-white py-12 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 left-10 text-4xl animate-float">🐾</div>
          <div className="absolute top-8 right-20 text-3xl animate-float-delayed">❤️</div>
          <div className="absolute bottom-4 left-20 text-2xl animate-float">🏠</div>
          <div className="absolute bottom-8 right-10 text-3xl animate-float-delayed">🐱</div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="flex justify-center items-center space-x-2 mb-4 animate-fadeInUp">
              <Heart className="h-8 w-8 text-[#FDDDE6] animate-pulse" />
              <span className="text-xl sm:text-2xl font-bold hover:scale-105 transition-transform duration-300">Lavie Davie Petocare</span>
              <Heart className="h-8 w-8 text-[#FDDDE6] animate-pulse" />
            </div>
            <p className="text-[#FDDDE6] mb-4 text-base sm:text-lg animate-fadeInUp animation-delay-200">"A Second Home for Your Pets"</p>
            <p className="text-sm text-[#FDDDE6]/80 animate-fadeInUp animation-delay-400">
              © 2025 Lavie Davie Petocare. Founded with love on 29th August 2019.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4 animate-fadeInUp animation-delay-600">
              <button 
                onClick={() => handlePhoneCall('+919987223678')}
                className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition-colors duration-300"
              >
                <Phone className="h-4 w-4" />
                <span className="text-sm">Call Us</span>
              </button>
              <button 
                onClick={handleEmail}
                className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition-colors duration-300"
              >
                <Mail className="h-4 w-4" />
                <span className="text-sm">Email Us</span>
              </button>
              <button 
                onClick={handleInstagram}
                className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition-colors duration-300"
              >
                <Instagram className="h-4 w-4" />
                <span className="text-sm">Follow Us</span>
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;