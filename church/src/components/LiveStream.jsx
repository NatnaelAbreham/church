// components/LiveStream.jsx
import { useState, useEffect, useRef } from "react";

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
    <section id="live-stream" className="py-28 px-6 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 relative overflow-hidden">
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
          <div className="inline-flex items-center gap-2 bg-red-500/20 backdrop-blur-sm px-5 py-2 rounded-full mb-5 border border-red-500/30">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-red-400 font-semibold tracking-wide uppercase text-xs">Live Now</span>
            <i className="fas fa-video text-red-400 text-sm"></i>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold serif text-white mb-4">
            Watch <span className="text-red-500">Live</span> Stream
          </h2>
          <div className="w-28 h-1 bg-gradient-to-r from-red-500 to-amber-500 mx-auto rounded-full mb-6"></div>
          <p className="text-stone-300 max-w-2xl mx-auto text-lg">
            Join us online for worship, teaching, and prayer from anywhere in the world
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Video Area */}
          <div className="lg:col-span-2 space-y-4">
            {/* Video Player */}
            <div className="bg-stone-800 rounded-2xl overflow-hidden shadow-2xl border border-stone-700">
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
                    <i className="fas fa-eye text-white text-xs"></i>
                    <span className="text-white text-xs font-medium">{viewerCount} watching</span>
                  </div>
                </div>
                
                {/* Video Controls Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <button onClick={toggleMute} className="text-white hover:text-red-400 transition">
                        <i className={`fas ${isMuted ? "fa-volume-mute" : "fa-volume-up"} text-lg`}></i>
                      </button>
                      <button onClick={toggleFullscreen} className="text-white hover:text-red-400 transition">
                        <i className="fas fa-expand text-lg"></i>
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
            <div className="bg-stone-800/50 backdrop-blur-sm rounded-xl p-5 border border-stone-700">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-white font-bold text-xl mb-1">Sunday Morning Worship</h3>
                  <div className="flex items-center gap-4 text-stone-400 text-sm">
                    <span><i className="far fa-calendar-alt mr-1"></i> March 29, 2026</span>
                    <span><i className="far fa-clock mr-1"></i> 9:00 AM - 10:15 AM</span>
                    <span><i className="fas fa-church mr-1"></i> Main Sanctuary</span>
                  </div>
                </div>
                <button 
                  onClick={requestNotificationPermission}
                  className="flex items-center gap-2 px-4 py-2 bg-amber-500/20 hover:bg-amber-500/30 rounded-full transition-all border border-amber-500/30"
                >
                  <i className="fas fa-bell text-amber-400"></i>
                  <span className="text-amber-300 text-sm">Get Notified</span>
                </button>
              </div>
            </div>

            {/* Upcoming Streams */}
            <div className="bg-stone-800/30 backdrop-blur-sm rounded-xl p-5 border border-stone-700">
              <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                <i className="fas fa-calendar-alt text-amber-400"></i>
                Upcoming Live Streams
              </h4>
              <div className="space-y-3">
                {upcomingEvents.map((event, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-stone-700/30 rounded-lg hover:bg-stone-700/50 transition-all group">
                    <div className="flex items-center gap-4">
                      <div className="text-center min-w-[60px]">
                        <div className="text-amber-400 font-bold text-sm">{event.time.split(' ')[0]}</div>
                        <div className="text-stone-400 text-xs">{event.time.split(' ')[1]}</div>
                      </div>
                      <div>
                        <div className="text-white font-medium text-sm">{event.title}</div>
                        <div className="text-stone-400 text-xs">{event.date}</div>
                      </div>
                    </div>
                    <button className="text-amber-400 text-sm opacity-0 group-hover:opacity-100 transition-all">
                      Remind Me <i className="fas fa-bell ml-1"></i>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Chat Sidebar */}
          <div className="bg-stone-800/50 backdrop-blur-sm rounded-2xl border border-stone-700 flex flex-col h-[600px]">
            {/* Chat Header */}
            <div className="p-4 border-b border-stone-700 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <i className="fas fa-comments text-amber-400"></i>
                <h3 className="text-white font-semibold">Live Chat</h3>
                <span className="text-stone-400 text-xs bg-stone-700 px-2 py-0.5 rounded-full">
                  {chatMessages.length}
                </span>
              </div>
              <button 
                onClick={() => setShowChat(!showChat)}
                className="text-stone-400 hover:text-white transition lg:hidden"
              >
                <i className={`fas ${showChat ? "fa-chevron-down" : "fa-chevron-up"}`}></i>
              </button>
            </div>

            {/* Chat Messages */}
            <div 
              ref={chatContainerRef}
              className={`flex-1 overflow-y-auto p-4 space-y-3 transition-all duration-300 ${showChat ? 'block' : 'hidden lg:block'}`}
            >
              {chatMessages.length === 0 ? (
                <div className="text-center text-stone-500 text-sm py-8">
                  <i className="fas fa-comment-dots text-3xl mb-2 opacity-30"></i>
                  <p>No messages yet. Be the first to say hello!</p>
                </div>
              ) : (
                chatMessages.map((msg) => (
                  <div key={msg.id} className={`flex items-start gap-3 ${msg.isUser ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.isUser ? 'bg-amber-500' : 'bg-stone-600'}`}>
                      <i className={`fas ${msg.isUser ? 'fa-user' : 'fa-user-friends'} text-xs text-white`}></i>
                    </div>
                    <div className={`flex-1 ${msg.isUser ? 'text-right' : ''}`}>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-white text-xs font-medium">{msg.name}</span>
                        <span className="text-stone-500 text-[10px]">{formatTime(msg.time)}</span>
                      </div>
                      <p className={`text-sm rounded-lg p-2 inline-block max-w-[85%] ${msg.isUser ? 'bg-amber-500/20 text-amber-100' : 'bg-stone-700/50 text-stone-300'}`}>
                        {msg.message}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Chat Input */}
            <form onSubmit={sendMessage} className="p-4 border-t border-stone-700">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 bg-stone-700/50 border border-stone-600 rounded-xl px-4 py-2 text-white placeholder-stone-400 focus:outline-none focus:border-amber-500 transition-all text-sm"
                />
                <button 
                  type="submit"
                  disabled={!chatInput.trim()}
                  className="px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl font-medium hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
              <p className="text-stone-500 text-xs mt-2 text-center">
                <i className="fas fa-shield-alt mr-1"></i>
                All messages are moderated
              </p>
            </form>
          </div>
        </div>

        {/* Bottom CTA - Prayer Request */}
        <div className="mt-12 bg-gradient-to-r from-amber-600/20 to-red-600/20 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/20 text-center">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center">
                <i className="fas fa-praying-hands text-amber-400 text-xl"></i>
              </div>
              <div className="text-left">
                <h4 className="text-white font-semibold">Need Prayer?</h4>
                <p className="text-stone-300 text-sm">Our prayer team is online and ready to pray with you</p>
              </div>
            </div>
            <button 
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="px-6 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-full font-medium transition-all"
            >
              Submit Prayer Request
            </button>
          </div>
        </div>

        {/* Social Share */}
        <div className="text-center mt-8">
          <p className="text-stone-400 text-sm mb-3">Share this live stream with friends and family</p>
          <div className="flex justify-center gap-3">
            <button className="w-10 h-10 rounded-full bg-stone-800 hover:bg-blue-600 transition-all flex items-center justify-center">
              <i className="fab fa-facebook-f text-stone-400 hover:text-white text-sm"></i>
            </button>
            <button className="w-10 h-10 rounded-full bg-stone-800 hover:bg-sky-500 transition-all flex items-center justify-center">
              <i className="fab fa-twitter text-stone-400 hover:text-white text-sm"></i>
            </button>
            <button className="w-10 h-10 rounded-full bg-stone-800 hover:bg-green-600 transition-all flex items-center justify-center">
              <i className="fab fa-whatsapp text-stone-400 hover:text-white text-sm"></i>
            </button>
            <button className="w-10 h-10 rounded-full bg-stone-800 hover:bg-red-600 transition-all flex items-center justify-center">
              <i className="fab fa-youtube text-stone-400 hover:text-white text-sm"></i>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animate-pulse {
          animation: pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default LiveStream;