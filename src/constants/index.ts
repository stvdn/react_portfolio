import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Highly adaptable software engineer with 4 years of experience in software development. My experience includes developing web applications and implementing software solutions, leveraging languages like Python, PowerShell, JavaScript, and PHP, along with frameworks such as Angular, React, Laravel, and Flask. I enjoy working in collaborative teams.`;

export const ABOUT_TEXT = `I'm a software engineer based in Quito, Ecuador, with a strong background in implementing software solutions with complex business logic. Over the past 4 years, I've worked with agile teams as well as independently as a freelancer to deliver solutions across the finance, real estate, and e-commerce industries. I adapt quickly and always strive to follow best practices and standards to build scalable solutions. I adapt quickly and always strive to follow best practices and standards to build scalable solutions. I value work environments that foster continuous learning, contributing proactivity and clear communication to every project.`;

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
    title: "Web Portfolio",
    image: project1,
    description:
      "Portfolio website developed from scratch using Next.js and TypeScript. Integrated with GitHub Actions for CI/CD deployment.",
    technologies: ["Next.js", "TypeScript", "GitHub Actions"],
  },
  {
    title: "Video to MP3 Converter",
    image: project2,
    description:
      "A microservices-based console application using Python, Docker, RabbitMQ, and MariaDB to convert video to MP3 format.",
    technologies: ["Python", "Docker", "RabbitMQ", "MariaDB"],
  },
  {
    title: "Nani Boutique",
    image: project3,
    description:
      "E-commerce app built using React and Flask with PostgreSQL and AWS S3. Entire app containerized with Docker Compose.",
    technologies: ["React", "Flask", "PostgreSQL", "AWS S3", "Docker Compose"],
  },
  {
    title: "Hausi Mobile App",
    image: project4,
    description:
      "Mobile app for property listings built with Flask and Firebase. Features include authentication, property filtering, and favorites.",
    technologies: ["Flask", "Firebase", "Firestore", "JavaScript"],
  },
];

export const CONTACT = {
  address: "Quito, Ecuador",
  phoneNo: "+593 958836085",
  email: "stevendanny2000@gmail.com", // Replace if you want another public contact
};
