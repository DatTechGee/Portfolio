import { motion } from "motion/react";
import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";
import { experiences, techStack, industries, portfolioStats } from "../constants";

const industryImages = [
  "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=300&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=300&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=300&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&h=300&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=300&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=300&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=300&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=300&fit=crop&auto=format",
];

const companyValues = [
  {
    num: "01",
    title: "Execution Over Theory",
    description:
      "We prioritize tangible results and measurable outcomes over conceptual frameworks and speculative strategies.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=300&fit=crop&auto=format",
  },
  {
    num: "02",
    title: "Technology as Infrastructure",
    description:
      "We build technical foundations that power operations, not superficial digital layers that add complexity.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=300&fit=crop&auto=format",
  },
  {
    num: "03",
    title: "Systems Thinking",
    description:
      "We design interconnected frameworks that address the full scope of business operations, not isolated solutions.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=300&fit=crop&auto=format",
  },
  {
    num: "04",
    title: "Discipline & Governance",
    description:
      "We establish clear structures, ownership, and performance standards that ensure reliable delivery.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=300&fit=crop&auto=format",
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
      {/* ===== PAGE HEADER ===== */}
      <section className="section-spacing pt-32 pb-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <ScrollReveal>
            <span className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 block">
              About
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Engineering the Systems Behind{" "}
              <span className="bg-gradient-to-r from-white to-gold bg-clip-text text-transparent">
                Business Growth
              </span>
            </h1>
            <p className="text-neutral-400 text-neutral-500 max-w-2xl mx-auto text-lg">
              DatTechGee Technologies designs and deploys digital infrastructure
              for businesses that demand execution, structure, and measurable outcomes.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* ===== COMPANY INTRO ===== */}
      <section className="section-spacing pt-0">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden border-2 border-gold/30 shadow-[0_0_40px_rgba(212,168,67,0.1)]">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop&auto=format"
                    alt="DatTechGee Technologies — Team collaboration"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-full h-full rounded-xl border border-gold/20 -z-10" />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div>
                <span className="text-gold text-sm font-semibold tracking-wide uppercase mb-4 block">
                  DatTechGee Technologies
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Software. Innovation. Impact.
                </h2>
                <div className="space-y-4 text-neutral-400 text-neutral-500 leading-relaxed text-sm md:text-base">
                  <p>
                    DatTechGee Technologies is a software solutions company
                    building secure, scalable web applications, mobile apps, and
                    business systems. We serve clients across Nigeria and beyond,
                    delivering end-to-end digital infrastructure that powers growth.
                  </p>
                  <p>
                    Our core stack centers on{" "}
                    <span className="text-white font-medium">
                      Laravel, React, React Native, and Node.js
                    </span>
                    . We are passionate about solving real-world problems through
                    clean, maintainable code and intuitive user experiences.
                  </p>
                  <p>
                    From student management systems to blockchain-powered platforms,
                    we cover everything from requirements analysis and database
                    architecture to deployment and ongoing maintenance.
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

      <div className="section-divider" />

      {/* ===== COMPANY VALUES ===== */}
      <section className="section-spacing bg-[#060d1f]">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 block">
                Our Values
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Guides Us
              </h2>
              <p className="text-neutral-400 text-neutral-500 max-w-xl mx-auto">
                These principles define how DatTechGee Technologies approaches
                every engagement and delivers results.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {companyValues.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group bg-[#0f1a36] border border-white/[0.08] rounded-xl p-6 hover:border-gold/25 transition-all duration-400"
              >
                {v.image && (
                  <div className="h-32 rounded-xl overflow-hidden mb-4 -mx-2 -mt-2">
                    <img src={v.image} alt={v.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500" />
                  </div>
                )}
                <span className="text-gold/40 text-xs font-bold tracking-[0.3em] uppercase block mb-3">
                  {v.num}
                </span>
                <h3 className="text-base font-semibold text-white mb-2">
                  {v.title}
                </h3>
                <p className="text-neutral-400 text-neutral-500 text-sm leading-relaxed">
                  {v.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ===== THE FOUNDER — ISAAC EMMANUEL ===== */}
      <section className="section-spacing">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <span className="text-gold text-sm font-semibold tracking-wide uppercase mb-4 block">
                  The Founder
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Isaac Emmanuel
                </h2>
                <p className="text-gold text-sm font-semibold tracking-wide uppercase mb-4">
                  Founder &amp; Lead Developer
                </p>
                <div className="space-y-4 text-neutral-400 text-neutral-500 leading-relaxed text-sm md:text-base">
                  <p>
                    With over 4 years of hands-on experience, Isaac designs and builds
                    full-stack web and mobile applications that help businesses
                    scale — from student management systems to blockchain-powered
                    platforms.
                  </p>
                  <p>
                    Isaac&apos;s core stack centers on{" "}
                    <span className="text-white font-medium">
                      Laravel, React, React Native, and Node.js
                    </span>
                    . He is passionate about solving real-world problems through
                    clean, maintainable code and intuitive user experiences.
                  </p>
                  <p>
                    Based in Nigeria and working globally, Isaac has delivered
                    end-to-end solutions for schools, startups, SMEs, and
                    organizations — covering everything from requirements analysis
                    and database architecture to deployment and ongoing
                    maintenance.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative rounded-2xl overflow-hidden border border-white/[0.08]">
                <img src="/assets/PORTFILO.png" alt="Isaac Emmanuel — Founder" className="w-full h-full object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128]/60 to-transparent" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ===== TECH STACK ===== */}
      <section className="section-spacing bg-[#060d1f]">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 block">
                Toolkit
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Technologies We Use
              </h2>
              <p className="text-neutral-400 text-neutral-500 max-w-xl mx-auto">
                The technologies we use to build robust, production-ready
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
                className="bg-[#0f1a36] border border-white/[0.08] rounded-xl p-4 flex flex-col items-center gap-3 hover:border-gold/25 hover:shadow-[0_8px_30px_rgba(212,168,67,0.06)] transition-all duration-400 group"
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
                <span className="text-xs font-medium text-neutral-300 text-neutral-600 text-center">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ===== SKILLS BREAKDOWN ===== */}
      <section className="section-spacing">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 block">
                Expertise
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Skills Breakdown
              </h2>
              <p className="text-neutral-400 text-neutral-500 max-w-xl mx-auto">
                A detailed look at our proficiency across different domains.
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
                className="bg-[#0f1a36] border border-white/[0.08] rounded-xl p-6"
              >
                <h3 className="text-sm font-semibold text-white mb-5">
                  {cat.title}
                </h3>
                <div className="flex flex-col gap-4">
                  {cat.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs text-neutral-300 text-neutral-600 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-[10px] text-neutral-500 text-neutral-400 tabular-nums">
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

      <div className="section-divider" />

      {/* ===== EXPERIENCE TIMELINE ===== */}
      <section className="section-spacing bg-[#060d1f]">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 block">
                Career
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Experience
              </h2>
            </div>
          </ScrollReveal>

          <div className="relative">
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
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gold border-4 border-[#060d1f] z-10 mt-6" />

                <div
                  className={`md:w-1/2 ${
                    i % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"
                  } pl-12 md:pl-0`}
                >
                  <span className="text-gold text-sm font-semibold tracking-wide">
                    {exp.date}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    {exp.title}
                  </h3>
                  <p className="text-neutral-400 text-neutral-500 text-sm mt-1">
                    {exp.job}
                  </p>
                </div>

                <div
                  className={`md:w-1/2 ${
                    i % 2 === 0 ? "md:pl-12" : "md:pr-12"
                  } pl-12 md:pl-0`}
                >
                  <div className="bg-[#0f1a36] border border-white/[0.08] rounded-xl p-6">
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
                          className="flex items-start gap-2 text-sm text-neutral-400 text-neutral-500 leading-relaxed"
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

      <div className="section-divider" />

      {/* ===== INDUSTRIES ===== */}
      <section className="section-spacing">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 block">
                Reach
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Industries We Serve
              </h2>
              <p className="text-neutral-400 text-neutral-500 max-w-xl mx-auto">
                Delivering tailored digital solutions across diverse sectors.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {industries.map((industry, i) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group bg-[#0f1a36] border border-white/[0.08] rounded-xl overflow-hidden hover:border-gold/25 hover:shadow-[0_8px_30px_rgba(212,168,67,0.06)] transition-all duration-400"
              >
                <div className="h-24 overflow-hidden">
                  <img src={industryImages[i]} alt={industry.name} className="w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500" />
                </div>
                <div className="p-3 text-center">
                  <span className="text-sm font-medium text-neutral-300 text-neutral-600">
                    {industry.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ===== STATS ===== */}
      <section className="py-16 border-t border-white/[0.08]">
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
                  <div className="text-neutral-400 text-neutral-500 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* ===== CTA ===== */}
      <section className="py-20 bg-[#060d1f]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Build Something Great?
            </h2>
            <p className="text-neutral-400 text-neutral-500 mb-8 max-w-lg mx-auto">
              Let DatTechGee Technologies engineer the digital and operational
              infrastructure that transforms your vision into sustainable execution.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gold text-[#0a1128] px-8 py-3.5 rounded-full font-semibold hover:bg-gold/90 transition-colors duration-300"
            >
              Start a Strategic Session
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 border border-white/10 text-neutral-300 text-neutral-600 px-8 py-3.5 rounded-full font-semibold hover:border-gold/40 hover:text-gold transition-all duration-300"
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
