// All portfolio content lives here. Edit this file to update the site.

export const profile = {
  name: "Balram Mahato",
  // Photo lives in /public. Replace balram.jpg to change it.
  photo: "/balram.jpg",
  availability: "Open to internships",
  roles: [
    "B.Tech CSE student",
    "React.js developer",
    "Node.js and Express developer",
    "full-stack builder",
  ],
  intro:
    "I build web applications with React on the front end and Node.js, Express and MongoDB on the back end. I am looking for software developer internships and placement opportunities.",
  about: [
    "I am a third-year B.Tech Computer Science and Engineering student at Ramgarh Engineering College, Jharkhand. I learn by building: my projects cover React front ends, Node.js and Express back ends, and a document management system for legal and investigation records.",
    "I work with Git and GitHub for every project and have deployed projects on Vercel and Render. I am comfortable in C, C++ and Java, and I am now focused on full-stack web development.",
  ],
  email: "balramegrks@gmail.com",
  phone: "9798499371",
  github: "https://github.com/Balram-Mahato-211",
  linkedin: "https://www.linkedin.com/in/balram-mahato-2a0822337",
  // Put your resume PDF in the /public folder with exactly this file name.
  resume: "/Balram_Mahato_Resume.pdf",
};

export const education = [
  {
    title: "B.Tech in Computer Science and Engineering",
    place: "Ramgarh Engineering College, Jharkhand",
    detail: "Currently in 3rd year, 5th semester",
    period: "2024 to 2028",
  },
  {
    title: "Class 12th",
    place: "Swami Vivekananda Inter College, Nirsa, Dhanbad",
    detail: "80.8%",
  },
  {
    title: "Class 10th",
    place: "Valley Public School, Patlabari, Dhanbad",
    detail: "88.8%",
  },
];

export const skills = [
  { group: "Programming languages", icon: "code", items: ["C", "C++", "Java"] },
  {
    group: "Frontend development",
    icon: "layout",
    items: ["HTML", "CSS", "React.js", "Next.js", "Vite"],
  },
  {
    group: "Backend development",
    icon: "server",
    items: ["Node.js", "Express.js", "REST APIs"],
  },
  { group: "Databases", icon: "database", items: ["MongoDB", "Mongoose"] },
  { group: "Tools and platforms", icon: "terminal", items: ["Git", "GitHub", "VS Code"] },
  { group: "Cloud and media storage", icon: "cloud", items: ["Cloudinary"] },
];

// Add a `live: "https://..."` field to any project to show a Live link.
export const projects = [
  {
    name: "ABHILEKH",
    subtitle: "Secure Digital Document Management System",
    description:
      "A secure platform for managing legal and investigation documents, with role-based access control, document integrity verification, audit logs, and evidence tracking.",
    tech: [],
    github: "https://github.com/Balram-Mahato-211/sih",
  },
  {
    name: "TradeMemory",
    subtitle: "AI-Powered Financial Memory Assistant",
    description:
      "An AI-powered external memory assistant designed to retain contextual information and support knowledge retrieval for financial workflows.",
    tech: ["React"],
    github: "https://github.com/Balram-Mahato-211/TradeMemory",
  },
  {
    name: "Contact-App",
    subtitle: "Contact management frontend",
    description:
      "A React-based frontend project for a contact management application.",
    tech: ["React", "Vite", "JavaScript", "CSS"],
    github: "https://github.com/Balram-Mahato-211/Contact-App",
  },
  {
    name: "SBSTUBEBACKEND",
    subtitle: "Video application backend",
    description:
      "A backend project for a video application, organized around API routes, controllers, and database models.",
    tech: ["JavaScript", "Node.js", "Express.js"],
    github: "https://github.com/Balram-Mahato-211/SBSTUBEBACKEND",
  },
];

// Numbers shown under the About section. They count up when scrolled into view.
export const stats = [
  { value: projects.length, label: "Projects on GitHub" },
  { value: skills.reduce((n, g) => n + g.items.length, 0), label: "Technologies I use" },
  { value: 88.8, decimals: 1, suffix: "%", label: "Score in Class 10th" },
  { value: 80.8, decimals: 1, suffix: "%", label: "Score in Class 12th" },
];

export const navLinks = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];
