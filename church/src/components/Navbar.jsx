// components/Navbar.jsx
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleJoinLive = () => {
    alert("🔴 Live Stream: Join our worship service every Sunday at 9AM & 11AM (CST). Visit our YouTube channel.");
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md border-b border-amber-100/50"
            : "bg-white/90 backdrop-blur-sm border-b border-amber-100/50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <i className="fas fa-church text-3xl text-amber-700"></i>
            <span className="text-2xl font-semibold tracking-tight text-stone-800 serif">
              Grace<span className="text-amber-700">Covenant</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 text-stone-700 font-medium">
            {["home", "about", "ministries", "events", "sermons", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={(e) => handleLinkClick(e, item)}
                className="hover:text-amber-700 transition capitalize"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={handleJoinLive}
              className="hidden md:block bg-amber-700 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md hover:bg-amber-800 transition-all"
            >
              Join Live
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden text-2xl text-stone-700"
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white/95 backdrop-blur-lg z-50 flex flex-col items-center justify-center gap-6 text-xl font-medium">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-6 right-6 text-3xl"
          >
            <i className="fas fa-times"></i>
          </button>
          {["home", "about", "ministries", "events", "sermons", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={(e) => handleLinkClick(e, item)}
              className="capitalize hover:text-amber-700 transition"
            >
              {item}
            </a>
          ))}
          <button
            onClick={handleJoinLive}
            className="bg-amber-700 text-white px-8 py-3 rounded-full text-lg mt-4"
          >
            Join Live
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;