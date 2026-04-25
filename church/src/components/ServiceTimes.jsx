// components/ServiceTime.jsx
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChurch,
  faLocationDot,
  faClock,
  faCalendarAlt,
  faArrowRight,
  faMap,
} from "@fortawesome/free-solid-svg-icons";

const ServiceTime = () => {
  const [timeLeft, setTimeLeft] = useState({});

  // Example next service (you can later connect API)
  const nextService = {
    title: "Sunday Worship Service",
    date: "Sunday",
    time: "9:00 AM & 11:00 AM",
    location: "Main Sanctuary",
  };

  // Countdown (simple demo logic)
  useEffect(() => {
    const target = new Date();
    target.setDate(target.getDate() + 2);
    target.setHours(9, 0, 0, 0);

    const interval = setInterval(() => {
      const now = new Date();
      const diff = target - now;

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      day: "Sunday",
      times: "9:00 AM & 11:00 AM",
      type: "Main Worship Service",
    },
    {
      day: "Wednesday",
      times: "7:00 PM",
      type: "Midweek Prayer & Bible Study",
    },
    {
      day: "Friday",
      times: "6:00 PM",
      type: "Youth Fellowship",
    },
  ];

  return (
    <section id = "service-times" className="relative py-28 px-6 bg-gradient-to-br from-stone-950 via-black to-amber-950 text-white overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-amber-500/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-400/10 blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* HERO */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-xl">
            <FontAwesomeIcon icon={faChurch} className="text-amber-400" />
            <span className="text-xs tracking-widest uppercase text-amber-200">
              Service Times
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mt-6">
            Join Us This{" "}
            <span className="text-amber-400">Week</span>
          </h1>

          <p className="text-stone-300 mt-4 max-w-2xl mx-auto">
            Come as you are. Experience worship, community, and the Word together.
          </p>
        </div>

        {/* NEXT SERVICE CARD */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 mb-16 text-center shadow-2xl">

          <p className="text-amber-300 text-sm uppercase tracking-widest mb-2">
            Next Service
          </p>

          <h2 className="text-3xl font-bold mb-4">
            {nextService.title}
          </h2>

          <div className="flex flex-wrap justify-center gap-6 text-stone-300 text-sm mb-6">
            <span className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCalendarAlt} className="text-amber-400" />
              {nextService.date}
            </span>
            <span className="flex items-center gap-2">
              <FontAwesomeIcon icon={faClock} className="text-amber-400" />
              {nextService.time}
            </span>
            <span className="flex items-center gap-2">
              <FontAwesomeIcon icon={faLocationDot} className="text-amber-400" />
              {nextService.location}
            </span>
          </div>

          {/* Countdown */}
          <div className="flex justify-center gap-4 text-center">
            {Object.entries(timeLeft).map(([key, value]) => (
              <div
                key={key}
                className="bg-black/40 border border-white/10 px-4 py-3 rounded-xl min-w-[70px]"
              >
                <div className="text-2xl font-bold text-amber-300">
                  {value || 0}
                </div>
                <div className="text-xs text-stone-400 uppercase">
                  {key}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SERVICE SCHEDULE */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 hover:border-amber-400/40 transition"
            >
              <h3 className="text-xl font-bold text-amber-300">
                {s.day}
              </h3>
              <p className="text-stone-300 mt-2">{s.type}</p>

              <div className="mt-4 flex items-center gap-2 text-stone-400 text-sm">
                <FontAwesomeIcon icon={faClock} className="text-amber-400" />
                {s.times}
              </div>
            </div>
          ))}
        </div>

        {/* LOCATION */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-10 text-center">

          <h3 className="text-2xl font-bold mb-4">
            Church Location
          </h3>

          <p className="text-stone-300 mb-6">
            Main Sanctuary • Open 30 minutes before service
          </p>

          <button className="inline-flex items-center gap-2 px-6 py-3 bg-amber-400 text-black font-bold rounded-full hover:scale-105 transition">
            <FontAwesomeIcon icon={faMap} />
            Get Directions
          </button>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-400 to-yellow-300 text-black font-bold rounded-full hover:scale-105 transition">
            Plan Your Visit
            <FontAwesomeIcon icon={faArrowRight} />
          </button>

          <p className="text-stone-500 text-sm mt-4">
            We’d love to welcome you this Sunday
          </p>
        </div>

      </div>
    </section>
  );
};

export default ServiceTime;