export const myServices = [
  {
    id: 1,
    title: "Full-Stack Web Applications",
    description:
      "End-to-end web applications with React frontends, Laravel/Node.js backends, and MySQL databases — built for scale with authentication, dashboards, and reporting.",
    icon: "layers",
  },
  {
    id: 2,
    title: "Mobile App Development",
    description:
      "Cross-platform Android/iOS applications using React Native and Expo with GPS tracking, push notifications, biometric auth, and offline data storage.",
    icon: "smartphone",
  },
  {
    id: 3,
    title: "Business Management Systems",
    description:
      "Custom ERP, CRM, payroll, inventory, student management, and attendance systems tailored to your organization's workflow.",
    icon: "briefcase",
  },
  {
    id: 4,
    title: "API Development & Integration",
    description:
      "Secure RESTful APIs with token authentication, third-party service integrations, and seamless data flow between systems and platforms.",
    icon: "plug",
  },
  {
    id: 5,
    title: "Database Design & Management",
    description:
      "Efficient MySQL schemas, normalization, migrations, seeders, query optimization, and data architecture for reliable applications.",
    icon: "database",
  },
  {
    id: 6,
    title: "Custom Website Development",
    description:
      "Modern, responsive websites with landing pages, contact forms, service portfolios, SEO-friendly structure, and mobile optimization.",
    icon: "globe",
  },
  {
    id: 7,
    title: "Geolocation & Biometric Systems",
    description:
      "GPS geofencing, face verification attendance, radius-based classroom verification, background location monitoring, and biometric integration.",
    icon: "cpu",
  },
  {
    id: 8,
    title: "Reporting & PDF Generation",
    description:
      "Automated payslip generation, PDF reports, Excel/CSV import and export, attendance analytics, and data visualization dashboards.",
    icon: "wrench",
  },
  {
    id: 9,
    title: "Deployment & Maintenance",
    description:
      "Deployment to Vercel, Railway, Render, Hostinger, and custom servers. Ongoing support, performance monitoring, and bug fixes.",
    icon: "palette",
  },
];

const projectGradients = [
  "from-blue-600 via-purple-600 to-indigo-700",
  "from-emerald-600 via-teal-600 to-cyan-700",
  "from-orange-600 via-rose-600 to-pink-700",
  "from-cyan-600 via-blue-600 to-violet-700",
  "from-rose-600 via-pink-600 to-fuchsia-700",
  "from-red-600 via-orange-600 to-amber-700",
  "from-violet-600 via-purple-600 to-indigo-700",
  "from-teal-600 via-cyan-600 to-blue-700",
  "from-indigo-600 via-blue-600 to-cyan-700",
  "from-amber-600 via-orange-600 to-red-700",
  "from-fuchsia-600 via-purple-600 to-blue-700",
];

export const myProjects = [
  {
    id: 1,
    title: "Scholars Nudge — Smart Attendance",
    description:
      "A complete attendance management platform with face verification, GPS geofencing, live monitoring, and role-based dashboards for schools and universities.",
    subDescription: [
      "Face verification attendance with real-time validation and background location monitoring.",
      "GPS geofencing with radius-based classroom verification for accurate check-ins.",
      "Student mobile app, lecturer dashboard, and administrator dashboard with analytics.",
      "Built with Laravel backend, React Native (Expo) mobile app, and MySQL database.",
    ],
    href: "https://scholarsnudge.com/",
    image: "/assets/projects/scholars-nudge.jpg",
    gradient: projectGradients[8],
    tags: [
      { id: 1, name: "Laravel", path: "/assets/logos/laravel.svg" },
      { id: 2, name: "React Native", path: "/assets/logos/react.svg" },
      { id: 3, name: "Expo", path: "" },
      { id: 4, name: "MySQL", path: "/assets/logos/sqlite.svg" },
      { id: 5, name: "REST API", path: "" },
    ],
  },
  {
    id: 2,
    title: "Payroll Management System",
    description:
      "A complete payroll application with employee management, automated salary calculation, payslip generation, and downloadable PDF reports.",
    subDescription: [
      "Employee management with departments, positions, and salary structures.",
      "Automated salary calculation with deductions and tax handling.",
      "One-click payslip generation and downloadable PDF reports.",
      "Built with Laravel backend, React frontend, and MySQL database.",
    ],
    href: "",
    image: "/assets/projects/payroll.png",
    gradient: projectGradients[1],
    tags: [
      { id: 1, name: "Laravel", path: "/assets/logos/laravel.svg" },
      { id: 2, name: "React", path: "/assets/logos/react.svg" },
      { id: 3, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
      { id: 4, name: "MySQL", path: "/assets/logos/sqlite.svg" },
    ],
  },
  {
    id: 3,
    title: "Student Filing System",
    description:
      "A Laravel-based digital student records management system that simplifies document storage, retrieval, and administration for schools.",
    subDescription: [
      "Built with Laravel and SQLite for robust backend data management.",
      "Student registration, file management, and advanced search system.",
      "Secure authentication with role-based admin dashboard.",
      "Streamlined school record-keeping replacing manual paper systems.",
    ],
    href: "",
    image: "/assets/projects/student-filing.png",
    gradient: projectGradients[0],
    tags: [
      { id: 1, name: "Laravel", path: "/assets/logos/laravel.svg" },
      { id: 2, name: "SQLite", path: "/assets/logos/sqlite.svg" },
      { id: 3, name: "PHP", path: "/assets/logos/php.svg" },
      { id: 4, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
  {
    id: 4,
    title: "Hostel Allocation System",
    description:
      "A web-based hostel allocation system for educational institutions with room assignment, capacity management, and administrative reporting.",
    subDescription: [
      "Student registration with room assignment and capacity management.",
      "Administrative dashboard with allocation reports and student management.",
      "Real-time room availability tracking and allocation status.",
      "Streamlined hostel operations replacing manual allocation processes.",
    ],
    href: "",
    image: "/assets/projects/hostel.jpg",
    gradient: projectGradients[9],
    tags: [
      { id: 1, name: "Laravel", path: "/assets/logos/laravel.svg" },
      { id: 2, name: "MySQL", path: "/assets/logos/sqlite.svg" },
      { id: 3, name: "PHP", path: "/assets/logos/php.svg" },
      { id: 4, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
  {
    id: 5,
    title: "GPA/CGPA Management Portal",
    description:
      "A student academic management platform for calculating and tracking GPA and CGPA with result analysis and an academic dashboard.",
    subDescription: [
      "Student login with secure access to academic records.",
      "Automated GPA calculation with CGPA tracking across semesters.",
      "Result analysis with visual grade breakdowns and academic progress.",
      "Clean academic dashboard for at-a-glance performance overview.",
    ],
    href: "",
    image: "/assets/projects/gpa-portal.jpg",
    gradient: projectGradients[10],
    tags: [
      { id: 1, name: "Laravel", path: "/assets/logos/laravel.svg" },
      { id: 2, name: "React", path: "/assets/logos/react.svg" },
      { id: 3, name: "MySQL", path: "/assets/logos/sqlite.svg" },
      { id: 4, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
  {
    id: 6,
    title: "Medical Crowdfunding DApp",
    description:
      "A blockchain-powered crowdfunding platform for medical bills with fraud prevention, MetaMask integration, and secure donation tracking.",
    subDescription: [
      "Blockchain-powered decentralized application for transparent medical fundraising.",
      "MetaMask wallet authentication for secure, trustless user sessions.",
      "Smart contract integration for donation tracking and fund disbursement.",
      "Built with Laravel backend for admin oversight and fraud prevention logic.",
    ],
    href: "",
    image: "/assets/projects/blockchain-medical.jpg",
    gradient: projectGradients[7],
    tags: [
      { id: 1, name: "Laravel", path: "/assets/logos/laravel.svg" },
      { id: 2, name: "React", path: "/assets/logos/react.svg" },
      { id: 3, name: "Web3", path: "" },
      { id: 4, name: "Blockchain", path: "" },
    ],
  },
  {
    id: 7,
    title: "Network Packet Analyzer",
    description:
      "A cybersecurity tool integrating Laravel, React, Python, Wireshark, and TShark to analyze network traffic and detect anomalies in real time.",
    subDescription: [
      "Real-time packet capture and network traffic analysis.",
      "Integration with Wireshark and TShark for deep packet inspection.",
      "Interactive visualization dashboard for monitoring network health.",
      "Security alerts and anomaly detection for suspicious traffic patterns.",
    ],
    href: "",
    image: "/assets/projects/network-analyzer.jpg",
    gradient: projectGradients[5],
    tags: [
      { id: 1, name: "Laravel", path: "/assets/logos/laravel.svg" },
      { id: 2, name: "React", path: "/assets/logos/react.svg" },
      { id: 3, name: "Python", path: "" },
      { id: 4, name: "Wireshark", path: "" },
    ],
  },
  {
    id: 8,
    title: "Real Estate Website",
    description:
      "A responsive property listing platform featuring modern UI, property management, search functionality, and customer inquiry forms.",
    subDescription: [
      "Property listings with detailed info, pricing, and image galleries.",
      "Advanced property search and filter system for quick discoveries.",
      "Responsive design optimized for desktop and mobile browsing.",
      "Contact forms and inquiry system for potential buyers.",
    ],
    href: "https://dattechgee-react-estate.vercel.app/",
    image: "/assets/projects/estate.JPG",
    gradient: projectGradients[2],
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "Laravel", path: "/assets/logos/laravel.svg" },
      { id: 3, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
      { id: 4, name: "MySQL", path: "/assets/logos/sqlite.svg" },
    ],
  },
  {
    id: 9,
    title: "Climate Information Website",
    description:
      "A React-based web application displaying real-time weather and climate data with an interactive dashboard and 5-day forecast.",
    subDescription: [
      "Real-time weather data fetched from public APIs.",
      "5-day forecast with clean data visualization.",
      "Responsive UI that works across all devices.",
      "Deployed on Vercel for fast global access.",
    ],
    href: "https://dattechgeeclimate.vercel.app/",
    image: "/assets/projects/weather.JPG",
    gradient: projectGradients[3],
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "Vite.js", path: "/assets/logos/vitejs.svg" },
      { id: 3, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
  {
    id: 10,
    title: "Nike Landing Page",
    description:
      "A modern responsive landing page demonstrating clean UI/UX principles, strong visuals, and smooth product showcase animations.",
    subDescription: [
      "Designed as a modern landing page for product storytelling.",
      "Optimized for readable content hierarchy and mobile responsiveness.",
      "Smooth scroll animations and interactive product showcase.",
      "Live deployment on Vercel.",
    ],
    href: "https://dattechgee-nike-landing-page.vercel.app/",
    image: "/assets/projects/nike-landing-page.JPG",
    gradient: projectGradients[4],
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
      { id: 3, name: "Vite.js", path: "/assets/logos/vitejs.svg" },
    ],
  },
  {
    id: 11,
    title: "Portfolio Website",
    description:
      "A personal developer portfolio with 3D elements, interactive sections, animations, and SEO-optimized structured data.",
    subDescription: [
      "Built with React, Three.js, and Tailwind CSS for modern visuals.",
      "Interactive 3D globe and animated particle backgrounds.",
      "Contact form powered by EmailJS for direct communication.",
      "SEO-optimized with structured data and meta tags.",
    ],
    href: "https://dattechgee.vercel.app/",
    image: "/assets/projects/portfolio.JPG",
    gradient: projectGradients[6],
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "Three.js", path: "/assets/logos/threejs.svg" },
      { id: 3, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
      { id: 4, name: "Vite.js", path: "/assets/logos/vitejs.svg" },
    ],
  },
];

export const mySocials = [
  {
    name: "GitHub",
    href: "https://github.com/dattechgee",
    icon: "/assets/socials/github.svg",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/2348103093734",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/dattechgee/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/dattechgee?igsh=MThhbndmYnNyc3FxOQ==",
    icon: "/assets/socials/instagram.svg",
  },
  {
    name: "Twitter",
    href: "https://x.com/dattechgee",
    icon: "/assets/socials/twitter.svg",
  },
];

export const experiences = [
  {
    title: "Freelance Full-Stack Developer",
    job: "DatTechGee — Self-Employed",
    date: "2023-Present",
    contents: [
      "Building custom web applications, mobile apps, and business systems for clients across schools, startups, SMEs, and organizations in Nigeria.",
      "Developed Scholars Nudge — a smart attendance system with face verification, GPS geofencing, live monitoring, and role-based dashboards using Laravel and React Native (Expo).",
      "Built a Payroll Management System with employee management, automated salary calculation, and payslip generation.",
      "Created a Student Filing System for schools with Laravel, secure authentication, and record management.",
      "Developed a Hostel Allocation System with room assignment, capacity management, and admin reporting.",
      "Built a GPA/CGPA Management Portal with automated grade calculation and academic dashboards.",
      "Delivering end-to-end solutions from requirements analysis and database design to deployment on Vercel, Railway, and custom servers.",
    ],
  },
  {
    title: "Frontend & Backend Developer",
    job: "Various Client Projects",
    date: "2021-2023",
    contents: [
      "Built responsive websites and landing pages using React, JavaScript, HTML5, CSS3, and Tailwind CSS.",
      "Developed backend APIs and database systems using Laravel, PHP, MySQL, and SQLite.",
      "Implemented authentication systems, role-based access control, and secure data handling.",
      "Designed and deployed RESTful APIs with token authentication for mobile and web applications.",
      "Worked with Git/GitHub for version control and collaborative development workflows.",
    ],
  },
];

const avatarColors = [
  ["#5c33cc", "#7a57db"],
  ["#33c2cc", "#57db96"],
  ["#ca2f8c", "#ea4884"],
  ["#cc6033", "#d6995c"],
  ["#57db96", "#33c2cc"],
  ["#7a57db", "#5c33cc"],
  ["#ea4884", "#ca2f8c"],
  ["#d6995c", "#cc6033"],
];

export const reviews = [
  {
    name: "Chidi Okwu",
    username: "@chidiventures",
    body: "Isaac delivered our school portal on time and it works perfectly. The student filing system transformed how we manage records. Highly professional!",
    initials: "CO",
    colorIdx: 0,
  },
  {
    name: "Amina Bello",
    username: "@aminatech",
    body: "Our payroll system is now fully automated thanks to DatTechGee. Salary calculations and payslips are done in seconds. Great work!",
    initials: "AB",
    colorIdx: 1,
  },
  {
    name: "Emeka Nwosu",
    username: "@emekarealty",
    body: "The estate website Isaac built for us looks amazing and brings in leads regularly. The property search feature is a game changer.",
    initials: "EN",
    colorIdx: 2,
  },
  {
    name: "Fatima Abdullahi",
    username: "@fatimastartup",
    body: "Professional, responsive, and skilled. Isaac understood our vision and built exactly what we needed for our business platform.",
    initials: "FA",
    colorIdx: 3,
  },
  {
    name: "Tunde Adebayo",
    username: "@tunde_dev",
    body: "I worked with Isaac on a project and his attention to detail is impressive. Clean code, modern UI, and great problem-solving skills.",
    initials: "TA",
    colorIdx: 4,
  },
  {
    name: "Grace Eze",
    username: "@gracefounder",
    body: "DatTechGee built our company website from scratch. The result is clean, fast, and exactly what we envisioned. Will work with them again!",
    initials: "GE",
    colorIdx: 5,
  },
  {
    name: "Omar Hassan",
    username: "@omarlogistics",
    body: "Isaac helped us digitize our operations with a custom management system. The efficiency improvement has been incredible.",
    initials: "OH",
    colorIdx: 6,
  },
  {
    name: "Blessing Iyamu",
    username: "@blessingedu",
    body: "From the first meeting to deployment, Isaac was transparent and delivered quality work. Our school management system is now live and working beautifully.",
    initials: "BI",
    colorIdx: 7,
  },
];

export const getAvatarColors = (idx) => avatarColors[idx % avatarColors.length];

export const techStack = [
  { name: "Laravel", logo: "/assets/logos/laravel.svg" },
  { name: "React", logo: "/assets/logos/react.svg" },
  { name: "React Native", logo: "/assets/logos/react.svg" },
  { name: "Expo", logo: "" },
  { name: "PHP", logo: "/assets/logos/php.svg" },
  { name: "JavaScript", logo: "/assets/logos/javascript.svg" },
  { name: "MySQL", logo: "/assets/logos/sqlite.svg" },
  { name: "Tailwind CSS", logo: "/assets/logos/tailwindcss.svg" },
  { name: "Node.js", logo: "/assets/logos/nodejs.svg" },
  { name: "Git", logo: "/assets/logos/git.svg" },
  { name: "Vite.js", logo: "/assets/logos/vitejs.svg" },
  { name: "Three.js", logo: "/assets/logos/threejs.svg" },
];

export const industries = [
  { name: "Schools & Education", initials: "SE", colorIdx: 0 },
  { name: "Startups & SMEs", initials: "SS", colorIdx: 1 },
  { name: "Real Estate", initials: "RE", colorIdx: 2 },
  { name: "Healthcare", initials: "HC", colorIdx: 3 },
  { name: "E-commerce", initials: "EC", colorIdx: 4 },
  { name: "Churches & NGOs", initials: "CN", colorIdx: 5 },
  { name: "Blockchain & Web3", initials: "BW", colorIdx: 6 },
  { name: "Logistics", initials: "LG", colorIdx: 7 },
];

export const currentFocus = [
  "Full-Stack Development",
  "Mobile App Development",
  "Geolocation & Biometric Systems",
  "AI-Powered Applications",
  "SaaS Platforms",
  "REST API Development",
  "Database Architecture",
];

export const portfolioStats = {
  yearsExperience: 4,
  projectsDelivered: 15,
  happyClients: 15,
  technologiesUsed: 14,
  clientSatisfaction: 100,
};
