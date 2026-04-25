import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFeedback("✨ Message sent successfully. God bless you!");
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => setFeedback(""), 4000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      className="py-28 px-6 bg-gradient-to-br from-stone-950 via-stone-900 to-stone-950 text-white relative overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-amber-500/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-amber-600/10 blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 relative z-10">

        {/* LEFT SIDE */}
        <div>
          <span className="text-amber-400 font-semibold uppercase tracking-widest text-xs">
            Get in touch
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3 leading-tight">
            We’d Love to Hear From You
          </h2>

          <p className="text-white/60 mt-4 mb-8 leading-relaxed">
            Whether it’s a prayer request, question, or volunteer opportunity —
            we are here to walk with you in faith.
          </p>

          {/* contact info */}
          <div className="space-y-5 text-white/70">
            <div className="flex items-center gap-4">
              <i className="fas fa-map-marker-alt text-amber-400 w-5"></i>
              <span>2450 Grace Ave, Austin, TX 78701</span>
            </div>

            <div className="flex items-center gap-4">
              <i className="fas fa-phone-alt text-amber-400 w-5"></i>
              <span>+1 (512) 555-1234</span>
            </div>

            <div className="flex items-center gap-4">
              <i className="fas fa-envelope text-amber-400 w-5"></i>
              <span>hello@gracecovenant.org</span>
            </div>
          </div>

          {/* social */}
          <div className="flex gap-4 mt-8">
            <i className="fab fa-instagram text-xl text-white/50 hover:text-amber-400 cursor-pointer transition"></i>
            <i className="fab fa-facebook text-xl text-white/50 hover:text-amber-400 cursor-pointer transition"></i>
            <i className="fab fa-youtube text-xl text-white/50 hover:text-amber-400 cursor-pointer transition"></i>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="relative">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">

            <h3 className="text-2xl font-bold mb-6">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-500/20 transition"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email address"
                required
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-500/20 transition"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Your message or prayer request..."
                required
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-500/20 transition"
              ></textarea>

              <button
                type="submit"
                className="w-full py-3 rounded-xl font-semibold bg-gradient-to-r from-amber-500 via-amber-400 to-orange-500 text-stone-950 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-[1.02] transition-all"
              >
                Send Message <i className="fas fa-paper-plane ml-2"></i>
              </button>

              {/* feedback */}
              {feedback && (
                <div className="text-center text-amber-300 text-sm mt-3 animate-pulse">
                  {feedback}
                </div>
              )}
            </form>
          </div>

          {/* glow frame */}
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 to-orange-500/10 blur-2xl rounded-3xl -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;