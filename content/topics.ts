export type ResearchTrack = {
  id: string;
  kicker: string;
  title: string;
  items: string[];
};

export const researchTracks: ResearchTrack[] = [
  {
    id: "computer-science",
    kicker: "Track 01",
    title: "Computer Science",
    items: [
      "Biomedical Engineering — Theory and Practice",
      "Blockchain: Theory, Application and Security",
      "Computer Vision — Algorithms and Applications",
      "Computer human interaction",
      "Cloud Computing",
      "E-Health",
      "E-Learning",
      "Edge/Fog Computing",
      "Green Computing",
      "Information Systems and Security",
      "Internet of Things",
      "Multimedia",
      "Mechatronics and Robotics",
      "Networking Protocol and Security",
      "Privacy, Identity and Trust in E-Society",
      "Quantum Computing",
      "Quantum Cryptography",
      "Spatial Data Engineering",
    ],
  },
  {
    id: "data-science",
    kicker: "Track 02",
    title: "Data Science",
    items: [
      "Artificial Intelligence",
      "Application of Data Science in Business, Education, Engineering, Health, Social Sciences and Environment",
      "Autonomous Machines and Intelligent Automation",
      "Big Data Platform: Hadoop, Spark, H2O and others",
      "Data-centric Audit and Protection Tools",
      "Data Pre-Processing: Data Scraping, Data Fusion & Integration, Data Masking and Stream Data",
      "Data Visualization: Collaborative, Co-Located and Distributed",
      "Deep Learning and Convolutional Neural Networks",
      "Machine Learning Algorithms: Supervised and Unsupervised Theory and Applications",
      "Natural Language Processing",
      "NoSQL Theory and Practice",
      "Optimization Theory and Practice",
      "Predictive Modelling and Analytics",
      "Quantum Machine Learning Algorithms",
    ],
  },
];
