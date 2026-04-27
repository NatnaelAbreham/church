import { useState, useEffect, useRef } from "react";
import { ChevronDown, ChevronRight, X, Play, User, Menu } from "lucide-react";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [activeSection, setActiveSection] = useState("");
  const dropdownRef = useRef(null);

  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const userMenuRef = useRef(null);

  // FIX: Initialize darkMode properly to avoid hydration mismatch
  const [darkMode, setDarkMode] = useState(() => {
    // Check if we're in browser environment
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains("dark");
    }
    return false; // Default for SSR
  });

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

    // Prevent body scroll when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("mousedown", handleUserClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("mousedown", handleUserClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // FIX: Add effect to sync darkMode with document class
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

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

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled
            ? `
        bg-white/70
        dark:bg-stone-950/70
        backdrop-blur-2xl
        border-b border-amber-100
        dark:border-white/10
        shadow-lg
        py-3
      `
            : `
        [&_*]:!bg-transparent py-3
        [&_*]:!text-white
        border-b border-white/10
        dark:border-white/10
        shadow-lg
      `
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* MOBILE MENU BUTTON - Left side on mobile */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden group relative p-2 rounded-lg
                bg-gradient-to-r from-amber-500 to-amber-600
                hover:from-amber-600 hover:to-amber-700
                shadow-lg shadow-amber-500/30
                hover:shadow-xl hover:shadow-amber-500/40
                transition-all duration-300
                active:scale-95"
              aria-label="Open menu"
            >
              <ChevronRight className="w-5 h-5 text-white group-hover:translate-x-0.5 transition-transform duration-300" />
            </button>

            {/* LOGO - Centered on mobile, normal on desktop */}
            <div
              className="cursor-pointer absolute left-1/2 transform -translate-x-1/2 lg:relative lg:left-0 lg:transform-none"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <div className="text-xl font-semibold tracking-wide theme-heading whitespace-nowrap">
                Grace<span className="text-amber-700">Covenant</span>
              </div>
            </div>

            {/* DESKTOP MENU - Hidden on mobile */}
            <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
              <div className="flex items-center gap-6">
                {Object.entries(navStructure).map(([title, items]) => (
                  <div key={title} className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => toggleDropdown(title)}
                      className="flex items-center gap-1.5 text-sm font-medium theme-text hover:text-amber-500 dark:hover:theme-accent transition-all duration-300"
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
                        theme-card rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.2)]
                        transition-all duration-300 origin-top ${
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
                                ? "bg-amber-500/10 text-amber-500 dark:theme-accent font-medium"
                                : "theme-text hover:bg-amber-50 dark:hover:bg-white/5 hover:text-amber-500 dark:hover:theme-accent"
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

            {/* DESKTOP RIGHT ACTIONS - Hidden on mobile */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-xl theme-hover transition-all duration-300"
                aria-label="Toggle theme"
              >
                {darkMode ? (
                  <Sun className="w-5 h-5 text-amber-400" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-700" />
                )}
              </button>

              {/* USER */}
              <div className="relative" ref={userMenuRef}>
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="p-2 rounded-full theme-hover transition"
                  aria-label="User menu"
                >
                  <User className="w-5 h-5 theme-text hover:theme-accent transition" />
                </button>

                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-40 theme-card backdrop-blur-xl rounded-xl border border-white/10 shadow-xl overflow-hidden">
                    <button className="w-full text-left px-4 py-2 text-sm theme-text hover:bg-amber-50 dark:hover:bg-white/5 hover:text-amber-500 dark:hover:theme-accent transition">
                      Sign In
                    </button>
                    <button className="w-full text-left px-4 py-2 text-sm theme-text hover:bg-amber-50 dark:hover:bg-white/5 hover:text-amber-500 dark:hover:theme-accent transition">
                      Register
                    </button>
                  </div>
                )}
              </div>

              {/* JOIN LIVE */}
              <button
                onClick={handleJoinLive}
                className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold
                  bg-amber-500/90 dark:bg-amber-500/80
                  text-white
                  shadow-md shadow-amber-500/10
                  hover:shadow-lg hover:shadow-amber-500/20
                  hover:scale-105 transition-all duration-300"
              >
                <Play className="w-4 h-4" />
                Join Live
              </button>
            </div>

            {/* Invisible spacer for mobile to maintain layout */}
            <div className="lg:hidden w-8"></div>
          </div>
        </div>
      </nav>

      {/* SLIDE-IN SIDEBAR MENU FOR MOBILE - Better for responsiveness */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Sidebar Menu */}
          <div className="fixed left-0 top-0 h-full w-full max-w-sm bg-white dark:bg-stone-900 z-50 shadow-2xl transform transition-transform duration-300 ease-out lg:hidden">
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="text-xl font-semibold tracking-wide">
                Grace<span className="text-amber-600 dark:text-amber-500">Covenant</span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </button>
            </div>

            {/* Menu Items */}
            <div className="p-6 space-y-6 overflow-y-auto h-[calc(100%-180px)]">
              {/* Theme Toggle */}
              <div className="flex items-center justify-between pb-2 border-b border-gray-200 dark:border-gray-700">
                <span className="text-gray-700 dark:text-gray-300 font-medium">Dark Mode</span>
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 transition-all duration-300"
                  aria-label="Toggle theme"
                >
                  {darkMode ? (
                    <Sun className="w-5 h-5 text-amber-400" />
                  ) : (
                    <Moon className="w-5 h-5 text-gray-700" />
                  )}
                </button>
              </div>

              {/* User Menu */}
              <div className="space-y-2 pb-2 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-amber-600 dark:text-amber-500">Account</h3>
                <div className="flex flex-col gap-2">
                  <button className="w-full text-left px-4 py-2.5 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-amber-50 dark:hover:bg-amber-950/30 hover:text-amber-600 dark:hover:text-amber-500 transition-all">
                    Sign In
                  </button>
                  <button className="w-full text-left px-4 py-2.5 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-amber-50 dark:hover:bg-amber-950/30 hover:text-amber-600 dark:hover:text-amber-500 transition-all">
                    Register
                  </button>
                </div>
              </div>

              {/* Navigation Menus */}
              {Object.entries(navStructure).map(([title, items]) => (
                <div key={title} className="space-y-2">
                  <h3 className="text-lg font-semibold text-amber-600 dark:text-amber-500">
                    {title}
                  </h3>
                  <div className="flex flex-col gap-1">
                    {items.map((item) => (
                      <button
                        key={item}
                        onClick={() => handleLinkClick(item)}
                        className="w-full text-left px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-amber-50 dark:hover:bg-amber-950/30 hover:text-amber-600 dark:hover:text-amber-500 transition-all"
                      >
                        {format(item)}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer with Join Live Button */}
            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-stone-950/50">
              <button
                onClick={handleJoinLive}
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                <Play className="w-4 h-4" />
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