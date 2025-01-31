"use client";
import React from "react";
import { motion } from "framer-motion";

// Education Card Component
interface EducationCardProps {
  startDate: string;
  endDate: string;
  degree: string;
  institution: string;
  major: string;
  courses: string[];
}

const EducationCard: React.FC<EducationCardProps> = ({
  startDate,
  endDate,
  degree,
  institution,
  major,
  courses,
}) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-xl overflow-hidden mb-10"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex flex-col gap-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-[2px]">
        <div className="bg-white rounded-xl p-8">
          {/* Dates and Degree */}
          <div className="text-lg text-gray-900">
            <p className="font-semibold text-xl">{startDate} - {endDate}</p>
            <p className="text-2xl font-bold mt-2">{degree}</p>
          </div>

          {/* Institution and Major */}
          <div className="text-md text-gray-700">
            <p className="text-lg font-semibold">{institution}</p>
            <p className="mt-2 font-medium">Major: {major}</p>
          </div>

          {/* Relevant Courses */}
          <div className="mt-4">
            <strong className="text-lg text-gray-900">Relevant Courses:</strong>
            <ul className="list-disc pl-6 mt-2 text-gray-700">
              {courses.map((course, index) => (
                <li key={index} className="text-sm">{course}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EducationCard;
