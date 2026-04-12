// components/FAQ.jsx
import { useState, useEffect } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredFaqs, setFilteredFaqs] = useState([]);
  const [expandedAll, setExpandedAll] = useState(false);

  const categories = [
    { id: "all", label: "All Questions", icon: "fa-question-circle", color: "amber" },
    { id: "worship", label: "Worship Services", icon: "fa-music", color: "amber" },
    { id: "visiting", label: "Visiting", icon: "fa-church", color: "blue" },
    { id: "membership", label: "Membership", icon: "fa-user-plus", color: "green" },
    { id: "children", label: "Children & Youth", icon: "fa-child", color: "purple" },
    { id: "giving", label: "Giving & Tithes", icon: "fa-hand-holding-heart", color: "red" },
    { id: "events", label: "Events & Programs", icon: "fa-calendar-alt", color: "orange" },
    { id: "online", label: "Online & Livestream", icon: "fa-video", color: "teal" },
    { id: "prayer", label: "Prayer & Care", icon: "fa-praying-hands", color: "indigo" }
  ];

  const faqs = [
    // Worship Services Category
    {
      id: 1,
      question: "What are your service times?",
      answer: "We offer two Sunday services: 9:00 AM (Traditional Worship) and 11:00 AM (Contemporary Worship). We also have a Wednesday evening service at 7:00 PM for Prayer & Bible Study, and a Saturday evening service at 6:00 PM in our Chapel.",
      category: "worship",
      tags: ["times", "schedule", "services"],
      helpful: 245,
      featured: true
    },
    {
      id: 2,
      question: "How long are your services?",
      answer: "Our Sunday services typically last about 75 minutes. Wednesday evening services run for 90 minutes, and Saturday evening services are approximately 75 minutes.",
      category: "worship",
      tags: ["duration", "length", "time"],
      helpful: 189,
      featured: false
    },
    {
      id: 3,
      question: "What style of worship do you have?",
      answer: "We offer both traditional and contemporary worship styles. Our 9:00 AM service features hymns, organ, and traditional liturgy. Our 11:00 AM service features a full band, modern worship songs, and a more casual atmosphere.",
      category: "worship",
      tags: ["music", "style", "traditional", "contemporary"],
      helpful: 312,
      featured: true
    },
    {
      id: 4,
      question: "Do you have communion services?",
      answer: "Yes, we celebrate communion on the first Sunday of every month during both services. All believers are welcome to participate.",
      category: "worship",
      tags: ["communion", "eucharist", "sacrament"],
      helpful: 156,
      featured: false
    },

    // Visiting Category
    {
      id: 5,
      question: "What should I wear to church?",
      answer: "Come as you are! You'll see everything from casual clothes to business casual and traditional Sunday attire. There's no dress code - we want you to feel comfortable and welcome.",
      category: "visiting",
      tags: ["dress code", "clothes", "attire"],
      helpful: 567,
      featured: true
    },
    {
      id: 6,
      question: "Where are you located?",
      answer: "We are located at 2450 Grace Avenue, Austin, TX 78701. We're conveniently situated near downtown Austin with easy access from Highway 35 and MoPac Expressway.",
      category: "visiting",
      tags: ["address", "directions", "location", "map"],
      helpful: 423,
      featured: true
    },
    {
      id: 7,
      question: "Is there parking available?",
      answer: "Yes! We have a free on-site parking garage with 300+ spaces. Additional street parking is available on surrounding streets. Handicap parking is available near all entrances.",
      category: "visiting",
      tags: ["parking", "car", "handicap"],
      helpful: 298,
      featured: false
    },
    {
      id: 8,
      question: "Is the church wheelchair accessible?",
      answer: "Absolutely! Our entire facility is fully wheelchair accessible, including ramps, elevators, and designated seating areas in the sanctuary. We also offer assisted listening devices upon request.",
      category: "visiting",
      tags: ["accessibility", "wheelchair", "disability", "handicap"],
      helpful: 187,
      featured: true
    },
    {
      id: 9,
      question: "Where do I go when I arrive?",
      answer: "Our Welcome Center is located at the main entrance. Our friendly greeters will be happy to direct you to the sanctuary, children's ministry area, or any other location you need.",
      category: "visiting",
      tags: ["first time", "welcome", "greeters"],
      helpful: 234,
      featured: false
    },

    // Membership Category
    {
      id: 10,
      question: "How do I become a member?",
      answer: "We offer a 4-week membership class called 'Discover Grace' that covers our beliefs, values, and how to get involved. Classes are offered quarterly. After completing the class, you'll have an opportunity to meet with our pastors and officially join.",
      category: "membership",
      tags: ["join", "become member", "membership class"],
      helpful: 189,
      featured: true
    },
    {
      id: 11,
      question: "What are the requirements for membership?",
      answer: "Membership requires a personal faith in Jesus Christ, baptism by immersion (or transfer from another evangelical church), completion of our membership class, and agreement with our statement of faith and church covenant.",
      category: "membership",
      tags: ["requirements", "qualifications", "baptism"],
      helpful: 145,
      featured: false
    },
    {
      id: 12,
      question: "Do you have to be a member to volunteer?",
      answer: "While many volunteer opportunities are open to everyone, some leadership roles and positions working with children and youth require membership and background checks.",
      category: "membership",
      tags: ["volunteer", "serve", "leadership"],
      helpful: 167,
      featured: false
    },

    // Children & Youth Category
    {
      id: 13,
      question: "Is there children's ministry during services?",
      answer: "Yes! We offer children's ministry for infants through 5th grade during both Sunday services. Our children's area is safe, secure, and staffed by trained volunteers who have passed background checks.",
      category: "children",
      tags: ["kids", "nursery", "children's church"],
      helpful: 456,
      featured: true
    },
    {
      id: 14,
      question: "What programs do you have for teenagers?",
      answer: "Our youth group (grades 6-12) meets every Friday at 7:00 PM for games, worship, and teaching. We also have Sunday morning small groups, summer camps, mission trips, and special events throughout the year.",
      category: "children",
      tags: ["teens", "youth group", "students"],
      helpful: 278,
      featured: true
    },
    {
      id: 15,
      question: "How do I register my child for children's ministry?",
      answer: "You can register your child at our check-in kiosks located in the children's ministry wing. First-time visitors should arrive 15 minutes early to complete registration. You can also pre-register online through our website.",
      category: "children",
      tags: ["registration", "check-in", "safety"],
      helpful: 198,
      featured: false
    },
    {
      id: 16,
      question: "Is there a special needs ministry?",
      answer: "Yes! Our 'All Are Welcome' ministry provides one-on-one buddies for children with special needs, sensory-friendly worship spaces, and accommodations for individuals and families.",
      category: "children",
      tags: ["special needs", "disabilities", "inclusion"],
      helpful: 134,
      featured: false
    },

    // Giving & Tithes Category
    {
      id: 17,
      question: "How can I give online?",
      answer: "You can give online through our secure giving portal on our website. We accept credit/debit cards, bank transfers, and even text-to-give options. Visit our Giving page or text 'GIVE' to 555-1234.",
      category: "giving",
      tags: ["donate", "offering", "online giving"],
      helpful: 389,
      featured: true
    },
    {
      id: 18,
      question: "Is online giving secure?",
      answer: "Absolutely! We use industry-standard encryption and security protocols. Our payment processor is PCI compliant, and we never store your full payment information on our servers.",
      category: "giving",
      tags: ["security", "safe", "encryption"],
      helpful: 234,
      featured: false
    },
    {
      id: 19,
      question: "What is tithing?",
      answer: "Tithing is the practice of giving 10% of your income to God's work. While we encourage tithing as a biblical principle, we welcome any amount you feel led to give. All gifts are tax-deductible.",
      category: "giving",
      tags: ["tithe", "tithing", "percentage"],
      helpful: 312,
      featured: true
    },
    {
      id: 20,
      question: "Can I give stocks or non-cash gifts?",
      answer: "Yes! We accept stock donations, real estate, and other non-cash assets. Please contact our finance office for assistance with these types of gifts.",
      category: "giving",
      tags: ["stocks", "assets", "non-cash"],
      helpful: 98,
      featured: false
    },

    // Events & Programs Category
    {
      id: 21,
      question: "What small groups do you offer?",
      answer: "We have over 50 small groups meeting throughout the week, including Bible studies, book clubs, support groups, and activity-based groups. You can find a group that fits your schedule and interests on our website.",
      category: "events",
      tags: ["small groups", "bible study", "community"],
      helpful: 267,
      featured: true
    },
    {
      id: 22,
      question: "How do I join a small group?",
      answer: "Visit our Small Groups page on the website to browse available groups. You can filter by day, location, topic, or demographic. Once you find a group, simply click 'Join' to connect with the leader.",
      category: "events",
      tags: ["join", "find group", "connect"],
      helpful: 198,
      featured: false
    },
    {
      id: 23,
      question: "Do you have senior adult ministries?",
      answer: "Yes! Our 'PrimeTimers' ministry serves adults 55+ with monthly luncheons, day trips, Bible studies, and fellowship events. We also offer transportation assistance for those who need it.",
      category: "events",
      tags: ["seniors", "elderly", "55+"],
      helpful: 145,
      featured: false
    },

    // Online & Livestream Category
    {
      id: 24,
      question: "Do you livestream your services?",
      answer: "Yes! We livestream both Sunday services (9:00 AM and 11:00 AM CST) on our website, YouTube channel, and Facebook page. You can watch live or view past services on demand.",
      category: "online",
      tags: ["live stream", "online church", "virtual"],
      helpful: 523,
      featured: true
    },
    {
      id: 25,
      question: "Where can I watch past sermons?",
      answer: "All of our sermons are archived on our website's Sermons page, our YouTube channel, and popular podcast platforms. You can search by date, series, or speaker.",
      category: "online",
      tags: ["recordings", "archive", "podcast"],
      helpful: 289,
      featured: true
    },
    {
      id: 26,
      question: "How do I submit a prayer request online?",
      answer: "You can submit prayer requests through our website's Prayer page, by emailing prayer@gracecovenant.org, or through our church app. Our prayer team prays over every request.",
      category: "online",
      tags: ["prayer request", "prayer team"],
      helpful: 198,
      featured: false
    },
    {
      id: 27,
      question: "Do you have a church app?",
      answer: "Yes! Our app is available for iOS and Android. You can watch services, give online, access the church directory, register for events, and receive push notifications. Search 'Grace Covenant Church' in your app store.",
      category: "online",
      tags: ["app", "mobile", "download"],
      helpful: 234,
      featured: false
    },

    // Prayer & Care Category
    {
      id: 28,
      question: "How can I receive pastoral care?",
      answer: "Our pastoral care team is available for counseling, hospital visits, home visits, and prayer. You can request care by calling the church office, emailing care@gracecovenant.org, or filling out a care request form on our website.",
      category: "prayer",
      tags: ["counseling", "pastoral care", "support"],
      helpful: 167,
      featured: true
    },
    {
      id: 29,
      question: "Do you offer grief support?",
      answer: "Yes, we offer GriefShare support groups throughout the year. These 13-week sessions provide comfort and community for those who have lost loved ones. We also offer individual grief counseling.",
      category: "prayer",
      tags: ["grief", "loss", "bereavement"],
      helpful: 189,
      featured: false
    },
    {
      id: 30,
      question: "How do I join the prayer team?",
      answer: "We welcome volunteers for our prayer team! Requirements include a heart for prayer, commitment to confidentiality, and completion of our prayer ministry training. Contact our prayer coordinator for more information.",
      category: "prayer",
      tags: ["prayer team", "volunteer", "intercessor"],
      helpful: 123,
      featured: false
    }
  ];

  // Filter FAQs based on search term and category
  useEffect(() => {
    let filtered = faqs;
    
    if (selectedCategory !== "all") {
      filtered = filtered.filter(faq => faq.category === selectedCategory);
    }
    
    if (searchTerm.trim() !== "") {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(faq => 
        faq.question.toLowerCase().includes(term) || 
        faq.answer.toLowerCase().includes(term) ||
        faq.tags.some(tag => tag.toLowerCase().includes(term))
      );
    }
    
    setFilteredFaqs(filtered);
    setActiveIndex(null);
  }, [searchTerm, selectedCategory]);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const toggleExpandAll = () => {
    if (expandedAll) {
      setActiveIndex(null);
    } else {
      // Expand all by setting active to a special value
      // We'll handle this in the rendering
      setExpandedAll(true);
      // For now, we'll just set a flag
    }
    setExpandedAll(!expandedAll);
  };

  // Helper to check if an item should be expanded
  const isExpanded = (index) => {
    if (expandedAll) return true;
    return activeIndex === index;
  };

  const getCategoryColor = (categoryId) => {
    const category = categories.find(c => c.id === categoryId);
    const colors = {
      amber: "border-l-amber-500 bg-amber-50",
      blue: "border-l-blue-500 bg-blue-50",
      green: "border-l-green-500 bg-green-50",
      purple: "border-l-purple-500 bg-purple-50",
      red: "border-l-red-500 bg-red-50",
      orange: "border-l-orange-500 bg-orange-50",
      teal: "border-l-teal-500 bg-teal-50",
      indigo: "border-l-indigo-500 bg-indigo-50"
    };
    return colors[category?.color] || colors.amber;
  };

  const getIconColor = (categoryId) => {
    const category = categories.find(c => c.id === categoryId);
    const colors = {
      amber: "text-amber-600",
      blue: "text-blue-600",
      green: "text-green-600",
      purple: "text-purple-600",
      red: "text-red-600",
      orange: "text-orange-600",
      teal: "text-teal-600",
      indigo: "text-indigo-600"
    };
    return colors[category?.color] || colors.amber;
  };

  const markHelpful = (id) => {
    // In a real app, you'd send this to an API
    const faq = faqs.find(f => f.id === id);
    if (faq) {
      faq.helpful += 1;
      alert("Thank you for your feedback!");
    }
  };

  return (
    <section id="faq" className="py-28 px-6 bg-gradient-to-br from-white via-stone-50 to-amber-50/30 relative overflow-hidden">
      {/* Modern 2026 decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 right-10 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-amber-300/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-amber-100/5 to-transparent rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-100/80 backdrop-blur-sm px-5 py-2 rounded-full mb-5 shadow-sm">
            <i className="fas fa-question-circle text-amber-600 text-sm"></i>
            <span className="text-amber-700 font-semibold tracking-wide uppercase text-xs">Got Questions?</span>
            <i className="fas fa-comments text-amber-600 text-sm"></i>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold serif text-stone-800 mb-4">
            Frequently Asked <span className="text-amber-600">Questions</span>
          </h2>
          <div className="w-28 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full mb-6"></div>
          <p className="text-stone-600 max-w-2xl mx-auto text-lg">
            Find answers to common questions about our church, services, and ministries
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="relative">
            <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-stone-400"></i>
            <input
              type="text"
              placeholder="Search questions, topics, or keywords..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl border border-stone-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 transition-all shadow-sm bg-white"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
              >
                <i className="fas fa-times-circle"></i>
              </button>
            )}
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`group flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === cat.id
                  ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-500/25"
                  : "bg-white text-stone-600 hover:bg-amber-50 border border-stone-200"
              }`}
            >
              <i className={`fas ${cat.icon} text-sm`}></i>
              <span className="text-sm font-medium hidden sm:inline">{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Expand/Collapse All Button */}
        {filteredFaqs.length > 0 && (
          <div className="flex justify-end mb-6">
            <button
              onClick={toggleExpandAll}
              className="flex items-center gap-2 text-sm text-amber-600 hover:text-amber-700 font-medium transition-colors"
            >
              <i className={`fas ${expandedAll ? "fa-compress" : "fa-expand"}`}></i>
              {expandedAll ? "Collapse All" : "Expand All"}
            </button>
          </div>
        )}

        {/* FAQ Accordion */}
        {filteredFaqs.length > 0 ? (
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <div
                key={faq.id}
                className={`bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-stone-100 overflow-hidden ${getCategoryColor(faq.category)} border-l-4`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 text-left flex items-start justify-between gap-4 group"
                >
                  <div className="flex items-start gap-4 flex-1">
                    <div className={`mt-1 ${getIconColor(faq.category)}`}>
                      <i className="fas fa-question-circle text-lg"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-stone-800 text-lg group-hover:text-amber-700 transition-colors">
                        {faq.question}
                      </h3>
                      {faq.featured && (
                        <span className="inline-flex items-center gap-1 mt-1 text-xs text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">
                          <i className="fas fa-star text-xs"></i>
                          Featured
                        </span>
                      )}
                    </div>
                  </div>
                  <div className={`transform transition-transform duration-300 ${isExpanded(index) ? "rotate-180" : ""}`}>
                    <i className="fas fa-chevron-down text-stone-400"></i>
                  </div>
                </button>
                
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    isExpanded(index) ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-5 pt-0">
                    <div className="flex items-start gap-4 pl-8">
                      <div className="text-amber-400 mt-1">
                        <i className="fas fa-reply-all text-sm"></i>
                      </div>
                      <div className="flex-1">
                        <p className="text-stone-600 leading-relaxed mb-4">
                          {faq.answer}
                        </p>
                        
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {faq.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-stone-100 text-stone-600 px-2 py-1 rounded-full"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                        
                        {/* Helpful Button */}
                        <button
                          onClick={() => markHelpful(faq.id)}
                          className="flex items-center gap-2 text-sm text-stone-500 hover:text-amber-600 transition-colors"
                        >
                          <i className="far fa-thumbs-up"></i>
                          <span>Was this helpful? ({faq.helpful})</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-search text-amber-600 text-4xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-stone-800 mb-2">No questions found</h3>
            <p className="text-stone-600">
              We couldn't find any questions matching "{searchTerm}". Try a different search term or browse our categories.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
              }}
              className="mt-6 text-amber-600 hover:text-amber-700 font-medium"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Still Have Questions? */}
        <div className="mt-16 bg-gradient-to-r from-amber-600 to-amber-700 rounded-3xl p-8 md:p-10 text-center text-white">
          <i className="fas fa-comment-dots text-4xl mb-4 opacity-80"></i>
          <h3 className="text-2xl md:text-3xl font-bold serif mb-3">Still Have Questions?</h3>
          <p className="text-amber-100 mb-6 max-w-2xl mx-auto">
            Can't find what you're looking for? We're here to help! Reach out to our team and we'll get back to you promptly.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-white text-amber-700 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105 flex items-center gap-2"
            >
              <i className="fas fa-envelope"></i>
              Contact Us
            </button>
            <button
              onClick={() => window.open("tel:+15125551234")}
              className="bg-transparent border-2 border-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-all flex items-center gap-2"
            >
              <i className="fas fa-phone-alt"></i>
              Call (512) 555-1234
            </button>
          </div>
        </div>

        {/* FAQ Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          <div className="text-center p-4 bg-white rounded-xl shadow-sm">
            <div className="text-2xl font-bold text-amber-600">{faqs.length}</div>
            <div className="text-stone-500 text-sm">Total FAQs</div>
          </div>
          <div className="text-center p-4 bg-white rounded-xl shadow-sm">
            <div className="text-2xl font-bold text-amber-600">{categories.length - 1}</div>
            <div className="text-stone-500 text-sm">Categories</div>
          </div>
          <div className="text-center p-4 bg-white rounded-xl shadow-sm">
            <div className="text-2xl font-bold text-amber-600">24/7</div>
            <div className="text-stone-500 text-sm">Available Online</div>
          </div>
          <div className="text-center p-4 bg-white rounded-xl shadow-sm">
            <div className="text-2xl font-bold text-amber-600">⭐ 4.9</div>
            <div className="text-stone-500 text-sm">Helpful Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;