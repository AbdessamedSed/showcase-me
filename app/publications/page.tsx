import PublicationCard from "@/components/publications";

const publicationsData = [
  {
    image: "images/publications/sample_diagram.png",
    title: "Bias in Federated Learning: Factors, Effects, Mitigations, and Open Issues",
    authors: "Mourad Benmalek, Abdessamed Seddiki",
    journal: "Journal - Ingénierie des Systèmes d'Information",
    date: "December 2024",
    abstract: 
    "Federated learning (FL) enables collaborative model training from decentralized data while preserving privacy. However, biases manifest due to sample selection, population drift, locally biased data, societal issues, algorithmic assumptions, and representation choices. These biases accumulate in FL models, causing unfairness. Tailored detection and mitigation methods are needed. This paper analyzes sources of bias unique to FL, their effects, and specialized mitigation strategies like robust aggregation, cryptographic protocols, and algorithmic debiasing. We categorize techniques and discuss open challenges around miscoordination, privacy constraints, decentralized evaluation, data poisoning attacks, systems heterogeneity, incentive misalignments, personalization tradeoffs, emerging governance needs, and participation. As FL expands into critical domains, ensuring equitable access without ingrained biases is imperative. This study provides a conceptual foundation for future research on developing accurate, robust and fair FL through tailored technical solutions and participatory approaches attuned to the decentralized environment. It aims to motivate further work toward trustworthy and inclusive FL",
    fileLink: "pdf/publications/Bias_in_FL.pdf",
    scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=fr&user=K86_jrkAAAAJ&citation_for_view=K86_jrkAAAAJ:u5HHmVD_uO8C"
  },
  {
    image: "images/publications/another_diagram.png",
    title: "SNN-IoMT: A Novel AI-Driven Model for Intrusion Detection in Internet of Medical Things",
    authors: "Mourad Benmalek, Abdessamed Seddiki, Kamel-Dine Haouam",
    journal: "Journal - Computer Modeling in Engineering & Sciences",
    date: "Under revision",
    abstract: 
    "The Internet of Medical Things (IoMT) connects healthcare devices and sensors to the Internet, driving transformative advancements in healthcare delivery. However, expanding IoMT infrastructures face growing security threats, necessitating robust Intrusion Detection Systems (IDS). Maintaining the confidentiality of patient data is critical in AI-driven healthcare systems, especially when securing interconnected medical devices. This paper introduces SNN-IoMT, an AI-driven IDS framework designed to secure dynamic IoMT environments. Leveraging a stacked deep learning architecture combiningMulti-Layer Perceptron (MLP), Convolutional Neural Networks (CNN), and Long Short-Term Memory (LSTM), the 8 model optimizes data management and integration while ensuring system scalability and interoperability. Trained on the WUSTL-EHMS-2020 and IoT-Healthcare-Security datasets, SNN-IoMT surpasses existing IDS frameworks in accuracy, precision, and detecting novel threats. By addressing the primary challenges in AI-driven healthcare systems, including privacy, reliability, and ethical data management, our approach exemplifies the importance of AI to enhance security and trust in IoMT-enabled healthcare.",
    fileLink: "pdf/publications/snn_iomt.pdf",
    // scholarLink: "https://scholar.google.com/example_link"
  },
  {
    image: "images/publications/another_diagram.png",
    title: "CHEHAB: An Auto-optimizing Compiler for Homomorphic Encryption",
    authors: "Abdessamed Seddiki et al.",
    journal: "Preprint",
    date: "Under submission",
    abstract: 
    "Fully Homomorphic Encryption (FHE) enables meaningful computations directly on encrypted data, removing the need for trust. Despite its transformative potential, FHE is still computationally expensive. Moreover, writing efficient code for FHE is an error-prone, tedious, and time-consuming task that requires cryptographic expertise. A programmer may not be aware of all the possible optimizations that can be applied, while some optimizations may require substantial effort. In this paper, we propose CHEHAB, a scalable compiler that automatically vectorizes scalar code, optimizes circuits, and generates highly efficient code for FHE. CHEHAB takes as input a program expressed in the CHEHAB domain-specific language and uses Term Rewriting Systems (TRS) to simplify it. In addition to the TRS, CHEHAB also offers other features related to the deployment of FHE in practice, namely the selection of rotation keys and encryption parameters. CHEHAB targets two problems: 1) the vectorization of scalar code, and 2) the reduction of instruction latency and noise growth. It solves these two problems using two TRSs. The first leverages equality graph saturation to vectorize the input code (whether it is structured or unstructured), and the second employs a greedy algorithm to reduce the number of instructions in the circuit and its depth. The proposed approach scales better to larger arithmetic circuits compared to related work. We evaluate CHEHAB on a set of kernels and compare it to Coyote, a state-of-the-art vectorizing compiler for holomorphic encryption.We show that CHEHAB generates code with a quality similar to Coyote while still being able to scale to larger circuits.",
    // fileLink: "/papers/eeg_seizure.pdf",
    // scholarLink: "https://scholar.google.com/example_link"
  }
];

export default function PublicationsSection() {
  return (
    <section className="px-20 py-40 w-full bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100">
      <h2 className="text-6xl text-center mb-12">
        <span className="bg-gradient-to-r from-yellow-500 to-red-600 bg-clip-text text-transparent font-bold">
          Publications
        </span>
      </h2>

      <div className="flex flex-col gap-10">
        {publicationsData.map((pub, index) => (
          <PublicationCard
            key={index}
            image={pub.image}
            title={pub.title}
            authors={pub.authors}
            journal={pub.journal}
            date={pub.date}
            abstract={pub.abstract}
            fileLink={pub.fileLink}
            scholarLink={pub.scholarLink}
          />
        ))}
      </div>
    </section>
  );
}
