import EducationCard from "@/components/education";
import esiLogo from "@/public/images/education/esi_logo.png";


export default function EducationSection() {
  const educationData = [
    {
      startDate: "Sep 2016",
      endDate: "Oct 2021",
      degree: "Master's Degree in Computer Science",
      institution: "Higher School of Computer Science (formerly known as ESI -ex INI-)",
      institutionLogo: "images/education/esi_logo.png",
      major: "SIQ",
      courses: [
        "Mathematics for Engineers",
        "Computer Networks",
        "Artificial Intelligence",
        "Compilers",
      ],
    },
    {
      startDate: "Sep 2024",
      endDate: "Present",
      degree: "Master's Degree in Applied AI",
      institution: "MIT",
      institutionLogo: "/logos/mit.png", // Add Institution Logo Path
      major: "AI & Machine Learning",
      courses: [
        "Deep Learning",
        "Computer Vision",
        "Natural Language Processing",
        "Advanced AI Algorithms",
      ],
    },
  ];

  return (
    <section className="px-20 py-40 w-full bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100">
      <h2 className="text-6xl text-center mb-12">
        <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent font-bold">
          Education
        </span>
      </h2>

      <div className="flex flex-col gap-10">
        {educationData.map((edu, index) => (
          <EducationCard
            key={index}
            startDate={edu.startDate}
            endDate={edu.endDate}
            degree={edu.degree}
            institution={edu.institution}
            institutionLogo={edu.institutionLogo}
            major={edu.major}
            courses={edu.courses}
          />
        ))}
      </div>
    </section>
  );
}
