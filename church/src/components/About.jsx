// components/About.jsx
import { Heart, Music, Users, Sparkles, Coffee, ArrowRight, Globe, Shield, TrendingUp, Calendar, Clock } from "lucide-react";
import { useState, useEffect, useRef } from "react";

import aboutpage from '../assets/images/aboutpage.jpg';
import "../css/about.css";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: 2500, label: "Weekly Members", icon: Users, suffix: "+" },
    { value: 26, label: "Years of Grace", icon: Calendar, suffix: "" },
    { value: 15, label: "Active Ministries", icon: Shield, suffix: "+" },
    { value: 45, label: "Community Partners", icon: Globe, suffix: "+" },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-28 px-6 bg-gradient-to-b from-[#fdfaf6] to-white overflow-hidden"
    >
      {/* Animated Background Glows */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-amber-200/30 blur-3xl rounded-full animate-pulse-slow"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-orange-200/30 blur-3xl rounded-full animate-pulse-slow delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-100/20 blur-3xl rounded-full"></div>
      
      {/* Floating Particles */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-gradient-to-r from-amber-400 to-orange-400 animate-float"
          style={{
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 10 + 8}s`,
            opacity: Math.random() * 0.2 + 0.1,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header with modern animations */}
        <div className={`text-center mb-20 transition-all duration-1000 transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}>
          <div className="inline-flex items-center gap-2 bg-amber-100/50 backdrop-blur-sm px-4 py-2 rounded-full border border-amber-200/50 mb-6">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span className="text-xs font-semibold tracking-widest uppercase text-amber-700">
              Since 1998
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mt-3 text-gray-900 leading-tight">
            Rooted in{" "}
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent animate-gradient">
              Love
            </span>
            , Reaching Out
          </h2>

          <div className="flex justify-center gap-2 mt-6">
            <div className="w-12 h-1 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full"></div>
            <div className="w-6 h-1 bg-amber-300 rounded-full"></div>
            <div className="w-3 h-1 bg-amber-200 rounded-full"></div>
          </div>

          <p className="max-w-2xl mx-auto mt-6 text-gray-600 text-lg leading-relaxed">
            A Christ-centered community built on faith, connection, and purpose, 
            where everyone belongs and no one walks alone.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text Content with animations */}
          <div className={`space-y-8 transition-all duration-1000 delay-200 transform ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
          }`}>
            <div className="space-y-6">
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-16 bg-gradient-to-b from-amber-400 to-orange-400 rounded-full"></div>
                <p className="text-gray-700 text-lg leading-relaxed pl-6">
                  Grace Covenant Church was founded in 1998 with a vision to create
                  a spiritual family where everyone belongs. We are a diverse
                  community committed to biblical truth, authentic worship, and
                  serving people with compassion.
                </p>
              </div>

              <div className="bg-amber-50/50 rounded-2xl p-6 border border-amber-100">
                <p className="text-gray-600 leading-relaxed">
                  Our mission is simple yet powerful:
                  <span className="block mt-2 font-semibold text-transparent bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-xl">
                    “To know Christ and make Him known.”
                  </span>
                </p>
              </div>

              {/* Features with enhanced hover effects */}
              <div className="grid grid-cols-3 gap-6 pt-4">
                {[
                  { icon: Heart, label: "Outreach", color: "rose" },
                  { icon: Music, label: "Worship", color: "amber" },
                  { icon: Users, label: "Community", color: "orange" },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div 
                      key={idx}
                      className="group text-center cursor-pointer"
                      onMouseEnter={() => setActiveIndex(idx)}
                      onMouseLeave={() => setActiveIndex(null)}
                    >
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                        <div className="relative w-16 h-16 mx-auto flex items-center justify-center rounded-2xl bg-amber-100 group-hover:bg-gradient-to-r group-hover:from-amber-500 group-hover:to-orange-500 transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl">
                          <Icon className="w-7 h-7 text-amber-600 group-hover:text-white transition-all duration-300" />
                        </div>
                      </div>
                      <p className="mt-3 text-sm font-semibold text-gray-700 group-hover:text-amber-600 transition-colors duration-300">
                        {item.label}
                      </p>
                      {activeIndex === idx && (
                        <div className="w-8 h-0.5 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto mt-2 rounded-full animate-pulse"></div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-amber-100">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                const [count, setCount] = useState(0);
                
                useEffect(() => {
                  if (isVisible) {
                    let start = 0;
                    const duration = 2000;
                    const increment = stat.value / (duration / 16);
                    
                    const timer = setInterval(() => {
                      start += increment;
                      if (start >= stat.value) {
                        setCount(stat.value);
                        clearInterval(timer);
                      } else {
                        setCount(Math.floor(start));
                      }
                    }, 16);
                    
                    return () => clearInterval(timer);
                  }
                }, [isVisible, stat.value]);
                
                return (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-xl hover:bg-amber-50/50 transition-all duration-300 group cursor-pointer">
                    <div className="p-2 bg-amber-100 rounded-lg group-hover:bg-amber-200 transition-colors duration-300">
                      <Icon className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-gray-800">{count.toLocaleString()}{stat.suffix}</div>
                      <div className="text-xs text-gray-500">{stat.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <button className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <span>Discover More</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Image Section with enhanced effects - FIXED Z-INDEX */}
          <div className={`relative transition-all duration-1000 delay-400 transform ${
            isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
          }`}>
            {/* Animated Border */}
            <div className="absolute -inset-2 bg-gradient-to-r from-amber-400/20 to-orange-400/20 rounded-3xl blur-xl animate-pulse-slow"></div>
            
            <div className="relative group">
              {/* Image overlay gradient for better text visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-3xl z-20 pointer-events-none"></div>
              
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-400/30 to-orange-400/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700"></div>

              <img
                src={aboutpage}
                alt="Community gathering at Grace Covenant Church"
                className="relative z-10 rounded-3xl shadow-2xl object-cover w-full h-[450px] transition-all duration-700 group-hover:scale-[1.02] group-hover:shadow-3xl"
              />

              {/* Glass Card - FIXED: Higher z-index and better positioning */}
              <div className="absolute bottom-6 left-6 right-6 md:right-auto z-30 backdrop-blur-lg bg-white/95 border border-white/40 rounded-2xl px-5 py-3 shadow-xl animate-slide-up group-hover:translate-y-[-5px] transition-transform duration-300">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <p className="text-sm text-gray-700 font-semibold">
                      Serving with love ❤️
                    </p>
                    <Coffee className="w-4 h-4 text-amber-600" />
                  </div>
                </div>
              </div>

              {/* Floating badge - FIXED: Higher z-index and better visibility */}
              <div className="absolute -top-4 -right-4 z-30 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl px-4 py-2 shadow-xl animate-float-slow hidden md:block">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-white" />
                  <span className="text-white text-sm font-semibold whitespace-nowrap">Join us Sundays @ 10AM</span>
                </div>
              </div>

              {/* Additional badge for mobile */}
              <div className="absolute top-4 right-4 z-30 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl px-3 py-1.5 shadow-xl md:hidden">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3 h-3 text-white" />
                  <span className="text-white text-xs font-semibold">Sundays @ 10AM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Quote Section */}
        <div className={`mt-20 text-center transition-all duration-1000 delay-600 transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}>
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-50 to-orange-50 backdrop-blur-sm rounded-full px-6 py-3 shadow-md border border-amber-100">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-amber-600 fill-amber-600" />
              <span className="text-gray-700 font-medium">2,500+ lives transformed</span>
            </div>
            <div className="w-px h-6 bg-amber-200"></div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-orange-500" />
              <span className="text-gray-700 font-medium">Growing together in faith</span>
            </div>
          </div>
        </div>
      </div>

     
    </section>
  );
};

export default About;