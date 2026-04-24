
// components/Hero.jsx
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Play,
  Sparkles,
  CalendarDays,
  Cross,
  HeartHandshake,
} from "lucide-react";

import image2 from "../assets/images/c2.jpg";
import image5 from "../assets/images/c5.jpg";
import image6 from "../assets/images/c6.jpg";
import image11 from "../assets/images/c11.jpg";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    image11,
    image2,
    image5,
    image6,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#050505] text-white"
    >
      {/* BACKGROUND IMAGES */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-[2500ms] ${
              currentImageIndex === index
                ? "opacity-100 scale-100"
                : "opacity-0 scale-110"
            }`}
          >
            <img
              src={image}
              alt="Church worship"
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* CINEMATIC OVERLAY */}
        <div className="absolute inset-0 bg-black/70" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#050505]" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/90 via-black/40 to-[#050505]/80" />
      </div>

      {/* AMBIENT LIGHTS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-amber-500/20 rounded-full blur-[140px]" />

        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[140px]" />

        <div className="absolute top-[30%] right-[20%] w-[400px] h-[400px] bg-yellow-500/10 rounded-full blur-[120px]" />
      </div>

      {/* GRID OVERLAY */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* FLOATING ELEMENTS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[18%] right-[10%] animate-pulse opacity-30">
          <div className="relative">
            <div className="absolute inset-0 bg-amber-300/20 blur-2xl rounded-full scale-[2]" />

            <Cross className="w-16 h-16 text-amber-200" strokeWidth={1.5} />
          </div>
        </div>

        <div className="absolute bottom-[20%] left-[8%] opacity-20 animate-bounce">
          <Cross className="w-10 h-10 text-white" strokeWidth={1.2} />
        </div>

        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.4,
              animationDuration: `${Math.random() * 4 + 2}s`,
            }}
          />
        ))}
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-20 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full pt-32 pb-20">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-20 items-center">
            {/* LEFT CONTENT */}
            <div>
              {/* PREMIUM BADGE */}
              <div className="inline-flex items-center gap-3 px-6 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-2xl mb-10 shadow-[0_10px_50px_rgba(0,0,0,0.3)]">
                <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />

                <Sparkles className="w-4 h-4 text-amber-300" />

                <span className="uppercase tracking-[0.35em] text-xs font-semibold text-amber-100">
                  Grace • Faith • Community
                </span>
              </div>

              {/* MAIN TITLE */}
              <h1 className="text-5xl md:text-7xl xl:text-[7rem] font-black leading-[0.92] tracking-tight mb-10">
                Experience
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-orange-500">
                  God's Presence
                </span>
                <span className="block text-zinc-200">
                  Together
                </span>
              </h1>

              {/* SUBTITLE */}
              <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-2xl mb-12">
                A modern church community where worship becomes transformative,
                faith grows deeper, and lives are restored through the love of Christ.
              </p>

              {/* CTA BUTTONS */}
              <div className="flex flex-wrap gap-5 mb-16">
                <a
                  href="#contact"
                  className="group relative overflow-hidden inline-flex items-center gap-3 px-8 py-5 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 text-black font-bold shadow-[0_10px_60px_rgba(251,191,36,0.35)] hover:scale-105 transition-all duration-500"
                >
                  <CalendarDays className="w-5 h-5" />

                  <span>Plan Your Visit</span>

                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="#sermons"
                  className="group inline-flex items-center gap-3 px-8 py-5 rounded-2xl bg-white/5 backdrop-blur-2xl border border-white/10 hover:bg-white/10 transition-all duration-500"
                >
                  <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />

                  <span className="font-semibold">Watch Sermons</span>
                </a>
              </div>

              {/* STATS */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl">
                {[
                  {
                    value: "2.5K+",
                    label: "Weekly Worshippers",
                  },
                  {
                    value: "50+",
                    label: "Years Serving",
                  },
                  {
                    value: "18",
                    label: "Ministries",
                  },
                  {
                    value: "24/7",
                    label: "Prayer Support",
                  },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-2xl p-6 hover:border-amber-400/30 transition-all duration-500"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />

                    <div className="relative z-10">
                      <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-amber-200 mb-2">
                        {stat.value}
                      </h3>

                      <p className="text-zinc-500 text-sm leading-relaxed">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT GLASS CARD */}
            <div className="relative">
              {/* GLOW */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20 blur-[100px] rounded-full" />

              <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-3xl p-8 md:p-10 shadow-[0_20px_120px_rgba(0,0,0,0.45)]">
                {/* TOP */}
                <div className="flex items-center justify-between mb-10">
                  <div>
                    <p className="text-zinc-500 text-sm uppercase tracking-[0.25em] mb-3">
                      Live Experience
                    </p>

                    <h3 className="text-3xl font-black leading-tight">
                      Sunday Worship
                    </h3>
                  </div>

                  <div className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/20">
                    <div className="absolute w-3 h-3 rounded-full bg-red-500 animate-ping" />

                    <div className="relative w-3 h-3 rounded-full bg-red-500" />
                  </div>
                </div>

                {/* IMAGE */}
                <div className="relative overflow-hidden rounded-[30px] h-[320px] mb-8 group">
                  <img
                    src={heroImages[currentImageIndex]}
                    alt="Worship"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3000ms]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                    <div>
                      <p className="text-white text-lg font-bold mb-1">
                        This Weekend
                      </p>

                      <p className="text-zinc-300 text-sm">
                        Sunday • 9:00 AM & 11:00 AM
                      </p>
                    </div>

                    <button className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:bg-amber-400 hover:text-black transition-all duration-500">
                      <Play className="w-5 h-5 ml-1" />
                    </button>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4 rounded-[28px] border border-white/10 bg-black/20 p-5">
                    <div className="w-14 h-14 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center shrink-0">
                      <HeartHandshake className="w-6 h-6 text-amber-300" />
                    </div>

                    <div>
                      <h4 className="font-bold text-lg mb-2">
                        Everyone Belongs Here
                      </h4>

                      <p className="text-zinc-400 leading-relaxed text-sm">
                        Whether you're exploring faith or looking for a church home,
                        you'll find authentic community and encouragement.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                      <p className="text-zinc-500 text-xs uppercase tracking-[0.25em] mb-3">
                        Location
                      </p>

                      <h5 className="font-bold text-lg leading-tight">
                        Bahir Dar Campus
                      </h5>
                    </div>

                    <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                      <p className="text-zinc-500 text-xs uppercase tracking-[0.25em] mb-3">
                        Community
                      </p>

                      <h5 className="font-bold text-lg leading-tight">
                        2,500+ Members
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#050505] to-transparent z-10" />

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3">
        <span className="text-zinc-500 uppercase tracking-[0.3em] text-[10px]">
          Scroll
        </span>

        <div className="w-7 h-12 rounded-full border border-white/20 flex justify-center pt-2 backdrop-blur-xl bg-white/5">
          <div className="w-1 h-3 rounded-full bg-amber-300 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
