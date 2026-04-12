// components/Newsletter.jsx
import { useState, useEffect } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [emailDirty, setEmailDirty] = useState(false);
  const [nameDirty, setNameDirty] = useState(false);

  const interests = [
    { id: "weekly", label: "Weekly Newsletter", icon: "fa-newspaper", color: "amber" },
    { id: "events", label: "Events & Updates", icon: "fa-calendar-alt", color: "blue" },
    { id: "prayer", label: "Prayer Requests", icon: "fa-praying-hands", color: "purple" },
    { id: "devotional", label: "Daily Devotionals", icon: "fa-bible", color: "green" },
    { id: "volunteer", label: "Volunteer Opportunities", icon: "fa-hands-helping", color: "red" },
    { id: "missions", label: "Missions Updates", icon: "fa-globe", color: "teal" }
  ];

  const testimonials = [
    {
      quote: "The weekly newsletter keeps me connected to our church family even when I can't be there in person. It's my spiritual boost every week!",
      name: "Sarah Johnson",
      role: "Member since 2019",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      quote: "I love getting the daily devotionals. They help me start my day focused on God's Word. Such a blessing!",
      name: "Michael Thompson",
      role: "Small Group Leader",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      quote: "The prayer updates have allowed me to pray more effectively for our church family. I feel so much more connected.",
      name: "Lisa Chen",
      role: "Prayer Team Member",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100"
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/;
    return re.test(email);
  };

  const handleInterestToggle = (interestId) => {
    setSelectedInterests(prev =>
      prev.includes(interestId)
        ? prev.filter(id => id !== interestId)
        : [...prev, interestId]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setEmailDirty(true);
    setNameDirty(true);
    
    if (!name.trim()) {
      setError("Please enter your name");
      return;
    }
    
    if (!email.trim()) {
      setError("Please enter your email address");
      return;
    }
    
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }
    
    setIsSubmitting(true);
    setError("");
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // In a real app, you would send this data to your backend
    const subscriptionData = {
      name: name.trim(),
      email: email.trim(),
      interests: selectedInterests,
      subscribedAt: new Date().toISOString()
    };
    
    console.log("Newsletter subscription:", subscriptionData);
    
    setIsSuccess(true);
    setIsSubmitting(false);
    setEmail("");
    setName("");
    setSelectedInterests([]);
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  const getInterestColor = (color) => {
    const colors = {
      amber: "hover:border-amber-500 data-[selected=true]:border-amber-500 data-[selected=true]:bg-amber-50",
      blue: "hover:border-blue-500 data-[selected=true]:border-blue-500 data-[selected=true]:bg-blue-50",
      purple: "hover:border-purple-500 data-[selected=true]:border-purple-500 data-[selected=true]:bg-purple-50",
      green: "hover:border-green-500 data-[selected=true]:border-green-500 data-[selected=true]:bg-green-50",
      red: "hover:border-red-500 data-[selected=true]:border-red-500 data-[selected=true]:bg-red-50",
      teal: "hover:border-teal-500 data-[selected=true]:border-teal-500 data-[selected=true]:bg-teal-50"
    };
    return colors[color] || colors.amber;
  };

  const getInterestIconColor = (color) => {
    const colors = {
      amber: "text-amber-500",
      blue: "text-blue-500",
      purple: "text-purple-500",
      green: "text-green-500",
      red: "text-red-500",
      teal: "text-teal-500"
    };
    return colors[color] || colors.amber;
  };

  return (
    <section id="newsletter" className="py-28 px-6 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 relative overflow-hidden">
      {/* Modern 2026 decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-amber-400/5 to-transparent rounded-full blur-3xl"></div>
        </div>
        {/* Animated grid pattern */}
       <div
  className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23ffffff\\' fill-opacity=\\'0.02\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"
/>  </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm px-5 py-2 rounded-full mb-5 border border-amber-500/30">
            <i className="fas fa-envelope text-amber-400 text-sm"></i>
            <span className="text-amber-300 font-semibold tracking-wide uppercase text-xs">Stay Connected</span>
            <i className="fas fa-bell text-amber-400 text-sm"></i>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold serif text-white mb-4">
            Join Our <span className="text-amber-400">Newsletter</span>
          </h2>
          <div className="w-28 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full mb-6"></div>
          <p className="text-stone-300 max-w-2xl mx-auto text-lg">
            Get weekly inspiration, church updates, and prayer requests delivered straight to your inbox
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Form */}
          <div className="bg-stone-800/40 backdrop-blur-sm rounded-3xl p-8 border border-stone-700/50 shadow-2xl">
            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Your Name <span className="text-amber-400">*</span>
                  </label>
                  <div className="relative">
                    <i className="fas fa-user absolute left-4 top-1/2 -translate-y-1/2 text-stone-500"></i>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      onBlur={() => setNameDirty(true)}
                      className={`w-full pl-11 pr-4 py-3 bg-stone-700/50 border rounded-xl text-white placeholder-stone-400 focus:outline-none focus:ring-2 transition-all ${
                        nameDirty && !name.trim()
                          ? "border-red-500 focus:ring-red-500/20"
                          : "border-stone-600 focus:border-amber-500 focus:ring-amber-500/20"
                      }`}
                      placeholder="John Doe"
                    />
                  </div>
                  {nameDirty && !name.trim() && (
                    <p className="text-red-400 text-xs mt-1">Please enter your name</p>
                  )}
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Email Address <span className="text-amber-400">*</span>
                  </label>
                  <div className="relative">
                    <i className="fas fa-envelope absolute left-4 top-1/2 -translate-y-1/2 text-stone-500"></i>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onBlur={() => setEmailDirty(true)}
                      className={`w-full pl-11 pr-4 py-3 bg-stone-700/50 border rounded-xl text-white placeholder-stone-400 focus:outline-none focus:ring-2 transition-all ${
                        emailDirty && email && !validateEmail(email)
                          ? "border-red-500 focus:ring-red-500/20"
                          : emailDirty && !email
                          ? "border-red-500 focus:ring-red-500/20"
                          : "border-stone-600 focus:border-amber-500 focus:ring-amber-500/20"
                      }`}
                      placeholder="you@example.com"
                    />
                  </div>
                  {emailDirty && !email && (
                    <p className="text-red-400 text-xs mt-1">Please enter your email address</p>
                  )}
                  {emailDirty && email && !validateEmail(email) && (
                    <p className="text-red-400 text-xs mt-1">Please enter a valid email address</p>
                  )}
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-3">
                    I'm interested in (select all that apply)
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {interests.map((interest) => (
                      <button
                        key={interest.id}
                        type="button"
                        onClick={() => handleInterestToggle(interest.id)}
                        data-selected={selectedInterests.includes(interest.id)}
                        className={`flex items-center gap-3 p-3 rounded-xl border-2 transition-all duration-300 ${
                          selectedInterests.includes(interest.id)
                            ? `border-${interest.color}-500 bg-${interest.color}-500/10`
                            : "border-stone-600 bg-stone-700/30 hover:border-stone-500"
                        }`}
                      >
                        <i className={`fas ${interest.icon} ${getInterestIconColor(interest.color)}`}></i>
                        <span className="text-white text-sm">{interest.label}</span>
                        {selectedInterests.includes(interest.id) && (
                          <i className="fas fa-check-circle text-green-500 ml-auto"></i>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin"></i>
                      Subscribing...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane group-hover:translate-x-1 transition-transform"></i>
                      Subscribe Now
                    </>
                  )}
                </button>

                <p className="text-stone-400 text-xs text-center">
                  <i className="fas fa-lock mr-1"></i>
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            ) : (
              <div className="text-center py-8 animate-fade-up">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-check-circle text-green-400 text-4xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Welcome to Our Family! 🎉</h3>
                <p className="text-stone-300 mb-4">
                  Thanks for subscribing! You'll receive our first newsletter within 24 hours.
                </p>
                <div className="bg-amber-500/10 rounded-xl p-4 border border-amber-500/20">
                  <p className="text-amber-300 text-sm">
                    <i className="fas fa-gift mr-2"></i>
                    As a welcome gift, check your email for our free devotional eBook!
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Benefits & Testimonials */}
          <div className="space-y-8">
            {/* Benefits Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-stone-800/40 backdrop-blur-sm rounded-2xl p-5 text-center hover:bg-stone-800/60 transition-all duration-300 group">
                <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <i className="fas fa-calendar-week text-amber-400 text-xl"></i>
                </div>
                <h4 className="text-white font-semibold mb-1">Weekly Updates</h4>
                <p className="text-stone-400 text-sm">Stay informed about church events and news</p>
              </div>
              <div className="bg-stone-800/40 backdrop-blur-sm rounded-2xl p-5 text-center hover:bg-stone-800/60 transition-all duration-300 group">
                <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <i className="fas fa-heart text-amber-400 text-xl"></i>
                </div>
                <h4 className="text-white font-semibold mb-1">Prayer Requests</h4>
                <p className="text-stone-400 text-sm">Join us in praying for our community</p>
              </div>
              <div className="bg-stone-800/40 backdrop-blur-sm rounded-2xl p-5 text-center hover:bg-stone-800/60 transition-all duration-300 group">
                <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <i className="fas fa-bible text-amber-400 text-xl"></i>
                </div>
                <h4 className="text-white font-semibold mb-1">Devotionals</h4>
                <p className="text-stone-400 text-sm">Daily spiritual nourishment delivered to you</p>
              </div>
              <div className="bg-stone-800/40 backdrop-blur-sm rounded-2xl p-5 text-center hover:bg-stone-800/60 transition-all duration-300 group">
                <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <i className="fas fa-church text-amber-400 text-xl"></i>
                </div>
                <h4 className="text-white font-semibold mb-1">Sermon Notes</h4>
                <p className="text-stone-400 text-sm">Key takeaways from Sunday messages</p>
              </div>
            </div>

            {/* Testimonials Carousel */}
            <div className="bg-gradient-to-br from-amber-600/20 to-amber-700/10 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/20">
              <div className="flex items-center gap-2 mb-4">
                <i className="fas fa-quote-left text-amber-400 text-xl"></i>
                <h3 className="text-white font-semibold">What Our Subscribers Say</h3>
              </div>
              
              <div className="relative min-h-[180px]">
                {testimonials.map((testimonial, idx) => (
                  <div
                    key={idx}
                    className={`transition-all duration-500 absolute inset-0 ${
                      idx === currentTestimonial
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-full"
                    }`}
                  >
                    <p className="text-stone-300 text-sm italic mb-4">"{testimonial.quote}"</p>
                    <div className="flex items-center gap-3">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-white font-medium text-sm">{testimonial.name}</p>
                        <p className="text-stone-400 text-xs">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Dots */}
              <div className="flex justify-center gap-2 mt-4 pt-4">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentTestimonial(idx)}
                    className={`transition-all duration-300 rounded-full ${
                      idx === currentTestimonial
                        ? "w-8 h-1.5 bg-amber-400"
                        : "w-1.5 h-1.5 bg-stone-500 hover:bg-amber-500"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Social Proof Stats */}
            <div className="flex items-center justify-around text-center">
              <div>
                <div className="text-2xl font-bold text-amber-400">5,000+</div>
                <div className="text-stone-400 text-xs">Active Subscribers</div>
              </div>
              <div className="w-px h-8 bg-stone-600"></div>
              <div>
                <div className="text-2xl font-bold text-amber-400">98%</div>
                <div className="text-stone-400 text-xs">Open Rate</div>
              </div>
              <div className="w-px h-8 bg-stone-600"></div>
              <div>
                <div className="text-2xl font-bold text-amber-400">52</div>
                <div className="text-stone-400 text-xs">Newsletters Sent</div>
              </div>
            </div>

            {/* Recent Newsletter Preview */}
            <div className="bg-stone-800/40 backdrop-blur-sm rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <i className="fas fa-newspaper text-amber-400"></i>
                <h4 className="text-white font-medium">Latest Edition</h4>
                <span className="text-xs text-stone-400 ml-auto">March 2026</span>
              </div>
              <p className="text-stone-300 text-sm mb-3">
                "Finding Hope in Difficult Times" - This week's newsletter features a special message from Pastor Michael, upcoming Holy Week events, and a community prayer update.
              </p>
              <button className="text-amber-400 text-sm hover:text-amber-300 transition-colors flex items-center gap-1">
                Read Previous Editions <i className="fas fa-arrow-right text-xs"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Banner - Social Media */}
        <div className="mt-12 text-center">
          <p className="text-stone-400 text-sm mb-4">Or follow us on social media for daily updates</p>
          <div className="flex justify-center gap-4">
            <button className="w-10 h-10 rounded-full bg-stone-800 hover:bg-amber-500 transition-all flex items-center justify-center group">
              <i className="fab fa-facebook-f text-stone-400 group-hover:text-white text-sm"></i>
            </button>
            <button className="w-10 h-10 rounded-full bg-stone-800 hover:bg-amber-500 transition-all flex items-center justify-center group">
              <i className="fab fa-instagram text-stone-400 group-hover:text-white text-sm"></i>
            </button>
            <button className="w-10 h-10 rounded-full bg-stone-800 hover:bg-amber-500 transition-all flex items-center justify-center group">
              <i className="fab fa-youtube text-stone-400 group-hover:text-white text-sm"></i>
            </button>
            <button className="w-10 h-10 rounded-full bg-stone-800 hover:bg-amber-500 transition-all flex items-center justify-center group">
              <i className="fab fa-twitter text-stone-400 group-hover:text-white text-sm"></i>
            </button>
            <button className="w-10 h-10 rounded-full bg-stone-800 hover:bg-amber-500 transition-all flex items-center justify-center group">
              <i className="fab fa-tiktok text-stone-400 group-hover:text-white text-sm"></i>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeUp {
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
          animation: fadeUp 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Newsletter;