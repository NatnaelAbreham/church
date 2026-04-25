// components/Newsletter.jsx
import { useState, useEffect } from "react";

const Newsletter = () => {
  const [form, setForm] = useState({ name: "", email: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [selected, setSelected] = useState([]);
  const [error, setError] = useState("");

  const interests = [
    { id: "weekly", label: "Weekly Updates", icon: "fa-newspaper" },
    { id: "events", label: "Events", icon: "fa-calendar-alt" },
    { id: "prayer", label: "Prayer Requests", icon: "fa-praying-hands" },
    { id: "devotional", label: "Devotionals", icon: "fa-bible" },
    { id: "missions", label: "Missions", icon: "fa-globe" },
    { id: "volunteer", label: "Volunteer", icon: "fa-hands-helping" },
  ];

  const toggleInterest = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const submit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.name || !form.email) {
      setError("Please fill all fields");
      return;
    }

    if (!validateEmail(form.email)) {
      setError("Invalid email format");
      return;
    }

    setLoading(true);

    await new Promise((r) => setTimeout(r, 1200));

    console.log({ ...form, interests: selected });

    setLoading(false);
    setSuccess(true);
    setForm({ name: "", email: "" });
    setSelected([]);

    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <section id = "newsletter" className="relative py-28 px-6 bg-gradient-to-br from-stone-950 via-black to-stone-900 text-white overflow-hidden">

      {/* Glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-amber-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-amber-400/10 blur-3xl rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-amber-300 uppercase tracking-[0.3em] text-xs">
            Stay Connected
          </p>
          <h2 className="text-4xl md:text-6xl font-bold mt-3">
            Church <span className="text-amber-400">Newsletter</span>
          </h2>
          <p className="text-stone-400 max-w-2xl mx-auto mt-4">
            Weekly updates, devotionals, events, and prayer requests delivered directly to you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* FORM */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl">

            {success ? (
              <div className="text-center py-10">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold text-amber-300">
                  Welcome to the Family
                </h3>
                <p className="text-stone-300 mt-2">
                  You are successfully subscribed.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-5">

                <input
                  className="w-full p-4 rounded-xl bg-black/40 border border-white/10 focus:border-amber-400 outline-none"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                />

                <input
                  className="w-full p-4 rounded-xl bg-black/40 border border-white/10 focus:border-amber-400 outline-none"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                />

                {/* Interests */}
                <div className="grid grid-cols-2 gap-3">
                  {interests.map((i) => (
                    <button
                      type="button"
                      key={i.id}
                      onClick={() => toggleInterest(i.id)}
                      className={`p-3 rounded-xl border text-sm flex items-center gap-2 transition ${
                        selected.includes(i.id)
                          ? "border-amber-400 bg-amber-500/10"
                          : "border-white/10 hover:border-white/30"
                      }`}
                    >
                      <i className={`fas ${i.icon} text-amber-400`} />
                      {i.label}
                    </button>
                  ))}
                </div>

                {error && (
                  <p className="text-red-400 text-sm">{error}</p>
                )}

                <button
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 font-semibold hover:scale-[1.02] transition"
                >
                  {loading ? "Subscribing..." : "Subscribe Now"}
                </button>

                <p className="text-xs text-stone-500 text-center">
                  No spam. Unsubscribe anytime.
                </p>
              </form>
            )}
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-2">
                Why Subscribe?
              </h3>
              <ul className="text-stone-300 space-y-2 text-sm">
                <li>• Weekly spiritual updates</li>
                <li>• Event notifications</li>
                <li>• Prayer support updates</li>
                <li>• Community announcements</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-amber-500/10 to-transparent border border-amber-500/20 rounded-2xl p-6">
              <p className="italic text-stone-300">
                “This newsletter keeps me spiritually grounded every week.”
              </p>
              <p className="text-amber-300 mt-3 text-sm">
                — Church Member
              </p>
            </div>

            <div className="grid grid-cols-3 text-center gap-3 text-sm text-stone-400">
              <div>
                <div className="text-amber-400 text-xl font-bold">5K+</div>
                Subscribers
              </div>
              <div>
                <div className="text-amber-400 text-xl font-bold">98%</div>
                Open Rate
              </div>
              <div>
                <div className="text-amber-400 text-xl font-bold">Weekly</div>
                Delivery
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;