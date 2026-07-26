import { useRef } from "react";
import Card from "../components/Card";
import { Frameworks } from "../components/Frameworks";
import { industries, getAvatarColors, currentFocus } from "../constants";
import { motion } from "motion/react";
import ScrollReveal from "../components/ScrollReveal";

const gridItemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96, filter: "blur(6px)" },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      delay: i * 0.1,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const industryVariants = {
  hidden: { opacity: 0, y: 15, scale: 0.95, filter: "blur(4px)" },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      delay: 0.15 + i * 0.05,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const About = () => {
  const grid2Container = useRef();

  return (
    <section className="c-space section-spacing" id="about" aria-labelledby="about-heading">
      <ScrollReveal>
        <div className="mb-4 flex flex-col items-center text-center">
          <p className="section-kicker">About Me</p>
          <h2 id="about-heading" className="section-title">Building Digital Products That Matter</h2>
        </div>
      </ScrollReveal>

      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-6 md:auto-rows-[18rem]">
        {/* Grid 1 - Bio */}
        <motion.div
          custom={0}
          variants={gridItemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex items-end grid-default-color grid-1"
        >
          <img
            src="assets/coding-pov.png"
            loading="lazy"
            decoding="async"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I&apos;m Isaac Emmanuel</p>
            <p className="subtext">
              Over the last 4 years, I&apos;ve honed my frontend and backend development skills to deliver dynamic, secure, and scalable web applications. As the founder of DatTechGee, I help businesses across Nigeria and beyond transform their ideas into powerful digital products — from business management systems to blockchain-powered platforms.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </motion.div>

        {/* Grid 2 - Principles */}
        <motion.div
          custom={1}
          variants={gridItemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid-default-color grid-2"
        >
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl dark:text-gray-500 text-gray-600 select-none">
              CODE IS CRAFT
            </p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="GRASP"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="SOLID"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="Design Patterns"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="Design Principles"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="SRP"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image="assets/logos/csharp-pink.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              image="assets/logos/dotnet-pink.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image="assets/logos/blazor-pink.png"
              containerRef={grid2Container}
            />
          </div>
        </motion.div>

        {/* Grid 5 - Tech Stack */}
        <motion.div
          custom={2}
          variants={gridItemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid-default-color grid-5"
        >
          <div className="z-10 w-[50%]">
            <p className="headtext">Tech Stack</p>
            <p className="subtext">
              I specialize in a variety of languages, frameworks, and tools that
              allow me to build robust and scalable applications
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </motion.div>

        {/* Current Focus */}
        <ScrollReveal delay={0.2} distance={20} className="md:col-span-3">
          <div className="glass-card p-5 md:p-6 h-full">
            <p className="text-sm font-semibold dark:text-white text-neutral-800 mb-3">Currently Focused On</p>
            <div className="flex flex-wrap gap-2">
              {currentFocus.map((item, i) => (
                <motion.span
                  key={item}
                  custom={i}
                  variants={industryVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg dark:bg-white/[0.05] bg-black/[0.04] dark:text-neutral-300 text-neutral-600 dark:border-white/[0.06] border-black/[0.06]"
                >
                  <span className="w-1.5 h-1.5 rounded-full shrink-0 bg-mint" />
                  {item}
                </motion.span>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Industries I Serve */}
        <ScrollReveal delay={0.3} distance={20} className="md:col-span-3">
          <div className="glass-card p-5 md:p-6 h-full">
            <p className="text-sm font-semibold dark:text-white text-neutral-800 mb-3">Industries I Serve</p>
            <div className="flex flex-wrap gap-2">
              {industries.map((industry, i) => {
                const colors = getAvatarColors(industry.colorIdx);
                return (
                  <motion.span
                    key={industry.name}
                    custom={i}
                    variants={industryVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg dark:bg-white/[0.05] bg-black/[0.04] dark:text-neutral-300 text-neutral-600 dark:border-white/[0.06] border-black/[0.06]"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: colors[0] }}
                    />
                    {industry.name}
                  </motion.span>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;
