// components/Hero.jsx
const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/2606355/pexels-photo-2606355.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Church interior"
          className="w-full h-full object-cover brightness-[0.85]"
        />
        <div className="hero-overlay absolute inset-0"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
        <span className="inline-block bg-white/20 backdrop-blur-sm px-5 py-1.5 rounded-full text-sm font-medium tracking-wide mb-5 border border-white/30">
          ✝️ A Place of Grace & Hope
        </span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold serif leading-tight animate-fade-up">
          Where Faith<br />Meets Community
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mt-6 text-gray-100 animate-fade-up delay-100">
          Join us for uplifting worship, authentic fellowship, and life-changing messages. Everyone is welcome.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-8 animate-fade-up delay-200">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-amber-600 hover:bg-amber-700 px-8 py-3 rounded-full font-semibold shadow-lg transition-all"
          >
            Plan Your Visit
          </a>
          <a
            href="#sermons"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("sermons")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-white/20 backdrop-blur-sm border border-white/40 hover:bg-white/30 px-8 py-3 rounded-full font-semibold transition-all"
          >
            Watch Online
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12 md:h-16">
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z"
            fill="#fefcf8"
            opacity="1"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;