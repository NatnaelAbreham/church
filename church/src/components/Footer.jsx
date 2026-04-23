// components/Footer.jsx
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebookF,
  faInstagram,
  faYoutube,
  faSpotify,
  
} from "@fortawesome/free-brands-svg-icons";
import { faChurch, faCalendar, faHandsPraying, faEnvelope, faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialIcons = [
    faFacebookF,
    faInstagram,
    faYoutube,
    faSpotify,
    
  ];

  const footerLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Ministries", href: "#ministries" },
    { name: "Events", href: "#events" },
    { name: "Sermons", href: "#sermons" },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#050505] text-stone-300 pt-24 pb-10 px-6">

      {/* Ambient Background Glow */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-amber-500/10 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-400/5 blur-[120px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">

        {/* Top CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mb-20 overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-orange-500/10"></div>

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10 px-8 md:px-14 py-12">

            <div className="max-w-2xl">
              <span className="text-amber-400 uppercase tracking-[0.25em] text-xs font-semibold">
                Stay Connected
              </span>

              <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 leading-tight">
                Weekly inspiration,
                <span className="text-amber-400"> sermons & community updates</span>
              </h2>

              <p className="text-stone-400 mt-5 leading-relaxed">
                Join our growing church family and receive encouragement,
                spiritual teachings, and upcoming event updates every week.
              </p>
            </div>

            {/* Newsletter */}
            <div className="w-full max-w-md">
              <div className="flex items-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-transparent px-5 py-4 outline-none text-white placeholder:text-stone-500"
                />

                <button className="px-6 py-4 bg-amber-500 text-black font-semibold hover:bg-amber-400 transition-all duration-300">
                  Join
                </button>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Main Footer Grid */}
        <div className="grid lg:grid-cols-4 gap-14 pb-14">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-5">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/20">
                <FontAwesomeIcon icon={faChurch} className="text-black text-xl" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white">
                  Grace Covenant
                </h3>
                <p className="text-stone-500 text-sm">
                  Faith • Hope • Love
                </p>
              </div>
            </div>

            <p className="text-stone-400 leading-relaxed">
              A welcoming community helping people grow spiritually,
              build meaningful relationships, and discover purpose through Christ.
            </p>

            {/* Socials */}


            <div className="flex gap-4 mt-8">
              {socialIcons.map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="group w-11 h-11 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center hover:bg-amber-500 hover:border-amber-400 transition-all duration-300 hover:-translate-y-1"
                >
                  <FontAwesomeIcon
                    icon={icon}
                    className="text-stone-300 group-hover:text-black transition"
                  />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <h4 className="text-white text-lg font-semibold mb-6">
              Navigation
            </h4>

            <ul className="space-y-4">
              {footerLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-stone-400 hover:text-white transition"
                  >
                    <span className="w-0 group-hover:w-3 h-[2px] bg-amber-400 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Service Times */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h4 className="text-white text-lg font-semibold mb-6">
              Service Times
            </h4>

            <div className="space-y-5 text-stone-400">

              <div className="flex items-start gap-3">
                <FontAwesomeIcon
                  icon={faCalendar}
                  className="text-amber-400 mt-1"
                />
                <div>
                  <p className="text-white font-medium">Sunday Worship</p>
                  <p>9:00 AM & 11:00 AM</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FontAwesomeIcon
                  icon={faHandsPraying}
                  className="text-amber-400 mt-1"
                />
                <div>
                  <p className="text-white font-medium">Wednesday Prayer</p>
                  <p>7:00 PM</p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h4 className="text-white text-lg font-semibold mb-6">
              Contact
            </h4>

            <div className="space-y-5 text-stone-400">

              <div className="flex items-start gap-3">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-amber-400 mt-1"
                />
                <p>123 Grace Avenue, New York, NY</p>
              </div>

              <div className="flex items-start gap-3">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-amber-400 mt-1"
                />
                <p>(123) 456-7890</p>
              </div>

              <div className="flex items-start gap-3">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-amber-400 mt-1"
                />
                <p>hello@gracecovenant.org</p>
              </div>

            </div>
          </motion.div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-stone-500 text-sm text-center md:text-left">
            © {currentYear} Grace Covenant Church. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-stone-500">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-white transition">
              Terms
            </a>

            <span className="text-stone-700">|</span>

            <p>
              Built with faith & React
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;