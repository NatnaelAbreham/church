// components/Giving.jsx
const Giving = () => {
  const handleGiveOnline = () => {
    alert("💖 Thank you for your generosity! Secure giving portal will open.");
  };

  const handlePrayerRequest = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-r from-amber-800 to-amber-900 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <i className="fas fa-heart text-4xl mb-4 opacity-80"></i>
        <h2 className="text-3xl md:text-5xl font-bold serif">Support the Mission</h2>
        <p className="text-lg text-amber-100 max-w-2xl mx-auto mt-4">
          Your generosity fuels outreach, worship, and community care. Partner with us in transforming lives.
        </p>
        <div className="flex flex-wrap justify-center gap-5 mt-8">
          <button
            onClick={handleGiveOnline}
            className="bg-white text-amber-800 px-8 py-3 rounded-full font-bold shadow-lg hover:bg-amber-50 transition"
          >
            Give Online
          </button>
          <button
            onClick={handlePrayerRequest}
            className="bg-transparent border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white/20 transition"
          >
            Prayer Request
          </button>
        </div>
      </div>
    </section>
  );
};

export default Giving;