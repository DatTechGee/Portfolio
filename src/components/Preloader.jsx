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
            setTimeout(() => onComplete?.(), 400);
          }
          return 100;
        }
        const increment = prev < 60 ? 8 : prev < 85 ? 4 : prev < 95 ? 2 : 1;
        return Math.min(prev + increment, 100);
      });
    };

    const interval = setInterval(tick, 80);
    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, [onComplete, isComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-[#02030a] to-[#050614]"
      animate={isComplete ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.4 }}
      role="status"
      aria-live="polite"
      aria-label={`Loading: ${progress}%`}
    >
      <div className="flex flex-col items-center gap-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="w-24 h-24 rounded-full border-4 border-white/10 flex items-center justify-center">
            <img
              src="/assets/logo.png"
              alt="DatTechGee"
              className="w-16 h-16 rounded-full object-cover"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-28 h-28 rounded-full border border-white/5 animate-spin" style={{ animationDuration: "3s" }} />
          </div>
          <div className="absolute inset-0 w-24 h-24 rounded-full bg-gold/20 blur-xl" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center"
        >
          <p className="text-lg font-semibold text-white">DatTechGee</p>
          <p className="text-sm text-neutral-400 mt-1">Loading...</p>
        </motion.div>

        <div className="w-40 flex flex-col items-center gap-2">
          <div className="w-full h-0.5 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-gold to-gold/70 rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.15 }}
            />
          </div>
          <span className="text-[10px] font-mono text-neutral-500">{progress}%</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;
