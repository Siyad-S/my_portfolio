export const projects = [
    {
        title: "Fragrance Kart",
        tech: ["React.js", "Next.js 15", "Node.js", "TypeScript", "Express.js", "Redux Toolkit", "MongoDB", "Docker", "Cloudinary", "tailwind CSS", "GSAP", "shadcn/ui", "Zod", "RTK Query", "Passport.js", "Razorpay", "Google OAuth", "JWT", "AI-Generated Animations", "nodemailer", "Brevo", "Vercel", "Render"],
        image: "/projects/fragrance_kart_project_thumb.png",
        github: "https://github.com/Siyad-S/perfume_kart-ecommerce",
        live: "https://perfume-kart-ecommerce.vercel.app",
        liveAdmin: "https://perfume-kart-ecommerce.vercel.app/admin",
        color: "#D4AF37",
        company: "",
        type: "Personal Project",
        description: "Full-Stack E-commerce Platform architected with Next.js 15 and Express.js in a monorepo setup.",
        features: ["Hybrid Rendering (SSR + CSR)", "Dual-Token Auth & OAuth", "Razorpay Payment Gateway", "AI-Generated Animations"],
        details: [
            { title: "Architecture & Monorepo", content: "Architected a scalable full-stack monorepo using Next.js 15 and Express.js, implementing a hybrid rendering strategy (SSR + CSR) that improved SEO while maintaining a rich, interactive user experience." },
            { title: "State & Performance", content: "Engineered a high-performance frontend with Redux Toolkit and RTK Query for efficient global state management, caching, and optimistic updates, achieving a 40% reduction in network overhead." },
            { title: "UI/UX", content: "Designed a premium, cinema-grade interface using Tailwind CSS v4 and AI-generated GSAP animations, enabling rapid implementation of complex scroll-triggered effects and fluid micro-interactions." },
            { title: "Security & Auth", content: "Secured user sessions with a robust dual-token system (Access/Refresh rotation) and Google OAuth 2.0 via Passport.js, ensuring persistent and safe authentication." },
            { title: "Data & Validation", content: "Built distinct MongoDB aggregation pipelines for advanced filtering and real-time analytics, enforcing end-to-end type safety with Zod validation schemas on all API inputs." },
            { title: "Payments & Integration", content: "Integrated Razorpay Payment Gateway to handle the complete transaction lifecycle, including order creation, signature verification, and automated failure resilience." },
            { title: "DevOps & Deployment", content: "Containerized the entire stack with Docker Compose for consistent environments and deployed via a hybrid cloud strategy on Vercel (Frontend) and Render (Backend)." }
        ],
        gallery: []
    },
    {
        title: "Communa",
        tech: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "Material UI", "Redux", "RTK Query", "Postmark", "AWS"],
        image: "/projects/communa_app_thumb.png",
        github: "",
        live: "https://www.communa.app/",
        color: "#4A90E2",
        company: "Stackmod Innovations Pvt. Ltd.",
        description: "Community-based platform for medical courses allowing complex membership management and course content delivery via dedicated admin panels.",
        features: ["Role-Based Membership Flows", "Hierarchical Email Notifications", "External Payment Webhooks", "Complex MongoDB Aggregations"],
        details: [
            { title: "Platform Overview", content: "Worked on a community-based application providing medical field-related courses, managing memberships via the Engage admin panel and course content via the Empower admin panel." },
            { title: "Membership Management", content: "Designed complex membership transfer features with role-based flows and ownership transfer, enhancing admin control." },
            { title: "Communication System", content: "Implemented email notifications using Postmark for hierarchical admin communication, improving response times." },
            { title: "Payments Integration", content: "Integrated an external payment application with webhooks, optimizing transaction processing." },
            { title: "UX & Workflows", content: "Created customizable form for membership plan workflows and implemented loaders/skeletons for seamless user experiences." },
            { title: "Performance & Data", content: "Optimized APIs with complex MongoDB aggregation pipelines, reducing query times." },
            { title: "Maintenance & Auth", content: "Participated on bug fixes in Google authentication with Gmail login and overall applications." },
            { title: "Security", content: "Configured AWS Secrets Manager to securely store sensitive data elements." }
        ],
        gallery: []
    },
    {
        title: "Handy Squad CRM",
        tech: ["Node.js", "Next.js", "Express.js", "React.js", "PostgreSQL", "Sequelize", "Material UI", "Redux", "Zoho Books API", "Nodemailer", "Context API", "JWT"],
        image: "/projects/handy_squad_crm_mockup.png",
        github: "",
        live: "",
        color: "#FF6B6B",
        company: "Stackmod Innovations Pvt. Ltd.",
        description: "Automated lead generation CRM that streamlines the sales pipeline by integrating user bookings and Meta Lead Ads.",
        features: ["Automated Lead Gen", "Zoho Books Integration", "Role-Based Access Control", "Dynamic Filters"],
        details: [
            { title: "Lead Automation", content: "Automated lead generation from user bookings and Meta Lead Ads, streamlining the sales pipeline." },
            { title: "Billing Integration", content: "Integrated Zoho Books API to auto-generate estimates and invoices, improving billing efficiency." },
            { title: "Access Control & Management", content: "Implemented role-based access control, activity logging, lead export, and dynamic filters for secure and efficient lead management." }
        ],
        gallery: []
    },
    {
        title: "Handy Squad Web App",
        tech: ["Next.js", "React.js", "Node.js", "Express.js", "PostgreSQL", "Sequelize", "Material UI", "Redux", "Google Places API", "SEO", "Nodemailer", "Context API", "JWT"],
        image: "/projects/handysquad_thumb.png",
        github: "",
        live: "https://www.handysquad.in/",
        color: "#10B981",
        company: "Stackmod Innovations Pvt. Ltd.",
        description: "SEO-friendly web application featuring dynamic service pages and integrated Google services for location and security.",
        features: ["Dynamic SEO & Service Pages", "Google Places API Integration", "Google reCAPTCHA Security", "Nodemailer Notifications"],
        details: [
            { title: "Build", content: "Built from scratch collaborating with the design team to create a visually appealing and user-friendly interface." },
            { title: "Google Places Integration", content: "Integrated Google Places API for address autocomplete and displaying business ratings to enhance user experience." },
            { title: "SEO Optimization", content: "Converted the web app to SEO-friendly using Dynamic SEO and Next.js SEO features to improve search visibility." },
            { title: "Dynamic Content", content: "Built dynamic service detail pages using template-based rendering for scalability and efficient content management." },
            { title: "Secure Communication", content: "Implemented Google reCAPTCHA to prevent spam, ensure secure form submissions and Nodemailer for reliable mail notifications." }
        ],
        gallery: []
    },
    {
        title: "Handy Squad Admin Dashboard",
        tech: ["Next.js", "React.js", "Node.js", "Express.js", "PostgreSQL", "Sequelize", "Material UI", "Redux", "Google Places API", "SEO", "Nodemailer", "Context API", "JWT", "AWS S3", "AWS Elastic Transcoder"],
        image: "/projects/handy_squad_admin_dashboard_mockup.png",
        github: "",
        live: "",
        color: "#6C63FF",
        company: "Stackmod Innovations Pvt. Ltd.",
        description: "Robust admin-only access system built on a customized MUI template, enabling full content management with role-based controls and secure authentication.",
        features: ["Role-Based Access", "Dynamic Forms", "AWS S3 Integration", "Video Transcoding"],
        details: [
            { title: "Build", content: "Built by uitilizing the MUI's premium admin dashboard template and customized it to meet the specific needs of the project." },
            { title: "Admin Architecture", content: "Built a robust admin-only access system, enabling full content management with role-based controls and secure authentication." },
            { title: "Content Management", content: "Developed dynamic forms with drag-and-drop uploads and SEO metadata control for enhanced content flexibility." },
            { title: "Secure File Handling", content: "Implemented secure file uploads using AWS S3 with signed URLs, supporting large files and transcoded video content using AWS Elastic Transcoder." }
        ],
        gallery: []
    }
];

export const skills = [
    { name: 'Next.js', slug: 'nextdotjs', color: '#ffffff' },
    { name: 'React', slug: 'react', color: '#61DAFB' },
    { name: 'Node.js', slug: 'nodedotjs', color: '#339933' },
    { name: 'Express.js', slug: 'express', color: '#6a6969ff' },
    { name: 'PostgreSQL', slug: 'postgresql', color: '#336791' },
    { name: 'MongoDB', slug: 'mongodb', color: '#47A248' },
    { name: 'TypeScript', slug: 'typescript', color: '#3178C6' },
    { name: 'JavaScript', slug: 'javascript', color: '#F7DF1E', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
    { name: 'Redux', slug: 'redux', color: '#764ABC' },
    { name: 'RTK Query', slug: 'redux', color: '#764ABC' },
    { name: 'Tailwind', slug: 'tailwindcss', color: '#06B6D4' },
    { name: 'Material UI', slug: 'mui', color: '#007FFF' },
    { name: 'Shadcn UI', slug: 'shadcnui', color: '#959393ff' },
    { name: 'AWS', slug: 'aws', color: '#232F3E', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
    { name: 'Docker', slug: 'docker', color: '#2496ED' },
    { name: 'Git', slug: 'git', color: '#F34F4F' },
    { name: 'Aggregation Pipeline', slug: 'mongodb', color: '#47A248' },
    { name: 'Sequelize', slug: 'sequelize', color: '#764ABC' },
    { name: 'JWT', slug: 'jsonwebtokens', color: '#535252' },
    { name: 'Google OAuth', slug: 'google', color: '#4285F4' },
    { name: 'Razorpay', slug: 'razorpay', color: '#3395FF' },
    { name: 'Cloudinary', slug: 'cloudinary', color: '#3448C5' },
    { name: 'HTML5', slug: 'html5', color: '#E34F26', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg' },
    { name: 'CSS3', slug: 'css3', color: '#1572B6', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg' },
    { name: 'Bootstrap', slug: 'bootstrap', color: '#7952B3' },
    { name: 'Postman', slug: 'postman', color: '#FF6C37' },
];

export const socials = [
    { name: "GitHub", url: "https://github.com/", icon: "Github" },
    { name: "LinkedIn", url: "https://linkedin.com/in/siyads", icon: "Linkedin" },
    // { name: "Twitter", url: "https://twitter.com/", icon: "Twitter" },
    { name: "Email", url: "mailto:siyadsaidu313@gmail.com", icon: "Mail" },
];

export const aboutMe = [
    {
        title: "Engineering Performance behind Pixel-Perfection.",
        description: `Software Engineer bridging the gap between rigorous logic and creative design. I bring professional experience in delivering complex corporate applications, complemented by a dedication to architecting independent platforms that showcase end-to-end code ownership. My approach integrates advanced engineering principles with modern innovation, ensuring that every solution is as efficient as it is engaging.`,
        imagePath: "/images/about_me.jpeg"
    }
]

export const experience = [
    {
        company: "Stackmod Innovations Pvt. Ltd.",
        role: "Junior Software Engineer",
        period: "Mar 2024 - May 2025",
        description: "Spearheaded the development of the Handy Squad ecosystem, delivering a suite of SEO-optimized web applications, CRM tools, and admin dashboards.",
        achievements: [
            "Handy Squad CRM: Automating lead generation by integrating Meta Lead Ads and Zoho Books API to auto-generate invoices and streamline the sales pipeline.",
            "Admin Dashboard: Engineered a scalable media pipeline using AWS S3 (Signed URLs) and AWS Elastic Transcoder for secure, high-quality video processing.",
            "Web App Architecture: Built an SEO-friendly application using Next.js Dynamic SEO and Google Places API, implementing template-based rendering for service pages.",
            "Security & Access: Implemented Role-Based Access Control (RBAC) for lead management and secured public forms against spam using Google reCAPTCHA."
        ]
    },
    {
        company: "Stackmod Innovations Pvt. Ltd.",
        role: "Software Engineer",
        period: "May 2025 - Jul 2025",
        description: "Worked on complex logics of 'Communa', a community-based medical course platform.",
        achievements: [
            "Complex Workflows: Designed advanced membership transfer features with role-based flows and ownership transfer capabilities for medical community management.",
            "Backend Optimization: Optimized data retrieval by constructing complex MongoDB aggregation pipelines, significantly reducing query response times for data-heavy dashboards.",
            "Secure Integrations: Implemented Postmark for hierarchical email notifications and configured AWS Secrets Manager to securely manage sensitive credentials.",
            "Payment Systems: Integrated external payment webhooks to handle real-time transaction processing and automate membership plan updates."
        ]
    },
    {
        company: "Personal Projects",
        role: "Full Stack Developer",
        period: "Aug 2025 - Present",
        description: "Architecting 'Fragrance Kart', a high-performance e-commerce monorepo built with Next.js 15 and cinema-grade UI.",
        achievements: [
            "Modern Architecture: Architected a scalable monorepo using Next.js 15 and Express.js, implementing Hybrid Rendering (SSR + CSR) for optimal SEO and performance.",
            "Advanced Security: Secured user sessions with a robust dual-token system (Access/Refresh rotation) and Google OAuth 2.0 via Passport.js.",
            "Performance Engineering: Achieved a 40% reduction in network overhead by engineering efficient state management with Redux Toolkit and RTK Query.",
            "UI/UX Excellence: Designed a premium interface using Tailwind CSS v4 and AI-generated GSAP animations for complex scroll-triggered effects."
        ]
    }
];
