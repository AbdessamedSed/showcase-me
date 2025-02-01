"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaFilePdf } from "react-icons/fa";

interface ExperienceCardProps {
  startDate: string;
  endDate: string;
  title: string;
  institution: string;
  location: string;
  institutionLogo: string;
  workMode: string;
  description: string;
  githubLink?: string;
  pdfFile?: string;
  supervisors?: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  startDate,
  endDate,
  title,
  institution,
  location,
  institutionLogo,
  workMode,
  description,
  githubLink,
  pdfFile,
  supervisors,
}) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden mb-10"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 bg-gradient-to-r from-green-500 to-blue-600 p-[5px]">
        {/* Left Section: Experience Info */}
        <div className="bg-white dark:bg-gray-900 rounded-xl p-8 flex-1">
          {/* Dates and Title */}
          <div className="text-lg text-gray-900 dark:text-gray-200">
            <p className="font-semibold text-xl">{startDate} - {endDate}</p>
            <p className="text-4xl font-bold mt-2 text-green-700 dark:text-blue-400">{title}</p>
          </div>

          {/* Institution and Occupation */}
          <div className="text-md text-gray-700 dark:text-gray-300 mt-4">
            <p className="text-2xl font-semibold">{institution}</p>
            <p className="text-xl font-semibold">{location}</p>
            <p className="mt-2 text-xl font-medium">Work Mode: {workMode}</p>
            {supervisors && (
              <p className="mt-2 text-xl font-medium">
                Supervisors: <span className="text-green-600 dark:text-blue-400">{supervisors}</span>
              </p>
            )}
          </div>

          {/* Description */}
          <div className="mt-6">
            <h3 className="text-2xl font-bold text-green-600 dark:text-blue-400 mb-4">
              Description
            </h3>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              {description}
            </p>
          </div>

          {/* Buttons for GitHub & PDF */}
          <div className="flex gap-4 mt-6">
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                className="flex items-center gap-2 bg-gray-900 text-white dark:bg-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition"
              >
                <FaGithub />
                View Code
              </a>
            )}
            {pdfFile && (
              <a
                href={pdfFile}
                download
                className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500 transition"
              >
                <FaFilePdf />
                Download PDF
              </a>
            )}
          </div>
        </div>

        {/* Right Section: Institution Logo */}
        <div className="w-28 h-28 lg:w-40 lg:h-40 flex-shrink-0">
          <img
            src={institutionLogo}
            alt={`${institution} Logo`}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
