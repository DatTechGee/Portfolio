import { motion } from "motion/react";
import { useEffect, useState } from "react";

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let mounted = true;

    const tick = () => {
      if (!mounted) return;
      setProgress((prev) => {
        if (prev >= 100) {
          if (!isComplete) {
            setIsComplete(true);
            setTimeout(() => onComplete?.(), 600);
          }
          return 100;
        }
        const increment = prev < 40 ? 6 : prev < 70 ? 3 : prev < 90 ? 1.5 : 0.8;
        return Math.min(prev + increment, 100);
      });
    };

    const interval = setInterval(tick, 50);
    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, [onComplete, isComplete]);

  const displayProgress = String(Math.floor(progress)).padStart(3, "0");

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col bg-[var(--bg-base)]"
      animate={isComplete ? { opacity: 0, scale: 1.02 } : { opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      role="status"
      aria-live="polite"
      aria-label={`Loading: ${Math.floor(progress)}%`}
    >
      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-white/5">
        <motion.div
          className="h-full bg-gradient-to-r from-gold via-gold to-gold/60"
          style={{ width: `${progress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Center content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="flex flex-col items-center">
          {/* Company name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-10"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              DatTechGee
            </h1>
            <p className="text-[11px] tracking-[0.35em] uppercase text-gold/80 mt-2 font-medium">
              Technologies
            </p>
          </motion.div>

          {/* Large counter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="relative mb-10"
          >
            <span className="text-[80px] md:text-[120px] font-bold text-white/[0.04] leading-none select-none tabular-nums">
              {displayProgress}
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-5xl md:text-7xl font-light text-white/90 tabular-nums tracking-tight">
                {displayProgress}
              </span>
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-neutral-500"
          >
            <span>Software</span>
            <span className="w-1 h-1 rounded-full bg-gold/60" />
            <span>Innovation</span>
            <span className="w-1 h-1 rounded-full bg-gold/60" />
            <span>Impact</span>
          </motion.div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="pb-10 px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="max-w-6xl mx-auto"
        >
          {/* Bottom progress bar */}
          <div className="w-full h-[1px] bg-white/[0.06] mb-4">
            <motion.div
              className="h-full bg-gold/50"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-[10px] text-neutral-600 tracking-widest uppercase">
              {progress < 100 ? "Initializing" : "Ready"}
            </span>
            <span className="text-[10px] text-neutral-600 tracking-widest uppercase">
              &copy; {new Date().getFullYear()} DatTechGee Technologies
            </span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Preloader;
