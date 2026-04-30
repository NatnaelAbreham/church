// components/LiveStream.jsx
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVolumeMute,
  faVolumeUp,
  faChevronDown,
  faChevronUp,
  faComments,
  faVideo,
  faEye,
  faCalendarAlt,
  faClock,
  faChurch,
  faBell,
  faCommentDots,
  faPaperPlane,
  faShieldAlt,
  faHandsPraying,
  faUserFriends,
  faUser,
  faExpand,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faYoutube,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const LiveStream = () => {
  const [isLive, setIsLive] = useState(true);
  const [viewerCount, setViewerCount] = useState(247);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState("");
  const [showChat, setShowChat] = useState(true);
  const [upcomingEvents, setUpcomingEvents] = useState([
    { time: "9:00 AM", title: "Sunday Morning Worship", date: "Today", type: "live" },
    { time: "11:00 AM", title: "Contemporary Service", date: "Today", type: "live" },
    { time: "7:00 PM", title: "Prayer & Bible Study", date: "Wednesday", type: "upcoming" },
    { time: "6:00 PM", title: "Saturday Evening Service", date: "Saturday", type: "upcoming" }
  ]);
  const [notifications, setNotifications] = useState([]);
  const [isNotificationEnabled, setIsNotificationEnabled] = useState(false);
  const videoRef = useRef(null);
  const chatContainerRef = useRef(null);

  // Simulate live viewer count changes
  useEffect(() => {
    const interval = setInterval(() => {
      if (isLive) {
        const change = Math.floor(Math.random() * 10) - 3;
        setViewerCount(prev => Math.max(1, prev + change));
      }
    }, 10000);
    return () => clearInterval(interval);
  }, [isLive]);

  // Auto-scroll chat to bottom
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatMessages]);

  // Simulate incoming chat messages
  useEffect(() => {
    if (!isLive) return;
    
    const demoMessages = [
      { name: "Sarah J.", message: "🙏 So blessed to be here!", time: new Date(), isUser: false },
      { name: "Michael T.", message: "Amazing worship today!", time: new Date(), isUser: false },
      { name: "Lisa C.", message: "Praying for everyone joining from home", time: new Date(), isUser: false },
      { name: "Pastor David", message: "God is moving! Share your prayer requests", time: new Date(), isUser: false },
      { name: "Emily R.", message: "❤️ This song is touching my heart", time: new Date(), isUser: false }
    ];
    
    let index = 0;
    const interval = setInterval(() => {
      if (index < demoMessages.length && isLive) {
        setChatMessages(prev => [...prev, { ...demoMessages[index], id: Date.now() + index }]);
        index++;
      }
    }, 15000);
    
    return () => clearInterval(interval);
  }, [isLive]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (chatInput.trim()) {
      const newMessage = {
        id: Date.now(),
        name: "You",
        message: chatInput.trim(),
        time: new Date(),
        isUser: true
      };
      setChatMessages(prev => [...prev, newMessage]);
      setChatInput("");
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    const elem = videoRef.current?.parentElement?.parentElement;
    if (!isFullscreen) {
      if (elem?.requestFullscreen) {
        elem.requestFullscreen();
        setIsFullscreen(true);
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  const requestNotificationPermission = async () => {
    if ("Notification" in window) {
      const permission = await Notification.requestPermission();
      if (permission === "granted") {
        setIsNotificationEnabled(true);
        showNotification("Live Stream", "You'll be notified when we go live!");
      }
    }
  };

  const showNotification = (title, body) => {
    if (isNotificationEnabled && "Notification" in window && Notification.permission === "granted") {
      new Notification(title, { body, icon: "/church-icon.png" });
    }
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <section id="live-stream" className="py-28 px-6 theme-section relative overflow-hidden">
      {/* Modern 2026 decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-red-500/5 to-transparent rounded-full blur-3xl"></div>
        </div>
        {/* Live indicator dots pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.02)_1px,_transparent_1px)] bg-[length:20px_20px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-red-500/20 backdrop-blur-sm px-5 py-2 rounded-full mb-5 theme-border border-red-500/30">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-red-400 font-semibold tracking-wide uppercase text-xs">Live Now</span>
            <FontAwesomeIcon icon={faVideo} className="text-red-400 text-sm" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold serif theme-heading mb-4">
            Watch <span className="text-red-500">Live</span> Stream
          </h2>
          <div className="w-28 h-1 bg-gradient-to-r from-red-500 to-amber-500 mx-auto rounded-full mb-6"></div>
          <p className="theme-text max-w-2xl mx-auto text-lg">
            Join us online for worship, teaching, and prayer from anywhere in the world
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Video Area */}
          <div className="lg:col-span-2 space-y-4">
            {/* Video Player */}
            <div className="theme-soft-card rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative bg-black">
                <video
                  ref={videoRef}
                  className="w-full aspect-video object-cover"
                  poster="https://images.pexels.com/photos/2606355/pexels-photo-2606355.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  controls={false}
                  autoPlay
                  muted={isMuted}
                  loop
                >
                  <source src="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4" type="video/mp4" />
                </video>
                
                {/* Live Badge & Viewer Count */}
                <div className="absolute top-4 left-4 flex items-center gap-3">
                  <div className="flex items-center gap-2 bg-red-500 px-3 py-1.5 rounded-full">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span className="text-white text-xs font-bold uppercase">LIVE</span>
                  </div>
                  <div className="flex items-center gap-2 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    <FontAwesomeIcon icon={faEye} className="text-white text-xs" />
                    <span className="text-white text-xs font-medium">{viewerCount} watching</span>
                  </div>
                </div>
                
                {/* Video Controls Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <button onClick={toggleMute} className="text-white hover:text-red-400 transition">
                        <FontAwesomeIcon
                          icon={isMuted ? faVolumeMute : faVolumeUp}
                          className={`text-lg transition-all duration-300 ${isMuted ? "text-red-400" : "text-amber-400"}`}
                        />
                      </button>
                      <button onClick={toggleFullscreen} className="text-white hover:text-red-400 transition">
                        <FontAwesomeIcon icon={faExpand} className="text-lg" />
                      </button>
                    </div>
                    <div className="text-white text-xs">
                      <span>Now Streaming: Sunday Worship</span>
                    </div>
                  </div>
                  <div className="w-full bg-stone-600 h-1 rounded-full mt-2">
                    <div className="w-2/3 bg-red-500 h-1 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stream Info */}
            <div className="theme-soft-card rounded-xl p-5">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="theme-heading font-bold text-xl mb-1">Sunday Morning Worship</h3>
                  <div className="flex items-center gap-4 theme-muted text-sm">
                    <span><FontAwesomeIcon icon={faCalendarAlt} className="mr-1" /> March 29, 2026</span>
                    <span><FontAwesomeIcon icon={faClock} className="mr-1" /> 9:00 AM - 10:15 AM</span>
                    <span><FontAwesomeIcon icon={faChurch} className="mr-1" /> Main Sanctuary</span>
                  </div>
                </div>
                <button 
                  onClick={requestNotificationPermission}
                  className="flex items-center gap-2 px-4 py-2 bg-amber-500/20 hover:bg-amber-500/30 rounded-full transition-all theme-border border-amber-500/30"
                >
                  <FontAwesomeIcon icon={faBell} className="theme-accent" />
                  <span className="theme-accent text-sm">Get Notified</span>
                </button>
              </div>
            </div>

            {/* Upcoming Streams */}
            <div className="theme-soft-card rounded-xl p-5">
              <h4 className="theme-heading font-semibold mb-3 flex items-center gap-2">
                <FontAwesomeIcon icon={faCalendarAlt} className="theme-accent" />
                Upcoming Live Streams
              </h4>
              <div className="space-y-3">
                {upcomingEvents.map((event, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 theme-card rounded-lg hover:opacity-80 transition-all group">
                    <div className="flex items-center gap-4">
                      <div className="text-center min-w-[60px]">
                        <div className="theme-accent font-bold text-sm">{event.time.split(' ')[0]}</div>
                        <div className="theme-muted text-xs">{event.time.split(' ')[1]}</div>
                      </div>
                      <div>
                        <div className="theme-heading font-medium text-sm">{event.title}</div>
                        <div className="theme-muted text-xs">{event.date}</div>
                      </div>
                    </div>
                    <button className="theme-accent text-sm opacity-0 group-hover:opacity-100 transition-all">
                      Remind Me <FontAwesomeIcon icon={faBell} className="ml-1" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Chat Sidebar */}
          <div className="theme-soft-card rounded-2xl flex flex-col h-[600px]">
            {/* Chat Header */}
            <div className="p-4 theme-border border-b flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faComments} className="theme-accent" />
                <h3 className="theme-heading font-semibold">Live Chat</h3>
                <span className="theme-muted text-xs theme-soft-card px-2 py-0.5 rounded-full">
                  {chatMessages.length}
                </span>
              </div>
              <button 
                onClick={() => setShowChat(!showChat)}
                className="theme-muted hover:theme-text transition lg:hidden"
              >
                <FontAwesomeIcon icon={showChat ? faChevronDown : faChevronUp} />
              </button>
            </div>

            {/* Chat Messages */}
            <div 
              ref={chatContainerRef}
              className={`flex-1 overflow-y-auto p-4 space-y-3 transition-all duration-300 ${showChat ? 'block' : 'hidden lg:block'}`}
            >
              {chatMessages.length === 0 ? (
                <div className="text-center theme-muted text-sm py-8">
                  <FontAwesomeIcon icon={faCommentDots} className="text-3xl mb-2 opacity-30" />
                  <p>No messages yet. Be the first to say hello!</p>
                </div>
              ) : (
                chatMessages.map((msg) => (
                  <div key={msg.id} className={`flex items-start gap-3 ${msg.isUser ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.isUser ? 'theme-button' : 'theme-soft-card'}`}>
                      <FontAwesomeIcon icon={msg.isUser ? faUser : faUserFriends} className="text-xs text-white transition hover:scale-110" />
                    </div>
                    <div className={`flex-1 ${msg.isUser ? 'text-right' : ''}`}>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="theme-heading text-xs font-medium">{msg.name}</span>
                        <span className="theme-muted text-[10px]">{formatTime(msg.time)}</span>
                      </div>
                      <p className={`text-sm rounded-lg p-2 inline-block max-w-[85%] ${msg.isUser ? 'bg-amber-500/20 theme-accent' : 'theme-soft-card theme-text'}`}>
                        {msg.message}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Chat Input */}
            <form onSubmit={sendMessage} className="p-4 theme-border border-t">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Type your message..."
                  className="theme-input flex-1 px-4 py-2 text-sm"
                />
                <button 
                  type="submit"
                  disabled={!chatInput.trim()}
                  className="px-4 py-2 theme-button rounded-xl font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <FontAwesomeIcon icon={faPaperPlane} />
                </button>
              </div>
              <p className="theme-muted text-xs mt-2 text-center">
                <FontAwesomeIcon icon={faShieldAlt} className="mr-1" />
                All messages are moderated
              </p>
            </form>
          </div>
        </div>

        {/* Bottom CTA - Prayer Request */}
        <div className="mt-12 theme-glow rounded-2xl p-6 theme-border text-center">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={faHandsPraying} className="theme-accent text-xl" />
              </div>
              <div className="text-left">
                <h4 className="theme-heading font-semibold">Need Prayer?</h4>
                <p className="theme-text text-sm">Our prayer team is online and ready to pray with you</p>
              </div>
            </div>
            <button 
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="px-6 py-2 theme-button rounded-full font-medium transition-all"
            >
              Submit Prayer Request
            </button>
          </div>
        </div>

        {/* Social Share */}
        <div className="text-center mt-8">
          <p className="theme-muted text-sm mb-3">Share this live stream with friends and family</p>
          <div className="flex justify-center gap-3">
            <button className="w-10 h-10 rounded-full theme-soft-card hover:bg-blue-600 transition-all flex items-center justify-center group">
              <FontAwesomeIcon icon={faFacebookF} className="theme-muted group-hover:text-white text-sm" />
            </button>
            <button className="w-10 h-10 rounded-full theme-soft-card hover:bg-sky-500 transition-all flex items-center justify-center group">
              <FontAwesomeIcon icon={faTwitter} className="theme-muted group-hover:text-white text-sm" />
            </button>
            <button className="w-10 h-10 rounded-full theme-soft-card hover:bg-green-600 transition-all flex items-center justify-center group">
              <FontAwesomeIcon icon={faWhatsapp} className="theme-muted group-hover:text-white text-sm" />
            </button>
            <button className="w-10 h-10 rounded-full theme-soft-card hover:bg-red-600 transition-all flex items-center justify-center group">
              <FontAwesomeIcon icon={faYoutube} className="theme-muted group-hover:text-white text-sm" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveStream;