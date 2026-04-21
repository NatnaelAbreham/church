// components/Leadership.jsx
import { useState, useEffect } from "react";
import { X } from "lucide-react";

import * as SiIcons from "react-icons/si";
import * as LuIcons from "react-icons/lu";

const Leadership = () => {
  const [selectedLeader, setSelectedLeader] = useState(null);
  const [filter, setFilter] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const linkedinIcon =
  SiIcons.SiLinkedin ??
  SiIcons.SiLinkedIn ??
  null;

const iconMap = {
  twitter: SiIcons.SiX || SiIcons.SiTwitter,
  linkedin: linkedinIcon,
  instagram: SiIcons.SiInstagram,
  email: LuIcons.LuMail,
};

  
  useEffect(() => {
    setIsClient(true);
  }, []);

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
    {
      id: 5,
      name: "Sarah Martinez",
      title: "Youth & Young Adults Pastor",
      category: "youth",
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=600",
      bio: "Sarah has grown the youth ministry from 30 to over 200 students through innovative programs and mentorship initiatives.",
      education: [
        "M.A. in Youth Ministry - Azusa Pacific University",
        "B.A. in Psychology - UCLA"
      ],
      favoriteVerse: "1 Timothy 4:12 - 'Don't let anyone look down on you because you are young...'",
      hobbies: ["Coffee", "Hiking", "Podcasting"],
      socialLinks: {
        instagram: "https://instagram.com",
        twitter: "https://twitter.com",
        email: "sarah@gracecovenant.org"
      },
      yearsAtChurch: 5,
      family: "Single"
    },
    {
      id: 6,
      name: "Deacon James Wilson",
      title: "Community Outreach Director",
      category: "outreach",
      image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600",
      bio: "James leads the church's community initiatives including food pantry, homeless outreach, and international missions.",
      education: [
        "B.A. in Social Work - University of Texas",
        "Certificate in Nonprofit Management - Harvard Extension"
      ],
      favoriteVerse: "Matthew 25:40 - 'Whatever you did for one of the least of these...'",
      hobbies: ["Running", "Cooking", "Volunteering"],
      socialLinks: {
        linkedin: "https://linkedin.com",
        email: "james@gracecovenant.org"
      },
      yearsAtChurch: 9,
      family: "Married to Rachel with 4 children"
    },
    {
      id: 7,
      name: "Dr. Emily Foster",
      title: "Counseling & Care Pastor",
      category: "care",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
      bio: "Dr. Emily is a licensed clinical psychologist who leads the church's care ministry, offering pastoral counseling and support groups.",
      education: [
        "Psy.D. in Clinical Psychology - Biola University",
        "M.A. in Pastoral Care - Denver Seminary"
      ],
      favoriteVerse: "Psalm 34:18 - 'The Lord is close to the brokenhearted...'",
      hobbies: ["Reading", "Gardening", "Playing Piano"],
      socialLinks: {
        linkedin: "https://linkedin.com",
        email: "emily@gracecovenant.org"
      },
      yearsAtChurch: 6,
      family: "Married to Mark"
    },
    {
      id: 8,
      name: "Deacon Maria Garcia",
      title: "Children's Ministry Director",
      category: "children",
      image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=600",
      bio: "Maria brings creativity and passion to children's ministry, serving over 300 families weekly.",
      education: [
        "B.A. in Early Childhood Education - Texas State University",
        "Certificate in Children's Ministry - Azusa Pacific"
      ],
      favoriteVerse: "Proverbs 22:6 - 'Train up a child in the way he should go...'",
      hobbies: ["Arts & Crafts", "Storytelling", "Music"],
      socialLinks: {
        instagram: "https://instagram.com",
        email: "maria@gracecovenant.org"
      },
      yearsAtChurch: 4,
      family: "Married to Carlos with 2 children"
    }
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
    <section id="leadership" className="relative py-24 sm:py-28 px-4 sm:px-6 overflow-hidden">
      {/* Consistent Background from Newsletter Page - Stone/Dark Theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900">
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
          <div className="inline-flex items-center gap-2 bg-amber-500/10 backdrop-blur-sm px-4 sm:px-5 py-1.5 sm:py-2 rounded-full mb-5 border border-amber-500/20">
            <i className="fas fa-crown text-amber-400 text-xs sm:text-sm"></i>
            <span className="text-amber-300 font-semibold tracking-wide uppercase text-[10px] sm:text-xs">Godly Leadership</span>
            <i className="fas fa-star text-amber-400 text-xs sm:text-sm"></i>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
              Leadership Team
            </span>
          </h2>
          
          {/* Warm accent divider */}
          <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full mb-6"></div>
          
          <p className="text-stone-300 max-w-2xl mx-auto text-base sm:text-lg">
            Spirit-led leaders committed to serving God's people with integrity, wisdom, and love
          </p>
        </div>

        {/* Category Filters - Glassmorphism with warm accent on active */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`group flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full transition-all duration-300 text-xs sm:text-sm ${
                filter === cat.id
                  ? "bg-amber-500 text-white shadow-lg shadow-amber-500/25 scale-105"
                  : "bg-white/5 backdrop-blur-sm text-white/70 hover:bg-white/10 border border-white/10"
              }`}
            >
              <i className={`fas ${cat.icon} text-[10px] sm:text-sm ${filter === cat.id ? "text-white" : "text-amber-400 group-hover:text-amber-300"}`}></i>
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
              <div className="relative bg-stone-800/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-stone-700/50 hover:border-amber-500/30 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/10">
                {/* Image Container */}
                <div className="relative overflow-hidden h-64">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
                  
                  {/* Role Badge - Warm accent */}
                  <div className="absolute top-4 right-4 bg-amber-500/90 backdrop-blur-sm px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold text-white shadow-lg">
                    {leader.title}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 text-center">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-amber-400 transition-colors">
                    {leader.name}
                  </h3>
                  <p className="text-amber-400 text-xs sm:text-sm mb-4">{leader.title}</p>
                  
                  {/* Quick Stats - Subtle */}
                  <div className="flex justify-center gap-3 sm:gap-4 text-white/40 text-[10px] sm:text-xs mb-4">
                    <div className="flex items-center gap-1">
                      <i className="fas fa-calendar-alt text-amber-400 text-[8px] sm:text-xs"></i>
                      <span>{leader.yearsAtChurch}+ yrs</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <i className="fas fa-heart text-amber-400 text-[8px] sm:text-xs"></i>
                      <span className="capitalize">{leader.category}</span>
                    </div>
                  </div>

                  {/* Social Icons - Appear on hover */}
                  <div className="flex justify-center gap-2 sm:gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    {Object.keys(leader.socialLinks).map((platform) => (
                      <div
                        key={platform}
                        className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-amber-500 transition-colors cursor-pointer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <i className={`fab fa-${platform} text-white/70 text-[10px] sm:text-xs`}></i>
                      </div>
                    ))}
                  </div>

                  {/* View Details - Warm accent */}
                  <div className="mt-3 sm:mt-4 inline-flex items-center gap-1 text-amber-400 text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span>View Profile</span>
                    <i className="fas fa-arrow-right text-[10px] sm:text-xs group-hover:translate-x-1 transition-transform"></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredLeaders.length === 0 && (
          <div className="text-center py-16">
            <i className="fas fa-users-slash text-5xl sm:text-6xl text-white/20 mb-4"></i>
            <p className="text-stone-300 text-base sm:text-lg">No leaders found in this category</p>
          </div>
        )}

        {/* Leadership Values Section - Glass Cards with Warm Accent on Hover */}
        <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
          {[
            { icon: "fa-bible", title: "Biblically Grounded", desc: "All leadership decisions rooted in Scripture and prayerful discernment" },
            { icon: "fa-hand-holding-heart", title: "Servant Leadership", desc: "Leading with humility, grace, and a heart for God's people" },
            { icon: "fa-chart-line", title: "Vision-Driven", desc: "Committed to advancing God's kingdom with excellence and innovation" }
          ].map((value, idx) => (
            <div key={idx} className="group bg-stone-800/40 backdrop-blur-sm rounded-2xl p-6 border border-stone-700/50 text-center hover:border-amber-500/30 transition-all duration-300">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-amber-500/10 to-amber-600/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <i className={`fas ${value.icon} text-amber-400 text-xl sm:text-2xl`}></i>
              </div>
              <h3 className="text-white font-bold text-base sm:text-lg mb-2">{value.title}</h3>
              <p className="text-stone-300 text-xs sm:text-sm">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal - Detailed View */}
      {isClient && isModalOpen && selectedLeader && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md" onClick={closeModal}>
          <div className="relative max-w-4xl w-full bg-gradient-to-br from-stone-800 to-stone-900 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-amber-500/30 animate-fade-up" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeModal} className="absolute top-4 right-4 sm:top-6 sm:right-6 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/50 text-white hover:bg-amber-500 transition-colors z-10 flex items-center justify-center">

              <X className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </button>
            
            <div className="grid md:grid-cols-2">
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
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">{selectedLeader.name}</h2>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-stone-300 text-xs sm:text-sm">
                    <span className="flex items-center gap-1"><i className="fas fa-calendar-alt text-amber-400 text-[10px] sm:text-xs"></i> {selectedLeader.yearsAtChurch} years at GCC</span>
                    <span className="flex items-center gap-1"><i className="fas fa-user-friends text-amber-400 text-[10px] sm:text-xs"></i> {selectedLeader.family}</span>
                  </div>
                </div>

                <div className="mb-5 sm:mb-6">
                  <h3 className="text-amber-400 font-semibold mb-2 text-sm sm:text-base flex items-center gap-2"><i className="fas fa-user-graduate text-xs sm:text-sm"></i> Biography</h3>
                  <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">{selectedLeader.bio}</p>
                </div>

                <div className="mb-5 sm:mb-6">
                  <h3 className="text-amber-400 font-semibold mb-2 text-sm sm:text-base flex items-center gap-2"><i className="fas fa-graduation-cap text-xs sm:text-sm"></i> Education</h3>
                  <ul className="space-y-1">
                    {selectedLeader.education.map((edu, idx) => (
                      <li key={idx} className="text-stone-300 text-xs sm:text-sm flex items-start gap-2">
                        <i className="fas fa-check-circle text-amber-400 text-[8px] sm:text-xs mt-1"></i>
                        <span>{edu}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-5 sm:mb-6">
                  <h3 className="text-amber-400 font-semibold mb-2 text-sm sm:text-base flex items-center gap-2"><i className="fas fa-heart text-xs sm:text-sm"></i> Favorite Verse</h3>
                  <p className="text-stone-300 text-xs sm:text-sm italic bg-white/5 p-3 rounded-xl">{selectedLeader.favoriteVerse}</p>
                </div>

                {/* <div>
                  <h3 className="text-amber-400 font-semibold mb-2 text-sm sm:text-base flex items-center gap-2"><i className="fas fa-share-alt text-xs sm:text-sm"></i> Connect</h3>
                  <div className="flex gap-2 sm:gap-3">
                    {Object.entries(leader.socialLinks).map(([platform, url]) => {
  const Icon = iconMap[platform];

  return (
    <div
      key={platform}
      className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-amber-500 transition-colors cursor-pointer"
      onClick={(e) => e.stopPropagation()}
    >
      {Icon && <Icon className="w-4 h-4 text-white/70" />}
    </div>
  );
})}
                  </div>
                </div> */}

                {/* Replace this section in the modal */}
<div>
  <h3 className="text-amber-400 font-semibold mb-2 text-sm sm:text-base flex items-center gap-2">
    <i className="fas fa-share-alt text-xs sm:text-sm"></i> 
    Connect
  </h3>
  <div className="flex gap-2 sm:gap-3">
    {Object.entries(selectedLeader.socialLinks).map(([platform, url]) => {
      const Icon = iconMap[platform];
      
      return (
        <a
          key={platform}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-amber-500 transition-colors cursor-pointer"
          onClick={(e) => e.stopPropagation()}
        >
          {Icon && <Icon className="w-4 h-4 text-white/70" />}
        </a>
      );
    })}
  </div>
</div>
             
              </div>
            </div>
          </div>
        </div>
      )}

     <style>{`
  @keyframes fade-up {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .animate-fade-up {
    animation: fade-up 0.5s ease-out forwards;
  }
`}</style>
    </section>
  );
};

export default Leadership;