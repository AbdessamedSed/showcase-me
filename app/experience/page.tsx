import ExperienceCard from "@/components/experience";

export default function ExperienceSection() {
    const experienceData = [
        {
          startDate: "June 2023",
          endDate: "Sep 2023",
          title: "AI Research Intern",
          institution: "Google AI",
          institutionLogo: "/logos/google.png",
          occupation: "Research Intern",
          workMode: "Remote",
          description:
            "Developed machine learning models for NLP tasks using deep learning and reinforcement learning techniques.",
          githubLink: "https://github.com/myproject", // GitHub Link
        },
        {
          startDate: "Jan 2022",
          endDate: "May 2022",
          title: "Software Engineering Intern",
          institution: "Microsoft",
          institutionLogo: "/logos/microsoft.png",
          occupation: "Software Intern",
          workMode: "On-site",
          description:
            "Worked on backend services and optimized cloud-based APIs, improving response time by 30%.",
          pdfFile: "/documents/internship_report.pdf", // PDF File
        },
      ];
      

  return (
    <section className="px-60 py-40 w-full bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100">
      <h2 className="text-6xl text-center mb-12">
        <span className="bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent font-bold">
          Experience
        </span>
      </h2>

      <div className="flex flex-col gap-10">
        {experienceData.map((exp, index) => (
          <ExperienceCard
            key={index}
            startDate={exp.startDate}
            endDate={exp.endDate}
            title={exp.title}
            institution={exp.institution}
            institutionLogo={exp.institutionLogo}
            occupation={exp.occupation}
            workMode={exp.workMode}
            description={exp.description}
          />
        ))}
      </div>
    </section>
  );
}
