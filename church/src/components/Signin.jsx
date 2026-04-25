export default function Signin() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative flex items-center justify-center px-6 py-10">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-amber-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-150px] right-[-120px] w-[450px] h-[450px] bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_35%)]"></div>
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-6xl grid lg:grid-cols-2 rounded-[32px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.5)]">
        {/* Left Side */}
        <div className="hidden lg:flex flex-col justify-between p-12 bg-gradient-to-br from-amber-500/20 via-orange-500/10 to-transparent border-r border-white/10 relative overflow-hidden">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-md mb-8">
              <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></div>
              <span className="text-sm tracking-wide text-white/80 uppercase">
                Welcome Back
              </span>
            </div>

            <h1 className="text-5xl font-bold leading-tight mb-6">
              Premium
              <span className="block bg-gradient-to-r from-amber-300 to-orange-500 bg-clip-text text-transparent">
                Sign In Experience
              </span>
            </h1>

            <p className="text-white/70 text-lg leading-relaxed max-w-md">
              Access your dashboard with a modern secure authentication experience designed for elegance and speed.
            </p>
          </div>

          {/* Bottom Cards */}
          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 flex items-center justify-center">
                  <i className="fas fa-shield-alt text-white"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Secure Login</h3>
                  <p className="text-sm text-white/60">
                    Protected with modern authentication.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <h4 className="text-2xl font-bold text-amber-400">24/7</h4>
                <p className="text-sm text-white/60 mt-1">Support Access</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <h4 className="text-2xl font-bold text-amber-400">99.9%</h4>
                <p className="text-sm text-white/60 mt-1">Secure Uptime</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="p-8 md:p-12 bg-black/30 backdrop-blur-xl flex items-center">
          <div className="w-full max-w-md mx-auto">
            <div className="mb-8 text-center lg:text-left">
              <h2 className="text-4xl font-bold mb-3">Sign In</h2>
              <p className="text-white/60">
                Enter your credentials to continue.
              </p>
            </div>

            {/* Social Buttons */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <button className="flex items-center justify-center gap-3 py-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <i className="fab fa-google text-red-400"></i>
                <span>Google</span>
              </button>

              <button className="flex items-center justify-center gap-3 py-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <i className="fab fa-apple text-white"></i>
                <span>Apple</span>
              </button>
            </div>

            {/* Divider */}
            <div className="relative flex items-center mb-8">
              <div className="flex-grow border-t border-white/10"></div>
              <span className="px-4 text-sm text-white/40">OR CONTINUE WITH EMAIL</span>
              <div className="flex-grow border-t border-white/10"></div>
            </div>

            {/* Form */}
            <form className="space-y-5">
              <div>
                <label className="block mb-2 text-sm text-white/70">
                  Email Address
                </label>

                <div className="relative">
                  <i className="fas fa-envelope absolute left-4 top-1/2 -translate-y-1/2 text-white/40"></i>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full h-14 rounded-2xl bg-white/5 border border-white/10 pl-12 pr-4 text-white placeholder:text-white/30 outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm text-white/70">Password</label>
                  <button
                    type="button"
                    className="text-sm text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    Forgot Password?
                  </button>
                </div>

                <div className="relative">
                  <i className="fas fa-lock absolute left-4 top-1/2 -translate-y-1/2 text-white/40"></i>

                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full h-14 rounded-2xl bg-white/5 border border-white/10 pl-12 pr-12 text-white placeholder:text-white/30 outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all"
                  />

                  <button
                    type="button"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
                  >
                    <i className="fas fa-eye"></i>
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-white/60 cursor-pointer">
                  <input type="checkbox" className="accent-amber-500" />
                  Remember me
                </label>

                <span className="text-white/40">
                  Secure Login Enabled
                </span>
              </div>

              <button
                type="submit"
                className="w-full h-14 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 text-black font-semibold text-lg hover:scale-[1.02] hover:shadow-[0_10px_40px_rgba(251,191,36,0.35)] transition-all duration-300"
              >
                Sign In
              </button>
            </form>

            {/* Footer */}
            <div className="mt-8 text-center text-white/50 text-sm">
              Don’t have an account?
              <button className="ml-2 text-amber-400 hover:text-amber-300 font-medium transition-colors">
                Create Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

