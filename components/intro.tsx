"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import authorImage from "@/public/images/authors/personal_image.png";
import { 
  FaLinkedin, 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaGraduationCap, 
  FaResearchgate, 
  FaGithub
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Intro() {
  // Function to handle CV download
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "pdf/intro/CV.pdf"; // Replace with the actual path to your CV
    link.download = "Abdessamed_Seddiki_CV.pdf";
    link.click();
  };

  // Function to handle Recommendation download
  const handleDownloadRecommendation = () => {
    const link = document.createElement("a");
    link.href = "pdf/intro/Recommendations.pdf"; // Replace with the actual path to your recommendation
    link.download = "Abdessamed_Seddiki_Recommendation.pdf";
    link.click();
  };

  return (
    <section className="flex flex-col items-center gap-10 px-8 py-24 mt-14 md:gap-16">
      {/* Main Content */}
      <div className="flex flex-col-reverse items-center gap-10 md:flex-row md:items-center md:gap-16">
        {/* Text Section */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Abdessamed
            </span>
          </h1>
          <p className="mt-4 text-2xl text-gray-600 dark:text-gray-300">
            I’m a fifth-year Computer Systems (SIQ) student at{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              Ecole nationale Supérieure d'Informatique (ESI Algiers)
            </span>
            , deeply passionate about research, problem-solving, critical reasoning, and discovering
            new ideas. My interests span{" "}
            <span className="font-medium text-blue-600 dark:text-blue-400">
              Industry 4.0, Cryptography, Privacy, Applied Artificial Intelligence, and Compilers Design
            </span>
            , with a strong focus on optimization techniques.
          </p>
          <p className="mt-3 text-lg text-gray-500 dark:text-gray-400">
            I am fascinated by{" "}
            <span className="italic text-purple-500 dark:text-purple-400">
              philosophy
            </span>
            . Understanding and answering life’s fundamental questions has always
            been one of humanity’s greatest challenges. Exploring the gaps where
            logic, belief, and uncertainty meet is my true passion.
          </p>

          {/* Buttons Section */}
          <motion.div
            className="flex flex-wrap gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button
              onClick={handleDownloadCV}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
            >
              Download my CV
            </button>
            <button
              onClick={handleDownloadRecommendation}
              className="px-6 py-3 bg-gradient-to-r from-green-500 to-teal-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-teal-700 transition-all shadow-lg hover:shadow-xl"
            >
              Download Recommendation
            </button>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="relative w-44 h-44 md:w-56 md:h-56"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            className="rounded-full shadow-lg dark:shadow-xl"
            src={authorImage}
            alt="Abdessamed"
            width={224}
            height={224}
            priority
          />
          <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-blue-500 dark:bg-blue-600 rounded-full"></div>
        </motion.div>
      </div>

      {/* Social Icons Section */}
      <motion.div 
        className="flex justify-center items-center gap-6 mt-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <a href="https://www.linkedin.com/in/abdessamed-seddiki-15019b211/" target="_blank" className="text-gray-600 dark:text-gray-300 text-3xl hover:text-blue-500 transition">
          <FaLinkedin />
        </a>
        <a href="https://scholar.google.com/citations?user=K86_jrkAAAAJ&hl=fr" target="_blank" className="text-gray-600 dark:text-gray-300 text-3xl hover:text-blue-500 transition">
          <FaGraduationCap />
        </a>
        <a href="https://www.researchgate.net/profile/Abdessamed-Seddiki?ev=hdr_xprf" target="_blank" className="text-gray-600 dark:text-gray-300 text-3xl hover:text-blue-500 transition">
          <FaResearchgate />
        </a>
        <a href="https://www.github.com/AbdessamedSed" target="_blank" className="text-gray-600 dark:text-gray-300 text-3xl hover:text-blue-500 transition">
          <FaGithub />
        </a>
        <a href="https://x.com/Abdou28710" target="_blank" className="text-gray-600 dark:text-gray-300 text-3xl hover:text-blue-500 transition">
          <FaXTwitter />
        </a>
        <a href="https://www.facebook.com/abdessamed.seddiki.75/" target="_blank" className="text-gray-600 dark:text-gray-300 text-3xl hover:text-blue-500 transition">
          <FaFacebook />
        </a>
        <a href="https://instagram.com" target="_blank" className="text-gray-600 dark:text-gray-300 text-3xl hover:text-blue-500 transition">
          <FaInstagram />
        </a>
      </motion.div>      
    </section>
  );
}