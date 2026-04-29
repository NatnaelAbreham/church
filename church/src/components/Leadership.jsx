// components/Leadership.jsx
import { useState, useEffect } from "react";
import { X } from "lucide-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope  } from "@fortawesome/free-solid-svg-icons";
import { ArrowRight, Calendar, Users, GraduationCap, Heart, CheckCircle, Share2 } from "lucide-react";
import {
  faUsers,
  faChurch,
  faCrown,
  faHandsHelping,
  faMusic,
  faChild,
  faGlobe,
  faHeart,
  faSmile,
  faStar,
 
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faBible, faHandHoldingHeart, faChartLine } from "@fortawesome/free-solid-svg-icons";


 const iconMap = {
    twitter: faTwitter,
    linkedin: faLinkedin,
    instagram: faInstagram,
    email: faEnvelope,
  };

  const valueIconMap = {
    "fa-bible": faBible,
    "fa-hand-holding-heart": faHandHoldingHeart,
    "fa-chart-line": faChartLine,
  };

  const categoryIconMap = {
  "fa-users": faUsers,
  "fa-church": faChurch,
  "fa-crown": faCrown,
  "fa-hands-helping": faHandsHelping,
  "fa-music": faMusic,
  "fa-child": faChild,
  "fa-globe": faGlobe,
  "fa-heart": faHeart,
  "fa-smile": faSmile,
};

 const leadershipTeam = [
    {
      id: 1,
      name: "Dr. Michael Thompson",
      title: "Senior Pastor",
      category: "pastoral",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
      bio: "Dr. Michael Thompson has been serving as Senior Pastor for over 15 years. He holds a Doctorate in Ministry from Fuller Theological Seminary and has a passion for expository preaching and discipleship.",
      education: [
        "Ph.D. in Ministry - Fuller Theological Seminary",
        "M.Div. - Dallas Theological Seminary",
        "B.A. in Biblical Studies - Moody Bible Institute"
      ],
      favoriteVerse: "Jeremiah 29:11 - 'For I know the plans I have for you...'",
      hobbies: ["Pastoral Counseling", "Writing", "Mentoring"],
      socialLinks: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        email: "michael@gracecovenant.org"
      },
      yearsAtChurch: 18,
      family: "Married to Sarah with 3 children"
    },
    {
      id: 2,
      name: "Pastor Jennifer Williams",
      title: "Executive Pastor",
      category: "pastoral",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600",
      bio: "Pastor Jennifer brings over 12 years of executive leadership experience in ministry, overseeing church operations and strategic planning.",
      education: [
        "M.A. in Organizational Leadership - Wheaton College",
        "B.S. in Business Administration - University of Texas"
      ],
      favoriteVerse: "Proverbs 3:5-6 - 'Trust in the Lord with all your heart...'",
      hobbies: ["Strategic Planning", "Mentoring", "Reading"],
      socialLinks: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        email: "jennifer@gracecovenant.org"
      },
      yearsAtChurch: 10,
      family: "Married to David with 2 children"
    },
    {
      id: 3,
      name: "David O'Connor",
      title: "Worship & Creative Arts Director",
      category: "worship",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
      bio: "David leads a team of over 50 musicians and creatives, having produced 4 worship albums and leading worship internationally.",
      education: [
        "B.M. in Contemporary Worship - Berklee College of Music",
        "Certificate in Worship Studies - Worship Institute"
      ],
      favoriteVerse: "Psalm 150:6 - 'Let everything that has breath praise the Lord...'",
      hobbies: ["Guitar", "Songwriting", "Photography"],
      socialLinks: {
        instagram: "https://instagram.com",
        twitter: "https://twitter.com",
        email: "david@gracecovenant.org"
      },
      yearsAtChurch: 7,
      family: "Single"
    },
    {
      id: 4,
      name: "Elder Robert Chen",
      title: "Elder Board Chairman",
      category: "elder",
      image: "https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg?auto=compress&cs=tinysrgb&w=600",
      bio: "Robert has served as an elder for 8 years, bringing wisdom from his experience as a business executive.",
      education: [
        "MBA - Stanford University",
        "B.S. in Engineering - MIT",
        "Certificate in Biblical Studies - Dallas Seminary"
      ],
      favoriteVerse: "Micah 6:8 - 'Act justly, love mercy, walk humbly...'",
      hobbies: ["Mentoring", "Golf", "Teaching"],
      socialLinks: {
        linkedin: "https://linkedin.com",
        email: "robert@gracecovenant.org"
      },
      yearsAtChurch: 12,
      family: "Married to Linda with 2 adult children"
    },

  ];

  const categories = [
    { id: "all", label: "All Leaders", icon: "fa-users" },
    { id: "pastoral", label: "Pastoral Team", icon: "fa-church" },
    { id: "elder", label: "Elders", icon: "fa-crown" },
    { id: "deacon", label: "Deacons", icon: "fa-hands-helping" },
    { id: "worship", label: "Worship", icon: "fa-music" },
    { id: "youth", label: "Youth", icon: "fa-child" },
    { id: "outreach", label: "Outreach", icon: "fa-globe" },
    { id: "care", label: "Care Ministry", icon: "fa-heart" },
    { id: "children", label: "Children", icon: "fa-smile" }
  ];
const Leadership = () => {
  const [selectedLeader, setSelectedLeader] = useState(null);
  const [filter, setFilter] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

 

  useEffect(() => {
    setIsClient(true);
  }, []);

 

  const filteredLeaders = filter === "all"
    ? leadershipTeam
    : leadershipTeam.filter(leader => leader.category === filter);

  const openModal = (leader) => {
    setSelectedLeader(leader);
    setIsModalOpen(true);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = "hidden";
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedLeader(null);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = "auto";
    }
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") closeModal();
    };

    if (typeof document !== 'undefined') {
      document.addEventListener("keydown", handleEsc);
      return () => document.removeEventListener("keydown", handleEsc);
    }
  }, []);

  return (
    <section
      id="leadership"
      className="theme-section relative py-24 sm:py-28 px-4 sm:px-6 overflow-hidden"
    >
      {/* Consistent Background from Newsletter Page - Stone/Dark Theme */}
      <div className="absolute inset-0 theme-section-secondary">
        {/* Decorative blurs from newsletter */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-amber-400/5 to-transparent rounded-full blur-3xl"></div>
        </div>
        {/* Animated grid pattern from newsletter */}
        <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.02\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header - Warm accent for emphasis (unchanged content) */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 theme-card px-4 sm:px-5 py-1.5 sm:py-2 rounded-full mb-5">
            <FontAwesomeIcon icon={faCrown} className="theme-accent text-xs sm:text-sm" />
            <span className="text-amber-300 font-semibold tracking-wide uppercase text-[10px] sm:text-xs">Godly Leadership</span>
            <FontAwesomeIcon icon={faStar} className="theme-accent text-xs sm:text-sm" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold theme-heading mb-4">

            <span className="theme-gradient-text">
              Meet Our{" "}Leadership Team
            </span>
          </h2>

          {/* Warm accent divider */}
          <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full mb-6"></div>

          <p className="theme-text max-w-2xl mx-auto text-base sm:text-lg">
            Spirit-led leaders committed to serving God's people with integrity, wisdom, and love
          </p>
        </div>

        {/* Category Filters - Glassmorphism with warm accent on active */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`group flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full transition-all duration-300 text-xs sm:text-sm ${filter === cat.id
                  ? "bg-amber-500 theme-heading shadow-lg shadow-amber-500/25 scale-105"
                  : "theme-card theme-text hover:theme-card"
                }`}
            >
              <FontAwesomeIcon
  icon={categoryIconMap[cat.icon]}
  className={`text-[10px] sm:text-sm transition-colors duration-300 ${
    filter === cat.id ? "theme-accent" : "theme-muted group-hover:text-amber-300"
  }`}
/>
              <span className="font-medium">{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Leadership Grid - Glass Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
          {filteredLeaders.map((leader, index) => (
            <div
              key={leader.id}
              onClick={() => openModal(leader)}
              className="group cursor-pointer animate-fade-up"
              style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'backwards' }}
            >
              <div className="relative theme-card rounded-2xl overflow-hidden hover:border-amber-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/10">   {/* Image Container */}
                <div className="relative overflow-hidden h-64">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>

                  {/* Role Badge - Warm accent */}
                  <div className="absolute top-4 right-4 bg-amber-500/90 backdrop-blur-sm px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold theme-heading shadow-lg">
                    {leader.title}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 text-center">
                  <h3 className="text-lg sm:text-xl font-bold theme-heading mb-1 group-hover:theme-accent transition-colors">
                    {leader.name}
                  </h3>
                  <p className="theme-accent text-xs sm:text-sm mb-4">{leader.title}</p>

                  {/* Quick Stats - Subtle */}
                  <div className="flex justify-center gap-3 sm:gap-4 theme-heading/40 text-[10px] sm:text-xs mb-4">
                    <div className="flex items-center gap-1">
                     <FontAwesomeIcon
  icon={faCalendarAlt}
  className="theme-accent text-[8px] sm:text-xs"
/>
                      <span>{leader.yearsAtChurch}+ yrs</span>
                    </div>
                    <div className="flex items-center gap-1">
                     <FontAwesomeIcon
  icon={faHeart}
  className="theme-accent text-[8px] sm:text-xs"
/>
                      <span className="capitalize">{leader.category}</span>
                    </div>
                  </div>

                  {/* Social Icons - Appear on hover */}
                  <div className="flex justify-center gap-2 sm:gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    {Object.keys(leader.socialLinks).map((platform) => (
                      <div
                        key={platform}
                        className="w-7 h-7 sm:w-8 sm:h-8 rounded-full theme-card flex items-center justify-center hover:bg-amber-500 transition-colors cursor-pointer"
                        onClick={(e) => e.stopPropagation()}
                      >
                       <FontAwesomeIcon
  icon={iconMap[platform]}
  className="text-[10px] sm:text-xs text-gray-700/70 hover:text-amber-400 transition-colors"
/>
                      </div>
                    ))}
                  </div>

                  {/* View Details - Warm accent */}
                  <div className="mt-3 sm:mt-4 inline-flex items-center gap-1 theme-accent text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span>View Profile</span>
                   <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform theme-accent" />   </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredLeaders.length === 0 && (
          <div className="text-center py-16">
           <UsersX className="w-12 h-12 sm:w-16 sm:h-16 theme-muted mb-4" />
            <p className="theme-text text-base sm:text-lg">No leaders found in this category</p>
          </div>
        )}

        {/* Leadership Values Section - Glass Cards with Warm Accent on Hover */}
        <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
          {[
            { icon: "fa-bible", title: "Biblically Grounded", desc: "All leadership decisions rooted in Scripture and prayerful discernment" },
            { icon: "fa-hand-holding-heart", title: "Servant Leadership", desc: "Leading with humility, grace, and a heart for God's people" },
            { icon: "fa-chart-line", title: "Vision-Driven", desc: "Committed to advancing God's kingdom with excellence and innovation" }
          ].map((value, idx) => (
            <div key={idx} className="group theme-card rounded-2xl p-6  text-center hover:border-amber-500/30 transition-all duration-300">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-amber-500/10 to-amber-600/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">

                <FontAwesomeIcon
                  icon={valueIconMap[value.icon]}
                  className="theme-accent text-xl sm:text-2xl"
                />
              </div>
              <h3 className="theme-heading font-bold text-base sm:text-lg mb-2">{value.title}</h3>
              <p className="theme-text text-xs sm:text-sm">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal - Detailed View */}
      {isClient && isModalOpen && selectedLeader && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md" onClick={closeModal}>
          {/* <div className="relative max-w-4xl w-full theme-section-secondary rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-amber-500/30 animate-fade-up" onClick={(e) => e.stopPropagation()}>
         */}
          <div className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto theme-section-secondary rounded-2xl sm:rounded-3xl shadow-2xl border border-amber-500/30 animate-fade-up">
            <button onClick={closeModal} className="absolute top-3 right-3 sm:top-6 sm:right-6 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/60 theme-heading hover:bg-amber-500 transition-colors z-20 flex items-center justify-center">

              <X className="w-4 h-4 sm:w-5 sm:h-5 theme-heading" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left - Image */}
              <div className="relative h-80 md:h-full min-h-[350px]">
                <img src={selectedLeader.image} alt={selectedLeader.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent"></div>
              </div>

              {/* Right - Details */}
              <div className="p-6 sm:p-8 md:p-10">
                <div className="mb-5 sm:mb-6">
                  <span className="inline-block px-2.5 sm:px-3 py-1 bg-amber-500/20 text-amber-300 rounded-full text-[10px] sm:text-xs font-semibold mb-3">
                    {selectedLeader.title}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold theme-heading mb-2">{selectedLeader.name}</h2>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 theme-text text-xs sm:text-sm">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 theme-accent" /> {selectedLeader.yearsAtChurch} years at GCC</span>
                    <span className="flex items-center gap-1"><Users className="w-3 h-3 sm:w-3.5 sm:h-3.5 theme-accent" /> {selectedLeader.family}</span>
                  </div>
                </div>

                <div className="mb-5 sm:mb-6">
                  <h3 className="theme-accent font-semibold mb-2 text-sm sm:text-base flex items-center gap-2"><GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4 theme-accent" /> Biography</h3>
                  <p className="theme-text text-xs sm:text-sm leading-relaxed">{selectedLeader.bio}</p>
                </div>

                <div className="mb-5 sm:mb-6">
                  <h3 className="theme-accent font-semibold mb-2 text-sm sm:text-base flex items-center gap-2"><GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4 theme-accent" /> Education</h3>
                  <ul className="space-y-1">
                    {selectedLeader.education.map((edu, idx) => (
                      <li key={idx} className="theme-text text-xs sm:text-sm flex items-start gap-2">
                       <CheckCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 theme-accent mt-1" />
                        <span>{edu}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-5 sm:mb-6">
                  <h3 className="theme-accent font-semibold mb-2 text-sm sm:text-base flex items-center gap-2"><Heart className="w-3 h-3 sm:w-3.5 sm:h-3.5 theme-accent" /> Favorite Verse</h3>
                  <p className="theme-text text-xs sm:text-sm italic theme-soft-card p-3 rounded-xl">{selectedLeader.favoriteVerse}</p>
                </div>

                {/* <div>
                  <h3 className="theme-accent font-semibold mb-2 text-sm sm:text-base flex items-center gap-2"><i className="fas fa-share-alt text-xs sm:text-sm"></i> Connect</h3>
                  <div className="flex gap-2 sm:gap-3">
                    {Object.entries(leader.socialLinks).map(([platform, url]) => {
  const Icon = iconMap[platform];

  return (
    <div
      key={platform}
      className="w-7 h-7 sm:w-8 sm:h-8 rounded-full theme-card flex items-center justify-center hover:bg-amber-500 transition-colors cursor-pointer"
      onClick={(e) => e.stopPropagation()}
    >
      {Icon && <Icon className="w-4 h-4 theme-heading/70" />}
    </div>
  );
})}
                  </div>
                </div> */}

                {/* Replace this section in the modal */}
                <div>
                  <h3 className="theme-accent font-semibold mb-2 text-sm sm:text-base flex items-center gap-2">
                    <Share2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 theme-accent" />
                    Connect
                  </h3>
                  <div className="flex gap-2 sm:gap-3">
                    {Object.entries(selectedLeader.socialLinks).map(([platform, url]) => {
                      const icon = iconMap[platform];

                      return (
                        <div
                          key={platform}
                          className="w-8 h-8 rounded-full theme-card flex items-center justify-center hover:bg-amber-500 transition-colors cursor-pointer"
                        >
                          <FontAwesomeIcon icon={icon} className="theme-heading/80 text-sm" />
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}

      
    </section>
  );
};

export default Leadership;