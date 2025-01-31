"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import authorImage from "@/public/images/authors/personal_image.png";

export default function Intro() {
  return (
    <section className="flex flex-col-reverse items-center gap-10 px-6 py-24 md:flex-row md:items-center md:gap-16">
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
            Ecole nationale Supérieure f'Informatique (ESI Algiers)
          </span>
          , deeply passionate about research, problem-solving, and discovering
          new ideas. My interests span{" "}
          <span className="font-medium text-blue-600 dark:text-blue-400">
            wireless communication, security, compiler design, and applied AI
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
    </section>
  );
}
