import React from "react";
import { motion } from "framer-motion";

const ContactFormSection = () => {
  return (
    <>
       <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 mt-10 md:mt-0 p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg shadow-[0_4px_25px_rgba(0,255,100,0.15)] "
          >
            <h2 className="text-2xl font-bold mb-6 text-[#34C759]">Let’s Talk</h2>
            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your challenge / goal*"
                className="w-full px-4 py-3 bg-transparent text-white border border-gray-800 rounded-md focus:ring-1 focus:ring-[#34C759] outline-none"
              />
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name*"
                  className="w-full px-4 py-3 bg-transparent text-white border border-gray-800 rounded-md focus:ring-1 focus:ring-[#34C759] outline-none"
                />
                <input
                  type="email"
                  placeholder="Corporate email*"
                  className="w-full px-4 py-3 bg-transparent text-white border border-gray-800 rounded-md focus:ring-1 focus:ring-[#34C759] outline-none"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Phone number"
                  className="w-full px-4 py-3 bg-transparent text-white border border-gray-800 rounded-md focus:ring-1 focus:ring-[#34C759] outline-none"
                />
                <input
                  type="text"
                  placeholder="Company"
                  className="w-full px-4 py-3 bg-transparent text-white border border-gray-800 rounded-md focus:ring-1 focus:ring-[#34C759] outline-none"
                />
              </div>
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full px-4 py-3 bg-transparent text-white border border-gray-800 rounded-md focus:ring-1 focus:ring-[#34C759] outline-none resize-none"
              ></textarea>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-l from-green-600 to-green-950 text-white py-3 rounded-xl font-semibold text-lg transition-all duration-300 shadow-md"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
    </>
  );
};

export default ContactFormSection;