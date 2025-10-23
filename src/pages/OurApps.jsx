import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaApple,
  FaGooglePlay,
  FaHeartbeat,
  FaBrain,
  FaCheckCircle,
  FaChartLine,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const apps = [
  {
    id: 1,
    name: "SoulWhispers",
    icon: <FaBrain className="text-[#34C759] text-5xl mb-5" />,
    tagline: "Your AI-powered Mindfulness & Emotional Wellness Companion",
    overview:
      "SoulWhispers helps you reconnect with your inner peace through AI-driven mood analysis, guided meditations, and emotional journaling. Designed for modern life, it blends technology with compassion — so you can feel grounded even in chaos.",
    highlights: [
      "🧘 Personalized Meditation Sessions",
      "💬 AI-Powered Mood Insights",
      "📖 Guided Journaling Prompts",
      "🎧 Calming Music & Affirmations",
      "📅 Daily Mindfulness Challenges",
    ],
    howItHelps:
      "Through daily reflections and intelligent insights, SoulWhispers creates a mindful routine that adapts to your emotions and behaviors, helping you grow emotional intelligence and inner calm.",
    image: "s1.png",
    downloads: "Over 500K+ Downloads",
    rating: "4.8 / 5 (Google Play)",
    playstore: "#",
    appstore: "#",
  },
  {
    id: 2,
    name: "GymKey",
    icon: <FaHeartbeat className="text-[#34C759] text-5xl mb-5" />,
    tagline: "Your Smart Access to Fitness — Anytime, Anywhere",
    overview:
      "GymKey revolutionizes gym access with smart digital passes. Unlock your gym with a tap, track your workouts, and manage memberships seamlessly. Built for athletes, fitness lovers, and gym owners alike.",
    highlights: [
      "🏋️ One-Tap Gym Access",
      "📊 Smart Workout Tracking",
      "⏰ Real-Time Class Booking",
      "💪 AI-based Progress Reports",
      "📱 Membership Analytics for Owners",
    ],
    howItHelps:
      "GymKey simplifies gym entry, tracking, and management — letting users focus on fitness while owners manage everything digitally. It’s the future of connected gyms.",
    image: "s1.png",
    downloads: "Over 1M+ Users Worldwide",
    rating: "4.7 / 5 (App Store)",
    playstore: "#",
    appstore: "#",
  },
];

const OurApps = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="bg-gradient-to-b from-[#0b0d13] via-[#111827] to-[#0b0d13] text-gray-200 min-h-screen font-[Poppins]">
      <section
        className="relative py-34 px-6 md:px-20 text-left border-b border-[#1b2e1b]"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 60, 0, 0.15), rgba(0, 0, 0, 0.85)), url('line-vector.svg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#34C759] to-[#f8faf9] mb-5"
        >
          Our Flagship Mobile Apps
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-2xl text-lg md:text-xl text-gray-400"
        >
          Built with care, innovation, and intelligence — each app by Wellnex
          Systems redefines how technology connects with human wellness.
        </motion.p>
      </section>

      {/* App Sections */}
      <div className="max-w-7xl mx-auto px-6 py-20 space-y-28">
        {apps.map((app, index) => (
          <motion.div
            key={app.id}
            className={`flex flex-col md:flex-row items-center gap-12 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* App Image */}
            <div className="md:w-1/2 relative group">
              <img
                src={app.image}
                alt={app.name}
                className="rounded-3xl shadow-2xl opacity-90 hover:opacity-100 transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-3xl" />
            </div>

            {/* App Details */}
            <div className="md:w-1/2 w-full">
              {app.icon}
              <h2 className="text-3xl md:text-4xl font-bold text-[#34C759] mb-2">
                {app.name}
              </h2>
              <p className="text-gray-400 italic mb-5">{app.tagline}</p>

              <h3 className="text-xl font-semibold text-[#34C759] mb-2">
                Overview
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {app.overview}
              </p>

              <h3 className="text-xl font-semibold text-[#34C759] mb-2">
                Core Features
              </h3>
              <ul className="text-gray-300 space-y-2 mb-6">
                {app.highlights.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <FaCheckCircle className="text-[#34C759]" /> {feature}
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold text-[#34C759] mb-2">
                How It Helps
              </h3>
              <p className="text-gray-300 mb-6">{app.howItHelps}</p>

              <div className="flex flex-wrap items-center gap-5 mb-6">
                <span className="bg-[#34C759]/10 px-4 py-2 rounded-full text-sm text-[#34C759]">
                  📥 {app.downloads}
                </span>
                <span className="bg-[#34C759]/10 px-4 py-2 rounded-full text-sm text-[#34C759]">
                  ⭐ {app.rating}
                </span>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 flex-wrap">
                <a
                  href={app.playstore}
                  className="flex items-center gap-2 bg-[#34C759] text-black font-medium px-6 py-3 rounded-full shadow-md hover:shadow-[#34C759]/30 hover:scale-105 transition"
                >
                  <FaGooglePlay /> Google Play
                </a>
                <a
                  href={app.appstore}
                  className="flex items-center gap-2 border border-[#34C759] text-[#34C759] px-6 py-3 rounded-full font-medium hover:bg-[#34C759] hover:text-black transition"
                >
                  <FaApple /> App Store
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurApps;