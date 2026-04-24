
// components/Blog.jsx
import { useEffect, useMemo, useState } from "react";
import {
  Search,
  Heart,
  MessageCircle,
  ArrowRight,
  CalendarDays,
  Clock3,
  Share2,
  X,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPost, setSelectedPost] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 6;

  const categories = [
    { id: "all", label: "All" },
    { id: "devotional", label: "Devotionals" },
    { id: "sermon", label: "Sermons" },
    { id: "testimony", label: "Testimonies" },
    { id: "ministry", label: "Ministry" },
    { id: "family", label: "Family" },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Finding Peace in the Midst of Chaos",
      excerpt:
        "Discover how God's presence brings peace even in uncertain seasons.",
      category: "devotional",
      author: "Pastor Michael Thompson",
      date: "2026-04-10",
      readTime: 5,
      image:
        "https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=1200",
      likes: 234,
      comments: 28,
      featured: true,
      content: `
        <p>Life often feels overwhelming, but God's peace remains constant.</p>

        <p>
          Jesus reminds us that true peace does not come from circumstances,
          but from His presence.
        </p>

        <h3>Practical Ways to Stay Anchored</h3>

        <ul>
          <li>Spend daily time in prayer</li>
          <li>Meditate on Scripture</li>
          <li>Practice gratitude consistently</li>
        </ul>

        <p>
          Even in storms, God is still faithful.
        </p>
      `,
    },

    {
      id: 2,
      title: "The Father Who Runs Toward Us",
      excerpt:
        "A fresh perspective on the prodigal son and the extravagant love of God.",
      category: "sermon",
      author: "Pastor Michael Thompson",
      date: "2026-04-05",
      readTime: 7,
      image:
        "https://images.pexels.com/photos/3768138/pexels-photo-3768138.jpeg?auto=compress&cs=tinysrgb&w=1200",
      likes: 312,
      comments: 56,
      featured: true,
      content: `
        <p>
          The story of the prodigal son reveals the overwhelming grace of God.
        </p>

        <p>
          Before the son could fully explain himself, the father ran toward him.
        </p>

        <p>
          God's love restores us before we feel worthy.
        </p>
      `,
    },

    {
      id: 3,
      title: "Raising Faith-Filled Kids in a Digital Age",
      excerpt:
        "Practical wisdom for parents navigating faith in a screen-driven world.",
      category: "family",
      author: "Sarah Martinez",
      date: "2026-03-30",
      readTime: 8,
      image:
        "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=1200",
      likes: 267,
      comments: 34,
      featured: false,
      content: `
        <p>
          Parenting in today's world requires intentional spiritual leadership.
        </p>

        <p>
          Children need authentic examples of faith more than perfect parents.
        </p>
      `,
    },

    {
      id: 4,
      title: "Food Pantry Reaches 500 Families",
      excerpt:
        "See how your generosity is transforming lives in the community.",
      category: "ministry",
      author: "James Wilson",
      date: "2026-03-28",
      readTime: 5,
      image:
        "https://images.pexels.com/photos/6646861/pexels-photo-6646861.jpeg?auto=compress&cs=tinysrgb&w=1200",
      likes: 203,
      comments: 27,
      featured: false,
      content: `
        <p>
          Through faithful giving and volunteering, hundreds of families were served.
        </p>

        <p>
          God's love becomes visible through practical compassion.
        </p>
      `,
    },

   
    {
      id: 6,
      title: "A Testimony of Healing and Hope",
      excerpt:
        "One family's story of restoration through prayer and community.",
      category: "testimony",
      author: "Grace Johnson",
      date: "2026-03-10",
      readTime: 6,
      image:
        "https://images.pexels.com/photos/8106772/pexels-photo-8106772.jpeg?auto=compress&cs=tinysrgb&w=1200",
      likes: 489,
      comments: 74,
      featured: false,
      content: `
        <p>
          God's faithfulness still transforms lives today.
        </p>
      `,
    },
  ];

  const filteredPosts = useMemo(() => {
    let filtered = [...blogPosts];

    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (post) => post.category === selectedCategory
      );
    }

    if (searchTerm.trim()) {
      filtered = filtered.filter((post) =>
        `${post.title} ${post.excerpt} ${post.author}`
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [selectedCategory, searchTerm]);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchTerm]);

  const featuredPost = blogPosts.find((post) => post.featured);

  const regularPosts = filteredPosts.filter((post) => !post.featured);

  const totalPages = Math.ceil(regularPosts.length / postsPerPage);

  const currentPosts = regularPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString(undefined, {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <section
      id="blog"
      className="relative overflow-hidden bg-[#050505] text-white py-32 px-6"
    >
      {/* Ambient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-amber-500/20 rounded-full blur-[140px]" />

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[140px]" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-yellow-500/5 rounded-full blur-[180px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-5xl mx-auto mb-24">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-2xl mb-8">
            <Sparkles className="w-4 h-4 text-amber-300" />

            <span className="uppercase tracking-[0.3em] text-xs text-amber-200 font-semibold">
              Faith • Stories • Growth
            </span>
          </div>

          <h2 className="text-6xl md:text-8xl font-black leading-[0.95] tracking-tight mb-8">
            Spiritual
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-orange-500">
              Insights
            </span>
          </h2>

          <p className="text-zinc-400 text-xl leading-relaxed max-w-3xl mx-auto">
            Discover devotionals, sermons, testimonies, and powerful stories
            crafted to strengthen your spiritual journey.
          </p>
        </div>

        {/* Search */}
        <div className="relative max-w-2xl mx-auto mb-10">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl blur opacity-20" />

          <div className="relative bg-white/5 border border-white/10 backdrop-blur-2xl rounded-2xl overflow-hidden">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />

            <input
              type="text"
              placeholder="Search inspiration..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-transparent py-5 pl-14 pr-6 text-white placeholder:text-zinc-500 outline-none"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-20">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`
                px-5 py-3 rounded-2xl border backdrop-blur-xl
                transition-all duration-500
                ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-amber-400 to-orange-500 text-black border-transparent shadow-[0_0_40px_rgba(251,191,36,0.35)]"
                    : "bg-white/5 border-white/10 text-zinc-300 hover:bg-white/10"
                }
              `}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Featured Hero */}
        {featuredPost && selectedCategory === "all" && !searchTerm && (
          <div
            className="group relative overflow-hidden rounded-[40px] mb-28 border border-white/10"
            onClick={() => setSelectedPost(featuredPost)}
          >
            <div className="absolute inset-0 bg-black/40 z-10" />

            <img
              src={featuredPost.image}
              alt={featuredPost.title}
              className="w-full h-[750px] object-cover group-hover:scale-105 transition-transform duration-[4000ms]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-20" />

            <div className="absolute bottom-0 left-0 p-8 md:p-16 z-30 max-w-4xl">
              <div className="inline-flex items-center gap-3 bg-white/10 border border-white/10 backdrop-blur-xl rounded-full px-5 py-3 mb-8">
                <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />

                <span className="uppercase tracking-[0.25em] text-xs text-amber-200 font-semibold">
                  Featured Story
                </span>
              </div>

              <h3 className="text-4xl md:text-7xl font-black leading-[0.95] mb-8 max-w-4xl">
                {featuredPost.title}
              </h3>

              <p className="text-zinc-300 text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
                {featuredPost.excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-6 text-zinc-300 mb-10">
                <div className="flex items-center gap-2">
                  <CalendarDays className="w-4 h-4" />
                  <span>{formatDate(featuredPost.date)}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Clock3 className="w-4 h-4" />
                  <span>{featuredPost.readTime} min read</span>
                </div>
              </div>

              <button className="group/btn inline-flex items-center gap-3 px-8 py-5 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 text-black font-bold hover:scale-105 transition-all duration-500 shadow-[0_10px_60px_rgba(251,191,36,0.35)]">
                Read Story

                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        )}

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {currentPosts.map((post) => (
            <div
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl hover:border-amber-400/30 transition-all duration-700 cursor-pointer hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(0,0,0,0.5)]"
            >
              <div className="relative h-[320px] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              </div>

              <div className="relative -mt-24 z-10 px-6 pb-6">
                <div className="rounded-[28px] border border-white/10 bg-black/60 backdrop-blur-2xl p-6">
                  <div className="flex items-center justify-between mb-5">
                    <span className="px-4 py-2 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs uppercase tracking-[0.2em]">
                      {post.category}
                    </span>

                    <div className="flex items-center gap-2 text-zinc-500 text-sm">
                      <Clock3 className="w-4 h-4" />
                      <span>{post.readTime}m</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold leading-tight mb-4 text-white group-hover:text-amber-300 transition-colors duration-500">
                    {post.title}
                  </h3>

                  <p className="text-zinc-400 leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-5 border-t border-white/10">
                    <div>
                      <p className="font-semibold text-white text-sm">
                        {post.author}
                      </p>

                      <p className="text-zinc-500 text-xs mt-1">
                        {formatDate(post.date)}
                      </p>
                    </div>

                    <div className="flex items-center gap-4 text-zinc-500 text-sm">
                      <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        <span>{post.likes}</span>
                      </div>

                      <div className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty */}
        {currentPosts.length === 0 && (
          <div className="text-center py-32">
            <div className="w-28 h-28 rounded-full bg-white/5 border border-white/10 backdrop-blur-2xl flex items-center justify-center mx-auto mb-8">
              <Search className="w-10 h-10 text-zinc-500" />
            </div>

            <h3 className="text-4xl font-black mb-4">
              No Articles Found
            </h3>

            <p className="text-zinc-500 max-w-xl mx-auto mb-8 text-lg">
              Try adjusting your search or selecting another category.
            </p>

            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
              }}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 text-black font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-20">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
              className="w-14 h-14 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-2xl flex items-center justify-center disabled:opacity-40 hover:bg-white/10 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`w-14 h-14 rounded-2xl font-bold transition-all duration-500 ${
                  currentPage === index + 1
                    ? "bg-gradient-to-r from-amber-400 to-orange-500 text-black shadow-[0_0_40px_rgba(251,191,36,0.35)]"
                    : "bg-white/5 border border-white/10 text-zinc-400 hover:bg-white/10"
                }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
              className="w-14 h-14 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-2xl flex items-center justify-center disabled:opacity-40 hover:bg-white/10 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Subscribe */}
        <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-3xl p-10 md:p-14 mt-32">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-amber-500/20 blur-[120px] rounded-full" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-3 mb-6 px-5 py-3 rounded-full bg-white/5 border border-white/10">
                <Sparkles className="w-4 h-4 text-amber-300" />

                <span className="uppercase tracking-[0.25em] text-xs text-amber-200">
                  Weekly Inspiration
                </span>
              </div>

              <h3 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                Stay Inspired Every Week
              </h3>

              <p className="text-zinc-400 text-lg leading-relaxed">
                Receive devotionals, church updates, and encouraging messages
                delivered directly to your inbox.
              </p>
            </div>

            <div className="w-full max-w-xl">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-black/40 border border-white/10 rounded-2xl px-6 py-5 text-white placeholder:text-zinc-500 outline-none focus:border-amber-400"
                />

                <button className="px-8 py-5 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 text-black font-bold hover:scale-105 transition-all duration-500 shadow-[0_10px_60px_rgba(251,191,36,0.35)]">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedPost && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-3xl overflow-y-auto p-4 md:p-10"
          onClick={() => setSelectedPost(null)}
        >
          <div
            className="max-w-5xl mx-auto rounded-[40px] overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-[0_20px_120px_rgba(0,0,0,0.8)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[400px] md:h-[600px] overflow-hidden">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-6 right-6 w-14 h-14 rounded-2xl bg-black/50 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:bg-amber-400 hover:text-black transition-all duration-500"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="absolute bottom-0 left-0 p-8 md:p-14 max-w-4xl">
                <span className="inline-flex px-5 py-3 rounded-full bg-white/10 border border-white/10 backdrop-blur-xl text-amber-200 text-xs uppercase tracking-[0.25em] mb-8">
                  {selectedPost.category}
                </span>

                <h2 className="text-4xl md:text-6xl font-black leading-[1] mb-6">
                  {selectedPost.title}
                </h2>

                <div className="flex flex-wrap items-center gap-6 text-zinc-300">
                  <span>{selectedPost.author}</span>

                  <span>{formatDate(selectedPost.date)}</span>

                  <span>{selectedPost.readTime} min read</span>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-14">
              <div
                className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-zinc-300 prose-strong:text-white prose-li:text-zinc-300"
                dangerouslySetInnerHTML={{ __html: selectedPost.content }}
              />

              <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6">
                <div className="flex items-center gap-8">
                  <button className="flex items-center gap-3 text-zinc-400 hover:text-red-400 transition-colors">
                    <Heart className="w-5 h-5" />
                    <span>{selectedPost.likes} Likes</span>
                  </button>

                  <button className="flex items-center gap-3 text-zinc-400 hover:text-amber-300 transition-colors">
                    <MessageCircle className="w-5 h-5" />
                    <span>{selectedPost.comments} Comments</span>
                  </button>
                </div>

                <button className="flex items-center gap-3 text-zinc-400 hover:text-amber-300 transition-colors">
                  <Share2 className="w-5 h-5" />
                  <span>Share Article</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Blog;
