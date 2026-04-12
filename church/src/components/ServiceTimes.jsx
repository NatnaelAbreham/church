// components/ServiceTimes.jsx
import { useState, useEffect } from "react";

const ServiceTimes = () => {
  const [currentService, setCurrentService] = useState(null);
  const [nextServiceTime, setNextServiceTime] = useState(null);
  const [countdown, setCountdown] = useState("");

  const services = [
    {
      id: 1,
      day: "Sunday",
      date: "Every Sunday",
      times: [
        { time: "9:00 AM", type: "Traditional Worship", duration: "75 min", language: "English", location: "Main Sanctuary" },
        { time: "11:00 AM", type: "Contemporary Worship", duration: "75 min", language: "English", location: "Main Sanctuary" }
      ],
      icon: "fa-sun",
      color: "amber",
      description: "Our main weekly worship services featuring inspiring music, relevant teaching, and community connection.",
      specialNote: "Children's ministry and youth programs available during both services"
    },
    {
      id: 2,
      day: "Wednesday",
      date: "Every Wednesday",
      times: [
        { time: "7:00 PM", type: "Prayer & Bible Study", duration: "90 min", language: "English", location: "Fellowship Hall" }
      ],
      icon: "fa-praying-hands",
      color: "blue",
      description: "Midweek gathering focused on prayer, Bible study, and spiritual growth in a intimate setting.",
      specialNote: "Spanish translation available upon request"
    },
    {
      id: 3,
      day: "Saturday",
      date: "Every Saturday",
      times: [
        { time: "6:00 PM", type: "Evening Worship", duration: "75 min", language: "English", location: "Chapel" }
      ],
      icon: "fa-moon",
      color: "purple",
      description: "Relaxed evening service perfect for those with Sunday commitments or who prefer smaller gatherings.",
      specialNote: "Followed by fellowship dinner (RSVP required)"
    },
    {
      id: 4,
      day: "Youth Night",
      date: "Fridays (Weekly)",
      times: [
        { time: "7:00 PM", type: "Youth Group", duration: "120 min", language: "English", location: "Youth Center" }
      ],
      icon: "fa-child",
      color: "green",
      description: "Dynamic gathering for students grades 6-12 featuring games, worship, and relevant teaching.",
      specialNote: "Special events every first Friday of the month"
    }
  ];

  // Determine current and next service based on current time
  useEffect(() => {
    const updateServiceInfo = () => {
      const now = new Date();
      const currentDay = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
      const currentHour = now.getHours();
      const currentMinute = now.getMinutes();
      const currentTimeInMinutes = currentHour * 60 + currentMinute;

      // Map day numbers to service day names
      const dayMap = {
        0: "Sunday",
        1: "Monday",
        2: "Tuesday", 
        3: "Wednesday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday"
      };

      const todayName = dayMap[currentDay];
      
      // Find if there's a service happening now
      let current = null;
      let next = null;
      let minFutureTime = Infinity;

      // Check all services to find current and next
      services.forEach(service => {
        service.times.forEach(timeSlot => {
          const [hour, minute, period] = timeSlot.time.match(/(\d+):(\d+)\s*(\w+)/).slice(1);
          let slotHour = parseInt(hour);
          const slotMinute = parseInt(minute);
          
          if (period === "PM" && slotHour !== 12) slotHour += 12;
          if (period === "AM" && slotHour === 12) slotHour = 0;
          
          const slotTimeInMinutes = slotHour * 60 + slotMinute;
          const slotEndTime = slotTimeInMinutes + parseInt(timeSlot.duration);

          // Check if service is on the current day
          if (service.day === todayName) {
            // Is service currently happening?
            if (currentTimeInMinutes >= slotTimeInMinutes && currentTimeInMinutes <= slotEndTime) {
              current = {
                service: service,
                timeSlot: timeSlot,
                endTime: slotEndTime
              };
            }
            
            // Find next future service
            if (slotTimeInMinutes > currentTimeInMinutes && slotTimeInMinutes < minFutureTime) {
              minFutureTime = slotTimeInMinutes;
              next = {
                service: service,
                timeSlot: timeSlot,
                startTime: slotTimeInMinutes
              };
            }
          }
        });
      });

      // If no more services today, find first service of next valid day
      if (!next) {
        let daysAhead = 1;
        let foundNext = false;
        
        while (!foundNext && daysAhead <= 7) {
          const futureDate = new Date(now);
          futureDate.setDate(now.getDate() + daysAhead);
          const futureDayName = dayMap[futureDate.getDay()];
          
          for (const service of services) {
            if (service.day === futureDayName) {
              const earliestSlot = service.times.reduce((earliest, slot) => {
                const [hour, minute, period] = slot.time.match(/(\d+):(\d+)\s*(\w+)/).slice(1);
                let slotHour = parseInt(hour);
                if (period === "PM" && slotHour !== 12) slotHour += 12;
                if (period === "AM" && slotHour === 12) slotHour = 0;
                const slotTime = slotHour * 60 + parseInt(minute);
                return slotTime < (earliest.time || Infinity) ? { slot, time: slotTime } : earliest;
              }, { slot: null, time: Infinity });
              
              if (earliestSlot.slot) {
                next = {
                  service: service,
                  timeSlot: earliestSlot.slot,
                  startTime: earliestSlot.time,
                  daysAhead: daysAhead
                };
                foundNext = true;
                break;
              }
            }
          }
          daysAhead++;
        }
      }

      setCurrentService(current);
      setNextServiceTime(next);
    };

    updateServiceInfo();
    const interval = setInterval(updateServiceInfo, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  // Update countdown timer
  useEffect(() => {
    if (!nextServiceTime) return;

    const updateCountdown = () => {
      const now = new Date();
      let targetTime = new Date();
      
      if (nextServiceTime.daysAhead) {
        targetTime.setDate(now.getDate() + nextServiceTime.daysAhead);
      }
      
      const [hour, minute, period] = nextServiceTime.timeSlot.time.match(/(\d+):(\d+)\s*(\w+)/).slice(1);
      let targetHour = parseInt(hour);
      if (period === "PM" && targetHour !== 12) targetHour += 12;
      if (period === "AM" && targetHour === 12) targetHour = 0;
      
      targetTime.setHours(targetHour, parseInt(minute), 0, 0);
      
      const diff = targetTime - now;
      
      if (diff <= 0) {
        setCountdown("Happening now!");
        return;
      }
      
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      if (hours > 24) {
        const days = Math.floor(hours / 24);
        setCountdown(`${days} day${days > 1 ? 's' : ''} away`);
      } else if (hours > 0) {
        setCountdown(`${hours}h ${minutes}m`);
      } else if (minutes > 0) {
        setCountdown(`${minutes}m ${seconds}s`);
      } else {
        setCountdown(`${seconds}s`);
      }
    };
    
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [nextServiceTime]);

  const getColorClasses = (color) => {
    const colors = {
      amber: "from-amber-500 to-amber-600",
      blue: "from-blue-500 to-blue-600",
      purple: "from-purple-500 to-purple-600",
      green: "from-green-500 to-green-600"
    };
    return colors[color] || colors.amber;
  };

  const getBadgeColor = (color) => {
    const colors = {
      amber: "bg-amber-500/20 text-amber-300 border-amber-500/30",
      blue: "bg-blue-500/20 text-blue-300 border-blue-500/30",
      purple: "bg-purple-500/20 text-purple-300 border-purple-500/30",
      green: "bg-green-500/20 text-green-300 border-green-500/30"
    };
    return colors[color] || colors.amber;
  };

  const addToCalendar = (service, timeSlot) => {
    const startTime = new Date();
    const [hour, minute, period] = timeSlot.time.match(/(\d+):(\d+)\s*(\w+)/).slice(1);
    let eventHour = parseInt(hour);
    if (period === "PM" && eventHour !== 12) eventHour += 12;
    if (period === "AM" && eventHour === 12) eventHour = 0;
    
    const eventDate = new Date();
    const dayMap = { Sunday: 0, Monday: 1, Tuesday: 2, Wednesday: 3, Thursday: 4, Friday: 5, Saturday: 6 };
    const targetDay = dayMap[service.day];
    const currentDay = eventDate.getDay();
    let daysToAdd = targetDay - currentDay;
    if (daysToAdd < 0) daysToAdd += 7;
    eventDate.setDate(eventDate.getDate() + daysToAdd);
    eventDate.setHours(eventHour, parseInt(minute), 0);
    
    const endDate = new Date(eventDate);
    endDate.setMinutes(endDate.getMinutes() + parseInt(timeSlot.duration));
    
    const event = {
      title: `${service.day} ${timeSlot.type} at Grace Covenant Church`,
      description: service.description,
      start: eventDate.toISOString(),
      end: endDate.toISOString(),
      location: `2450 Grace Ave, Austin, TX 78701 - ${timeSlot.location}`
    };
    
    // Create Google Calendar URL
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.start.replace(/[-:]/g, '').split('.')[0]}/${event.end.replace(/[-:]/g, '').split('.')[0]}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}`;
    
    window.open(googleCalendarUrl, '_blank');
  };

  return (
    <section id="service-times" className="py-28 px-6 bg-gradient-to-br from-white via-amber-50/20 to-white relative overflow-hidden">
      {/* Modern 2026 decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 right-10 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-amber-300/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-amber-100/5 to-transparent rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-100/80 backdrop-blur-sm px-5 py-2 rounded-full mb-5 shadow-sm">
            <i className="fas fa-clock text-amber-600 text-sm"></i>
            <span className="text-amber-700 font-semibold tracking-wide uppercase text-xs">Worship With Us</span>
            <i className="fas fa-calendar-alt text-amber-600 text-sm"></i>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold serif text-stone-800 mb-4">
            Service <span className="text-amber-600">Times</span>
          </h2>
          <div className="w-28 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full mb-6"></div>
          <p className="text-stone-600 max-w-2xl mx-auto text-lg">
            Join us for worship, fellowship, and spiritual growth throughout the week
          </p>
        </div>

        {/* Live/Next Service Banner */}
        {(currentService || nextServiceTime) && (
          <div className="mb-12 bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-6 md:p-8 text-white">
                <div className="flex items-center gap-2 mb-3">
                  <i className="fas fa-circle text-green-400 text-xs animate-pulse"></i>
                  <span className="text-sm font-semibold uppercase tracking-wide">
                    {currentService ? "🔴 LIVE SERVICE IN PROGRESS" : "⏰ NEXT SERVICE"}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  {currentService 
                    ? `${currentService.service.day} ${currentService.timeSlot.type}`
                    : `${nextServiceTime.service.day} ${nextServiceTime.timeSlot.type}`
                  }
                </h3>
                <div className="flex flex-wrap gap-4 text-amber-100 mt-4">
                  <div className="flex items-center gap-2">
                    <i className="fas fa-clock"></i>
                    <span>{currentService ? `Until ${Math.ceil((currentService.endTime - new Date().getHours()*60 - new Date().getMinutes())/60)}h left` : countdown}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>{currentService ? currentService.timeSlot.location : nextServiceTime.timeSlot.location}</span>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 md:p-8 flex items-center justify-center">
                <button 
                  onClick={() => window.location.href = "#contact"}
                  className="bg-white text-amber-700 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105 flex items-center gap-2"
                >
                  <i className="fas fa-video"></i>
                  Join Live Stream
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-stone-100 hover:border-amber-200"
            >
              {/* Card Header */}
              <div className={`bg-gradient-to-r ${getColorClasses(service.color)} p-6 text-white relative overflow-hidden`}>
                <div className="absolute inset-0 bg-white/10 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
                <div className="relative z-10 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <i className={`fas ${service.icon} text-2xl`}></i>
                      <h3 className="text-2xl font-bold">{service.day}</h3>
                    </div>
                    <p className="text-white/90 text-sm">{service.date}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold">{service.times[0].time.split(' ')[0]}</div>
                    <div className="text-xs opacity-80">{service.times[0].time.split(' ')[1]}</div>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <p className="text-stone-600 mb-4 text-sm leading-relaxed">{service.description}</p>
                
                {/* Time Slots */}
                <div className="space-y-3 mb-4">
                  {service.times.map((slot, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-stone-50 rounded-xl">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                          <i className="fas fa-clock text-amber-600 text-sm"></i>
                        </div>
                        <div>
                          <div className="font-semibold text-stone-800">{slot.time} - {slot.type}</div>
                          <div className="text-xs text-stone-500 flex items-center gap-2 mt-1">
                            <span><i className="fas fa-hourglass-half mr-1"></i>{slot.duration}</span>
                            <span><i className="fas fa-map-marker-alt mr-1"></i>{slot.location}</span>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => addToCalendar(service, slot)}
                        className="text-amber-600 hover:text-amber-700 transition-colors"
                        title="Add to Calendar"
                      >
                        <i className="far fa-calendar-plus text-xl"></i>
                      </button>
                    </div>
                  ))}
                </div>

                {/* Special Note */}
                {service.specialNote && (
                  <div className={`mt-4 p-3 rounded-xl ${getBadgeColor(service.color)} border`}>
                    <div className="flex items-start gap-2">
                      <i className="fas fa-info-circle text-sm mt-0.5"></i>
                      <p className="text-xs">{service.specialNote}</p>
                    </div>
                  </div>
                )}

                {/* Location & Livestream */}
                <div className="mt-4 pt-4 border-t border-stone-100 flex justify-between items-center">
                  <div className="flex items-center gap-2 text-stone-500 text-sm">
                    <i className="fas fa-church"></i>
                    <span>2450 Grace Ave, Austin, TX</span>
                  </div>
                  <button className="text-amber-600 hover:text-amber-700 text-sm font-medium flex items-center gap-1">
                    Livestream <i className="fas fa-arrow-right text-xs"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Location & Map Section */}
        <div className="grid md:grid-cols-2 gap-8 bg-gradient-to-r from-stone-800 to-stone-900 rounded-3xl overflow-hidden shadow-2xl">
          <div className="p-8 md:p-10 text-white">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 px-3 py-1 rounded-full mb-4">
              <i className="fas fa-map-pin text-amber-400 text-xs"></i>
              <span className="text-amber-300 text-xs font-semibold uppercase tracking-wide">Visit Us</span>
            </div>
            <h3 className="text-3xl font-bold serif mb-4">Find Our Church</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <i className="fas fa-location-dot text-amber-400 mt-1"></i>
                <div>
                  <p className="font-semibold">Grace Covenant Church</p>
                  <p className="text-stone-300 text-sm">2450 Grace Avenue, Austin, TX 78701</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <i className="fas fa-parking text-amber-400 mt-1"></i>
                <div>
                  <p className="font-semibold">Free Parking</p>
                  <p className="text-stone-300 text-sm">On-site parking garage and street parking available</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <i className="fas fa-wheelchair text-amber-400 mt-1"></i>
                <div>
                  <p className="font-semibold">Fully Accessible</p>
                  <p className="text-stone-300 text-sm">Wheelchair accessible entrances, elevators, and seating</p>
                </div>
              </div>
            </div>
            <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2">
              <i className="fas fa-directions"></i>
              Get Directions
            </button>
          </div>
          <div className="h-64 md:h-auto bg-stone-700 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.888888888889!2d-97.7430608!3d30.267153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a8f7b9e9%3A0x5c2e5b7e5c5c5c5c!2sAustin%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Church Location Map"
              className="w-full h-full object-cover"
            ></iframe>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-stone-800 mb-6">Frequently Asked Questions</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <i className="fas fa-child text-amber-600 text-2xl mb-2 block"></i>
              <p className="font-semibold text-stone-800">Children's ministry?</p>
              <p className="text-stone-500 text-sm">Yes! Available during all Sunday services for ages 0-12</p>
            </div>
            <div className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <i className="fas fa-language text-amber-600 text-2xl mb-2 block"></i>
              <p className="font-semibold text-stone-800">Translation services?</p>
              <p className="text-stone-500 text-sm">Spanish translation available at 11AM Sunday service</p>
            </div>
            <div className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <i className="fas fa-video text-amber-600 text-2xl mb-2 block"></i>
              <p className="font-semibold text-stone-800">Online options?</p>
              <p className="text-stone-500 text-sm">Livestream available for all Sunday services</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default ServiceTimes;