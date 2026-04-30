// components/Events.jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faArrowRight,
  faLocationDot,
  faClock,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const Events = () => {
  const eventsList = [
    {
      img: "https://images.pexels.com/photos/8474833/pexels-photo-8474833.jpeg?auto=compress&cs=tinysrgb&w=1200",
      date: "April 20, 2026",
      time: "6:30 AM",
      location: "Church Pavilion",
      title: "Easter Sunrise Service",
      desc: "Celebrate resurrection morning with worship, prayer, and breakfast fellowship together.",
      featured: true,
    },
    {
      img: "https://images.pexels.com/photos/8535571/pexels-photo-8535571.jpeg?auto=compress&cs=tinysrgb&w=1200",
      date: "May 5–7, 2026",
      time: "3 Days Event",
      location: "Mountain Springs",
      title: "Women's Retreat",
      desc: "Renew, refresh, and reconnect through worship, teaching, and meaningful fellowship.",
    },
    {
      img: "https://images.pexels.com/photos/5697240/pexels-photo-5697240.jpeg?auto=compress&cs=tinysrgb&w=1200",
      date: "Every Sunday",
      time: "9:00 AM & 11:00 AM",
      location: "Main Sanctuary",
      title: "Worship Gatherings",
      desc: "Experience inspiring worship, biblical teaching, and a welcoming church family.",
    },
  ];

  const handleViewCalendar = () => {
    const section = document.getElementById("events-calendar");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      id="events"
      className="relative py-28 px-6 overflow-hidden theme-section"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl"></div>

        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-orange-400/10 rounded-full blur-3xl"></div>

        {/* Grid Overlay */}
       
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-16">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full theme-card backdrop-blur-xl mb-6">
            <FontAwesomeIcon
              icon={faStar}
              className="theme-accent text-sm"
            />

            <span className="uppercase tracking-[0.25em] text-xs font-semibold theme-accent">
              Join Our Community
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-6xl font-bold leading-tight theme-heading">
            Upcoming{" "}
            <span className="theme-gradient-text">
              Events
            </span>
          </h2>

          {/* Divider */}
          <div className="w-28 h-1 bg-gradient-to-r from-amber-400 to-yellow-300 mx-auto rounded-full mt-6 mb-6"></div>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-lg leading-relaxed theme-text">
            Discover worship experiences, retreats, gatherings, and special
            moments designed to strengthen faith and community.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {eventsList.map((event, index) => (
            <div
              key={index}
              className="
                group
                relative
                rounded-[2rem]
                overflow-hidden
                theme-card
                hover:border-amber-400/40
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-[0_25px_80px_rgba(251,191,36,0.12)]
              "
            >

              {/* Image */}
              <div className="relative h-72 overflow-hidden">

                <img
                  src={event.img}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Featured Badge */}
                {event.featured && (
                  <div className="absolute top-5 left-5">
                    <span className="
                      bg-gradient-to-r
                      from-amber-400
                      to-yellow-300
                      text-black
                      text-xs
                      font-bold
                      px-4
                      py-2
                      rounded-full
                      shadow-xl
                    ">
                      Featured Event
                    </span>
                  </div>
                )}

                {/* Floating Date */}
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="
                    inline-flex
                    items-center
                    gap-2
                    bg-black/50
                    backdrop-blur-md
                    border
                    border-white/10
                    rounded-full
                    px-4
                    py-2
                  ">
                    <FontAwesomeIcon
                      icon={faCalendarAlt}
                      className="text-amber-400"
                    />

                    <span className="text-sm font-medium text-white">
                      {event.date}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-7">

                {/* Meta */}
                <div className="flex flex-wrap gap-3 mb-5">

                  {/* Time */}
                  <div className="
                    flex
                    items-center
                    gap-2
                    text-sm
                    theme-soft-card
                    px-3
                    py-2
                    rounded-full
                  ">
                    <FontAwesomeIcon
                      icon={faClock}
                      className="theme-accent"
                    />

                    <span className="theme-text">
                      {event.time}
                    </span>
                  </div>

                  {/* Location */}
                  <div className="
                    flex
                    items-center
                    gap-2
                    text-sm
                    theme-soft-card
                    px-3
                    py-2
                    rounded-full
                  ">
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="theme-accent"
                    />

                    <span className="theme-text">
                      {event.location}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="
                  text-2xl
                  font-bold
                  mb-4
                  theme-heading
                  group-hover:text-amber-400
                  transition-colors
                  duration-300
                ">
                  {event.title}
                </h3>

                {/* Description */}
                <p className="theme-text leading-relaxed mb-7">
                  {event.desc}
                </p>

                {/* Button */}
                <button className="
                  group/btn
                  inline-flex
                  items-center
                  gap-3
                  theme-accent
                  font-semibold
                  hover:text-amber-500
                  transition-colors
                  duration-300
                ">
                  <span>Explore Event</span>

                  <div className="
                    w-10
                    h-10
                    rounded-full
                    bg-amber-500/10
                    dark:bg-amber-500/20
                    border
                    border-amber-500/20
                    flex
                    items-center
                    justify-center
                    group-hover/btn:bg-amber-500
                    group-hover/btn:text-white
                    transition-all
                    duration-300
                  ">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-sm"
                    />
                  </div>
                </button>
              </div>

              {/* Hover Border */}
              <div className="
                absolute
                inset-0
                opacity-0
                group-hover:opacity-100
                transition-opacity
                duration-500
                pointer-events-none
              ">
                <div className="
                  absolute
                  inset-0
                  rounded-[2rem]
                  border
                  border-amber-400/20
                "></div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">

          <button
            onClick={handleViewCalendar}
            className="
              group
              relative
              inline-flex
              items-center
              gap-3
              overflow-hidden
              rounded-full
              theme-button
              px-8
              py-4
              font-bold
              shadow-2xl
              shadow-amber-500/20
              transition-all
              duration-300
              hover:scale-105
            "
          >
            <span className="relative z-10">
              View Full Calendar
            </span>

            <FontAwesomeIcon
              icon={faArrowRight}
              className="
                relative
                z-10
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />

            <div className="
              absolute
              inset-0
              bg-white/20
              opacity-0
              group-hover:opacity-100
              transition-opacity
              duration-300
            "></div>
          </button>

          <p className="theme-muted text-sm mt-4">
            Stay connected with upcoming worship services and community events
          </p>
        </div>

      </div>
    </section>
  );
};

export default Events;