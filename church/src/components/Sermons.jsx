// components/Sermons.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Sermons = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const sermonsList = [
    {
      img: "https://images.pexels.com/photos/3768138/pexels-photo-3768138.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "The Power of Grace",
      pastor: "Pastor Michael Chen",
      duration: "28 min",
      desc: "Discover the transformative power of unmerited favor in everyday life.",
      video: "https://www.youtube.com/embed/ScMzIvxBSi4"
    },
    {
      img: "https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Walking in Hope",
      pastor: "Pastor Sarah Olu",
      duration: "35 min",
      desc: "Finding strength when the road is uncertain — a message of resilience.",
      video: "https://www.youtube.com/embed/ysz5S6PUM-U"
    },
    {
      img: "https://images.pexels.com/photos/7105761/pexels-photo-7105761.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Building a Generous Life",
      pastor: "Elder David Kim",
      duration: "42 min",
      desc: "Living with open hands: generosity as spiritual discipline.",
      video: "https://www.youtube.com/embed/jfKfPfyJRdk"
    }
  ];

  return (
    <section id="sermons" className="relative py-28 px-6 theme-section overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="theme-accent font-semibold tracking-widest uppercase text-sm">
            Watch & Listen
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 theme-heading">
            <span className="theme-accent">Recent Sermons</span>
          </h2>
          <p className="theme-muted mt-3 max-w-xl mx-auto">
            Fresh teachings designed to inspire, strengthen, and guide your spiritual journey.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid lg:grid-cols-3 gap-10">
          {sermonsList.map((sermon, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group relative theme-card rounded-2xl overflow-hidden shadow-lg cursor-pointer"
              onClick={() => setActiveVideo(sermon.video)}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={sermon.img}
                  alt={sermon.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center animate-pulse">
                    <FontAwesomeIcon icon={faPlay} className="text-white text-2xl" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold theme-heading group-hover:theme-accent transition">
                  {sermon.title}
                </h3>
                <p className="theme-muted mt-1 text-sm">
                  {sermon.pastor} • {sermon.duration}
                </p>
                <p className="theme-text mt-3 text-sm leading-relaxed">
                  {sermon.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <button className="relative inline-flex items-center gap-2 theme-accent font-semibold group">
            Watch all sermons
            <FontAwesomeIcon icon={faArrowRight} className="transition-transform group-hover:translate-x-1" />
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-amber-500 group-hover:w-full transition-all"></span>
          </button>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={activeVideo}
                title="Sermon Video"
                className="w-full h-full"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Sermons;