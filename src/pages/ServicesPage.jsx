import { motion } from "motion/react";
import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";
import { myServices, techStack } from "../constants";
import Marquee from "../components/Marquee";

const iconMap = {
  layers: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
    </svg>
  ),
  smartphone: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
    </svg>
  ),
  briefcase: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
    </svg>
  ),
  plug: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
    </svg>
  ),
  database: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
    </svg>
  ),
  globe: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A8.966 8.966 0 013 12c0-1.264.26-2.467.727-3.572" />
    </svg>
  ),
  cpu: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
    </svg>
  ),
  wrench: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17l-5.1-5.1m5.1 5.1L17.24 9.24m-5.82 5.93a4.5 4.5 0 11-6.36-6.36l3.75 3.75a4.5 4.5 0 016.36 0l.32.32m-3.67 2.24l3.15-3.15" />
    </svg>
  ),
  palette: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
    </svg>
  ),
};

const serviceCategories = [
  {
    title: "Custom Software Development",
    description:
      "Full-stack web applications, APIs, and business systems built from scratch with Laravel, React, and modern frameworks. Every solution is engineered for performance, security, and long-term maintainability.",
    icon: "layers",
    features: [
      "End-to-end web applications with React and Laravel",
      "RESTful APIs with token authentication",
      "Database architecture with MySQL and optimization",
      "Scalable microservices and modular codebases",
    ],
  },
  {
    title: "Mobile App Development",
    description:
      "Cross-platform iOS and Android applications with React Native and Expo. From GPS tracking to biometric auth, I build mobile experiences that perform like native.",
    icon: "smartphone",
    features: [
      "Cross-platform iOS and Android from one codebase",
      "GPS tracking, push notifications, and biometrics",
      "Offline data storage and sync",
      "App Store and Play Store deployment",
    ],
  },
  {
    title: "Business Systems & Automation",
    description:
      "Payroll, student portals, inventory, CRM, and workflow automation. I replace manual, error-prone processes with systems that run themselves.",
    icon: "briefcase",
    features: [
      "Custom ERP, CRM, and payroll systems",
      "Student management and attendance platforms",
      "Automated reporting and PDF generation",
      "Workflow automation and data pipelines",
    ],
  },
  {
    title: "UI/UX Design & Frontend",
    description:
      "Modern, responsive interfaces built with Tailwind CSS and React. Clean design systems that users trust and enjoy, with animations that feel intentional.",
    icon: "palette",
    features: [
      "Responsive design with Tailwind CSS",
      "Component-driven architecture with React",
      "Interactive dashboards and data visualization",
      "Performance-optimized animations with Framer Motion",
    ],
  },
];

const pillars = [
  {
    label: "Technology",
    description: "Infrastructure that powers growth",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    label: "Systems",
    description: "Operational frameworks for scale",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
  },
  {
    label: "Execution",
    description: "Disciplined delivery of results",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Alignment",
    description:
      "Understanding your goals, requirements, and constraints. We align on vision, scope, and success criteria before writing a single line of code.",
  },
  {
    step: "02",
    title: "Architecture & Design",
    description:
      "System design, database schemas, API contracts, and wireframes. A solid blueprint that ensures scalability and maintainability.",
  },
  {
    step: "03",
    title: "Development & Testing",
    description:
      "Clean, modular code built with best practices. Thorough testing at every stage to ensure reliability and performance.",
  },
  {
    step: "04",
    title: "Deployment & Support",
    description:
      "Production launch, performance monitoring, and ongoing maintenance. Your system stays fast, secure, and up-to-date.",
  },
];

const industries = [
  "Education",
  "Healthcare",
  "Finance",
  "Real Estate",
  "E-Commerce",
  "Logistics",
];

export default function ServicesPage() {
  return (
    <main className="bg-[#0a1128] min-h-screen">
      {/* Hero Section */}
      <section className="section-spacing pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <ScrollReveal>
            <span className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 block">
              Services
            </span>
            <h1 className="text-5xl md:text-6xl font-bold dark:text-white text-neutral-800 mb-6">
              What We Do
            </h1>
            <p className="dark:text-neutral-400 text-neutral-500 max-w-2xl mx-auto text-lg">
              Building the technical and operational backbone upon which serious
              businesses grow
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Position Statement */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold dark:text-white text-neutral-800 max-w-3xl mx-auto leading-snug">
                Not just development. Not just consulting. I build systems that
                work.
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.label}
                initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="bg-[#0f1a36] border border-white/[0.06] rounded-2xl p-8 text-center hover:border-gold/30 hover:shadow-[0_0_30px_rgba(212,168,67,0.08)] transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold mx-auto mb-5">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-bold dark:text-white text-neutral-800 mb-2">
                  {pillar.label}
                </h3>
                <p className="text-sm dark:text-neutral-400 text-neutral-500">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-[#060d1f]">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="mb-14 text-center">
              <span className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 block">
                What I Build
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold dark:text-white text-neutral-800 mb-4">
                Service Categories
              </h2>
              <p className="dark:text-neutral-400 text-neutral-500 max-w-xl mx-auto">
                Focused expertise across the full stack &mdash; from backend
                infrastructure to polished user experiences
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {serviceCategories.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 35, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -4 }}
                className="group bg-[#0f1a36] border border-white/[0.06] rounded-2xl p-8 cursor-default hover:border-gold/30 hover:shadow-[0_0_30px_rgba(212,168,67,0.08)] transition-all duration-500 relative overflow-hidden"
              >
                <span className="absolute top-5 right-6 text-6xl font-black text-gold/[0.07] select-none leading-none pointer-events-none group-hover:text-gold/[0.15] transition-colors duration-500">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center text-gold mb-6 group-hover:scale-110 transition-transform duration-300">
                  {iconMap[service.icon]}
                </div>

                <h3 className="text-xl font-bold dark:text-white text-neutral-800 mb-3 group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-sm dark:text-neutral-400 text-neutral-500 leading-relaxed mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2.5">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm dark:text-neutral-300 text-neutral-600"
                    >
                      <svg
                        className="w-4 h-4 text-gold mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process — Horizontal Timeline */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="mb-14 text-center">
              <span className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 block">
                Process
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold dark:text-white text-neutral-800 mb-4">
                How I Work
              </h2>
              <p className="dark:text-neutral-400 text-neutral-500 max-w-xl mx-auto">
                A disciplined approach that turns ideas into reliable,
                production-ready systems
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="bg-[#0f1a36] border border-white/[0.06] rounded-2xl p-6 relative overflow-hidden group hover:border-gold/30 transition-all duration-500"
              >
                {/* Connector line between steps (desktop only) */}
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-[1px] bg-white/10" />
                )}

                <span className="text-6xl font-black text-gold/[0.1] select-none leading-none block mb-4 group-hover:text-gold/[0.25] transition-colors duration-500">
                  {item.step}
                </span>

                <div className="w-8 h-[2px] bg-gold mb-4 rounded-full" />

                <h3 className="text-lg font-bold dark:text-white text-neutral-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm dark:text-neutral-400 text-neutral-500 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Marquee */}
      <section className="py-16 overflow-hidden bg-[#060d1f]">
        <div className="max-w-6xl mx-auto px-6 mb-8">
          <ScrollReveal>
            <div className="text-center">
              <span className="text-gold text-sm font-semibold tracking-widest uppercase mb-3 block">
                Tech Stack
              </span>
              <h2 className="text-2xl md:text-3xl font-bold dark:text-white text-neutral-800">
                Technologies I Work With
              </h2>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal distance={0} duration={1}>
          <Marquee pauseOnHover repeat={4} className="py-4">
            {techStack.map((tech, i) => (
              <div
                key={`${tech.name}-${i}`}
                className="flex items-center gap-3 px-5 py-3 rounded-xl bg-[#0f1a36] border border-white/[0.06] mx-2 hover:border-gold/30 transition-all duration-300 group"
              >
                {tech.logo ? (
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="w-5 h-5 object-contain opacity-60 group-hover:opacity-100 transition-opacity"
                  />
                ) : (
                  <div className="w-5 h-5 rounded bg-white/10 flex items-center justify-center">
                    <span className="text-[8px] text-neutral-500 font-bold">
                      {tech.name.charAt(0)}
                    </span>
                  </div>
                )}
                <span className="text-sm font-medium dark:text-neutral-300 text-neutral-600 whitespace-nowrap group-hover:text-gold transition-colors duration-300">
                  {tech.name}
                </span>
              </div>
            ))}
          </Marquee>
        </ScrollReveal>
      </section>

      {/* Industries Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 block">
                Industries
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold dark:text-white text-neutral-800 mb-4">
                Industries I Serve
              </h2>
              <p className="dark:text-neutral-400 text-neutral-500 max-w-xl mx-auto">
                Solutions tailored to the unique challenges and workflows of
                diverse sectors
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
              {industries.map((industry, i) => (
                <motion.span
                  key={industry}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: i * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="px-6 py-3 rounded-full bg-[#0f1a36] border border-white/[0.06] text-sm font-medium dark:text-neutral-300 text-neutral-600 hover:border-gold/30 hover:text-gold transition-all duration-300 cursor-default"
                >
                  {industry}
                </motion.span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#060d1f]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold dark:text-white text-neutral-800 mb-4">
              Ready to start your project?
            </h2>
            <p className="dark:text-neutral-400 text-neutral-500 mb-8 max-w-lg mx-auto">
              Let&apos;s discuss your vision and build something exceptional
              together.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gold text-[#0a1128] px-8 py-3.5 rounded-full font-semibold hover:bg-gold/90 transition-colors duration-300"
            >
              Get In Touch
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
