import { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, X, Play, User } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [activeSection, setActiveSection] = useState("");
  const dropdownRef = useRef(null);

  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const userMenuRef = useRef(null);

  const navStructure = {
    "About Us": ["about", "leadership", "testimonials", "location-map"],
    "Get Involved": ["ministries", "volunteer", "prayer-request", "giving"],
    "Media & Resources": [
      "sermons",
      "live-stream",
      "gallery",
      "blog",
      "events-calendar",
    ],
    "Events & News": ["events", "announcements", "service-times", "newsletter"],
    Connect: ["contact", "faq", "giving-progress"],
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = Object.values(navStructure).flat();
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenMenu(null);
      }
    };

    const handleUserClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("mousedown", handleUserClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("mousedown", handleUserClickOutside);
    };
  }, []);

  const handleLinkClick = (id, e) => {
    e?.preventDefault();
    setIsMobileMenuOpen(false);
    setOpenMenu(null);

    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 80;
      const offsetPosition =
        element.getBoundingClientRect().top +
        window.pageYOffset -
        navbarHeight;

      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const handleJoinLive = () => {
    const liveElement = document.getElementById("live-stream");
    if (liveElement) {
      const navbarHeight = 80;
      const offsetPosition =
        liveElement.getBoundingClientRect().top +
        window.pageYOffset -
        navbarHeight;

      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
    setOpenMenu(null);
  };

  const format = (id) =>
    id
      .replace(/-/g, " ")
      .split(" ")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");

  const toggleDropdown = (title) => {
    setOpenMenu(openMenu === title ? null : title);
  };

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-stone-950/70 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.25)] py-3 border-b border-white/5"
            : "bg-gradient-to-r from-stone-950/70 via-stone-900/40 to-stone-950/70 backdrop-blur-md py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* LOGO */}
            <div
              className="cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <div className="text-xl font-semibold tracking-wide text-white">
                Grace<span className="text-amber-400">Covenant</span>
              </div>
            </div>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
              <div className="flex items-center gap-6">
                {Object.entries(navStructure).map(([title, items]) => (
                  <div key={title} className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => toggleDropdown(title)}
                      className="flex items-center gap-1.5 text-sm font-medium text-white/80 hover:text-amber-300 transition-all"
                    >
                      {title}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          openMenu === title ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* DROPDOWN */}
                    <div
                      className={`absolute left-1/2 -translate-x-1/2 mt-3 w-64 
                      bg-stone-900/80 backdrop-blur-xl 
                      rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.5)]
                      border border-white/10 transition-all duration-300 origin-top ${
                        openMenu === title
                          ? "opacity-100 visible scale-100"
                          : "opacity-0 invisible scale-95"
                      }`}
                    >
                      <div className="p-2 space-y-1">
                        {items.map((item) => (
                          <button
                            key={item}
                            onClick={(e) => handleLinkClick(item, e)}
                            className={`block w-full text-left px-3 py-2.5 rounded-xl text-sm transition-all ${
                              activeSection === item
                                ? "bg-amber-500/10 text-amber-300 font-medium"
                                : "text-white/70 hover:bg-white/5 hover:text-amber-200"
                            }`}
                          >
                            {format(item)}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT ACTIONS */}
            <div className="flex items-center gap-3">

              {/* USER */}
              <div className="relative" ref={userMenuRef}>
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="p-2 rounded-full hover:bg-white/10 transition"
                >
                  <User className="w-5 h-5 text-white/70 hover:text-amber-300 transition" />
                </button>

                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-stone-900/90 backdrop-blur-xl rounded-xl border border-white/10 shadow-xl overflow-hidden">
                    <button className="w-full text-left px-4 py-2 text-sm text-white/70 hover:bg-white/5 hover:text-amber-300">
                      Sign In
                    </button>
                    <button className="w-full text-left px-4 py-2 text-sm text-white/70 hover:bg-white/5 hover:text-amber-300">
                      Register
                    </button>
                  </div>
                )}
              </div>

              {/* JOIN LIVE */}
              <button
                onClick={handleJoinLive}
                className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold
                bg-gradient-to-r from-amber-500 via-amber-400 to-orange-500
                text-stone-950 shadow-lg shadow-amber-500/20
                hover:shadow-amber-500/40 hover:scale-105 transition-all duration-300"
              >
                <Play className="w-4 h-4" />
                Join Live
              </button>

              {/* MOBILE MENU */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition"
              >
                <Menu className="w-6 h-6 text-white/80" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/60 z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          <div className="fixed right-0 top-0 h-full w-full max-w-sm bg-stone-950 z-50 shadow-2xl">
            <div className="flex justify-between items-center p-6 border-b border-white/10">
              <div className="text-white font-semibold">
                Grace<span className="text-amber-400">Covenant</span>
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            <div className="p-6 space-y-6 overflow-y-auto h-[calc(100%-160px)]">
              {Object.entries(navStructure).map(([title, items]) => (
                <div key={title}>
                  <div className="text-amber-300 font-semibold mb-2">
                    {title}
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {items.map((item) => (
                      <button
                        key={item}
                        onClick={() => handleLinkClick(item)}
                        className="text-left text-white/70 hover:text-amber-300 hover:bg-white/5 px-2 py-2 rounded-lg text-sm"
                      >
                        {format(item)}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="absolute bottom-0 w-full p-6 border-t border-white/10">
              <button
                onClick={handleJoinLive}
                className="w-full bg-amber-500 text-black py-3 rounded-xl font-semibold"
              >
                Join Live Stream
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;