import { motion } from "motion/react";
import ScrollReveal from "../components/ScrollReveal";
import { mySocials } from "../constants";

const roles = ["Frontend Developer", "Full-Stack Engineer", "Product Engineer", "Web App Developer"];
const tools = ["React", "Tailwind CSS", "Node.js", "Laravel", "SQL", "Three.js", "React Native", "PHP", "C#"];

const RecruiterFocus = () => {
  const linkedin = mySocials.find((social) => social.name === "Linkedin")?.href || "#";
  const whatsapp = mySocials.find((social) => social.name === "WhatsApp")?.href || "#";
  const github = mySocials.find((social) => social.name === "GitHub")?.href || "#";

  return (
    <section id="recruiters" className="c-space section-spacing">
      <ScrollReveal distance={24} duration={0.8}>
        <div className="mb-8 flex flex-col items-center text-center">
          <p className="section-kicker">For Recruiters</p>
          <h2 className="section-title">Easy to find, easy to trust</h2>
          <p className="section-copy">
            I&apos;m actively open to interesting product, engineering, and digital transformation roles where I can build impactful user experiences.
          </p>
        </div>
      </ScrollReveal>

      <div className="mt-10 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="glass-card p-6 md:p-8"
        >
          <div className="flex flex-wrap gap-2">
            {roles.map((role) => (
              <span key={role} className="rounded-full border border-royal/20 bg-royal/10 px-3 py-1.5 text-sm font-medium text-royal">
                {role}
              </span>
            ))}
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl dark:border-white/10 dark:bg-white/5 border-black/[0.06] bg-black/[0.04] p-4">
              <p className="text-2xl font-semibold dark:text-white text-neutral-800">4+ years</p>
              <p className="mt-2 text-sm dark:text-neutral-400 text-neutral-500">Building production-ready web products</p>
            </div>
            <div className="rounded-2xl dark:border-white/10 dark:bg-white/5 border-black/[0.06] bg-black/[0.04] p-4">
              <p className="text-2xl font-semibold dark:text-white text-neutral-800">Remote-ready</p>
              <p className="mt-2 text-sm dark:text-neutral-400 text-neutral-500">Available for global collaborations</p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/Isaac_Emmanuel_Premium_ATS_Resume.docx" download="Isaac_Emmanuel_Premium_ATS_Resume.docx" className="premium-btn">
              Download CV
            </a>
            <a href={github} target="_blank" rel="noreferrer" className="premium-btn-secondary">
              GitHub
            </a>
            <a href={linkedin} target="_blank" rel="noreferrer" className="premium-btn-secondary">
              LinkedIn
            </a>
            <a href={whatsapp} target="_blank" rel="noreferrer" className="premium-btn-secondary">
              WhatsApp
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.25, 0.1, 0.25, 1] }}
          className="glass-card p-6 md:p-8"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-mint">Core strengths</p>
          <ul className="mt-4 space-y-3">
            <li className="rounded-xl dark:bg-black/10 bg-black/[0.04] p-3 text-sm dark:text-neutral-300 text-neutral-600">
              Strong front-end execution with React, Tailwind, and modern UI systems
            </li>
            <li className="rounded-xl dark:bg-black/10 bg-black/[0.04] p-3 text-sm dark:text-neutral-300 text-neutral-600">
              Full-stack ability with Laravel, Node.js, SQL, and API-driven architecture
            </li>
            <li className="rounded-xl dark:bg-black/10 bg-black/[0.04] p-3 text-sm dark:text-neutral-300 text-neutral-600">
              Clear communication, fast delivery, and product-minded implementation
            </li>
          </ul>

          <div className="mt-6 rounded-2xl dark:border-white/10 dark:bg-gradient-to-br dark:from-white/5 dark:to-transparent border-black/[0.06] bg-black/[0.03] p-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] dark:text-neutral-400 text-neutral-500">Open to</p>
            <p className="mt-2 text-sm dark:text-neutral-300 text-neutral-600">Remote, hybrid, and in-person opportunities where thoughtful product delivery matters.</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tools.map((tool) => (
              <span key={tool} className="rounded-full dark:border-white/10 dark:bg-white/5 border-black/[0.06] bg-black/[0.04] px-3 py-1.5 text-xs font-medium uppercase tracking-[0.2em] dark:text-neutral-300 text-neutral-600">
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RecruiterFocus;
