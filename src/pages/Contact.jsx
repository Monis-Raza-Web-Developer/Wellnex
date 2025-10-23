import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedinIn, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import ContactHeroSection from "../components/ContactHeroSection";
import LetsConnectSection from "../components/LetsConnectSection"
import ContactFormSection from "../components/ContactFormSection";

const Contact = () => {
  return (
    <div className="bg-gradient-to-b from-[#0b0d13] via-[#111827] to-[#0b0d13] text-white font-[Poppins]">
      {/* 🌟 HERO SECTION */}
 <ContactHeroSection/>

      {/* 🧭 WHY CONNECT SECTION */}
      <section className="px-6 md:px-20 py-16">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#34C759]">Why Connect With Us?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Strategic Guidance",
              desc: "We don’t just build — we help you define goals, analyze your audience, and create actionable roadmaps.",
            },
            {
              title: "End-to-End Solutions",
              desc: "From concept to launch, we handle design, development, and optimization all under one roof.",
            },
            {
              title: "Trusted Expertise",
              desc: "Our team has worked with startups, enterprises, and global brands — ensuring quality & innovation.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl text-center  transition-all shadow-[0_4px_25px_rgba(0,255,100,0.15)] "
            >
              <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🧩 PROCESS SECTION */}
      <section className="px-6 md:px-20 py-16 border-t border-white/10">
        <div className="md:flex items-start gap-16">
         <LetsConnectSection/>

          {/* 💬 CONTACT FORM */}
         <ContactFormSection/>
        </div>
      </section>

      {/* 📞 CONTACT DETAILS + SOCIALS */}
      <section className="text-center py-20 border-t border-white/10 px-6 ">
        <h2 className="text-3xl font-bold text-[#34C759] mb-8">Get In Touch</h2>
        <div className="flex flex-wrap justify-center gap-10 mb-10">
          <div>
            <FaEnvelope className="text-[#34C759] text-2xl mx-auto mb-2" />
            <p className="text-gray-300">contact@company.com</p>
          </div>
          <div>
            <FaPhoneAlt className="text-[#34C759] text-2xl mx-auto mb-2" />
            <p className="text-gray-300">+92 300 1234567</p>
          </div>
          <div>
            <FaMapMarkerAlt className="text-[#34C759] text-2xl mx-auto mb-2" />
            <p className="text-gray-300">123 Innovation Street, Karachi</p>
          </div>
        </div>

        <div className="flex justify-center gap-6 text-gray-400 text-xl">
          <FaFacebookF className="hover:text-[#34C759] cursor-pointer transition" />
          <FaInstagram className="hover:text-[#34C759] cursor-pointer transition" />
          <FaLinkedinIn className="hover:text-[#34C759] cursor-pointer transition" />
          <FaTwitter className="hover:text-[#34C759] cursor-pointer transition" />
        </div>
      </section>

     
    </div>
  );
};

export default Contact;
