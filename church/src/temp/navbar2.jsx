// components/Hero.jsx
import { useState, useEffect } from "react";
import { ChevronRight, Play, Calendar, Heart, Sparkles, Settings, X, Plus, Trash2, Upload, GripVertical } from "lucide-react";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [showImageManager, setShowImageManager] = useState(false);
  const [newImageUrl, setNewImageUrl] = useState("");
  const [newImageAlt, setNewImageAlt] = useState("");
  
  // Default images
  const defaultImages = [
    {
      id: 1,
      url: "https://images.pexels.com/photos/2606355/pexels-photo-2606355.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Church interior with warm light"
    },
    {
      id: 2,
      url: "https://images.pexels.com/photos/2775221/pexels-photo-2775221.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Person praying with cross"
    },
    {
      id: 3,
      url: "https://images.pexels.com/photos/2673992/pexels-photo-2673992.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Sun rays through church window"
    },
    {
      id: 4,
      url: "https://images.pexels.com/photos/6957625/pexels-photo-6957625.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Worship hands raised"
    },
    {
      id: 5,
      url: "https://images.pexels.com/photos/5409016/pexels-photo-5409016.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Church cross stained glass"
    }
  ];

  const [images, setImages] = useState(() => {
    // Load saved images from localStorage
    const saved = localStorage.getItem("churchHeroImages");
    return saved ? JSON.parse(saved) : defaultImages;
  });

  // Save images to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("churchHeroImages", JSON.stringify(images));
  }, [images]);

  // Image rotation every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Add new image
  const addImage = () => {
    if (newImageUrl && newImageAlt) {
      const newImage = {
        id: Date.now(),
        url: newImageUrl,
        alt: newImageAlt
      };
      setImages([...images, newImage]);
      setNewImageUrl("");
      setNewImageAlt("");
    }
  };

  // Remove image
  const removeImage = (id) => {
    if (images.length <= 1) {
      alert("You need at least one image!");
      return;
    }
    setImages(images.filter(img => img.id !== id));
    if (currentImageIndex >= images.length - 1) {
      setCurrentImageIndex(0);
    }
  };

  // Move image up/down
  const moveImage = (index, direction) => {
    const newIndex = direction === 'up' ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex >= images.length) return;
    
    const newImages = [...images];
    [newImages[index], newImages[newIndex]] = [newImages[newIndex], newImages[index]];
    setImages(newImages);
  };

  // Handle image upload from computer
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewImageUrl(reader.result);
        setNewImageAlt(file.name.split('.')[0]);
      };
      reader.readAsDataURL(file);
    }
  };

  // Track mouse for dynamic shine effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePosition({ x, y });
    };

    const section = document.getElementById('hero-section');
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      return () => section.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      
      {/* Admin Button - Top Right Corner */}
      <button
        onClick={() => setShowImageManager(!showImageManager)}
        className="fixed top-24 right-4 z-50 bg-white/10 backdrop-blur-md p-2 rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20 group"
        title="Manage Background Images"
      >
        <Settings className="w-5 h-5 text-white/70 group-hover:text-white group-hover:rotate-90 transition-all duration-300" />
      </button>

      {/* Image Management Modal */}
      {showImageManager && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden border border-white/20 shadow-2xl">
            
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-white/10">
              <h3 className="text-xl font-bold text-white">Manage Background Images</h3>
              <button
                onClick={() => setShowImageManager(false)}
                className="p-1 hover:bg-white/10 rounded-lg transition"
              >
                <X className="w-5 h-5 text-white/70" />
              </button>
            </div>

            {/* Add New Image Form */}
            <div className="p-6 border-b border-white/10">
              <h4 className="text-sm font-semibold text-white mb-3">Add New Image</h4>
              <div className="space-y-3">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Image URL (or upload below)"
                    value={newImageUrl}
                    onChange={(e) => setNewImageUrl(e.target.value)}
                    className="flex-1 bg-white/5 border border-white/20 rounded-lg px-3 py-2 text-sm text-white placeholder-white/50 focus:outline-none focus:border-blue-500"
                  />
                  <label className="cursor-pointer bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/50 rounded-lg px-4 py-2 transition">
                    <Upload className="w-4 h-4 text-blue-400 inline mr-2" />
                    <span className="text-sm text-blue-400">Upload</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                </div>
                <input
                  type="text"
                  placeholder="Image description (alt text)"
                  value={newImageAlt}
                  onChange={(e) => setNewImageAlt(e.target.value)}
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-3 py-2 text-sm text-white placeholder-white/50 focus:outline-none focus:border-blue-500"
                />
                <button
                  onClick={addImage}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-4 py-2 rounded-lg text-sm font-semibold transition flex items-center justify-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  Add Image
                </button>
              </div>
            </div>

            {/* Image List */}
            <div className="p-6 overflow-y-auto max-h-[400px]">
              <h4 className="text-sm font-semibold text-white mb-3">Current Images ({images.length})</h4>
              <div className="space-y-3">
                {images.map((image, index) => (
                  <div
                    key={image.id}
                    className={`flex items-center gap-3 p-3 rounded-lg bg-white/5 border transition-all ${
                      index === currentImageIndex ? 'border-blue-500 bg-blue-500/10' : 'border-white/10'
                    }`}
                  >
                    {/* Drag Handle */}
                    <div className="cursor-move text-white/40 hover:text-white/70">
                      <GripVertical className="w-4 h-4" />
                    </div>
                    
                    {/* Image Preview */}
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    
                    {/* Image Info */}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-white truncate">{image.alt}</p>
                      <p className="text-xs text-white/50 truncate">{image.url.substring(0, 50)}...</p>
                    </div>
                    
                    {/* Move Buttons */}
                    <div className="flex flex-col gap-1">
                      <button
                        onClick={() => moveImage(index, 'up')}
                        disabled={index === 0}
                        className="p-1 hover:bg-white/10 rounded disabled:opacity-30 disabled:cursor-not-allowed"
                      >
                        ↑
                      </button>
                      <button
                        onClick={() => moveImage(index, 'down')}
                        disabled={index === images.length - 1}
                        className="p-1 hover:bg-white/10 rounded disabled:opacity-30 disabled:cursor-not-allowed"
                      >
                        ↓
                      </button>
                    </div>
                    
                    {/* Delete Button */}
                    <button
                      onClick={() => removeImage(image.id)}
                      className="p-2 hover:bg-red-500/20 rounded-lg text-red-400 hover:text-red-300 transition"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-white/10 bg-white/5">
              <button
                onClick={() => {
                  localStorage.setItem("churchHeroImages", JSON.stringify(images));
                  setShowImageManager(false);
                }}
                className="w-full bg-green-600/20 hover:bg-green-600/30 border border-green-500/50 rounded-lg px-4 py-2 text-sm font-semibold text-green-400 transition"
              >
                Save & Close
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Dynamic Background with Better Visible Images */}
      <div className="absolute inset-0 z-0">
        {/* Background Images */}
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-60" : "opacity-0"
            }`}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        
        {/* Lighter Blue-Black Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-blue-950/70 to-black/60"></div>
        
        {/* Dramatic Radial Gradient for Shine Effect */}
        <div 
          className="absolute inset-0 opacity-40 transition-all duration-300 ease-out"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59,130,246,0.3) 0%, rgba(0,0,0,0) 60%)`
          }}
        ></div>
      </div>

      {/* White Shine Effects Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Dynamic Spotlight */}
        <div 
          className="absolute w-[600px] h-[600px] rounded-full blur-3xl transition-all duration-300"
          style={{
            background: `radial-gradient(circle, rgba(255,255,255,0.12) 0%, rgba(59,130,246,0.08) 50%, transparent 70%)`,
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
        ></div>

        {/* Subtle Cross Glow */}
        <div className="absolute top-[20%] right-[8%] opacity-15 animate-float-slow">
          <svg className="w-12 h-12 text-white/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 4v16M6 8l6-4 6 4M6 16l6 4 6-4" />
          </svg>
        </div>
        <div className="absolute bottom-[25%] left-[10%] opacity-10 animate-float-slow delay-2000">
          <svg className="w-8 h-8 text-white/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M12 4v16M6 8l6-4 6 4M6 16l6 4 6-4" />
          </svg>
        </div>

        {/* Shimmering Particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.4 + 0.1
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        
        {/* Modern Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 shadow-2xl mb-5 animate-slide-down">
          <Sparkles className="w-3 h-3 text-blue-300" />
          <span className="text-xs font-medium tracking-wide text-white/90">
            ✝️ A Place of Grace & Hope
          </span>
          <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
        </div>

        {/* Animated Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-up">
          <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
            Where Faith
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-200 via-white to-blue-100 bg-clip-text text-transparent drop-shadow-2xl">
            Meets Community
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-sm md:text-base max-w-2xl mx-auto mt-4 text-white/80 animate-fade-up delay-100">
          Join us for uplifting worship, authentic fellowship, and life-changing messages.
          <span className="block text-blue-200 text-xs mt-1 font-light tracking-wide">Everyone is welcome ✨</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mt-6 animate-fade-up delay-200">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 px-5 py-2.5 rounded-full font-semibold shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-2 text-xs"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Plan Your Visit</span>
            <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a
            href="#sermons"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("sermons")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group relative overflow-hidden bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 px-5 py-2.5 rounded-full font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2 text-xs"
          >
            <Play className="w-3.5 h-3.5" />
            <span>Watch Online</span>
          </a>

          <a
            href="#live-stream"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("live-stream")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group relative overflow-hidden bg-gradient-to-r from-emerald-600/30 to-blue-600/30 backdrop-blur-md border border-emerald-400/50 hover:border-emerald-400/80 px-5 py-2.5 rounded-full font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2 text-xs"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-75"></div>
              <div className="relative w-1.5 h-1.5 bg-red-500 rounded-full"></div>
            </div>
            <span>Live Now • 142 watching</span>
          </a>
        </div>

        {/* Social Proof / Stats Section */}
        <div className="flex flex-wrap justify-center gap-6 mt-10 pt-6">
          <div className="text-center px-4 py-2 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
            <div className="text-xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">2,500+</div>
            <div className="text-xs text-white/60">Weekly Members</div>
          </div>
          <div className="text-center px-4 py-2 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
            <div className="text-xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">15+</div>
            <div className="text-xs text-white/60">Ministries</div>
          </div>
          <div className="text-center px-4 py-2 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
            <div className="text-xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">50+</div>
            <div className="text-xs text-white/60">Years Serving</div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full z-10">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12 md:h-16">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 0.15 }} />
              <stop offset="100%" style={{ stopColor: '#ffffff', stopOpacity: 0 }} />
            </linearGradient>
          </defs>
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z"
            fill="url(#waveGradient)"
          />
        </svg>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-5 h-8 border border-white/30 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-0.5 h-1.5 bg-white/60 rounded-full mt-2 animate-scroll"></div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-10px) translateX(5px);
          }
        }
        
        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(6px);
            opacity: 0;
          }
        }
        
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.5);
          }
        }
        
        .animate-fade-up {
          animation: fadeUp 0.8s ease-out forwards;
        }
        
        .animate-slide-down {
          animation: slideDown 0.6s ease-out forwards;
        }
        
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        
        .animate-scroll {
          animation: scroll 1.5s ease-in-out infinite;
        }
        
        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
        
        .delay-100 {
          animation-delay: 0.1s;
        }
        
        .delay-200 {
          animation-delay: 0.2s;
        }
        
        .delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default Hero;