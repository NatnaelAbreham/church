// components/Hero.jsx
import { useState, useEffect } from "react";
import { ChevronRight, Play, Calendar, Heart, Sparkles, Cross } from "lucide-react";

// Import the CSS file
import "../css/hero.css"; // Adjust path as needed

import image2 from '../assets/images/c2.jpg';
import image5 from '../assets/images/c5.jpg';
import image6 from '../assets/images/c6.jpg';
import image11 from '../assets/images/c11.jpg';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  // Dynamic church-themed images
  const images = [
    { url: image11, alt: "Church interior with warm light" },
    { url: image2, alt: "Church interior with warm light" },
    { url: image5, alt: "Church interior with warm light" },
    { url: image6, alt: "Church interior with warm light" },
    
  ];

  // Image rotation every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Track mouse for dynamic shine effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePosition({ x, y });
    };

    const section = document.getElementById('hero-section');
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      return () => section.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      
      {/* Dynamic Background with Smooth Transitions */}
      <div className="absolute inset-0 z-0">
        {/* Background Images */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`hero-image-container ${
              index === currentImageIndex ? 'hero-image-active' : 'hero-image-inactive'
            }`}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="hero-image"
            />
          </div>
        ))}
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-blue-950/70 to-black/60"></div>
        
        {/* Dramatic Radial Gradient for Shine Effect */}
        <div 
          className="absolute inset-0 opacity-40 shine-effect"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59,130,246,0.3) 0%, rgba(0,0,0,0) 60%)`
          }}
        ></div>
      </div>

      {/* White Shine Effects Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Dynamic Spotlight that follows mouse */}
        <div 
          className="absolute w-[600px] h-[600px] rounded-full blur-3xl shine-effect"
          style={{
            background: `radial-gradient(circle, rgba(255,255,255,0.12) 0%, rgba(59,130,246,0.08) 50%, transparent 70%)`,
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
        ></div>

        {/* SHINING CROSSES */}
        {/* Large Glowing Cross - Top Right */}
        <div className="absolute top-[15%] right-[10%] opacity-30 animate-float-slow">
          <div className="relative">
            <div className="absolute inset-0 bg-white/20 blur-xl rounded-full scale-150 animate-pulse-slow"></div>
            <Cross className="w-16 h-16 text-white/50 drop-shadow-lg cross-hover" strokeWidth={1.5} />
          </div>
        </div>

        {/* Medium Cross - Bottom Left */}
        <div className="absolute bottom-[20%] left-[8%] opacity-25 animate-float-slow delay-1000">
          <div className="relative">
            <div className="absolute inset-0 bg-amber-400/20 blur-lg rounded-full scale-150 animate-pulse-slow"></div>
            <Cross className="w-12 h-12 text-amber-300/60 drop-shadow-lg cross-hover" strokeWidth={1.5} />
          </div>
        </div>

        {/* Small Cross - Center Left */}
        <div className="absolute top-[40%] left-[5%] opacity-20 animate-pulse-slow">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-400/20 blur-md rounded-full scale-150"></div>
            <Cross className="w-8 h-8 text-blue-300/50 cross-hover" strokeWidth={1.5} />
          </div>
        </div>

        {/* Tiny Cross - Decorative */}
        <div className="absolute bottom-[35%] right-[15%] opacity-15 animate-float-slow delay-2000">
          <Cross className="w-6 h-6 text-white/40 cross-hover" strokeWidth={1} />
        </div>

        {/* Shimmering Particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.4 + 0.1
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        
        {/* Modern Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 shadow-2xl mb-5 animate-slide-down">
          <Sparkles className="w-3 h-3 text-blue-300 animate-pulse" />
          <span className="text-xs font-medium tracking-wide text-white/90">
            ✝️ A Place of Grace & Hope
          </span>
          <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
        </div>

        {/* Animated Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-up">
          <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
            Where Faith
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-200 via-white to-blue-100 bg-clip-text text-transparent drop-shadow-2xl">
            Meets Community
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-sm md:text-base max-w-2xl mx-auto mt-4 text-white/80 animate-fade-up delay-100">
          Join us for uplifting worship, authentic fellowship, and life-changing messages.
          <span className="block text-blue-200 text-xs mt-1 font-light tracking-wide">Everyone is welcome ✨</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mt-6 animate-fade-up delay-200">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 px-5 py-2.5 rounded-full font-semibold shadow-2xl btn-transition flex items-center gap-2 text-xs"
          >
            <Calendar className="w-3.5 h-3.5 icon-transition group-hover:icon-rotate" />
            <span>Plan Your Visit</span>
            <ChevronRight className="w-3 h-3 icon-transition group-hover:icon-translate" />
          </a>
          
          <a
            href="#sermons"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("sermons")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group relative overflow-hidden bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 px-5 py-2.5 rounded-full font-semibold btn-transition flex items-center gap-2 text-xs"
          >
            <Play className="w-3.5 h-3.5 icon-transition group-hover:icon-scale" />
            <span>Watch Online</span>
          </a>

          {/* Live Button */}
          <a
            href="#live-stream"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("live-stream")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group relative overflow-hidden bg-gradient-to-r from-emerald-600/30 to-blue-600/30 backdrop-blur-md border border-emerald-400/50 hover:border-emerald-400/80 px-5 py-2.5 rounded-full font-semibold btn-transition flex items-center gap-2 text-xs"
          >
            <div className="live-pulse relative w-1.5 h-1.5">
              <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-75"></div>
              <div className="relative w-1.5 h-1.5 bg-red-500 rounded-full"></div>
            </div>
            <span>Live Now • 142 watching</span>
          </a>
        </div>

        {/* Stats Section */}
        <div className="flex flex-wrap justify-center gap-6 mt-10 pt-6">
          <div className="text-center px-4 py-2 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 stats-card">
            <div className="text-xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">2,500+</div>
            <div className="text-xs text-white/60">Weekly Members</div>
          </div>
          <div className="text-center px-4 py-2 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 stats-card">
            <div className="text-xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">15+</div>
            <div className="text-xs text-white/60">Ministries</div>
          </div>
          <div className="text-center px-4 py-2 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 stats-card">
            <div className="text-xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">50+</div>
            <div className="text-xs text-white/60">Years Serving</div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full z-10">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12 md:h-16">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 0.15 }} />
              <stop offset="100%" style={{ stopColor: '#ffffff', stopOpacity: 0 }} />
            </linearGradient>
          </defs>
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z"
            fill="url(#waveGradient)"
          />
        </svg>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-5 h-8 border border-white/30 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-0.5 h-1.5 bg-white/60 rounded-full mt-2 animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;