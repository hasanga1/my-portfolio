import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export const personalDetails = {
  name: "Hasanga Ranasinghe",
  role: "Software & Machine Learning Engineer",
  about: "Final year Computer Science and Engineering student at the University of Moratuwa specializing in Data Science. I build cloud-native solutions using Java/Spring Boot and apply Machine Learning in real-world scenarios. I also bring strong creative skills in graphic design and video editing to my technical work.",
  email: "dinithhasangare@gmail.com",
  phone: "+94 70 168 4781",
  socials: [
    { label: "GitHub", url: "https://github.com/hasanga1", icon: Github },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/hasanga-ranasinghe", icon: Linkedin },
    { label: "Email", url: "mailto:dinithhasangare@gmail.com", icon: Mail },
  ],
};

export const education = {
  school: "University of Moratuwa",
  degree: "BSc Eng Hons, Computer Science and Engineering",
  year: "2022 - Present",
};

export const experiences = [
  {
    company: "Tortil Inc",
    role: "Machine Learning Engineer & Creative Designer",
    year: "Aug 2025 - Present",
    description: "Building ML models to analyse movie scripts and estimate budget earnings. Developing a Movie Scene Scheduler mobile app. Designing movie posters and marketing assets.",
    tech: ["ML", "Mobile Dev", "Graphic Design"],
  },
  {
    company: "WSO2 LLC",
    role: "Software Engineering Intern",
    year: "Jan 2025 - Jul 2025",
    description: "Developed the OPD Claims App using Ballerina & Asgardeo. Deployed CC Expenses App and built security automation tools including an ML-based phishing detector.",
    tech: ["Ballerina", "Asgardeo", "Choreo", "ML"],
  },
];

export const projects = [
  {
    title: "Automated Patch Backporting",
    year: "Jul 2025 - Present",
    description: "Automating Java patch backporting using a multi-agent LLM pipeline (LangGraph) and program-analysis techniques. Includes a Spring Boot backend and VS Code extension.",
    tech: ["LangGraph", "Spring Boot", "Python", "TypeScript"],
    link: "#",
  },
  {
    title: "Cloud Deployment Platform (PaaS)",
    year: "Oct 2025 - Dec 2025",
    description: "Architected a multi-tenant PaaS for 'Code to Cloud' lifecycle. Built a custom Container Orchestration Engine, Event-Driven Architecture (Kafka), and Time-Travel deployment system.",
    tech: ["Spring Boot", "Kafka", "Docker", "Next.js"],
    link: "#",
  },
  {
    title: "WSO2 New OPD Claims App",
    year: "Jan 2025 - Jul 2025",
    description: "Streamlined medical claims with secure receipt uploads and automated approval workflows using Ballerina backend and React frontend.",
    tech: ["Ballerina", "React", "MySQL", "Asgardeo"],
    link: "#",
  },
  {
    title: "LLM Tutoring Chatbot",
    year: "Jul 2024 - Nov 2024",
    description: "Context-aware chatbot using RAG architecture for guided problem-solving. Features personalized learning paths and multi-turn reasoning.",
    tech: ["LangChain", "Django", "GPT-4", "React"],
    link: "#",
  },
  {
    title: "Neural Network from Scratch",
    year: "Oct 2024 - Nov 2024",
    description: "Built a neural network using only NumPy/Pandas. Implemented backpropagation, optimizers (Adam, RMSProp), and custom activation functions.",
    tech: ["Python", "NumPy", "OpenCV"],
    link: "#",
  },
];