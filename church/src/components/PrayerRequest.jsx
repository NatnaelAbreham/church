// components/PrayerRequest.jsx
import { useState, useEffect } from "react";
/* import '../css/prayerrequest.css'; */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandsPraying,
  faUser,
  faUsers,
  faHeartPulse,
  faBriefcase,
  faCity,
  faHands,
  faHeart,
  faPenAlt,
  faSearch,
  faFlag,
  faCheckCircle
} from "@fortawesome/free-solid-svg-icons";

const PrayerRequest = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    prayerRequest: "",
    category: "personal",
    isAnonymous: false,
    isPublic: true,
    allowContact: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [dirty, setDirty] = useState({});
  const [prayerRequests, setPrayerRequests] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [showPrayedModal, setShowPrayedModal] = useState(null);
  const [prayerCount, setPrayerCount] = useState(0);

const categories = [
  { id: "all", label: "All Prayers", icon: "handsPraying", color: "amber" },
  { id: "personal", label: "Personal", icon: "user", color: "blue" },
  { id: "family", label: "Family", icon: "users", color: "green" },
  { id: "health", label: "Health & Healing", icon: "heartPulse", color: "red" },
  { id: "work", label: "Work & Finances", icon: "briefcase", color: "purple" },
  { id: "community", label: "Community", icon: "city", color: "teal" },
  { id: "thanksgiving", label: "Thanksgiving", icon: "hands", color: "orange" }
];

  // Sample prayer requests (in a real app, these would come from an API)
  const samplePrayers = [
    {
      id: 1,
      name: "Sarah M.",
      prayerRequest: "Please pray for my grandmother who is scheduled for surgery next week. Pray for wisdom for the doctors and peace for our family.",
      category: "health",
      date: "2026-03-28T10:30:00",
      prayedCount: 24,
      isAnonymous: false,
      isPublic: true,
      isAnswered: false
    },
    {
      id: 2,
      name: "Anonymous",
      prayerRequest: "Struggling with anxiety and depression. Please pray for God's peace and healing in my mind and heart.",
      category: "personal",
      date: "2026-03-27T15:45:00",
      prayedCount: 56,
      isAnonymous: true,
      isPublic: true,
      isAnswered: false
    },
    {
      id: 3,
      name: "The Johnson Family",
      prayerRequest: "Thanking God for the safe arrival of our baby girl, Emily! Pray for rest and adjustment as we settle into life as a family of four.",
      category: "thanksgiving",
      date: "2026-03-26T09:15:00",
      prayedCount: 89,
      isAnonymous: false,
      isPublic: true,
      isAnswered: true
    },
    {
      id: 4,
      name: "Michael T.",
      prayerRequest: "Lost my job last week. Pray for new opportunities and provision for my family during this transition.",
      category: "work",
      date: "2026-03-25T14:20:00",
      prayedCount: 42,
      isAnonymous: false,
      isPublic: true,
      isAnswered: false
    },
    {
      id: 5,
      name: "Anonymous",
      prayerRequest: "Pray for reconciliation in my marriage. We're going through a difficult season and need God's healing.",
      category: "family",
      date: "2026-03-24T11:00:00",
      prayedCount: 67,
      isAnonymous: true,
      isPublic: true,
      isAnswered: false
    },
    {
      id: 6,
      name: "Pastor David",
      prayerRequest: "Pray for our upcoming outreach event this Saturday. Pray for hearts to be open and for God's kingdom to advance.",
      category: "community",
      date: "2026-03-23T08:30:00",
      prayedCount: 35,
      isAnonymous: false,
      isPublic: true,
      isAnswered: false
    },
    {
      id: 7,
      name: "Elena R.",
      prayerRequest: "My son is deployed overseas. Pray for his safety and for peace for our family while he's away.",
      category: "family",
      date: "2026-03-22T16:40:00",
      prayedCount: 51,
      isAnonymous: false,
      isPublic: true,
      isAnswered: false
    },
    {
      id: 8,
      name: "Anonymous",
      prayerRequest: "Struggling with addiction. Pray for freedom and strength to overcome.",
      category: "personal",
      date: "2026-03-21T13:10:00",
      prayedCount: 78,
      isAnonymous: true,
      isPublic: true,
      isAnswered: false
    }
  ];

  useEffect(() => {
    setPrayerRequests(samplePrayers);
    const totalPrayers = samplePrayers.reduce((sum, p) => sum + p.prayedCount, 0);
    setPrayerCount(totalPrayers);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
    setDirty(prev => ({ ...prev, [name]: true }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.prayerRequest.trim()) {
      newErrors.prayerRequest = "Please enter your prayer request";
    }
    if (!formData.isAnonymous && !formData.name.trim()) {
      newErrors.name = "Please enter your name";
    }
    if (formData.allowContact && !formData.email.trim()) {
      newErrors.email = "Please enter your email address";
    }
    if (formData.allowContact && formData.email.trim() && !/^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const newPrayer = {
      id: prayerRequests.length + 1,
      name: formData.isAnonymous ? "Anonymous" : formData.name,
      prayerRequest: formData.prayerRequest,
      category: formData.category,
      date: new Date().toISOString(),
      prayedCount: 0,
      isAnonymous: formData.isAnonymous,
      isPublic: formData.isPublic,
      isAnswered: false
    };
    
    if (formData.isPublic) {
      setPrayerRequests(prev => [newPrayer, ...prev]);
    }
    
    setIsSuccess(true);
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      prayerRequest: "",
      category: "personal",
      isAnonymous: false,
      isPublic: true,
      allowContact: false
    });
    setDirty({});
    
    setTimeout(() => setIsSuccess(false), 5000);
  };

  const handlePrayed = (id) => {
    setPrayerRequests(prev => prev.map(prayer => 
      prayer.id === id 
        ? { ...prayer, prayedCount: prayer.prayedCount + 1 }
        : prayer
    ));
    setPrayerCount(prev => prev + 1);
    setShowPrayedModal(id);
    setTimeout(() => setShowPrayedModal(null), 2000);
  };

  const getCategoryColor = (categoryId) => {
    const colors = {
      personal: "border-l-blue-500 bg-blue-50",
      family: "border-l-green-500 bg-green-50",
      health: "border-l-red-500 bg-red-50",
      work: "border-l-purple-500 bg-purple-50",
      community: "border-l-teal-500 bg-teal-50",
      thanksgiving: "border-l-orange-500 bg-orange-50"
    };
    return colors[categoryId] || "border-l-amber-500 bg-amber-50";
  };

const getCategoryIcon = (categoryId) => {
  const icons = {
    personal: faUser,
    family: faUsers,
    health: faHeartPulse,
    work: faBriefcase,
    community: faCity,
    thanksgiving: faHandsPraying
  };

  return icons[categoryId] || faHandsPraying;
};


  const formatRelativeTime = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffHours = Math.floor((now - date) / (1000 * 60 * 60));
    
    if (diffHours < 1) return "Just now";
    if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
    if (diffHours < 48) return "Yesterday";
    return date.toLocaleDateString();
  };

  const colorMap = {
  blue: "border-blue-500 bg-blue-50 text-blue-700",
  green: "border-green-500 bg-green-50 text-green-700",
  red: "border-red-500 bg-red-50 text-red-700",
  purple: "border-purple-500 bg-purple-50 text-purple-700",
  teal: "border-teal-500 bg-teal-50 text-teal-700",
  orange: "border-orange-500 bg-orange-50 text-orange-700",
  amber: "border-amber-500 bg-amber-50 text-amber-700"
};
  const filteredPrayers = prayerRequests
    .filter(prayer => prayer.isPublic)
    .filter(prayer => selectedCategory === "all" || prayer.category === selectedCategory)
    .filter(prayer => 
      searchTerm === "" || 
      prayer.prayerRequest.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prayer.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const answeredPrayers = filteredPrayers.filter(p => p.isAnswered).length;

  return (
    <section id="prayer-request" className="py-28 px-6 bg-gradient-to-br from-stone-50 via-white to-amber-50/30 relative overflow-hidden">
      {/* Modern 2026 decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-amber-300/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-amber-100/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-100/80 backdrop-blur-sm px-5 py-2 rounded-full mb-5 shadow-sm">
            <FontAwesomeIcon icon={faHandsPraying} className="text-amber-600 text-sm" />
            <span className="text-amber-700 font-semibold tracking-wide uppercase text-xs">Prayer Wall</span>
            <FontAwesomeIcon icon={faHeart} className="text-amber-600 text-sm" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold serif text-stone-800 mb-4">
             <span className="text-amber-600">Prayer Requests</span>
          </h2>
          <div className="w-28 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full mb-6"></div>
          <p className="text-stone-600 max-w-2xl mx-auto text-lg">
            Share your burdens and join us in praying for one another. You are not alone.
          </p>
        </div>

        {/* Prayer Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-amber-600">{prayerRequests.length}</div>
            <div className="text-stone-500 text-sm">Total Prayers</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-amber-600">{answeredPrayers}</div>
            <div className="text-stone-500 text-sm">Answered</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-amber-600">{prayerCount}</div>
            <div className="text-stone-500 text-sm">Prayers Offered</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-amber-600">24/7</div>
            <div className="text-stone-500 text-sm">Prayer Team</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Prayer Request Form */}
          <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 border border-stone-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                <FontAwesomeIcon icon={faPenAlt} className="text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-stone-800">Submit a Prayer Request</h3>
            </div>
            
            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Anonymous Toggle */}
                <div className="flex items-center justify-between p-4 bg-stone-50 rounded-xl">
                  <div>
                    <p className="font-medium text-stone-800">Share Anonymously</p>
                    <p className="text-stone-500 text-sm">Your name won't be displayed publicly</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      name="isAnonymous"
                      checked={formData.isAnonymous}
                      onChange={handleChange}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-stone-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-stone-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-600"></div>
                  </label>
                </div>

                {/* Name Field (conditional) */}
                {!formData.isAnonymous && (
                  <div>
                    <label className="block text-stone-700 font-medium mb-2">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border ${dirty.name && errors.name ? 'border-red-500' : 'border-stone-200'} focus:border-amber-400 focus:ring-2 focus:ring-amber-200 transition-all`}
                      placeholder="John Doe"
                    />
                    {dirty.name && errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>
                )}

                {/* Prayer Request Field */}
                <div>
                  <label className="block text-stone-700 font-medium mb-2">Prayer Request *</label>
                  <textarea
                    name="prayerRequest"
                    value={formData.prayerRequest}
                    onChange={handleChange}
                    rows="4"
                    className={`w-full px-4 py-3 rounded-xl border ${dirty.prayerRequest && errors.prayerRequest ? 'border-red-500' : 'border-stone-200'} focus:border-amber-400 focus:ring-2 focus:ring-amber-200 transition-all resize-none`}
                    placeholder="What would you like us to pray about?"
                  ></textarea>
                  {dirty.prayerRequest && errors.prayerRequest && <p className="text-red-500 text-sm mt-1">{errors.prayerRequest}</p>}
                </div>

                {/* Category Selection */}
                <div>
                  <label className="block text-stone-700 font-medium mb-2">Category</label>
                  <div className="grid grid-cols-2 gap-2">
  {categories.slice(1).map((cat) => (
    <button
      key={cat.id}
      type="button"
      onClick={() =>
        setFormData((prev) => ({ ...prev, category: cat.id }))
      }
      className={`flex items-center gap-2 px-3 py-2 rounded-xl border transition-all ${
        formData.category === cat.id
          ? colorMap[cat.color]
          : "border-stone-200 hover:border-amber-300"
      }`}
    >
      <FontAwesomeIcon icon={getCategoryIcon(cat.id)} className="text-sm" />
      <span className="text-sm">{cat.label}</span>
    </button>
  ))}
</div>
                </div>

                {/* Public/Private Toggle */}
                <div className="flex items-center justify-between p-4 bg-stone-50 rounded-xl">
                  <div>
                    <p className="font-medium text-stone-800">Share on Prayer Wall</p>
                    <p className="text-stone-500 text-sm">Others can see and pray for your request</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      name="isPublic"
                      checked={formData.isPublic}
                      onChange={handleChange}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-stone-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-stone-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-600"></div>
                  </label>
                </div>

                {/* Allow Contact Option */}
                <div className="flex items-center justify-between p-4 bg-stone-50 rounded-xl">
                  <div>
                    <p className="font-medium text-stone-800">Allow Prayer Team to Contact Me</p>
                    <p className="text-stone-500 text-sm">Our prayer team may reach out for follow-up</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      name="allowContact"
                      checked={formData.allowContact}
                      onChange={handleChange}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-stone-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-stone-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-600"></div>
                  </label>
                </div>

                {/* Email Field (conditional) */}
                {formData.allowContact && (
                  <div>
                    <label className="block text-stone-700 font-medium mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border ${dirty.email && errors.email ? 'border-red-500' : 'border-stone-200'} focus:border-amber-400 focus:ring-2 focus:ring-amber-200 transition-all`}
                      placeholder="you@example.com"
                    />
                    {dirty.email && errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <FontAwesomeIcon icon={faSpinner} spin />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faHandsPraying} />
                      Submit Prayer Request
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-4xl" />
                </div>
                <h3 className="text-2xl font-bold text-stone-800 mb-2">Prayer Request Submitted!</h3>
                <p className="text-stone-600">Thank you for sharing. Our prayer team is lifting you up.</p>
              </div>
            )}
          </div>

          {/* Right Column - Prayer Wall */}
          <div>
            {/* Search & Filter */}
            <div className="mb-6 space-y-4">
              <div className="relative">
                <FontAwesomeIcon
  icon={faSearch}
  className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400"
/>   <input
                  type="text"
                  placeholder="Search prayer requests..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-stone-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 transition-all bg-white"
                />
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm transition-all ${
                      selectedCategory === cat.id
                        ? "bg-amber-500 text-white"
                        : "bg-white text-stone-600 hover:bg-amber-50 border border-stone-200"
                    }`}
                  >
                    <FontAwesomeIcon icon={getCategoryIcon(cat.id)} className="text-xs" />
                    <span>{cat.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Prayer Wall List */}
            <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
              {filteredPrayers.length > 0 ? (
                filteredPrayers.map((prayer) => (
                  <div
                    key={prayer.id}
                    className={`bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all border-l-4 ${getCategoryColor(prayer.category)}`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                         <FontAwesomeIcon
  icon={getCategoryIcon(prayer.category)}
  className="text-amber-600 text-sm"
/>   </div>
                        <div>
                          <p className="font-medium text-stone-800">{prayer.name}</p>
                          <p className="text-xs text-stone-400">{formatRelativeTime(prayer.date)}</p>
                        </div>
                      </div>
                      {prayer.isAnswered && (
                        <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                          <FontAwesomeIcon icon={faCheckCircle} className="mr-1" />Answered
                        </span>
                      )}
                    </div>
                    
                    <p className="text-stone-600 text-sm leading-relaxed mb-4">
                      {prayer.prayerRequest}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <button
                        onClick={() => handlePrayed(prayer.id)}
                        className="flex items-center gap-2 text-stone-500 hover:text-amber-600 transition-colors text-sm"
                      >
                        <FontAwesomeIcon icon={faHandsPraying} />
                        <span>Prayed ({prayer.prayedCount})</span>
                      </button>
                      <button className="text-stone-400 hover:text-amber-500 transition-colors">
                        <FontAwesomeIcon icon={faFlag} />
                      </button>
                    </div>
                    
                    {/* Prayed animation modal */}
                    {showPrayedModal === prayer.id && (
                      <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
                        <div className="bg-green-500 text-white px-6 py-3 rounded-full shadow-lg animate-fade-up">
                          <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
                          Prayed! 
                        </div>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="text-center py-12 bg-white rounded-xl">
                  <FontAwesomeIcon
  icon={faHandsPraying}
  className="text-4xl text-stone-300 mb-3"
/>
                  <p className="text-stone-500">No prayer requests found</p>
                </div>
              )}
            </div>

            {/* Prayer Team Note */}
            <div className="mt-6 bg-amber-50 rounded-xl p-4 border border-amber-200">
              <div className="flex items-start gap-3">
                <FontAwesomeIcon icon={faUsers} className="text-amber-600 text-lg" />
                <div>
                  <p className="text-stone-700 font-medium mb-1">Our Prayer Team</p>
                  <p className="text-stone-600 text-sm">
                    A dedicated team of prayer warriors is interceding for each request. 
                    All prayers are handled with confidentiality and care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default PrayerRequest;