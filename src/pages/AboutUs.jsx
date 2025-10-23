import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import { FaBrain, FaHeart, FaGlobe } from "react-icons/fa";
import Hero from "../components/Hero";


const AboutUs = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);


  return (
    <div className="font-[Poppins] text-gray-100 bg-gradient-to-b pt-10 from-[#0b0d13] via-[#111827] to-[#0b0d13] overflow-hidden ">
      {/* HERO / INTRO */}
      <section className="relative py-20 sm:py-24 md:py-34 px-6 sm:px-12 md:px-20 lg:px-20 text-left border-b border-[#1b2e1b]"
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
          className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#34C759] to-[#f8faf9] mb-4 sm:mb-5"
        >
          About Wellnex Systems
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-2xl text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed"
        >
          We are redefining wellness through technology — blending empathy,
          intelligence, and innovation to build a healthier, smarter world.
        </motion.p>
      </section>

      {/* MISSION & VISION */}
      <section className="grid md:grid-cols-2 gap-8 sm:gap-10 max-w-[100%] mx-auto px-5 sm:px-8 md:px-12 lg:px-20 py-24"
          
      >
        <Parallax speed={-5}>
          <motion.div
              whileHover={{ y: -5 }}
            className="rounded-2xl p-6 sm:p-8 md:p-10 
shadow-[0_4px_25px_rgba(0,255,100,0.15)] backdrop-blur-md border border-white/10"
          >
            <FaHeart className="text-[#34C759] text-4xl sm:text-5xl mb-4" />
            <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
              Our Mission
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              To empower every individual to achieve holistic well-being through
              AI-driven tools that connect mind, body, and lifestyle.
            </p>
          </motion.div>
        </Parallax>

        <Parallax speed={5}>
          <motion.div
            whileHover={{ y: -5 }}
            className="rounded-2xl p-6 sm:p-8 md:p-10 
shadow-[0_4px_25px_rgba(0,255,100,0.15)] backdrop-blur-md border border-white/10"
          >
            <FaBrain className="text-[#34C759] text-4xl sm:text-5xl mb-4" />
            <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
              Our Vision
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              To create an interconnected ecosystem of wellness apps that help
              people live mindfully, move intelligently, and heal emotionally.
            </p>
          </motion.div>
        </Parallax>
      </section>

      {/* OUR STORY */}
      <section className="bg-[#111827] py-20 sm:py-24 px-5 sm:px-8 md:px-16 lg:px-20"
      style={{
  backgroundImage: `linear-gradient(rgba(0, 60, 0, 0.15), rgba(0, 0, 0, 0.85)), url('line-vector.svg')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
}}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center"
        >
          {/* Text */}
          <motion.div
            className="space-y-6 sm:space-y-8 text-gray-400"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-10 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our Journey
            </motion.h2>
            <p className="text-sm sm:text-base leading-relaxed">
              Founded in 2023, Wellnex Systems began as a small vision — to
              merge the power of artificial intelligence with emotional
              intelligence.
            </p>
            <p className="text-sm sm:text-base leading-relaxed">
              Over time, we grew into a team of passionate creators, developers,
              and wellness advocates building products like SoulWhispers and
              GymKey to inspire smarter living.
            </p>
            <p className="text-sm sm:text-base leading-relaxed">
              Our path is just beginning. With every innovation, we aim to bring
              balance back to a fast-paced digital world.
            </p>
          </motion.div>

          {/* Hero */}
          <div className="flex justify-center">
            <Hero />
          </div>
        </div>
      </section>

      {/* <TimelineSection/> */}

      {/* CORE VALUES */}
      <section className="py-20 sm:py-24 px-4 sm:px-8 md:px-16 lg:px-20 bg-gradient-to-r from-[#10141c] to-[#0b0d13]">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10 sm:mb-16 text-center md:text-left">
          Core Values
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: (
                <FaHeart className="text-[#34C759] text-4xl sm:text-5xl mb-3" />
              ),
              title: "Empathy",
              desc: "Understanding human emotions and designing products that care.",
            },
            {
              icon: (
                <FaBrain className="text-[#34C759] text-4xl sm:text-5xl mb-3" />
              ),
              title: "Innovation",
              desc: "Blending AI with wellness to unlock new dimensions of growth.",
            },
            {
              icon: (
                <FaGlobe className="text-[#34C759] text-4xl sm:text-5xl mb-3" />
              ),
              title: "Integrity",
              desc: "Building trust through transparency, respect, and responsibility.",
            },
          ].map((v, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl p-6 sm:p-8 md:p-10 
shadow-[0_4px_25px_rgba(0,255,100,0.15)] backdrop-blur-md border border-white/10"
            >
              {v.icon}
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-white">
                {v.title}
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 text-center bg-[#0b0d13] px-4 sm:px-8">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Join the <span className="text-[#34C759]">Wellness Revolution</span>
        </motion.h2>
        <p className="text-gray-400 mb-6 sm:mb-8 max-w-xl mx-auto text-sm sm:text-base">
          Be part of a global movement towards mindful, intelligent living.
          Together, let’s shape the future of well-being.
        </p>
        <button className="bg-[#34C759] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-semibold hover:bg-[#28a745] transition text-sm sm:text-base">
          Get Involved
        </button>
      </section>
    </div>
  );
};

export default AboutUs;