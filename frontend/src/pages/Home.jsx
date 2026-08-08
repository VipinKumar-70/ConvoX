import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* Navbar */}
      <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <h1 className="text-3xl font-bold">
            Convo<span className="text-cyan-400">X</span>
          </h1>
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
          <a href="#" className="hover:text-white transition">
            Home
          </a>

          <a href="#features" className="hover:text-white transition">
            Features
          </a>

          <a href="#about" className="hover:text-white transition">
            About
          </a>
        </div>

        {/* Auth */}
        <div className="flex items-center gap-3">
          <Link
            to="/api/auth/login"
            className="px-4 py-2 text-sm text-zinc-300 hover:text-white transition"
          >
            Login
          </Link>

          <Link
            to="/api/auth/register"
            className="bg-cyan-400 hover:bg-cyan-300 text-zinc-950 px-5 py-2.5 rounded-lg text-sm font-semibold transition"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Hero Content */}
          <div>
            <div className="inline-flex items-center gap-2 border border-zinc-800 bg-zinc-900 rounded-full px-4 py-2 text-sm text-zinc-400 mb-7">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              Real-time communication
            </div>

            <h2 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
              Connect.
              <br />
              Chat.
              <br />
              <span className="text-cyan-400">Instantly.</span>
            </h2>

            <p className="text-zinc-400 text-lg mt-7 max-w-xl leading-relaxed">
              ConvoX makes real-time communication simple. Connect with people,
              exchange messages instantly, and stay connected.
            </p>

            <div className="flex flex-wrap gap-4 mt-9">
              <Link
                to="/api/auth/register"
                className="bg-cyan-400 hover:bg-cyan-300 text-zinc-950 font-semibold px-7 py-3.5 rounded-lg transition"
              >
                Start Chatting →
              </Link>

              <Link
                to="/api/auth/login"
                className="border border-zinc-700 hover:border-zinc-500 px-7 py-3.5 rounded-lg transition"
              >
                Login
              </Link>
            </div>
          </div>

          {/* Chat Preview */}
          <div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl">
              {/* Chat Header */}
              <div className="border-b border-zinc-800 px-5 py-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-cyan-400 flex items-center justify-center text-zinc-950 font-bold">
                  R
                </div>

                <div>
                  <h3 className="font-medium">Rahul</h3>

                  <p className="text-xs text-green-400">● Online</p>
                </div>
              </div>

              {/* Messages */}
              <div className="p-5 space-y-4 min-h-[350px]">
                <div className="flex">
                  <div className="bg-zinc-800 px-4 py-3 rounded-2xl rounded-tl-sm max-w-[75%]">
                    Hey! Are you working on ConvoX?
                  </div>
                </div>

                <div className="flex justify-end">
                  <div className="bg-cyan-400 text-zinc-950 px-4 py-3 rounded-2xl rounded-tr-sm max-w-[75%]">
                    Yeah! I'm building the real-time chat system.
                  </div>
                </div>

                <div className="flex">
                  <div className="bg-zinc-800 px-4 py-3 rounded-2xl rounded-tl-sm max-w-[75%]">
                    That's awesome! 🚀
                  </div>
                </div>

                <div className="flex justify-end">
                  <div className="bg-cyan-400 text-zinc-950 px-4 py-3 rounded-2xl rounded-tr-sm max-w-[75%]">
                    Messages arrive instantly!
                  </div>
                </div>
              </div>

              {/* Message Input */}
              <div className="border-t border-zinc-800 p-4 flex gap-3">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-sm outline-none focus:border-cyan-400"
                />

                <button className="bg-cyan-400 hover:bg-cyan-300 text-zinc-950 px-5 rounded-lg font-semibold transition">
                  ➤
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-t border-zinc-900 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">
              Features
            </p>

            <h2 className="text-4xl font-bold mt-3">
              Everything you need to chat
            </h2>

            <p className="text-zinc-400 mt-4 max-w-xl mx-auto">
              Built with modern technologies to provide a fast and reliable
              messaging experience.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <div className="text-3xl mb-5">⚡</div>

              <h3 className="text-lg font-semibold">Real-time</h3>

              <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
                Send and receive messages instantly using WebSockets.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <div className="text-3xl mb-5">🔒</div>

              <h3 className="text-lg font-semibold">Secure</h3>

              <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
                Secure authentication keeps your conversations protected.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <div className="text-3xl mb-5">👥</div>

              <h3 className="text-lg font-semibold">Connect</h3>

              <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
                Find people and start conversations with your connections.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <div className="text-3xl mb-5">🔔</div>

              <h3 className="text-lg font-semibold">Notifications</h3>

              <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
                Stay updated with real-time message notifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to start a conversation?
          </h2>

          <p className="text-zinc-400 mt-5">
            Create your ConvoX account and start chatting in real time.
          </p>

          <Link
            to="/api/auth/register"
            className="inline-block mt-8 bg-cyan-400 hover:bg-cyan-300 text-zinc-950 font-semibold px-8 py-3.5 rounded-lg transition"
          >
            Create Account →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-900 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <h3 className="text-xl font-bold">
            Convo<span className="text-cyan-400">X</span>
          </h3>

          <p className="text-sm text-zinc-500">
            © 2026 ConvoX. Built for real-time conversations.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Home;
