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

const gradientColors = [
  "from-blue-500 to-indigo-600",
  "from-emerald-500 to-teal-600",
  "from-violet-500 to-purple-600",
  "from-orange-500 to-amber-600",
  "from-rose-500 to-pink-600",
  "from-cyan-500 to-blue-600",
  "from-fuchsia-500 to-purple-600",
  "from-lime-500 to-emerald-600",
  "from-sky-500 to-cyan-600",
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

export default function ServicesPage() {
  return (
    <main className="bg-[#0a1128] min-h-screen">
      {/* Page Header */}
      <section className="section-spacing pt-32 pb-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <ScrollReveal>
            <span className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 block">
              Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold dark:text-white text-neutral-800 mb-6">
              What We Do
            </h1>
            <p className="dark:text-neutral-400 text-neutral-500 max-w-2xl mx-auto text-lg">
              Building the technical and operational backbone upon which serious
              businesses grow
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {myServices.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 35, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -4 }}
                className="group bg-[#0f1a36] border border-white/[0.06] rounded-2xl p-6 cursor-default hover:border-gold/30 hover:shadow-[0_0_30px_rgba(212,168,67,0.08)] transition-all duration-500 relative overflow-hidden"
              >
                {/* Number overlay */}
                <span className="absolute top-4 right-5 text-5xl font-black text-gold/[0.07] select-none leading-none pointer-events-none group-hover:text-gold/[0.15] transition-colors duration-500">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradientColors[i % gradientColors.length]} flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  {iconMap[service.icon]}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold dark:text-white text-neutral-800 mb-2 group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm dark:text-neutral-400 text-neutral-500 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* My Process */}
      <section className="py-20 bg-[#060d1f]">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="mb-12 text-center">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
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
                {/* Step number */}
                <span className="text-6xl font-black text-gold/[0.1] select-none leading-none block mb-4 group-hover:text-gold/[0.25] transition-colors duration-500">
                  {item.step}
                </span>

                {/* Gold accent bar */}
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
      <section className="py-16 overflow-hidden">
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

      {/* CTA */}
      <section className="py-20 bg-[#060d1f]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold dark:text-white text-neutral-800 mb-4">
              Ready to start your project?
            </h2>
            <p className="dark:text-neutral-400 text-neutral-500 mb-8 max-w-lg mx-auto">
              Let&apos;s discuss your vision and build something exceptional together.
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
