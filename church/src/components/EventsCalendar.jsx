// components/EventsCalendar.jsx
import { useState, useEffect } from "react";

const EventsCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [viewMode, setViewMode] = useState("month"); // month, week, list
  const [currentMonthEvents, setCurrentMonthEvents] = useState([]);
  const [calendarDays, setCalendarDays] = useState([]);

  const categories = [
    { id: "all", label: "All Events", icon: "fa-calendar-alt", color: "amber" },
    { id: "worship", label: "Worship", icon: "fa-music", color: "purple" },
    { id: "community", label: "Community", icon: "fa-users", color: "blue" },
    { id: "youth", label: "Youth", icon: "fa-child", color: "green" },
    { id: "outreach", label: "Outreach", icon: "fa-globe", color: "teal" },
    { id: "education", label: "Education", icon: "fa-book", color: "orange" },
    { id: "special", label: "Special Events", icon: "fa-star", color: "red" },
    { id: "prayer", label: "Prayer", icon: "fa-praying-hands", color: "indigo" }
  ];

  const events = [
    {
      id: 1,
      title: "Sunday Morning Worship",
      description: "Join us for our traditional worship service with hymns, choir, and organ music. Nursery and children's church available.",
      category: "worship",
      date: "2026-04-14",
      time: "9:00 AM",
      endTime: "10:15 AM",
      location: "Main Sanctuary",
      image: "https://images.pexels.com/photos/2606355/pexels-photo-2606355.jpeg?auto=compress&cs=tinysrgb&w=400",
      recurring: "weekly",
      coordinator: "Pastor Michael",
      contact: "michael@gracecovenant.org",
      registrationRequired: false
    },
    {
      id: 2,
      title: "Contemporary Worship",
      description: "Modern worship experience with full band, multimedia, and relevant teaching. Coffee and fellowship before service.",
      category: "worship",
      date: "2026-04-14",
      time: "11:00 AM",
      endTime: "12:15 PM",
      location: "Main Sanctuary",
      image: "https://images.pexels.com/photos/1383622/pexels-photo-1383622.jpeg?auto=compress&cs=tinysrgb&w=400",
      recurring: "weekly",
      coordinator: "Worship Team",
      contact: "worship@gracecovenant.org",
      registrationRequired: false
    },
    {
      id: 3,
      title: "Women's Bible Study",
      description: "Weekly Bible study for women of all ages. Currently studying the book of Romans. Coffee and light refreshments provided.",
      category: "education",
      date: "2026-04-15",
      time: "10:00 AM",
      endTime: "11:30 AM",
      location: "Room 101",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
      recurring: "weekly",
      coordinator: "Sarah Johnson",
      contact: "womensministry@gracecovenant.org",
      registrationRequired: false
    },
    {
      id: 4,
      title: "Youth Group Night",
      description: "High-energy evening for students grades 6-12 featuring games, worship, and small group discussions.",
      category: "youth",
      date: "2026-04-16",
      time: "7:00 PM",
      endTime: "9:00 PM",
      location: "Youth Center",
      image: "https://images.pexels.com/photos/1263349/pexels-photo-1263349.jpeg?auto=compress&cs=tinysrgb&w=400",
      recurring: "weekly",
      coordinator: "Sarah Martinez",
      contact: "youth@gracecovenant.org",
      registrationRequired: false
    },
    {
      id: 5,
      title: "Prayer & Worship Night",
      description: "Special evening of extended worship and prayer for our church and community. All are welcome.",
      category: "prayer",
      date: "2026-04-17",
      time: "7:00 PM",
      endTime: "9:00 PM",
      location: "Fellowship Hall",
      image: "https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=400",
      recurring: "monthly",
      coordinator: "Prayer Ministry",
      contact: "prayer@gracecovenant.org",
      registrationRequired: false
    },
    {
      id: 6,
      title: "Easter Sunrise Service",
      description: "Celebrate the resurrection of Jesus at our outdoor sunrise service followed by breakfast fellowship.",
      category: "special",
      date: "2026-04-20",
      time: "6:30 AM",
      endTime: "7:30 AM",
      location: "Church Pavilion",
      image: "https://images.pexels.com/photos/8474833/pexels-photo-8474833.jpeg?auto=compress&cs=tinysrgb&w=400",
      recurring: "once",
      coordinator: "Pastoral Team",
      contact: "office@gracecovenant.org",
      registrationRequired: false,
      featured: true
    },
    {
      id: 7,
      title: "Community Food Pantry",
      description: "Volunteers needed to help distribute food to families in need. Come serve our community!",
      category: "outreach",
      date: "2026-04-22",
      time: "9:00 AM",
      endTime: "12:00 PM",
      location: "Food Pantry",
      image: "https://images.pexels.com/photos/6646861/pexels-photo-6646861.jpeg?auto=compress&cs=tinysrgb&w=400",
      recurring: "weekly",
      coordinator: "James Wilson",
      contact: "outreach@gracecovenant.org",
      registrationRequired: true
    },
    {
      id: 8,
      title: "Marriage Enrichment Workshop",
      description: "One-day workshop for couples to strengthen their relationship. Topics include communication, conflict resolution, and spiritual intimacy.",
      category: "education",
      date: "2026-04-26",
      time: "9:00 AM",
      endTime: "4:00 PM",
      location: "Conference Center",
      image: "https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=400",
      recurring: "once",
      coordinator: "Dr. Thompson",
      contact: "marriage@gracecovenant.org",
      registrationRequired: true,
      cost: "$25 per couple"
    },
    {
      id: 9,
      title: "Men's Breakfast",
      description: "Monthly gathering for men featuring breakfast, fellowship, and a guest speaker.",
      category: "community",
      date: "2026-04-27",
      time: "8:00 AM",
      endTime: "9:30 AM",
      location: "Fellowship Hall",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400",
      recurring: "monthly",
      coordinator: "Robert Chen",
      contact: "mensministry@gracecovenant.org",
      registrationRequired: false,
      cost: "$5"
    },
    {
      id: 10,
      title: "Worship Team Auditions",
      description: "Calling musicians and vocalists! Audition for our worship team. Prepare one contemporary song and one hymn.",
      category: "worship",
      date: "2026-04-28",
      time: "6:00 PM",
      endTime: "9:00 PM",
      location: "Worship Center",
      image: "https://images.pexels.com/photos/3768138/pexels-photo-3768138.jpeg?auto=compress&cs=tinysrgb&w=400",
      recurring: "once",
      coordinator: "David O'Connor",
      contact: "worship@gracecovenant.org",
      registrationRequired: true
    },
    {
      id: 11,
      title: "Missions Trip Info Meeting",
      description: "Learn about our summer missions trip to Guatemala. Meet the team and get details about dates, cost, and requirements.",
      category: "outreach",
      date: "2026-04-30",
      time: "7:00 PM",
      endTime: "8:30 PM",
      location: "Room 203",
      image: "https://images.pexels.com/photos/7105761/pexels-photo-7105761.jpeg?auto=compress&cs=tinysrgb&w=400",
      recurring: "once",
      coordinator: "Missions Team",
      contact: "missions@gracecovenant.org",
      registrationRequired: true
    },
    {
      id: 12,
      title: "Children's Choir Rehearsal",
      description: "Weekly rehearsal for children ages 7-12. Learn fun songs for upcoming special services.",
      category: "worship",
      date: "2026-04-13",
      time: "4:00 PM",
      endTime: "5:00 PM",
      location: "Choir Room",
      image: "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=400",
      recurring: "weekly",
      coordinator: "Maria Garcia",
      contact: "children@gracecovenant.org",
      registrationRequired: false
    }
  ];

  // Generate calendar days for current month
  useEffect(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    
    const startingDayOfWeek = firstDayOfMonth.getDay();
    const daysInMonth = lastDayOfMonth.getDate();
    
    const days = [];
    
    // Add previous month's days
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      days.push({
        date: new Date(year, month - 1, prevMonthLastDay - i),
        isCurrentMonth: false,
        events: []
      });
    }
    
    // Add current month's days
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(year, month, i);
      const dateStr = date.toISOString().split('T')[0];
      const dayEvents = events.filter(event => event.date === dateStr);
      
      days.push({
        date: date,
        isCurrentMonth: true,
        events: dayEvents,
        isToday: date.toDateString() === new Date().toDateString()
      });
    }
    
    // Add next month's days to complete 6 rows
    const remainingDays = 42 - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        date: new Date(year, month + 1, i),
        isCurrentMonth: false,
        events: []
      });
    }
    
    setCalendarDays(days);
    
    // Filter events for current month
    const monthEvents = events.filter(event => {
      const eventDate = new Date(event.date);
      return eventDate.getMonth() === month && eventDate.getFullYear() === year;
    });
    setCurrentMonthEvents(monthEvents);
  }, [currentDate, events]);

  const changeMonth = (increment) => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + increment, 1));
  };

  const goToToday = () => {
    setCurrentDate(new Date());
    setSelectedDate(null);
  };

  const handleDateClick = (day) => {
    if (day.isCurrentMonth) {
      setSelectedDate(selectedDate?.date.toDateString() === day.date.toDateString() ? null : day);
    }
  };

  const getCategoryColor = (categoryId) => {
    const colors = {
      worship: "bg-purple-500",
      community: "bg-blue-500",
      youth: "bg-green-500",
      outreach: "bg-teal-500",
      education: "bg-orange-500",
      special: "bg-red-500",
      prayer: "bg-indigo-500"
    };
    return colors[categoryId] || "bg-amber-500";
  };

  const getCategoryBadgeColor = (categoryId) => {
    const colors = {
      worship: "border-purple-500 text-purple-700 bg-purple-50",
      community: "border-blue-500 text-blue-700 bg-blue-50",
      youth: "border-green-500 text-green-700 bg-green-50",
      outreach: "border-teal-500 text-teal-700 bg-teal-50",
      education: "border-orange-500 text-orange-700 bg-orange-50",
      special: "border-red-500 text-red-700 bg-red-50",
      prayer: "border-indigo-500 text-indigo-700 bg-indigo-50"
    };
    return colors[categoryId] || "border-amber-500 text-amber-700 bg-amber-50";
  };

  const getCategoryIcon = (categoryId) => {
    const icons = {
      worship: "fa-music",
      community: "fa-users",
      youth: "fa-child",
      outreach: "fa-globe",
      education: "fa-book",
      special: "fa-star",
      prayer: "fa-praying-hands"
    };
    return icons[categoryId] || "fa-calendar-alt";
  };

  const filteredEvents = selectedCategory === "all" 
    ? currentMonthEvents 
    : currentMonthEvents.filter(event => event.category === selectedCategory);

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const formatTimeRange = (event) => {
    return `${event.time} - ${event.endTime}`;
  };

  return (
    <section id="events-calendar" className="py-28 px-6 bg-gradient-to-br from-stone-50 via-white to-amber-50/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-amber-300/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-100/80 backdrop-blur-sm px-5 py-2 rounded-full mb-5 shadow-sm">
            <i className="fas fa-calendar-alt text-amber-600 text-sm"></i>
            <span className="text-amber-700 font-semibold tracking-wide uppercase text-xs">Stay Connected</span>
            <i className="fas fa-clock text-amber-600 text-sm"></i>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold serif text-stone-800 mb-4">
            Events <span className="text-amber-600">Calendar</span>
          </h2>
          <div className="w-28 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full mb-6"></div>
          <p className="text-stone-600 max-w-2xl mx-auto text-lg">
            Stay up to date with all our services, programs, and special events
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === cat.id
                  ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg"
                  : "bg-white text-stone-600 hover:bg-amber-50 border border-stone-200"
              }`}
            >
              <i className={`fas ${cat.icon} text-sm`}></i>
              <span className="text-sm font-medium hidden sm:inline">{cat.label}</span>
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Calendar Column */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Calendar Header */}
              <div className="bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-4 flex items-center justify-between">
                <button
                  onClick={() => changeMonth(-1)}
                  className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all flex items-center justify-center"
                >
                  <i className="fas fa-chevron-left"></i>
                </button>
                <h3 className="text-white font-bold text-xl">
                  {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
                </h3>
                <button
                  onClick={() => changeMonth(1)}
                  className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all flex items-center justify-center"
                >
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>

              {/* Weekday Headers */}
              <div className="grid grid-cols-7 gap-px bg-stone-200">
                {weekDays.map((day, idx) => (
                  <div key={idx} className="bg-stone-50 py-3 text-center">
                    <span className="text-sm font-semibold text-stone-600">{day}</span>
                  </div>
                ))}
              </div>

              {/* Calendar Days */}
              <div className="grid grid-cols-7 gap-px bg-stone-200">
                {calendarDays.map((day, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleDateClick(day)}
                    className={`min-h-[100px] bg-white p-2 cursor-pointer transition-all hover:bg-amber-50 ${
                      !day.isCurrentMonth ? "bg-stone-50/50" : ""
                    } ${selectedDate?.date.toDateString() === day.date.toDateString() ? "ring-2 ring-amber-400 ring-inset" : ""}`}
                  >
                    <div className="flex justify-between items-start">
                      <span className={`text-sm font-medium ${
                        day.isToday ? "bg-amber-500 text-white w-6 h-6 rounded-full flex items-center justify-center" : "text-stone-600"
                      }`}>
                        {day.date.getDate()}
                      </span>
                      {day.events.length > 0 && (
                        <span className="text-xs text-amber-500 font-semibold">{day.events.length}</span>
                      )}
                    </div>
                    <div className="mt-1 space-y-1">
                      {day.events.slice(0, 2).map((event, eventIdx) => (
                        <div
                          key={eventIdx}
                          className={`text-xs px-1 py-0.5 rounded ${getCategoryColor(event.category)} text-white truncate`}
                          title={event.title}
                        >
                          {event.time} {event.title.substring(0, 15)}...
                        </div>
                      ))}
                      {day.events.length > 2 && (
                        <div className="text-xs text-stone-400 pl-1">+{day.events.length - 2} more</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Today Button */}
              <div className="p-4 border-t border-stone-100 text-center">
                <button
                  onClick={goToToday}
                  className="px-4 py-2 text-amber-600 hover:text-amber-700 font-medium transition-colors"
                >
                  <i className="fas fa-calendar-day mr-2"></i>
                  Today
                </button>
              </div>
            </div>
          </div>

          {/* Events List Column */}
          <div>
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-bold text-stone-800 mb-4 flex items-center gap-2">
                <i className="fas fa-list text-amber-500"></i>
                {selectedDate ? `Events for ${selectedDate.date.toLocaleDateString('default', { month: 'short', day: 'numeric' })}` : "Upcoming Events"}
              </h3>
              
              <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
                {filteredEvents.length > 0 ? (
                  filteredEvents.map((event) => (
                    <div
                      key={event.id}
                      onClick={() => setSelectedEvent(event)}
                      className="p-4 rounded-xl border border-stone-100 hover:border-amber-200 hover:shadow-md transition-all cursor-pointer"
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-12 h-12 rounded-xl ${getCategoryColor(event.category)} bg-opacity-20 flex items-center justify-center flex-shrink-0`}>
                          <i className={`fas ${getCategoryIcon(event.category)} text-${getCategoryColor(event.category).replace('bg-', '')} text-lg`}></i>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-2">
                            <h4 className="font-semibold text-stone-800">{event.title}</h4>
                            {event.featured && (
                              <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full">Featured</span>
                            )}
                          </div>
                          <p className="text-xs text-stone-500 mt-1">
                            <i className="far fa-calendar-alt mr-1"></i>
                            {new Date(event.date).toLocaleDateString('default', { month: 'short', day: 'numeric' })} • {formatTimeRange(event)}
                          </p>
                          <p className="text-xs text-stone-500">
                            <i className="fas fa-map-marker-alt mr-1"></i>
                            {event.location}
                          </p>
                          <div className="mt-2 flex flex-wrap gap-1">
                            <span className={`text-xs px-2 py-0.5 rounded-full border ${getCategoryBadgeColor(event.category)}`}>
                              {categories.find(c => c.id === event.category)?.label}
                            </span>
                            {event.recurring !== "once" && (
                              <span className="text-xs bg-stone-100 text-stone-600 px-2 py-0.5 rounded-full">
                                <i className="fas fa-sync-alt mr-1"></i>
                                {event.recurring}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-12">
                    <i className="fas fa-calendar-times text-4xl text-stone-300 mb-3"></i>
                    <p className="text-stone-500">No events found for this period</p>
                  </div>
                )}
              </div>
            </div>

            {/* Subscribe Button */}
            <div className="mt-4 bg-amber-50 rounded-xl p-4 text-center">
              <p className="text-stone-600 text-sm mb-2">Never miss an event!</p>
              <button className="text-amber-600 hover:text-amber-700 font-medium text-sm flex items-center justify-center gap-2 mx-auto">
                <i className="fas fa-calendar-plus"></i>
                Subscribe to Calendar
              </button>
            </div>
          </div>
        </div>

        {/* Event Details Modal */}
        {selectedEvent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md" onClick={() => setSelectedEvent(null)}>
            <div className="relative max-w-2xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setSelectedEvent(null)} className="absolute top-6 right-6 w-10 h-10 rounded-full bg-stone-100 hover:bg-amber-500 hover:text-white transition-colors z-10">
                <i className="fas fa-times"></i>
              </button>
              
              {selectedEvent.image && (
                <img src={selectedEvent.image} alt={selectedEvent.title} className="w-full h-56 object-cover" />
              )}
              
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryBadgeColor(selectedEvent.category)}`}>
                    {categories.find(c => c.id === selectedEvent.category)?.label}
                  </span>
                  {selectedEvent.featured && (
                    <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full">Featured Event</span>
                  )}
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mb-4">{selectedEvent.title}</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-stone-600">
                    <i className="far fa-calendar-alt text-amber-500 w-5"></i>
                    <span>{new Date(selectedEvent.date).toLocaleDateString('default', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-3 text-stone-600">
                    <i className="far fa-clock text-amber-500 w-5"></i>
                    <span>{formatTimeRange(selectedEvent)}</span>
                  </div>
                  <div className="flex items-center gap-3 text-stone-600">
                    <i className="fas fa-map-marker-alt text-amber-500 w-5"></i>
                    <span>{selectedEvent.location}</span>
                  </div>
                  {selectedEvent.cost && (
                    <div className="flex items-center gap-3 text-stone-600">
                      <i className="fas fa-tag text-amber-500 w-5"></i>
                      <span>{selectedEvent.cost}</span>
                    </div>
                  )}
                </div>
                
                <p className="text-stone-600 leading-relaxed mb-6">{selectedEvent.description}</p>
                
                <div className="bg-stone-50 rounded-xl p-4 mb-6">
                  <p className="text-sm text-stone-500">
                    <i className="fas fa-user-circle mr-2 text-amber-500"></i>
                    <strong>Coordinator:</strong> {selectedEvent.coordinator}
                  </p>
                  <p className="text-sm text-stone-500 mt-1">
                    <i className="fas fa-envelope mr-2 text-amber-500"></i>
                    <strong>Contact:</strong> {selectedEvent.contact}
                  </p>
                </div>
                
                <div className="flex gap-3">
                  {selectedEvent.registrationRequired && (
                    <button className="flex-1 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all">
                      Register Now
                    </button>
                  )}
                  <button className="flex-1 py-3 border-2 border-amber-500 text-amber-600 rounded-xl font-semibold hover:bg-amber-50 transition-all">
                    <i className="far fa-calendar-plus mr-2"></i>
                    Add to Calendar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default EventsCalendar;