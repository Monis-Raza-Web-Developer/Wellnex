import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ activePage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
 const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.nav
      className="fixed top-0 z-50 w-full "
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <motion.div
  style={{ willChange: "transform, background, filter, box-shadow" }}
  animate={{
    background: isScrolled
      ? "linear-gradient(135deg, rgba(0,0,0,0.5), rgba(0,0,0,0.3))"
      : "rgba(0,0,0,0)",
    border: isScrolled
      ? "1px solid rgba(100,255,100,0.25)"
      : "1px solid transparent",
    boxShadow: isScrolled
      ? "0 4px 25px rgba(0,255,100,0.15)"
      : "0 4px 30px rgba(0,0,0,0)",
    backdropFilter: isScrolled ? "blur(16px)" : "blur(0px)",
    scale: isScrolled ? 0.97 : 1,
    width: isScrolled ? "80%" : "90%",
  }}
  transition={{
    background: { duration: 0.25, ease: "easeInOut" },
    border: { duration: 0.2, ease: "easeOut" },
    boxShadow: { duration: 0.25, ease: "easeInOut" },
    backdropFilter: { duration: 0.3, ease: "easeOut" },
    scale: { duration: 0.2, ease: "easeOut" },
    width: { duration: 0.25, ease: "easeInOut" },
  }}
  className="mx-auto flex items-center justify-center md:justify-between px-6 py-4 rounded-full mt-2 transition-all duration-300"
>
        {/* 📱 Mobile Button */}
        <div className="md:hidden absolute left-6">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white hover:text-gray-300 transition"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* 🌟 Logo */}
        <motion.div
          animate={{ scale: isScrolled ? 0.9 : 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="flex items-center space-x-2"
        >
          <img
            src="white-logo.png"
            alt="Logo"
            className="w-30 h-12  object-cover  "
          />
        
        </motion.div>

        {/* 🌈 Links */}
        <div className="hidden md:flex items-center space-x-10">
          {["Home", "Apps", "About", "Contact"].map((name) => (
            <Link
              key={name}
              to={`/${name === "Home" ? "" : name.toLowerCase()}`}
              className={`text-white hover:text-green-400 font-medium transition ${
                activePage === name.toLowerCase()
                  ? "text-green-400 font-bold"
                  : ""
              }`}
            >
              {name}
            </Link>
          ))}
        </div>

        {/* 💚 Button */}
        <motion.div
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.96 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <button
             onClick={() => setIsOpen(true)}
            className="md:flex hidden  bg-gradient-to-l from-green-600 to-green-950 text-white font-semibold px-5 py-2 text-sm rounded-full transition-all duration-300 shadow-md">
            Speak to an expert
          </button>
        </motion.div>
      </motion.div>

      {/* 📱 Mobile Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden absolute top-full left-0 w-full bg-black/50 backdrop-blur-lg border-t border-b border-gray-200 z-10"
          >
            <div className="px-4 py-4 space-y-4">
              {["Home", "Apps", "About", "Contact"].map((name) => (
                <Link
                  key={name}
                  to={`/${name === "Home" ? "" : name.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-white hover:text-black transition ${
                    activePage === name.toLowerCase()
                      ? "text-black font-bold"
                      : ""
                  }`}
                >
                  {name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block bg-green-500 hover:bg-green-600 text-white text-center py-2 rounded-full font-medium"
              >
                Join Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
        {isOpen && (
        <div
          className="fixed inset-0   flex justify-center items-center z-50"
          onClick={() => setIsOpen(false)} // background click close
        >
            <div className="bg-gradient-to-b from-[#0b0d13] via-[#111827] to-[#0b0d13] border-t-2 border-l-2  border-gray-600 flex justify-center items-center p-10 md:p-20">
                   <motion.div
                     initial={{ opacity: 0, y: 40 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.6 }}
                     className="  w-full max-w-3xl p-8 md:p-12"
                   >
                     <motion.h2
                       initial={{ opacity: 0, y: 40 }}
                       animate={{ opacity: 1, y: 0 }}
                       transition={{ duration: 0.8 }}
                       className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#34C759] to-[#f8faf9] mb-4 sm:mb-5 text-center"
                     >
                       Contact Us
                     </motion.h2>
                     <form className="space-y-6">
                       <input
                         type="text"
                         placeholder="Your challenge / goal*"
                         className="w-full px-4 py-3 text-white border border-gray-800  focus:ring-1 focus:ring-[#34C759] outline-none"
                       />
         
                       <div className="grid md:grid-cols-2 gap-6">
                         <input
                           type="text"
                           placeholder="Name*"
                           className="w-full px-4 py-3 text-white border border-gray-800  focus:ring-1 focus:ring-[#34C759] outline-none"
                         />
                         <input
                           type="email"
                           placeholder="Corporate email*"
                           className="w-full px-4 py-3 text-white border border-gray-800  focus:ring-1 focus:ring-[#34C759] outline-none"
                         />
                       </div>
         
                       <div className="grid md:grid-cols-2 gap-6">
                         <input
                           type="text"
                           placeholder="Phone number"
                           className="w-full px-4 py-3 text-white border border-gray-800  focus:ring-1 focus:ring-[#34C759] outline-none"
                         />
                         <input
                           type="text"
                           placeholder="Company"
                           className="w-full px-4 py-3 text-white border border-gray-800  focus:ring-1 focus:ring-[#34C759] outline-none"
                         />
                       </div>
         
                       <div className="flex items-center gap-3 text-sm text-white">
                         <input type="checkbox" className="accent-[#34C759]" />
                         <span>Secure data with NDA first</span>
                       </div>
         
                       <textarea
                         placeholder="Your Message"
                         rows="5"
                         className="w-full px-4 py-3 text-white border border-gray-800 focus:ring-1 focus:ring-[#34C759] outline-none resize-none"
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
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;