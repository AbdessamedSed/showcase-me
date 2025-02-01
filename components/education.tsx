"use client";
import React from "react";
import { motion } from "framer-motion";

// Education Card Component
interface EducationCardProps {
  startDate: string;
  endDate: string;
  degree: string;
  institution: string;
  institutionCity: string;
  institutionLogo: string; // Add Institution Logo
  major: string;
  courseDescription: string; // New field for course details
}

const EducationCard: React.FC<EducationCardProps> = ({
  startDate,
  endDate,
  degree,
  institution,
  institutionCity,
  institutionLogo,
  major,
  courseDescription, // Using this instead of listing courses
}) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden mb-10"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 bg-gradient-to-r from-blue-500 to-purple-600 p-[5px]">
        {/* Left Section: Education Info */}
        <div className="bg-white dark:bg-gray-900 rounded-xl p-8 flex-1">
          {/* Dates and Degree */}
          <div className="text-lg text-gray-900 dark:text-gray-200">
            <p className="font-semibold text-xl">{startDate} - {endDate}</p>
            <p className="text-4xl font-bold mt-2 text-blue-700 dark:text-purple-400">{degree}</p>
          </div>

          {/* Institution and Major */}
          <div className="text-md text-gray-700 dark:text-gray-300 mt-4">
            <p className="text-2xl font-semibold">{institution}</p>
            <p className="text-xl font-semibold">{institutionCity}</p>
            <p className="mt-2 text-xl font-medium">Major: {major}</p>
          </div>

          {/* Coursework Description */}
          <div className="mt-6">
            <h3 className="text-2xl font-bold text-blue-600 dark:text-purple-400 mb-4">
              Coursework Summary
            </h3>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              {courseDescription}
            </p>
          </div>
        </div>

        {/* Right Section: Institution Logo */}
        <div className="w-28 h-28 lg:w-40 lg:h-40 flex-shrink-0 flex items-center justify-center">
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

export default EducationCard;
