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
        if (prev >= 100) return 100;
        const increment = prev < 40 ? 6 : prev < 70 ? 3 : prev < 90 ? 1.5 : 0.8;
        return Math.min(prev + increment, 100);
      });
    };

    const interval = setInterval(tick, 50);
    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      setIsComplete(true);
      const t = setTimeout(() => onComplete?.(), 700);
      return () => clearTimeout(t);
    }
  }, [progress, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0A1128] px-4 overflow-hidden"
      animate={isComplete ? { opacity: 0, scale: 1.02 } : { opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      role="status"
      aria-live="polite"
      aria-label="Loading DatTechGee Technologies"
    >
      {/* Ambient glow orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0072ff]/10 rounded-full blur-3xl"
          animate={{ scale: [1.3, 1, 1.3], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Pulsing logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mb-8"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <img
              src="/assets/logo.png"
              alt="DatTechGee Loading"
              className="w-28 h-28 object-cover rounded-2xl border border-white/10 shadow-2xl shadow-black/40"
            />
          </motion.div>
        </motion.div>

        {/* Loading heading + subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-2">Loading</h2>
          <p className="text-sm text-neutral-400">
            Engineering your experience...
          </p>
        </motion.div>

        {/* Bouncing dots */}
        <div className="flex gap-2 mt-6">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-gold rounded-full"
              animate={{ y: [0, -10, 0], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
            />
          ))}
        </div>

        {/* Progress bar */}
        <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden mt-8">
          <motion.div
            className="h-full bg-gradient-to-r from-gold to-[#0072ff]"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;
