// components/Gallery.jsx
import { useState, useEffect } from "react";
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
  faHeart,
  faComment,
  faSearchPlus,
  faChevronLeft,
  faChevronRight,
  faTimes,
  faShareAlt,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [filteredImages, setFilteredImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 9;

  const categories = [
    { id: "all", label: "All Moments", icon: faImages, count: 0 },
    { id: "worship", label: "Worship", icon: faMusic, count: 0 },
    { id: "community", label: "Community", icon: faUsers, count: 0 },
    { id: "events", label: "Events", icon: faCalendarAlt, count: 0 },
    { id: "youth", label: "Youth", icon: faChild, count: 0 },
    { id: "missions", label: "Missions", icon: faGlobe, count: 0 },
    { id: "baptism", label: "Baptism", icon: faWater, count: 0 },
    { id: "volunteer", label: "Volunteer", icon: faHandsHelping, count: 0 }
  ];

  const galleryImages = [
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
    categories.forEach(cat => {
      if (cat.id === "all") {
        cat.count = galleryImages.length;
      } else {
        cat.count = galleryImages.filter(img => img.category === cat.id).length;
      }
    });
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
    <section id="gallery" className="py-28 px-6 theme-section relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-amber-400/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm px-5 py-2 rounded-full mb-5 theme-border">
            <FontAwesomeIcon icon={faCamera} className="theme-accent text-sm" />
            <span className="theme-accent font-semibold tracking-wide uppercase text-xs">Our Story in Pictures</span>
            <FontAwesomeIcon icon={faImages} className="theme-accent text-sm" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold theme-heading mb-4">
            <span className="theme-accent">Ministry Gallery</span>
          </h2>
          <div className="w-28 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full mb-6"></div>
          <p className="theme-text max-w-2xl mx-auto text-lg">
            Capturing moments of worship, fellowship, and service in our church family
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`group flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300 ${
                selectedCategory === cat.id
                  ? "theme-button shadow-lg scale-105"
                  : "theme-soft-card theme-text hover:opacity-80"
              }`}
            >
              <FontAwesomeIcon icon={cat.icon} className="text-sm" />
              <span className="text-sm font-medium">{cat.label}</span>
              <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                selectedCategory === cat.id ? "bg-white/20 text-white" : "theme-soft-card theme-accent"
              }`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Masonry Gallery Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 mb-12">
          {currentImages.map((image) => (
            <div
              key={image.id}
              className="break-inside-avoid group cursor-pointer relative overflow-hidden rounded-2xl theme-card hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
              onClick={() => openLightbox(image)}
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
                  <div className="theme-card backdrop-blur-sm rounded-xl p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="font-bold theme-heading text-lg mb-1">{image.title}</h3>
                    <p className="theme-text text-sm mb-3 line-clamp-2">{image.description}</p>
                    <div className="flex items-center justify-between text-xs theme-muted">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1"><FontAwesomeIcon icon={faHeart} className="theme-accent" /> {image.likes}</span>
                        <span className="flex items-center gap-1"><FontAwesomeIcon icon={faComment} className="theme-accent" /> {image.comments}</span>
                      </div>
                      <span className="flex items-center gap-1"><FontAwesomeIcon icon={faCalendarAlt} /> {formatDate(image.date)}</span>
                    </div>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 theme-button backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {categories.find(c => c.id === image.category)?.label}
                </div>

                {/* Zoom Icon */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100">
                  <div className="w-12 h-12 theme-card rounded-full flex items-center justify-center shadow-lg">
                    <FontAwesomeIcon icon={faSearchPlus} className="theme-accent text-xl" />
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
                  ? "theme-soft-card theme-muted cursor-not-allowed opacity-50"
                  : "theme-soft-card theme-accent hover:theme-button hover:text-white shadow-md"
              }`}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
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
                        ? "theme-button shadow-md"
                        : "theme-soft-card theme-text hover:opacity-80"
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
                  ? "theme-soft-card theme-muted cursor-not-allowed opacity-50"
                  : "theme-soft-card theme-accent hover:theme-button hover:text-white shadow-md"
              }`}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        )}

        {/* SIMPLE CENTERED LIGHTBOX - Fixed scrollbar and close button */}
        {isLightboxOpen && selectedImage && (
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/85"
            onClick={closeLightbox}
          >
            {/* Modal */}
            <div
              className="relative max-w-6xl w-full max-h-[90vh] theme-soft-card rounded-2xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button - Moved to top left of image area */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 left-4 z-10 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors flex items-center justify-center backdrop-blur-sm"
              >
                <FontAwesomeIcon icon={faTimes} className="text-xl" />
              </button>

              {/* Content - Responsive layout */}
              <div className="flex flex-col md:flex-row">
                {/* Image section */}
                <div className="flex-1 bg-black/50 flex items-center justify-center p-6 md:p-8 relative">
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="max-w-full max-h-[50vh] md:max-h-[75vh] w-auto h-auto object-contain rounded-lg"
                  />
                </div>

                {/* Info section - with better scrollbar visibility */}
                <div className="w-full md:w-96 theme-soft-card flex flex-col">
                  {/* Navigation */}
                  <div className="flex justify-between items-center p-6 pb-0">
                    <button
                      onClick={prevImage}
                      className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center justify-center"
                    >
                      <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <span className="theme-muted text-sm">
                      {filteredImages.findIndex(img => img.id === selectedImage.id) + 1} / {filteredImages.length}
                    </span>
                    <button
                      onClick={nextImage}
                      className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center justify-center"
                    >
                      <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                  </div>

                  {/* Details with improved scrollbar styling */}
                  <div
                    className="flex-1 overflow-y-auto p-6 pt-4"
                    style={{
                      maxHeight: 'calc(75vh - 80px)',
                      scrollbarWidth: 'thin',
                      scrollbarColor: '#f59e0b #1f2937'
                    }}
                  >
                    <h3 className="text-2xl font-bold theme-heading mb-3">{selectedImage.title}</h3>
                    <p className="theme-text text-sm mb-6 leading-relaxed">{selectedImage.description}</p>

                    <div className="space-y-3 mb-8">
                      <div className="flex items-center gap-3 theme-muted text-sm">
                        <FontAwesomeIcon icon={faCalendarAlt} className="theme-accent w-4" />
                        <span>{formatDate(selectedImage.date)}</span>
                      </div>
                      <div className="flex items-center gap-3 theme-muted text-sm">
                        <FontAwesomeIcon icon={faCamera} className="theme-accent w-4" />
                        <span>{selectedImage.photographer}</span>
                      </div>
                      <div className="flex items-center gap-3 theme-muted text-sm">
                        <FontAwesomeIcon icon={faHeart} className="text-red-400 w-4" />
                        <span>{selectedImage.likes} likes</span>
                      </div>
                      <div className="flex items-center gap-3 theme-muted text-sm">
                        <FontAwesomeIcon icon={faComment} className="theme-accent w-4" />
                        <span>{selectedImage.comments} comments</span>
                      </div>
                    </div>

                    <button className="w-full flex items-center justify-center gap-2 px-4 py-3 theme-button rounded-xl transition-colors text-sm font-semibold">
                      <FontAwesomeIcon icon={faShareAlt} /> Share This Moment
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
            <button className="inline-flex items-center gap-3 theme-button px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
              <span>Load More Photos</span>
              <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;