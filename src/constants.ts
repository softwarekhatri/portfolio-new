import { Experience, Project, Blog, Skill } from "./types";

export const PERSON_DETAILS = {
  name: "Ankit Khatri",
  role: "Senior Software AI Engineer",
  location: "New Delhi, India",
  tagline:
    "Building scalable backend systems, AI-powered products, and high-performance distributed architectures.",
  bio: "I'm an expert backend AI engineer specializing in large-scale distributed systems, microservices architecture, and AI-powered platforms. Strong expertise in LLMs, Agentic framework, Automated AI driven flow, Java, Spring Boot, Kafka, and high-performance backend services. Passionate about solving complex engineering problems and building scalable products.",
  email: "ankit.kumar971@outlook.com", // Placeholder if not provided
  linkedin: "https://linkedin.com/in/ankitkhatriofficial/",
  leetcode: "https://leetcode.com/u/ankitkhatriofficial/",
  portfolio: "https://ankitkhatri.vercel.app/",
};

export const EXPERIENCES: Experience[] = [
  {
    role: "Senior Software Backend Engineer",
    company: "Birdeye",
    location: "Gurgaon",
    duration: "Dec 2024 – Present",
    responsibilities: [
      "Leading high-impact backend projects in the Listings team",
      "Designing scalable distributed systems",
      "Improving system performance and reliability",
      "Mentoring engineers and contributing to architectural decisions",
      "Building microservices using Spring Boot, Redis, MongoDB, Elasticsearch",
    ],
  },
  {
    role: "Software Backend Engineer",
    company: "Birdeye",
    duration: "Jan 2022 – Dec 2024",
    responsibilities: [
      "Worked on Payments systems and backend infrastructure",
      "Built scalable APIs and backend services",
    ],
    technologies: [
      "Spring Boot",
      "Redis",
      "MongoDB",
      "Elasticsearch",
      "AWS",
      "Apache Kafka",
      "Apache NiFi",
    ],
  },
  {
    role: "Backend Developer",
    company: "Phantivo (Khatri Software)",
    duration: "Feb 2021 – Jan 2022",
    responsibilities: [
      "Developed products for 8+ startups",
      "Built dashboards, CRM systems, and backend architectures",
      "Worked closely with founders on product growth and architecture",
    ],
  },
  {
    role: "Software Developer",
    company: "Monkhood (Noida)",
    duration: "Mar 2021 – Jun 2021",
    responsibilities: [
      "Built scalable full-stack platform for PG/flat booking",
      "Implemented admin dashboard",
      "Added security features like Google reCAPTCHA and SQL injection protection",
    ],
  },
  {
    role: "Backend Developer",
    company: "Oyebusy Pvt Ltd (Gurgaon)",
    duration: "Aug 2020 – Dec 2020",
    responsibilities: [
      "Developed and documented 35+ REST APIs",
      "Implemented security and middleware layers",
      "Worked with AWS, MongoDB, Hibernate, Spring Boot",
    ],
  },
];

export const SKILLS: Skill[] = [
  {
    name: "Large Language Models (LLMs)",
    level: 96,
    category: "Artificial Intelligence",
  },
  {
    name: "Ai Agents & Tooling",
    level: 90,
    category: "Artificial Intelligence",
  },
  {
    name: "LLM Evaluation & Benchmarking",
    level: 100,
    category: "Artificial Intelligence",
  },
  {
    name: "Prompt Engineering",
    level: 95,
    category: "Artificial Intelligence",
  },
  {
    name: "Vector & Semantic Search",
    level: 85,
    category: "Artificial Intelligence",
  },
  { name: "Spring Boot", level: 90, category: "Backend" },
  { name: "Java", level: 98, category: "Backend" },
  { name: "System Design", level: 90, category: "Backend" },
  { name: "Microservices", level: 95, category: "Backend" },
  { name: "Distributed Systems", level: 80, category: "Backend" },

  { name: "Apache Kafka", level: 90, category: "Data Infrastructure" },
  { name: "MongoDB", level: 96, category: "Data Infrastructure" },
  { name: "MySQL", level: 90, category: "Data Infrastructure" },
  { name: "Redis", level: 95, category: "Data Infrastructure" },
  { name: "Elasticsearch", level: 92, category: "Data Infrastructure" },
  { name: "Apache NiFi", level: 88, category: "Data Infrastructure" },

  { name: "High Performance APIs", level: 95, category: "Architecture" },
  { name: "Scalable System Design", level: 97, category: "Architecture" },
  { name: "Concurrency & Multithreading", level: 90, category: "Architecture" },
  { name: "Fault Tolerance & Resilience", level: 95, category: "Architecture" },
  { name: "Observability & Monitoring", level: 92, category: "Architecture" },

  { name: "Docker", level: 85, category: "Cloud" },
  { name: "Kubernetes", level: 80, category: "Cloud" },
  { name: "AWS", level: 82, category: "Cloud" },
  { name: "GCP", level: 75, category: "Cloud" },
];

export const PROJECTS: Project[] = [
  {
    title: "eCommerce Website",
    description: "High-performance scalable eCommerce platform.",
    longDescription:
      "A full-featured eCommerce solution built with microservices architecture, focusing on high availability and low latency. Implemented advanced caching strategies and asynchronous message processing.",
    tags: ["Spring Boot", "Microservices", "Kafka", "Redis"],
    image: "https://picsum.photos/seed/ecommerce/800/600",
  },
  {
    title: "Monkhood Platform",
    description: "Scalable full-stack platform for PG/flat booking.",
    longDescription:
      "A comprehensive platform for managing property listings and bookings. Features include a robust admin dashboard, secure payment integration, and real-time availability tracking.",
    tags: ["Java", "Spring Boot", "MySQL", "AWS"],
    image: "https://picsum.photos/seed/monkhood/800/600",
  },
  {
    title: "Books Kart",
    description: "Online bookstore with advanced search and recommendation.",
    longDescription:
      "An online platform for book lovers featuring Elasticsearch-powered search, user reviews, and a personalized recommendation engine based on reading history.",
    tags: ["Elasticsearch", "Spring Boot", "MongoDB"],
    image: "https://picsum.photos/seed/books/800/600",
  },
  {
    title: "MVP Product",
    description: "Rapidly developed backend for startup validation.",
    longDescription:
      "A lean and scalable backend architecture designed for quick iteration and product-market fit testing. Focused on modularity and ease of feature addition.",
    tags: ["Spring Boot", "PostgreSQL", "Docker"],
    image: "https://picsum.photos/seed/mvp/800/600",
  },
  {
    title: "Digital Routine App",
    description: "Productivity tool for habit tracking and scheduling.",
    longDescription:
      "A personal productivity application that helps users build and maintain routines. Includes data visualization of progress and cross-device synchronization.",
    tags: ["Java", "Hibernate", "Redis"],
    image: "https://picsum.photos/seed/routine/800/600",
  },
  {
    title: "CRM Tool",
    description: "Custom relationship management system for startups.",
    longDescription:
      "A tailored CRM solution for small to medium enterprises, focusing on lead management, sales pipeline visualization, and automated reporting.",
    tags: ["Spring Boot", "MongoDB", "AWS"],
    image: "https://picsum.photos/seed/crm/800/600",
  },
];

export const BLOGS: Blog[] = [
  {
    title: "Java Integer Cache",
    date: "Oct 2023",
    excerpt:
      "Exploring the internal working of Integer caching in Java and its impact on memory and performance.",
    link: "#",
  },
  {
    title: "Interfaces in Java",
    date: "Aug 2023",
    excerpt:
      "A deep dive into functional interfaces, default methods, and static methods in modern Java.",
    link: "#",
  },
  {
    title: "HTTP Protocols",
    date: "Jun 2023",
    excerpt:
      "Understanding the evolution of HTTP from 1.1 to HTTP/3 and why it matters for backend performance.",
    link: "#",
  },
  {
    title: "Redis Architecture",
    date: "Apr 2023",
    excerpt:
      "How Redis achieves high performance through its single-threaded event loop and in-memory data structures.",
    link: "#",
  },
];
