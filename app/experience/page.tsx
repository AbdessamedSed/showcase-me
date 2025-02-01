import ExperienceCard from "@/components/experience";

export default function ExperienceSection() {
    const experienceData = [
        {
          startDate: "July 2024",
          endDate: "now",
          title: "Research Intern - Compiler Optimization For Fully Homomorphic Encryption",
          institution: "New York University Abu Dhabi", 
          location: "Abu Dhabi - Émirats arabes unis",
          institutionLogo: "images/experience/nyuad.png",
          workMode: "Hybrid",
          description: 
          "The increasing adoption of cloud services by highly regulated industries like banking, healthcare, and government has heightened the demand for secure computing solutions to protect sensitive data. Fully Homomorphic Encryption (FHE) is a transformative technology that enables computations on encrypted data without decryption, reducing exposure risks. However, developing FHE applications is complex, requiring deep cryptographic expertise for tasks like code optimization, message encoding, and ciphertext management. Compilers like CHEHAB aim to simplify this process by automating optimizations and cryptographic tasks, making FHE more accessible. This project focuses on enhancing CHEHAB’s optimization capabilities, particularly its scalability for large programs, to improve the performance and usability of FHE applications across various use cases." ,
          githubLink: "https://github.com/myproject", // GitHub Link
          supervisors: "Dr. Riyadh Baghdadi, Dr. Eduardo Chielle",
        },
        {
            startDate: "March 2024",
            endDate: "Jul 2024",
            title: "Academic Project - Designing and Implementing a Robust SIEM Solution for Enhanced Cybersecurity",
            institution: "Ecole nationale Supérieure d'Informatique ESI",
            location: "Algiers, Algeria",
            institutionLogo: "images/experience/esi_logo.png",
            workMode: "On-site",
            description:
            "This project involved the design and implementation of a comprehensive Security Information and Event Management (SIEM) solution to enhance cybersecurity in a networked environment. Key components included deploying Wazuh as the SIEM platform, integrating Suricata for real-time intrusion detection, and configuring Pfsense as a firewall for traffic filtering and logging. The infrastructure featured multiple web servers with Nginx for load balancing, ensuring high availability and performance. The solution provided centralized monitoring, threat detection, and incident response capabilities, leveraging open-source tools to maintain cost-effectiveness. The project demonstrated the ability to secure complex networks, optimize system performance, and ensure compliance with cybersecurity best practices. It also highlighted skills in network architecture, SIEM configuration, and threat analysis.",
            pdfFile: "/documents/internship_report.pdf", // PDF File
        },
        {
          startDate: "May 2024",
          endDate: "Jul 2024",
          title: "Research Intern - Intrusion Detection System for Healthcare 4.0 Infrastructure",
          institution: "Al Yamamah University",
          location: "Riyadh, Saudi Arabia",
          institutionLogo: "images/experience/alyamamah.png",
          workMode: "Remote",
          description:
            "In this project, I applied machine learning (ML) and deep learning (DL) techniques to design and optimize Intrusion Detection Systems (IDS) for Internet of Medical Things (IoMT) environments. The IoMT ecosystem, which includes connected medical devices such as pacemakers, insulin pumps, and wearable health monitors, is highly vulnerable to cyberattacks due to the sensitive nature of the data it handles and the limited computational resources of the devices. My work focused on developing a robust, lightweight, and efficient IDS capable of detecting and mitigating cyber threats in real-time while ensuring minimal impact on device performance.",
          pdfFile: "/documents/internship_report.pdf", // PDF File
          supervisors: "Dr. Mourad Benmalek",
        },
        {
            startDate: "March 2023",
            endDate: "Jul 2023",
            title: "Academic Project - Backend Development for Tourism Website in Algeria Using Django",
            institution: "Ecole nationale Supérieure d'Informatique ESI",
            location: "Algiers, Algeria",
            institutionLogo: "images/experience/esi_logo.png",
            workMode: "On-site",
            description:
            "This project focused on developing the backend of a tourism website for Algeria using Django, a high-level Python web framework. The platform was designed to efficiently manage tourist destinations, user interactions, and dynamic content to promote tourism in the region. Key features included user authentication, destination management, and real-time content updates. The backend supported seamless integration with a frontend to provide an engaging user experience. The project demonstrated expertise in Django, database management, and RESTful API design. It also highlighted the ability to deliver scalable and maintainable web solutions tailored to specific industry needs.",
            pdfFile: "/documents/internship_report.pdf", // PDF File
            supervisors: "Dr. Mourad Benmalek",
          },
        ];
      
      

  return (
    <section className="px-20 py-40 w-full bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100">
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
            location={exp.location}
            institutionLogo={exp.institutionLogo}
            workMode={exp.workMode}
            description={exp.description}
            supervisors={exp.supervisors}
          />
        ))}
      </div>
    </section>
  );
}
