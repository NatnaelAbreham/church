// components/Contact.jsx
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const iconMap = {
  twitter: faTwitter,
  linkedin: faLinkedin,
  instagram: faInstagram,
  email: faEnvelope,
};
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

    setFormData({
      name: "",
      email: "",
      message: "",
    });

    setTimeout(() => setFeedback(""), 4000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="
        relative
        py-28
        px-6
        overflow-hidden
        theme-section
      "
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="
          absolute
          top-20
          left-10
          w-96
          h-96
          bg-amber-500/10
          blur-3xl
          rounded-full
        "></div>

        <div className="
          absolute
          bottom-20
          right-10
          w-80
          h-80
          bg-amber-600/10
          blur-3xl
          rounded-full
        "></div>
      </div>

      <div className="
        max-w-6xl
        mx-auto
        grid
        md:grid-cols-2
        gap-12
        relative
        z-10
      ">

        {/* LEFT SIDE */}
        <div>

          <span className="
            theme-accent
            font-semibold
            uppercase
            tracking-widest
            text-xs
          ">
            Get in touch
          </span>

          <h2 className="
            text-4xl
            md:text-5xl
            font-bold
            mt-3
            leading-tight
            theme-heading
          ">
            We’d Love to Hear From You
          </h2>

          <p className="
            theme-text
            mt-4
            mb-8
            leading-relaxed
            text-lg
          ">
            Whether it’s a prayer request, question,
            or volunteer opportunity — we are here
            to walk with you in faith.
          </p>

          {/* Contact Info */}
          <div className="space-y-5 theme-text">

            <div className="flex items-center gap-4">
              <i className="
                fas
                fa-map-marker-alt
                theme-accent
                w-5
              "></i>

              <span>
                2450 Grace Ave, Austin, TX 78701
              </span>
            </div>

            <div className="flex items-center gap-4">
              <i className="
                fas
                fa-phone-alt
                theme-accent
                w-5
              "></i>

              <span>
                +1 (512) 555-1234
              </span>
            </div>

            <div className="flex items-center gap-4">
              <i className="
                fas
                fa-envelope
                theme-accent
                w-5
              "></i>

              <span>
                hello@gracecovenant.org
              </span>
            </div>
          </div>

          
         {/* Social */}
<div className="flex gap-4 mt-8">

  {Object.entries(iconMap).map(([key, icon]) => (
    <button
      key={key}
      className="
        w-12 h-12 rounded-full
        border border-amber-200
        bg-white dark:bg-white/5
        dark:border-white/10
        flex items-center justify-center
        text-gray-600 dark:text-stone-400
        hover:text-amber-500
        hover:bg-amber-50
        dark:hover:bg-white/10
        hover:border-amber-400
        hover:-translate-y-1
        shadow-sm hover:shadow-md
        transition-all duration-300
        cursor-pointer
      "
    >
      <FontAwesomeIcon icon={icon} className="text-lg" />
    </button>
  ))}

</div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="relative">

          <div className="
            theme-card
            rounded-3xl
            p-8
            shadow-2xl
          ">

            <h3 className="
              text-2xl
              font-bold
              mb-6
              theme-heading
            ">
              Send a Message
            </h3>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* Name */}
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="
                  theme-input
                  px-4
                  py-3
                "
              />

              {/* Email */}
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email address"
                required
                className="
                  theme-input
                  px-4
                  py-3
                "
              />

              {/* Message */}
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Your message or prayer request..."
                required
                className="
                  theme-input
                  px-4
                  py-3
                  resize-none
                "
              ></textarea>

              {/* Button */}
              <button
                type="submit"
                className="
                  w-full
                  py-3
                  rounded-xl
                  theme-button
                  font-semibold
                  shadow-lg
                  hover:shadow-xl
                  hover:scale-[1.02]
                  transition-all
                  duration-300
                "
              >
                Send Message

                <i className="
                  fas
                  fa-paper-plane
                  ml-2
                "></i>
              </button>

              {/* Feedback */}
              {feedback && (
                <div className="
                  text-center
                  theme-accent
                  text-sm
                  mt-3
                  animate-pulse
                  font-medium
                ">
                  {feedback}
                </div>
              )}
            </form>
          </div>

          {/* Glow Frame */}
          <div className="
            absolute
            -inset-1
            bg-gradient-to-r
            from-amber-500/20
            to-orange-500/10
            blur-2xl
            rounded-3xl
            -z-10
          "></div>
        </div>

      </div>
    </section>
  );
};

export default Contact;