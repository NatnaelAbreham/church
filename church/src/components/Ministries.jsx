// components/Ministries.jsx
const Ministries = () => {
  const ministriesList = [
    { icon: "fa-child", title: "Kids & Youth", desc: "Safe, fun, and faith-filled environment for next generation to grow in Christ." },
    { icon: "fa-users", title: "Small Groups", desc: "Connect deeply with others through weekly Bible studies and fellowship." },
    { icon: "fa-hands-helping", title: "Community Care", desc: "Food pantry, homeless outreach, and prayer support for our neighbors." },
    { icon: "fa-church", title: "Worship Arts", desc: "Choir, band, and creative teams that bring glory through music & media." }
  ];

  return (
    <section id="ministries" className="py-24 px-6 bg-gradient-to-b from-amber-50/40 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-amber-700 font-semibold uppercase tracking-wide">Get involved</span>
          <h2 className="text-4xl md:text-5xl font-bold serif mt-2 text-stone-800">Our Ministries</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {ministriesList.map((ministry, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-md hover-lift border border-amber-100">
              <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mb-5">
                <i className={`fas ${ministry.icon} text-amber-700 text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold">{ministry.title}</h3>
              <p className="text-stone-600 mt-2">{ministry.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ministries;