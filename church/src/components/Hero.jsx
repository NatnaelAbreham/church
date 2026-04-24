// components/Hero.jsx
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Play,
  Heart,
  CalendarDays,
  Cross,
  Church,
  Users,
  Coffee,
} from "lucide-react";

import image2 from "../assets/images/c2.jpg";
import image5 from "../assets/images/c5.jpg";
import image6 from "../assets/images/c6.jpg";
import image11 from "../assets/images/c11.jpg";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [image11, image2, image5, image6];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#0a0806] text-white"
    >
      {/* BACKGROUND IMAGES */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-[2000ms] ease-in-out ${
              currentImageIndex === index
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
          >
            <img
              src={image}
              alt="Worship at our church"
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* WARMER OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        
        {/* WARM LIGHT GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/30 via-transparent to-amber-800/20" />
      </div>

      {/* WARM AMBIENT GLOW */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[600px] h-[600px] bg-amber-600/15 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-[20%] right-[0%] w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[140px]" />
        <div className="absolute top-[50%] left-[40%] w-[300px] h-[300px] bg-yellow-500/8 rounded-full blur-[100px]" />
      </div>

      {/* SUBTLE TEXTURE OVERLAY */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpath fill='white' d='M100 0 L130 70 L200 80 L150 130 L160 200 L100 170 L40 200 L50 130 L0 80 L70 70 Z'/%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
          backgroundRepeat: "repeat",
        }}
      />

      {/* SACRED SYMBOLS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[15%] right-[8%] opacity-20 [animation:float-slow_8s_ease-in-out_infinite]">
          <Cross className="w-20 h-20 text-amber-300/40" strokeWidth={1} />
        </div>
        <div className="absolute bottom-[25%] left-[5%] opacity-15 [animation:float-delayed_6s_ease-in-out_infinite_1s]">
          <Church className="w-12 h-12 text-white/30" strokeWidth={1} />
        </div>
      </div>

      {/* FLOATING ANIMATIONS */}
      <style>
        {`
          @keyframes float-slow {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-15px) rotate(5deg); }
          }
          @keyframes float-delayed {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
        `}
      </style>

      {/* MAIN CONTENT */}
      <div className="relative z-20 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full pt-32 pb-20">
          <div className="grid lg:grid-cols-[1fr_0.9fr] gap-16 items-center">
            {/* LEFT CONTENT */}
            <div>
              {/* WELCOME BADGE */}
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 mb-10">
                <div className="w-2 h-2 rounded-full bg-amber-400" />
                <Heart className="w-3.5 h-3.5 text-amber-300" />
                <span className="uppercase tracking-[0.25em] text-xs font-medium text-amber-200/90">
                  Welcome Home
                </span>
              </div>

              {/* MAIN TITLE */}
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight mb-8">
                <span className="text-white">Find Rest In</span>
                <span className="block bg-gradient-to-r from-amber-200 via-amber-100 to-white bg-clip-text text-transparent mt-2">
                  God's Presence
                </span>
              </h1>

              {/* SUBTITLE */}
              <p className="text-stone-300 text-lg md:text-xl leading-relaxed max-w-xl mb-10">
                A place where faith takes root, community surrounds you, and 
                lives are renewed through the love of Jesus Christ.
              </p>

              {/* CTA BUTTONS */}
              <div className="flex flex-wrap gap-4 mb-14">
                <a
                  href="#visit"
                  className="group inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 text-black font-semibold hover:shadow-[0_10px_40px_rgba(251,191,36,0.3)] hover:scale-[1.02] transition-all duration-300"
                >
                  <CalendarDays className="w-4 h-4" />
                  <span>Plan Your Visit</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>

                <a
                  href="#sermons"
                  className="group inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 hover:bg-white/20 transition-all duration-300"
                >
                  <Play className="w-4 h-4" />
                  <span className="font-medium">Watch Sermons</span>
                </a>
              </div>

              {/* STATS */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl">
                {[
                  { 
                    icon: Users,
                    value: "2,500+", 
                    label: "Souls Gathered",
                    detail: "weekly worship"
                  },
                  { 
                    icon: Cross,
                    value: "50+", 
                    label: "Years of Grace",
                    detail: "faithfully serving"
                  },
                  { 
                    icon: Heart,
                    value: "18", 
                    label: "Ministries",
                    detail: "to grow in faith"
                  },
                  { 
                    icon: Church,
                    value: "24/7", 
                    label: "Prayer Covering",
                    detail: "you're never alone"
                  },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-4 hover:border-amber-400/20 transition-all duration-300"
                  >
                    <stat.icon className="w-5 h-5 text-amber-300/60 mb-2" />
                    <h3 className="text-2xl font-bold text-white mb-0.5">
                      {stat.value}
                    </h3>
                    <p className="text-stone-400 text-sm font-medium">
                      {stat.label}
                    </p>
                    <p className="text-stone-500 text-xs mt-1">
                      {stat.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT CARD */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/15 to-orange-500/10 blur-[120px] rounded-full" />

              <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-black/30 backdrop-blur-xl p-7 md:p-8 shadow-2xl">
                {/* THIS WEEK'S INVITATION */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-1 h-6 bg-amber-400 rounded-full" />
                    <p className="text-stone-400 text-xs uppercase tracking-wider">
                      This Sunday
                    </p>
                  </div>
                  <h3 className="text-2xl font-bold leading-tight mb-2">
                    You Are Invited
                  </h3>
                  <p className="text-stone-400 text-sm">
                    Come as you are. Leave changed.
                  </p>
                </div>

                {/* SERVICE TIMES */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-between py-3 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-amber-400/10 flex items-center justify-center">
                        <span className="text-amber-300 text-sm font-bold">1</span>
                      </div>
                      <div>
                        <p className="font-semibold text-white">Morning Worship</p>
                        <p className="text-stone-500 text-xs">Traditional • Choir</p>
                      </div>
                    </div>
                    <p className="text-amber-300 font-medium">9:00 AM</p>
                  </div>

                  <div className="flex items-center justify-between py-3 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-amber-400/10 flex items-center justify-center">
                        <span className="text-amber-300 text-sm font-bold">2</span>
                      </div>
                      <div>
                        <p className="font-semibold text-white">Contemporary Service</p>
                        <p className="text-stone-500 text-xs">Live Band • Modern</p>
                      </div>
                    </div>
                    <p className="text-amber-300 font-medium">11:00 AM</p>
                  </div>

                  <div className="flex items-center justify-between py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-amber-400/10 flex items-center justify-center">
                        <Coffee className="w-4 h-4 text-amber-300" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">Fellowship Hour</p>
                        <p className="text-stone-500 text-xs">Coffee & Connection</p>
                      </div>
                    </div>
                    <p className="text-stone-400 text-sm">After Service</p>
                  </div>
                </div>

                {/* FEATURED IMAGE */}
                <div className="relative overflow-hidden rounded-xl h-44 mb-6">
                  <img
                    src={heroImages[currentImageIndex]}
                    alt="Worship gathering"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <p className="absolute bottom-3 left-3 text-white text-xs font-medium">
                    Join us this Sunday
                  </p>
                </div>

                {/* PASTOR'S WELCOME */}
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-10 h-10 rounded-full bg-amber-400/10 flex items-center justify-center shrink-0">
                    <Heart className="w-5 h-5 text-amber-300" />
                  </div>
                  <div>
                    <p className="text-stone-300 text-sm italic leading-relaxed">
                      "No matter where you are in your journey, there's a seat for you here."
                    </p>
                    <p className="text-stone-500 text-xs mt-1">
                      — Pastor Michael
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM TRANSITION */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0a0806] to-transparent z-10" />

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-stone-400 uppercase tracking-[0.3em] text-[9px] font-light">
          Explore
        </span>
        <div className="w-6 h-10 rounded-full border border-white/20 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-amber-300/60 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;