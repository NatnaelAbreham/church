// App.jsx (updated - final version with Blog)
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Leadership from "./components/Leadership";
/*import Ministries from "./components/Ministries";
import Events from "./components/Events";
import Sermons from "./components/Sermons";
import Testimonials from "./components/Testimonials";
import ServiceTimes from "./components/ServiceTimes";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";
import Newsletter from "./components/Newsletter";
import LiveStream from "./components/LiveStream";
import Announcements from "./components/Announcements";
import PrayerRequest from "./components/PrayerRequest";
import Volunteer from "./components/Volunteer";
import LocationMap from "./components/LocationMap";
import EventsCalendar from "./components/EventsCalendar";
import GivingProgress from "./components/GivingProgress";
import Blog from "./components/Blog";
import Giving from "./components/Giving";
import Contact from "./components/Contact";
import Footer from "./components/Footer"; */

function App() {
  return (
    <>
      <Navbar />
      <Hero />
     <About />
       {/* <Ministries />
      <Events />
      <Sermons />
      <Testimonials />*/}
      <Leadership />
      {/*<ServiceTimes />
      <Gallery />
      <FAQ />
      <Newsletter />
      <LiveStream />
      <Announcements />
      <PrayerRequest />
      <Volunteer />
      <LocationMap />
      <EventsCalendar />
      <GivingProgress />
      <Blog />
      <Giving />
      <Contact />
      <Footer /> */}
    </>
  );
}

export default App;