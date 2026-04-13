import { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, X, Play } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [activeSection, setActiveSection] = useState("");
  const dropdownRef = useRef(null);

  const navStructure = {
    "About Us": ["about", "leadership", "testimonials", "location-map"],
    "Get Involved": ["ministries", "volunteer", "prayer-request", "giving"],
    "Media & Resources": ["sermons", "live-stream", "gallery", "blog", "events-calendar"],
    "Events & News": ["events", "announcements", "service-times", "newsletter"],
    "Connect": ["contact", "faq", "giving-progress"]
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Track active section for highlighting
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
    
    // Close dropdown when clicking outside
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenMenu(null);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLinkClick = (id, e) => {
    e?.preventDefault();
    setIsMobileMenuOpen(false);
    setOpenMenu(null);
    
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleJoinLive = () => {
    const liveElement = document.getElementById("live-stream");
    if (liveElement) {
      const navbarHeight = 80;
      const elementPosition = liveElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false);
    setOpenMenu(null);
  };

  const format = (id) => {
    return id.replace(/-/g, " ")
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const toggleDropdown = (title) => {
    setOpenMenu(openMenu === title ? null : title);
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-lg py-3" 
          : "bg-white/90 backdrop-blur-sm py-4"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* LOGO - Left side */}
            <div className="flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <div className="text-xl font-semibold">
                Grace<span className="text-amber-700">Covenant</span>
              </div>
            </div>

            {/* DESKTOP MENU - Centered */}
            <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
              <div className="flex items-center gap-4 xl:gap-6">
                {Object.entries(navStructure).map(([title, items]) => (
                  <div
                    key={title}
                    className="relative"
                    ref={dropdownRef}
                  >
                    <button
                      onClick={() => toggleDropdown(title)}
                      className="flex items-center gap-1.5 text-sm font-medium text-gray-700 hover:text-amber-700 transition-colors whitespace-nowrap"
                    >
                      {title}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          openMenu === title ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* DROPDOWN */}
                    <div
                      className={`absolute left-1/2 -translate-x-1/2 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-amber-100 transition-all duration-200 origin-top ${
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
                            className={`block w-full text-left px-3 py-2.5 rounded-lg text-sm transition-all ${
                              activeSection === item
                                ? "bg-amber-50 text-amber-700 font-medium"
                                : "text-gray-600 hover:bg-amber-50 hover:text-amber-700"
                            }`}
                          >
                            <span className="flex items-center gap-2">
                              {format(item)}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA BUTTON - Right side */}
            <div className="flex-shrink-0">
              <button 
                onClick={handleJoinLive}
                className="flex items-center gap-2 bg-amber-700 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-amber-800 transition-all hover:scale-105 shadow-md"
              >
                <Play className="w-4 h-4" />
                Join Live
              </button>
            </div>

            {/* MOBILE BUTTON */}
            <button 
              onClick={() => setIsMobileMenuOpen(true)} 
              className="lg:hidden p-2 rounded-lg hover:bg-amber-50 transition"
            >
              <Menu className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU - Improved */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Side Drawer */}
          <div className="fixed right-0 top-0 h-full w-full max-w-sm bg-white z-50 shadow-2xl animate-slide-in lg:hidden">
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-amber-100">
              <div className="text-xl font-semibold">
                Grace<span className="text-amber-700">Covenant</span>
              </div>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 hover:bg-amber-50 rounded-lg transition"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Scrollable Menu Items */}
            <div className="overflow-y-auto h-[calc(100%-180px)] p-6">
              <div className="space-y-6">
                {Object.entries(navStructure).map(([title, items]) => (
                  <div key={title} className="space-y-3">
                    <div className="font-semibold text-amber-700">
                      {title}
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {items.map((item) => (
                        <button
                          key={item}
                          onClick={() => handleLinkClick(item)}
                          className={`text-left py-2 px-2 rounded-lg text-sm transition ${
                            activeSection === item
                              ? "bg-amber-50 text-amber-700 font-medium"
                              : "text-gray-600 hover:bg-amber-50 hover:text-amber-700"
                          }`}
                        >
                          {format(item)}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Fixed Bottom CTA */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-white border-t border-amber-100">
              <button 
                onClick={handleJoinLive}
                className="w-full bg-amber-700 text-white py-3 rounded-xl font-semibold hover:bg-amber-800 transition flex items-center justify-center gap-2"
              >
                <Play className="w-5 h-5" />
                Join Live Stream
              </button>
            </div>
          </div>
        </>
      )}

      {/* Add this CSS for animations */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-slide-in {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default Navbar;