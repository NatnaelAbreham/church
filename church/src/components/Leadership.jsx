// components/Leadership.jsx
import { useState, useEffect } from "react";

const Leadership = () => {
  const [selectedLeader, setSelectedLeader] = useState(null);
  const [filter, setFilter] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Ensure we're on client side before accessing document
  useEffect(() => {
    setIsClient(true);
  }, []);

  

  const leadershipTeam = [
    {
      id: 1,
      name: "Dr. Michael Thompson",
      title: "Senior Pastor",
      role: "leadership",
      category: "pastoral",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
      bio: "Dr. Michael Thompson has been serving as Senior Pastor for over 15 years. He holds a Doctorate in Ministry from Fuller Theological Seminary and has a passion for expository preaching and discipleship. Under his leadership, the church has grown from 200 to over 2,500 members while maintaining a strong focus on community outreach and biblical teaching.",
      education: [
        "Ph.D. in Ministry - Fuller Theological Seminary",
        "M.Div. - Dallas Theological Seminary",
        "B.A. in Biblical Studies - Moody Bible Institute"
      ],
      favoriteVerse: "Jeremiah 29:11 - 'For I know the plans I have for you, declares the Lord...'",
      hobbies: ["Pastoral Counseling", "Writing", "Mentoring Young Leaders"],
      socialLinks: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        email: "michael.thompson@gracecovenant.org"
      },
      yearsAtChurch: 18,
      family: "Married to Sarah with 3 children"
    },
    {
      id: 2,
      name: "Pastor Jennifer Williams",
      title: "Executive Pastor",
      role: "leadership",
      category: "pastoral",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600",
      bio: "Pastor Jennifer brings over 12 years of executive leadership experience in ministry. She oversees church operations, strategic planning, and staff development. Her background in organizational leadership from Wheaton College has been instrumental in the church's growth and efficiency.",
      education: [
        "M.A. in Organizational Leadership - Wheaton College",
        "B.S. in Business Administration - University of Texas"
      ],
      favoriteVerse: "Proverbs 3:5-6 - 'Trust in the Lord with all your heart...'",
      hobbies: ["Strategic Planning", "Mentoring", "Reading"],
      socialLinks: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        email: "jennifer.williams@gracecovenant.org"
      },
      yearsAtChurch: 10,
      family: "Married to David with 2 children"
    },
    {
      id: 3,
      name: "David O'Connor",
      title: "Worship & Creative Arts Director",
      role: "staff",
      category: "worship",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
      bio: "David leads a team of over 50 musicians and creatives. A graduate of Berklee College of Music, he has produced 4 worship albums and leads worship internationally. His heart is to create atmospheres where people encounter God through artistic expression.",
      education: [
        "B.M. in Contemporary Worship - Berklee College of Music",
        "Certificate in Worship Studies - Worship Institute"
      ],
      favoriteVerse: "Psalm 150:6 - 'Let everything that has breath praise the Lord...'",
      hobbies: ["Guitar", "Songwriting", "Photography"],
      socialLinks: {
        instagram: "https://instagram.com",
        twitter: "https://twitter.com",
        email: "david.oconnor@gracecovenant.org"
      },
      yearsAtChurch: 7,
      family: "Single"
    },
    {
      id: 4,
      name: "Elder Robert Chen",
      title: "Elder Board Chairman",
      role: "elder",
      category: "elder",
      image: "https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg?auto=compress&cs=tinysrgb&w=600",
      bio: "Robert has served as an elder for 8 years, bringing wisdom from his experience as a business executive. He provides spiritual oversight and governance for the church, ensuring alignment with biblical principles and organizational health.",
      education: [
        "MBA - Stanford University",
        "B.S. in Engineering - MIT",
        "Certificate in Biblical Studies - Dallas Seminary"
      ],
      favoriteVerse: "Micah 6:8 - 'Act justly, love mercy, walk humbly with your God...'",
      hobbies: ["Mentoring", "Golf", "Teaching Sunday School"],
      socialLinks: {
        linkedin: "https://linkedin.com",
        email: "robert.chen@gracecovenant.org"
      },
      yearsAtChurch: 12,
      family: "Married to Linda with 2 adult children"
    },
    {
      id: 5,
      name: "Sarah Martinez",
      title: "Youth & Young Adults Pastor",
      role: "leadership",
      category: "youth",
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=600",
      bio: "Sarah is passionate about empowering the next generation. She has grown the youth ministry from 30 to over 200 students through innovative programs, retreats, and mentorship initiatives. Her dynamic teaching style resonates deeply with young people.",
      education: [
        "M.A. in Youth Ministry - Azusa Pacific University",
        "B.A. in Psychology - UCLA"
      ],
      favoriteVerse: "1 Timothy 4:12 - 'Don't let anyone look down on you because you are young...'",
      hobbies: ["Coffee", "Hiking", "Podcasting"],
      socialLinks: {
        instagram: "https://instagram.com",
        twitter: "https://twitter.com",
        email: "sarah.martinez@gracecovenant.org"
      },
      yearsAtChurch: 5,
      family: "Single"
    },
    {
      id: 6,
      name: "Deacon James Wilson",
      title: "Community Outreach Director",
      role: "deacon",
      category: "outreach",
      image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600",
      bio: "James leads the church's community initiatives including food pantry, homeless outreach, and international missions. Under his direction, the church has served over 10,000 meals annually and supported missionaries in 12 countries.",
      education: [
        "B.A. in Social Work - University of Texas",
        "Certificate in Nonprofit Management - Harvard Extension"
      ],
      favoriteVerse: "Matthew 25:40 - 'Whatever you did for one of the least of these...'",
      hobbies: ["Running", "Cooking", "Volunteering"],
      socialLinks: {
        linkedin: "https://linkedin.com",
        email: "james.wilson@gracecovenant.org"
      },
      yearsAtChurch: 9,
      family: "Married to Rachel with 4 children"
    },
    {
      id: 7,
      name: "Dr. Emily Foster",
      title: "Counseling & Care Pastor",
      role: "staff",
      category: "care",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
      bio: "Dr. Emily is a licensed clinical psychologist who leads the church's care ministry. She oversees pastoral counseling, support groups, and mental health initiatives. Her integrated approach to spiritual and emotional health has helped countless individuals find healing.",
      education: [
        "Psy.D. in Clinical Psychology - Biola University",
        "M.A. in Pastoral Care - Denver Seminary",
        "B.A. in Psychology - Baylor University"
      ],
      favoriteVerse: "Psalm 34:18 - 'The Lord is close to the brokenhearted...'",
      hobbies: ["Reading", "Gardening", "Playing Piano"],
      socialLinks: {
        linkedin: "https://linkedin.com",
        email: "emily.foster@gracecovenant.org"
      },
      yearsAtChurch: 6,
      family: "Married to Mark"
    },
    {
      id: 8,
      name: "Deacon Maria Garcia",
      title: "Children's Ministry Director",
      role: "deacon",
      category: "children",
      image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=600",
      bio: "Maria brings creativity and passion to children's ministry, serving over 300 families weekly. She has developed curriculum, trained volunteers, and created a safe, engaging environment where kids learn to love Jesus.",
      education: [
        "B.A. in Early Childhood Education - Texas State University",
        "Certificate in Children's Ministry - Azusa Pacific"
      ],
      favoriteVerse: "Proverbs 22:6 - 'Train up a child in the way he should go...'",
      hobbies: ["Arts & Crafts", "Storytelling", "Music"],
      socialLinks: {
        instagram: "https://instagram.com",
        email: "maria.garcia@gracecovenant.org"
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
    // Only access document on client side
    if (typeof document !== 'undefined') {
      document.body.style.overflow = "hidden";
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedLeader(null);
    // Only access document on client side
    if (typeof document !== 'undefined') {
      document.body.style.overflow = "auto";
    }
  };

  

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") closeModal();
    };
    
    // Only add event listener on client side
    if (typeof document !== 'undefined') {
      document.addEventListener("keydown", handleEsc);
      return () => document.removeEventListener("keydown", handleEsc);
    }
  }, []);

  return (
    <section id="leadership" className="py-28 px-6 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 relative overflow-hidden">
      {/* Modern 2026 decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-amber-600/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-amber-400/5 to-transparent rounded-full blur-3xl"></div>
        </div>
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
          </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 backdrop-blur-sm px-5 py-2 rounded-full mb-5 border border-amber-500/20">
            <i className="fas fa-crown text-amber-400 text-sm"></i>
            <span className="text-amber-300 font-semibold tracking-wide uppercase text-xs">Godly Leadership</span>
            <i className="fas fa-star text-amber-400 text-sm"></i>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold serif text-white mb-4">
            Meet Our<span className="text-amber-400"> Leadership Team</span>
          </h2>
          <div className="w-28 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full mb-6"></div>
          <p className="text-stone-300 max-w-2xl mx-auto text-lg">
            Spirit-led leaders committed to serving God's people with integrity, wisdom, and love
          </p>
        </div>

        {/* Category Filters - Modern scrollable chips */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`group flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300 ${
                filter === cat.id
                  ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-500/25 scale-105"
                  : "bg-stone-800/50 backdrop-blur-sm text-stone-300 hover:bg-stone-700 border border-stone-700"
              }`}
            >
              <i className={`fas ${cat.icon} text-sm ${filter === cat.id ? "text-white" : "text-amber-400 group-hover:text-amber-300"}`}></i>
              <span className="text-sm font-medium">{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Leadership Grid - Modern Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredLeaders.map((leader, index) => (
            <div
              key={leader.id}
              onClick={() => openModal(leader)}
              className="group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative bg-stone-800/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-stone-700/50 hover:border-amber-500/30 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/10">
                {/* Image Container with Gradient Overlay */}
                <div className="relative overflow-hidden h-64">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                  {/* Role Badge */}
                  <div className="absolute top-4 right-4 bg-amber-500/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-white shadow-lg">
                    {leader.title}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 text-center relative z-10">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-amber-400 transition-colors">
                    {leader.name}
                  </h3>
                  <p className="text-amber-400 text-sm mb-4">{leader.title}</p>
                  
                  {/* Quick Stats */}
                  <div className="flex justify-center gap-4 text-xs text-stone-400 mb-4">
                    <div className="flex items-center gap-1">
                      <i className="fas fa-calendar-alt text-amber-500 text-xs"></i>
                      <span>{leader.yearsAtChurch}+ yrs</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <i className="fas fa-heart text-amber-500 text-xs"></i>
                      <span>{leader.category}</span>
                    </div>
                  </div>

                  {/* Social Icons Preview */}
                  <div className="flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    {Object.keys(leader.socialLinks).map((platform) => (
                      <div
                        key={platform}
                        className="w-8 h-8 rounded-full bg-stone-700 flex items-center justify-center hover:bg-amber-500 transition-colors"
                      >
                        <i className={`fab fa-${platform} text-stone-300 text-xs`}></i>
                      </div>
                    ))}
                  </div>

                  {/* View Details Link */}
                  <div className="mt-4 inline-flex items-center gap-1 text-amber-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span>View Profile</span>
                    <i className="fas fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
                  </div>
                </div>

                {/* Animated Border Effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-amber-500/30 transition-all duration-300 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredLeaders.length === 0 && (
          <div className="text-center py-16">
            <i className="fas fa-users-slash text-6xl text-stone-600 mb-4"></i>
            <p className="text-stone-400 text-lg">No leaders found in this category</p>
          </div>
        )}

        {/* Leadership Values Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-stone-800/30 backdrop-blur-sm rounded-2xl p-6 border border-stone-700/50 text-center hover:border-amber-500/30 transition-all duration-300">
            <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-bible text-amber-400 text-2xl"></i>
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Biblically Grounded</h3>
            <p className="text-stone-400 text-sm">All leadership decisions rooted in Scripture and prayerful discernment</p>
          </div>
          <div className="bg-stone-800/30 backdrop-blur-sm rounded-2xl p-6 border border-stone-700/50 text-center hover:border-amber-500/30 transition-all duration-300">
            <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-hand-holding-heart text-amber-400 text-2xl"></i>
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Servant Leadership</h3>
            <p className="text-stone-400 text-sm">Leading with humility, grace, and a heart for God's people</p>
          </div>
          <div className="bg-stone-800/30 backdrop-blur-sm rounded-2xl p-6 border border-stone-700/50 text-center hover:border-amber-500/30 transition-all duration-300">
            <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-chart-line text-amber-400 text-2xl"></i>
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Vision-Driven</h3>
            <p className="text-stone-400 text-sm">Committed to advancing God's kingdom with excellence and innovation</p>
          </div>
        </div>
      </div>

      {/* Modal for Detailed View */}
      {isClient && isModalOpen && selectedLeader && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md" onClick={closeModal}>
          <div className="relative max-w-4xl w-full bg-gradient-to-br from-stone-800 to-stone-900 rounded-3xl overflow-hidden shadow-2xl border border-amber-500/20 animate-fade-up" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeModal} className="absolute top-6 right-6 w-10 h-10 rounded-full bg-black/50 text-white hover:bg-amber-500 transition-colors z-10">
              <i className="fas fa-times"></i>
            </button>
            
            <div className="grid md:grid-cols-2">
              {/* Left - Image */}
              <div className="relative h-full min-h-[400px]">
                <img src={selectedLeader.image} alt={selectedLeader.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent"></div>
              </div>
              
              {/* Right - Details */}
              <div className="p-8 md:p-10">
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-amber-500/20 text-amber-300 rounded-full text-xs font-semibold mb-3">
                    {selectedLeader.title}
                  </span>
                  <h2 className="text-3xl font-bold text-white mb-2">{selectedLeader.name}</h2>
                  <div className="flex items-center gap-3 text-stone-400 text-sm">
                    <span className="flex items-center gap-1"><i className="fas fa-calendar-alt text-amber-400"></i> {selectedLeader.yearsAtChurch} years at GCC</span>
                    <span className="flex items-center gap-1"><i className="fas fa-user-friends text-amber-400"></i> {selectedLeader.family}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-amber-400 font-semibold mb-2 flex items-center gap-2"><i className="fas fa-user-graduate"></i> Biography</h3>
                  <p className="text-stone-300 text-sm leading-relaxed">{selectedLeader.bio}</p>
                </div>

                <div className="mb-6">
                  <h3 className="text-amber-400 font-semibold mb-2 flex items-center gap-2"><i className="fas fa-graduation-cap"></i> Education</h3>
                  <ul className="space-y-1">
                    {selectedLeader.education.map((edu, idx) => (
                      <li key={idx} className="text-stone-300 text-sm flex items-start gap-2">
                        <i className="fas fa-check-circle text-amber-500 text-xs mt-1"></i>
                        <span>{edu}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-amber-400 font-semibold mb-2 flex items-center gap-2"><i className="fas fa-heart"></i> Favorite Verse</h3>
                  <p className="text-stone-300 text-sm italic bg-stone-700/30 p-3 rounded-xl">{selectedLeader.favoriteVerse}</p>
                </div>

                <div className="mb-6">
                  <h3 className="text-amber-400 font-semibold mb-2 flex items-center gap-2"><i className="fas fa-palette"></i> Hobbies & Interests</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedLeader.hobbies.map((hobby, idx) => (
                      <span key={idx} className="px-3 py-1 bg-stone-700 rounded-full text-stone-300 text-xs">{hobby}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-amber-400 font-semibold mb-2 flex items-center gap-2"><i className="fas fa-share-alt"></i> Connect</h3>
                  <div className="flex gap-3">
                    {Object.entries(selectedLeader.socialLinks).map(([platform, url]) => (
                      <a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-stone-700 flex items-center justify-center hover:bg-amber-500 transition-colors"
                      >
                        <i className={`fab fa-${platform} text-stone-300`}></i>
                      </a>
                    ))}
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