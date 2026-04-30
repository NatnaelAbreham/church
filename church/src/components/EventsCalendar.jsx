// components/EventsCalendar.jsx
import { useState, useEffect, useCallback, useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faCalendarAlt,
  faMusic,
  faUsers,
  faChild,
  faGlobe,
  faBook,
  faStar,
  faHandsPraying,
  faClock,
  faChevronLeft,
  faChevronRight,
  faCalendarDay,
  faList,
  faCalendarTimes,
  faBell,
  faCalendarPlus,
  faMapMarkerAlt,
  faSyncAlt,
  faTimes,
  faUserCircle,
  faTag,
} from "@fortawesome/free-solid-svg-icons";

const EventsCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [viewMode, setViewMode] = useState("month");
  const [currentMonthEvents, setCurrentMonthEvents] = useState([]);
  const [calendarDays, setCalendarDays] = useState([]);

  const categories = useMemo(() => [
    { id: "all", label: "All Events", icon: faCalendarAlt, color: "amber" },
    { id: "worship", label: "Worship", icon: faMusic, color: "purple" },
    { id: "community", label: "Community", icon: faUsers, color: "blue" },
    { id: "youth", label: "Youth", icon: faChild, color: "green" },
    { id: "outreach", label: "Outreach", icon: faGlobe, color: "teal" },
    { id: "education", label: "Education", icon: faBook, color: "orange" },
    { id: "special", label: "Special Events", icon: faStar, color: "red" },
    { id: "prayer", label: "Prayer", icon: faHandsPraying, color: "indigo" }
  ], []);

  // Stable events array - using useMemo to prevent re-creation
  const events = useMemo(() => [
    {
      id: 1,
      title: "Sunday Morning Worship",
      description: "Join us for our traditional worship service with hymns, choir, and organ music. Nursery and children's church available.",
      category: "worship",
      date: "2026-04-14",
      time: "9:00 AM",
      endTime: "10:15 AM",
      location: "Main Sanctuary",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
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
  ], []);

  // Memoized helper functions to prevent recreation
  const getCategoryColor = useCallback((categoryId) => {
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
  }, []);

  const getCategoryBadgeColor = useCallback((categoryId) => {
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
  }, []);

  const getCategoryIcon = useCallback((categoryId) => {
    const icons = {
      worship: faMusic,
      community: faUsers,
      youth: faChild,
      outreach: faGlobe,
      education: faBook,
      special: faStar,
      prayer: faHandsPraying,
    };
    return icons[categoryId] || faCalendarAlt;
  }, []);

  // Generate calendar days - now stable with useCallback
  const generateCalendarDays = useCallback((date, eventsList) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    
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
      const dateObj = new Date(year, month, i);
      const dateStr = dateObj.toISOString().split('T')[0];
      const dayEvents = eventsList.filter(event => event.date === dateStr);
      
      days.push({
        date: dateObj,
        isCurrentMonth: true,
        events: dayEvents,
        isToday: dateObj.toDateString() === new Date().toDateString()
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
    
    return days;
  }, []);

  // Filter events for current month
  const filterMonthEvents = useCallback((date, eventsList) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return eventsList.filter(event => {
      const eventDate = new Date(event.date);
      return eventDate.getMonth() === month && eventDate.getFullYear() === year;
    });
  }, []);

  // Update calendar when currentDate changes
  useEffect(() => {
    const days = generateCalendarDays(currentDate, events);
    const monthEvents = filterMonthEvents(currentDate, events);
    
    setCalendarDays(days);
    setCurrentMonthEvents(monthEvents);
  }, [currentDate, generateCalendarDays, filterMonthEvents, events]);

  // Memoized event handlers
  const changeMonth = useCallback((increment) => {
    setCurrentDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() + increment, 1));
  }, []);

  const goToToday = useCallback(() => {
    setCurrentDate(new Date());
    setSelectedDate(null);
  }, []);

  const handleDateClick = useCallback((day) => {
    if (day.isCurrentMonth) {
      setSelectedDate(prevSelected => 
        prevSelected?.date.toDateString() === day.date.toDateString() ? null : day
      );
    }
  }, []);

  const formatTimeRange = useCallback((event) => {
    return `${event.time} - ${event.endTime}`;
  }, []);

  // Memoized filtered events
  const filteredEvents = useMemo(() => {
    return selectedCategory === "all" 
      ? currentMonthEvents 
      : currentMonthEvents.filter(event => event.category === selectedCategory);
  }, [selectedCategory, currentMonthEvents]);

  const weekDays = useMemo(() => ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], []);

  // Handle ESC key for modal
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape' && selectedEvent) {
        setSelectedEvent(null);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [selectedEvent]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedEvent) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedEvent]);

  return (
    <section id="events-calendar" className="py-28 px-6 theme-section relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-amber-400/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm px-5 py-2 rounded-full mb-5 theme-border">
            <FontAwesomeIcon icon={faCalendarAlt} className="theme-accent text-sm" />
            <span className="theme-accent font-semibold tracking-wide uppercase text-xs">Stay Connected</span>
            <FontAwesomeIcon icon={faClock} className="theme-accent text-sm" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold theme-heading mb-4">
            <span className="theme-accent">Events Calendar</span>
          </h2>
          <div className="w-28 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full mb-6"></div>
          <p className="theme-text max-w-2xl mx-auto text-lg">
            Stay up to date with all our services, programs, and special events
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300 ${
                selectedCategory === cat.id
                  ? "theme-button shadow-lg scale-105"
                  : "theme-soft-card theme-text hover:opacity-80"
              }`}
            >
              <FontAwesomeIcon icon={cat.icon} className="text-sm" />
              <span className="text-sm font-medium hidden sm:inline">{cat.label}</span>
            </button>
          ))}
        </div>

        {/* View Mode Toggle */}
        <div className="flex justify-end mb-4 gap-2">
          {['month', 'week', 'list'].map((mode) => (
            <button
              key={mode}
              onClick={() => setViewMode(mode)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all capitalize ${
                viewMode === mode
                  ? "theme-button shadow-md"
                  : "theme-soft-card theme-text hover:opacity-80"
              }`}
            >
              {mode}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Calendar Column */}
          <div className="lg:col-span-2">
  <div className="theme-card rounded-2xl shadow-xl overflow-hidden">

    {/* Calendar Header */}
    <div className="theme-button px-6 py-5 flex items-center justify-between">
      <button
        onClick={() => changeMonth(-1)}
        className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all flex items-center justify-center"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>

      <h3 className="text-white font-bold text-2xl">
        {currentDate.toLocaleString("default", {
          month: "long",
          year: "numeric",
        })}
      </h3>

      <button
        onClick={() => changeMonth(1)}
        className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all flex items-center justify-center"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>

    {/* Weekday Headers */}
    <div className="grid grid-cols-7 gap-px bg-stone-200 dark:bg-white/10 theme-border">
      {weekDays.map((day, idx) => (
        <div
          key={idx}
          className="theme-soft-card py-3 text-center"
        >
          <span className="text-sm font-semibold theme-accent uppercase tracking-wide">
            {day}
          </span>
        </div>
      ))}
    </div>

    {/* Calendar Days */}
    <div className="grid grid-cols-7 gap-px bg-stone-200 dark:bg-white/10 theme-border">
      {calendarDays.map((day, idx) => (
        <div
          key={idx}
          onClick={() => handleDateClick(day)}
          className={`
            min-h-[120px]
            theme-card
            p-2
            cursor-pointer
            transition-all
            duration-300
            hover:opacity-90
            hover:shadow-md
            ${!day.isCurrentMonth ? "opacity-50" : ""}
            ${
              selectedDate?.date.toDateString() ===
              day.date.toDateString()
                ? "ring-2 ring-amber-400 ring-inset shadow-lg"
                : ""
            }
          `}
        >
          {/* Date Header */}
          <div className="flex justify-between items-start">

            {/* Day Number */}
            <span
              className={`text-sm font-medium ${
                day.isToday
                  ? "theme-button w-7 h-7 rounded-full flex items-center justify-center shadow-md text-white"
                  : "theme-heading"
              }`}
            >
              {day.date.getDate()}
            </span>

            {/* Event Count */}
            {day.events.length > 0 && (
              <span className="
                text-xs
                bg-amber-100
                text-amber-700
                dark:bg-amber-500/10
                dark:text-amber-300
                font-semibold
                px-1.5
                py-0.5
                rounded-full
              ">
                {day.events.length}
              </span>
            )}
          </div>

          {/* Events */}
          <div className="mt-2 space-y-1">
            {day.events.slice(0, 2).map((event, eventIdx) => (
              <div
                key={eventIdx}
                className={`
                  text-xs
                  px-1.5
                  py-0.5
                  rounded-md
                  truncate
                  shadow-sm
                  ${getCategoryColor(event.category)}
                `}
                title={event.title}
              >
                {event.time.substring(0, 5)}{" "}
                {event.title.substring(0, 12)}...
              </div>
            ))}

            {day.events.length > 2 && (
              <div className="text-xs theme-accent pl-1 font-medium">
                +{day.events.length - 2} more
              </div>
            )}
          </div>
        </div>
      ))}
    </div>

    {/* Today Button */}
    <div className="p-4 border-t theme-border theme-soft-card text-center">
      <button
        onClick={goToToday}
        className="
          px-6
          py-2.5
          theme-button
          rounded-xl
          font-medium
          transition-all
          hover:shadow-lg
          hover:scale-[1.02]
          flex
          items-center
          gap-2
          mx-auto
        "
      >
        <FontAwesomeIcon icon={faCalendarDay} />
        Today
      </button>
    </div>

  </div>
</div>

          {/* Events List Column */}
          <div>
            <div className="theme-card rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-bold theme-heading mb-4 flex items-center gap-2">
                <FontAwesomeIcon icon={faList} className="theme-accent" />
                <span>
                  {selectedDate ? `Events for ${selectedDate.date.toLocaleDateString('default', { month: 'short', day: 'numeric' })}` : "Upcoming Events"}
                </span>
              </h3>
              
              <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
                {filteredEvents.length > 0 ? (
                  filteredEvents.map((event) => (
                    <div
                      key={event.id}
                      onClick={() => setSelectedEvent(event)}
                      className="group p-4 rounded-xl theme-border hover:border-amber-200 hover:shadow-xl transition-all duration-300 cursor-pointer theme-card"
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-12 h-12 rounded-xl ${getCategoryColor(event.category)} bg-opacity-20 flex items-center justify-center flex-shrink-0`}>
                          <FontAwesomeIcon icon={getCategoryIcon(event.category)} className="theme-accent text-lg" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-2">
                            <h4 className="font-semibold theme-heading group-hover:theme-accent transition-colors">{event.title}</h4>
                            {event.featured && (
                              <span className="text-xs theme-button px-2 py-0.5 rounded-full shadow-sm">Featured</span>
                            )}
                          </div>
                          <p className="text-xs theme-muted mt-1">
                            <FontAwesomeIcon icon={faCalendarAlt} className="mr-1 theme-accent" />
                            {new Date(event.date).toLocaleDateString('default', { month: 'short', day: 'numeric' })} • {formatTimeRange(event)}
                          </p>
                          <p className="text-xs theme-muted">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-1 theme-accent" />
                            {event.location}
                          </p>
                          <div className="mt-2 flex flex-wrap gap-1">
                            <span className={`text-xs px-2 py-0.5 rounded-full border ${getCategoryBadgeColor(event.category)}`}>
                              {categories.find(c => c.id === event.category)?.label}
                            </span>
                            {event.recurring !== "once" && (
                              <span className="text-xs theme-soft-card theme-muted px-2 py-0.5 rounded-full">
                                <FontAwesomeIcon icon={faSyncAlt} className="mr-1 theme-accent" />
                                {event.recurring}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-16">
                    <FontAwesomeIcon icon={faCalendarTimes} className="text-5xl theme-muted mb-4" />
                    <p className="theme-muted font-medium">No events found for this period</p>
                    <p className="theme-muted text-sm mt-1">Try selecting a different date or category</p>
                  </div>
                )}
              </div>
            </div>

            {/* Subscribe Card */}
            <div className="mt-6 theme-soft-card rounded-xl p-5 text-center theme-border">
              <div className="flex items-center justify-center gap-2 mb-2">
                <FontAwesomeIcon icon={faBell} className="theme-accent" />
                <p className="theme-heading font-semibold">Never miss an event!</p>
              </div>
              <button className="theme-button text-white font-medium text-sm px-6 py-2.5 rounded-xl flex items-center justify-center gap-2 mx-auto hover:shadow-lg transition-all">
                <FontAwesomeIcon icon={faCalendarPlus} />
                Subscribe to Calendar
              </button>
              <p className="theme-muted text-xs mt-3">Get updates directly to your device</p>
            </div>
          </div>
        </div>

        {/* Event Details Modal */}
        {selectedEvent && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-lg"
            onClick={() => setSelectedEvent(null)}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl max-h-[92vh] overflow-hidden rounded-3xl theme-card shadow-2xl animate-[fadeIn_0.25s_ease-out]"
            >
              {/* Scroll container */}
              <div className="max-h-[92vh] overflow-y-auto">
                {/* Close button */}
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="absolute top-5 right-5 z-20 w-11 h-11 rounded-full theme-card shadow-lg hover:theme-button hover:text-white transition-all flex items-center justify-center"
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button>

                {/* Hero Image */}
                {selectedEvent.image && (
                  <div className="relative h-72">
                    <img
                      src={selectedEvent.image}
                      alt={selectedEvent.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    <div className="absolute bottom-5 left-6 text-white">
                      <p className="text-xs uppercase tracking-widest text-amber-300">
                        {categories.find(c => c.id === selectedEvent.category)?.label}
                      </p>
                      <h2 className="text-2xl md:text-3xl font-bold">
                        {selectedEvent.title}
                      </h2>
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="p-7 md:p-10 space-y-6">
                  {/* Badges */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryBadgeColor(selectedEvent.category)}`}>
                      {categories.find(c => c.id === selectedEvent.category)?.label}
                    </span>
                    {selectedEvent.featured && (
                      <span className="theme-button text-white text-xs px-3 py-1 rounded-full shadow-sm">
                        Featured Event
                      </span>
                    )}
                  </div>

                  {/* Event Info Grid */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 theme-text">
                      <FontAwesomeIcon icon={faCalendarAlt} className="theme-accent" />
                      <span>
                        {new Date(selectedEvent.date).toLocaleDateString("default", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 theme-text">
                      <FontAwesomeIcon icon={faClock} className="theme-accent" />
                      <span>{formatTimeRange(selectedEvent)}</span>
                    </div>
                    <div className="flex items-center gap-3 theme-text">
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="theme-accent" />
                      <span>{selectedEvent.location}</span>
                    </div>
                    {selectedEvent.cost && (
                      <div className="flex items-center gap-3 theme-text">
                        <FontAwesomeIcon icon={faTag} className="theme-accent" />
                        <span className="font-semibold theme-accent">
                          {selectedEvent.cost}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <div className="theme-soft-card rounded-2xl p-6 theme-border">
                    <p className="theme-text leading-relaxed">
                      {selectedEvent.description}
                    </p>
                  </div>

                  {/* Contact Card */}
                  <div className="theme-soft-card rounded-2xl p-5 space-y-2">
                    <div className="flex items-center gap-2 theme-text">
                      <FontAwesomeIcon icon={faUserCircle} className="theme-accent" />
                      <strong>Coordinator:</strong>
                      <span>{selectedEvent.coordinator}</span>
                    </div>
                    <div className="flex items-center gap-2 theme-text">
                      <FontAwesomeIcon icon={faEnvelope} className="theme-accent" />
                      <strong>Contact:</strong>
                      <a
                        href={`mailto:${selectedEvent.contact}`}
                        className="theme-accent hover:underline"
                      >
                        {selectedEvent.contact}
                      </a>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 pt-2">
                    {selectedEvent.registrationRequired && (
                      <button className="flex-1 py-3 theme-button rounded-xl font-semibold hover:shadow-xl transition-all">
                        Register Now
                      </button>
                    )}
                    <button className="flex-1 py-3 theme-border theme-accent rounded-xl font-semibold hover:theme-soft-card transition-all flex items-center justify-center gap-2">
                      <FontAwesomeIcon icon={faCalendarPlus} />
                      Add to Calendar
                    </button>
                  </div>
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