import { motion } from "motion/react";
import Marquee from "../Marquee";

interface TechItem {
  name: string;
  logo: string;
}

const techStack: TechItem[] = [
  { name: "React", logo: "/assets/logos/react.svg" },
  { name: "Laravel", logo: "/assets/logos/laravel.svg" },
  { name: "PHP", logo: "/assets/logos/php.svg" },
  { name: "Tailwind CSS", logo: "/assets/logos/tailwindcss.svg" },
  { name: "Three.js", logo: "/assets/logos/threejs.svg" },
  { name: "Vite.js", logo: "/assets/logos/vitejs.svg" },
  { name: "Git", logo: "/assets/logos/git.svg" },
  { name: "MySQL", logo: "/assets/logos/sqlite.svg" },
  { name: "Node.js", logo: "/assets/logos/nodejs.svg" },
  { name: "JavaScript", logo: "/assets/logos/javascript.svg" },
];

const TechMarquee = () => {
  return (
    <section className="c-space py-8 md:py-10 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-royal/30 to-transparent" />
          <span className="text-xs font-semibold uppercase tracking-[0.3em] dark:text-neutral-500 text-neutral-400">
            Tech Stack
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-royal/30 to-transparent" />
        </div>

        <Marquee pauseOnHover className="py-2" repeat={3}>
          {techStack.map((tech) => (
            <motion.div
              key={tech.name}
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex items-center gap-3 px-5 py-3 rounded-xl dark:bg-white/[0.03] bg-black/[0.03] dark:border-white/[0.06] border-black/[0.06] dark:hover:bg-white/[0.06] hover:bg-black/[0.05] transition-colors duration-300 cursor-default"
            >
              <img
                src={tech.logo}
                alt={tech.name}
                className="w-6 h-6 object-contain"
                loading="lazy"
              />
              <span className="text-sm font-medium dark:text-neutral-300 text-neutral-600">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </Marquee>

        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r dark:from-[#080a14] from-[#fbfaff] to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l dark:from-[#080a14] from-[#fbfaff] to-transparent pointer-events-none" />
      </motion.div>
    </section>
  );
};

export default TechMarquee;
