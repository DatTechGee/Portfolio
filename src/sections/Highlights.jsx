import { motion } from "motion/react";
import ScrollReveal from "../components/ScrollReveal";
import { portfolioStats } from "../constants";

const metrics = [
  { value: `${portfolioStats.yearsExperience}+`, label: "Years crafting digital products" },
  { value: `${portfolioStats.projectsDelivered}+`, label: "Projects delivered with care" },
  { value: `${portfolioStats.happyClients}+`, label: "Clients across startups & schools" },
  { value: `${portfolioStats.clientSatisfaction}%`, label: "Responsive, scalable execution" },
];

const perks = [
  "Clear communication from kickoff to launch",
  "Pixel-perfect UI with strong UX thinking",
  "Reliable code, solid architecture, and fast iteration",
];

const Highlights = () => {
  return (
    <section id="highlights" className="c-space section-spacing">
      <ScrollReveal distance={24} duration={0.8}>
        <div className="mb-10 flex flex-col items-center text-center">
          <p className="section-kicker">Why Clients Choose Me</p>
          <h2 className="section-title">Reliable delivery, thoughtful execution</h2>
          <p className="section-copy">
            I combine strategy, design, and modern engineering to create products that feel polished and perform with confidence.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="glass-card relative overflow-hidden p-6 md:p-8"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(92,51,204,0.16),_transparent_50%)]" />
          <div className="relative mb-5 flex items-center justify-between gap-3 rounded-2xl dark:border-white/10 dark:bg-white/5 border-black/[0.06] bg-black/[0.04] px-4 py-3">
            <div>
              <p className="text-sm font-semibold dark:text-white text-neutral-800">Built for modern teams</p>
              <p className="text-sm dark:text-neutral-400 text-neutral-500">Fast execution, collaboration, and product-minded delivery</p>
            </div>
            <span className="rounded-full border border-mint/30 bg-mint/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-mint">
              Hire-ready
            </span>
          </div>
          <div className="relative grid gap-4 sm:grid-cols-2">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="rounded-2xl dark:border-white/10 dark:bg-white/5 border-black/[0.06] bg-black/[0.04] p-4 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] shadow-[inset_0_1px_0_rgba(0,0,0,0.04)]"
              >
                <p className="text-3xl font-semibold dark:text-white text-neutral-800">{metric.value}</p>
                <p className="mt-2 text-sm leading-relaxed dark:text-neutral-400 text-neutral-500">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.25, 0.1, 0.25, 1] }}
          className="glass-card p-6 md:p-8"
        >
          <p className="section-kicker">What you get</p>
          <ul className="mt-4 space-y-3">
            {perks.map((perk) => (
              <li key={perk} className="flex items-start gap-3 rounded-xl dark:bg-black/10 bg-black/[0.04] p-3 text-sm dark:text-neutral-300 text-neutral-600">
                <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-r from-royal to-mint" />
                <span>{perk}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Highlights;
