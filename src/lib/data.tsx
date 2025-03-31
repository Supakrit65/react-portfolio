import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import sotaProjectImg from "../assets/sota-project.png";
import wongnungProjectImg from "../assets/wongnung-project.png";
import pacmanProjectImg from "../assets/pacman-project.png";
import netviserProjectImg from "../assets/netviser-project.png";

// ---- Types ----

export interface NavLink {
  name: string;
  hash: string;
}

export interface Experience {
  title: string;
  location: string;
  description: string[];
  icon: React.ReactElement;
  date: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  sourceURL: string;
  appURL?: string;
}

export interface Skill {
  skillText: string;
  skillUrl: string;
}

// ---- Data ----

export const links: NavLink[] = [
  { name: "Home", hash: "#home" },
  { name: "Education", hash: "#education" },
  { name: "Projects", hash: "#projects" },
  { name: "Skills", hash: "#skills" },
  { name: "Experience", hash: "#experience" },
  { name: "Contact", hash: "#contact" },
];

export const experiencesData: Experience[] = [
  {
    title: "Software Engineer Intern",
    location: "Corporate Risk Office, Charoen Pokphand Group",
    description: [
      "Developed a POC demand forecasting machine learning model for SKU products, optimizing inventory planning and reducing stock shortages.",
      "Built a risk tracker dashboard utilizing various visualization techniques to enhance data insights, integrating React, TypeScript, and AWS services.",
    ],
    icon: <CgWorkAlt />,
    date: "May 2023 - Sep 2023",
  },
  {
    title: "Undergraduate Researcher Intern",
    location: "Nara Institute of Science and Technology, Japan",
    description: [
      "Researched public sentiment on mask-wearing using NLP, fine-tuning GEMMA 2 and EmoLLama-chat-7b for stance detection and emotion analysis.",
    ],
    icon: <CgWorkAlt />,
    date: "May 2024 - Aug 2024",
  },
  {
    title: "Software Engineer Intern",
    location: "Corporate Risk Office, Charoen Pokphand Group",
    description: [
      "Developed a Risk-Based Assessment & Management Dashboard using React, AWS Amplify, and AWS Cognito, enhancing data visualization and user interaction.",
      "Implemented zero-downtime backend deployment using AWS ECS, AWS CodeDeploy, and Terraform, ensuring seamless updates and system reliability.",
      "Worked with the Data Engineering team to develop a data pipeline for generating weekly sales forecasts, integrating MLflow for model tracking and performance monitoring.",
    ],
    icon: <CgWorkAlt />,
    date: "Aug 2024 - Nov 2024",
  },
  {
    title: "Software Engineer Intern",
    location: "Corporate Risk Office, Charoen Pokphand Group",
    description: [
      "Enhanced Risk-Based Assessment & Management Dashboard by implementing Cognito MFA features, including TOTP and SMS authentication for improved security.",
      "Automated end-to-end testing using Playwright, ensuring reliability and reducing manual testing efforts.",
    ],
    icon: <CgWorkAlt />,
    date: "Dec 2024 - Present",
  },
];

export const projectsData: Project[] = [
  {
    title: "NetViser",
    description:
      "Developed a web tool for detects and visualizes 6+ network attacks (e.g., DDoS, FTP) using XGBoost with XAI transparency (SHAP/Gemini) to explain model decisions.",
    tags: [
      "FastAPI",
      "Next.js",
      "ECharts",
      "Google Cloud Storage",
      "Docker",
      "XGBoost",
      "Redis",
      "Google Cloud Run",
    ],
    imageUrl: netviserProjectImg,
    sourceURL: "https://github.com/NetViser/NetViser-App",
    appURL: "https://netviser.tech/",
  },
  {
    title: "SoTA",
    description:
      "SoTA is a project that simulates how the tech behind IOC work in barebones. The service offers a data-centric API with details on sports, and medals, sets a standard for partner service integration.",
    tags: ["React", "MongoDB", "Tailwind", "FastAPI", "Docker"],
    imageUrl: sotaProjectImg,
    sourceURL: "https://github.com/SPaM-Skill-Issue/sota",
  },
  {
    title: "WongNung",
    description:
      "WongNung is a community-driven review aggregation web application for films. My primary roles was Backend development.",
    tags: ["Django", "PostgreSQL", "Tailwind", "Docker", "Nginx"],
    imageUrl: wongnungProjectImg,
    sourceURL: "https://github.com/WongNung/WongNung",
  },
  {
    title: "Pacman",
    description:
      "Pac-Man, the classic arcade game, incorporates design patterns like Strategy, State, and Flyweight, alongside a breadth-first search-based ghost algorithm.",
    tags: ["Java", "Java Swing", "Design Patterns"],
    imageUrl: pacmanProjectImg,
    sourceURL: "https://github.com/Halcyon905/pacman_ssd",
  },
];

export const skillsData: Skill[] = [
  { skillText: "Python", skillUrl: "/skill-images/python.svg" },
  { skillText: "Typescript", skillUrl: "/skill-images/typescript-icon.svg" },
  { skillText: "React", skillUrl: "/skill-images/react.svg" },
  { skillText: "Next.js", skillUrl: "/skill-images/nextjs-icon.svg" },
  { skillText: "Django", skillUrl: "/skill-images/django-icon.svg" },
  { skillText: "FastAPI", skillUrl: "/skill-images/fastapi-icon.svg" },
  { skillText: "PostGreSQL", skillUrl: "/skill-images/postgresql.svg" },
  { skillText: "MongoDB", skillUrl: "/skill-images/mongodb.svg" },
  { skillText: "Redis", skillUrl: "/skill-images/redis.svg" },
  { skillText: "Docker", skillUrl: "/skill-images/docker-icon.svg" },
  { skillText: "Terraform", skillUrl: "/skill-images/terraform-icon.svg" },
  { skillText: "AWS", skillUrl: "/skill-images/aws.svg" },
  { skillText: "AWS Lambda", skillUrl: "/skill-images/aws-lambda.svg" },
  { skillText: "AWS Cognito", skillUrl: "/skill-images/aws-cognito.svg" },
  { skillText: "AWS ECS", skillUrl: "/skill-images/aws-ecs.svg" },
  { skillText: "AWS S3", skillUrl: "/skill-images/aws-s3.svg" },
  { skillText: "GCP", skillUrl: "/skill-images/google-cloud.svg" },
  {
    skillText: "Google Cloud Run",
    skillUrl: "/skill-images/google-cloud-run.svg",
  },
  { skillText: "Playwright", skillUrl: "/skill-images/playwright.svg" },
];

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  url: string;
  skills: string[];
  bgClass: string;
}

export const certifications: Certification[] = [
  {
    title: "Deep Learning Specialization",
    issuer: "DeepLearning.AI",
    date: "Oct 2023",
    url: "https://coursera.org/share/bd4c5f07642614dade851704d232f0fe",
    skills: [
      "Deep Neural Networks",
      "TensorFlow",
      "CNN",
      "RNN",
      "Hyperparameter Tuning",
      "Regularization",
      "Optimization",
      "Neural Style Transfer",
      "NLP",
      "Transformers",
    ],
    bgClass: "bg-nord-3/50",
  },
  {
    title: "Data Engineering Specialization",
    issuer: "DeepLearning.AI & AWS",
    date: "Oct 2024",
    url: "https://coursera.org/share/b37eec2c59dcd05fe71453c4873b61b6",
    skills: [
      "Data Engineering",
      "AWS Cloud",
      "Data Ingestion",
      "Data Storage",
      "Transformation",
      "Data Modeling",
      "DataOps",
      "Warehousing",
      "Architecture",
      "Orchestration",
    ],
    bgClass: "bg-nord-2/50",
  },
];
