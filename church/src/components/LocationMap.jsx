// components/LocationMap.jsx
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faLocationDot,
  faCopy,
  faTrain,
  faCar,
  faPersonWalking,
  faBus,
  faBicycle,
  faRoute,
  faMap,
  faSquareParking,
  faWheelchair,
  faStore,
  faSpinner,
  faPlus,
  faMinus,
  faChurch,
  faClock,
  faArrowRight,
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faExternalLink,
  faBuilding,
  faRoad,
  faEarDeaf,
  faSchool,
  faPrint,
  faPeace,
  faCube
} from "@fortawesome/free-solid-svg-icons";
import { faMugHot, faShoppingBasket, faTree, faPrescriptionBottle } from "@fortawesome/free-solid-svg-icons";
import {
  faGoogle,
  faApple,
  faWaze
} from "@fortawesome/free-brands-svg-icons";

const LocationMap = () => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [selectedTab, setSelectedTab] = useState("map");
  const [directions, setDirections] = useState({
    from: "",
    travelMode: "driving"
  });
  const [showDirections, setShowDirections] = useState(false);
  const [copied, setCopied] = useState(false);

  const churchInfo = {
    name: "Grace Covenant Church",
    address: "2450 Grace Avenue, Austin, TX 78701",
    phone: "+1 (512) 555-1234",
    email: "info@gracecovenant.org",
    coordinates: {
      lat: 30.267153,
      lng: -97.7430608
    },
    parking: {
      main: "On-site parking garage - 300 spaces",
      street: "Free street parking on surrounding roads",
      handicap: "Designated handicap parking near all entrances",
      overflow: "Overflow parking at Grace Community School (weekends only)"
    },
    accessibility: {
      wheelchair: "Fully wheelchair accessible with ramps and elevators",
      hearing: "Assisted listening devices available at Welcome Center",
      largePrint: "Large print bulletins available upon request",
      sensory: "Sensory-friendly room available during services"
    },
    nearby: [
      { name: "Starbucks", type: "Coffee", distance: "0.2 miles", icon: faMugHot },
      { name: "Whole Foods", type: "Grocery", distance: "0.3 miles", icon: faShoppingBasket },
      { name: "Central Park", type: "Park", distance: "0.5 miles", icon: faTree },
      { name: "CVS Pharmacy", type: "Pharmacy", distance: "0.1 miles", icon: faPrescriptionBottle }
    ],
    publicTransport: {
      bus: "Bus routes 3, 10, and 20 stop at Grace Ave & 24th St",
      rail: "MetroRail Downtown Station - 0.8 miles away",
      bike: "Bike racks available at all entrances"
    }
  };

  // Simulate map load (in production, use Google Maps or Mapbox API)
  useEffect(() => {
    const timer = setTimeout(() => {
      setMapLoaded(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleGetDirections = (e) => {
    e.preventDefault();
    if (directions.from.trim()) {
      const mapsUrl = `https://www.google.com/maps/dir/${encodeURIComponent(directions.from)}/${encodeURIComponent(churchInfo.address)}`;
      window.open(mapsUrl, '_blank');
      setShowDirections(false);
      setDirections({ from: "", travelMode: "driving" });
    }
  };

  const copyAddress = () => {
    navigator.clipboard.writeText(churchInfo.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const openGoogleMaps = () => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(churchInfo.address)}`, '_blank');
  };

  const openAppleMaps = () => {
    window.open(`https://maps.apple.com/?address=${encodeURIComponent(churchInfo.address)}`, '_blank');
  };

  const openWaze = () => {
    window.open(`https://waze.com/ul?q=${encodeURIComponent(churchInfo.address)}`, '_blank');
  };

  return (
    <section id="location-map" className="theme-section py-28 px-6 relative overflow-hidden">
      {/* Modern 2026 decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-amber-400/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm px-5 py-2 rounded-full mb-5 theme-border">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-amber-400 text-sm" />
            <span className="theme-accent font-semibold tracking-wide uppercase text-xs">Find Us</span>
            <FontAwesomeIcon icon={faLocationDot} className="text-amber-400 text-sm" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold serif theme-heading mb-4">
            <span className="theme-accent">Our Location</span>
          </h2>
          <div className="w-28 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full mb-6"></div>
          <p className="theme-text max-w-2xl mx-auto text-lg">
            Conveniently located in the heart of Austin with easy access from anywhere in the city
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Info Cards */}
          <div className="space-y-6">
            {/* Address Card */}
            <div className="theme-soft-card rounded-2xl p-6 theme-hover transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FontAwesomeIcon icon={faLocationDot} className="theme-accent text-xl" />
                </div>
                <div className="flex-1">
                  <h3 className="theme-heading font-bold text-lg mb-2">Address</h3>
                  <p className="theme-text text-sm leading-relaxed">{churchInfo.address}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <button
                      onClick={copyAddress}
                      className="flex items-center gap-1 text-xs theme-accent hover:opacity-80 transition-colors"
                    >
                      <FontAwesomeIcon icon={faCopy} />
                      {copied ? "Copied!" : "Copy Address"}
                    </button>
                    <button
                      onClick={openGoogleMaps}
                      className="flex items-center gap-1 text-xs theme-accent hover:opacity-80 transition-colors"
                    >
                      <FontAwesomeIcon icon={faGoogle} />
                      Google Maps
                    </button>
                    <button
                      onClick={openAppleMaps}
                      className="flex items-center gap-1 text-xs theme-accent hover:opacity-80 transition-colors"
                    >
                      <FontAwesomeIcon icon={faApple} />
                      Apple Maps
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="theme-soft-card rounded-2xl p-6 theme-hover transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FontAwesomeIcon icon={faPhone} className="theme-accent text-xl" />
                </div>
                <div className="flex-1">
                  <h3 className="theme-heading font-bold text-lg mb-2">Contact</h3>
                  <p className="theme-muted text-sm">
                    <FontAwesomeIcon icon={faPhone} className="theme-accent mr-2" />
                    {churchInfo.phone}
                  </p>
                  <p className="theme-text text-sm mt-2">
                    <FontAwesomeIcon icon={faEnvelope} className="theme-accent mr-2" />
                    {churchInfo.email}
                  </p>
                </div>
              </div>
            </div>

            {/* Get Directions Card */}
            <div className="theme-card p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FontAwesomeIcon icon={faRoute} className="theme-accent text-xl" />
                </div>
                <div className="flex-1">
                  <h3 className="theme-heading font-bold text-lg mb-3">Get Directions</h3>
                  {!showDirections ? (
                    <button
                      onClick={() => setShowDirections(true)}
                      className="w-full py-2.5 theme-button rounded-xl font-medium flex items-center justify-center gap-2"
                    >
                      <FontAwesomeIcon icon={faCar} />
                      Plan Your Route
                    </button>
                  ) : (
                    <form onSubmit={handleGetDirections} className="space-y-3">
                      <input
                        type="text"
                        value={directions.from}
                        onChange={(e) => setDirections(prev => ({ ...prev, from: e.target.value }))}
                        placeholder="Enter your starting address"
                        className="theme-input"
                        autoFocus
                      />
                      <div className="flex gap-2">
                        {["driving", "walking", "transit", "bicycling"].map((mode) => (
                          <button
                            key={mode}
                            type="button"
                            onClick={() => setDirections(prev => ({ ...prev, travelMode: mode }))}
                            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${directions.travelMode === mode
                              ? "theme-button"
                              : "theme-soft-card theme-text hover:opacity-80"
                              }`}
                          >
                            <FontAwesomeIcon
                              icon={
                                mode === "driving"
                                  ? faCar
                                  : mode === "walking"
                                    ? faPersonWalking
                                    : mode === "transit"
                                      ? faBus
                                      : faBicycle
                              }
                              className="mr-1"
                            />
                            {mode.charAt(0).toUpperCase() + mode.slice(1, 4)}
                          </button>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <button
                          type="submit"
                          className="flex-1 py-2 theme-button rounded-xl font-medium"
                        >
                          Get Directions
                        </button>
                        <button
                          type="button"
                          onClick={() => setShowDirections(false)}
                          className="py-2 px-4 theme-soft-card theme-text rounded-xl hover:opacity-80 transition-all"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>

            {/* Quick Navigation Buttons */}
            <div className="flex gap-3">
              <button
                onClick={openWaze}
                className="flex-1 flex items-center justify-center gap-2 py-3 theme-soft-card theme-text theme-hover rounded-xl transition-all"
              >
                <FontAwesomeIcon icon={faWaze} className="text-lg" />
                <span className="text-sm">Waze</span>
              </button>
              <button
                onClick={() => window.open(`https://www.google.com/maps/dir//${encodeURIComponent(churchInfo.address)}`, '_blank')}
                className="flex-1 flex items-center justify-center gap-2 py-3 theme-soft-card theme-text theme-hover rounded-xl transition-all"
              >
                <FontAwesomeIcon icon={faGoogle} className="text-lg" />
                <span className="text-sm">Google</span>
              </button>
              <button
                onClick={() => window.open(`https://maps.apple.com/?address=${encodeURIComponent(churchInfo.address)}`, '_blank')}
                className="flex-1 flex items-center justify-center gap-2 py-3 theme-soft-card theme-text theme-hover rounded-xl transition-all"
              >
                <FontAwesomeIcon icon={faApple} className="text-lg" />
                <span className="text-sm">Apple</span>
              </button>
            </div>
          </div>

          {/* Right Column - Map and Tabs */}
          <div className="lg:col-span-2">
            {/* Map Container */}
            <div className="theme-soft-card rounded-2xl overflow-hidden">
              <div className="relative h-[400px] md:h-[450px] theme-glow">
                {!mapLoaded ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <FontAwesomeIcon icon={faSpinner} spin className="theme-accent text-3xl mb-3" />
                      <p className="theme-muted">Loading map...</p>
                    </div>
                  </div>
                ) : (
                  <>
                    {/* Interactive Map Image - In production, use Google Maps Embed API */}
                    <img
                      src="https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=1200"
                      alt="Church location map"
                      className="w-full h-full object-cover opacity-80"
                    />
                    {/* Map Overlay with Pin */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="relative">
                        <div className="absolute inset-0 bg-amber-500 rounded-full animate-ping opacity-75"></div>
                        <div className="relative w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center shadow-lg">
                          <FontAwesomeIcon icon={faChurch} className="text-white text-sm" />
                        </div>
                      </div>
                    </div>
                    {/* Map Controls */}
                    <div className="absolute bottom-4 right-4 flex gap-2">
                      <button className="w-10 h-10 theme-card rounded-lg flex items-center justify-center theme-text hover:opacity-80 transition-all">
                        <FontAwesomeIcon icon={faPlus} />
                      </button>
                      <button className="w-10 h-10 theme-card rounded-lg flex items-center justify-center theme-text hover:opacity-80 transition-all">
                        <FontAwesomeIcon icon={faMinus} />
                      </button>
                    </div>
                  </>
                )}
              </div>

              {/* Tabs Navigation */}
              <div className="theme-border border-b">
                <div className="flex">
                  {["map", "parking", "accessibility", "nearby"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setSelectedTab(tab)}
                      className={`flex-1 py-3 text-sm font-medium transition-all ${selectedTab === tab
                        ? "theme-accent border-b-2 border-amber-400"
                        : "theme-muted hover:theme-text"
                        }`}
                    >
                      <FontAwesomeIcon
                        icon={
                          tab === "map"
                            ? faMap
                            : tab === "parking"
                              ? faSquareParking
                              : tab === "accessibility"
                                ? faWheelchair
                                : faStore
                        }
                        className="mr-2"
                      />
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab Content */}
              <div className="p-5">
                {selectedTab === "map" && (
                  <div>
                    <h4 className="theme-heading font-semibold mb-3">Interactive Map</h4>
                    <p className="theme-muted text-sm mb-4">
                      Use the controls to zoom and pan. Click the pin for more information about our location.
                    </p>
                    <button
                      onClick={openGoogleMaps}
                      className="theme-accent text-sm hover:opacity-80 transition-colors flex items-center gap-1"
                    >
                      Open in Google Maps <FontAwesomeIcon icon={faExternalLink} className="text-xs" />
                    </button>
                  </div>
                )}

                {selectedTab === "parking" && (
                  <div className="space-y-3">
                    <h4 className="theme-heading font-semibold mb-3">Parking Information</h4>
                    <div className="space-y-2">
                      <div className="flex items-start gap-3">
                        <FontAwesomeIcon icon={faBuilding} className="theme-accent mt-0.5" />
                        <div>
                          <p className="theme-text text-sm font-medium">Main Parking Garage</p>
                          <p className="theme-muted text-sm">{churchInfo.parking.main}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <FontAwesomeIcon icon={faRoad} className="theme-accent mt-0.5" />
                        <div>
                          <p className="theme-text text-sm font-medium">Street Parking</p>
                          <p className="theme-muted text-sm">{churchInfo.parking.street}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <FontAwesomeIcon icon={faWheelchair} className="theme-accent mt-0.5" />
                        <div>
                          <p className="theme-text text-sm font-medium">Handicap Parking</p>
                          <p className="theme-muted text-sm">{churchInfo.parking.handicap}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <FontAwesomeIcon icon={faSchool} className="theme-accent mt-0.5" />
                        <div>
                          <p className="theme-text text-sm font-medium">Overflow Parking</p>
                          <p className="theme-muted text-sm">{churchInfo.parking.overflow}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {selectedTab === "accessibility" && (
                  <div className="space-y-3">
                    <h4 className="theme-heading font-semibold mb-3">Accessibility Features</h4>
                    <div className="space-y-2">
                      <div className="flex items-start gap-3">
                        <FontAwesomeIcon icon={faWheelchair} className="theme-accent mt-0.5" />
                        <div>
                          <p className="theme-text text-sm font-medium">Wheelchair Access</p>
                          <p className="theme-muted text-sm">{churchInfo.accessibility.wheelchair}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <FontAwesomeIcon icon={faEarDeaf} className="theme-accent mt-0.5" />
                        <div>
                          <p className="theme-text text-sm font-medium">Hearing Assistance</p>
                          <p className="theme-muted text-sm">{churchInfo.accessibility.hearing}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <FontAwesomeIcon icon={faPrint} className="theme-accent mt-0.5" />
                        <div>
                          <p className="theme-text text-sm font-medium">Large Print</p>
                          <p className="theme-muted text-sm">{churchInfo.accessibility.largePrint}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <FontAwesomeIcon icon={faPeace} className="theme-accent mt-0.5" />
                        <div>
                          <p className="theme-text text-sm font-medium">Sensory-Friendly</p>
                          <p className="theme-muted text-sm">{churchInfo.accessibility.sensory}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {selectedTab === "nearby" && (
                  <div>
                    <h4 className="theme-heading font-semibold mb-3">Nearby Amenities</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {churchInfo.nearby.map((place, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-2 theme-soft-card rounded-lg">
                          <div className="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center">
                            <FontAwesomeIcon icon={place.icon} className="theme-accent text-sm" />
                          </div>
                          <div>
                            <p className="theme-text text-sm font-medium">{place.name}</p>
                            <p className="theme-muted text-xs">{place.type} • {place.distance}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 theme-border border-t">
                      <h5 className="theme-text text-sm font-medium mb-2">Public Transportation</h5>
                      <div className="space-y-1">
                        <p className="theme-muted text-sm flex items-center gap-2">
                          <FontAwesomeIcon icon={faBus} className="theme-accent" />
                          {churchInfo.publicTransport.bus}
                        </p>
                        <p className="theme-muted text-sm flex items-center gap-2">
                          <FontAwesomeIcon icon={faTrain} className="theme-accent" />
                          {churchInfo.publicTransport.rail}
                        </p>
                        <p className="theme-muted text-sm flex items-center gap-2">
                          <FontAwesomeIcon icon={faBicycle} className="theme-accent" />
                          {churchInfo.publicTransport.bike}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Service Times Banner */}
        <div className="mt-12 theme-glow rounded-2xl p-6 theme-border text-center">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={faClock} className="theme-accent text-xl" />
              </div>
              <div className="text-left">
                <h4 className="theme-heading font-semibold">Service Times</h4>
                <p className="theme-muted text-sm">Sunday 9:00 AM & 11:00 AM | Wednesday 7:00 PM | Saturday 6:00 PM</p>
              </div>
            </div>
            <button
              onClick={() => {
                const serviceTimesSection = document.getElementById("service-times");
                if (serviceTimesSection) {
                  serviceTimesSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="px-6 py-2 theme-button rounded-full font-medium transition-all flex items-center gap-2"
            >
              View Full Schedule <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>

        {/* Virtual Tour Link */}
        <div className="text-center mt-8">
          <button className="inline-flex items-center gap-2 theme-accent hover:opacity-80 transition-colors">
            <FontAwesomeIcon icon={faCube} className="text-lg" />
            <span>Take a Virtual Tour of Our Church</span>
            <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;