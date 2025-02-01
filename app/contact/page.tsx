"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaInstagram, FaGithub, FaResearchgate, FaGraduationCap } from "react-icons/fa";

const Contact = () => {
  return (
    <motion.div 
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#1a1a1a] to-[#2c3e50] p-6 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1 
        className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00c6ff] to-[#0072ff] mb-6"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Let’s Build Something Amazing
      </motion.h1>
      
      <motion.p 
        className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        I’m always open to discussing new projects, creative ideas, or opportunities to collaborate. Whether you’re a researcher, a fellow developer, or just someone who loves thinking, solving problems, let’s connect and create something extraordinary!
      </motion.p>

      {/* Contact Info */}
      <motion.div 
        className="text-gray-300 text-lg mb-8 space-y-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <p className="flex items-center justify-center gap-2">
          <span className="text-[#00c6ff]">📧</span>
          <a href="mailto:ka_seddiki@esi.dz" className="hover:text-[#00c6ff] transition-colors">
            ka_seddiki@esi.dz
          </a>
        </p>
        <p className="flex items-center justify-center gap-2">
          <span className="text-[#00c6ff]">📞</span>
          <a href="tel:+213792382540" className="hover:text-[#00c6ff] transition-colors">
            +213 792 382 540
          </a>
        </p>
        <p className="flex items-center justify-center gap-2">
          <span className="text-[#00c6ff]">📍</span>
          Oued Smar, Algiers, Algeria 
        </p>
        <p className="flex items-center justify-center gap-2">
          <span className="text-[#00c6ff]">📍</span>
          Hennaya, Tlemcen, Algeria
        </p>
      </motion.div>

      {/* Social Media Icons */}
      <motion.div 
        className="flex gap-8 text-4xl text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#0077b5] transition-colors">
          <FaLinkedin />
        </a>
        <a href="https://scholar.google.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#4285f4] transition-colors">
          <FaGraduationCap />
        </a>
        <a href="https://www.researchgate.net" target="_blank" rel="noopener noreferrer" className="hover:text-[#00cc88] transition-colors">
          <FaResearchgate />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#f5f5f5] transition-colors">
          <FaGithub />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#1da1f2] transition-colors">
          <FaTwitter />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#e1306c] transition-colors">
          <FaInstagram />
        </a>
      </motion.div>

      {/* Call-to-Action Button */}
      <motion.a
        href="#"
        className="mt-12 px-8 py-3 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white font-semibold rounded-full hover:scale-105 transition-transform"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        Schedule a Call
      </motion.a>
    </motion.div>
  );
};

export default Contact;