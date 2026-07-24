import { motion } from "motion/react";
import ScrollReveal from "../components/ScrollReveal";

const pillars = [
  "Secure, scalable product delivery",
  "Modern web and mobile experiences",
  "AI-assisted engineering with business focus",
];

const BrandStory = () => {
  return (
    <section id="brand" className="c-space section-spacing">
      <ScrollReveal distance={24} duration={0.8}>
        <div className="mb-8 flex flex-col items-center text-center">
          <p className="section-kicker">DatTechGee</p>
          <h2 className="section-title">Building intelligent solutions with clarity and purpose</h2>
          <p className="section-copy">
            DatTechGee is the technology brand behind Isaac Emmanuel — focused on creating secure, high-performing digital products that solve real problems for businesses, teams, and users.
          </p>
        </div>
      </ScrollReveal>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="glass-card p-6 md:p-8 lg:p-10"
      >
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-royal">Professional positioning</p>
            <h3 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
              Full Stack Developer crafting modern software with precision and impact.
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-neutral-400 md:text-base">
              I build web and mobile applications using Laravel, React, React Native, PHP, JavaScript, and AI-enabled workflows. My focus is on creating reliable, elegant experiences that are practical for users and valuable for businesses.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-neutral-400 md:text-base">
              From business systems and SaaS-style platforms to cybersecurity tools and modern marketing sites, I bring a product-minded approach to every build — combining clean architecture, responsive design, and thoughtful execution.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-white/8 to-transparent p-5 md:p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-mint">Core pillars</p>
            <div className="mt-4 space-y-3">
              {pillars.map((pillar) => (
                <div key={pillar} className="rounded-2xl border border-white/10 bg-black/10 p-3 text-sm text-neutral-300">
                  {pillar}
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-2xl border border-royal/20 bg-royal/10 p-4">
              <p className="text-sm font-semibold text-white">Mission</p>
              <p className="mt-2 text-sm leading-relaxed text-neutral-300">
                To build innovative software solutions that solve real-world problems through modern technology, AI, and thoughtful user experience.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default BrandStory;
