// components/GivingProgress.jsx
import { useState, useEffect } from "react";

const GivingProgress = () => {
  const [selectedCampaign, setSelectedCampaign] = useState("annual");
  const [donationAmount, setDonationAmount] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [animateProgress, setAnimateProgress] = useState(false);

  const campaigns = [
    {
      id: "annual",
      title: "Annual Ministry Fund",
      subtitle: "Supporting daily operations and ministries",
      goal: 500000,
      raised: 387500,
      color: "amber",
      icon: "fa-church",
      description: "Funds worship services, staff salaries, building maintenance, and all weekly ministries that keep our church running.",
      startDate: "January 1, 2026",
      endDate: "December 31, 2026",
      donors: 847,
      categories: [
        { name: "Worship & Music", percentage: 35 },
        { name: "Children & Youth", percentage: 25 },
        { name: "Facilities", percentage: 20 },
        { name: "Administration", percentage: 20 }
      ]
    },
    {
      id: "missions",
      title: "Missions & Outreach",
      subtitle: "Taking God's love beyond our walls",
      goal: 150000,
      raised: 98250,
      color: "blue",
      icon: "fa-globe",
      description: "Supports local food pantry, homeless outreach, international missions trips, and partnerships with global ministries.",
      startDate: "January 1, 2026",
      endDate: "December 31, 2026",
      donors: 423,
      categories: [
        { name: "Local Outreach", percentage: 40 },
        { name: "International Missions", percentage: 35 },
        { name: "Disaster Relief", percentage: 25 }
      ]
    },
    {
      id: "building",
      title: "Building Expansion Fund",
      subtitle: "Creating space for growth and community",
      goal: 2500000,
      raised: 1784250,
      color: "green",
      icon: "fa-building",
      description: "Funding our new family life center, expanded children's wing, and upgraded worship facilities to accommodate our growing congregation.",
      startDate: "March 1, 2025",
      endDate: "December 31, 2026",
      donors: 1256,
      categories: [
        { name: "Family Life Center", percentage: 45 },
        { name: "Children's Wing", percentage: 30 },
        { name: "Worship Center", percentage: 25 }
      ]
    },
    {
      id: "scholarship",
      title: "Scholarship Fund",
      subtitle: "Investing in the next generation",
      goal: 75000,
      raised: 52340,
      color: "purple",
      icon: "fa-graduation-cap",
      description: "Provides college scholarships for graduating high school seniors and continuing education support for young adults in our congregation.",
      startDate: "January 1, 2026",
      endDate: "May 31, 2026",
      donors: 189,
      categories: [
        { name: "High School Seniors", percentage: 60 },
        { name: "Continuing Education", percentage: 40 }
      ]
    },
    {
      id: "benevolence",
      title: "Benevolence Fund",
      subtitle: "Helping families in crisis",
      goal: 50000,
      raised: 38750,
      color: "red",
      icon: "fa-hand-holding-heart",
      description: "Provides emergency financial assistance for families facing unexpected hardships like medical bills, rent, or utilities.",
      startDate: "January 1, 2026",
      endDate: "December 31, 2026",
      donors: 267,
      categories: [
        { name: "Medical Assistance", percentage: 40 },
        { name: "Housing Support", percentage: 35 },
        { name: "Utility Aid", percentage: 25 }
      ]
    }
  ];

  const recentGifts = [
    { name: "Anonymous", amount: 5000, date: "2026-04-10", campaign: "Building Expansion Fund" },
    { name: "The Thompson Family", amount: 2500, date: "2026-04-09", campaign: "Annual Ministry Fund" },
    { name: "Sarah Johnson", amount: 1000, date: "2026-04-08", campaign: "Missions & Outreach" },
    { name: "Anonymous", amount: 500, date: "2026-04-07", campaign: "Scholarship Fund" },
    { name: "Michael & Lisa Chen", amount: 2000, date: "2026-04-06", campaign: "Building Expansion Fund" },
    { name: "Robert Williams", amount: 250, date: "2026-04-05", campaign: "Benevolence Fund" }
  ];

  const currentCampaign = campaigns.find(c => c.id === selectedCampaign);
  const progressPercentage = (currentCampaign.raised / currentCampaign.goal) * 100;
  const remaining = currentCampaign.goal - currentCampaign.raised;

  useEffect(() => {
    // Trigger animation when component mounts or campaign changes
    setAnimateProgress(false);
    setTimeout(() => setAnimateProgress(true), 100);
  }, [selectedCampaign]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatCompactCurrency = (amount) => {
    if (amount >= 1000000) return `$${(amount / 1000000).toFixed(1)}M`;
    if (amount >= 1000) return `$${(amount / 1000).toFixed(0)}K`;
    return `$${amount}`;
  };

  const handleDonationClick = () => {
    setIsModalOpen(true);
  };

  const handleDonationSubmit = (e) => {
    e.preventDefault();
    // In production, integrate with payment processor
    alert(`Thank you for your ${formatCurrency(parseInt(donationAmount))} donation to ${currentCampaign.title}!`);
    setIsModalOpen(false);
    setDonationAmount("");
  };

  const getColorClasses = (color) => {
    const colors = {
      amber: "from-amber-500 to-amber-600",
      blue: "from-blue-500 to-blue-600",
      green: "from-green-500 to-green-600",
      purple: "from-purple-500 to-purple-600",
      red: "from-red-500 to-red-600"
    };
    return colors[color] || colors.amber;
  };

  const getProgressColor = (color) => {
    const colors = {
      amber: "bg-amber-500",
      blue: "bg-blue-500",
      green: "bg-green-500",
      purple: "bg-purple-500",
      red: "bg-red-500"
    };
    return colors[color] || colors.amber;
  };

  const getIconBgColor = (color) => {
    const colors = {
      amber: "bg-amber-100",
      blue: "bg-blue-100",
      green: "bg-green-100",
      purple: "bg-purple-100",
      red: "bg-red-100"
    };
    return colors[color] || colors.amber;
  };

  const getIconTextColor = (color) => {
    const colors = {
      amber: "text-amber-600",
      blue: "text-blue-600",
      green: "text-green-600",
      purple: "text-purple-600",
      red: "text-red-600"
    };
    return colors[color] || colors.amber;
  };

  return (
    <section id="giving-progress" className="py-28 px-6 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 relative overflow-hidden">
      {/* Modern 2026 decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-amber-400/5 to-transparent rounded-full blur-3xl"></div>
        {/* Grid pattern */}
        <div
  className="absolute inset-0 opacity-20"
  style={{
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
  }}
/>
 </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm px-5 py-2 rounded-full mb-5 border border-amber-500/30">
            <i className="fas fa-chart-line text-amber-400 text-sm"></i>
            <span className="text-amber-300 font-semibold tracking-wide uppercase text-xs">Generosity in Action</span>
            <i className="fas fa-heart text-amber-400 text-sm"></i>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold serif text-white mb-4">
            Giving <span className="text-amber-400">Progress</span>
          </h2>
          <div className="w-28 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full mb-6"></div>
          <p className="text-stone-300 max-w-2xl mx-auto text-lg">
            See how your generosity is making a difference across our ministries and missions
          </p>
        </div>

        {/* Campaign Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {campaigns.map((campaign) => (
            <button
              key={campaign.id}
              onClick={() => setSelectedCampaign(campaign.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300 ${
                selectedCampaign === campaign.id
                  ? `bg-gradient-to-r ${getColorClasses(campaign.color)} text-white shadow-lg scale-105`
                  : "bg-stone-800/50 backdrop-blur-sm text-stone-300 hover:bg-stone-700 border border-stone-700"
              }`}
            >
              <i className={`fas ${campaign.icon} text-sm`}></i>
              <span className="text-sm font-medium hidden sm:inline">{campaign.title}</span>
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Progress Card */}
          <div className="lg:col-span-2">
            <div className="bg-stone-800/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-stone-700/50">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{currentCampaign.title}</h3>
                  <p className="text-stone-400 text-sm">{currentCampaign.subtitle}</p>
                </div>
                <div className={`w-14 h-14 rounded-xl ${getIconBgColor(currentCampaign.color)} flex items-center justify-center`}>
                  <i className={`fas ${currentCampaign.icon} text-2xl ${getIconTextColor(currentCampaign.color)}`}></i>
                </div>
              </div>

              <p className="text-stone-300 text-sm leading-relaxed mb-6">{currentCampaign.description}</p>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-stone-400">Progress</span>
                  <span className="text-white font-semibold">{progressPercentage.toFixed(1)}%</span>
                </div>
                <div className="w-full bg-stone-700 rounded-full h-4 overflow-hidden">
                  <div
                    className={`${getProgressColor(currentCampaign.color)} h-4 rounded-full transition-all duration-1000 ease-out ${
                      animateProgress ? "" : "w-0"
                    }`}
                    style={{ width: `${progressPercentage}%` }}
                  >
                    <div className="w-full h-full bg-gradient-to-r from-transparent to-white/20 animate-shimmer"></div>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center p-3 bg-stone-700/30 rounded-xl">
                  <p className="text-2xl font-bold text-white">{formatCompactCurrency(currentCampaign.raised)}</p>
                  <p className="text-stone-400 text-xs">Raised</p>
                </div>
                <div className="text-center p-3 bg-stone-700/30 rounded-xl">
                  <p className="text-2xl font-bold text-white">{formatCompactCurrency(currentCampaign.goal)}</p>
                  <p className="text-stone-400 text-xs">Goal</p>
                </div>
                <div className="text-center p-3 bg-stone-700/30 rounded-xl">
                  <p className="text-2xl font-bold text-white">{formatCompactCurrency(remaining)}</p>
                  <p className="text-stone-400 text-xs">Remaining</p>
                </div>
                <div className="text-center p-3 bg-stone-700/30 rounded-xl">
                  <p className="text-2xl font-bold text-white">{currentCampaign.donors}</p>
                  <p className="text-stone-400 text-xs">Donors</p>
                </div>
              </div>

              {/* Campaign Dates */}
              <div className="flex items-center justify-between text-xs text-stone-400 mb-6">
                <span><i className="far fa-calendar-alt mr-1"></i> Started: {currentCampaign.startDate}</span>
                <span><i className="far fa-hourglass-half mr-1"></i> Ends: {currentCampaign.endDate}</span>
              </div>

              {/* Donate Button */}
              <button
                onClick={handleDonationClick}
                className="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-amber-500/25 transition-all flex items-center justify-center gap-2"
              >
                <i className="fas fa-hand-holding-heart"></i>
                Give to {currentCampaign.title}
              </button>
            </div>
          </div>

          {/* Right Column - Allocation & Recent Gifts */}
          <div className="space-y-6">
            {/* Allocation Breakdown */}
            <div className="bg-stone-800/40 backdrop-blur-sm rounded-2xl p-6 border border-stone-700/50">
              <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                <i className="fas fa-chart-pie text-amber-400"></i>
                Fund Allocation
              </h4>
              <div className="space-y-3">
                {currentCampaign.categories.map((cat, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-stone-300">{cat.name}</span>
                      <span className="text-amber-400">{cat.percentage}%</span>
                    </div>
                    <div className="w-full bg-stone-700 rounded-full h-2">
                      <div
                        className={`${getProgressColor(currentCampaign.color)} h-2 rounded-full transition-all duration-700 delay-${idx * 150}`}
                        style={{ width: `${cat.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Gifts */}
            <div className="bg-stone-800/40 backdrop-blur-sm rounded-2xl p-6 border border-stone-700/50">
              <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                <i className="fas fa-clock text-amber-400"></i>
                Recent Gifts
              </h4>
              <div className="space-y-3 max-h-64 overflow-y-auto pr-2">
                {recentGifts.map((gift, idx) => (
                  <div key={idx} className="flex items-center justify-between py-2 border-b border-stone-700 last:border-0">
                    <div>
                      <p className="text-white text-sm font-medium">{gift.name}</p>
                      <p className="text-stone-500 text-xs">{gift.campaign}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-amber-400 font-semibold">{formatCurrency(gift.amount)}</p>
                      <p className="text-stone-500 text-xs">{gift.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Matching Gift Challenge */}
            <div className="bg-gradient-to-r from-amber-600/20 to-amber-700/20 rounded-2xl p-5 border border-amber-500/30">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-gift text-amber-400"></i>
                </div>
                <div>
                  <h5 className="text-white font-semibold text-sm">Matching Gift Challenge!</h5>
                  <p className="text-stone-300 text-xs mt-1">
                    An anonymous donor will match all gifts up to $50,000 until April 30th. Double your impact today!
                  </p>
                  <button className="mt-2 text-amber-400 text-xs hover:text-amber-300 transition-colors">
                    Learn More <i className="fas fa-arrow-right ml-1"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-10 text-center">
          <div className="inline-block bg-stone-800/40 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto border border-stone-700/50">
            <i className="fas fa-quote-left text-amber-400 text-2xl mb-3 opacity-60"></i>
            <p className="text-stone-300 italic">
              "We're so grateful for the generosity of our church family. Every gift, no matter the size, helps us fulfill our mission of sharing God's love."
            </p>
            <p className="text-amber-400 text-sm mt-3">— Pastor Michael Thompson</p>
          </div>
        </div>

        {/* Donation Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md" onClick={() => setIsModalOpen(false)}>
            <div className="relative max-w-md w-full bg-white rounded-3xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 transition-colors">
                <i className="fas fa-times text-stone-600"></i>
              </button>
              
              <div className="p-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <i className="fas fa-hand-holding-heart text-amber-600 text-2xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-stone-800">Make a Donation</h3>
                  <p className="text-stone-500 text-sm mt-1">{currentCampaign.title}</p>
                </div>

                <form onSubmit={handleDonationSubmit}>
                  <div className="mb-4">
                    <label className="block text-stone-700 font-medium mb-2">Donation Amount</label>
                    <div className="grid grid-cols-3 gap-2 mb-3">
                      {[50, 100, 250, 500, 1000].map((amount) => (
                        <button
                          key={amount}
                          type="button"
                          onClick={() => setDonationAmount(amount.toString())}
                          className={`py-2 rounded-xl border transition-all ${
                            donationAmount === amount.toString()
                              ? "border-amber-500 bg-amber-50 text-amber-700"
                              : "border-stone-200 hover:border-amber-300"
                          }`}
                        >
                          ${amount}
                        </button>
                      ))}
                    </div>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-500">$</span>
                      <input
                        type="number"
                        value={donationAmount}
                        onChange={(e) => setDonationAmount(e.target.value)}
                        placeholder="Other amount"
                        className="w-full pl-8 pr-4 py-3 rounded-xl border border-stone-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 transition-all"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
                  >
                    Continue to Payment
                  </button>
                </form>

                <p className="text-stone-400 text-xs text-center mt-4">
                  <i className="fas fa-lock mr-1"></i>
                  Secure payment processing. Your information is protected.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default GivingProgress;