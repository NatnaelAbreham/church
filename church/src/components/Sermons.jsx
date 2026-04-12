// components/Sermons.jsx
const Sermons = () => {
  const sermonsList = [
    {
      img: "https://images.pexels.com/photos/3768138/pexels-photo-3768138.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "The Power of Grace",
      pastor: "Pastor Michael Chen",
      duration: "28 min",
      desc: "Discover the transformative power of unmerited favor in everyday life."
    },
    {
      img: "https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Walking in Hope",
      pastor: "Pastor Sarah Olu",
      duration: "35 min",
      desc: "Finding strength when the road is uncertain — a message of resilience."
    },
    {
      img: "https://images.pexels.com/photos/7105761/pexels-photo-7105761.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Building a Generous Life",
      pastor: "Elder David Kim",
      duration: "42 min",
      desc: "Living with open hands: generosity as spiritual discipline."
    }
  ];

  const handleWatchAll = (e) => {
    e.preventDefault();
    alert("🎥 Full sermon library: New messages every week. Subscribe for updates!");
  };

  return (
    <section id="sermons" className="py-24 px-6 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-amber-700 font-semibold uppercase tracking-wide">Watch & Listen</span>
          <h2 className="text-4xl md:text-5xl font-bold serif">Recent Sermons</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {sermonsList.map((sermon, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover-lift">
              <div className="relative">
                <img src={sermon.img} alt="sermon" className="w-full h-52 object-cover" />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <i className="fas fa-play-circle text-white text-5xl opacity-90"></i>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{sermon.title}</h3>
                <p className="text-stone-500 mt-1">{sermon.pastor} • {sermon.duration}</p>
                <p className="text-stone-600 mt-2">{sermon.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            onClick={handleWatchAll}
            className="inline-flex items-center gap-2 text-amber-800 font-semibold border-b-2 border-amber-500 pb-1"
          >
            Watch all sermons <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sermons;