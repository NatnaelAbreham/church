// components/Gallery.jsx
import { useState, useEffect } from "react";
import '../css/gallery.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faImages,
  faMusic,
  faUsers,
  faCalendarAlt,
  faChild,
  faGlobe,
  faWater,
  faHandsHelping,
  faCamera,
  faVideo, 
     
} from "@fortawesome/free-solid-svg-icons";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [filteredImages, setFilteredImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 9;

  const categories = [
  { id: "all", label: "All Moments", icon: faImages/* , count: 0 */ },
  { id: "worship", label: "Worship", icon: faMusic/* , count: 0 */ },
  { id: "community", label: "Community", icon: faUsers/* , count: 0 */ },
  { id: "events", label: "Events", icon: faCalendarAlt/* , count: 0 */ },
  { id: "youth", label: "Youth", icon: faChild/* , count: 0 */ },
  { id: "missions", label: "Missions", icon: faGlobe/* , count: 0 */ },
  { id: "baptism", label: "Baptism", icon: faWater/* , count: 0 */ },
  { id: "volunteer", label: "Volunteer", icon: faHandsHelping/* , count: 0 */ }
];
  const galleryImages = [
    // Worship Category
   /*  {
      id: 1,
      title: "Sunday Morning Worship",
      description: "Our congregation lifting voices in praise during the 11AM contemporary service.",
      category: "worship",
      image: "https://images.pexels.com/photos/2606355/pexels-photo-2606355.jpeg?auto=compress&cs=tinysrgb&w=800",
      thumbnail: "https://images.pexels.com/photos/2606355/pexels-photo-2606355.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "March 15, 2026",
      photographer: "Sarah Williams",
      likes: 245,
      comments: 18
    },
    {
      id: 2,
      title: "Worship Team Rehearsal",
      description: "Preparing hearts and voices for Sunday worship.",
      category: "worship",
      image: "https://images.pexels.com/photos/1383622/pexels-photo-1383622.jpeg?auto=compress&cs=tinysrgb&w=800",
      thumbnail: "https://images.pexels.com/photos/1383622/pexels-photo-1383622.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "March 12, 2026",
      photographer: "Michael Chen",
      likes: 128,
      comments: 7
    }, */
    {
      id: 3,
      title: "Christmas Candlelight Service",
      description: "Beautiful evening of carols and candle lighting celebrating the birth of Jesus.",
      category: "worship",
      image: "https://images.pexels.com/photos/8474833/pexels-photo-8474833.jpeg?auto=compress&cs=tinysrgb&w=800",
      thumbnail: "https://images.pexels.com/photos/8474833/pexels-photo-8474833.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "December 24, 2025",
      photographer: "David O'Connor",
      likes: 512,
      comments: 34
    },
    // Community Category
    {
      id: 4,
      title: "Community Picnic",
      description: "Annual church family picnic with games, food, and fellowship.",
      category: "community",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800",
      thumbnail: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "October 10, 2025",
      photographer: "Emily Foster",
      likes: 189,
      comments: 12
    },
    {
      id: 5,
      title: "Fellowship Dinner",
      description: "Monthly potluck bringing our church family together around the table.",
      category: "community",
      image: "https://images.pexels.com/photos/6646862/pexels-photo-6646862.jpeg?auto=compress&cs=tinysrgb&w=800",
      thumbnail: "https://images.pexels.com/photos/6646862/pexels-photo-6646862.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "February 22, 2026",
      photographer: "James Wilson",
      likes: 156,
      comments: 9
    },
    {
      id: 6,
      title: "Small Group Gathering",
      description: "Intimate Bible study and prayer time in homes across the city.",
      category: "community",
      image: "https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=800",
      thumbnail: "https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "March 5, 2026",
      photographer: "Robert Chen",
      likes: 98,
      comments: 5
    },
    // Events Category
    {
      id: 7,
      title: "Easter Celebration",
      description: "Joyful resurrection celebration with sunrise service and breakfast.",
      category: "events",
      image: "https://images.pexels.com/photos/8535571/pexels-photo-8535571.jpeg?auto=compress&cs=tinysrgb&w=800",
      thumbnail: "https://images.pexels.com/photos/8535571/pexels-photo-8535571.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "April 20, 2025",
      photographer: "Sarah Martinez",
      likes: 423,
      comments: 28
    },
    {
      id: 8,
      title: "Women's Conference",
      description: "Empowering weekend of worship, teaching, and connection for women.",
      category: "events",
      image: "https://images.pexels.com/photos/5697240/pexels-photo-5697240.jpeg?auto=compress&cs=tinysrgb&w=800",
      thumbnail: "https://images.pexels.com/photos/5697240/pexels-photo-5697240.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "November 8, 2025",
      photographer: "Jennifer Williams",
      likes: 267,
      comments: 21
    },
    // Youth Category
    {
      id: 9,
      title: "Youth Summer Camp",
      description: "Week of adventure, worship, and spiritual growth for our teens.",
      category: "youth",
      image: "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=800",
      thumbnail: "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "July 15, 2025",
      photographer: "David O'Connor",
      likes: 345,
      comments: 31
    },
    {
      id: 10,
      title: "Youth Game Night",
      description: "Fun fellowship night with games, pizza, and friendship.",
      category: "youth",
      image: "https://images.pexels.com/photos/1263349/pexels-photo-1263349.jpeg?auto=compress&cs=tinysrgb&w=800",
      thumbnail: "https://images.pexels.com/photos/1263349/pexels-photo-1263349.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "February 28, 2026",
      photographer: "Sarah Martinez",
      likes: 178,
      comments: 14
    },
    // Missions Category
    {
      id: 11,
      title: "Mission Trip to Guatemala",
      description: "Serving communities through medical clinics and children's programs.",
      category: "missions",
      image: "https://images.pexels.com/photos/7105761/pexels-photo-7105761.jpeg?auto=compress&cs=tinysrgb&w=800",
      thumbnail: "https://images.pexels.com/photos/7105761/pexels-photo-7105761.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "January 20, 2026",
      photographer: "James Wilson",
      likes: 234,
      comments: 19
    },
    {
      id: 12,
      title: "Local Food Pantry",
      description: "Volunteers distributing meals to families in need.",
      category: "missions",
      image: "https://images.pexels.com/photos/6646861/pexels-photo-6646861.jpeg?auto=compress&cs=tinysrgb&w=800",
      thumbnail: "https://images.pexels.com/photos/6646861/pexels-photo-6646861.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "March 1, 2026",
      photographer: "Michael Thompson",
      likes: 167,
      comments: 11
    },
    // Baptism Category
    {
      id: 13,
      title: "Baptism Sunday",
      description: "Celebrating new life in Christ through water baptism.",
      category: "baptism",
      image: "https://images.pexels.com/photos/8474833/pexels-photo-8474833.jpeg?auto=compress&cs=tinysrgb&w=800",
      thumbnail: "https://images.pexels.com/photos/8474833/pexels-photo-8474833.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "February 9, 2026",
      photographer: "Emily Foster",
      likes: 289,
      comments: 23
    },
    // Volunteer Category
    {
      id: 14,
      title: "Volunteer Appreciation",
      description: "Honoring our dedicated volunteers who make ministry possible.",
      category: "volunteer",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
      thumbnail: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "December 5, 2025",
      photographer: "Robert Chen",
      likes: 203,
      comments: 16
    },
    {
      id: 15,
      title: "Church Work Day",
      description: "Members coming together to beautify and maintain our facilities.",
      category: "volunteer",
      image: "https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=800",
      thumbnail: "https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "March 8, 2026",
      photographer: "David O'Connor",
      likes: 112,
      comments: 8
    },
    {
      id: 16,
      title: "Praise and Worship Night",
      description: "Extended worship night with multiple bands and prayer ministry.",
      category: "worship",
      image: "https://images.pexels.com/photos/3768138/pexels-photo-3768138.jpeg?auto=compress&cs=tinysrgb&w=800",
      thumbnail: "https://images.pexels.com/photos/3768138/pexels-photo-3768138.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "January 25, 2026",
      photographer: "Sarah Williams",
      likes: 367,
      comments: 25
    },
    {
      id: 17,
      title: "Community Outreach",
      description: "Serving our neighbors through various outreach initiatives.",
      category: "missions",
      image: "https://images.pexels.com/photos/6646868/pexels-photo-6646868.jpeg?auto=compress&cs=tinysrgb&w=800",
      thumbnail: "https://images.pexels.com/photos/6646868/pexels-photo-6646868.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "February 15, 2026",
      photographer: "James Wilson",
      likes: 198,
      comments: 14
    },
    {
      id: 18,
      title: "Children's Ministry",
      description: "Fun and faith-filled activities for our youngest members.",
      category: "youth",
      image: "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=800",
      thumbnail: "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "March 10, 2026",
      photographer: "Maria Garcia",
      likes: 234,
      comments: 19
    }
  ];

  // Update category counts
  useEffect(() => {
    const counts = {};
    categories.forEach(cat => {
      if (cat.id === "all") {
        counts[cat.id] = galleryImages.length;
      } else {
        counts[cat.id] = galleryImages.filter(img => img.category === cat.id).length;
      }
    });
    categories.forEach(cat => cat.count = counts[cat.id]);
  }, []);

  // Filter images based on selected category
  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredImages(galleryImages);
    } else {
      setFilteredImages(galleryImages.filter(img => img.category === selectedCategory));
    }
    setCurrentPage(1);
  }, [selectedCategory]);

  // Pagination
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = filteredImages.slice(indexOfFirstImage, indexOfLastImage);
  const totalPages = Math.ceil(filteredImages.length / imagesPerPage);

  const openLightbox = (image) => {
    setSelectedImage(image);
    setIsLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight" && isLightboxOpen) nextImage();
      if (e.key === "ArrowLeft" && isLightboxOpen) prevImage();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isLightboxOpen, selectedImage]);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <section id="gallery" className="py-28 px-6 bg-gradient-to-br from-stone-50 via-white to-amber-50/20 relative overflow-hidden">
      {/* Modern 2026 decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-amber-300/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-amber-100/5 to-transparent rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-100/80 backdrop-blur-sm px-5 py-2 rounded-full mb-5 shadow-sm">
            <FontAwesomeIcon icon={faCamera} className="text-amber-600 text-sm" />
            <span className="text-amber-700 font-semibold tracking-wide uppercase text-xs">Our Story in Pictures</span>
            <FontAwesomeIcon icon={faImages} className="text-amber-600 text-sm" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold serif text-stone-800 mb-4">
             <span className="text-amber-600">Ministry Gallery</span>
          </h2>
          <div className="w-28 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full mb-6"></div>
          <p className="text-stone-600 max-w-2xl mx-auto text-lg">
            Capturing moments of worship, fellowship, and service in our church family
          </p>
        </div>

        {/* Category Filters - Modern Scrollable */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`group flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300 ${
                selectedCategory === cat.id
                  ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-500/25 scale-105"
                  : "bg-white text-stone-600 hover:bg-amber-50 border border-stone-200"
              }`}
            >
              <FontAwesomeIcon icon={cat.icon} className="text-sm" />
              <span className="text-sm font-medium">{cat.label}</span>
              <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                selectedCategory === cat.id ? "bg-white/20" : "bg-amber-100 text-amber-700"
              }`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Masonry Gallery Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 mb-12">
          {currentImages.map((image, index) => (
            <div
              key={image.id}
              className="break-inside-avoid group cursor-pointer relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
              onClick={() => openLightbox(image)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={image.thumbnail}
                  alt={image.title}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="font-bold text-stone-800 text-lg mb-1">{image.title}</h3>
                    <p className="text-stone-600 text-sm mb-3 line-clamp-2">{image.description}</p>
                    <div className="flex items-center justify-between text-xs text-stone-500">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1"><i className="fas fa-heart text-amber-500"></i> {image.likes}</span>
                        <span className="flex items-center gap-1"><i className="fas fa-comment text-amber-500"></i> {image.comments}</span>
                      </div>
                      <span className="flex items-center gap-1"><i className="fas fa-calendar-alt"></i> {formatDate(image.date)}</span>
                    </div>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-amber-500/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {categories.find(c => c.id === image.category)?.label}
                </div>

                {/* Zoom Icon */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100">
                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                    <i className="fas fa-search-plus text-amber-600 text-xl"></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-3 mt-8">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                currentPage === 1
                  ? "bg-stone-100 text-stone-400 cursor-not-allowed"
                  : "bg-white text-amber-600 hover:bg-amber-600 hover:text-white shadow-md"
              }`}
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            
            <div className="flex gap-2">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pageNum;
                if (totalPages <= 5) {
                  pageNum = i + 1;
                } else if (currentPage <= 3) {
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i;
                } else {
                  pageNum = currentPage - 2 + i;
                }
                
                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-10 h-10 rounded-full font-medium transition-all ${
                      currentPage === pageNum
                        ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-md"
                        : "bg-white text-stone-600 hover:bg-amber-50"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                currentPage === totalPages
                  ? "bg-stone-100 text-stone-400 cursor-not-allowed"
                  : "bg-white text-amber-600 hover:bg-amber-600 hover:text-white shadow-md"
              }`}
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        )}

        {/* Lightbox Modal */}
        {isLightboxOpen && selectedImage && (
          <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4" onClick={closeLightbox}>
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all flex items-center justify-center"
            >
              <i className="fas fa-times text-2xl"></i>
            </button>
            
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all flex items-center justify-center"
            >
              <i className="fas fa-chevron-left text-2xl"></i>
            </button>
            
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all flex items-center justify-center"
            >
              <i className="fas fa-chevron-right text-2xl"></i>
            </button>
            
            <div className="max-w-5xl w-full max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="mt-6 bg-stone-800/50 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h3>
                <p className="text-stone-300 mb-4">{selectedImage.description}</p>
                <div className="flex flex-wrap items-center justify-between gap-4 text-sm">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-2 text-stone-400">
                      <i className="fas fa-calendar-alt text-amber-400"></i>
                      {formatDate(selectedImage.date)}
                    </span>
                    <span className="flex items-center gap-2 text-stone-400">
                      <i className="fas fa-camera text-amber-400"></i>
                      {selectedImage.photographer}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-2 text-stone-400">
                      <i className="fas fa-heart text-red-400"></i>
                      {selectedImage.likes} likes
                    </span>
                    <span className="flex items-center gap-2 text-stone-400">
                      <i className="fas fa-comment text-amber-400"></i>
                      {selectedImage.comments} comments
                    </span>
                    <button className="flex items-center gap-2 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-full transition-all text-sm">
                      <i className="fas fa-share-alt"></i> Share
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* View More Button */}
        {filteredImages.length > imagesPerPage && (
          <div className="text-center mt-12">
            <button className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
              <span>Load More Photos</span>
              <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </button>
          </div>
        )}
      </div>

      
    </section>
  );
};

export default Gallery;