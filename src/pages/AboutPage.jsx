import { motion } from "motion/react";
import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";
import { experiences, techStack, industries, portfolioStats } from "../constants";

const principles = [
  {
    title: "SOLID Principles",
    description:
      "Five design principles that make software more maintainable, scalable, and easier to understand — Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion.",
  },
  {
    title: "GRASP",
    description:
      "General Responsibility Assignment Software Patterns that guide assigning responsibilities to classes and objects in object-oriented design.",
  },
  {
    title: "Design Patterns",
    description:
      "Proven reusable solutions to common software design problems — Creational, Structural, and Behavioral patterns that improve code architecture.",
  },
  {
    title: "SRP",
    description:
      "Single Responsibility Principle — every module or class should have one, and only one, reason to change, keeping code focused and testable.",
  },
  {
    title: "Clean Architecture",
    description:
      "Structuring systems with clear boundaries between layers — entities, use cases, adapters, and frameworks — so business logic stays independent of external concerns.",
  },
];

const skillCategories = [
  {
    title: "Backend",
    skills: [
      { name: "Laravel", level: 95 },
      { name: "PHP", level: 90 },
      { name: "REST API", level: 92 },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 92 },
      { name: "Tailwind", level: 95 },
      { name: "JavaScript", level: 90 },
    ],
  },
  {
    title: "Mobile",
    skills: [
      { name: "Cross-platform", level: 88 },
      { name: "GPS & Location", level: 85 },
    ],
  },
  {
    title: "Database & DevOps",
    skills: [
      { name: "MySQL", level: 90 },
      { name: "Git", level: 90 },
    ],
  },
  {
    title: "Specialized",
    skills: [
      { name: "Geolocation", level: 88 },
      { name: "Dashboard Dev", level: 90 },
    ],
  },
];

const barVariants = {
  hidden: { scaleX: 0 },
  visible: (level) => ({
    scaleX: level / 100,
    transition: { duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function AboutPage() {
  return (
    <main className="bg-[#0a1128] min-h-screen">
      {/* Page Header */}
      <section className="section-spacing pt-32 pb-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <ScrollReveal>
              <span className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 block">
              About
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold dark:text-white text-neutral-800 mb-6">
              Building Digital Systems That Drive Growth
            </h1>
            <p className="dark:text-neutral-400 text-neutral-500 max-w-2xl mx-auto text-lg">
              DatTechGee Technologies builds secure, scalable
              web applications, mobile apps, and business systems for clients across
              Nigeria and beyond. Founded by Isaac Emmanuel.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Bio Section */}
      <section className="section-spacing pt-0">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden border-2 border-gold/30 shadow-[0_0_40px_rgba(212,168,67,0.1)]">
                  <img
                    src="/assets/PORTFILO.png"
                    alt="Isaac Emmanuel — DatTechGee"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border border-gold/20 -z-10" />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold dark:text-white text-neutral-800 mb-2">
                  Hi, I&apos;m Isaac Emmanuel
                </h2>
                <p className="text-gold text-sm font-semibold tracking-wide uppercase mb-4">
                  Founder &amp; Lead Developer — DatTechGee Technologies
                </p>
                <div className="space-y-4 dark:text-neutral-400 text-neutral-500 leading-relaxed text-sm md:text-base">
                  <p>
                    With over 4 years of hands-on experience, I design and build
                    full-stack web and mobile applications that help businesses
                    scale — from student management systems to blockchain-powered
                    platforms.
                  </p>
                  <p>
                    My core stack centers on{" "}
                    <span className="dark:text-white text-neutral-800 font-medium">
                      Laravel, React, React Native, and Node.js
                    </span>
                    . I&apos;m passionate about solving real-world problems through
                    clean, maintainable code and intuitive user experiences.
                  </p>
                  <p>
                    Based in Nigeria and working globally, I&apos;ve delivered
                    end-to-end solutions for schools, startups, SMEs, and
                    organizations — covering everything from requirements analysis
                    and database architecture to deployment and ongoing
                    maintenance.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 mt-8">
                  <Link
                    to="/projects"
                    className="inline-flex items-center gap-2 bg-gold text-[#0a1128] px-6 py-3 rounded-full font-semibold text-sm hover:bg-gold/90 transition-colors duration-300"
                  >
                    View Projects
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 border border-white/10 text-neutral-300 px-6 py-3 rounded-full font-semibold text-sm hover:border-gold/40 hover:text-white transition-all duration-300"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="section-spacing bg-[#060d1f]">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 block">
                Philosophy
              </span>
              <h2 className="text-3xl md:text-4xl font-bold dark:text-white text-neutral-800 mb-4">
                CODE IS CRAFT
              </h2>
              <p className="dark:text-neutral-400 text-neutral-500 max-w-xl mx-auto">
                Every line of code is a deliberate decision. These principles
                guide how I architect and build software.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {principles.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="bg-[#0f1a36] border border-white/[0.06] rounded-2xl p-6 hover:border-gold/30 transition-all duration-500"
              >
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                  <span className="text-gold font-bold text-lg">
                    {p.title.charAt(0)}
                  </span>
                </div>
                <h3 className="text-base font-semibold dark:text-white text-neutral-800 mb-2">
                  {p.title}
                </h3>
                <p className="dark:text-neutral-400 text-neutral-500 text-sm leading-relaxed">
                  {p.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section-spacing">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 block">
                Toolkit
              </span>
              <h2 className="text-3xl md:text-4xl font-bold dark:text-white text-neutral-800 mb-4">
                Tech Stack
              </h2>
              <p className="dark:text-neutral-400 text-neutral-500 max-w-xl mx-auto">
                The technologies I use to build robust, production-ready
                applications.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {techStack.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="bg-[#0f1a36] border border-white/[0.06] rounded-xl p-4 flex flex-col items-center gap-3 hover:border-gold/30 hover:shadow-[0_0_20px_rgba(212,168,67,0.08)] transition-all duration-500 group"
              >
                {tech.logo ? (
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gold font-bold text-sm group-hover:scale-110 transition-transform duration-300">
                    {tech.name.charAt(0)}
                  </div>
                )}
                <span className="text-xs font-medium dark:text-neutral-300 text-neutral-600 text-center">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="section-spacing bg-[#060d1f]">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 block">
                Career
              </span>
              <h2 className="text-3xl md:text-4xl font-bold dark:text-white text-neutral-800">
                Experience
              </h2>
            </div>
          </ScrollReveal>

          <div className="relative">
            {/* Gold accent line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/60 via-gold/20 to-transparent" />

            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`relative flex flex-col md:flex-row gap-8 mb-16 last:mb-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gold border-4 border-[#060d1f] z-10 mt-6" />

                {/* Date side */}
                <div
                  className={`md:w-1/2 ${
                    i % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"
                  } pl-12 md:pl-0`}
                >
                  <span className="text-gold text-sm font-semibold tracking-wide">
                    {exp.date}
                  </span>
                  <h3 className="text-xl font-bold dark:text-white text-neutral-800 mt-1">
                    {exp.title}
                  </h3>
                  <p className="dark:text-neutral-400 text-neutral-500 text-sm mt-1">
                    {exp.job}
                  </p>
                </div>

                {/* Content side */}
                <div
                  className={`md:w-1/2 ${
                    i % 2 === 0 ? "md:pl-12" : "md:pr-12"
                  } pl-12 md:pl-0`}
                >
                  <div className="bg-[#0f1a36] border border-white/[0.06] rounded-2xl p-6">
                    <ul className="space-y-2.5">
                      {exp.contents.map((content, j) => (
                        <motion.li
                          key={j}
                          initial={{ opacity: 0, x: 10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.4,
                            delay: i * 0.15 + j * 0.05 + 0.2,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className="flex items-start gap-2 text-sm dark:text-neutral-400 text-neutral-500 leading-relaxed"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2" />
                          {content}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Breakdown */}
      <section className="section-spacing">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 block">
                Expertise
              </span>
              <h2 className="text-3xl md:text-4xl font-bold dark:text-white text-neutral-800 mb-4">
                Skills Breakdown
              </h2>
              <p className="dark:text-neutral-400 text-neutral-500 max-w-xl mx-auto">
                A detailed look at my proficiency across different domains.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="bg-[#0f1a36] border border-white/[0.06] rounded-2xl p-6"
              >
                <h3 className="text-sm font-semibold dark:text-white text-neutral-800 mb-5">
                  {cat.title}
                </h3>
                <div className="flex flex-col gap-4">
                  {cat.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs dark:text-neutral-300 text-neutral-600 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-[10px] dark:text-neutral-500 text-neutral-400 tabular-nums">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-navy/50 rounded-full overflow-hidden">
                        <motion.div
                          custom={skill.level}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          variants={barVariants}
                          className="h-full rounded-full bg-gold origin-left"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-spacing bg-[#060d1f]">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 block">
                Reach
              </span>
              <h2 className="text-3xl md:text-4xl font-bold dark:text-white text-neutral-800 mb-4">
                Industries I Serve
              </h2>
              <p className="dark:text-neutral-400 text-neutral-500 max-w-xl mx-auto">
                Delivering tailored digital solutions across diverse sectors.
              </p>
            </div>
          </ScrollReveal>

          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((industry, i) => (
              <motion.span
                key={industry.name}
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-xl bg-[#0f1a36] border border-white/[0.06] dark:text-neutral-300 text-neutral-600 hover:border-gold/30 hover:shadow-[0_0_20px_rgba(212,168,67,0.08)] transition-all duration-500 cursor-default"
              >
                <span className="w-2 h-2 rounded-full shrink-0 bg-gold" />
                {industry.name}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { label: "Years Experience", value: `${portfolioStats.yearsExperience}+` },
                { label: "Projects Delivered", value: `${portfolioStats.projectsDelivered}+` },
                { label: "Happy Clients", value: `${portfolioStats.happyClients}+` },
                { label: "Technologies", value: `${portfolioStats.technologiesUsed}+` },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl md:text-4xl font-bold text-gold mb-1">
                    {stat.value}
                  </div>
                  <div className="dark:text-neutral-400 text-neutral-500 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#060d1f]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold dark:text-white text-neutral-800 mb-4">
              Let&apos;s Build Something Together
            </h2>
            <p className="dark:text-neutral-400 text-neutral-500 mb-8 max-w-lg mx-auto">
              Ready to turn your idea into a production-ready product? Let&apos;s
              start a conversation.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gold text-[#0a1128] px-8 py-3.5 rounded-full font-semibold hover:bg-gold/90 transition-colors duration-300"
            >
              Start a Conversation
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 border border-white/10 dark:text-neutral-300 text-neutral-600 px-8 py-3.5 rounded-full font-semibold hover:border-gold/40 hover:text-gold transition-all duration-300"
            >
              Read Insights
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
