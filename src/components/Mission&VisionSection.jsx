import React from "react";
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";
import { FaBrain, FaHeart } from "react-icons/fa";

const MissionAndVisionSection = () => {
  return (
    <>
      <section className="grid md:grid-cols-2 gap-8 sm:gap-10 max-w-[100%] mx-auto px-5 sm:px-8 md:px-12 lg:px-20 py-24">
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
    </>
  );
};

export default MissionAndVisionSection;