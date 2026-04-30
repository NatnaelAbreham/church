// components/Newsletter.jsx
import { useState } from "react";

const Newsletter = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

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
      prev.includes(id)
        ? prev.filter((x) => x !== id)
        : [...prev, id]
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

    console.log({
      ...form,
      interests: selected,
    });

    setLoading(false);
    setSuccess(true);

    setForm({
      name: "",
      email: "",
    });

    setSelected([]);

    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <section
      id="newsletter"
      className="relative py-28 px-6 overflow-hidden theme-section"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-amber-500/10 blur-3xl rounded-full" />

        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-amber-400/10 blur-3xl rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-14">

          <p className="theme-accent uppercase tracking-[0.3em] text-xs font-semibold">
            Stay Connected
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mt-3 theme-heading">
            Church{" "}
            <span className="theme-gradient-text">
              Newsletter
            </span>
          </h2>

          <p className="theme-text max-w-2xl mx-auto mt-4 text-lg leading-relaxed">
            Weekly updates, devotionals, events,
            and prayer requests delivered directly to you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* FORM */}
          <div className="
            theme-card
            rounded-3xl
            p-8
            shadow-2xl
          ">

            {success ? (
              <div className="text-center py-10">

                <div className="text-5xl mb-4">
                  🎉
                </div>

                <h3 className="text-2xl font-bold theme-accent">
                  Welcome to the Family
                </h3>

                <p className="theme-text mt-2">
                  You are successfully subscribed.
                </p>
              </div>
            ) : (
              <form
                onSubmit={submit}
                className="space-y-5"
              >

                {/* Name */}
                <input
                  className="theme-input p-4"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      name: e.target.value,
                    })
                  }
                />

                {/* Email */}
                <input
                  className="theme-input p-4"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      email: e.target.value,
                    })
                  }
                />

                {/* Interests */}
                <div>
                  <p className="theme-heading font-semibold mb-3">
                    Select Interests
                  </p>

                  <div className="grid grid-cols-2 gap-3">

                    {interests.map((i) => (
                      <button
                        type="button"
                        key={i.id}
                        onClick={() => toggleInterest(i.id)}
                        className={`
                          p-3
                          rounded-xl
                          border
                          text-sm
                          flex
                          items-center
                          gap-2
                          transition-all
                          duration-300
                          ${
                            selected.includes(i.id)
                              ? `
                                border-amber-400
                                bg-amber-100
                                text-amber-700
                                dark:bg-amber-500/10
                                dark:text-amber-300
                              `
                              : `
                                theme-border
                                theme-soft-card
                                hover:border-amber-400/40
                              `
                          }
                        `}
                      >
                        <i
                          className={`fas ${i.icon} theme-accent`}
                        />

                        <span className="theme-text">
                          {i.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Error */}
                {error && (
                  <p className="text-red-500 dark:text-red-400 text-sm">
                    {error}
                  </p>
                )}

                {/* Button */}
                <button
                  disabled={loading}
                  className="
                    w-full
                    py-4
                    rounded-xl
                    theme-button
                    font-semibold
                    hover:scale-[1.02]
                    transition-all
                    duration-300
                    disabled:opacity-70
                  "
                >
                  {loading
                    ? "Subscribing..."
                    : "Subscribe Now"}
                </button>

                <p className="theme-muted text-xs text-center">
                  No spam. Unsubscribe anytime.
                </p>
              </form>
            )}
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">

            {/* Why Subscribe */}
            <div className="
              theme-card
              rounded-2xl
              p-6
            ">
              <h3 className="text-xl font-semibold mb-3 theme-heading">
                Why Subscribe?
              </h3>

              <ul className="theme-text space-y-2 text-sm">
                <li>• Weekly spiritual updates</li>
                <li>• Event notifications</li>
                <li>• Prayer support updates</li>
                <li>• Community announcements</li>
              </ul>
            </div>

            {/* Quote */}
            <div className="
              rounded-2xl
              p-6
              border
              border-amber-400/20
              bg-gradient-to-r
              from-amber-500/10
              to-transparent
              dark:from-amber-500/20
            ">
              <p className="italic theme-text">
                “This newsletter keeps me spiritually
                grounded every week.”
              </p>

              <p className="theme-accent mt-3 text-sm font-medium">
                — Church Member
              </p>
            </div>

            {/* Stats */}
            <div className="
              grid
              grid-cols-3
              gap-3
              text-center
            ">

              <div className="
                theme-soft-card
                rounded-2xl
                p-4
              ">
                <div className="theme-accent text-2xl font-bold">
                  5K+
                </div>

                <p className="theme-muted text-sm mt-1">
                  Subscribers
                </p>
              </div>

              <div className="
                theme-soft-card
                rounded-2xl
                p-4
              ">
                <div className="theme-accent text-2xl font-bold">
                  98%
                </div>

                <p className="theme-muted text-sm mt-1">
                  Open Rate
                </p>
              </div>

              <div className="
                theme-soft-card
                rounded-2xl
                p-4
              ">
                <div className="theme-accent text-2xl font-bold">
                  Weekly
                </div>

                <p className="theme-muted text-sm mt-1">
                  Delivery
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;