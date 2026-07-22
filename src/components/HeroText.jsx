import { FlipWords } from "../components/FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  const words = ["Secure", "Modern", "Scalable"];

  const reveal = (delay) => ({
    initial: { opacity: 0, y: 20, filter: "blur(6px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  });

  return (
    <div className="z-10 mt-24 w-full px-5 md:mt-32 lg:mt-36">
      <div className="mx-auto max-w-6xl">
        {/* Desktop */}
        <div className="hidden md:block">
          {/* Top row: status + name */}
          <div className="flex flex-col gap-5">
            <motion.div
              {...reveal(0.1)}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full dark:border-white/10 border-black/10 dark:bg-white/5 bg-white/60 w-fit"
            >
              <span className="w-2 h-2 rounded-full bg-mint animate-pulse" />
              <span className="text-sm dark:text-neutral-300 text-neutral-600">Available for new projects</span>
            </motion.div>

            {/* Name block */}
            <div>
              <motion.p
                className="text-base font-medium dark:text-neutral-400 text-neutral-500 tracking-wide"
                {...reveal(0.15)}
              >
                Hi, I&apos;m
              </motion.p>
              <motion.h1
                className="text-5xl lg:text-6xl font-bold leading-[1.1] mt-1"
                {...reveal(0.2)}
              >
                <span className="gradient-text-hero">Isaac Emmanuel</span>
              </motion.h1>
            </div>

            {/* Title + tagline */}
            <motion.p
              className="text-lg dark:text-neutral-400 text-neutral-500 max-w-xl leading-relaxed"
              {...reveal(0.28)}
            >
              Full Stack Software Developer &amp; Founder of <span className="font-semibold dark:text-neutral-300 text-neutral-700">DatTechGee</span> — building scalable web and mobile applications that solve real-world problems.
            </motion.p>

            {/* Statement */}
            <motion.div
              className="flex flex-col gap-1 mt-2"
              {...reveal(0.35)}
            >
              <p className="text-3xl lg:text-4xl font-bold dark:text-white/80 text-neutral-800">
                A Developer Dedicated to Crafting
              </p>
              <div className="flex items-baseline gap-3">
                <FlipWords
                  words={words}
                  className="font-black dark:text-white text-neutral-800 text-6xl lg:text-7xl"
                />
                <span className="text-3xl lg:text-4xl font-bold dark:text-white/80 text-neutral-800">
                  Web Solutions
                </span>
              </div>
            </motion.div>

            {/* Buttons */}
            <motion.div
              className="mt-6 flex flex-wrap gap-3"
              {...reveal(0.5)}
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="premium-btn"
              >
                View My Work
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="/Isaac_Emmanuel_Premium_ATS_Resume.docx"
                download="Isaac_Emmanuel_Premium_ATS_Resume.docx"
                className="premium-btn-secondary"
              >
                Download CV
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="premium-btn-secondary"
              >
                Get In Touch
              </a>
            </motion.div>
          </div>
        </div>

        {/* Mobile */}
        <div className="flex flex-col md:hidden gap-5 text-center">
          <motion.div
            {...reveal(0.1)}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full dark:border-white/10 border-black/10 dark:bg-white/5 bg-white/60 w-fit mx-auto"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-mint animate-pulse" />
            <span className="text-xs dark:text-neutral-300 text-neutral-600">Available for projects</span>
          </motion.div>

          <motion.p
            className="text-sm font-medium dark:text-neutral-400 text-neutral-500"
            {...reveal(0.12)}
          >
            Hi, I&apos;m
          </motion.p>

          <motion.h1
            className="text-4xl font-bold leading-tight"
            {...reveal(0.18)}
          >
            <span className="gradient-text-hero">Isaac Emmanuel</span>
          </motion.h1>

          <motion.p
            className="text-sm dark:text-neutral-400 text-neutral-500 max-w-md mx-auto leading-relaxed"
            {...reveal(0.24)}
          >
            Full Stack Software Developer &amp; Founder of <span className="font-semibold dark:text-neutral-300 text-neutral-700">DatTechGee</span>
          </motion.p>

          <motion.div
            className="flex flex-col gap-0.5 mt-1"
            {...reveal(0.3)}
          >
            <p className="text-2xl font-bold dark:text-white/80 text-neutral-800">
              A Developer Dedicated to Crafting
            </p>
            <div className="flex items-baseline justify-center gap-2">
              <FlipWords
                words={words}
                className="font-black dark:text-white text-neutral-800 text-5xl"
              />
              <span className="text-2xl font-bold dark:text-white/80 text-neutral-800">
                Web Solutions
              </span>
            </div>
          </motion.div>

          <motion.div
            className="mt-4 flex flex-col gap-3"
            {...reveal(0.4)}
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="premium-btn"
            >
              View My Work
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="/Isaac_Emmanuel_Premium_ATS_Resume.docx"
              download="Isaac_Emmanuel_Premium_ATS_Resume.docx"
              className="premium-btn-secondary"
            >
              Download CV
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="premium-btn-secondary"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
