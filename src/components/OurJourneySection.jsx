import React from "react";
import { motion } from "framer-motion";
import Hero from "./Hero";

const OurJourneySection = () => {
  return (
    <>
      <section
        className="bg-[#111827] py-20 sm:py-24 px-5 sm:px-8 md:px-16 lg:px-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 60, 0, 0.15), rgba(0, 0, 0, 0.85)), url('line-vector.svg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex items-center text-[12px] gap-2">
          <img src="./movingIcon.gif" width={20} />
          <p>Fuelled by dreams, driven by results</p>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
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

          <div className="flex justify-center">
            <Hero />
          </div>
        </div>
      </section>
    </>
  );
};

export default OurJourneySection;