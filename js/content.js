/* ============================================
   CONTENT DATA - Easy Content Management
   ============================================
   Modify this file to update all portfolio content
   without touching HTML. The main.js file will
   populate the page from this data.
   ============================================ */

const PORTFOLIO_DATA = {
  // === PERSONAL INFO ===
  personal: {
    name: "Arthur Dorzee",
    title: "AI Engineer",
    tagline: "Building Intelligent Solutions",
    email: "arthur.dorzee@proton.me",
    phone: "+32...",
    location: "Brussels, Belgium",
    availability: "Available for opportunities",

    // Profile image path (relative to root)
    profileImage: "assets/images/profile.png",

    // Social links
    social: {
      linkedin: "https://www.linkedin.com/in/arthur-dorz%C3%A9e-8a3492136/",
      github: "https://github.com/Midii-11",
      email: "mailto:arthur.dorzee@proton.me"
    },

    // Resume/CV download link (optional)
    resumeUrl: null
  },

  // === HERO SECTION ===
  hero: {
    badge: "Open to Opportunities",
    titleLines: [
      "Hi, I'm Arthur",
      "AI Engineer"
    ],
    description: "AI Consultant and Machine Learning Engineer specializing in the design and deployment of Generative AI solutions for regulated industries, with a strong focus on banking and financial services.",

    // Stats shown in hero
    stats: [
      { value: "3+", label: "Years Experience" },
      { value: "10+", label: "Projects Delivered" },
      { value: "100%", label: "Client Satisfaction" }
    ],

    // CTA buttons
    primaryCTA: { text: "Get in Touch", href: "#contact" },
    secondaryCTA: { text: "View Projects", href: "#projects" }
  },

  // === ABOUT SECTION ===
  about: {
    title: "About Me",
    paragraphs: [
      "I'm an AI Consultant and Machine Learning Engineer with expertise across the full AI lifecycle, including data engineering, model development, LLM orchestration, and enterprise deployment.",
      "I deliver production-grade systems that meet strict requirements for compliance, security, and explainability. My focus is on building secure and scalable AI solutions using the Microsoft Azure ecosystem.",
      "I have a track record of improving regulatory readiness, automating documentation workflows, and enabling faster, auditable decision-making within financial institutions."
    ],

    // Highlights/Features
    highlights: [
      {
        icon: "🤖",
        title: "Generative AI",
        description: "LLM orchestration, RAG systems, and multi-agent workflows"
      },
      {
        icon: "🏦",
        title: "Regulated Industries",
        description: "Banking, finance, and compliance-aware solutions"
      },
      {
        icon: "☁️",
        title: "Cloud Architecture",
        description: "Azure AI Foundry, Azure ML, and scalable deployments"
      },
      {
        icon: "🔒",
        title: "Security First",
        description: "Enterprise-grade security and audit compliance"
      }
    ],

    // Languages
    languages: [
      { name: "French", level: "Native", flag: "🇫🇷" },
      { name: "English", level: "Fluent", flag: "🇬🇧" },
      { name: "Dutch", level: "Intermediate", flag: "🇳🇱" }
    ]
  },

  // === EXPERIENCE SECTION ===
  experience: [
    {
      role: "AI Developer",
      company: "Zest-Reply",
      logo: "ZR",
      period: "Jun 2025 — Present",
      location: "Brussels",
      type: "Full-time",
      description: "Designs and delivers production-grade Generative AI solutions for business and financial clients operating in regulated environments.",
      achievements: [
        "Leads the architecture of secure, scalable AI systems on Azure, ensuring compliance, auditability, and long-term maintainability",
        "Develops compliance-aware conversational AI and workflow automation, enabling risk-aware and auditable decision-making",
        "Works end to end across AI, backend, and frontend layers to integrate AI capabilities into enterprise platforms"
      ],
      technologies: ["Python", "Azure AI", "LangChain", "RAG", "React"]
    },
    {
      role: "Python Developer",
      company: "Belfius Bank",
      logo: "BB",
      period: "Jun 2024 — Jun 2025",
      location: "Brussels",
      type: "Full-time",
      description: "Contributed to one of Belfius Bank's flagship AI transformation programs, strengthening compliance, operational efficiency, and audit readiness across critical financial systems.",
      achievements: [
        "Delivered a robust, high-performance AI-enabled platform supporting hundreds of concurrent users in a regulated banking environment",
        "Streamlined workflows for business and risk teams, enabling AI-driven insights and faster decision-making",
        "Developed and optimized Python-based applications and REST APIs, increasing data pipeline performance by 250%"
      ],
      technologies: ["Python", "REST APIs", "Azure", "ML Pipelines", "CI/CD"]
    },
    {
      role: "AI Engineer",
      company: "Micropole France",
      logo: "MF",
      period: "Aug 2023 — Jun 2024",
      location: "Paris",
      type: "Full-time",
      description: "Worked on enterprise Generative AI solutions using the Microsoft Azure AI stack, contributing to early production deployments in customer service and document processing.",
      achievements: [
        "Implemented RAG-based architectures to enable secure access to internal knowledge under enterprise security constraints",
        "Prototyped workflow and automation solutions with LangChain and Azure Functions for financial reporting",
        "Collaborated with senior engineers and client teams through technical workshops and demos"
      ],
      technologies: ["Azure AI", "LangChain", "RAG", "Python", "Azure Functions"]
    },
    {
      role: "AI & Technology Consultant",
      company: "Drôhme",
      logo: "DR",
      period: "Dec 2022 — Jul 2023",
      location: "Brussels",
      type: "Contract",
      description: "Worked on the development of predictive and classification models to support business decision-making, collaborating with product and analytics stakeholders.",
      achievements: [
        "Built ML pipelines for forecasting and segmentation, integrating model outputs into business reporting",
        "Prototyped Computer Vision solutions using TensorFlow and OpenCV for real-time customer pattern analysis",
        "Delivered proof-of-concepts connecting business analytics with ML-based automation"
      ],
      technologies: ["TensorFlow", "OpenCV", "Python", "ML Pipelines", "Computer Vision"]
    }
  ],

  // === SKILLS SECTION ===
  skills: {
    categories: [
      {
        title: "Programming Languages",
        icon: "💻",
        skills: ["Python", "JavaScript", "TypeScript", "Bash", "React"]
      },
      {
        title: "Generative AI",
        icon: "🧠",
        skills: ["LangChain", "RAG", "Multi-Agent Workflows", "MCP", "LLM Fine-tuning", "Prompt Engineering"]
      },
      {
        title: "AI & Machine Learning",
        icon: "🤖",
        skills: ["PyTorch", "Scikit-learn", "TensorFlow", "Computer Vision", "NLP", "Model Training"]
      },
      {
        title: "MLOps & Cloud",
        icon: "☁️",
        skills: ["Azure AI Foundry", "Azure ML", "Docker", "Kubernetes", "CI/CD Pipelines"]
      },
      {
        title: "Development Tools",
        icon: "🛠️",
        skills: ["Git", "Linux/Unix", "REST APIs", "Agile/Scrum", "Azure DevOps"]
      },
      {
        title: "Data & Databases",
        icon: "📊",
        skills: ["Azure AI Search", "PostgreSQL", "Vector Databases", "Data Pipelines"]
      }
    ],

    // Featured technologies with icons
    featured: [
      { name: "Python", icon: "🐍" },
      { name: "Azure", icon: "☁️" },
      { name: "LangChain", icon: "🔗" },
      { name: "PyTorch", icon: "🔥" },
      { name: "Docker", icon: "🐳" },
      { name: "React", icon: "⚛️" }
    ]
  },

  // === PROJECTS SECTION ===
  projects: [
    {
      title: "ObsidianSecure",
      category: "Security / Encryption",
      description: "ObsidianSecure provides maximum security for storing credentials and confidential notes in Obsidian through complete vault encryption. A privacy-first solution for secure note-taking.",
      technologies: ["Python", "Encryption", "Obsidian API", "Security"],
      github: "https://github.com/Midii-11/obsidian_secure",
      demo: null,
      image: null,
      featured: true
    },
    {
      title: "LinkedIn AutoReply",
      category: "Automation / AI",
      description: "An intelligent automation tool that helps manage LinkedIn communications efficiently. Streamlines professional networking through smart automated responses.",
      technologies: ["Python", "Automation", "LinkedIn API", "AI"],
      github: "https://github.com/Midii-11/Linkedin_AutoReply",
      demo: null,
      image: null,
      featured: true
    }
  ],

  // === EDUCATION SECTION ===
  education: [
    {
      degree: "Master's in Artificial Intelligence",
      school: "Maastricht University",
      period: "Sep 2019 — Aug 2022",
      location: "Netherlands",
      icon: "🎓",
      description: "Specialized in machine learning, neural networks, and AI systems design.",
      highlights: ["Machine Learning", "Neural Networks", "AI Ethics", "Research Methods"]
    },
    {
      degree: "Bachelor of Sciences",
      school: "Maastricht University",
      field: "Physics & Computer Science",
      period: "Sep 2016 — Aug 2019",
      location: "Netherlands",
      icon: "📚",
      description: "Foundation in physics principles and computer science fundamentals.",
      highlights: ["Physics", "Computer Science", "Mathematics", "Programming"]
    }
  ],

  // === CERTIFICATIONS (Optional) ===
  certifications: [
    // Add certifications here when available
    // {
    //   name: "Azure AI Engineer Associate",
    //   issuer: "Microsoft",
    //   date: "2024",
    //   icon: "☁️",
    //   link: "https://..."
    // }
  ],

  // === TESTIMONIALS (Optional) ===
  testimonials: [
    // Add testimonials here when available
    // {
    //   quote: "Arthur delivered exceptional work...",
    //   author: "John Doe",
    //   role: "CTO at Company",
    //   image: "path/to/image.jpg"
    // }
  ],

  // === BLOG SECTION (Optional) ===
  blog: {
    enabled: false, // Set to true to enable blog section
    posts: [
      // Add blog posts here when available
      // {
      //   title: "Building RAG Systems at Scale",
      //   excerpt: "A deep dive into...",
      //   date: "Jan 2025",
      //   link: "https://...",
      //   image: null
      // }
    ]
  },

  // === NAVIGATION ===
  navigation: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" }
  ],

  // === FOOTER ===
  footer: {
    copyright: "Arthur Dorzee",
    year: new Date().getFullYear(),
    madeWith: "Made with passion in Brussels"
  }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PORTFOLIO_DATA;
}
