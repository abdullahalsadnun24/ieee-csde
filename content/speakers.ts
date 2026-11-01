export type Speaker = {
  name: string;
  honorific: string;
  affiliation: string;
  title: string;
  image: string;
  profileUrl?: string;
  bio: string;
  abstract: string;
  badges?: string[];
};

export const speakers: Speaker[] = [
  {
    name: "Yang Xiang",
    honorific: "Professor",
    affiliation: "Monash University",
    title: "AI Across the Lifecycle: Security, Safety, and Accountability",
    image: "/images/keynote_speakers/yang-xiang.jpg",
    profileUrl: "https://www.linkedin.com/in/yang-xiang-au/",
    badges: ["IEEE Fellow"],
    bio: "Professor Yang Xiang is currently a full professor at Faculty of Information Technology, Monash University, Australia. His research interests include the broad area of Cybersecurity and AI, which covers the security and algorithms of software, systems, networks, and applications to solve the security, privacy, reliability, responsiveness, and robustness challenges. In the past 20+ years, he has published more than 300 research papers in conferences and journals, such as ACM CCS, IEEE S&P, Usenix Security, NDSS, IEEE TDSC, and IEEE TIFS. He is the Editor-in-Chief of the SpringerBriefs in Information Security and Cryptography. He is serving as the Associate Editor of the ACM Computing Surveys. He served as the Associate Editor of IEEE Transactions on Dependable and Secure Computing, IEEE Internet of Things Journal, IEEE Transactions on Computers, and IEEE Transactions on Parallel and Distributed Systems. He is a current member of College of Experts (CoE) of the Australian Research Council (ARC). He is a Fellow of the IEEE.",
    abstract:
      "The rapid evolution of AI has shifted systems from passive models to agentic AI capable of autonomous reasoning, code generation, and interaction with real-world environments. While these advances enable powerful applications, they fundamentally challenge existing assumptions in security, software engineering, and governance. This talk synthesises recent research that reframes AI security as a cross-layer lifecycle problem, spanning learning models, LLM-enabled software, autonomous agents, and cyber-physical systems. These studies are organised around three connected questions: what sensitive information models and retrieval-augmented systems can expose; how model behaviour and security mechanisms can be manipulated, and how such manipulation can be detected; and how data and creative assets can be protected and their use audited. As AI systems increasingly operate in IoT and safety-critical environments, this talk argues for trustworthiness by design, integrating agent-aware threat models, continuous auditing, and robust learning foundations across the AI lifecycle, and aims to inspire the next generation of research in trustworthy and resilient AI.",
  },
  {
    name: "Saidur Rahman",
    honorific: "Professor",
    affiliation: "Bangladesh University of Engineering and Technology",
    title: "Relating Planar Graph Drawings to Planar Satisfiability Problems",
    image: "/images/keynote_speakers/saidur-rahman.jpg",
    profileUrl: "https://en.wikipedia.org/wiki/Saidur_Rahman_(computer_scientist)",
    bio: "Dr. Md. Saidur Rahman, a professor of Bangladesh University of Engineering and Technology (BUET) and a fellow of Bangladesh Academy of Sciences, is a renowned researcher in the field of graph algorithms and is regarded as an authority on graph drawing algorithms. He has more than 140 publications on algorithms and graph theory in internationally reputed journals and conferences. His graduate textbook “Planar Graph Drawing,” written with renowned computer scientist Professor Takao Nishizeki, is considered as the most valuable pioneering work in planar graph drawings. He has co-edited five volumes of LNCS series of Springer and served as guest editors for several reputed journals. Currently he is in the editorial board of several international Journals. His undergraduate textbook “Basic Graph Theory” which has been published by Springer has received around 75,000 downloads within eight years. Professor Rahman is leading an enthusiastic research group in Graph Drawing and Information Visualization Laboratory of CSE Department, BUET. He is a recipient of “BAS Gold Medal 2003” in the junior group, “UGC Award 2004” and the prestigious “Funai Information Technology Award for Young Researchers 2004.” Prof. Rahman is a founder of the International Conference and Workshops on Algorithms and Computation (WALCOM) which has appeared as a very prestigious international venue of theoretical computer science over the years. He is an ACM Distinguished Speaker and named as 2024 ACM Distinguished Member.",
    abstract:
      "Graph Drawing is one of the famous fields of graph theory that is vastly used for information visualization. The satisfiability (SAT) problem is the first NP-complete problem in the theory of computation. A SAT graph is a graph representation of an instance of a satisfiability problem. Many satisfiability problems, which are NP-hard in general, become polynomial-time solvable when the SAT graph is restricted to satisfy some graph properties. Several researchers attempt to narrow down the boundary between the NP-hardness and polynomial-time solvability of various satisfiability problems. Furthermore, many restricted classes of SATs may exist that are NP-hard but not proven yet. In this talk, we examine planar satisfiability problems and leverage planar graph drawing algorithms to improve our understanding of these problems. There exist many graph drawing algorithms to check whether a planar graph admits a drawing that satisfies certain drawing aesthetics. We show how the existing graph drawing knowledge could be used to deal with SAT problems.",
  },
  {
    name: "Eui-Nam Huh",
    honorific: "Professor",
    affiliation: "Kyung Hee University",
    title: "Intelliware : Collaborated Agents as a Service",
    image: "/images/keynote_speakers/eui-nam-huh.png",
    profileUrl: "https://khu.elsevierpure.com/en/persons/eui-nam-huh/",
    bio: "Eui-Nam Huh received his PhD from the Ohio University in March, 2002 on the agent-based control system to interact with dynamic environments in real-time, especially for the defense system. He is now working on the development of AI agent on cloud continuum environments including IoT and Industry systems. He is a director of ICT Cloud Continuum Research Center supported by MSIT (Ministry of Science and ICT), Korea, under the ITRC (Information Technology Research Center) support program supervised by the IITP (Institute for Information & Communications Technology Planning & Evaluation). This center focuses on AI related technology to support large scale AI services including Edge AI. His current research interests include AI agents, AI for Cloud, Cloud for AI and AI for Network.",
    abstract:
      "AI is now on users hand not in data centers. It becomes a personal & smart & extra brain rather than the well defined automated function in machine. To deliver AI technology to industry using SW embedded agents, this talk covers from fundamental overview, key characteristics, types, structures of agentic AI, and collaboration adapted agents to real-world applications delivered as a service. Finally technical challenges and solutions for collaborated agents.",
  },
  {
    name: "Wong Limsoon",
    honorific: "Professor",
    affiliation: "National University of Singapore",
    title: "Explanatory Model Awareness in the Age of AI",
    image: "/images/keynote_speakers/wong-limsoon.jpg",
    profileUrl: "https://www.comp.nus.edu.sg/cs/people/wongls/",
    bio: "Wong Limsoon is Kwan-Im-Thong-Hood-Cho-Temple Professor in Computing and Professor (by courtesy) in Medicine at the National University of Singapore. His research spans knowledge discovery, computational biology, and database theory, with a focus on rigorous, interpretable, and justifiable methods. He is a Fellow of the ACM and the Singapore National Academy of Science.",
    abstract:
      "Using examples from several domains, I will show that AI fails again and again in two distinct ways. First, AI can see its model of the world, but not the world itself. It therefore has no independent way to recognize that its model has become misaligned with reality. It may continue to reason confidently from patterns that no longer apply. Second, even in purely mathematical problems, where no external reality is involved, AI can fail to recognize that its own representation or reasoning process is inadequate. Much scientific and computational reasoning that goes wrong takes place within an explanatory model. We formulate hypotheses, derive consequences, and test predictions. Yet it is easy to overlook whether the model itself still matches the phenomenon. The ability to recognise such a mismatch without external prompting is what I call explanatory model awareness. Explanatory model awareness is a largely overlooked dimension of expertise, and an increasingly important one as AI takes on more of our reasoning.",
  },
  {
    name: "Shams Rahman",
    honorific: "Professor",
    affiliation: "East West University",
    title: "Artificial Intelligence and Sustainability Disclosure - A Mere Compliance Exercise or Strategy for Impact?",
    image: "/images/keynote_speakers/shams-rahman.jpg",
    profileUrl: "https://www.linkedin.com/in/shams-rahman1955/",
    bio: "Professor Shams Rahman is the Vice Chancellor of East West University, Dhaka, Bangladesh. He is an internationally recognized academic specializing in supply chain management, operations research, and sustainable procurement. With extensive experience in teaching, research, and academic leadership, he has published over 250 research papers and supervised numerous PhD candidates. He earned his PhD in Operations Research from the University of Exeter, United Kingdom, and has held academic positions at several leading Australian universities.",
    abstract:
      "The presentation deep-dives into the question: “Does sustainability disclosure function primarily as a compliance exercise, or as a genuine driver of change?” It argues that the value of disclosure lies not in the act of reporting itself, but in how transparent, credible, and actionable that reporting is. Drawing on four real-world contexts, including mining companies in Australia, global logistics firms, OECD manufacturing firms, and the RMG sector in Bangladesh, this presentation examines how AI is reshaping sustainability and whether it can help move reporting beyond compliance toward meaningful sustainability impact and organizational performance.",
  },
];
