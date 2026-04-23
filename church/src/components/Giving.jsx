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
    <section id ="giving" className="relative py-24 px-6 overflow-hidden bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-white">

      {/* Background glow effects */}
      <div className="absolute inset-0">
        <div className="absolute top-[-100px] left-[-80px] w-[300px] h-[300px] bg-amber-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-120px] right-[-100px] w-[350px] h-[350px] bg-orange-400/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_60%)]"></div>
      </div>

      <div className="relative max-w-6xl mx-auto text-center">

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
    </section>
  );
};

export default Giving;