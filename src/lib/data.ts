export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  problem: string;
  solution: string;
  architecture: string[];
  category: "AI" | "Full Stack" | "Mobile";
  featured: boolean;
  metrics: { label: string; value: string }[];
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  timeline: string;
  image: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: number; // 0 - 100
    icon: string;
    description: string;
  }[];
}

export interface TimelineItem {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  type: "Experience" | "Education" | "Milestone";
  description: string[];
  skills: string[];
  achievements: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId: string;
  verifyUrl: string;
  badge: string;
  topics: string[];
}

export const PERSONAL_INFO = {
  name: "Karthikeyan A",
  title: "Software Developer & Full-Stack Engineer",
  tagline: "Software developer transitioning into technology from procurement operations. Hands-on experience with Python, JavaScript, React, Node.js, Express.js, REST APIs, and AI integrations with Google Gemini API.",
  location: "Chennai, Tamil Nadu, India",
  email: "sivakarthik9751@gmail.com",
  phone: "9360478741",
  phoneDisplay: "+91 9360478741",
  github: "https://github.com/karthikeyan-dev",
  linkedin: "https://linkedin.com/in/karthikeyan-a",
  twitter: "https://twitter.com/karthikeyan_dev",
  stats: {
    yearsLearning: "2+",
    projectsCompleted: "5+",
    technologiesMastered: "15+",
    domainExperience: "Royal Enfield",
    contributions: "300+",
  },
  bio: "Software developer transitioning into technology from procurement operations at Royal Enfield. Hands-on experience with Python, JavaScript, HTML, CSS, SQL, Node.js, Express.js, REST APIs, and web application development. Built and deployed personal projects including an AI-powered resume analyzer (ResumeIQ AI) and a React Native mobile application (Space Escape Runner). Brings practical experience in business operations, problem solving, stakeholder coordination, and a strong passion for software engineering.",
  mission: "To engineer scalable, intuitive software applications and AI-augmented tools by fusing rigorous analytical problem solving with modern full-stack development best practices.",
  vision: "Bridging the gap between real-world operational workflows and automated software systems to deliver seamless user experiences and high-efficiency platforms.",
  targetRoles: [
    "Software Developer",
    "Junior Software Developer",
    "Full-Stack Developer",
    "Associate Software Engineer",
    "Junior Backend Developer",
  ],
  strengths: [
    "Practical business and manufacturing domain experience through procurement operations at Royal Enfield.",
    "Hands-on project development and end-to-end cloud deployment experience (Vercel, Render).",
    "Strong foundation in analytical problem solving, logical reasoning, and mathematical principles from Physics background.",
    "Effective stakeholder communication, supplier coordination, and cross-functional team collaboration.",
  ],
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages & Data",
    description: "Core languages for application logic, scripting, querying, and mathematical problem-solving",
    skills: [
      { name: "Python", level: 90, icon: "Brain", description: "Backend development, scripting, data handling & algorithm implementation" },
      { name: "JavaScript", level: 92, icon: "FileCode", description: "Modern ES6+, asynchronous programming, event handling & DOM manipulation" },
      { name: "SQL", level: 85, icon: "Database", description: "Relational database queries, data schemas, filtering, and data integrity" },
      { name: "HTML5", level: 95, icon: "Layout", description: "Semantic markup, web accessibility, and structured document design" },
      { name: "CSS3", level: 92, icon: "Palette", description: "Responsive layouts, Flexbox, CSS Grid, custom animations & modern styling" },
    ],
  },
  {
    title: "Frontend & Mobile",
    description: "Modern component-driven web interfaces, responsive layouts, and cross-platform mobile apps",
    skills: [
      { name: "React", level: 88, icon: "Atom", description: "Component-based architecture, hooks, state management & reactive UI" },
      { name: "React Native", level: 85, icon: "Globe", description: "Cross-platform mobile application development for iOS and Android" },
      { name: "Expo", level: 88, icon: "Zap", description: "Mobile app tooling, rapid simulation, deployment & device APIs" },
      { name: "Bootstrap", level: 90, icon: "Layers", description: "Responsive grid systems, prebuilt UI components & mobile-first styling" },
      { name: "Responsive Web Dev", level: 94, icon: "Layout", description: "Mobile-first layouts, media queries & fluid cross-browser compatibility" },
    ],
  },
  {
    title: "Backend & APIs",
    description: "Robust server-side architectures, RESTful APIs, and file-processing microservices",
    skills: [
      { name: "Node.js", level: 88, icon: "Server", description: "Event-driven runtime for server-side applications and microservices" },
      { name: "Express.js", level: 88, icon: "Workflow", description: "REST API routing, middleware architecture & request/response pipelines" },
      { name: "REST APIs", level: 92, icon: "Network", description: "CRUD endpoint design, HTTP methods, JSON data exchange & status codes" },
      { name: "API Integration", level: 90, icon: "Link", description: "Consuming external third-party APIs and integrating cloud services" },
    ],
  },
  {
    title: "AI Integration & File Processing",
    description: "Intelligent LLM capabilities, document parsing, and file-upload workflows",
    skills: [
      { name: "Google Gemini API", level: 88, icon: "Sparkles", description: "Integrating multimodal generative AI for intelligent resume analysis" },
      { name: "PDF Parsing", level: 86, icon: "BookOpen", description: "Extracting text and structured data from uploaded PDF documents" },
      { name: "Multer", level: 88, icon: "Box", description: "Handling multipart/form-data, file uploads, and storage validation" },
      { name: "Application Deployment", level: 88, icon: "Cloud", description: "Deploying full-stack applications to cloud platforms (Vercel, Render)" },
    ],
  },
  {
    title: "Tools, Platforms & Operations",
    description: "Developer workflows, cloud hosting, and business operations platforms",
    skills: [
      { name: "Git", level: 90, icon: "GitBranch", description: "Version control, branching models, commit hygiene & code history" },
      { name: "GitHub", level: 90, icon: "Github", description: "Remote repository hosting, code collaboration & continuous deployment" },
      { name: "VS Code", level: 95, icon: "Terminal", description: "Primary IDE with extensions, debugging, and productivity workflows" },
      { name: "Vercel", level: 92, icon: "Triangle", description: "Frontend web deployment, serverless hosting & automated builds" },
      { name: "Render", level: 88, icon: "Cloud", description: "Backend web service hosting, environment configuration & web servers" },
      { name: "Microsoft Excel", level: 92, icon: "Layers", description: "Operational data analysis, formula calculations, tracking & reporting" },
      { name: "Google Sheets", level: 90, icon: "Database", description: "Collaborative tracking, spreadsheet management & inventory logs" },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "resume-iq-ai",
    title: "ResumeIQ AI",
    subtitle: "AI-Powered Resume Analyzer & Automated Feedback Web Application",
    description: "A full-stack web application that allows users to upload PDF resumes and receive comprehensive AI-generated analysis, scoring, and actionable improvement feedback powered by the Google Gemini API.",
    problem: "Job seekers often submit resumes without knowing if their structure, keywords, and qualifications effectively match modern hiring benchmarks, leading to low response rates.",
    solution: "Developed an interactive web app with Node.js, Express.js, and Google Gemini API that extracts text from uploaded PDF resumes using Multer and PDF parsing, delivering instant, actionable AI critique and recommendations.",
    architecture: [
      "Responsive Frontend for intuitive PDF resume upload and clean feedback result visualization",
      "Node.js and Express.js REST API handling multipart/form-data file uploads via Multer",
      "PDF text parsing pipeline extracting raw content from uploaded candidate documents",
      "Google Gemini API integration generating contextual analysis, skill extraction, and enhancement tips",
      "Deployed frontend on Vercel and backend microservice on Render for 24/7 cloud availability",
    ],
    category: "AI",
    featured: true,
    metrics: [
      { label: "AI Engine", value: "Google Gemini" },
      { label: "Processing Speed", value: "< 3s" },
      { label: "Cloud Deployment", value: "Vercel + Render" },
    ],
    tags: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express.js", "Google Gemini API", "PDF Parsing", "Multer", "Git", "Vercel", "Render"],
    liveUrl: "https://resumeiq-ai.vercel.app",
    githubUrl: "https://github.com/karthikeyan-dev/resumeiq-ai",
    timeline: "Web Application • Deployed",
    image: "/projects/resumeiq.png",
  },
  {
    id: "space-escape-runner",
    title: "Space Escape Runner",
    subtitle: "Interactive 2D Arcade Game Built with React Native & Expo",
    description: "A fast-paced, interactive 2D mobile game developed with React Native and Expo featuring smooth spaceship flight controls, dynamic obstacle generation, real-time score tracking, and immersive arcade mechanics.",
    problem: "Developing performant, smooth 60 FPS mobile touch-control mechanics and collision detection across varied mobile screen sizes and operating systems.",
    solution: "Engineered a modular React Native application utilizing Expo's runtime, custom animation loops, touch-responsive event listeners, dynamic difficulty scaling, and persistent game state tracking.",
    architecture: [
      "React Native & Expo cross-platform mobile architecture for seamless iOS & Android performance",
      "Component-based UI design with modular game screens, menus, and game-over states",
      "Interactive touch control loop handling spaceship navigation and obstacle avoidance",
      "State management logic for dynamic score tracking, difficulty acceleration, and high scores",
    ],
    category: "Mobile",
    featured: true,
    metrics: [
      { label: "Framework", value: "React Native" },
      { label: "Target Platform", value: "iOS / Android" },
      { label: "Performance", value: "60 FPS Fluid" },
    ],
    tags: ["React Native", "Expo", "JavaScript", "Mobile UI", "Game Logic", "State Management"],
    liveUrl: "https://expo.dev/@karthikeyan-dev/space-escape-runner",
    githubUrl: "https://github.com/karthikeyan-dev/space-escape-runner",
    timeline: "Mobile Application",
    image: "/projects/space-escape.png",
  },
];

export const TIMELINE: TimelineItem[] = [
  {
    id: "exp-1",
    title: "Procurement Trainee",
    company: "Royal Enfield",
    location: "Oragadam, Tamil Nadu",
    period: "April 2025 – Present",
    type: "Experience",
    description: [
      "Support procurement operations for wheel components and coordinate across multiple external manufacturing suppliers.",
      "Coordinate with multiple suppliers involved in component supply and wheel assembly to meet daily production targets.",
      "Track component requirements, monitor inventory buffers, and support procurement activities for manufacturing operations.",
      "Work collaboratively with internal engineering, assembly teams, and external stakeholders to address procurement needs.",
      "Developed practical understanding of supplier coordination, inventory requirements, production dependencies, and manufacturing business processes.",
    ],
    skills: ["Procurement Operations", "Supplier Coordination", "Inventory Management", "Process Optimization", "Microsoft Excel", "Stakeholder Communication"],
    achievements: [
      "Successfully coordinated multi-supplier component delivery schedules ensuring zero line-stoppages",
      "Applied structured data tracking in Excel to monitor wheel component availability and supplier lead times",
    ],
  },
  {
    id: "milestone-1",
    title: "Full-Stack Web Development",
    company: "NxtWave",
    location: "Intensive Tech Coursework",
    period: "2024 – Present",
    type: "Milestone",
    description: [
      "Learning full-stack web development through rigorous, structured programming and hands-on software development coursework.",
      "Developing deep practical skills in Python, JavaScript, React, Node.js, Express.js, REST APIs, and relational SQL databases.",
      "Architecting and building production-grade projects including an AI-powered resume analyzer and a React Native mobile game.",
      "Strengthening software engineering fundamentals including version control with Git/GitHub, cloud deployment, and debugging.",
    ],
    skills: ["Python", "JavaScript", "React", "Node.js", "Express.js", "SQL", "REST APIs", "Git", "Cloud Deployment"],
    achievements: [
      "Built and deployed full-stack ResumeIQ AI with Google Gemini API on Vercel and Render",
      "Developed cross-platform Space Escape Runner mobile game using React Native and Expo",
    ],
  },
  {
    id: "edu-1",
    title: "Bachelor of Science — Physics",
    company: "H.H. The Rajah's College",
    location: "Pudukkottai, Tamil Nadu",
    period: "2021 – 2024",
    type: "Education",
    description: [
      "Completed Bachelor of Science in Physics with strong foundations in quantitative mathematics, logical reasoning, and analytical methods.",
      "Cultivated disciplined problem-solving methodologies, scientific analysis, and systematic experimentation.",
      "Transitioned mathematical logic and analytical abilities into modern computer science and software development.",
    ],
    skills: ["Physics", "Analytical Problem Solving", "Mathematical Logic", "Data Analysis", "Scientific Method"],
    achievements: [
      "Graduated with strong academic record in Physics and Applied Mathematics",
      "Built solid foundation for transitioning into technology and full-stack software development",
    ],
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "cert-1",
    title: "Full-Stack Web Development Specialization",
    issuer: "NxtWave",
    issueDate: "2024 - 2025",
    credentialId: "NXW-FSD-9751",
    verifyUrl: "https://nxtwave.tech",
    badge: "NxtWave",
    topics: ["Python", "JavaScript", "React", "Node.js", "Express.js", "SQL", "REST APIs"],
  },
  {
    id: "cert-2",
    title: "AI Integration & Web Application Development",
    issuer: "Google Gemini Developer Program",
    issueDate: "2025",
    credentialId: "GEMINI-AI-2025",
    verifyUrl: "https://ai.google.dev",
    badge: "Gemini AI",
    topics: ["Google Gemini API", "LLM Prompting", "PDF Parsing", "Multer", "Cloud Hosting"],
  },
  {
    id: "cert-3",
    title: "Bachelor of Science in Physics",
    issuer: "H.H. The Rajah's College",
    issueDate: "2021 - 2024",
    credentialId: "HHR-BSC-PHY-24",
    verifyUrl: "https://hhrc.ac.in",
    badge: "B.Sc Physics",
    topics: ["Mathematical Analysis", "Analytical Problem Solving", "Logical Modeling", "Computational Thinking"],
  },
];

export const ACHIEVEMENTS = [
  {
    title: "AI Project Deployment",
    event: "ResumeIQ AI Platform",
    description: "Architected, integrated with Google Gemini API, and deployed a full-stack AI Resume Analyzer on Vercel and Render.",
    icon: "Sparkles",
    metric: "Full-Stack AI App",
  },
  {
    title: "Cross-Platform Mobile Game",
    event: "Space Escape Runner",
    description: "Built and published an interactive 2D arcade game using React Native and Expo with 60 FPS state-driven gameplay.",
    icon: "Trophy",
    metric: "React Native + Expo",
  },
  {
    title: "Operational Leadership",
    event: "Royal Enfield Operations",
    description: "Managed supplier coordination and inventory tracking for wheel component manufacturing operations with zero line downtime.",
    icon: "Award",
    metric: "Supply Chain & Ops",
  },
  {
    title: "Continuous Codebase Growth",
    event: "GitHub & NxtWave",
    description: "Active development journey building modern web applications, REST APIs, and structured full-stack architectures.",
    icon: "GitPullRequest",
    metric: "Hands-on Projects",
  },
];

export const TESTIMONIALS = [
  {
    quote: "Karthikeyan brings an exceptional combination of operational discipline from his manufacturing background and practical technical acumen in full-stack development. His ability to build end-to-end applications like ResumeIQ AI with Google Gemini is impressive.",
    author: "Technical Mentor",
    role: "Full-Stack Lead, NxtWave",
  },
  {
    quote: "In procurement operations, Karthikeyan demonstrated outstanding coordination, attention to detail, and problem-solving skills under tight manufacturing schedules. These exact traits make him a dependable, detail-oriented software developer.",
    author: "Operations Lead",
    role: "Procurement Manager, Royal Enfield",
  },
  {
    quote: "Karthikeyan's transition into technology is fueled by genuine passion, rapid learning speed, and hands-on execution. He builds complete, deployable products with clean code and modern tools.",
    author: "Peer Reviewer",
    role: "Senior Software Developer",
  },
];
