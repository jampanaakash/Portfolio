/**
 * ============================================
 * SITE CONFIGURATION FILE
 * ============================================
 * 
 * Update your portfolio content here.
 * All sections are clearly labeled — edit the values below
 * to change what appears on the website.
 * 
 * No need to touch any other code files!
 * ============================================
 */

const siteConfig = {
  // ─── PERSONAL INFO ──────────────────────────
  // Update your name, tagline, and intro here
  personal: {
    name: "Akash Kumar Reddy Jampana",
    firstName: "Akash",
    tagline: "Python Developer | Analyst at Deloitte | Builder",
    intro:
      "Python developer with hands-on experience in automation, data pipelines, CLI tools, and computer vision. Currently an Analyst at Deloitte, Hyderabad.",
    location: "Hyderabad, India",
    resumeLink: "#", // Add your resume link here
  },

  // ─── ABOUT SECTION ─────────────────────────
  // Update your bio paragraphs here
  about: {
    bio: [
      "Python developer with hands-on experience building automation scripts, data processing pipelines, and CLI utilities. Comfortable turning operational requirements into clean, maintainable code and dashboards.",
      "Delivered real-time computer-vision features in Python (OpenCV + TTS) and built a full-stack app with Node.js/MongoDB. Strong collaborator who translates business needs into technical deliverables, writes reproducible scripts, and uses Git/GitHub for version control and code reviews.",
    ],
    highlights: [
      { label: "Current Role", value: "Analyst at Deloitte" },
      { label: "Location", value: "Hyderabad, India" },
      { label: "Focus", value: "Python Automation & Data" },
      { label: "Education", value: "B.Tech in IT" },
    ],
  },

  // ─── SKILLS SECTION ────────────────────────
  // Add or remove skills in each category
  skills: [
    {
      category: "Programming",
      items: ["JavaScript", "Python", "Node.js", "SQL", "Java", "C++", "C"],
    },
    {
      category: "AI & Computer Vision",
      items: ["Prompt Engineering", "Computer Vision (OpenCV)"],
    },
    {
      category: "System Design",
      items: ["REST APIs", "Modular Architecture", "Error Handling"],
    },
    {
      category: "Tools",
      items: ["GitHub", "VS Code", "Excel"],
    },
    {
      category: "Databases",
      items: ["MongoDB", "MySQL"],
    },
  ],

  // ─── EXPERIENCE SECTION ────────────────────
  // Add new experience entries here (newest first)
  experience: [
    {
      company: "Deloitte Touche Tohmatsu LLP",
      role: "Analyst",
      location: "Hyderabad",
      period: "Jan 2025 – Present",
      description: [
        "Collaborating with cross-functional teams to translate business requirements into Python automation tools and data workflows that improve operational reliability.",
        "Built and scheduled scripts to monitor performance metrics, parse logs, and apply versioned updates; produced health dashboards for stakeholders.",
        "Drove process optimization by identifying gaps in runbooks, converting manual steps into CLI utilities and reusable functions.",
        "Served as a bridge between business users and engineering, turning user stories into backlog items, code tasks, and pull requests.",
        "Maintained high availability during peak loads by implementing automated pre/post validation checks, threshold alerts, and quick rollback helpers.",
      ],
    },
    {
      company: "Deloitte Touche Tohmatsu LLP",
      role: "Intern",
      location: "Hyderabad",
      period: "June 2024 – Jan 2025",
      description: [
        "Assisted in building Python scripts for environment checks, log collection, and report generation to standardize routine operational tasks.",
        "Contributed to performance monitoring by extracting signals from logs/metrics and packaging insights into weekly summaries.",
        "Partnered with senior engineers to align scripts with compliance/documentation standards, track changes in Git/GitHub.",
      ],
    },
  ],

  // ─── PROJECTS SECTION ──────────────────────
  // Add new projects here
  projects: [
    {
      title: "E-Waste Facility Locator",
      subtitle: "Full-Stack Web Application",
      stack: ["Node.js", "MongoDB", "Google Maps API", "HTML/CSS/JS"],
      description:
        "Built a full-stack web application enabling users to locate nearby e-waste facilities and schedule doorstep pickups. Integrated Google Maps API for geolocation search, route guidance, and distance calculation.",
      highlights: [
        "Google Maps API integration for geolocation",
        "User and admin dashboards",
        "Real-time booking management",
        "Optimized backend queries for search accuracy",
      ],
      link: "https://jampanaakash.github.io/ewaste-facility.github.io/",
      github: "#",
    },
    {
      title: "Object Detection with Audio Feedback",
      subtitle: "Python Computer Vision",
      stack: ["OpenCV", "pyttsx3", "Python"],
      description:
        "Developed a real-time object-detection system using OpenCV to identify objects via webcam feed. Integrated pyttsx3 for offline TTS to announce detected objects, improving accessibility for visually impaired users.",
      highlights: [
        "Real-time webcam object detection",
        "Text-to-speech audio feedback",
        "Designed for accessibility",
        "Optimized frame-processing efficiency",
      ],
      link: "#",
      github: "https://github.com/jampanaakash/Object-Detection-with-Audio-Feedback",
    },
  ],

  // ─── EDUCATION SECTION ─────────────────────
  // Add education entries here
  education: [
    {
      institution: "Mahatma Gandhi Institute of Technology (MGIT)",
      degree: "Bachelor of Technology in Information Technology",
      period: "Dec 2020 – Mar 2024",
      grade: "CGPA: 7.2/10",
    },
  ],

  // ─── CONTACT SECTION ───────────────────────
  // Update your contact details here
  contact: {
    email: "akashkumarreddy.prof@gmail.com",
    phone: "+91 95500 59637",
    linkedin: "https://linkedin.com/in/jampanaakash",
    github: "https://github.com/jampanaakash",
  },

  // ─── NAV LINKS ─────────────────────────────
  // Customize navigation items
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ],
};

export default siteConfig;
