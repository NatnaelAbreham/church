// components/Footer.jsx
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-stone-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
        <div>
          <i className="fas fa-church text-3xl text-amber-500 mb-3 block"></i>
          <p className="text-sm">Grace Covenant Church — A family of faith, hope, and love. All are welcome.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="#home" className="hover:text-amber-400 transition">Home</a></li>
            <li><a href="#about" className="hover:text-amber-400 transition">About</a></li>
            <li><a href="#events" className="hover:text-amber-400 transition">Events</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Resources</h4>
          <ul className="space-y-1 text-sm">
            <li>Bible Reading Plan</li>
            <li>Devotionals</li>
            <li>Volunteer</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Service Times</h4>
          <p className="text-sm">
            Sunday: 9:00 AM & 11:00 AM<br />
            Wednesday Prayer: 7:00 PM
          </p>
        </div>
      </div>
      <div className="text-center text-stone-500 text-sm pt-10 border-t border-stone-800 mt-8">
        © {currentYear} Grace Covenant Church — All rights reserved. Built with faith & React.
      </div>
    </footer>
  );
};

export default Footer;