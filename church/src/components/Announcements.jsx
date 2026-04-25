// components/Announcements.jsx
import { useState, useEffect } from "react";
import {
  Bell,
  Search,
  CalendarDays,
  Clock3,
  MapPin,
  Heart,
  MessageCircle,
  Share2,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ArrowUp,
  ArrowDown,
  AlertTriangle,
} from "lucide-react";

const Announcements = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredAnnouncements, setFilteredAnnouncements] = useState([]);
  const [expandedId, setExpandedId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const announcementsPerPage = 6;

  const categories = [
    { id: "all", label: "All" },
    { id: "worship", label: "Worship" },
    { id: "events", label: "Events" },
    { id: "ministry", label: "Ministry" },
    { id: "outreach", label: "Outreach" },
    { id: "prayer", label: "Prayer" },
    { id: "urgent", label: "Urgent" },
  ];

  const announcements = [
    {
      id: 1,
      title: "Easter Sunrise Service",
      content:
        "Join us for a special Easter morning celebration with worship, prayer, and breakfast fellowship together.",
      category: "events",
      priority: "high",
      date: "April 20, 2026",
      time: "6:30 AM",
      location: "Church Pavilion",
      image:
        "https://images.pexels.com/photos/8474833/pexels-photo-8474833.jpeg?auto=compress&cs=tinysrgb&w=1200",
      likes: 124,
      comments: 12,
    },

    {
      id: 2,
      title: "Weekly Prayer Gathering",
      content:
        "Gather every Wednesday evening for worship, intercession, and encouragement as a church family.",
      category: "prayer",
      priority: "normal",
      date: "Every Wednesday",
      time: "7:00 PM",
      location: "Fellowship Hall",
      image:
        "https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=1200",
      likes: 89,
      comments: 9,
    },

    {
      id: 3,
      title: "Disaster Relief Collection",
      content:
        "Help families affected by recent disasters by donating food, water, blankets, and essential supplies.",
      category: "urgent",
      priority: "urgent",
      date: "Ongoing",
      time: "All Week",
      location: "Church Lobby",
      image:
        "https://images.pexels.com/photos/6646868/pexels-photo-6646868.jpeg?auto=compress&cs=tinysrgb&w=1200",
      likes: 302,
      comments: 48,
    },

    {
      id: 4,
      title: "New Romans Bible Study",
      content:
        "Dive deeper into the Book of Romans with an 8-week study designed to strengthen faith and understanding.",
      category: "ministry",
      priority: "normal",
      date: "Starting April 7",
      time: "7:00 PM",
      location: "Room 101",
      image:
        "https://images.pexels.com/photos/3768138/pexels-photo-3768138.jpeg?auto=compress&cs=tinysrgb&w=1200",
      likes: 156,
      comments: 18,
    },

    {
      id: 5,
      title: "VBS 2026 Registration Open",
      content:
        "Vacation Bible School registration is now open for children ages 4–11. Secure your child’s place today.",
      category: "events",
      priority: "high",
      date: "June 15–19",
      time: "9:00 AM",
      location: "Children’s Wing",
      image:
        "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=1200",
      likes: 210,
      comments: 31,
    },

    {
      id: 6,
      title: "Mission Trip to Guatemala",
      content:
        "Serve alongside our missions team through outreach, home building, worship, and children’s ministry.",
      category: "outreach",
      priority: "normal",
      date: "July 12–19",
      time: "Full Week",
      location: "Guatemala",
      image:
        "https://images.pexels.com/photos/7105761/pexels-photo-7105761.jpeg?auto=compress&cs=tinysrgb&w=1200",
      likes: 240,
      comments: 39,
    },
  ];

  useEffect(() => {
    let filtered = announcements;

    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (item) => item.category === selectedCategory
      );
    }

    if (searchTerm.trim()) {
      filtered = filtered.filter(
        (item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.content.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredAnnouncements(filtered);
    setCurrentPage(1);
  }, [selectedCategory, searchTerm]);

  const totalPages = Math.ceil(
    filteredAnnouncements.length / announcementsPerPage
  );

  const currentAnnouncements = filteredAnnouncements.slice(
    (currentPage - 1) * announcementsPerPage,
    currentPage * announcementsPerPage
  );

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const getPriority = (priority) => {
    switch (priority) {
      case "urgent":
        return {
          label: "Urgent",
          icon: AlertTriangle,
          className:
            "bg-red-500/20 text-red-300 border border-red-500/20",
        };

      case "high":
        return {
          label: "High Priority",
          icon: ArrowUp,
          className:
            "bg-amber-500/20 text-amber-300 border border-amber-500/20",
        };

      default:
        return {
          label: "Normal",
          icon: Sparkles,
          className:
            "bg-white/10 text-stone-300 border border-white/10",
        };
    }
  };

  return (
    <section
      id="announcements"
      className="relative py-28 px-6 overflow-hidden bg-gradient-to-br from-black via-stone-950 to-amber-950 text-white"
    >
      {/* Premium Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl"></div>

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-yellow-400/10 rounded-full blur-3xl"></div>

        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:70px_70px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-6">
            <Bell className="w-4 h-4 text-amber-300" />
            <span className="uppercase tracking-[0.25em] text-xs font-semibold text-amber-200">
              Latest Updates
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[0.95]">
            Church{" "}
            <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-100 bg-clip-text text-transparent">
              Announcements
            </span>
          </h2>

          <div className="w-28 h-1 bg-gradient-to-r from-amber-400 to-yellow-300 mx-auto rounded-full mt-6 mb-6"></div>

          <p className="max-w-2xl mx-auto text-stone-400 text-lg leading-relaxed">
            Stay connected with important updates, ministry opportunities,
            gatherings, and upcoming church events.
          </p>
        </div>

        {/* Search + Filters */}
        <div className="flex flex-col lg:flex-row gap-5 justify-between mb-12">
          {/* Search */}
          <div className="relative max-w-md w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-500 w-5 h-5" />

            <input
              type="text"
              placeholder="Search announcements..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-5 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl text-white placeholder:text-stone-500 focus:outline-none focus:border-amber-400/50 transition-all"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? "bg-gradient-to-r from-amber-400 to-yellow-300 text-black shadow-xl"
                    : "bg-white/5 border border-white/10 text-stone-300 hover:border-amber-400/30 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {currentAnnouncements.map((announcement) => {
            const priority = getPriority(announcement.priority);
            const PriorityIcon = priority.icon;
            const isExpanded = expandedId === announcement.id;

            return (
              <div
                key={announcement.id}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-700 hover:-translate-y-2 hover:border-amber-400/30 hover:shadow-[0_25px_80px_rgba(251,191,36,0.15)]"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={announcement.image}
                    alt={announcement.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

                  {/* Badge */}
                  <div className="absolute top-5 left-5">
                    <div
                      className={`flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-xl text-xs font-bold ${priority.className}`}
                    >
                      <PriorityIcon className="w-3.5 h-3.5" />
                      {priority.label}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  {/* Meta */}
                  <div className="flex flex-wrap gap-3 mb-5">
                    <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-2 rounded-full text-sm text-stone-300">
                      <CalendarDays className="w-4 h-4 text-amber-300" />
                      {announcement.date}
                    </div>

                    <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-2 rounded-full text-sm text-stone-300">
                      <Clock3 className="w-4 h-4 text-amber-300" />
                      {announcement.time}
                    </div>

                    <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-2 rounded-full text-sm text-stone-300">
                      <MapPin className="w-4 h-4 text-amber-300" />
                      {announcement.location}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-amber-300 transition-colors">
                    {announcement.title}
                  </h3>

                  {/* Content */}
                  <p className="text-stone-400 leading-relaxed">
                    {isExpanded
                      ? announcement.content
                      : `${announcement.content.substring(0, 110)}...`}
                  </p>

                  {/* Expand */}
                  <button
                    onClick={() => toggleExpand(announcement.id)}
                    className="mt-4 inline-flex items-center gap-2 text-amber-300 hover:text-white transition-colors"
                  >
                    {isExpanded ? "Show Less" : "Read More"}

                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-6 mt-6 border-t border-white/10">
                    <div className="flex items-center gap-5">
                      <button className="flex items-center gap-2 text-stone-500 hover:text-red-400 transition-colors">
                        <Heart className="w-4 h-4" />
                        <span className="text-sm">
                          {announcement.likes}
                        </span>
                      </button>

                      <button className="flex items-center gap-2 text-stone-500 hover:text-white transition-colors">
                        <MessageCircle className="w-4 h-4" />
                        <span className="text-sm">
                          {announcement.comments}
                        </span>
                      </button>

                      <button className="text-stone-500 hover:text-white transition-colors">
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>

                    <button className="px-5 py-2 rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 text-black font-semibold hover:scale-105 transition-transform">
                      Explore
                    </button>
                  </div>
                </div>

                {/* Hover Border */}
                <div className="absolute inset-0 rounded-[2rem] border border-transparent group-hover:border-amber-400/20 transition-all duration-500 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-3 mt-14">
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.max(prev - 1, 1))
              }
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-amber-400/30 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-12 h-12 rounded-full font-semibold transition-all ${
                  currentPage === i + 1
                    ? "bg-gradient-to-r from-amber-400 to-yellow-300 text-black"
                    : "bg-white/5 border border-white/10 text-white hover:border-amber-400/30"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() =>
                setCurrentPage((prev) =>
                  Math.min(prev + 1, totalPages)
                )
              }
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-amber-400/30 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* CTA */}
        <div className="mt-20">
          <div className="relative overflow-hidden rounded-[2rem] border border-amber-400/20 bg-gradient-to-r from-amber-500/20 via-yellow-400/10 to-amber-500/20 backdrop-blur-2xl p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.2),transparent_40%)]"></div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-2xl bg-amber-400/20 border border-amber-400/20 flex items-center justify-center">
                  <Bell className="w-8 h-8 text-amber-300" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-1">
                    Never Miss an Update
                  </h3>

                  <p className="text-stone-300">
                    Subscribe to receive important announcements and
                    upcoming event updates.
                  </p>
                </div>
              </div>

              <button className="px-8 py-4 rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 text-black font-bold shadow-2xl hover:scale-105 transition-all">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Announcements;