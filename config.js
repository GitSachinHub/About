/**
 * ==========================================
 * ADMIN CONFIGURATION FILE
 * ==========================================
 * Easily customize the name, photos, about description,
 * skills, projects, timeline, socials, sounds, voice script,
 * loading duration, and color themes.
 */

const CONFIG = {
  // General Profile Info
  profile: {
    name: "Sachin Kumar",
    title: "Computer Science Engineer",
    subtitle: "Frontend Developer | Creative Designer | Future Full Stack Developer",
    location: "Bihar, India",
    photo: "assets/avatar.png", // Path to profile avatar
    university: "Parul University",
    degree: "B.Tech Computer Science Engineering",
    about: "Passionate Computer Science student focused on creating modern web experiences using HTML, CSS, JavaScript, and continuously learning new technologies. I enjoy building futuristic UI, solving real-world problems, and turning ideas into interactive digital experiences."
  },

  // Telemetry Dashboard Stats
  stats: {
    completedProjects: 12,
    technologies: 8,
    experience: "1+ Years",
    learningProgress: "85%"
  },

  // Themes, Sounds, and Cinematic Settings
  theme: {
    loadingTime: 4000, // Milliseconds (3000 to 5000 is recommended)
    voiceText: "Welcome. Access Granted. You are entering the digital portfolio of Sachin Kumar. Computer Science Engineer. Frontend Developer. Creative Designer. Future Full Stack Developer. Initializing Experience...",
    enableSound: true,
    colors: {
      primary: "#00f3ff",     // Neon Cyan glow
      secondary: "#9d4edd",   // Neon Purple
      accent: "#ff007f",      // Neon Pink
      bg: "#030307"           // Deep Cyber Black
    }
  },

  // Core Skills with HTML Icons (FontAwesome) and Competency Level
  skills: {
    core: [
      { name: "HTML5", percentage: 90, icon: "fab fa-html5" },
      { name: "CSS3", percentage: 85, icon: "fab fa-css3-alt" },
      { name: "JavaScript", percentage: 80, icon: "fab fa-js" },
      { name: "Git", percentage: 75, icon: "fab fa-git-alt" },
      { name: "GitHub", percentage: 80, icon: "fab fa-github" },
      { name: "Responsive Design", percentage: 85, icon: "fas fa-laptop-code" },
      { name: "UI/UX Design", percentage: 70, icon: "fas fa-paint-brush" },
      { name: "Frontend Development", percentage: 80, icon: "fas fa-code" }
    ],
    future: [
      { name: "React.js", icon: "fab fa-react" },
      { name: "Node.js", icon: "fab fa-node-js" },
      { name: "Express.js", icon: "fas fa-server" },
      { name: "MongoDB", icon: "fas fa-database" }
    ]
  },

  // Projects - Current and Upcoming Placeholders
  projects: [
    {
      title: "Hospital Management System",
      description: "A comprehensive medical administration platform featuring patient records, appointment scheduling, billing subsystems, and secure doctor portals.",
      image: "assets/hospital_preview.png",
      tags: ["HTML5", "CSS3", "JavaScript", "Local Storage"],
      githubLink: "https://github.com/GitSachinHub/Hospital-Management-Queue-Management",
      demoLink: "https://gitsachinhub.github.io/Hospital-Management-Queue-Management/",
      isPlaceholder: false
    },
    {
      title: "Cybernetic Portfolio Website",
      description: "This world-class cyberpunk portfolio website displaying immersive AAA gaming visuals, customized voice synthesize interfaces, and 3D interactions.",
      image: "assets/portfolio_preview.png",
      tags: ["HTML5", "CSS3", "JavaScript", "GSAP", "Particles"],
      githubLink: "https://github.com/GitSachinHub/cyber-portfolio",
      demoLink: "#",
      isPlaceholder: false
    },
    {
      title: "Quantum Neural Dashboard",
      description: "Upcoming futuristic projects including full-stack SaaS platforms, real-time dashboards, and collaborative web applications.",
      image: "assets/future_preview.png",
      tags: ["React.js", "Node.js", "MongoDB"],
      githubLink: "https://github.com/GitSachinHub",
      demoLink: "#",
      isPlaceholder: true
    }
  ],

  // Career Timeline Journey
  timeline: [
    { year: "2018", title: "Secondary School", desc: "Graduated with honors, discovering a strong interest in computer applications." },
    { year: "2020", title: "Senior Secondary", desc: "Specialized in Science and Mathematics, laying the groundwork for engineering." },
    { year: "2022", title: "Started Coding Journey", desc: "Wrote first lines of code and immediately fell in love with software development." },
    { year: "2023", title: "Learning Web Fundamentals", desc: "Mastered HTML5 and CSS3 layouts, crafting responsive designs and understanding web structure." },
    { year: "2024", title: "JavaScript Mastery", desc: "Dived deep into DOM manipulation, async functions, APIs, and micro-interactions." },
    { year: "2025", title: "Parul University (B.Tech CSE)", desc: "Currently pursuing B.Tech in Computer Science Engineering, exploring data structures and algorithms." },
    { year: "2026", title: "Future Full Stack Developer", desc: "Expanding capabilities into React, Node.js, databases, and building cloud-scale applications." }
  ],

  // Animated Counter Values
  achievements: [
    { count: 15, label: "Certificates Earned", icon: "fas fa-certificate" },
    { count: 12, label: "Projects Completed", icon: "fas fa-project-diagram" },
    { count: 450, label: "GitHub Commits", icon: "fab fa-git-alt" },
    { count: 1200, label: "Learning Hours", icon: "fas fa-clock" }
  ],

  // Professional Services Offered
  services: [
    { title: "Website Design", desc: "Crafting beautiful, high-fidelity user interfaces with exceptional visual storytelling and UX.", icon: "fas fa-drafting-compass" },
    { title: "Frontend Development", desc: "Developing fast, responsive, and cross-browser compatible web experiences with clean code.", icon: "fas fa-laptop-code" },
    { title: "Portfolio Design", desc: "Building highly interactive, immersive, and personalized gaming-style digital portfolios.", icon: "fas fa-gamepad" },
    { title: "Responsive Websites", desc: "Ensuring flawless visual execution across smartphones, tablets, laptops, and ultra-wide screens.", icon: "fas fa-mobile-alt" },
    { title: "Modern UI Design", desc: "Leveraging glassmorphism, rich gradients, dynamic shadows, and glowing border components.", icon: "fas fa-bezier-curve" }
  ],

  // Social & Comms Links (Populates all buttons automatically)
  socials: {
    github: "https://github.com/GitSachinHub",
    linkedin: "https://www.linkedin.com/in/sachiins1?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    instagram: "https://www.instagram.com/sachiins1?igsh=MTJpMjNuNWdkemMwbQ==",
    twitter: "https://x.com",
    email: "Kumarsachin21759@gmail.com",
    phone: "+917482802635",
    whatsapp: "https://wa.me/917482802635",
    telegram: "https://t.me",
    resume: "https://github.com/GitSachinHub",
    portfolioPdf: "https://github.com/GitSachinHub",
    leetcode: "https://leetcode.com",
    codechef: "https://codechef.com",
    hackerrank: "https://hackerrank.com",
    geeksforgeeks: "https://geeksforgeeks.org",
    youtube: "https://youtube.com",
    discord: "https://discord.com"
  }
};
