import React from "react";
import { motion } from "framer-motion";
import { FaSpa, FaDumbbell } from "react-icons/fa";

const FlagshipApps = () => {
  const apps = [
    {
      icon: <FaSpa className="text-[#34C759] text-5xl md:text-6xl mb-4" />,
      name: "SoulWhispers",
      tagline: "Your Pocket-Sized Wellness Companion",
      desc: "SoulWhispers helps users reconnect with calm and mindfulness through guided meditations, AI-powered journaling, and mood analytics — crafted to nurture peace in the digital age.",
      features: [
        "AI-powered mood journaling",
        "Telehealth & mental diagnostics",
        "Personalized provider connections",
        "Seamless booking & therapy sessions",
      ],
      image: "s1.png",
      btnText: "Download SoulWhispers",
    },
    {
      icon: <FaDumbbell className="text-[#34C759] text-5xl md:text-6xl mb-4" />,
      name: "GymKey",
      tagline: "Smart Access to Fitness, Anytime",
      desc: "GymKey unlocks gyms with a tap — track workouts, book sessions, and manage memberships with smart digital access for both users and gym owners.",
      features: [
        "One-tap gym access",
        "Workout analytics dashboard",
        "Membership management",
        "Live class scheduling",
      ],
      image: "s1.png",
      btnText: "Explore GymKey",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-24 font-[Poppins]">
      <motion.div
        className="mb-10 md:mb-14 flex justify-center items-center flex-col text-center px-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 mb-3">
          <div className="w-12 h-[2px] bg-[#34C759]" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#34C759] to-[#010904]">
            Our Flagship Apps
          </h2>
        </div>
        <p className="text-black text-base sm:text-lg md:text-xl max-w-2xl">
          Innovating wellness through intelligence, empathy, and design.
        </p>
      </motion.div>

      <div className="flex flex-col gap-20 md:gap-32 items-center justify-center">
        {apps.map((app, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row items-center justify-center w-full max-w-6xl gap-10 md:gap-16 px-6 sm:px-10 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="w-full md:w-[45%] flex justify-center"
            >
              <div className="max-w-[240px] sm:max-w-[280px] md:max-w-[320px]">
                <img
                  src={app.image}
                  alt={app.name}
                  className="rounded-2xl w-full h-auto object-cover "
                />
              </div>
            </motion.div>

            <div
              className={`w-full md:w-[45%] text-center md:text-left ${
                index % 2 === 0 ? "md:ml-8" : "md:mr-8"
              }`}
            >
              {app.icon}
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-gray-900">
                {app.name}
              </h3>

              <div className="flex items-center mb-10 gap-2">
                <img src="./movingIcon.gif" width={20} />
                <p className="text-[#34C759]">{app.tagline}</p>
              </div>
              <p className="text-gray-600 leading-relaxed mb-5 text-sm sm:text-base">
                {app.desc}
              </p>

              <ul className="space-y-2 text-gray-700 mb-6 sm:mb-8 text-sm sm:text-base">
                {app.features.map((f, i) => (
                  <li
                    key={i}
                    className="flex justify-center md:justify-start items-start"
                  >
                    <span className="text-[#34C759] font-bold mr-2">•</span>
                    {f}
                  </li>
                ))}
              </ul>

              <button className="bg-gradient-to-l from-green-600 to-green-950 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-[#28a745] transition">
                {app.btnText}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FlagshipApps;