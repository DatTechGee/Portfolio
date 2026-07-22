import { FlipWords } from "../components/FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  const words = ["Secure", "Modern", "Scalable"];
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative z-10 flex w-full items-center justify-center px-4 py-28 text-center sm:px-6 md:py-32 md:px-8 md:text-left lg:px-8">
      <motion.div
        className="mx-auto w-full max-w-6xl rounded-[2rem] hero-glass p-6 md:rounded-[2.5rem] md:p-10 lg:p-12"
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
        whileHover={{ y: -6, scale: 1.005, boxShadow: "0 24px 70px rgba(92, 51, 204, 0.16)" }}
      >
        {/* Desktop View */}
        <div className="hidden flex-col md:flex">
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full dark:border-white/10 border-black/10 dark:bg-white/5 bg-white/60 w-fit"
          >
            <span className="w-2 h-2 rounded-full bg-mint animate-pulse" />
            <span className="text-sm dark:text-neutral-300 text-neutral-600">Available for new projects</span>
          </motion.div>

          <motion.h1
            className="text-5xl font-bold leading-tight"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            Hi, I&apos;m{" "}
            <span className="gradient-text-hero">Isaac Emmanuel</span>
          </motion.h1>

          <motion.p
            className="mt-3 text-lg dark:text-neutral-400 text-neutral-500 max-w-xl"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.22, duration: 0.5 }}
          >
            Full Stack Software Developer &amp; Founder of DatTechGee — building scalable web and mobile applications that solve real-world problems.
          </motion.p>

          <div className="flex flex-col items-start mt-6">
            <motion.p
              className="text-5xl font-bold dark:text-neutral-300 text-neutral-600"
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.28, duration: 0.5 }}
            >
              A Developer Dedicated
            </motion.p>
            <motion.p
              className="text-5xl font-bold dark:text-neutral-300 text-neutral-600 mt-1"
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.33, duration: 0.5 }}
            >
              to Crafting
            </motion.p>
            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.38, duration: 0.5 }}
            >
              <FlipWords
                words={words}
                className="font-black dark:text-white text-neutral-800 text-7xl lg:text-8xl"
              />
            </motion.div>
            <motion.p
              className="text-5xl font-bold dark:text-neutral-300 text-neutral-600"
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.43, duration: 0.5 }}
            >
              Web Solutions
            </motion.p>
          </div>

          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="premium-btn"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              View My Work
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
            <motion.a
              href="/Isaac_Emmanuel_Premium_ATS_Resume.docx"
              download="Isaac_Emmanuel_Premium_ATS_Resume.docx"
              className="premium-btn-secondary"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              Download CV
            </motion.a>
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="premium-btn-secondary"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </div>

        {/* Mobile View */}
        <div className="flex flex-col space-y-5 md:hidden">
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full dark:border-white/10 border-black/10 dark:bg-white/5 bg-white/60 w-fit mx-auto"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-mint animate-pulse" />
            <span className="text-xs dark:text-neutral-300 text-neutral-600">Available for projects</span>
          </motion.div>

          <motion.p
            className="text-3xl font-bold"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            Hi, I&apos;m{" "}
            <span className="gradient-text-hero">Isaac Emmanuel</span>
          </motion.p>

          <motion.p
            className="text-sm dark:text-neutral-400 text-neutral-500"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.22, duration: 0.5 }}
          >
            Full Stack Software Developer &amp; Founder of DatTechGee
          </motion.p>

          <div>
            <motion.p
              className="text-4xl font-bold dark:text-neutral-300 text-neutral-600"
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.28, duration: 0.5 }}
            >
              Building
            </motion.p>
            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.38, duration: 0.5 }}
            >
              <FlipWords
                words={words}
                className="font-black dark:text-white text-neutral-800 text-6xl"
              />
            </motion.div>
            <motion.p
              className="text-4xl font-bold dark:text-neutral-300 text-neutral-600"
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.43, duration: 0.5 }}
            >
              Web Solutions
            </motion.p>
          </div>

          <motion.div
            className="mt-4 flex flex-col gap-3"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="premium-btn"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              View My Work
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
            <motion.a
              href="/Isaac_Emmanuel_Premium_ATS_Resume.docx"
              download="Isaac_Emmanuel_Premium_ATS_Resume.docx"
              className="premium-btn-secondary"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              Download CV
            </motion.a>
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="premium-btn-secondary"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroText;
