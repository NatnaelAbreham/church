// components/About.jsx
import {
  Heart,
  Music,
  Users,
  Sparkles,
  Coffee,
  ArrowRight,
  Globe,
  Shield,
  TrendingUp,
  Calendar,
  Clock,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

import aboutpage from "../assets/images/aboutpage.jpg";

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
      { threshold: 0.1 },
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
      className="theme-section relative py-16 sm:py-20 md:py-28 px-4 sm:px-6 overflow-hidden"
    >
      {/* Animated Background Glows - Responsive */}
      <div className="absolute -top-20 -left-20 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 theme-glow blur-3xl rounded-full animate-pulse-slow"></div>
      <div className="absolute -bottom-20 -right-20 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 bg-orange-200/30 blur-3xl rounded-full animate-pulse-slow delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-amber-100/20 blur-3xl rounded-full"></div>

      {/* Floating Particles - Responsive count */}
      {[...Array(8)].map((_, i) => (
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
        {/* Header with modern animations - Responsive */}
        <div
          className={`text-center mb-12 sm:mb-16 md:mb-20 transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-amber-100/50 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full theme-border mb-4 sm:mb-6">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 theme-accent" />
            <span className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase theme-accent">
              Since 1998
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-3 theme-heading leading-tight">
            Rooted in{" "}
            <span className="theme-gradient-text animate-gradient">
              Love
            </span>
            , Reaching Out
          </h2>

          <div className="flex justify-center gap-2 mt-4 sm:mt-6">
            <div className="w-8 sm:w-12 h-1 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full"></div>
            <div className="w-4 sm:w-6 h-1 bg-amber-300 rounded-full"></div>
            <div className="w-2 sm:w-3 h-1 bg-amber-200 rounded-full"></div>
          </div>

          <p className="max-w-2xl mx-auto mt-4 sm:mt-6 text-sm sm:text-base md:text-lg theme-text leading-relaxed px-2">
            A Christ-centered community built on faith, connection, and purpose,
            where everyone belongs and no one walks alone.
          </p>
        </div>

        {/* Content Grid - Responsive */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Text Content with animations */}
          <div
            className={`space-y-6 sm:space-y-8 transition-all duration-1000 delay-200 transform ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="space-y-4 sm:space-y-6">
              <div className="relative group max-w-2xl">
                {/* Gradient line */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-amber-400 via-orange-400 to-amber-500 rounded-full"></div>

                {/* Glow */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] blur-sm opacity-40 bg-gradient-to-b from-amber-400 via-orange-400 to-amber-500"></div>

                {/* Content */}
                <div className="pl-5 sm:pl-6">
                  <p className="text-sm sm:text-base md:text-lg theme-text leading-relaxed">
                    Grace Covenant Church was founded in 1998 with a vision to
                    create a spiritual family where everyone belongs. We are a
                    diverse community committed to biblical truth, authentic
                    worship, and serving people with compassion.
                  </p>

                  <span className="block mt-3 text-xs theme-accent font-medium uppercase tracking-wider">
                    Our Story
                  </span>
                </div>
              </div>

              <div className="theme-soft-card rounded-xl sm:rounded-2xl p-4 sm:p-6">
                <p className="text-sm sm:text-base theme-text leading-relaxed">
                  Our mission is simple yet powerful:
                  <span className="block mt-1 sm:mt-2 font-semibold theme-gradient-text text-lg sm:text-xl">
                    “To know Christ and make Him known.”
                  </span>
                </p>
              </div>

              {/* Features with enhanced hover effects - IMPROVED OPACITY & RESPONSIVE */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 pt-2 sm:pt-4">
                {[
                  {
                    icon: Heart,
                    label: "Outreach",
                    color: "rose",
                    description: "Serving our community with love",
                  },
                  {
                    icon: Music,
                    label: "Worship",
                    color: "amber",
                    description: "Lifting voices in praise",
                  },
                  {
                    icon: Users,
                    label: "Community",
                    color: "orange",
                    description: "Growing together in faith",
                  },
                ].map((item, idx) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={idx}
                      className="group relative cursor-pointer text-center rounded-xl sm:rounded-2xl theme-card theme-hover transition-all duration-300"
                      onMouseEnter={() => setActiveIndex(idx)}
                      onMouseLeave={() => setActiveIndex(null)}
                    >
                      {/* Hover glow background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-amber-50/20 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

                      <div className="relative p-4 sm:p-5 md:p-6">
                        {/* Icon glow ring */}
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 to-orange-400/10 rounded-xl sm:rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        {/* Icon */}
                        <div
                          className={`relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto flex items-center justify-center rounded-xl sm:rounded-2xl transition-all duration-500 group-hover:scale-110
            ${
              item.color === "rose"
                ? "bg-rose-100 group-hover:bg-gradient-to-r group-hover:from-rose-500 group-hover:to-rose-600"
                : ""
            }
            ${
              item.color === "amber"
                ? "bg-amber-100 group-hover:bg-gradient-to-r group-hover:from-amber-500 group-hover:to-amber-600"
                : ""
            }
            ${
              item.color === "orange"
                ? "bg-orange-100 group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-orange-600"
                : ""
            }`}
                        >
                          <Icon
                            className={`w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 transition-colors duration-300
              ${
                item.color === "rose"
                  ? "text-rose-600 group-hover:text-white"
                  : ""
              }
              ${
                item.color === "amber"
                  ? "theme-accent group-hover:text-white"
                  : ""
              }
              ${
                item.color === "orange"
                  ? "text-orange-600 group-hover:text-white"
                  : ""
              }`}
                          />
                        </div>

                        {/* Label */}
                        <p className="mt-3 text-xs sm:text-sm font-semibold theme-text group-hover:theme-accent transition-colors duration-300">
                          {item.label}
                        </p>

                        {/* Description */}
                        <p className="hidden md:block text-xs theme-muted mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-w-[90px] mx-auto">
                          {item.description}
                        </p>

                        {/* Active indicator line */}
                        {activeIndex === idx && (
                          <div className="w-8 h-0.5 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto mt-2 rounded-full animate-pulse"></div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Stats Section - Responsive */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-4 sm:pt-6 theme-border border-t">
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
                  <div
                    key={idx}
                    className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-xl theme-hover transition-all duration-300 group cursor-pointer"
                  >
                    <div className="p-1.5 sm:p-2 bg-amber-100 rounded-lg group-hover:bg-amber-200 transition-colors duration-300">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 theme-accent" />
                    </div>
                    <div>
                      <div className="text-base sm:text-lg md:text-xl font-bold theme-heading">
                        {count.toLocaleString()}
                        {stat.suffix}
                      </div>
                      <div className="text-[10px] sm:text-xs theme-muted">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Button - Responsive */}
            <button className="group inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 theme-button rounded-full font-semibold shadow-lg text-sm sm:text-base">
              <span>Discover More</span>
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Image Section with enhanced effects - FULLY RESPONSIVE */}
          <div
            className={`relative mt-8 md:mt-0 transition-all duration-1000 delay-400 transform ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            {/* Animated Border */}
            <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-amber-400/20 to-orange-400/20 rounded-2xl sm:rounded-3xl blur-lg sm:blur-xl animate-pulse-slow"></div>

            <div className="relative group">
              {/* Image overlay gradient for better text visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl sm:rounded-3xl z-20 pointer-events-none"></div>

              <div className="absolute inset-0 bg-gradient-to-tr from-amber-400/20 sm:from-amber-400/30 to-orange-400/20 sm:to-orange-400/30 rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl group-hover:blur-2xl sm:group-hover:blur-3xl transition-all duration-700"></div>

              <img
                src={aboutpage}
                alt="Community gathering at Grace Covenant Church"
                className="relative z-10 rounded-2xl sm:rounded-3xl shadow-2xl object-cover w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] transition-all duration-700 group-hover:scale-[1.01] sm:group-hover:scale-[1.02]"
              />

              {/* Glass Card - RESPONSIVE & BETTER POSITIONING */}
              <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-3 sm:left-4 md:left-6 right-3 sm:right-auto z-30 theme-card rounded-xl sm:rounded-2xl px-3 sm:px-4 md:px-5 py-2 sm:py-3 shadow-xl animate-slide-up group-hover:translate-y-[-3px] sm:group-hover:translate-y-[-5px] transition-transform duration-300">
                <div className="flex items-center justify-between gap-2 sm:gap-3">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <p className="text-xs sm:text-sm theme-text font-semibold">
                      Serving with love ❤️
                    </p>
                    <Coffee className="w-3 h-3 sm:w-4 sm:h-4 theme-accent" />
                  </div>
                </div>
              </div>

              {/* Floating badge - RESPONSIVE & HIDDEN ON VERY SMALL */}
              <div className="absolute -top-2 sm:-top-3 md:-top-4 -right-2 sm:-right-3 md:-right-4 z-30 theme-button rounded-xl sm:rounded-2xl px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 shadow-xl animate-float-slow hidden sm:block">
                <div className="flex items-center gap-1 sm:gap-2">
                  <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-white" />
                  <span className="text-white text-[10px] sm:text-xs md:text-sm font-semibold whitespace-nowrap">
                    Join us Sundays @ 10AM
                  </span>
                </div>
              </div>

              {/* Mobile badge - SHOWN ON SMALL SCREENS */}
              <div className="absolute top-2 sm:top-3 right-2 sm:right-3 z-30 theme-button rounded-lg sm:rounded-xl px-2 py-1 shadow-xl sm:hidden">
                <div className="flex items-center gap-1">
                  <Clock className="w-2.5 h-2.5 text-white" />
                  <span className="text-white text-[9px] font-semibold">
                    Sundays @ 10AM
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Quote Section - Responsive */}
        <div
          className={`mt-12 sm:mt-16 md:mt-20 text-center transition-all duration-1000 delay-600 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 theme-soft-card backdrop-blur-sm rounded-full px-3 sm:px-4 md:px-6 py-2 sm:py-3 shadow-md theme-border">
            <div className="flex items-center gap-1 sm:gap-2">
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 theme-accent fill-amber-600" />
              <span className="text-xs sm:text-sm theme-text font-medium">
                2,500+ lives transformed
              </span>
            </div>
            <div className="w-px h-4 sm:h-5 md:h-6 theme-border bg-amber-200"></div>
            <div className="flex items-center gap-1 sm:gap-2">
              <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 theme-accent" />
              <span className="text-xs sm:text-sm theme-text font-medium">
                Growing together in faith
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;