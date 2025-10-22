import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="font-[Poppins] text-black bg-black">
   <section className="px-8 md:px-20 pt-28 pb-16 text-left border-b border-[#1b2e1b]">
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#00FF85] via-[#38ef7d] to-[#00c38b] text-transparent bg-clip-text drop-shadow-[0_0_20px_rgba(56,239,125,0.5)]"
        >
          Get in Touch with <br /> <span className="text-white/90">Wellnex Systems</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-gray-400 max-w-2xl mt-6 text-lg leading-relaxed"
        >
          Let’s build something extraordinary. Whether you’re a business visionary, a creator, or an innovator — we’d love to connect and collaborate.
        </motion.p>
      </section>

      {/* === GRID SECTION === */}
      <section className="grid grid-cols-1 md:grid-cols-[40%_60%] min-h-[80vh]">
        {/* LEFT SIDE: LET'S CONNECT SECTION */}
        <div className="bg-black text-white flex flex-col justify-center p-10 md:p-16 ">
          <h2 className="text-3xl font-bold mb-6">Let’s Connect</h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Fill out the form and we’ll get back to you shortly.
          </p>

          <h3 className="text-lg font-semibold mb-4">What happens next?</h3>
          <ul className="space-y-4 text-gray-300 text-sm">
            <li className="flex items-start gap-3">
              <span className="text-[#34C759] mt-1">✔</span>
              <span>Our expert will review your request and contact you.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#34C759] mt-1">✔</span>
              <span>If needed, we’ll sign an NDA to ensure your privacy.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#34C759] mt-1">✔</span>
              <span>Our Pre-Sales Manager will send you a proposal.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#34C759] mt-1">✔</span>
              <span>Then we start working on your project together.</span>
            </li>
          </ul>
        </div>

        {/* RIGHT SIDE: CONTACT FORM SECTION */}
        <div className="bg-black  flex justify-center items-center p-10 md:p-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="  w-full max-w-3xl p-8 md:p-12"
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-[#34C759]">
              Contact Us
            </h2>
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your challenge / goal*"
                className="w-full px-4 py-3 rounded-xl text-white border border-green-500  focus:ring-2 focus:ring-[#34C759] outline-none"
              />

              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Name*"
                  className="w-full px-4 py-3 rounded-xl text-white border border-green-500  focus:ring-2 focus:ring-[#34C759] outline-none"
                />
                <input
                  type="email"
                  placeholder="Corporate email*"
                  className="w-full px-4 py-3 rounded-xl text-white border border-green-500  focus:ring-2 focus:ring-[#34C759] outline-none"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Phone number"
                  className="w-full px-4 py-3 rounded-xl text-white border border-green-500 focus:ring-2 focus:ring-[#34C759] outline-none"
                />
                <input
                  type="text"
                  placeholder="Company"
                  className="w-full px-4 py-3 rounded-xl text-white border border-green-500 focus:ring-2 focus:ring-[#34C759] outline-none"
                />
              </div>

              <div className="flex items-center gap-3 text-sm text-white">
                <input type="checkbox" className="accent-[#34C759]" />
                <span>Secure data with NDA first</span>
              </div>

              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full px-4 py-3 rounded-xl text-white border border-green-500 focus:ring-2 focus:ring-[#34C759] outline-none resize-none"
              ></textarea>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-[#34C759] hover:bg-[#28a745] text-white py-3 rounded-xl font-semibold text-lg transition-all duration-300 shadow-md"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
