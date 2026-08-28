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
    featured: true,
    problem:
      "Schools and universities struggled with manual, forgeable attendance records and no real-time visibility into classroom participation.",
    solution:
      "Built a full-stack attendance platform combining face verification, GPS geofencing and live monitoring across student, lecturer and admin dashboards.",
    result:
      "Delivered verifiable, automated attendance tracking that cut record-keeping overhead and gave institutions live oversight — deployed for real school use.",
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
    featured: true,
    problem:
      "Payroll was handled manually and in spreadsheets, making salary computation, deductions and payslip delivery slow and error-prone.",
    solution:
      "Automated the full payroll cycle — employee records, salary calculation with tax and deductions, and downloadable PDF payslips.",
    result:
      "Turned a multi-day manual process into one-click salary runs with consistent, audit-ready payslips and reports.",
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
    featured: true,
    problem:
      "Medical fundraising suffered from opaque fund handling, fraud and a lack of donor trust in how money reached patients.",
    solution:
      "Built a blockchain-powered crowdfunding DApp with MetaMask authentication and smart-contract donation tracking for transparent disbursement.",
    result:
      "Created a trustless fundraising flow where every donation is recorded on-chain, reducing fraud exposure and rebuilding donor confidence.",
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
    featured: true,
    problem:
      "Networks lacked accessible tools to inspect traffic and detect suspicious activity before it became a security incident.",
    solution:
      "Integrated Laravel, React, Python, Wireshark and TShark into a real-time packet-capture and anomaly-detection dashboard.",
    result:
      "Gave operators a live view of network health with automated alerts for unusual traffic patterns and faster incident response.",
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
  {
    id: 12,
    title: "E-Commerce Admin Dashboard",
    description:
      "A full-stack admin dashboard for managing products, orders, customers, and analytics for an online store with real-time sales tracking.",
    subDescription: [
      "Product catalog management with categories, variants, and image uploads.",
      "Order processing workflow with status tracking and customer notifications.",
      "Sales analytics dashboard with charts, revenue trends, and top products.",
      "Built with React, Laravel API, MySQL, and Tailwind CSS.",
    ],
    href: "",
    image: "/assets/image5.jpg",
    gradient: projectGradients[3],
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "Laravel", path: "/assets/logos/laravel.svg" },
      { id: 3, name: "MySQL", path: "/assets/logos/sqlite.svg" },
      { id: 4, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
  {
    id: 13,
    title: "SaaS Analytics Dashboard",
    description:
      "A multi-tenant analytics dashboard for SaaS businesses showing user metrics, MRR, churn rates, and feature usage with interactive charts.",
    subDescription: [
      "Multi-tenant architecture with per-account data isolation.",
      "Real-time metric widgets for active users, revenue, and growth.",
      "Interactive line and bar charts with date range filtering.",
      "Built with Next.js, Node.js, PostgreSQL, and Chart.js.",
    ],
    href: "",
    image: "/assets/image7.jpg",
    gradient: projectGradients[6],
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "Next.js", path: "" },
      { id: 3, name: "Node.js", path: "/assets/logos/nodejs.svg" },
      { id: 4, name: "PostgreSQL", path: "" },
    ],
  },
  {
    id: 14,
    title: "Fitness Tracker Mobile App",
    description:
      "A React Native mobile app for tracking workouts, nutrition, and health goals with progress charts and personalized recommendations.",
    subDescription: [
      "Workout logging with exercise library, sets, reps, and rest timers.",
      "Daily nutrition tracking with calorie and macro breakdown.",
      "Progress charts showing weight, strength gains, and streaks.",
      "Built with React Native, Expo, and Firebase for real-time sync.",
    ],
    href: "",
    image: "/assets/image8.jpg",
    gradient: projectGradients[4],
    tags: [
      { id: 1, name: "React Native", path: "/assets/logos/react.svg" },
      { id: 2, name: "Expo", path: "" },
      { id: 3, name: "Firebase", path: "" },
      { id: 4, name: "JavaScript", path: "/assets/logos/javascript.svg" },
    ],
  },
  {
    id: 15,
    title: "Food Delivery Mobile App",
    description:
      "A cross-platform food ordering app with restaurant browsing, real-time order tracking, in-app payments, and delivery driver assignment.",
    subDescription: [
      "Restaurant and menu browsing with search, filters, and ratings.",
      "Real-time order tracking with GPS map and delivery ETA.",
      "In-app payment integration with card and wallet options.",
      "Built with React Native, Node.js backend, and MongoDB.",
    ],
    href: "",
    image: "/assets/image2.jpg",
    gradient: projectGradients[1],
    tags: [
      { id: 1, name: "React Native", path: "/assets/logos/react.svg" },
      { id: 2, name: "Node.js", path: "/assets/logos/nodejs.svg" },
      { id: 3, name: "MongoDB", path: "" },
      { id: 4, name: "Google Maps API", path: "" },
    ],
  },
  {
    id: 16,
    title: "Inventory & POS System",
    description:
      "A point-of-sale and inventory management system for retail shops with barcode scanning, stock alerts, sales reporting, and multi-outlet support.",
    subDescription: [
      "Product management with barcode generation and stock tracking.",
      "POS terminal interface with quick-add, discounts, and receipt printing.",
      "Low-stock alerts and automated reorder notifications.",
      "Sales reports with daily, weekly, and monthly breakdowns.",
    ],
    href: "",
    image: "/assets/image1.jpg",
    gradient: projectGradients[8],
    tags: [
      { id: 1, name: "Laravel", path: "/assets/logos/laravel.svg" },
      { id: 2, name: "React", path: "/assets/logos/react.svg" },
      { id: 3, name: "MySQL", path: "/assets/logos/sqlite.svg" },
      { id: 4, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
  {
    id: 17,
    title: "CRM — Client Relationship Manager",
    description:
      "A customer relationship management tool for tracking leads, deals, client communication, and sales pipeline with team collaboration features.",
    subDescription: [
      "Lead capture forms with auto-assignment to sales reps.",
      "Deal pipeline with drag-and-drop Kanban board view.",
      "Activity logging for calls, emails, and meetings per contact.",
      "Built with Laravel, React, MySQL, and real-time notifications via WebSockets.",
    ],
    href: "",
    image: "/assets/image6.jpg",
    gradient: projectGradients[0],
    tags: [
      { id: 1, name: "Laravel", path: "/assets/logos/laravel.svg" },
      { id: 2, name: "React", path: "/assets/logos/react.svg" },
      { id: 3, name: "WebSockets", path: "" },
      { id: 4, name: "MySQL", path: "/assets/logos/sqlite.svg" },
    ],
  },
  {
    id: 18,
    title: "Payment Gateway Integration API",
    description:
      "A RESTful API service that unifies multiple payment providers (Paystack, Flutterwave, bank transfers) into a single consistent interface for developers.",
    subDescription: [
      "Unified API endpoint supporting Paystack, Flutterwave, and bank transfers.",
      "Webhook handling for payment verification and status callbacks.",
      "Transaction logging, reconciliation, and failed-payment retry logic.",
      "Built with Node.js, Express, PostgreSQL, and Redis for queuing.",
    ],
    href: "",
    image: "/assets/image7.jpg",
    gradient: projectGradients[5],
    tags: [
      { id: 1, name: "Node.js", path: "/assets/logos/nodejs.svg" },
      { id: 2, name: "Express", path: "" },
      { id: 3, name: "PostgreSQL", path: "" },
      { id: 4, name: "REST API", path: "" },
      { id: 5, name: "Redis", path: "" },
    ],
  },
  {
    id: 19,
    title: "Notification Microservice",
    description:
      "A centralized notification service that handles email, SMS, and push notifications across multiple applications via a single API with template management.",
    subDescription: [
      "Multi-channel delivery: email (SMTP), SMS (Termii), and push (Firebase).",
      "Template engine with variable interpolation and preview.",
      "Rate limiting, retry logic, and delivery status tracking.",
      "Built with Node.js, Bull queue, Redis, and PostgreSQL.",
    ],
    href: "",
    image: "/assets/image3.jpg",
    gradient: projectGradients[2],
    tags: [
      { id: 1, name: "Node.js", path: "/assets/logos/nodejs.svg" },
      { id: 2, name: "Express", path: "" },
      { id: 3, name: "Redis", path: "" },
      { id: 4, name: "REST API", path: "" },
      { id: 5, name: "PostgreSQL", path: "" },
    ],
  },
  {
    id: 20,
    title: "Auth & User Management Service",
    description:
      "A standalone authentication microservice providing JWT-based login, OAuth social auth, role-based access control, and session management for multiple apps.",
    subDescription: [
      "JWT access and refresh token authentication flow.",
      "OAuth integration with Google and GitHub login.",
      "Role-based access control with permission scoping.",
      "Session management with device tracking and revoke-all capability.",
    ],
    href: "",
    image: "/assets/image8.jpg",
    gradient: projectGradients[9],
    tags: [
      { id: 1, name: "Node.js", path: "/assets/logos/nodejs.svg" },
      { id: 2, name: "Express", path: "" },
      { id: 3, name: "MongoDB", path: "" },
      { id: 4, name: "REST API", path: "" },
    ],
  },
  {
    id: 21,
    title: "NFT Marketplace",
    description:
      "A decentralized NFT marketplace for minting, buying, and selling digital collectibles with wallet integration and auction bidding system.",
    subDescription: [
      "ERC-721 smart contract for NFT minting and ownership transfer.",
      "Marketplace with fixed-price listings and timed auction bidding.",
      "MetaMask and WalletConnect integration for seamless wallet auth.",
      "IPFS-based metadata storage for decentralized artwork hosting.",
    ],
    href: "",
    image: "/assets/image7.jpg",
    gradient: projectGradients[7],
    tags: [
      { id: 1, name: "Solidity", path: "" },
      { id: 2, name: "React", path: "/assets/logos/react.svg" },
      { id: 3, name: "Web3.js", path: "" },
      { id: 4, name: "IPFS", path: "" },
      { id: 5, name: "Hardhat", path: "" },
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
  {
    name: "Olumide Bankole",
    username: "@olumide_farmtrack",
    body: "Isaac built our agricultural dashboard from the ground up. Real-time crop monitoring, yield analytics, and farm worker GPS tracking all work flawlessly. It has completely transformed how we manage our farms across three states.",
    initials: "OB",
    colorIdx: 0,
  },
  {
    name: "Ngozi Okafor",
    username: "@ngozi_eduprime",
    body: "Our school management system DatTechGee delivered handles everything — student records, results, fee payments, and parent notifications. Parents love the portal and our admin workload dropped by half. Isaac understood our needs perfectly.",
    initials: "NO",
    colorIdx: 1,
  },
  {
    name: "Yusuf Abdullahi",
    username: "@yusuf_quickdeliver",
    body: "The logistics app Isaac built for QuickDeliver is incredibly reliable. Real-time rider tracking, automated dispatch, delivery confirmations, and our clients can track their packages live. It's been a game changer for our operations.",
    initials: "YA",
    colorIdx: 2,
  },
  {
    name: "Chioma Eze",
    username: "@chioma_stylehub",
    body: "DatTechGee built our entire e-commerce platform — product catalog, cart, Paystack integration, order management, and a beautiful storefront. Our online sales tripled within the first two months of launching. Isaac's work speaks for itself.",
    initials: "CE",
    colorIdx: 3,
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

export const portfolioStats = {
  yearsExperience: 4,
  projectsDelivered: 21,
  happyClients: 18,
  technologiesUsed: 14,
  clientSatisfaction: 100,
};
