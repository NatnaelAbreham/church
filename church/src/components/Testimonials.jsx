// components/Testimonials.jsx
import { useState, useEffect, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faHeart,
  faQuoteLeft,
  faQuoteRight,
  faLocationDot,
  faArrowLeft,
  faArrowRight,
  faPause,
  faPlay,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState("next");

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Member since 2019",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
      quote:
        "Grace Covenant Church has become my second family. The warmth, the teaching, and the genuine love I've experienced here transformed my walk with God.",
      rating: 5,
      location: "Austin, TX",
      type: "Family",
    },
    {
      id: 2,
      name: "Michael & Lisa Chen",
      role: "Volunteer Leaders",
      image:
        "https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=400",
      quote:
        "The worship is authentic, the community is supportive, and our children have grown deeply in faith through the ministry.",
      rating: 5,
      location: "Round Rock, TX",
      type: "Couple",
    },
    {
      id: 3,
      name: "Pastor David Okafor",
      role: "Visiting Minister",
      image:
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
      quote:
        "Grace Covenant stands out for its genuine hunger for God's presence and its welcoming atmosphere.",
      rating: 5,
      location: "Dallas, TX",
      type: "Leader",
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      role: "Young Adults Director",
      image:
        "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400",
      quote:
        "Finding a church that balances biblical teaching with modern relevance is rare. Grace Covenant does it beautifully.",
      rating: 5,
      location: "San Antonio, TX",
      type: "Young Adult",
    },
  ];

  const nextTestimonial = useCallback(() => {
    setDirection("next");
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevTestimonial = useCallback(() => {
    setDirection("prev");
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, [testimonials.length]);

  const goToTestimonial = (index) => {
    setDirection(index > activeIndex ? "next" : "prev");
    setActiveIndex(index);
    setIsAutoPlaying(false);

    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 5000);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextTestimonial]);

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-24 sm:py-28 px-4 sm:px-6"
    >
      {/* Background */}
      <div className="absolute inset-0 theme-section">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_60%)]"></div>
        </div>

        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-5">
            <FontAwesomeIcon
              icon={faStar}
              className="theme-accent text-xs"
            />

            <span className="theme-accent text-xs font-semibold uppercase tracking-[0.2em]">
              Real Stories
            </span>

            <FontAwesomeIcon
              icon={faHeart}
              className="theme-accent text-xs"
            />
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold theme-heading mb-5 leading-tight">
            What Our Church
            <span className="block bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Family Says
            </span>
          </h2>

          <div className="w-24 h-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-6"></div>

          <p className="max-w-2xl mx-auto theme-text text-base sm:text-lg leading-relaxed">
            Real lives transformed through authentic worship, biblical teaching,
            and a loving church community.
          </p>
        </div>

        {/* Main Card */}
        <div className="relative max-w-6xl mx-auto">
          <div className="absolute -top-8 -left-8 w-40 h-40 bg-amber-500/10 blur-3xl rounded-full"></div>

          <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-amber-500/10 blur-3xl rounded-full"></div>

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
            <div className="grid lg:grid-cols-5">
              {/* Left */}
              <div className="lg:col-span-2 relative p-8 sm:p-10 bg-gradient-to-br from-amber-700 to-amber-900 overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-cover bg-center"></div>

                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 rounded-full bg-amber-300 blur-xl opacity-50 animate-pulse"></div>

                    <img
                      src={testimonials[activeIndex].image}
                      alt={testimonials[activeIndex].name}
                      className="relative z-10 w-32 h-32 rounded-full object-cover border-4 border-white/20 shadow-2xl"
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-white">
                    {testimonials[activeIndex].name}
                  </h3>

                  <p className="text-amber-100 text-sm mt-1">
                    {testimonials[activeIndex].role}
                  </p>

                  <div className="flex items-center gap-2 mt-4 text-amber-100 text-sm">
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="text-xs"
                    />
                    <span>{testimonials[activeIndex].location}</span>
                  </div>

                  <div className="flex gap-1 mt-4">
                    {[...Array(testimonials[activeIndex].rating)].map(
                      (_, i) => (
                        <FontAwesomeIcon
                          key={i}
                          icon={faStar}
                          className="text-amber-300 text-sm"
                        />
                      )
                    )}
                  </div>

                  <div className="mt-8 opacity-30">
                    <FontAwesomeIcon
                      icon={faQuoteRight}
                      className="text-6xl text-white"
                    />
                  </div>
                </div>
              </div>

              {/* Right */}
              <div className="lg:col-span-3 p-8 sm:p-12 flex items-center">
                <div
                  key={activeIndex}
                  className={`transition-all duration-500 w-full ${
                    direction === "next"
                      ? "animate-slide-in-right"
                      : "animate-slide-in-left"
                  }`}
                >
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
                    <span className="theme-accent text-xs uppercase tracking-[0.2em] font-semibold">
                      {testimonials[activeIndex].type}
                    </span>
                  </div>

                  <FontAwesomeIcon
                    icon={faQuoteLeft}
                    className="theme-accent text-3xl mb-5 opacity-60"
                  />

                  <p className="theme-text text-lg sm:text-xl leading-relaxed italic mb-8">
                    "{testimonials[activeIndex].quote}"
                  </p>

                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="theme-accent text-sm"
                    />

                    <span className="text-xs uppercase tracking-[0.2em] theme-muted font-semibold">
                      Verified Testimonial
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-10 flex-wrap">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm theme-heading hover:bg-amber-500 hover:text-white transition-all duration-300 flex items-center justify-center group"
            >
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="group-hover:-translate-x-1 transition-transform"
              />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2 px-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToTestimonial(idx)}
                  className={`rounded-full transition-all duration-300 ${
                    idx === activeIndex
                      ? "w-10 h-2.5 bg-gradient-to-r from-amber-500 to-amber-600"
                      : "w-2.5 h-2.5 bg-white/20 hover:bg-amber-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm theme-heading hover:bg-amber-500 hover:text-white transition-all duration-300 flex items-center justify-center group"
            >
              <FontAwesomeIcon
                icon={faArrowRight}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>

          {/* Auto Play */}
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="flex items-center gap-2 text-xs theme-muted hover:theme-accent transition-colors"
            >
              <FontAwesomeIcon
                icon={isAutoPlaying ? faPause : faPlay}
                className="text-xs"
              />

              <span>
                {isAutoPlaying ? "Auto Rotating" : "Manual Mode"}
              </span>
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-24">
          {[
            { number: "2,500+", label: "Active Members" },
            { number: "150+", label: "Small Groups" },
            { number: "45+", label: "Nations Reached" },
            { number: "20+", label: "Years of Ministry" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="group text-center bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-6 hover:border-amber-500/30 transition-all duration-300"
            >
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent mb-3">
                {stat.number}
              </div>

              <div className="theme-muted text-xs sm:text-sm uppercase tracking-[0.2em]">
                {stat.label}
              </div>

              <div className="w-0 group-hover:w-14 h-0.5 bg-amber-500 mx-auto mt-3 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <button
            onClick={() => {
              const contactSection = document.getElementById("contact");

              if (contactSection) {
                contactSection.scrollIntoView({
                  behavior: "smooth",
                });
              }
            }}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold shadow-2xl shadow-amber-500/20 hover:scale-105 transition-all duration-300"
          >
            <span>Share Your Story</span>

            <FontAwesomeIcon
              icon={faArrowRight}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.5s ease forwards;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.5s ease forwards;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;