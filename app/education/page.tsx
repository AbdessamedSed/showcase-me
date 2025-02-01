import EducationCard from "@/components/education";
import esiLogo from "@/public/images/education/esi_logo.png";


export default function EducationSection() {
  const educationData = [
    {
      startDate: "Sep 2020",
      endDate: "now",
      degree: "Engineering Degree in Computer Science",
      institution: "Higher School of Computer Science (Ecole nationale Supérieure d'Informatique)",
      institutionCity: "Algiers, Algeria",
      institutionLogo: "images/education/esi_logo.png",
      major: "Computer Systems (Systèmes Informatiques SIQ)",
      courseDescription: "Throughout my studies, I specialized in advanced topics across multiple domains. My coursework covered Mathematics, Probabilities, and Stochastic Processes, providing a strong foundation in theoretical and applied problem-solving. I explored Algorithms and Computational Complexity to design efficient solutions, along with Computer Architectures for performance optimization. Additionally, I gained expertise in Advanced Networking and Security, IoT, and Wireless Communication. My studies also included Compiler Design, Software Engineering, and System Architectures, enabling me to develop robust and scalable software. Furthermore, I learned about Project Management methodologies to handle complex software development lifecycles."
    },
    {
      startDate: "Sep 2017",
      endDate: "Sep 2020",
      degree: "Baccaulareate Degree",
      institution: "Abdallah Benaissa High School",
      institutionCity: "Hennaya, Tlemcen",
      institutionLogo: "images/education/high_school_logo.png",
      major: "Mathematics & Electrical Engineering",
      courseDescription: "During my high school studies, I developed a strong foundation in both theoretical and applied sciences. My coursework included Mathematics, with a focus on Geometry and Probabilities. In Physics, I explored classical mechanics and relativiy, basics of chemical reactions and material properties. I also delved into Electrical Engineering, where I learned about Electronics, Microcontrollers, and Memory Basics, gaining hands-on experience in designing and understanding electronic systems. Additionally, I explored Energy Engineering, focusing on sustainable energy solutions and their applications",
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
            institutionCity = {edu.institutionCity}
            institutionLogo={edu.institutionLogo}
            major={edu.major}
            courseDescription={edu.courseDescription}
          />
        ))}
      </div>
    </section>
  );
}
