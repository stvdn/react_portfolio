import video_to_mp3 from "../assets/projects/video_to_mp3.png";
import travel_planner from "../assets/projects/travel_planner.png";

export const HERO_CONTENT = `Highly adaptable software engineer with 4 years of experience in software development. My experience includes developing web applications and implementing software solutions, leveraging languages like Python, PowerShell, JavaScript, and PHP, along with frameworks such as Angular, React, Laravel, and Flask. I enjoy working in collaborative teams.`;

export const ABOUT_TEXT = `I'm a software engineer based in Quito, Ecuador, with a strong background in developing software solutions that handle complex business logic. Over the past four years, I've worked both independently as a freelancer and collaboratively within agile teams to deliver robust applications across the finance, real estate, and e-commerce sectors. I prioritize clean, scalable code and consistently follow industry best practices and standards. I thrive in environments that encourage continuous learning and bring proactive communication and a solution-oriented mindset to every project.`;

export const EXPERIENCES = [
  {
    year: "Dec 2022 – Present",
    role: "Software Engineer",
    company: "Redsis",
    description: [
      "Automated migration of 1,600+ processes to JAMS for a financial institution, improved scalability, eliminated legacy errors.",
      "Developed a Python ETL for SQL Server data integration with REST APIs.",
      "Implemented PowerShell automation to validate system resources.",
      "Integrated business-specific logic with JAMS and led stakeholder meetings.",
    ],
    technologies: ["Python", "PowerShell", "SQL Server", "JAMS", "REST API"],
  },
  {
    year: "May 2022 – Dec 2022",
    role: "Full Stack Web Developer",
    company: "WebCoop",
    description: [
      "Developed backend treasury module using Laravel and MySQL.",
      "Implemented frontend with Blade and JavaScript.",
      "Collaborated with banking cooperatives to gather requirements.",
      "Added WhatsApp API integration for automated reports.",
    ],
    technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "Blade"],
  },
  {
    year: "Feb 2022 – May 2022",
    role: "Mobile and Web Developer",
    company: "Hausi",
    description: [
      "Built a loan calculator and mobile app for property rental/sales using Flask and Firebase.",
      "Integrated authentication, property search, and state management.",
      "Automated CRM data imports with Make.",
    ],
    technologies: ["JavaScript", "HTML", "CSS", "Flask", "Firebase", "Make"],
  },
  {
    year: "Jan 2021 – Jan 2022",
    role: "Full Stack Web Developer",
    company: "Marcairis",
    description: [
      "Developed Angular frontend and Firebase backend.",
      "Enabled multi-method authentication and user roles.",
      "Built social interaction features and Laravel APIs for metadata generation and reporting.",
      "Migrated project to Ionic for multi-platform support.",
    ],
    technologies: [
      "Angular",
      "TypeScript",
      "Firebase",
      "PHP",
      "Laravel",
      "Ionic",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Video to MP3 Converter",
    image: video_to_mp3,
    description:
      "A microservices-based console application using Python, Docker, RabbitMQ, and MariaDB to convert video to MP3 format.",
    technologies: ["Python", "Docker", "RabbitMQ", "MariaDB"],
    repo: "https://github.com/stvdn/mp3converter",
  },
  {
    title: "Travel Planner",
    image: travel_planner,
    description:
      "Travel planning app built with Next.js, TypeScript, and PostgreSQL, featuring 3D globe visualization and secure authentication.",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "Supabase",
      "3D Animation",
    ],
    repo: "https://github.com/stvdn/travel_planner",
  },
];

export const CONTACT = {
  address: "Quito, Ecuador",
  phoneNo: "+593 958836085",
  email: "stevendanny2000@gmail.com", // Replace if you want another public contact
};
