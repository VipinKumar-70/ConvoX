import React, { useState } from "react";

const Register = () => {
  return (
    <section className="min-h-screen bg-zinc-950 text-white flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">
        {/* Logo / Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight">
            Convo<span className="text-cyan-400">X</span>
          </h1>

          <p className="text-zinc-400 mt-2">
            Create your account and start chatting.
          </p>
        </div>

        {/* Register Card */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-7 shadow-xl">
          <h2 className="text-2xl font-semibold mb-6">Create Account</h2>

          <form className="space-y-5">
            {/* Username */}
            <div>
              <label className="block text-sm text-zinc-300 mb-2">
                Username
              </label>

              <input
                type="text"
                placeholder="Enter your username"
                className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 text-white outline-none focus:border-cyan-400 transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm text-zinc-300 mb-2">Email</label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 text-white outline-none focus:border-cyan-400 transition"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm text-zinc-300 mb-2">
                Password
              </label>

              <input
                type="password"
                placeholder="Create a password"
                className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 text-white outline-none focus:border-cyan-400 transition"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm text-zinc-300 mb-2">
                Confirm Password
              </label>

              <input
                type="password"
                placeholder="Confirm your password"
                className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 text-white outline-none focus:border-cyan-400 transition"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-cyan-400 hover:bg-cyan-300 text-zinc-950 font-semibold py-3 rounded-lg transition cursor-pointer"
            >
              Create Account
            </button>
          </form>

          {/* Login Link */}
          <p className="text-center text-sm text-zinc-400 mt-6">
            Already have an account?
            <a href="#" className="text-cyan-400 hover:text-cyan-300 ml-1">
              Login
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
