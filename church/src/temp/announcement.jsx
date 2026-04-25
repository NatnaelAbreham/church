// components/Announcements.jsx
import { useState, useEffect } from "react";

const Announcements = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredAnnouncements, setFilteredAnnouncements] = useState([]);
  const [expandedId, setExpandedId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const announcementsPerPage = 6;

  const categories = [
    { id: "all", label: "All", icon: "fa-bullhorn", color: "amber" },
    { id: "worship", label: "Worship", icon: "fa-music", color: "purple" },
    { id: "events", label: "Events", icon: "fa-calendar-alt", color: "blue" },
    { id: "ministry", label: "Ministry", icon: "fa-hands-helping", color: "green" },
    { id: "outreach", label: "Outreach", icon: "fa-globe", color: "teal" },
    { id: "prayer", label: "Prayer", icon: "fa-praying-hands", color: "indigo" },
    { id: "urgent", label: "Urgent", icon: "fa-exclamation-triangle", color: "red" }
  ];

  const announcements = [
    {
      id: 1,
      title: "🌅 Easter Sunrise Service - April 20, 2026",
      content: "Join us for a special Easter morning celebration at 6:30 AM at the church pavilion. Following the service, enjoy a complimentary breakfast fellowship. All are welcome! Bring your family and friends to celebrate the resurrection of our Lord.",
      category: "events",
      priority: "high",
      date: "April 20, 2026",
      time: "6:30 AM",
      location: "Church Pavilion",
      image: "https://images.pexels.com/photos/8474833/pexels-photo-8474833.jpeg?auto=compress&cs=tinysrgb&w=400",
      postedBy: "Pastoral Team",
      postedAt: "2026-03-25T10:00:00",
      likes: 124,
      comments: 8,
      rsvpLink: "/events/easter"
    },
    {
      id: 2,
      title: "🙏 Weekly Prayer Gathering - Every Wednesday",
      content: "Join us for our midweek prayer meeting at 7:00 PM in the Fellowship Hall. We come together to lift up our church, community, and global needs. Prayer changes things! Childcare is provided for ages 0-5.",
      category: "prayer",
      priority: "normal",
      date: "Every Wednesday",
      time: "7:00 PM",
      location: "Fellowship Hall",
      image: "https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=400",
      postedBy: "Prayer Ministry",
      postedAt: "2026-03-20T14:30:00",
      likes: 89,
      comments: 12,
      rsvpLink: null
    },
    {
      id: 3,
      title: "🎵 Worship Team Auditions - April 5th",
      content: "Calling all musicians and vocalists! We're expanding our worship team for the summer season. Auditions will be held on April 5th from 2-5 PM. Prepare one contemporary worship song and one hymn. Sign up at the Welcome Center or online.",
      category: "worship",
      priority: "high",
      date: "April 5, 2026",
      time: "2:00 PM - 5:00 PM",
      location: "Worship Center",
      image: "https://images.pexels.com/photos/1383622/pexels-photo-1383622.jpeg?auto=compress&cs=tinysrgb&w=400",
      postedBy: "Worship Director",
      postedAt: "2026-03-22T09:15:00",
      likes: 67,
      comments: 23,
      rsvpLink: "/worship/auditions"
    },
    {
      id: 4,
      title: "🩸 Blood Drive - April 12th",
      content: "Partner with the Red Cross to save lives! Our semi-annual blood drive will take place in the Fellowship Hall from 9 AM to 3 PM. Walk-ins welcome, but appointments are encouraged. Every donation helps up to 3 patients.",
      category: "outreach",
      priority: "normal",
      date: "April 12, 2026",
      time: "9:00 AM - 3:00 PM",
      location: "Fellowship Hall",
      image: "https://images.pexels.com/photos/6646861/pexels-photo-6646861.jpeg?auto=compress&cs=tinysrgb&w=400",
      postedBy: "Outreach Team",
      postedAt: "2026-03-18T11:00:00",
      likes: 203,
      comments: 31,
      rsvpLink: "/outreach/blood-drive"
    },
    {
      id: 5,
      title: "⚠️ URGENT: Disaster Relief Collection for Tornado Victims",
      content: "We're collecting essential supplies for families affected by the recent tornadoes. Needed items: bottled water, non-perishable food, blankets, toiletries, and baby supplies. Drop off at the church lobby by Friday, April 3rd. Volunteers needed for sorting and delivery.",
      category: "urgent",
      priority: "urgent",
      date: "Ongoing",
      time: "Until April 3",
      location: "Church Lobby",
      image: "https://images.pexels.com/photos/6646868/pexels-photo-6646868.jpeg?auto=compress&cs=tinysrgb&w=400",
      postedBy: "Outreach Ministry",
      postedAt: "2026-03-26T08:00:00",
      likes: 342,
      comments: 56,
      rsvpLink: "/outreach/disaster-relief"
    },
    {
      id: 6,
      title: "📖 New Bible Study: 'The Book of Romans'",
      content: "Starting April 7th, join Pastor Michael for an 8-week deep dive into Romans. Tuesdays at 7 PM in Room 101 or via Zoom. Study guides available for $10. This transformative study will deepen your understanding of grace and righteousness.",
      category: "ministry",
      priority: "normal",
      date: "Starting April 7",
      time: "7:00 PM",
      location: "Room 101 / Zoom",
      image: "https://images.pexels.com/photos/3768138/pexels-photo-3768138.jpeg?auto=compress&cs=tinysrgb&w=400",
      postedBy: "Discipleship Team",
      postedAt: "2026-03-21T16:00:00",
      likes: 156,
      comments: 19,
      rsvpLink: "/bible-study/romans"
    },
    {
      id: 7,
      title: "👧 VBS 2026 Registration Now Open!",
      content: "Vacation Bible School 'Heroes of Faith' will be held June 15-19, 9 AM - 12 PM. For children ages 4-11. Early bird registration ends May 15th. Cost: $25 per child (includes t-shirt, snacks, and materials). Volunteers needed!",
      category: "ministry",
      priority: "high",
      date: "June 15-19, 2026",
      time: "9:00 AM - 12:00 PM",
      location: "Children's Wing",
      image: "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=400",
      postedBy: "Children's Ministry",
      postedAt: "2026-03-24T13:30:00",
      likes: 287,
      comments: 42,
      rsvpLink: "/vbs/register"
    },
    {
      id: 8,
      title: "🤝 Men's Breakfast & Fellowship - April 11th",
      content: "All men are invited to our monthly breakfast gathering at 8 AM in the Fellowship Hall. Guest speaker: Elder Robert Chen on 'Leading Your Family Spiritually'. Cost: $5 for breakfast. RSVP appreciated but not required.",
      category: "events",
      priority: "normal",
      date: "April 11, 2026",
      time: "8:00 AM",
      location: "Fellowship Hall",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400",
      postedBy: "Men's Ministry",
      postedAt: "2026-03-23T10:00:00",
      likes: 98,
      comments: 14,
      rsvpLink: "/mens-breakfast"
    },
    {
      id: 9,
      title: "🎓 Scholarship Applications Open",
      content: "Graduating high school seniors can apply for the Grace Covenant Scholarship Fund. Awards range from $500-$2000. Applications due by May 1st. Criteria: active church involvement, academic achievement, and community service.",
      category: "ministry",
      priority: "normal",
      date: "Deadline: May 1",
      time: "N/A",
      location: "Church Office",
      image: "https://images.pexels.com/photos/5697240/pexels-photo-5697240.jpeg?auto=compress&cs=tinysrgb&w=400",
      postedBy: "Scholarship Committee",
      postedAt: "2026-03-19T09:00:00",
      likes: 134,
      comments: 27,
      rsvpLink: "/scholarship"
    },
    {
      id: 10,
      title: "🌍 Mission Trip to Guatemala - July 2026",
      content: "Join our team for a week of service in Guatemala City. We'll be building homes, running a medical clinic, and leading children's programs. Cost: $1,500 (fundraising support available). Info meeting April 18th at 2 PM.",
      category: "outreach",
      priority: "normal",
      date: "July 12-19, 2026",
      time: "TBD",
      location: "Guatemala",
      image: "https://images.pexels.com/photos/7105761/pexels-photo-7105761.jpeg?auto=compress&cs=tinysrgb&w=400",
      postedBy: "Missions Team",
      postedAt: "2026-03-17T14:00:00",
      likes: 245,
      comments: 38,
      rsvpLink: "/missions/guatemala"
    },
    {
      id: 11,
      title: "🎄 Christmas Choir Rehearsals Begin",
      content: "Planning ahead for our Christmas Cantata! Rehearsals start September 3rd, but early sign-ups are encouraged. All voices welcome. No audition required. Contact Worship Director for more information.",
      category: "worship",
      priority: "low",
      date: "Starting September 3",
      time: "7:00 PM",
      location: "Choir Room",
      image: "https://images.pexels.com/photos/8535571/pexels-photo-8535571.jpeg?auto=compress&cs=tinysrgb&w=400",
      postedBy: "Worship Ministry",
      postedAt: "2026-03-15T12:00:00",
      likes: 76,
      comments: 11,
      rsvpLink: "/choir/signup"
    },
    {
      id: 12,
      title: "💒 Marriage Enrichment Weekend - May 15-16",
      content: "Couples, invest in your marriage! Join us for a weekend of teaching, connection, and renewal. Featured speaker: Dr. James & Lisa Thompson. Cost: $75 per couple (includes meals and materials). Childcare provided with registration.",
      category: "events",
      priority: "normal",
      date: "May 15-16, 2026",
      time: "Friday 6PM - Saturday 5PM",
      location: "Church Conference Center",
      image: "https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=400",
      postedBy: "Family Ministry",
      postedAt: "2026-03-14T11:00:00",
      likes: 189,
      comments: 23,
      rsvpLink: "/marriage-weekend"
    }
  ];

  // Filter announcements based on category and search
  useEffect(() => {
    let filtered = announcements;
    
    if (selectedCategory !== "all") {
      filtered = filtered.filter(ann => ann.category === selectedCategory);
    }
    
    if (searchTerm.trim() !== "") {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(ann =>
        ann.title.toLowerCase().includes(term) ||
        ann.content.toLowerCase().includes(term) ||
        ann.category.toLowerCase().includes(term)
      );
    }
    
    setFilteredAnnouncements(filtered);
    setCurrentPage(1);
  }, [selectedCategory, searchTerm]);

  // Pagination
  const indexOfLastAnnouncement = currentPage * announcementsPerPage;
  const indexOfFirstAnnouncement = indexOfLastAnnouncement - announcementsPerPage;
  const currentAnnouncements = filteredAnnouncements.slice(indexOfFirstAnnouncement, indexOfLastAnnouncement);
  const totalPages = Math.ceil(filteredAnnouncements.length / announcementsPerPage);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const getPriorityBadge = (priority) => {
    switch(priority) {
      case "urgent":
        return { bg: "bg-red-500", text: "URGENT", icon: "fa-exclamation-circle" };
      case "high":
        return { bg: "bg-orange-500", text: "HIGH PRIORITY", icon: "fa-arrow-up" };
      case "low":
        return { bg: "bg-stone-500", text: "LOW PRIORITY", icon: "fa-arrow-down" };
      default:
        return { bg: "bg-blue-500", text: "NORMAL", icon: "fa-info-circle" };
    }
  };

  const getCategoryColor = (categoryId) => {
    const colors = {
      worship: "from-purple-500 to-purple-600",
      events: "from-blue-500 to-blue-600",
      ministry: "from-green-500 to-green-600",
      outreach: "from-teal-500 to-teal-600",
      prayer: "from-indigo-500 to-indigo-600",
      urgent: "from-red-500 to-red-600"
    };
    return colors[categoryId] || "from-amber-500 to-amber-600";
  };

  const formatRelativeTime = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffHours = Math.floor((now - date) / (1000 * 60 * 60));
    
    if (diffHours < 1) return "Just now";
    if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
    return date.toLocaleDateString();
  };

  const handleLike = (id) => {
    const announcement = announcements.find(a => a.id === id);
    if (announcement) {
      announcement.likes += 1;
      // In a real app, you'd update this via API
      setFilteredAnnouncements([...filteredAnnouncements]);
    }
  };

  return (
    <section id="announcements" className="py-28 px-6 bg-gradient-to-br from-stone-50 via-white to-amber-50/30 relative overflow-hidden">
      {/* Modern 2026 decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-amber-300/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-amber-100/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-100/80 backdrop-blur-sm px-5 py-2 rounded-full mb-5 shadow-sm">
            <i className="fas fa-bullhorn text-amber-600 text-sm"></i>
            <span className="text-amber-700 font-semibold tracking-wide uppercase text-xs">Stay Informed</span>
            <i className="fas fa-bell text-amber-600 text-sm"></i>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold serif text-stone-800 mb-4">
            Church <span className="text-amber-600">Announcements</span>
          </h2>
          <div className="w-28 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full mb-6"></div>
          <p className="text-stone-600 max-w-2xl mx-auto text-lg">
            Stay up to date with the latest news, events, and ministry opportunities
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="flex flex-wrap gap-4 mb-10">
          <div className="flex-1 min-w-[200px]">
            <div className="relative">
              <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-stone-400"></i>
              <input
                type="text"
                placeholder="Search announcements..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-stone-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 transition-all bg-white"
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg"
                    : "bg-white text-stone-600 hover:bg-amber-50 border border-stone-200"
                }`}
              >
                <i className={`fas ${cat.icon} text-sm`}></i>
                <span className="text-sm font-medium hidden sm:inline">{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Announcements Grid */}
        {filteredAnnouncements.length > 0 ? (
          <>
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {currentAnnouncements.map((announcement, index) => {
                const priority = getPriorityBadge(announcement.priority);
                const isExpanded = expandedId === announcement.id;
                
                return (
                  <div
                    key={announcement.id}
                    className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden border border-stone-100 hover:border-amber-200"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Image if available */}
                    {announcement.image && (
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={announcement.image}
                          alt={announcement.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                        <div className="absolute top-4 left-4 flex gap-2">
                          <span className={`${priority.bg} text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1`}>
                            <i className={`fas ${priority.icon} text-xs`}></i>
                            {priority.text}
                          </span>
                          <span className="bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                            {categories.find(c => c.id === announcement.category)?.label}
                          </span>
                        </div>
                      </div>
                    )}

                    <div className="p-6">
                      {/* Date & Time */}
                      <div className="flex flex-wrap items-center gap-4 text-sm text-stone-500 mb-3">
                        <span className="flex items-center gap-1">
                          <i className="far fa-calendar-alt text-amber-500"></i>
                          {announcement.date}
                        </span>
                        {announcement.time !== "N/A" && (
                          <span className="flex items-center gap-1">
                            <i className="far fa-clock text-amber-500"></i>
                            {announcement.time}
                          </span>
                        )}
                        <span className="flex items-center gap-1">
                          <i className="fas fa-map-marker-alt text-amber-500"></i>
                          {announcement.location}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-stone-800 mb-2 group-hover:text-amber-700 transition-colors">
                        {announcement.title}
                      </h3>

                      {/* Content Preview */}
                      <p className="text-stone-600 leading-relaxed">
                        {isExpanded ? announcement.content : `${announcement.content.substring(0, 150)}...`}
                      </p>

                      {/* Read More Button */}
                      {announcement.content.length > 150 && (
                        <button
                          onClick={() => toggleExpand(announcement.id)}
                          className="text-amber-600 text-sm font-medium mt-2 hover:text-amber-700 transition-colors inline-flex items-center gap-1"
                        >
                          {isExpanded ? "Show less" : "Read more"}
                          <i className={`fas fa-chevron-${isExpanded ? "up" : "down"} text-xs`}></i>
                        </button>
                      )}

                      {/* Footer Actions */}
                      <div className="flex flex-wrap items-center justify-between gap-4 mt-4 pt-4 border-t border-stone-100">
                        <div className="flex items-center gap-4">
                          <button
                            onClick={() => handleLike(announcement.id)}
                            className="flex items-center gap-1 text-stone-500 hover:text-red-500 transition-colors text-sm"
                          >
                            <i className="far fa-heart"></i>
                            <span>{announcement.likes}</span>
                          </button>
                          <button className="flex items-center gap-1 text-stone-500 hover:text-amber-600 transition-colors text-sm">
                            <i className="far fa-comment"></i>
                            <span>{announcement.comments}</span>
                          </button>
                          <button className="flex items-center gap-1 text-stone-500 hover:text-amber-600 transition-colors text-sm">
                            <i className="far fa-share-square"></i>
                            <span>Share</span>
                          </button>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-stone-400">
                            Posted {formatRelativeTime(announcement.postedAt)} by {announcement.postedBy}
                          </span>
                          {announcement.rsvpLink && (
                            <button className="px-4 py-1.5 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-sm rounded-full font-medium hover:shadow-md transition-all">
                              RSVP
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-3">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="w-10 h-10 rounded-full bg-white text-stone-600 hover:bg-amber-50 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm flex items-center justify-center transition-all"
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
                  className="w-10 h-10 rounded-full bg-white text-stone-600 hover:bg-amber-50 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm flex items-center justify-center transition-all"
                >
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-bullhorn text-amber-600 text-4xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-stone-800 mb-2">No announcements found</h3>
            <p className="text-stone-600">
              Try adjusting your search or filter to see more announcements.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
              }}
              className="mt-4 text-amber-600 hover:text-amber-700 font-medium"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Subscribe to Updates */}
        <div className="mt-12 bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl p-6 text-center text-white">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <i className="fas fa-bell text-2xl"></i>
              </div>
              <div className="text-left">
                <h4 className="font-bold text-lg">Get Announcements via Email</h4>
                <p className="text-amber-100 text-sm">Never miss an important update</p>
              </div>
            </div>
            <button className="px-6 py-2 bg-white text-amber-700 rounded-full font-semibold hover:shadow-lg transition-all">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Announcements;