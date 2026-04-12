// components/Contact.jsx
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFeedback("✨ Thank you! Your message has been sent. God bless you.");
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setFeedback(""), 4000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <span className="text-amber-700 font-semibold uppercase tracking-wide">Get in touch</span>
          <h2 className="text-4xl font-bold serif mt-2">We'd Love to Hear From You</h2>
          <p className="text-stone-600 mt-4 mb-6">
            Have questions, prayer requests, or want to volunteer? Reach out anytime.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <i className="fas fa-map-marker-alt text-amber-600 text-xl w-6"></i>
              <span>2450 Grace Ave, Austin, TX 78701</span>
            </div>
            <div className="flex items-center gap-4">
              <i className="fas fa-phone-alt text-amber-600 text-xl w-6"></i>
              <span>+1 (512) 555-1234</span>
            </div>
            <div className="flex items-center gap-4">
              <i className="fas fa-envelope text-amber-600 text-xl w-6"></i>
              <span>hello@gracecovenant.org</span>
            </div>
          </div>
          <div className="flex gap-5 mt-8">
            <i className="fab fa-instagram text-2xl text-stone-500 hover:text-amber-700 transition cursor-pointer"></i>
            <i className="fab fa-facebook text-2xl text-stone-500 hover:text-amber-700 transition cursor-pointer"></i>
            <i className="fab fa-youtube text-2xl text-stone-500 hover:text-amber-700 transition cursor-pointer"></i>
          </div>
        </div>

        <div className="bg-stone-50 rounded-3xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Send a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              className="w-full p-3 rounded-xl border border-stone-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-300 outline-none"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email address"
              required
              className="w-full p-3 rounded-xl border border-stone-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-300 outline-none"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Your message or prayer request..."
              required
              className="w-full p-3 rounded-xl border border-stone-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-300 outline-none"
            ></textarea>
            <button
              type="submit"
              className="bg-amber-700 text-white py-3 rounded-xl w-full font-semibold hover:bg-amber-800 transition"
            >
              Send Message <i className="fas fa-paper-plane ml-2"></i>
            </button>
            {feedback && <p className="text-sm text-green-700 text-center">{feedback}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;