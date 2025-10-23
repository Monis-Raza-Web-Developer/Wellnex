import React from "react";
import { motion } from "framer-motion";

const JoinTheWellnessSection = () => {
  return (
    <>
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
        <button className="bg-gradient-to-l from-green-600 to-green-950 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-semibold hover:bg-[#28a745] transition text-sm sm:text-base">
          Get Involved
        </button>
      </section>
    </>
  );
};

export default JoinTheWellnessSection;