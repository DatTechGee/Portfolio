import { FlipWords } from "../components/FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  const words = ["Secure", "Modern", "Scalable"];

  const reveal = (delay) => ({
    initial: { opacity: 0, y: 20, filter: "blur(6px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  });

  const badgeVariant = (delay) => ({
    initial: { opacity: 0, scale: 0.6, filter: "blur(4px)" },
    animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
    transition: { delay, duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  });

  const floatingBadge = (x, y, delay) => ({
    initial: { opacity: 0, x: x * 0.5, y: y * 0.5 },
    animate: {
      opacity: 1,
      x: [x - 4, x + 4, x - 4],
      y: [y - 3, y + 3, y - 3],
    },
    transition: {
      delay,
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  });

  return (
    <div className="z-10 mt-24 w-full px-5 md:mt-32 lg:mt-36">
      <div className="mx-auto max-w-6xl">
        {/* ═══ DESKTOP ═══ */}
        <div className="hidden md:block">
          <div className="flex items-center gap-10 lg:gap-16">
            {/* ── Left: text content ── */}
            <div className="flex-1 flex flex-col gap-4 lg:gap-5">
              <motion.div
                {...reveal(0.1)}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full dark:border-white/10 border-black/10 dark:bg-white/5 bg-white/60 w-fit backdrop-blur-sm"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-mint" />
                </span>
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
                  className="text-5xl lg:text-7xl font-bold leading-[1.05] mt-1"
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
                Full Stack Software Developer &amp; Founder of{" "}
                <span className="font-semibold dark:text-neutral-300 text-neutral-700">DatTechGee</span> — building
                scalable web and mobile applications that solve real-world problems.
              </motion.p>

              {/* Statement */}
              <motion.div className="flex flex-col gap-1 mt-1" {...reveal(0.35)}>
                <p className="text-2xl lg:text-3xl font-bold dark:text-white/80 text-neutral-800">
                  A Developer Dedicated to Crafting
                </p>
                <div className="flex items-baseline gap-3">
                  <FlipWords
                    words={words}
                    className="font-black dark:text-white text-neutral-800 text-5xl lg:text-6xl"
                  />
                  <span className="text-2xl lg:text-3xl font-bold dark:text-white/80 text-neutral-800">
                    Web Solutions
                  </span>
                </div>
              </motion.div>

              {/* Buttons */}
              <motion.div className="mt-5 flex flex-wrap gap-3" {...reveal(0.5)}>
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

            {/* ── Right: profile picture ── */}
            <motion.div
              className="hidden lg:flex flex-shrink-0 relative"
              initial={{ opacity: 0, x: 50, filter: "blur(12px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.35, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Ambient glow behind image */}
              <div className="absolute inset-0 -m-6 rounded-full bg-gradient-to-br from-royal/25 via-lavender/15 to-mint/10 blur-[60px]" />

              {/* Outer spinning ring */}
              <div className="hero-ring-outer absolute inset-[-14px] rounded-full" />

              {/* Main image container */}
              <div className="relative w-64 h-64 xl:w-80 xl:h-80">
                {/* Glass border ring */}
                <div className="absolute inset-0 rounded-full hero-image-border" />

                {/* Profile image */}
                <img
                  src="/assets/PORTFILO.png"
                  alt="Isaac Emmanuel — Full Stack Developer"
                  className="relative w-full h-full object-cover rounded-full"
                />

                {/* Inner highlight */}
                <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/10" />
              </div>

              {/* Floating tech badges */}
              <motion.div
                className="hero-floating-badge absolute -top-2 -left-6 px-3 py-1.5 rounded-lg text-xs font-semibold backdrop-blur-md"
                {...floatingBadge(-24, -12, 0.8)}
              >
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-mint" />
                  <span>React</span>
                </div>
              </motion.div>

              <motion.div
                className="hero-floating-badge absolute top-1/2 -right-10 px-3 py-1.5 rounded-lg text-xs font-semibold backdrop-blur-md"
                {...floatingBadge(40, 0, 1.1)}
              >
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-lavender" />
                  <span>.NET</span>
                </div>
              </motion.div>

              <motion.div
                className="hero-floating-badge absolute -bottom-2 left-1/4 px-3 py-1.5 rounded-lg text-xs font-semibold backdrop-blur-md"
                {...floatingBadge(-10, 20, 1.4)}
              >
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-royal" />
                  <span>Node.js</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* ═══ MOBILE ═══ */}
        <div className="flex flex-col md:hidden gap-5 text-center">
          {/* Profile pic (mobile) */}
          <motion.div
            className="flex justify-center mb-2"
            initial={{ opacity: 0, scale: 0.7, filter: "blur(8px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative w-28 h-28">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-royal/20 to-mint/15 blur-2xl" />
              <div className="absolute inset-0 rounded-full hero-image-border" />
              <img
                src="/assets/PORTFILO.png"
                alt="Isaac Emmanuel"
                className="relative w-full h-full object-cover rounded-full"
              />
            </div>
          </motion.div>

          <motion.div
            {...reveal(0.1)}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full dark:border-white/10 border-black/10 dark:bg-white/5 bg-white/60 w-fit mx-auto backdrop-blur-sm"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-mint" />
            </span>
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
            Full Stack Software Developer &amp; Founder of{" "}
            <span className="font-semibold dark:text-neutral-300 text-neutral-700">DatTechGee</span>
          </motion.p>

          <motion.div className="flex flex-col gap-0.5 mt-1" {...reveal(0.3)}>
            <p className="text-2xl font-bold dark:text-white/80 text-neutral-800">
              A Developer Dedicated to Crafting
            </p>
            <div className="flex items-baseline justify-center gap-2">
              <FlipWords
                words={words}
                className="font-black dark:text-white text-neutral-800 text-5xl"
              />
              <span className="text-2xl font-bold dark:text-white/80 text-neutral-800">Web Solutions</span>
            </div>
          </motion.div>

          <motion.div className="mt-4 flex flex-col gap-3" {...reveal(0.4)}>
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
