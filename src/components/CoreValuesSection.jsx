import React from "react";
import { FaBrain, FaGlobe, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

const CoreValuesSection = () => {
  return (
    <>
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
              className="rounded-2xl p-6 sm:p-8 md:p-10 shadow-[0_4px_25px_rgba(0,255,100,0.15)] backdrop-blur-md border border-white/10"
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
    </>
  );
};

export default CoreValuesSection;