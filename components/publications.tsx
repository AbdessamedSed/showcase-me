"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaFilePdf, FaGraduationCap } from "react-icons/fa";

interface PublicationCardProps {
  image: string;
  title: string;
  authors?: string;
  journal: string;
  date: string;
  abstract: string;
  fileLink?: string;
  scholarLink?: string;
}

const PublicationCard: React.FC<PublicationCardProps> = ({
  image,
  title,
  authors,
  journal,
  date,
  abstract,
  fileLink,
  scholarLink,
}) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden mb-10"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 bg-gradient-to-r from-yellow-500 to-red-600 p-[5px]">
        {/* Left Section: Image */}
        <div className="w-40 h-40 flex-shrink-0 flex items-center justify-center">
          <img
            src={image}
            alt="Publication Diagram"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Right Section: Publication Info */}
        <div className="bg-white dark:bg-gray-900 rounded-xl p-8 flex-1">
          {/* Title */}
          <h3 className="text-3xl font-bold text-yellow-600 dark:text-red-400">
            {title}
          </h3>

          {/* Authors and Journal */}
          <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">
            <strong>Authors:</strong> {authors}
          </p>
          <p className="italic text-lg text-gray-600 dark:text-gray-400">
            {journal}, {date}
          </p>

          {/* Abstract */}
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            {abstract}
          </p>

          {/* Links */}
          <div className="flex gap-4 mt-6">
            {fileLink && (
              <a
                href={fileLink}
                target="_blank"
                className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition-all"
              >
                <FaFilePdf />
                View PDF
              </a>
            )}
            {scholarLink && (
              <a
                href={scholarLink}
                target="_blank"
                className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-all"
              >
                <FaGraduationCap />
                Google Scholar
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PublicationCard;
