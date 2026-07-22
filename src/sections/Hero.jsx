import { Suspense, lazy } from "react";
import { motion } from "motion/react";
import HeroText from "../components/HeroText";
import { Particles } from "../components/Particles";

const HeroCanvas = lazy(() => import("../components/HeroCanvas"));

const ambientOrbVariants = {
  animate: (i) => ({
    x: [0, 30 * (i % 2 === 0 ? 1 : -1), 0, -20 * (i % 2 === 0 ? 1 : -1), 0],
    y: [0, -20, 0, 15, 0],
    scale: [1, 1.1, 1, 0.95, 1],
    transition: {
      duration: 12 + i * 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }),
};

const Hero = () => {
  return (
    <section id="home" aria-label="Hero" className="relative flex min-h-screen items-center justify-center overflow-hidden pb-16 pt-24 md:pb-20 md:pt-28">
      <motion.div
        className="hero-overlay absolute inset-0 -z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />
      <Particles
        className="absolute inset-0 -z-30"
        quantity={80}
        ease={80}
        color="#7a57db"
        size={0.6}
      />

      <HeroText />

      <motion.div
        className="absolute inset-0 -z-40 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(92, 51, 204, 0.15) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2, delay: 0.5 }}
      />

      {/* Ambient glow orbs - floating animation */}
      <motion.div
        className="absolute top-1/4 -left-32 w-96 h-96 bg-royal/20 rounded-full blur-[128px] -z-20"
        custom={0}
        variants={ambientOrbVariants}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-lavender/15 rounded-full blur-[128px] -z-20"
        custom={1}
        variants={ambientOrbVariants}
        animate="animate"
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-mint/5 rounded-full blur-[160px] -z-20"
        custom={2}
        variants={ambientOrbVariants}
        animate="animate"
      />

      <figure className="absolute inset-0 -z-10" style={{ width: "100vw", height: "100vh" }}>
        <Suspense fallback={null}>
          <HeroCanvas />
        </Suspense>
      </figure>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-80 rounded-full border border-white/10 bg-black/10 px-3 py-2 backdrop-blur-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.8, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
      >
        <span className="text-[11px] font-medium uppercase tracking-[0.35em] dark:text-neutral-400 text-neutral-500">Scroll</span>
        <div className="scroll-indicator flex h-8 w-5 items-start justify-center rounded-full border-white/20 bg-white/5 p-1 shadow-[0_0_20px_rgba(92,51,204,0.2)]">
          <motion.div
            className="h-2 w-1 rounded-full bg-gradient-to-b from-lavender to-mint"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
