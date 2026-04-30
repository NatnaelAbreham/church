// components/Volunteer.jsx
import { useState, useEffect } from "react";
  /* import '../css/volunteer.css'; */ 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faSearch,
  faChurch,
  faBook,
  faHandPeace,
  faMusic,
  faChild,
  faUsers,
  faGlobe,
  faVideo,
  faCoffee,
  faClipboardList,
  faHandsHelping,
  faCircleExclamation,
  faFire,
  faCircleCheck,
  faUserPlus,
  faQuestionCircle,
  faClock,
  faHourglassHalf,
  faBirthdayCake,
  faPenAlt,
  faTimes,
  faPaperPlane
  
} from "@fortawesome/free-solid-svg-icons";

const Volunteer = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOpportunities, setFilteredOpportunities] = useState([]);
  const [selectedOpportunity, setSelectedOpportunity] = useState(null);
  const [showApplicationModal, setShowApplicationModal] = useState(false);
  const [applicationForm, setApplicationForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    availability: "",
    experience: "",
    motivation: "",
    agreeToTerms: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [formDirty, setFormDirty] = useState({});

 const categories = [
  { id: "all", label: "All Opportunities", icon: faHandPeace, color: "amber" },
  { id: "worship", label: "Worship & Music", icon: faMusic, color: "purple" },
  { id: "children", label: "Children's Ministry", icon: faChild, color: "blue" },
  { id: "youth", label: "Youth Ministry", icon: faUsers, color: "green" },
  { id: "outreach", label: "Outreach & Missions", icon: faGlobe, color: "teal" },
  { id: "technical", label: "Technical & Media", icon: faVideo, color: "red" },
  { id: "hospitality", label: "Hospitality", icon: faCoffee, color: "orange" },
  { id: "administration", label: "Administration", icon: faClipboardList, color: "indigo" }
];

  const volunteerOpportunities = [
    
    {
      id: 2,
      title: "Children's Sunday School Teacher",
      category: "children",
      commitment: "Weekly (Sundays)",
      timeCommitment: "2 hours/week",
      spotsAvailable: 5,
      description: "Teach and mentor children ages 4-11 during Sunday School hour. Curriculum and materials provided. Background check required.",
      requirements: ["Love for children", "Patient and nurturing", "Completed background check", "Basic Bible knowledge"],
      benefits: ["Impact young lives", "Teaching experience", "Joy of seeing kids grow in faith"],
      image: "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=400",
      urgency: "high",
      ageRequirement: "18+"
    },
    {
      id: 3,
      title: "Audio/Visual Technician",
      category: "technical",
      commitment: "Rotating (Sundays)",
      timeCommitment: "3-4 hours/week",
      spotsAvailable: 2,
      description: "Run sound board, manage livestream, operate presentation software during services. Training provided.",
      requirements: ["Basic computer skills", "Attention to detail", "Willingness to learn", "Ability to arrive early"],
      benefits: ["Technical training", "Behind-the-scenes ministry", "Flexible schedule"],
      image: "https://images.pexels.com/photos/3768138/pexels-photo-3768138.jpeg?auto=compress&cs=tinysrgb&w=400",
      urgency: "normal",
      ageRequirement: "16+"
    },
    
    {
      id: 5,
      title: "Food Pantry Coordinator",
      category: "outreach",
      commitment: "Weekly (Wednesdays)",
      timeCommitment: "4 hours/week",
      spotsAvailable: 1,
      description: "Help organize, stock, and distribute food to families in need. Coordinate with local food banks and manage volunteer schedules.",
      requirements: ["Organizational skills", "Compassionate heart", "Physical ability to lift boxes", "Reliable transportation"],
      benefits: ["Serve the hungry", "Community impact", "Meaningful relationships"],
      image: "https://images.pexels.com/photos/6646861/pexels-photo-6646861.jpeg?auto=compress&cs=tinysrgb&w=400",
      urgency: "urgent",
      ageRequirement: "18+"
    },
    {
      id: 6,
      title: "Welcome Team Greeter",
      category: "hospitality",
      commitment: "Rotating (Sundays)",
      timeCommitment: "1.5 hours/week",
      spotsAvailable: 8,
      description: "Welcome visitors, answer questions, and help people feel at home. Be the first smiling face people see when they arrive.",
      requirements: ["Friendly personality", "Good communication", "Punctuality", "Warm smile"],
      benefits: ["Meet new people", "Low time commitment", "Make first-time visitors feel welcome"],
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400",
      urgency: "normal",
      ageRequirement: "14+"
    },
    {
      id: 7,
      title: "Social Media Manager",
      category: "technical",
      commitment: "Weekly",
      timeCommitment: "3-5 hours/week",
      spotsAvailable: 2,
      description: "Manage church social media accounts, create engaging content, and promote events and sermons.",
      requirements: ["Social media experience", "Creative writing skills", "Graphic design basic knowledge", "Attention to detail"],
      benefits: ["Creative outlet", "Remote work possible", "Build portfolio"],
      image: "https://images.pexels.com/photos/5697240/pexels-photo-5697240.jpeg?auto=compress&cs=tinysrgb&w=400",
      urgency: "normal",
      ageRequirement: "16+"
    },
    {
      id: 8,
      title: "Prayer Team Member",
      category: "administration",
      commitment: "Weekly",
      timeCommitment: "1-2 hours/week",
      spotsAvailable: 6,
      description: "Pray for prayer requests received through our website and prayer meetings. Join our prayer chain for urgent needs.",
      requirements: ["Heart for prayer", "Faithfulness", "Confidentiality", "Availability for prayer meetings"],
      benefits: ["Deepen prayer life", "Support others spiritually", "Flexible schedule"],
      image: "https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=400",
      urgency: "normal",
      ageRequirement: "18+"
    },
    {
      id: 9,
      title: "Missions Trip Participant",
      category: "outreach",
      commitment: "One-time (July)",
      timeCommitment: "Full week",
      spotsAvailable: 15,
      description: "Join our summer missions trip to Guatemala. Help with construction, medical clinics, and children's programs.",
      requirements: ["Passport", "Physical ability", "Team player", "Fundraising commitment"],
      benefits: ["Life-changing experience", "Cultural exchange", "Make eternal impact"],
      image: "https://images.pexels.com/photos/7105761/pexels-photo-7105761.jpeg?auto=compress&cs=tinysrgb&w=400",
      urgency: "normal",
      ageRequirement: "16+"
    },
    {
      id: 10,
      title: "Office Administrative Assistant",
      category: "administration",
      commitment: "Weekly",
      timeCommitment: "4-6 hours/week",
      spotsAvailable: 2,
      description: "Help with office tasks: answering phones, data entry, preparing bulletins, and organizing supplies.",
      requirements: ["Computer skills", "Organized", "Reliable", "Friendly phone manner"],
      benefits: ["Learn office skills", "Flexible hours", "Support church operations"],
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
      urgency: "normal",
      ageRequirement: "18+"
    }
  ];

  useEffect(() => {
    let filtered = volunteerOpportunities;

    if (selectedCategory !== "all") {
      filtered = filtered.filter(opp => opp.category === selectedCategory);
    }

    if (searchTerm.trim() !== "") {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(opp =>
        opp.title.toLowerCase().includes(term) ||
        opp.description.toLowerCase().includes(term) ||
        opp.category.toLowerCase().includes(term)
      );
    }

    setFilteredOpportunities(filtered);
  }, [selectedCategory, searchTerm]);

  const openApplicationModal = (opportunity) => {
    setSelectedOpportunity(opportunity);
    setShowApplicationModal(true);
    setApplicationForm({
      fullName: "",
      email: "",
      phone: "",
      availability: "",
      experience: "",
      motivation: "",
      agreeToTerms: false
    });
    setFormErrors({});
    setFormDirty({});
    document.body.style.overflow = "hidden";
  };

  const closeApplicationModal = () => {
    setShowApplicationModal(false);
    setSelectedOpportunity(null);
    document.body.style.overflow = "auto";
  };

  const handleApplicationChange = (e) => {
    const { name, value, type, checked } = e.target;
    setApplicationForm(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
    setFormDirty(prev => ({ ...prev, [name]: true }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validateApplication = () => {
    const errors = {};
    if (!applicationForm.fullName.trim()) errors.fullName = "Please enter your full name";
    if (!applicationForm.email.trim()) errors.email = "Please enter your email";
    if (applicationForm.email.trim() && !/^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/.test(applicationForm.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!applicationForm.phone.trim()) errors.phone = "Please enter your phone number";
    if (!applicationForm.motivation.trim()) errors.motivation = "Please tell us why you want to volunteer";
    if (!applicationForm.agreeToTerms) errors.agreeToTerms = "You must agree to the terms";
    return errors;
  };

  const handleApplicationSubmit = async (e) => {
    e.preventDefault();
    const errors = validateApplication();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log("Volunteer Application:", {
      opportunity: selectedOpportunity,
      applicant: applicationForm
    });

    setIsSubmitting(false);
    setIsSuccess(true);

    setTimeout(() => {
      setIsSuccess(false);
      closeApplicationModal();
    }, 3000);
  };

 const getUrgencyBadge = (urgency) => {
  switch (urgency) {
    case "urgent":
      return {
        bg: "bg-red-500",
        text: "Urgent Need",
        icon: faCircleExclamation
      };

    case "high":
      return {
        bg: "bg-orange-500",
        text: "High Demand",
        icon: faFire
      };

    default:
      return {
        bg: "bg-green-500",
        text: "Open",
        icon: faCircleCheck
      };
  }
};

  const getCategoryColor = (categoryId) => {
    const colors = {
      worship: "from-purple-500 to-purple-600",
      children: "from-blue-500 to-blue-600",
      youth: "from-green-500 to-green-600",
      outreach: "from-teal-500 to-teal-600",
      technical: "from-red-500 to-red-600",
      hospitality: "from-orange-500 to-orange-600",
      administration: "from-indigo-500 to-indigo-600"
    };
    return colors[categoryId] || "from-amber-500 to-amber-600";
  };

 const getCategoryIcon = (categoryId) => {
  const icons = {
    worship: faMusic,
    children: faChild,
    youth: faUsers,
    outreach: faGlobe,
    technical: faVideo,
    hospitality: faCoffee,
    administration: faClipboardList
  };

  return icons[categoryId] || faHandPeace;
};

  

  return (
    <section id="volunteer" className="py-28 px-6 bg-gradient-to-br from-stone-50 via-white to-amber-50/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-amber-300/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-amber-100/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-100/80 backdrop-blur-sm px-5 py-2 rounded-full mb-5 shadow-sm">
            <FontAwesomeIcon icon={faHandsHelping} className="text-amber-600 text-sm" />
            <span className="text-amber-700 font-semibold tracking-wide uppercase text-xs">Serve with Purpose</span>
            <FontAwesomeIcon icon={faHeart} className="text-amber-600 text-sm" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold serif text-stone-800 mb-4">
            <span className="text-amber-600">Volunteer Opportunities</span>
          </h2>
          <div className="w-28 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full mb-6"></div>
          <p className="text-stone-600 max-w-2xl mx-auto text-lg">
            Use your God-given gifts to serve others and make a difference in our community
          </p>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-amber-600">{volunteerOpportunities.length}</div>
            <div className="text-stone-500 text-sm">Active Roles</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-amber-600">250+</div>
            <div className="text-stone-500 text-sm">Active Volunteers</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-amber-600">5,000+</div>
            <div className="text-stone-500 text-sm">Hours Served/Year</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-amber-600">8</div>
            <div className="text-stone-500 text-sm">Ministry Areas</div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-wrap gap-4 mb-10">
          <div className="flex-1 min-w-[200px]">
            <div className="relative">
              <FontAwesomeIcon
                icon={faSearch}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400"
              />  <input
                type="text"
                placeholder="Search opportunities..."
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
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${selectedCategory === cat.id
                    ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg"
                    : "bg-white text-stone-600 hover:bg-amber-50 border border-stone-200"
                  }`}
              >
                <FontAwesomeIcon icon={cat.icon} className="text-sm" />
                <span className="text-sm font-medium hidden sm:inline">{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Opportunities Grid */}
        {filteredOpportunities.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredOpportunities.map((opportunity, index) => {
              const urgency = getUrgencyBadge(opportunity.urgency);
              return (
                <div
                  key={opportunity.id}
                  className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden border border-stone-100 hover:border-amber-200"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={opportunity.image}
                      alt={opportunity.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className={`${urgency.bg} text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1`}>
                        <FontAwesomeIcon icon={urgency.icon} className="text-xs" />
                        {urgency.text}
                      </span>
                      <span className="bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        {categories.find(c => c.id === opportunity.category)?.label}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full text-white text-xs">
                      <FontAwesomeIcon icon={faUserPlus} className="mr-1" />
                      {opportunity.spotsAvailable} spots left
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-stone-800 mb-2 group-hover:text-amber-700 transition-colors">
                      {opportunity.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 text-xs text-stone-500 mb-3">
                      <span className="flex items-center gap-1">
                        <FontAwesomeIcon icon={faClock} className="text-amber-500" />
                        {opportunity.commitment}
                      </span>
                      <span className="flex items-center gap-1">
                        <FontAwesomeIcon icon={faHourglassHalf} className="text-amber-500" />
                        {opportunity.timeCommitment}
                      </span>
                      <span className="flex items-center gap-1">
                        <FontAwesomeIcon icon={faBirthdayCake} className="text-amber-500" />
                        {opportunity.ageRequirement}
                      </span>
                    </div>
                    <p className="text-stone-600 text-sm leading-relaxed mb-4 line-clamp-2">
                      {opportunity.description}
                    </p>

                    {/* Requirements Preview */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {opportunity.requirements.slice(0, 2).map((req, idx) => (
                        <span key={idx} className="text-xs bg-stone-100 text-stone-600 px-2 py-1 rounded-full">
                          {req}
                        </span>
                      ))}
                      {opportunity.requirements.length > 2 && (
                        <span className="text-xs bg-stone-100 text-stone-600 px-2 py-1 rounded-full">
                          +{opportunity.requirements.length - 2} more
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => openApplicationModal(opportunity)}
                      className="w-full py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl font-medium hover:shadow-md transition-all flex items-center justify-center gap-2"
                    >
                      <FontAwesomeIcon icon={faPenAlt} />
                      Apply Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FontAwesomeIcon icon={faHandsHelping} className="text-amber-600 text-4xl" />
            </div>
            <h3 className="text-2xl font-bold text-stone-800 mb-2">No opportunities found</h3>
            <p className="text-stone-600">Try adjusting your search or filter to see more opportunities.</p>
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

        {/* Call to Action Banner */}
        <div className="mt-12 bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl p-6 text-center text-white">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
               <FontAwesomeIcon icon={faQuestionCircle} className="text-2xl" />
              </div>
              <div className="text-left">
                <h4 className="font-bold text-lg">Not sure where to serve?</h4>
                <p className="text-amber-100 text-sm">Let us help you find your perfect fit</p>
              </div>
            </div>
            <button
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="px-6 py-2 bg-white text-amber-700 rounded-full font-semibold hover:shadow-lg transition-all"
            >
              Talk to Our Volunteer Coordinator
            </button>
          </div>
        </div>
      </div>

      {/* Application Modal */}
      {showApplicationModal && selectedOpportunity && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md" onClick={closeApplicationModal}>
          <div className="relative max-w-2xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeApplicationModal} className="absolute top-6 right-6 w-10 h-10 rounded-full bg-stone-100 hover:bg-amber-500 hover:text-white transition-colors z-10">
              <FontAwesomeIcon icon={faTimes} />
            </button>

            <div className="p-6 md:p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FontAwesomeIcon icon={faHandsHelping} className="text-amber-600 text-2xl" />
                </div>
                <h2 className="text-2xl font-bold text-stone-800">Apply to Volunteer</h2>
                <p className="text-stone-500 mt-1">{selectedOpportunity.title}</p>
              </div>

              {!isSuccess ? (
                <form onSubmit={handleApplicationSubmit} className="space-y-4">
                  <div>
                    <label className="block text-stone-700 font-medium mb-1">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      value={applicationForm.fullName}
                      onChange={handleApplicationChange}
                      className={`w-full px-4 py-3 rounded-xl border ${formDirty.fullName && formErrors.fullName ? 'border-red-500' : 'border-stone-200'} focus:border-amber-400 focus:ring-2 focus:ring-amber-200 transition-all`}
                    />
                    {formDirty.fullName && formErrors.fullName && <p className="text-red-500 text-sm mt-1">{formErrors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block text-stone-700 font-medium mb-1">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={applicationForm.email}
                      onChange={handleApplicationChange}
                      className={`w-full px-4 py-3 rounded-xl border ${formDirty.email && formErrors.email ? 'border-red-500' : 'border-stone-200'} focus:border-amber-400 focus:ring-2 focus:ring-amber-200 transition-all`}
                    />
                    {formDirty.email && formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-stone-700 font-medium mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={applicationForm.phone}
                      onChange={handleApplicationChange}
                      className={`w-full px-4 py-3 rounded-xl border ${formDirty.phone && formErrors.phone ? 'border-red-500' : 'border-stone-200'} focus:border-amber-400 focus:ring-2 focus:ring-amber-200 transition-all`}
                    />
                    {formDirty.phone && formErrors.phone && <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-stone-700 font-medium mb-1">Availability</label>
                    <textarea
                      name="availability"
                      value={applicationForm.availability}
                      onChange={handleApplicationChange}
                      rows="2"
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 transition-all resize-none"
                      placeholder="e.g., Sundays only, weekday evenings, flexible..."
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-stone-700 font-medium mb-1">Why do you want to volunteer? *</label>
                    <textarea
                      name="motivation"
                      value={applicationForm.motivation}
                      onChange={handleApplicationChange}
                      rows="3"
                      className={`w-full px-4 py-3 rounded-xl border ${formDirty.motivation && formErrors.motivation ? 'border-red-500' : 'border-stone-200'} focus:border-amber-400 focus:ring-2 focus:ring-amber-200 transition-all resize-none`}
                      placeholder="Tell us about your passion for serving..."
                    ></textarea>
                    {formDirty.motivation && formErrors.motivation && <p className="text-red-500 text-sm mt-1">{formErrors.motivation}</p>}
                  </div>

                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      name="agreeToTerms"
                      checked={applicationForm.agreeToTerms}
                      onChange={handleApplicationChange}
                      className="w-5 h-5 rounded border-stone-300 text-amber-600 focus:ring-amber-500"
                    />
                    <label className="text-stone-600 text-sm">
                      I agree to the volunteer terms and conditions and consent to a background check *
                    </label>
                  </div>
                  {formDirty.agreeToTerms && formErrors.agreeToTerms && <p className="text-red-500 text-sm">{formErrors.agreeToTerms}</p>}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <FontAwesomeIcon icon={faSpinner} spin />
                        Submitting...
                      </>
                    ) : (
                      <>
                       <FontAwesomeIcon icon={faPaperPlane} />
                        Submit Application
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-4xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-stone-800 mb-2">Application Submitted!</h3>
                  <p className="text-stone-600">Thank you for your interest! Our volunteer coordinator will contact you within 3-5 business days.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}


    </section>
  );
};

export default Volunteer;