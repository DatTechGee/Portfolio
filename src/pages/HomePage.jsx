import { motion, useScroll, useTransform } from "motion/react";
import { Link } from "react-router-dom";
import { Particles } from "../components/Particles";
import { FlipWords } from "../components/FlipWords";
import ScrollReveal from "../components/ScrollReveal";
import Seo from "../components/Seo";
import AvailabilityBadge from "../components/AvailabilityBadge";
import { reviews, portfolioStats, industries } from "../constants";

const positionCards = [
  {
    label: "Not",
    items: [
      "A traditional software agency",
      "A speculative consultancy",
      "An accelerator or incubator",
    ],
    accent: "border-red-500/20",
    icon: (
      <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    ),
  },
  {
    label: "Is",
    items: [
      "An execution-focused technology company",
      "Built at the intersection of software, systems, and disciplined implementation",
      "Serving businesses that demand structure, clarity, and measurable outcomes",
    ],
    accent: "border-gold/30",
    icon: (
      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 12.75l6 6 9-13.5" />
      </svg>
    ),
  },
];

const pillars = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: "Software",
    description: "We build custom web applications, mobile apps, and business systems from the ground up. Every solution is engineered for performance, security, and long-term maintainability. From student portals to enterprise dashboards, our software powers real operations for real businesses.",
    image: "/assets/software3.jpg",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Innovation",
    description: "We stay at the cutting edge of technology to give your business a competitive advantage. AI-powered automation, blockchain integration, and modern cloud architectures are tools we deploy strategically � not for novelty, but for measurable impact.",
    image: "/assets/AI.jpg",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Impact",
    description: "Technology without outcomes is just code. We measure success by the efficiency gains, cost reductions, and revenue growth our solutions deliver. Every project is tied to clear business objectives and measurable results.",
    image: "/assets/software6.jpg",
  },
];

const capabilities = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: "Custom Software Development",
    description:
      "End-to-end web platforms with React frontends, Laravel/Node.js backends, authentication, dashboards, and reporting � built for scale.",
    image: "/assets/image2.jpg",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    title: "Mobile Application Development",
    description:
      "Cross-platform Android/iOS apps with React Native and Expo � GPS tracking, push notifications, biometric auth, and offline capabilities.",
    image: "/assets/image5.jpg",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
      </svg>
    ),
    title: "Business Systems & Automation",
    description:
      "Custom ERP, CRM, payroll, inventory, and student management systems tailored to your organization's exact operational workflow.",
    image: "/assets/image8.jpg",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
    title: "API Development & Integration",
    description:
      "Secure RESTful APIs with token authentication, third-party integrations, and seamless data flow between systems and platforms.",
    image: "/assets/image1.jpg",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Understand",
    description:
      "We start with the problem, the users, and the requirements � before a single line of code.",
  },
  {
    num: "02",
    title: "Architect",
    description:
      "We design the system, data flow, database schema, and technology choices for scale.",
  },
  {
    num: "03",
    title: "Build",
    description:
      "We develop the frontend, backend, APIs and integrations with clean, maintainable code.",
  },
  {
    num: "04",
    title: "Test",
    description:
      "We validate functionality, security, and performance across the whole product.",
  },
  {
    num: "05",
    title: "Deploy",
    description:
      "We ship the application to production and keep improving it over time.",
  },
];

const partners = [
  {
    title: "Early-Stage Founders",
    subtitle: "Building real businesses from the ground up",
    description:
      "We partner with founders who are serious about building sustainable businesses. Our approach establishes structured systems and technical foundations that transform ideas into execution-ready ventures.",
    num: "01",
    image: "/assets/image2.jpg",
  },
  {
    title: "Growing Companies",
    subtitle: "Facing operational complexity and scaling challenges",
    description:
      "Organizations experiencing rapid growth encounter operational friction. We systematize operations and implement technology-enabled workflows that bring clarity to complexity.",
    num: "02",
    image: "/assets/image5.jpg",
  },
  {
    title: "Organizations Requiring Execution",
    subtitle: "Demanding technology-backed implementation",
    description:
      "We work with businesses that prioritize measurable outcomes over theoretical frameworks. We provide the technology backbone that transforms strategic plans into operational reality.",
    num: "03",
    image: "/assets/image7.jpg",
  },
  {
    title: "Teams Valuing Structure",
    subtitle: "Committed to clarity and disciplined delivery",
    description:
      "Organizations that recognize the competitive advantage of structured systems. We help implement frameworks that create measurable performance metrics and clear accountability.",
    num: "04",
    image: "/assets/image1.jpg",
  },
];

const differentiators = [
  {
    num: "01",
    title: "Execution-First",
    description: "We do not sell strategies � we build systems. Every engagement produces tangible, deployed, working software that your team can use immediately.",
    image: "/assets/image2.jpg",
  },
  {
    num: "02",
    title: "Technology as Infrastructure",
    description: "We choose technology based on fit, not trends. Our stack decisions are guided by your business requirements, timeline, and long-term maintenance capacity.",
    image: "/assets/image7.jpg",
  },
  {
    num: "03",
    title: "Systems Thinking",
    description: "We design interconnected solutions that address the full scope of your operations. Isolated features create complexity; integrated systems create clarity.",
    image: "/assets/image5.jpg",
  },
  {
    num: "04",
    title: "Discipline & Governance",
    description: "Clear milestones, transparent communication, and structured delivery processes ensure projects stay on time and on budget.",
    image: "/assets/image1.jpg",
  },
  {
    num: "05",
    title: "Long-Term Value",
    description: "We build for sustainability, not shortcuts. Clean architecture, comprehensive documentation, and scalable design mean your system grows with your business.",
    image: "/assets/image8.jpg",
  },
  {
    num: "06",
    title: "Institutional Rigor",
    description: "We apply enterprise-grade standards to every project, regardless of size. Security, performance, and maintainability are non-negotiable.",
    image: "/assets/image3.jpg",
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

const getAvatarColors = (idx) => avatarColors[idx % avatarColors.length];

const HomePage = () => {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -80]);

  return (
    <div className="min-h-screen bg-[var(--bg-base)]">
      <Seo
        title="DatTechGee Technologies � Software. Innovation. Impact. | Isaac Emmanuel"
        description="DatTechGee Technologies builds custom web apps, mobile apps, business systems, and APIs. Founded by Isaac Emmanuel � Full Stack Developer using React, Laravel, and Node.js. 20+ projects delivered."
        path="/"
        image="/assets/logo.png"
        type="website"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "DatTechGee Technologies",
          url: "https://dattechgee.vercel.app/",
          description:
            "DatTechGee Technologies builds web apps, mobile apps, school portals, payroll systems, and business systems with Laravel, React, and React Native.",
          email: "dattechgee@gmail.com",
          founder: { "@type": "Person", name: "Isaac Emmanuel" },
          areaServed: ["Abuja", "FCT", "Nigeria"],
        }}
      />
      {/* ===== HERO SECTION ===== */}
      <section className="section-spacing relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-base)] to-[var(--bg-deep)]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />
        <Particles
          className="absolute inset-0"
          quantity={80}
          color="#0072ff"
          size={0.3}
          staticity={30}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="flex flex-col gap-6 text-center lg:text-left">
              <ScrollReveal direction="up" delay={0.1}>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                  <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-2 w-fit">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gold" />
                    </span>
                    <span className="text-gold text-sm font-medium">
                      Founded by Isaac Emmanuel
                    </span>
                  </div>
                  <AvailabilityBadge />
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.2}>
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                  <span className="text-white">DatTechGee</span>{" "}
                  <span className="bg-gradient-to-r from-[var(--tx)] to-gold bg-clip-text text-transparent">
                    Technologies
                  </span>
                </h1>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.3}>
                <p className="text-lg sm:text-xl text-gold font-semibold tracking-wide">
                  Software. Innovation. Impact.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.35}>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                  We build software that solves{" "}
                  <span className="text-gold">business problems.</span>
                </h2>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.4}>
                <p className="text-base text-neutral-400">
                  DatTechGee is the full-stack engineering brand of Isaac
                  Emmanuel � building scalable web, mobile and backend systems
                  that move ideas into production.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.4}>
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start mt-2">
                  {["React", "Laravel", "PHP", "React Native", "Node.js", "AI"].map((t) => (
                    <span
                      key={t}
                      className="text-xs font-medium text-neutral-300 bg-white/5 border border-white/10 rounded-full px-3 py-1.5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.45}>
                <p className="text-sm sm:text-base text-neutral-500 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                  From custom platforms and business automation to mobile apps
                  and APIs � we turn operational pain points into reliable,
                  scalable digital products built for execution.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.45}>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-2">
                  <Link
                    to="/services"
                    className="bg-gold text-navy px-7 py-3.5 rounded-lg font-semibold text-sm hover:bg-gold/90 transition-colors duration-300 inline-flex items-center gap-2"
                  >
                    Our Services
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                  <Link
                    to="/contact"
                    className="border border-gold/30 text-gold px-7 py-3.5 rounded-lg font-semibold text-sm hover:bg-gold/10 transition-colors duration-300 inline-flex items-center gap-2"
                  >
                    Start a Project
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Right - Hero Visual */}
            <ScrollReveal direction="right" delay={0.3} className="relative flex justify-center order-first lg:order-none">
              <motion.div style={{ y: heroY }} className="relative w-full max-w-[520px]">
                <div className="absolute -inset-8 rounded-[2rem] bg-gradient-to-br from-gold/25 via-gold/5 to-transparent blur-3xl opacity-70" />

                {/* Rounded image card */}
                <div className="relative">
                  <div className="lux-card overflow-hidden rounded-[1.75rem]">
                    <div className="relative sm:h-[480px] h-[380px]">
                      <img
                        src="/assets/software1.jpg"
                        alt="DatTechGee Technologies - Custom software development"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-deep)]/95 via-[var(--bg-deep)]/25 to-transparent on-dark" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
                        <p className="text-white text-lg sm:text-xl font-bold">
                          DatTechGee Technologies
                        </p>
                        <p className="text-gold text-sm">
                          Software. Innovation. Impact.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Floating metric chips */}
                  <motion.span
                    className="absolute -top-4 left-3 sm:-left-4 flex items-center gap-2 rounded-full bg-[var(--bg-card)] border border-gold/30 px-3.5 py-2 text-xs font-bold text-gold shadow-xl"
                    animate={{ y: [0, -7, 0] }}
                    transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                    {portfolioStats.projectsDelivered}+ Projects
                  </motion.span>
                  <motion.span
                    className="absolute -bottom-4 right-3 sm:-right-4 flex items-center gap-2 rounded-full bg-[var(--bg-card)] border border-gold/30 px-3.5 py-2 text-xs font-bold text-gold shadow-xl"
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    {portfolioStats.yearsExperience} Yrs Experience
                  </motion.span>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2.5 bg-gold/60 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* ===== TECHNOLOGY WALL ===== */}
      <section className="relative py-10 border-y border-white/[0.06] bg-[var(--bg-deep)] overflow-hidden">
        <div className="flex items-center justify-center gap-10 mb-6 px-6">
          <span className="text-gold text-sm uppercase tracking-[0.3em] font-semibold">
            We Build With
          </span>
        </div>
        <div className="relative">
          <motion.div
            className="flex items-center gap-10 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {[
              "React",
              "Laravel",
              "PHP",
              "JavaScript",
              "TypeScript",
              "React Native",
              "Node.js",
              "MySQL",
              "Python",
              "Tailwind CSS",
              "REST APIs",
              "AI",
              "Git",
              "Vercel",
            ].map((t) => (
              <span key={t} className="flex items-center gap-10">
                <span className="text-2xl md:text-3xl font-bold text-white/15 hover:text-gold/60 transition-colors duration-300">
                  {t}
                </span>
                <span className="text-gold/30">�</span>
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== INDUSTRIES WE SERVE ===== */}
      <section className="relative py-10 border-b border-white/[0.06] bg-[var(--bg-deep)] overflow-hidden">
        <div className="flex items-center justify-center gap-10 mb-6 px-6">
          <span className="text-gold text-sm uppercase tracking-[0.3em] font-semibold">
            Industries We Serve
          </span>
        </div>
        <div className="relative">
          <motion.div
            className="flex items-center gap-10 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            {[...industries, ...industries].map((ind, i) => (
              <span
                key={`${ind.name}-${i}`}
                className="flex items-center gap-10"
              >
                <span className="flex items-center gap-3 text-lg md:text-xl text-white/25 hover:text-gold/60 transition-colors duration-300 font-semibold">
                  <span className="w-6 h-6 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-[10px] font-bold text-gold/70">
                    {ind.initials}
                  </span>
                  {ind.name}
                </span>
                <span className="text-gold/30">�</span>
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="section-spacing relative py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="lux-card lux-glow p-8 md:p-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
                {[
                  {
                    value: `${portfolioStats.yearsExperience}+`,
                    label: "Years Experience",
                  },
                  {
                    value: `${portfolioStats.projectsDelivered}+`,
                    label: "Projects Delivered",
                  },
                  {
                    value: `${portfolioStats.happyClients}+`,
                    label: "Happy Clients",
                  },
                  {
                    value: `${portfolioStats.clientSatisfaction}%`,
                    label: "Client Satisfaction",
                  },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    className={`text-center md:relative ${
                      i > 0 ? "md:before:absolute md:before:left-0 md:before:top-1/4 md:before:h-1/2 md:before:w-px md:before:bg-[var(--border)]" : ""
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                  >
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gold block">
                      {stat.value}
                    </span>
                    <span className="text-neutral-400 text-sm mt-2 block">
                      {stat.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== WHAT WE BUILD ===== */}
      <div className="section-divider" />
      <section className="section-spacing relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-base)] via-[var(--bg-band)] to-[var(--bg-base)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal>
              <p className="lux-eyebrow mb-4">What We Build</p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                From idea to{" "}
                <span className="bg-gradient-to-r from-[var(--tx)] to-gold bg-clip-text text-transparent">
                  working product
                </span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-neutral-400 max-w-2xl mx-auto text-base mt-4">
                More than a technology list � here's what we actually ship, end
                to end, for real businesses.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Web Applications",
                desc: "Business platforms, dashboards, SaaS products and custom web applications.",
                image: "/assets/software1.jpg",
              },
              {
                title: "Mobile Applications",
                desc: "Cross-platform apps for iOS & Android using React Native and Expo.",
                image: "/assets/software2.jpg",
              },
              {
                title: "Backend Systems",
                desc: "APIs, authentication, databases, business logic and integrations.",
                image: "/assets/software3.jpg",
              },
              {
                title: "AI-Powered Products",
                desc: "AI integrations, automation and intelligent application features.",
                image: "/assets/sotwareai.jpg",
              },
              {
                title: "Blockchain Applications",
                desc: "Smart contracts and transparent decentralized applications.",
                image: "/assets/software5.jpg",
              },
              {
                title: "Full Product Delivery",
                desc: "Design, architecture, build, deploy � and keep improving in production.",
                image: "/assets/software6.jpg",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="group lux-card h-full"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-[var(--bg-card)]/40 to-transparent" />
                  </div>
                  <div className="p-6 pt-0 -mt-6 relative z-10">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center text-gold mb-4 group-hover:bg-gold/15 transition-colors duration-300">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                      </svg>
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OUR POSITION ===== */}
      <div className="section-divider" />
      <section className="section-spacing relative">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal>
              <p className="lux-eyebrow mb-4">Our Position</p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                What We{" "}
                <span className="bg-gradient-to-r from-[var(--tx)] to-gold bg-clip-text text-transparent">
                  Stand For
                </span>
              </h2>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {positionCards.map((card, i) => (
              <ScrollReveal key={card.label} delay={i * 0.15}>
                <div className={`bg-[var(--bg-card)] border ${card.accent} rounded-2xl p-8 h-full`}>
                  <div className="flex items-center gap-3 mb-6">
                    {card.icon}
                    <span className={`text-sm font-bold uppercase tracking-wider ${card.label === "Is" ? "text-gold" : "text-neutral-400"}`}>
                      DatTechGee Technologies {card.label}
                    </span>
                  </div>
                  <ul className="space-y-4">
                    {card.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className={`w-1.5 h-1.5 rounded-full shrink-0 mt-2 ${card.label === "Is" ? "bg-gold" : "bg-neutral-600"}`} />
                        <span className="text-neutral-500 text-sm leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== THREE PILLARS ===== */}
      <div className="section-divider" />
      <section className="section-spacing relative py-24 bg-[var(--bg-deep)]">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, i) => (
              <ScrollReveal key={pillar.title} delay={i * 0.12}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="group lux-card text-center"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={pillar.image}
                      alt={pillar.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-[var(--bg-card)]/30 to-transparent" />
                  </div>
                  <div className="p-8 -mt-8 relative z-10">
                    <div className="w-14 h-14 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold mx-auto mb-5">
                      {pillar.icon}
                    </div>
                    <h3 className="text-white text-xl font-bold mb-3">{pillar.title}</h3>
                    <p className="text-neutral-400 text-sm">{pillar.description}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHAT WE DO � CORE CAPABILITIES ===== */}
      <div className="section-divider" />
      <section className="section-spacing relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-base)] via-[var(--bg-band)] to-[var(--bg-base)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal>
              <p className="lux-eyebrow mb-4">Core Capabilities</p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                What We{" "}
                <span className="bg-gradient-to-r from-[var(--tx)] to-gold bg-clip-text text-transparent">
                  Do
                </span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-neutral-400 max-w-2xl mx-auto text-base">
                Building{" "}
                <FlipWords words={["Secure", "Modern", "Scalable"]} className="text-gold font-semibold" />{" "}
                digital solutions that power growth and efficiency.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, i) => (
              <ScrollReveal key={cap.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="group lux-card h-full flex flex-col"
                >
                  <div className="relative h-36 overflow-hidden">
                    <img
                      src={cap.image}
                      alt={cap.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-[var(--bg-card)]/35 to-transparent" />
                  </div>
                  <div className="p-6 pt-0 -mt-8 relative z-10 flex flex-col flex-1">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold mb-5 group-hover:bg-gold/15 transition-colors duration-300">
                      {cap.icon}
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-3">
                      {cap.title}
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed flex-1">
                      {cap.description}
                    </p>
                    <div className="mt-5 pt-4 border-t border-white/[0.04]">
                      <span className="text-gold/60 text-[10px] font-bold tracking-[0.3em] uppercase">
                        DatTechGee Technologies
                      </span>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.5}>
            <div className="text-center mt-12">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 border border-gold/30 text-gold px-8 py-3.5 rounded-lg font-semibold text-sm hover:bg-gold/10 transition-colors duration-300"
              >
                Explore Services in Detail
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== EXECUTION FRAMEWORK � HOW WE WORK ===== */}
      <div className="section-divider" />
      <section className="section-spacing relative py-24 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal>
              <p className="lux-eyebrow mb-4">How We Build</p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                A disciplined{" "}
                <span className="bg-gradient-to-r from-[var(--tx)] to-gold bg-clip-text text-transparent">
                  engineering process
                </span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-neutral-400 max-w-xl mx-auto text-base mt-4">
                From first conversation to production � how we ship reliable software.
              </p>
            </ScrollReveal>
          </div>

          <div className="relative">
            {/* Connection line - desktop */}
            <div className="hidden lg:block absolute top-16 left-[10%] right-[10%] h-[2px]">
              <div className="w-full h-full bg-gradient-to-r from-gold/0 via-gold/40 to-gold/0" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
              {processSteps.map((step, i) => (
                <ScrollReveal key={step.num} delay={i * 0.12}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="relative flex flex-col items-center text-center group"
                  >
                    <div className="relative z-10 mb-6">
                      <div className="w-14 h-14 rounded-full bg-[var(--bg-card)] border-2 border-gold/30 flex items-center justify-center group-hover:border-gold/60 group-hover:bg-gold/10 transition-all duration-300">
                        <span className="text-gold font-bold text-lg">
                          {step.num}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-white font-semibold text-lg mb-3">
                      {step.title}
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed max-w-[260px]">
                      {step.description}
                    </p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== GROWTH QUOTE ===== */}
      <div className="section-divider" />
      <section className="section-spacing relative py-24 bg-[var(--bg-deep)]">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
              <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white relative z-10 mb-4">
                Growth is not accidental.
              </p>
              <p className="text-3xl sm:text-4xl lg:text-5xl font-bold relative z-10">
                <span className="bg-gradient-to-r from-gold to-gold/70 bg-clip-text text-transparent">
                  It is engineered.
                </span>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== WHO WE WORK WITH ===== */}
      <div className="section-divider" />
      <section className="section-spacing relative py-24">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal>
              <p className="text-gold text-sm uppercase tracking-[0.2em] font-semibold mb-4">
                Our Partners
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                Who We{" "}
                <span className="bg-gradient-to-r from-[var(--tx)] to-gold bg-clip-text text-transparent">
                  Work With
                </span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-neutral-400 max-w-xl mx-auto text-base">
                Strategic partnerships with businesses ready for structured growth
              </p>
            </ScrollReveal>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {partners.map((partner, i) => (
              <ScrollReveal key={partner.num} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="group bg-[var(--bg-card)] border border-white/[0.08] rounded-xl p-8 hover:border-gold/25 hover:shadow-[0_8px_30px_rgba(0, 114, 255,0.06)] transition-all duration-400 h-full"
                  >
                    {partner.image && (
                      <div className="h-40 rounded-xl overflow-hidden mb-5 -mx-2 -mt-2">
                        <img src={partner.image} alt={partner.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500" />
                      </div>
                    )}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-gold/40 text-xs font-bold tracking-[0.3em] uppercase">
                        Partner Type {partner.num}
                      </span>
                    </div>
                    <h3 className="text-white text-xl font-bold mb-2">{partner.title}</h3>
                    <p className="text-gold text-sm font-medium mb-4">{partner.subtitle}</p>
                    <p className="text-neutral-400 text-sm leading-relaxed">{partner.description}</p>
                  </motion.div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.5}>
            <div className="mt-8 bg-[var(--bg-card)] border border-gold/20 rounded-2xl p-6 text-center">
              <p className="text-neutral-600 text-sm leading-relaxed">
                DatTechGee Technologies partners selectively. Engagements are accepted only where execution value can be clearly delivered and where our approach aligns with your commitment to structure, discipline, and measurable outcomes.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== WHY DATTECHGEE TECHNOLOGIES ===== */}
      <div className="section-divider" />
      <section className="section-spacing relative py-24 bg-[var(--bg-deep)]">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal>
              <p className="text-gold text-sm uppercase tracking-[0.2em] font-semibold mb-4">
                Our Differentiators
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                Why{" "}
                <span className="bg-gradient-to-r from-[var(--tx)] to-gold bg-clip-text text-transparent">
                  DatTechGee Technologies
                </span>
              </h2>
            </ScrollReveal>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((diff, i) => (
              <ScrollReveal key={diff.num} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="group bg-[var(--bg-card)] border border-white/[0.08] rounded-xl p-6 hover:border-gold/25 transition-all duration-400"
                >
                  {diff.image && (
                    <div className="h-32 rounded-xl overflow-hidden mb-4 -mx-2 -mt-2">
                      <img src={diff.image} alt={diff.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500" />
                    </div>
                  )}
                  <span className="text-gold/40 text-xs font-bold tracking-[0.3em] uppercase block mb-3">
                    {diff.num}
                  </span>
                  <h3 className="text-white font-semibold text-lg mb-2">{diff.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{diff.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <div className="section-divider" />
      <section className="section-spacing relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-base)] via-[var(--bg-band)] to-[var(--bg-base)]" />
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
            <div className="text-center">
              <ScrollReveal>
                <p className="text-gold text-sm uppercase tracking-[0.2em] font-semibold mb-4">
                  Testimonials
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                  What Clients{" "}
                  <span className="bg-gradient-to-r from-[var(--tx)] to-gold bg-clip-text text-transparent">
                    Say
                  </span>
                </h2>
              </ScrollReveal>
            </div>
          </div>

          {/* Testimonials marquee row 1 */}
          <div className="relative mb-4">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--bg-base)] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--bg-base)] to-transparent z-10 pointer-events-none" />
            <div className="flex overflow-hidden">
              <div className="flex gap-5 animate-marquee whitespace-nowrap">
                {[...reviews, ...reviews].map((review, i) => {
                  const colors = getAvatarColors(review.colorIdx);
                  return (
                    <div
                      key={`${review.name}-${i}`}
                      className="shrink-0 w-[360px] bg-[var(--bg-card)] border border-white/[0.08] rounded-xl p-6 whitespace-normal hover:border-gold/25 transition-all duration-400"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold"
                          style={{
                            background: `linear-gradient(135deg, ${colors[0]}, ${colors[1]})`,
                          }}
                        >
                          {review.initials}
                        </div>
                        <div>
                          <p className="text-white text-sm font-medium">
                            {review.name}
                          </p>
                          <p className="text-neutral-500 text-xs">
                            {review.username}
                          </p>
                        </div>
                      </div>
                      <p className="text-neutral-400 text-sm leading-relaxed">
                        {review.body}
                      </p>
                      <div className="flex gap-0.5 mt-4">
                        {[...Array(5)].map((_, si) => (
                          <svg
                            key={si}
                            className="w-4 h-4 text-gold"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Testimonials marquee row 2 (reversed) */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--bg-base)] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--bg-base)] to-transparent z-10 pointer-events-none" />
            <div className="flex overflow-hidden">
              <div className="flex gap-5 animate-marquee [animation-direction:reverse] whitespace-nowrap">
                {[...reviews, ...reviews]
                  .reverse()
                  .map((review, i) => {
                    const colors = getAvatarColors(review.colorIdx);
                    return (
                      <div
                        key={`${review.name}-rev-${i}`}
                        className="shrink-0 w-[360px] bg-[var(--bg-card)] border border-white/[0.08] rounded-xl p-6 whitespace-normal hover:border-gold/25 transition-all duration-400"
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div
                            className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold"
                            style={{
                              background: `linear-gradient(135deg, ${colors[0]}, ${colors[1]})`,
                            }}
                          >
                            {review.initials}
                          </div>
                          <div>
                            <p className="text-white text-sm font-medium">
                              {review.name}
                            </p>
                            <p className="text-neutral-500 text-xs">
                              {review.username}
                            </p>
                          </div>
                        </div>
                        <p className="text-neutral-400 text-sm leading-relaxed">
                          {review.body}
                        </p>
                        <div className="flex gap-0.5 mt-4">
                          {[...Array(5)].map((_, si) => (
                            <svg
                              key={si}
                              className="w-4 h-4 text-gold"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <div className="section-divider" />
      <section className="section-spacing relative py-24">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative bg-[var(--bg-card)] border border-white/[0.06] rounded-3xl p-10 md:p-16 text-center overflow-hidden">
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <img src="/assets/image5.jpg" alt="" className="w-full h-full object-cover opacity-10" />
              </div>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

              <p className="text-gold text-sm uppercase tracking-[0.2em] font-semibold mb-6 relative z-10">
                Let&apos;s Collaborate
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 relative z-10 max-w-3xl mx-auto leading-tight">
                Ready to build the systems your{" "}
                <span className="bg-gradient-to-r from-gold to-gold/70 bg-clip-text text-transparent">
                  business needs to scale
                </span>
                ?
              </h2>
              <p className="text-neutral-400 max-w-xl mx-auto mb-10 text-base relative z-10">
                Partner with DatTechGee Technologies to engineer the digital and operational infrastructure that transforms vision into sustainable execution.
              </p>
              <div className="flex flex-wrap gap-4 justify-center relative z-10">
                <Link
                  to="/contact"
                  className="bg-gold text-navy px-8 py-4 rounded-lg font-semibold text-sm hover:bg-gold/90 transition-colors duration-300 inline-flex items-center gap-2"
                >
                  Start a Strategic Session
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                <Link
                  to="/projects"
                  className="border border-gold/30 text-gold px-8 py-4 rounded-lg font-semibold text-sm hover:bg-gold/10 transition-colors duration-300"
                >
                  View Projects
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== BOTTOM LINE ===== */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="text-neutral-400 text-xs tracking-wider uppercase">
              Selective engagements. Disciplined execution. Measurable outcomes.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
