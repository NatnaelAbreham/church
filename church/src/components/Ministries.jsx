// components/Ministries.jsx
import { motion } from "framer-motion";
import { Users, Baby, HandHelping, Music } from "lucide-react";

const ministriesList = [
  {
    icon: Baby,
    title: "Kids & Youth",
    desc: "Safe, fun, and faith-filled environment for the next generation to grow in Christ.",
  },
  {
    icon: Users,
    title: "Small Groups",
    desc: "Connect deeply through weekly Bible studies and meaningful fellowship.",
  },
  {
    icon: HandHelping,
    title: "Community Care",
    desc: "Food outreach, support programs, and prayer for our local community.",
  },
  {
    icon: Music,
    title: "Worship Arts",
    desc: "Music, choir, and creative teams bringing glory through worship & media.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Ministries = () => {
  return (
    <section
      id="ministries"
      className="relative py-28 px-6 bg-gradient-to-b from-amber-50/60 via-white to-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-amber-700 font-semibold tracking-widest uppercase text-sm">
            Get Involved
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-stone-800 tracking-tight">
            Our Ministries
          </h2>

          <p className="text-stone-500 mt-4 max-w-xl mx-auto">
            Discover places where you can grow, serve, and belong in our church family.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {ministriesList.map((ministry, index) => {
            const Icon = ministry.icon;

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                {/* Glow background */}
                <div className="absolute -inset-0.5 bg-gradient-to-br from-amber-200/40 to-amber-400/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />

                {/* Card */}
                <div className="relative h-full bg-white/80 backdrop-blur-xl border border-amber-100 rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300">
                  
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-100 to-amber-50 flex items-center justify-center mb-6 group-hover:scale-110 transition">
                    <Icon className="text-amber-700 w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-stone-800 group-hover:text-amber-800 transition">
                    {ministry.title}
                  </h3>

                  {/* Description */}
                  <p className="text-stone-600 mt-3 leading-relaxed text-sm">
                    {ministry.desc}
                  </p>

                  {/* subtle underline animation */}
                  <div className="mt-5 h-[2px] w-0 bg-amber-300 group-hover:w-full transition-all duration-500 rounded-full" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Ministries;