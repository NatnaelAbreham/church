// components/About.jsx
const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-[#fefcf8] relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-amber-700 font-semibold tracking-wide uppercase text-sm">Our story</span>
          <h2 className="text-4xl md:text-5xl font-bold serif mt-2 text-stone-800">Rooted in Love, Reaching Out</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-5">
            <p className="text-stone-700 text-lg leading-relaxed">
              Grace Covenant Church was founded in 1998 with a vision to create a spiritual family where everyone belongs. We're a diverse community committed to biblical truth, heartfelt worship, and serving our city.
            </p>
            <p className="text-stone-700 leading-relaxed">
              Our mission: <span className="font-semibold text-amber-800">"To know Christ and make Him known"</span> — through authentic relationships, social justice, and creative expressions of faith. We gather across generations, cultures, and backgrounds, united by grace.
            </p>
            <div className="flex gap-5 pt-2">
              <div>
                <i className="fas fa-hands-helping text-3xl text-amber-600"></i>
                <p className="font-medium mt-1">Outreach</p>
              </div>
              <div>
                <i className="fas fa-music text-3xl text-amber-600"></i>
                <p className="font-medium mt-1">Worship</p>
              </div>
              <div>
                <i className="fas fa-chalkboard-teacher text-3xl text-amber-600"></i>
                <p className="font-medium mt-1">Discipleship</p>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 relative">
            <img
              src="https://images.pexels.com/photos/3671129/pexels-photo-3671129.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Community gathering"
              className="rounded-3xl shadow-2xl object-cover w-full h-96"
            />
            <div className="absolute -bottom-5 -right-5 bg-amber-100 rounded-2xl p-4 shadow-xl hidden md:block">
              <i className="fas fa-heart text-amber-700 text-4xl"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;