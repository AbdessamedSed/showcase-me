"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram, FaGraduationCap, FaResearchgate, FaPaperPlane } from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ fullName: "", email: "", subject: "", message: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <motion.div 
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-600 to-blue-500 p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Page Title */}
      <motion.h1 
        className="text-5xl font-bold text-white mb-8"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Contact Me
      </motion.h1>

      {/* Contact Form */}
      <motion.form 
        className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-xl w-full max-w-lg"
        onSubmit={handleSubmit}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Full Name */}
        <motion.div className="mb-4" initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
          <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Full Name</label>
          <input 
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </motion.div>

        {/* Email */}
        <motion.div className="mb-4" initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
          <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Email</label>
          <input 
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </motion.div>

        {/* Subject */}
        <motion.div className="mb-4" initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
          <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Subject</label>
          <input 
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </motion.div>

        {/* Message */}
        <motion.div className="mb-4" initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5 }}>
          <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            rows={5}
          />
        </motion.div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6 }}
        >
          <FaPaperPlane /> Send Message
        </motion.button>

        {/* Status Message */}
        {status && <p className="mt-4 text-center text-white font-semibold">{status}</p>}
      </motion.form>

      {/* Social Media Icons */}
      <motion.div 
        className="flex gap-6 mt-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <a href="https://linkedin.com" target="_blank" className="text-white text-3xl hover:text-gray-300 transition">
          <FaLinkedin />
        </a>
        <a href="https://scholar.google.com" target="_blank" className="text-white text-3xl hover:text-gray-300 transition">
          <FaGraduationCap />
        </a>
        <a href="https://www.researchgate.net" target="_blank" className="text-white text-3xl hover:text-gray-300 transition">
          <FaResearchgate />
        </a>
        <a href="https://facebook.com" target="_blank" className="text-white text-3xl hover:text-gray-300 transition">
          <FaFacebook />
        </a>
        <a href="https://twitter.com" target="_blank" className="text-white text-3xl hover:text-gray-300 transition">
          <FaTwitter />
        </a>
        <a href="https://instagram.com" target="_blank" className="text-white text-3xl hover:text-gray-300 transition">
          <FaInstagram />
        </a>
      </motion.div>
    </motion.div>
  );
};

export default ContactPage;
