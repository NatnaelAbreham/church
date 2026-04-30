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
    <section id="giving" className="relative py-24 px-6 overflow-hidden theme-section">

      {/* Background glow effects - these are decorative and won't affect theme */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-100px] left-[-80px] w-[300px] h-[300px] bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-120px] right-[-100px] w-[350px] h-[350px] bg-orange-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto text-center z-10">

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 flex items-center justify-center rounded-2xl theme-card shadow-lg">
            <FontAwesomeIcon icon={faHeart} className="text-2xl theme-accent" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight theme-heading">
          <span className="theme-accent">Support the Mission</span>
        </h2>

        {/* Subtitle */}
        <p className="mt-5 text-lg theme-text max-w-2xl mx-auto leading-relaxed">
          Your generosity fuels worship, outreach, and community transformation.
          Together we bring hope, healing, and faith to lives.
        </p>

        {/* CTA Cards */}
        <div className="mt-10 grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">

          {/* Give Card */}
          <div className="group p-6 rounded-2xl theme-card theme-hover transition-all duration-300">
            <FontAwesomeIcon icon={faHandHoldingHeart} className="text-3xl theme-accent mb-4" />
            <h3 className="text-xl font-semibold theme-heading mb-2">Online Giving</h3>
            <p className="text-sm theme-text mb-5">
              Secure, fast, and transparent giving to support church mission.
            </p>
            <button
              onClick={handleGiveOnline}
              className="w-full theme-button font-semibold py-3 rounded-xl transition-all transform hover:scale-[1.02]"
            >
              Give Now
            </button>
          </div>

          {/* Prayer Card */}
          <div className="group p-6 rounded-2xl theme-card theme-hover transition-all duration-300">
            <FontAwesomeIcon icon={faPrayingHands} className="text-3xl theme-accent mb-4" />
            <h3 className="text-xl font-semibold theme-heading mb-2">Prayer Support</h3>
            <p className="text-sm theme-text mb-5">
              Share your burden and let our prayer team stand with you.
            </p>
            <button
              onClick={handlePrayerRequest}
              className="
    w-full
    bg-amber-500 text-white
    dark:bg-amber-500/20 dark:text-amber-300
    border border-amber-500/30
    py-3 rounded-xl
    font-semibold
    transition-all transform
    hover:scale-[1.02] hover:shadow-md
  "
            >
              Request Prayer
            </button>
          </div>

        </div>

        {/* Footer trust line */}
        <p className="mt-12 text-sm theme-muted">
          “Each of you should give what you have decided in your heart to give.” – 2 Corinthians 9:7
        </p>

      </div>
    </section>
  );
};

export default Giving;