"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaFilePdf } from "react-icons/fa";

interface ExperienceCardProps {
  startDate: string;
  endDate: string;
  title: string;
  institution: string;
  institutionLogo: string;
  occupation: string;
  workMode: string;
  description: string;
  githubLink?: string;
  pdfFile?: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  startDate,
  endDate,
  title,
  institution,
  institutionLogo,
  occupation,
  workMode,
  description,
  githubLink,
  pdfFile,
}) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-xl overflow-hidden mb-10"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex flex-col gap-6 bg-gradient-to-r from-green-500 to-blue-600 p-[5px]">
        <div className="bg-white rounded-xl p-8 flex flex-col lg:flex-row items-start lg:items-center gap-6">
          {/* Institution Logo */}
          <img src={institutionLogo} alt={institution} className="h-16 w-16 object-contain" />

          {/* Internship Info */}
          <div className="flex-1">
            <p className="text-gray-900 font-semibold text-xl">{startDate} - {endDate}</p>
            <p className="text-4xl font-bold mt-4">{title}</p>
            <p className="text-2xl text-gray-700 font-semibold">{institution}</p>
            <p className="text-2xl text-gray-600 mt-2">• {workMode}</p>
            <p className="text-xl mt-4 text-gray-800">{description}</p>

            {/* GitHub & PDF Icons */}
            <div className="mt-4 flex gap-4">
              {githubLink && (
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 hover:text-gray-600 transition"
                >
                  <FaGithub className="text-3xl" />
                </a>
              )}
              {pdfFile && (
                <a
                  href={pdfFile}
                  download
                  className="text-red-600 hover:text-red-400 transition"
                >
                  <FaFilePdf className="text-3xl" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
