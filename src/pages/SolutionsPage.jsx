import { motion } from "motion/react";
import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";
import Seo from "../components/Seo";

const clientSegments = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Startups & MVPs",
    tagline: "From idea to launch-ready product",
    description:
      "Helping founders validate ideas, build minimum viable products, and establish the technical foundations needed to attract investors and early adopters. From rapid prototyping to production deployment, every decision is made with speed and scalability in mind. We have helped launch 8+ startups from concept to market-ready products.",
    image: "/assets/image2.jpg",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    title: "Schools & Education",
    tagline: "Digital transformation for institutions",
    description:
      "Comprehensive school management systems with student portals, attendance tracking, GPA computation, fee management, and real-time reporting. Built to streamline administrative workflows and give educators more time to focus on what matters — teaching. Our solutions serve institutions with 100 to 5,000+ students.",
    image: "/assets/image1.jpg",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
      </svg>
    ),
    title: "SMEs & Business Systems",
    tagline: "Streamline operations with custom software",
    description:
      "Tailored payroll systems, inventory management, CRM platforms, and billing solutions designed to eliminate manual processes and reduce errors. Custom-built software that integrates seamlessly into your existing operations and scales as you grow. We have delivered 15+ business systems across Nigeria.",
    image: "/assets/image5.jpg",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
    title: "Enterprise & API Integration",
    tagline: "Scalable architecture for complex needs",
    description:
      "RESTful API design, third-party service integrations, microservices architecture, and cloud deployment for organizations that need enterprise-grade reliability. Built with security, observability, and performance at the core of every decision. Our APIs handle millions of requests across multiple client applications.",
    image: "/assets/image7.jpg",
  },
];

const approachPillars = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
      </svg>
    ),
    title: "Technology",
    subtitle: "Infrastructure that powers growth",
    image: "/assets/coding-pov.png",
    description:
      "Choosing the right stack is not about trends — it is about fit. Every technology decision is guided by the specific demands of your business, your timeline, and your long-term vision.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
      </svg>
    ),
    title: "Systems",
    subtitle: "Operational frameworks for scale",
    image: "/assets/image6.jpg",
    description:
      "Software without structure is just code. We design operational systems — workflows, data pipelines, access controls — that turn individual features into cohesive, maintainable platforms.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: "Execution",
    subtitle: "Disciplined delivery of results",
    image: "/assets/image8.jpg",
    description:
      "Strategy means nothing without execution. We follow a structured delivery process — milestones, testing, feedback loops — so projects ship on time and meet the standard they are supposed to.",
  },
];

const whyWorkWithMe = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: "Custom Solutions",
    image: "/assets/software5.jpg",
    description: "No templates — every project is purpose-built to solve your specific problem.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: "Full-Stack Capability",
    image: "/assets/software2.jpg",
    description: "End-to-end delivery: frontend, backend, database, and deployment under one roof.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
    title: "Scalable Architecture",
    image: "/assets/grid.png",
    description: "Built to grow with your business — from first user to thousands.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Security-First",
    image: "/assets/software1.jpg",
    description: "Authentication, authorization, and data protection baked in from day one.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17l-5.1-5.1m5.1 5.1L17.24 9.24m-5.82 5.93a4.5 4.5 0 11-6.36-6.36l3.75 3.75a4.5 4.5 0 016.36 0l.32.32m-3.67 2.24l3.15-3.15" />
      </svg>
    ),
    title: "Ongoing Support",
    image: "/assets/mountain-2.png",
    description: "Post-launch maintenance, updates, and optimization — we do not disappear after delivery.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
    title: "Transparent Communication",
    image: "/assets/software3.jpg",
    description: "Regular updates, clear timelines, and honest conversations — no surprises.",
  },
];

export default function SolutionsPage() {
  return (
    <main className="bg-[#0a1128] min-h-screen">
      <Seo
        title="Solutions | DatTechGee Technologies — Software for Every Industry"
        description="Software solutions for startups, schools, SMEs, healthcare, e-commerce, NGOs, and enterprises. Custom systems from DatTechGee Technologies in Nigeria."
        path="/solutions"
        image="/assets/logo.png"
        type="website"
      />
      {/* Hero Section */}
      <section className="section-spacing pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <ScrollReveal>
            <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase mb-6 block">
              DatTechGee Technologies
            </span>
            <span className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 block">
              Solutions
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Tailored Solutions for Every
              <br className="hidden md:block" /> Business Challenge
            </h1>
            <p className="text-neutral-500 max-w-2xl mx-auto text-lg">
              Adapting technology to your specific business needs — not the other
              way around. Isaac and the DatTechGee team engineer every solution
              with precision, build for scale, and design for measurable results.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Client Segments */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12 text-center">
            <span className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 block">
              Who We Serve
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {clientSegments.map((segment, i) => (
              <motion.div
                key={segment.title}
                initial={{ opacity: 0, y: 35, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -4 }}
                className="group bg-[#0f1a36] border border-white/[0.08] rounded-xl p-8 cursor-default hover:border-gold/25 hover:shadow-[0_8px_30px_rgba(0, 114, 255,0.06)] transition-all duration-400 relative overflow-hidden"
              >
                {segment.image && (
                  <div className="relative h-44 overflow-hidden -mt-8 -mx-8 mb-6">
                    <img src={segment.image} alt={segment.title} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f1a36] via-[#0f1a36]/30 to-transparent" />
                  </div>
                )}
                {/* Number overlay */}
                <span className="absolute top-5 right-6 text-6xl font-black text-gold/[0.07] select-none leading-none pointer-events-none group-hover:text-gold/[0.15] transition-colors duration-500">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center text-gold mb-6 group-hover:scale-110 transition-transform duration-300">
                  {segment.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-gold transition-colors duration-300">
                  {segment.title}
                </h3>

                {/* Tagline */}
                <p className="text-gold text-sm font-medium mb-4">
                  {segment.tagline}
                </p>

                {/* Description */}
                <p className="text-neutral-500 leading-relaxed text-sm">
                  {segment.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-[#060d1f]">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="mb-14 text-center">
              <span className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 block">
                Our Position
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Not a One-Size-Fits-All Approach
              </h2>
              <p className="text-neutral-500 max-w-xl mx-auto">
                Every engagement is built around three pillars that ensure
                technology serves the business — not the other way around.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {approachPillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group bg-[#0f1a36] border border-white/[0.08] rounded-xl overflow-hidden relative hover:border-gold/25 hover:shadow-[0_8px_30px_rgba(0, 114, 255,0.06)] transition-all duration-400"
              >
                {pillar.image && (
                  <div className="relative h-40 overflow-hidden">
                    <img src={pillar.image} alt={pillar.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f1a36] via-[#0f1a36]/35 to-transparent" />
                  </div>
                )}
                <div className="p-8">
                  {/* Gold accent bar */}
                  <div className="w-10 h-[2px] bg-gold mb-5 rounded-full" />

                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold mb-5 group-hover:scale-110 transition-transform duration-300">
                    {pillar.icon}
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-gold text-xs font-semibold tracking-wide uppercase mb-3">
                    {pillar.subtitle}
                  </p>
                  <p className="text-neutral-500 leading-relaxed text-sm">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Me */}
      <section className="section-spacing">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <span className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 block">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why DatTechGee Technologies
              </h2>
              <p className="text-neutral-500 max-w-xl mx-auto">
                A partnership built on technical excellence, transparency, and a
                shared commitment to building something that lasts.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {whyWorkWithMe.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group bg-[#0f1a36] border border-white/[0.08] rounded-xl overflow-hidden hover:border-gold/25 transition-all duration-400 h-full"
              >
                {item.image && (
                  <div className="relative h-36 overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f1a36] via-[#0f1a36]/35 to-transparent" />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center text-gold shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-gold transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-neutral-500 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Timeline */}
      <section className="py-20 bg-[#060d1f]">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="mb-14 text-center">
              <span className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 block">
                Timeline
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                How We Deliver
              </h2>
              <p className="text-neutral-500 max-w-xl mx-auto">
                A structured engagement process from first conversation to production deployment and beyond.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { phase: "Discovery", duration: "1–2 Weeks", image: "/assets/image3.jpg", description: "Requirements analysis, technical architecture, and project scoping with clear deliverables." },
              { phase: "Development", duration: "3–8 Weeks", image: "/assets/software4.jpg", description: "Iterative development with weekly demos, feedback integration, and quality assurance." },
              { phase: "Testing", duration: "1–2 Weeks", image: "/assets/image4.jpg", description: "Comprehensive testing, performance optimization, and security hardening before launch." },
              { phase: "Launch & Support", duration: "Ongoing", image: "/assets/sky.jpg", description: "Production deployment, monitoring, and continuous improvement with dedicated support." },
            ].map((item, i) => (
              <motion.div
                key={item.phase}
                initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group bg-[#0f1a36] border border-white/[0.08] rounded-xl overflow-hidden relative hover:border-gold/25 transition-all duration-400"
              >
                {item.image && (
                  <div className="relative h-32 overflow-hidden">
                    <img src={item.image} alt={item.phase} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f1a36] via-[#0f1a36]/40 to-transparent" />
                  </div>
                )}
                <div className="p-6">
                  <span className="text-5xl font-black text-gold/[0.08] select-none leading-none block mb-3 group-hover:text-gold/[0.2] transition-colors duration-500">
                    {String(i + 1).padStart(2, "0")}
                </span>
                <div className="w-8 h-[2px] bg-gold mb-4 rounded-full" />
                <h3 className="text-lg font-bold text-white mb-1">
                  {item.phase}
                </h3>
                <p className="text-gold text-xs font-semibold tracking-wide uppercase mb-3">
                  {item.duration}
                </p>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  {item.description}
                </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#060d1f]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Build Something Purpose-Built?
            </h2>
            <p className="text-neutral-500 mb-8 max-w-lg mx-auto">
              Let DatTechGee Technologies discuss your business challenges and architect a solution
              that actually fits.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gold text-[#0a1128] px-8 py-3.5 rounded-full font-semibold hover:bg-gold/90 transition-colors duration-300"
            >
              Start a Conversation
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
