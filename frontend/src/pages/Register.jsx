import React, { useState } from "react";
import { Link } from "react-router-dom";
import { registerUser } from "../api/authAPI";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setformData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await registerUser(formData);
      setformData({
        username: "",
        email: "",
        password: "",
      });
      if (response.success) {
        navigate("/api/auth/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="min-h-screen bg-zinc-950 text-white flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">
        {/* Logo / Heading */}
        <div className="text-center mb-8">
          <Link to="/">
            <h1 className="text-4xl font-bold tracking-tight">
              Convo<span className="text-cyan-400">X</span>
            </h1>
          </Link>

          <p className="text-zinc-400 mt-2">
            Create your account and start chatting.
          </p>
        </div>

        {/* Register Card */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-7 shadow-xl">
          <h2 className="text-2xl font-semibold mb-6">Create Account</h2>

          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Username */}
            <div>
              <label className="block text-sm text-zinc-300 mb-2">
                Username
              </label>

              <input
                type="text"
                name="username"
                placeholder="Enter your username"
                className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 text-white outline-none focus:border-cyan-400 transition"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>

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
              <label className="block text-sm text-zinc-300 mb-2">
                Password
              </label>

              <input
                type="password"
                name="password"
                placeholder="Create a password"
                className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 text-white outline-none focus:border-cyan-400 transition"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            {/* Confirm Password */}
            {/* <div>
              <label className="block text-sm text-zinc-300 mb-2">
                Confirm Password
              </label>

              <input
                type="password"
                placeholder="Confirm your password"
                className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 text-white outline-none focus:border-cyan-400 transition"
              />
            </div> */}

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
            <Link
              to="/api/auth/login"
              className="text-cyan-400 hover:text-cyan-300 ml-1"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
