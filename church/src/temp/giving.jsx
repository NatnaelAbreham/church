// components/Giving.jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHandHoldingHeart, faPrayingHands } from "@fortawesome/free-solid-svg-icons";

const Giving = () => {
  const handleGiveOnline = () => {
    alert("💖 Thank you for your generosity! Secure giving portal will open.");
  };

  const handlePrayerRequest = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="giving" className="relative bg-white">
      
      {/* Top Wave - cuts from white into your dark section */}
      <div className="relative w-full overflow-hidden leading-[0]">
        <svg
          className="relative w-full h-16 md:h-24"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#1c1917" // Your dark section color
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      {/* Your Dark Section Content */}
      <div className="bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-white">
        
        {/* Background glow effects */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-[-100px] left-[-80px] w-[300px] h-[300px] bg-amber-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-[-120px] right-[-100px] w-[350px] h-[350px] bg-orange-400/10 rounded-full blur-3xl"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_60%)]"></div>
          </div>

          <div className="relative max-w-6xl mx-auto text-center py-24 px-6 z-10">

            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
                <FontAwesomeIcon icon={faHeart} className="text-2xl text-amber-300" />
              </div>
            </div>

            {/* Title */}
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
               <span className="text-amber-300">Support the Mission</span>
            </h2>

            {/* Subtitle */}
            <p className="mt-5 text-lg text-amber-100/80 max-w-2xl mx-auto leading-relaxed">
              Your generosity fuels worship, outreach, and community transformation.
              Together we bring hope, healing, and faith to lives.
            </p>

            {/* CTA Cards */}
            <div className="mt-10 grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">

              {/* Give Card */}
              <div className="group p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition duration-300">
                <FontAwesomeIcon icon={faHandHoldingHeart} className="text-3xl text-amber-300 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Online Giving</h3>
                <p className="text-sm text-amber-100/70 mb-5">
                  Secure, fast, and transparent giving to support church mission.
                </p>
                <button
                  onClick={handleGiveOnline}
                  className="w-full bg-amber-400 text-amber-950 font-semibold py-3 rounded-xl hover:bg-amber-300 transition transform hover:scale-[1.02]"
                >
                  Give Now
                </button>
              </div>

              {/* Prayer Card */}
              <div className="group p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition duration-300">
                <FontAwesomeIcon icon={faPrayingHands} className="text-3xl text-amber-300 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Prayer Support</h3>
                <p className="text-sm text-amber-100/70 mb-5">
                  Share your burden and let our prayer team stand with you.
                </p>
                <button
                  onClick={handlePrayerRequest}
                  className="w-full border border-white/30 text-white py-3 rounded-xl hover:bg-white/10 transition transform hover:scale-[1.02]"
                >
                  Request Prayer
                </button>
              </div>

            </div>

            {/* Footer trust line */}
            <p className="mt-12 text-sm text-amber-200/60">
              “Each of you should give what you have decided in your heart to give.” – 2 Corinthians 9:7
            </p>

          </div>
        </div>
      </div>

      {/* Bottom Wave - cuts from your dark section back to white */}
      <div className="relative w-full overflow-hidden leading-[0]">
        <svg
          className="relative w-full h-16 md:h-24"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#1c1917" // Your dark section color
            fillOpacity="1"
            d="M0,256L48,240C96,224,192,192,288,197.3C384,203,480,245,576,250.7C672,256,768,224,864,208C960,192,1056,192,1152,197.3C1248,203,1344,213,1392,218.7L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>
      </div>

    </section>
  );
};

export default Giving;