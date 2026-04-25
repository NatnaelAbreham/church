// App.jsx (updated - final version with Blog)
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Leadership from "./components/Leadership";
import Testimonials from "./components/Testimonials";
import LocationMap from "./components/LocationMap";
import Ministries from "./components/Ministries";
import Volunteer from "./components/Volunteer";
import PrayerRequest from "./components/PrayerRequest";
import Giving from "./components/Giving";
import Sermons from "./components/Sermons";
import LiveStream from "./components/LiveStream";
import Gallery from "./components/Gallery";
import Blog from "./components/Blog";
import EventsCalendar from "./components/EventsCalendar";
import Events from "./components/Events";
import Announcements from "./components/Announcements";
import ServiceTimes from "./components/ServiceTimes";
import Newsletter from "./components/Newsletter";
import Contact from "./components/Contact";

import Footer from "./components/Footer";


/* 



import ServiceTimes from "./components/ServiceTimes";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";
import Newsletter from "./components/Newsletter";






import GivingProgress from "./components/GivingProgress";



 */

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Leadership />
      <Testimonials />
      <LocationMap />
      <Ministries />
      <Volunteer />
      <PrayerRequest />
      <Giving />
      <Sermons />
      <LiveStream />
      <Gallery />
      <Blog />
      <EventsCalendar />
      <Events />
      <Announcements />
      <ServiceTimes />
      <Newsletter />
       <Contact />
      <Footer />

      {/* 
      <Events />
      <Sermons />
      
      
      
      
      <FAQ />
      <Newsletter />
      
      <Announcements />
     
      <Volunteer />
      
      <EventsCalendar />
      <GivingProgress />
      <Blog />
      
     
       */}
    </>
  );
}

export default App;