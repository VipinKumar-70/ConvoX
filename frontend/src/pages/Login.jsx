import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setformData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <section className="min-h-screen bg-zinc-950 text-white flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/">
            <h1 className="text-4xl font-bold tracking-tight">
              Convo<span className="text-cyan-400">X</span>
            </h1>
          </Link>

          <p className="text-zinc-400 mt-2">
            Welcome back. Continue your conversations.
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-7 shadow-xl">
          <h2 className="text-2xl font-semibold mb-6">Welcome Back</h2>

          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Email */}
            <div>
              <label className="block text-sm text-zinc-300 mb-2">Email</label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 text-white outline-none focus:border-cyan-400 transition"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm text-zinc-300">Password</label>

                <a
                  href="#"
                  className="text-xs text-cyan-400 hover:text-cyan-300"
                >
                  Forgot password?
                </a>
              </div>

              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 text-white outline-none focus:border-cyan-400 transition"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-cyan-400 hover:bg-cyan-300 text-zinc-950 font-semibold py-3 rounded-lg transition cursor-pointer"
            >
              Login
            </button>
          </form>

          {/* Register */}
          <p className="text-center text-sm text-zinc-400 mt-6">
            Don't have an account?
            <Link
              to="/api/auth/register"
              className="text-cyan-400 hover:text-cyan-300 ml-1"
            >
              Create account
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
