// components/Testimonials.jsx
import { useState, useEffect, useCallback } from "react";
import '../css/testimonials.css';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState("next");

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Member since 2019",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
      quote: "Grace Covenant Church has become my second family. The warmth, the teaching, and the genuine love I've experienced here transformed my walk with God. I've never felt more at home in a church.",
      rating: 5,
      location: "Austin, TX",
      type: "family"
    },
    {
      id: 2,
      name: "Michael & Lisa Chen",
      role: "Volunteer Leaders",
      image: "https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=400",
      quote: "Our children have grown so much in their faith through the youth ministry. The worship is authentic, and the community is incredibly supportive. This church lives out what it preaches every single day.",
      rating: 5,
      location: "Round Rock, TX",
      type: "couple"
    },
    {
      id: 3,
      name: "Pastor David Okafor",
      role: "Visiting Minister",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
      quote: "I've ministered in over 50 churches across the country, and Grace Covenant stands out for its genuine hunger for God's presence. The leadership is visionary, and the congregation is truly welcoming.",
      rating: 5,
      location: "Dallas, TX",
      type: "leader"
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      role: "Young Adults Director",
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400",
      quote: "Finding a church that balances deep biblical teaching with modern relevance is rare. Grace Covenant does both exceptionally well. The small group I joined changed my spiritual life completely.",
      rating: 5,
      location: "San Antonio, TX",
      type: "young"
    },
    {
      id: 5,
      name: "Robert & Margaret Williams",
      role: "Married 45 years",
      image: "https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg?auto=compress&cs=tinysrgb&w=400",
      quote: "We've attended many churches over five decades, but Grace Covenant's heart for community and outreach is unparalleled. The seniors' fellowship has become a highlight of our week.",
      rating: 5,
      location: "Cedar Park, TX",
      type: "senior"
    }
  ];

  const nextTestimonial = useCallback(() => {
    setDirection("next");
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevTestimonial = useCallback(() => {
    setDirection("prev");
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  const goToTestimonial = (index) => {
    setDirection(index > activeIndex ? "next" : "prev");
    setActiveIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextTestimonial();
      }, 6000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextTestimonial]);

  const getAnimationClass = () => {
    if (direction === "next") {
      return "animate-slide-in-right";
    }
    return "animate-slide-in-left";
  };

  return (
    <section id = "testimonials" className="py-28 px-6 bg-gradient-to-br from-stone-50 via-white to-amber-50/30 relative overflow-hidden">
      {/* Modern 2026 decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-300/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-amber-100/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header with modern badge */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-100/80 backdrop-blur-sm px-4 py-2 rounded-full mb-4 shadow-sm">
            <i className="fas fa-star text-amber-500 text-sm"></i>
            <span className="text-amber-700 font-semibold tracking-wide uppercase text-xs">Real Stories</span>
            <i className="fas fa-heart text-amber-500 text-sm"></i>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold serif text-stone-800 mb-4">
            <span className="text-amber-700">What Our Church Family Says</span>
          </h2>
          <div className="w-28 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full mb-6"></div>
          <p className="text-stone-600 max-w-2xl mx-auto text-lg">
            Join thousands of lives transformed by grace, community, and authentic worship
          </p>
        </div>

        {/* Main Testimonial Card - Modern Glassmorphism Design */}
        <div className="relative max-w-5xl mx-auto">
          {/* Floating decorative elements */}
          <div className="absolute -top-4 -left-4 w-20 h-20 bg-amber-400/20 rounded-full blur-xl"></div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-amber-500/20 rounded-full blur-xl"></div>

          <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 overflow-hidden transition-all duration-500 hover:shadow-3xl">
            <div className="grid md:grid-cols-5 gap-0">
              {/* Left side - Profile with modern gradient */}
              <div className="md:col-span-2 bg-gradient-to-br from-amber-800 to-amber-900 p-8 md:p-10 flex flex-col items-center justify-center text-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-700"></div>
                <div className="relative z-10">
                  <div className="relative inline-block mb-4">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-300 to-amber-500 animate-pulse opacity-75 blur-md"></div>
                    <img
                      src={testimonials[activeIndex].image}
                      alt={testimonials[activeIndex].name}
                      className="w-28 h-28 rounded-full object-cover border-4 border-white/30 shadow-xl relative z-10 transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white mt-4">{testimonials[activeIndex].name}</h3>
                  <p className="text-amber-200 text-sm mt-1">{testimonials[activeIndex].role}</p>
                  <div className="flex items-center justify-center gap-1 mt-3">
                    <i className="fas fa-map-marker-alt text-amber-300 text-xs"></i>
                    <span className="text-amber-100 text-xs">{testimonials[activeIndex].location}</span>
                  </div>
                  <div className="flex items-center justify-center gap-1 mt-3">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <i key={i} className="fas fa-star text-amber-300 text-sm"></i>
                    ))}
                  </div>
                  {/* Modern quote icon */}
                  <div className="mt-6 opacity-50">
                    <i className="fas fa-quote-right text-5xl text-white/30"></i>
                  </div>
                </div>
              </div>

              {/* Right side - Testimonial text with animation */}
              <div className="md:col-span-3 p-8 md:p-12 bg-white/50 backdrop-blur-sm">
                <div className={`transition-all duration-500 ${getAnimationClass()}`}>
                  <div className="mb-6">
                    <div className="flex gap-1 mb-4">
                      <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-semibold uppercase tracking-wide">
                        {testimonials[activeIndex].type === "family" && " Family"}
                        {testimonials[activeIndex].type === "couple" && " Married Couple"}
                        {testimonials[activeIndex].type === "leader" && " Ministry Leader"}
                        {testimonials[activeIndex].type === "young" && " Young Adult"}
                        {testimonials[activeIndex].type === "senior" && " Senior Saints"}
                      </span>
                    </div>
                    <i className="fas fa-quote-left text-amber-300 text-3xl mb-3 block opacity-60"></i>
                    <p className="text-stone-700 text-lg md:text-xl leading-relaxed italic">
                      "{testimonials[activeIndex].quote}"
                    </p>
                    <div className="mt-6 flex items-center gap-2 text-amber-500">
                      <i className="fas fa-verified text-xs"></i>
                      <span className="text-xs font-medium uppercase tracking-wide text-stone-400">Verified Testimonial</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons - Modern Minimal */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white shadow-md hover:shadow-xl border border-amber-200 text-amber-700 hover:bg-amber-50 transition-all duration-300 hover:scale-110 flex items-center justify-center group"
            >
              <i className="fas fa-arrow-left group-hover:-translate-x-0.5 transition-transform"></i>
            </button>
            
            {/* Dot indicators - Modern pill style */}
            <div className="flex items-center gap-2 px-4">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToTestimonial(idx)}
                  className={`transition-all duration-300 rounded-full ${
                    idx === activeIndex
                      ? "w-10 h-2.5 bg-gradient-to-r from-amber-600 to-amber-500"
                      : "w-2.5 h-2.5 bg-stone-300 hover:bg-amber-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white shadow-md hover:shadow-xl border border-amber-200 text-amber-700 hover:bg-amber-50 transition-all duration-300 hover:scale-110 flex items-center justify-center group"
            >
              <i className="fas fa-arrow-right group-hover:translate-x-0.5 transition-transform"></i>
            </button>
          </div>

          {/* Auto-play indicator */}
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="flex items-center gap-2 text-xs text-stone-400 hover:text-amber-600 transition-colors"
            >
              <i className={`fas ${isAutoPlaying ? "fa-pause-circle" : "fa-play-circle"} text-sm`}></i>
              <span>{isAutoPlaying ? "Auto-rotating" : "Manual mode"}</span>
            </button>
          </div>
        </div>

        {/* Stats Section - Modern minimalist counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          <div className="text-center group cursor-pointer">
            <div className="text-4xl md:text-5xl font-bold text-amber-700 mb-2 serif">2,500+</div>
            <div className="text-stone-500 text-sm uppercase tracking-wide">Active Members</div>
            <div className="w-0 group-hover:w-12 h-0.5 bg-amber-400 mx-auto mt-2 transition-all duration-300"></div>
          </div>
          <div className="text-center group cursor-pointer">
            <div className="text-4xl md:text-5xl font-bold text-amber-700 mb-2 serif">150+</div>
            <div className="text-stone-500 text-sm uppercase tracking-wide">Small Groups</div>
            <div className="w-0 group-hover:w-12 h-0.5 bg-amber-400 mx-auto mt-2 transition-all duration-300"></div>
          </div>
          <div className="text-center group cursor-pointer">
            <div className="text-4xl md:text-5xl font-bold text-amber-700 mb-2 serif">45+</div>
            <div className="text-stone-500 text-sm uppercase tracking-wide">Nations Reached</div>
            <div className="w-0 group-hover:w-12 h-0.5 bg-amber-400 mx-auto mt-2 transition-all duration-300"></div>
          </div>
          <div className="text-center group cursor-pointer">
            <div className="text-4xl md:text-5xl font-bold text-amber-700 mb-2 serif">20+</div>
            <div className="text-stone-500 text-sm uppercase tracking-wide">Years of Ministry</div>
            <div className="w-0 group-hover:w-12 h-0.5 bg-amber-400 mx-auto mt-2 transition-all duration-300"></div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <button
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
          >
            <span>Share Your Story</span>
            <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
          </button>
        </div>
      </div>

    
    </section>
  );
};

export default Testimonials;