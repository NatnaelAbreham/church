// components/Events.jsx
const Events = () => {
  const eventsList = [
    {
      img: "https://images.pexels.com/photos/8474833/pexels-photo-8474833.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "April 20, 2026",
      title: "Easter Sunrise Service",
      desc: "Celebrate resurrection morning at 6:30 AM with breakfast fellowship."
    },
    {
      img: "https://images.pexels.com/photos/8535571/pexels-photo-8535571.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "May 5–7, 2026",
      title: "Women's Retreat",
      desc: "Renew, refresh, and reconnect at Mountain Springs."
    },
    {
      img: "https://images.pexels.com/photos/5697240/pexels-photo-5697240.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "Every Sunday",
      title: "Worship Gatherings",
      desc: "9:00am & 11:00am • In-person & Livestream"
    }
  ];

  const handleViewCalendar = () => {
    alert("📅 Full calendar: Easter, Women's Retreat, and more events coming soon. Stay tuned!");
  };

  return (
    <section id="events" className="py-24 px-6 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-amber-700 font-semibold uppercase tracking-wide">Join us</span>
          <h2 className="text-4xl md:text-5xl font-bold serif mt-2">Upcoming Events</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventsList.map((event, index) => (
            <div key={index} className="bg-amber-50/60 rounded-2xl overflow-hidden shadow-lg transition-all hover:scale-[1.02]">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url('${event.img}')` }}></div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-amber-700">
                  <i className="fas fa-calendar-alt"></i>
                  <span>{event.date}</span>
                </div>
                <h3 className="text-2xl font-bold mt-2">{event.title}</h3>
                <p className="text-stone-600 mt-2">{event.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={handleViewCalendar}
            className="bg-transparent border-2 border-amber-600 text-amber-700 px-8 py-3 rounded-full font-semibold hover:bg-amber-600 hover:text-white transition"
          >
            View Full Calendar
          </button>
        </div>
      </div>
    </section>
  );
};

export default Events;