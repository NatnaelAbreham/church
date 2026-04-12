// components/Blog.jsx
import { useState, useEffect } from "react";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPost, setSelectedPost] = useState(null);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const categories = [
    { id: "all", label: "All Posts", icon: "fa-newspaper", color: "amber" },
    { id: "devotional", label: "Devotionals", icon: "fa-bible", color: "purple" },
    { id: "sermon", label: "Sermon Notes", icon: "fa-church", color: "blue" },
    { id: "testimony", label: "Testimonies", icon: "fa-heart", color: "red" },
    { id: "ministry", label: "Ministry Updates", icon: "fa-hands-helping", color: "green" },
    { id: "family", label: "Family & Parenting", icon: "fa-users", color: "teal" },
    { id: "missions", label: "Missions", icon: "fa-globe", color: "orange" }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Finding Peace in the Midst of Chaos",
      excerpt: "In a world filled with uncertainty and noise, how can we find true peace? Discover biblical principles for cultivating inner calm and trusting God through every storm.",
      content: `<p>Life has a way of throwing unexpected challenges our way. Whether it's financial stress, health concerns, or relational struggles, chaos seems to be an unwelcome companion in our journey. But as believers, we're called to a different standard—one that transcends our circumstances.</p>
      <p>Jesus said in John 14:27, "Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid." This peace isn't dependent on our situation; it's rooted in the unchanging character of God.</p>
      <p>Here are three practical ways to find peace amidst chaos:</p>
      <ul><li><strong>Pray without ceasing</strong> - Bring every concern to God</li>
      <li><strong>Meditate on Scripture</strong> - Let God's promises anchor your soul</li>
      <li><strong>Choose gratitude</strong> - Thankfulness shifts our perspective</li></ul>
      <p>Remember, the same God who calmed the storm is with you today. Trust Him, and experience His peace that surpasses all understanding.</p>`,
      category: "devotional",
      author: "Pastor Michael Thompson",
      authorAvatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100",
      date: "2026-04-10",
      readTime: 5,
      image: "https://images.pexels.com/photos/2606355/pexels-photo-2606355.jpeg?auto=compress&cs=tinysrgb&w=600",
      likes: 234,
      comments: 28,
      featured: true
    },
    {
      id: 2,
      title: "The Power of Forgiveness: A Personal Testimony",
      excerpt: "One woman's journey from bitterness to freedom through the transformative power of forgiveness. Her story will inspire you to release what's holding you back.",
      content: `<p>For years, I carried the weight of unforgiveness like a heavy chain around my neck. The hurt was deep—someone I trusted had betrayed me in the worst possible way. Every day, I replayed the offense, letting bitterness take deeper root in my heart.</p>
      <p>But God had other plans. Through a sermon on Matthew 18:21-35, I was confronted with the truth: I had been forgiven an immeasurable debt by God, yet I was refusing to forgive a much smaller debt from someone else.</p>
      <p>The journey to forgiveness wasn't easy. It required:</p>
      <ul><li>Honest prayer about my pain</li>
      <li>Choosing to forgive by faith, not feeling</li>
      <li>Releasing the right to revenge</li>
      <li>Asking God to bless my offender</li></ul>
      <p>Today, I'm free. The chain is broken. If you're struggling with unforgiveness, know that freedom is possible through Christ's power in you.</p>`,
      category: "testimony",
      author: "Sarah Johnson",
      authorAvatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100",
      date: "2026-04-08",
      readTime: 7,
      image: "https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=600",
      likes: 189,
      comments: 42,
      featured: false
    },
    {
      id: 3,
      title: "Sermon Recap: The Prodigal Son",
      excerpt: "A fresh look at the parable of the prodigal son, focusing not just on the wayward son, but on the loving father who runs to meet us.",
      content: `<p>Last Sunday, Pastor Michael took us through Luke 15:11-32, revealing fresh insights from this beloved parable. While we often focus on the younger son's rebellion, the true hero of the story is the father—a picture of our Heavenly Father's extravagant love.</p>
      <p><strong>Key Takeaways:</strong></p>
      <ul><li>God gives us the freedom to choose, even when He knows we'll make mistakes</li>
      <li>Our repentance doesn't earn God's love—it simply positions us to receive it</li>
      <li>The father ran—a culturally shocking act that shows God's eagerness to restore us</li>
      <li>The older brother reminds us that self-righteousness can keep us from the party</li></ul>
      <p>Whether you're the prodigal returning home or the elder brother struggling with comparison, the Father's invitation is the same: "Come celebrate. You're always with me, and everything I have is yours."</p>
      <p>Watch the full sermon on our <a href="#live-stream">Live Stream page</a>.</p>`,
      category: "sermon",
      author: "Pastor Michael Thompson",
      authorAvatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100",
      date: "2026-04-05",
      readTime: 4,
      image: "https://images.pexels.com/photos/3768138/pexels-photo-3768138.jpeg?auto=compress&cs=tinysrgb&w=600",
      likes: 312,
      comments: 56,
      featured: true
    },
    {
      id: 4,
      title: "5 Ways to Pray for Our Missionaries",
      excerpt: "Our missionaries around the world need our prayer support. Here are five specific ways you can intercede for them today.",
      content: `<p>Our church supports 12 missionaries serving in 8 countries around the world. While financial support is important, prayer support is even more vital. Here are five specific ways to pray for our missionaries:</p>
      <ul><li><strong>Spiritual Protection</strong> - Pray against spiritual warfare and for discernment</li>
      <li><strong>Family Strength</strong> - Missionary families face unique pressures and stresses</li>
      <li><strong>Language Acquisition</strong> - Pray for breakthrough in learning local languages</li>
      <li><strong>Open Doors</strong> - Ask God to prepare hearts to receive the gospel</li>
      <li><strong>Health & Safety</strong> - Many serve in areas with limited medical care</li></ul>
      <p>Join our monthly missionary prayer gathering on the first Wednesday of each month at 7 PM in Room 101.</p>`,
      category: "missions",
      author: "Missions Team",
      authorAvatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100",
      date: "2026-04-03",
      readTime: 6,
      image: "https://images.pexels.com/photos/7105761/pexels-photo-7105761.jpeg?auto=compress&cs=tinysrgb&w=600",
      likes: 156,
      comments: 19,
      featured: false
    },
    {
      id: 5,
      title: "Raising Faith-Filled Kids in a Digital World",
      excerpt: "Practical tips for parents navigating the challenges of raising children who love God in an age of screens and social media.",
      content: `<p>Parenting has never been easy, but the digital age presents unique challenges. How do we help our children develop a vibrant faith when they're constantly bombarded with competing messages?</p>
      <p><strong>Here are five practical strategies:</strong></p>
      <ul><li><strong>Model authentic faith</strong> - Let your kids see you pray, read Scripture, and rely on God</li>
      <li><strong>Create tech-free zones</strong> - Dinner table, family devotions, and bedrooms at night</li>
      <li><strong>Have honest conversations</strong> - Talk about what they're seeing online</li>
      <li><strong>Prioritize church community</strong> - Help them build relationships with other believers</li>
      <li><strong>Pray together as a family</strong> - Make prayer a natural part of daily life</li></ul>
      <p>Remember, God loves your children even more than you do. Trust Him to work in their hearts as you faithfully point them to Jesus.</p>`,
      category: "family",
      author: "Sarah Martinez",
      authorAvatar: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=100",
      date: "2026-03-30",
      readTime: 8,
      image: "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=600",
      likes: 267,
      comments: 34,
      featured: false
    },
    {
      id: 6,
      title: "Ministry Update: Food Pantry Serves 500 Families",
      excerpt: "Thanks to your generous support, our food pantry reached a major milestone this month. Read about the impact we're making together.",
      content: `<p>This March, our church's food pantry served 500 families—a new record! Thanks to the faithful giving and volunteering of our church family, we're making a real difference in our community.</p>
      <p><strong>Impact Highlights:</strong></p>
      <ul><li>12,500 meals distributed</li>
      <li>75 new families registered</li>
      <li>150 volunteer hours served</li>
      <li>5 local schools partnered with</li></ul>
      <p>One recipient shared, "I didn't know where our next meal would come from. This food pantry has been an answer to prayer."</p>
      <p>Want to get involved? We need volunteers every Wednesday from 9 AM-12 PM. Contact James Wilson at outreach@gracecovenant.org.</p>`,
      category: "ministry",
      author: "James Wilson",
      authorAvatar: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=100",
      date: "2026-03-28",
      readTime: 5,
      image: "https://images.pexels.com/photos/6646861/pexels-photo-6646861.jpeg?auto=compress&cs=tinysrgb&w=600",
      likes: 203,
      comments: 27,
      featured: true
    },
    {
      id: 7,
      title: "The Power of Daily Devotions",
      excerpt: "Why spending just 15 minutes with God each morning can transform your entire day. Start a new habit today.",
      content: `<p>In our busy lives, finding time for God can feel impossible. But what if just 15 minutes each morning could change everything?</p>
      <p><strong>A Simple 15-Minute Devotional Plan:</strong></p>
      <ul><li><strong>5 minutes - Read Scripture</strong> - Start with the Psalms or Gospels</li>
      <li><strong>5 minutes - Reflect & Journal</strong> - Write down one thing God is saying to you</li>
      <li><strong>5 minutes - Pray</strong> - Praise, confess, thank, and ask</li></ul>
      <p>Consistency matters more than duration. Even on busy days, those 15 minutes will anchor your soul and prepare you for whatever comes.</p>
      <p>Download our free 30-day devotional guide on our <a href="#newsletter">Newsletter page</a>.</p>`,
      category: "devotional",
      author: "Pastor Jennifer Williams",
      authorAvatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100",
      date: "2026-03-25",
      readTime: 4,
      image: "https://images.pexels.com/photos/1383622/pexels-photo-1383622.jpeg?auto=compress&cs=tinysrgb&w=600",
      likes: 345,
      comments: 51,
      featured: false
    },
    {
      id: 8,
      title: "Youth Summer Camp Recap",
      excerpt: "Our students encountered God in powerful ways at summer camp. Read their stories and see photos from an unforgettable week.",
      content: `<p>Last week, 45 of our youth and leaders gathered at Camp Lone Star for our annual summer retreat. The theme was "Unshaken" based on Psalm 62:2 - "He alone is my rock and my salvation."</p>
      <p><strong>Highlights from the week:</strong></p>
      <ul><li>12 students made first-time decisions to follow Christ</li>
      <li>8 recommitted their lives to the Lord</li>
      <li>Countless moments of worship, prayer, and breakthrough</li>
      <li>Incredible fellowship and fun activities</li></ul>
      <p>One student shared, "I came here feeling distant from God, but this week I felt His love in a way I've never experienced before."</p>
      <p>Thank you to everyone who prayed and gave to make this camp possible. The next generation is on fire for Jesus!</p>`,
      category: "ministry",
      author: "Sarah Martinez",
      authorAvatar: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=100",
      date: "2026-03-22",
      readTime: 6,
      image: "https://images.pexels.com/photos/1263349/pexels-photo-1263349.jpeg?auto=compress&cs=tinysrgb&w=600",
      likes: 289,
      comments: 43,
      featured: true
    }
  ];

  useEffect(() => {
    let filtered = blogPosts;
    
    if (selectedCategory !== "all") {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }
    
    if (searchTerm.trim() !== "") {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(term) ||
        post.excerpt.toLowerCase().includes(term) ||
        post.author.toLowerCase().includes(term)
      );
    }
    
    setFilteredPosts(filtered);
    setCurrentPage(1);
  }, [selectedCategory, searchTerm]);

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);
  
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = regularPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(regularPosts.length / postsPerPage);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const getCategoryColor = (categoryId) => {
    const colors = {
      devotional: "border-l-purple-500",
      sermon: "border-l-blue-500",
      testimony: "border-l-red-500",
      ministry: "border-l-green-500",
      family: "border-l-teal-500",
      missions: "border-l-orange-500"
    };
    return colors[categoryId] || "border-l-amber-500";
  };

  const getCategoryBadgeColor = (categoryId) => {
    const colors = {
      devotional: "bg-purple-100 text-purple-700",
      sermon: "bg-blue-100 text-blue-700",
      testimony: "bg-red-100 text-red-700",
      ministry: "bg-green-100 text-green-700",
      family: "bg-teal-100 text-teal-700",
      missions: "bg-orange-100 text-orange-700"
    };
    return colors[categoryId] || "bg-amber-100 text-amber-700";
  };

  return (
    <section id="blog" className="py-28 px-6 bg-gradient-to-br from-stone-50 via-white to-amber-50/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-amber-300/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-100/80 backdrop-blur-sm px-5 py-2 rounded-full mb-5 shadow-sm">
            <i className="fas fa-blog text-amber-600 text-sm"></i>
            <span className="text-amber-700 font-semibold tracking-wide uppercase text-xs">Stories & Truth</span>
            <i className="fas fa-pen-fancy text-amber-600 text-sm"></i>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold serif text-stone-800 mb-4">
            Church <span className="text-amber-600">Blog</span>
          </h2>
          <div className="w-28 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full mb-6"></div>
          <p className="text-stone-600 max-w-2xl mx-auto text-lg">
            Encouraging articles, devotionals, and stories to help you grow in your faith journey
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-wrap gap-4 mb-10">
          <div className="flex-1 min-w-[200px]">
            <div className="relative">
              <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-stone-400"></i>
              <input
                type="text"
                placeholder="Search articles..."
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

        {/* Featured Post Section */}
        {selectedCategory === "all" && searchTerm === "" && (
          <div className="mb-12">
            <h3 className="text-xl font-bold text-stone-800 mb-4 flex items-center gap-2">
              <i className="fas fa-star text-amber-500"></i>
              Featured Post
            </h3>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-full">
                  <img
                    src={featuredPosts[0]?.image}
                    alt={featuredPosts[0]?.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent md:bg-gradient-to-l"></div>
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-xs px-2 py-1 rounded-full ${getCategoryBadgeColor(featuredPosts[0]?.category)}`}>
                      {categories.find(c => c.id === featuredPosts[0]?.category)?.label}
                    </span>
                    <span className="text-xs text-stone-400">
                      <i className="far fa-clock mr-1"></i>
                      {featuredPosts[0]?.readTime} min read
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-stone-800 mb-3">{featuredPosts[0]?.title}</h3>
                  <p className="text-stone-600 mb-4">{featuredPosts[0]?.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        src={featuredPosts[0]?.authorAvatar}
                        alt={featuredPosts[0]?.author}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-sm font-medium text-stone-800">{featuredPosts[0]?.author}</p>
                        <p className="text-xs text-stone-400">{formatDate(featuredPosts[0]?.date)}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedPost(featuredPosts[0])}
                      className="text-amber-600 hover:text-amber-700 font-medium text-sm flex items-center gap-1"
                    >
                      Read More <i className="fas fa-arrow-right text-xs"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Posts Grid */}
        {currentPosts.length > 0 || (selectedCategory === "all" && searchTerm === "" && featuredPosts.length > 1) ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(selectedCategory !== "all" || searchTerm !== "" ? currentPosts : [...regularPosts.slice(0, 6), ...(featuredPosts.slice(1) || [])].slice(0, 6)).map((post, index) => (
              <div
                key={post.id}
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden border border-stone-100 hover:border-amber-200 cursor-pointer"
                onClick={() => setSelectedPost(post)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`text-xs px-2 py-1 rounded-full ${getCategoryBadgeColor(post.category)}`}>
                      {categories.find(c => c.id === post.category)?.label}
                    </span>
                  </div>
                </div>
                
                <div className="p-5">
                  <div className="flex items-center gap-3 text-xs text-stone-400 mb-2">
                    <span><i className="far fa-calendar-alt mr-1"></i>{formatDate(post.date)}</span>
                    <span><i className="far fa-clock mr-1"></i>{post.readTime} min read</span>
                  </div>
                  <h3 className="text-lg font-bold text-stone-800 mb-2 group-hover:text-amber-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-stone-500 text-sm line-clamp-3 mb-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img src={post.authorAvatar} alt={post.author} className="w-6 h-6 rounded-full object-cover" />
                      <span className="text-xs text-stone-500">{post.author.split(' ')[0]}</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-stone-400">
                      <span><i className="far fa-heart"></i> {post.likes}</span>
                      <span><i className="far fa-comment"></i> {post.comments}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-blog text-amber-600 text-4xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-stone-800 mb-2">No posts found</h3>
            <p className="text-stone-600">Try adjusting your search or filter to see more articles.</p>
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

        {/* Pagination */}
        {regularPosts.length > postsPerPage && (
          <div className="flex justify-center items-center gap-3 mt-10">
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

        {/* Subscribe Banner */}
        <div className="mt-12 bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl p-6 text-center text-white">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <i className="fas fa-envelope text-2xl"></i>
              </div>
              <div className="text-left">
                <h4 className="font-bold text-lg">Subscribe to Our Blog</h4>
                <p className="text-amber-100 text-sm">Get the latest posts delivered to your inbox</p>
              </div>
            </div>
            <div className="flex gap-2 flex-1 max-w-md">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2 rounded-full text-stone-800 placeholder-stone-400 focus:outline-none"
              />
              <button className="px-6 py-2 bg-white text-amber-700 rounded-full font-semibold hover:shadow-lg transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Post Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto" onClick={() => setSelectedPost(null)}>
          <div className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl my-8" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedPost(null)} className="absolute top-6 right-6 w-10 h-10 rounded-full bg-stone-100 hover:bg-amber-500 hover:text-white transition-colors z-10">
              <i className="fas fa-times"></i>
            </button>
            
            {selectedPost.image && (
              <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-64 md:h-80 object-cover" />
            )}
            
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className={`text-xs px-3 py-1 rounded-full ${getCategoryBadgeColor(selectedPost.category)}`}>
                  {categories.find(c => c.id === selectedPost.category)?.label}
                </span>
                <span className="text-xs text-stone-400">
                  <i className="far fa-calendar-alt mr-1"></i>
                  {formatDate(selectedPost.date)}
                </span>
                <span className="text-xs text-stone-400">
                  <i className="far fa-clock mr-1"></i>
                  {selectedPost.readTime} min read
                </span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mb-4">{selectedPost.title}</h2>
              
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-stone-100">
                <img src={selectedPost.authorAvatar} alt={selectedPost.author} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <p className="font-medium text-stone-800">{selectedPost.author}</p>
                  <p className="text-xs text-stone-400">Pastoral Staff</p>
                </div>
              </div>
              
              <div className="prose prose-stone max-w-none" dangerouslySetInnerHTML={{ __html: selectedPost.content }} />
              
              <div className="mt-8 pt-6 border-t border-stone-100 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 text-stone-500 hover:text-red-500 transition-colors">
                    <i className="far fa-heart text-lg"></i>
                    <span>{selectedPost.likes} Likes</span>
                  </button>
                  <button className="flex items-center gap-2 text-stone-500 hover:text-amber-500 transition-colors">
                    <i className="far fa-comment text-lg"></i>
                    <span>{selectedPost.comments} Comments</span>
                  </button>
                  <button className="flex items-center gap-2 text-stone-500 hover:text-amber-500 transition-colors">
                    <i className="far fa-share-square text-lg"></i>
                    <span>Share</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Blog;