import { motion } from "motion/react";
import ScrollReveal from "../components/ScrollReveal";

const skillCategories = [
  {
    title: "Backend Development",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
      </svg>
    ),
    color: "from-royal to-lavender",
    skills: [
      { name: "Laravel", level: 95 },
      { name: "PHP", level: 90 },
      { name: "REST API Development", level: 92 },
      { name: "Authentication & Authorization", level: 88 },
      { name: "MVC Architecture", level: 90 },
      { name: "API Security", level: 85 },
    ],
  },
  {
    title: "Frontend Development",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    color: "from-cyan-500 to-blue-600",
    skills: [
      { name: "React.js", level: 92 },
      { name: "React Native (Expo)", level: 88 },
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "HTML5 & CSS3", level: 95 },
      { name: "DaisyUI / Flowbite", level: 80 },
    ],
  },
  {
    title: "Mobile Development",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    color: "from-emerald-500 to-teal-600",
    skills: [
      { name: "Cross-platform Apps", level: 88 },
      { name: "GPS & Location Services", level: 85 },
      { name: "Push Notifications", level: 82 },
      { name: "Offline Data Storage", level: 80 },
      { name: "Background Tasks", level: 78 },
      { name: "Device Authentication", level: 82 },
    ],
  },
  {
    title: "Database & DevOps",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    color: "from-orange-500 to-rose-600",
    skills: [
      { name: "MySQL", level: 90 },
      { name: "Database Normalization", level: 88 },
      { name: "Git & GitHub", level: 90 },
      { name: "Vercel / Railway / Render", level: 85 },
      { name: "npm / Composer / Vite", level: 88 },
      { name: "Query Optimization", level: 82 },
    ],
  },
  {
    title: "Specialized Skills",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    color: "from-violet-500 to-purple-600",
    skills: [
      { name: "Geolocation Systems", level: 88 },
      { name: "Biometric Verification", level: 82 },
      { name: "QR & Attendance Systems", level: 85 },
      { name: "PDF Generation", level: 80 },
      { name: "Dashboard Development", level: 90 },
      { name: "Excel/CSV Import & Export", level: 78 },
    ],
  },
];

const barVariant = {
  hidden: { scaleX: 0 },
  visible: (level) => ({
    scaleX: level / 100,
    transition: { duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] },
  }),
};

const cardVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const SkillsBreakdown = () => {
  return (
    <section id="skills" className="c-space section-spacing" aria-labelledby="skills-heading">
      <ScrollReveal distance={24} duration={0.8}>
        <div className="mb-10 flex flex-col items-center text-center">
          <p className="section-kicker">Technical Skills</p>
          <h2 id="skills-heading" className="section-title">Full-Stack Capabilities</h2>
          <p className="section-copy">
            Complete software development expertise across backend, frontend, mobile, databases, and deployment — built for production-ready systems.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skillCategories.map((category, i) => (
          <motion.div
            key={category.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariant}
            className="glass-card p-5 md:p-6 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white shrink-0`}>
                {category.icon}
              </div>
              <h3 className="text-sm font-semibold dark:text-white text-neutral-800">{category.title}</h3>
            </div>

            <div className="flex flex-col gap-3.5 flex-1">
              {category.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs dark:text-neutral-300 text-neutral-600 font-medium">{skill.name}</span>
                    <span className="text-[10px] dark:text-neutral-500 text-neutral-400 tabular-nums">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 rounded-full dark:bg-white/[0.06] bg-black/[0.06] overflow-hidden">
                    <motion.div
                      custom={skill.level}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={barVariant}
                      className={`h-full rounded-full bg-gradient-to-r ${category.color} origin-left`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsBreakdown;
