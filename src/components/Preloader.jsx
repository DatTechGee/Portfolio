import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

const STAGES = [
  { at: 0, label: "Initializing" },
  { at: 18, label: "Loading modules" },
  { at: 35, label: "Warming up engines" },
  { at: 55, label: "Compiling assets" },
  { at: 75, label: "Polishing pixels" },
  { at: 90, label: "Almost ready" },
];

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let mounted = true;

    const tick = () => {
      if (!mounted) return;
      setProgress((prev) => {
        if (prev >= 100) return 100;
        const increment = prev < 40 ? 5 : prev < 70 ? 3 : prev < 90 ? 1.8 : 1;
        return Math.min(prev + increment, 100);
      });
    };

    const interval = setInterval(tick, 45);
    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      setIsComplete(true);
      const t = setTimeout(() => onComplete?.(), 850);
      return () => clearTimeout(t);
    }
  }, [progress, onComplete]);

  const stage =
    [...STAGES].reverse().find((s) => progress >= s.at) || STAGES[0];
  const display = Math.floor(progress);

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-[#070c1c] px-4 overflow-hidden"
      animate={isComplete ? { opacity: 0, scale: 1.04, filter: "blur(6px)" } : { opacity: 1, scale: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      role="status"
      aria-live="polite"
      aria-label={`Loading DatTechGee Technologies ${display}%`}
    >
      {/* ── Ambient grid + orbs ── */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #0072ff 1px, transparent 1px)",
          backgroundSize: "34px 34px",
        }}
      />
      <div className="absolute -top-24 -left-24 w-[420px] h-[420px] bg-gold/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-24 -right-24 w-[420px] h-[420px] bg-[#0072ff]/10 rounded-full blur-3xl animate-pulse" />
      <motion.div
        className="absolute top-1/2 left-0 w-[520px] h-[520px] -translate-y-1/2 bg-gold/[0.04] rounded-full blur-3xl"
        animate={{ x: [-260, 260, -260] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ── Center content ── */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-sm">
        {/* Logo with rotating conic ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.4, rotate: -12 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-8"
        >
          <div className="absolute -inset-3 rounded-[1.75rem] bg-gradient-to-br from-gold/40 via-transparent to-[#0072ff]/40 blur-md" />
          <div className="relative w-24 h-24 rounded-2xl bg-[#0a1128] border border-white/10 overflow-hidden flex items-center justify-center shadow-2xl shadow-black/60">
            <motion.img
              src="/assets/logo.png"
              alt="DatTechGee"
              className="w-24 h-24 object-cover"
              whileHover={{ scale: 1.08 }}
            />
            {/* light sweep */}
            <motion.div
              className="absolute -inset-y-4 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]"
              animate={{ x: ["-150%", "250%"] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          {/* outer conic ring */}
          <motion.div
            className="absolute -inset-4 rounded-[2rem] opacity-60"
            style={{
              background:
                "conic-gradient(from 0deg, #0072ff, #0a1128, #E5B800, #0a1128, #0072ff)",
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

        {/* Brand + rotating status message */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-white tracking-tight">
            DatTechGee
          </h1>
          <p className="text-[10px] tracking-[0.35em] uppercase text-gold/90 mt-1 font-medium">
            Technologies
          </p>
        </div>

        <AnimatePresence mode="wait">
          <motion.p
            key={stage.label}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
            className="text-sm text-neutral-400 mb-3 flex items-center gap-2"
          >
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            {stage.label}
            <span className="tabular-nums text-gold font-semibold">{display}%</span>
          </motion.p>
        </AnimatePresence>

        {/* Progress bar */}
        <div className="w-full max-w-xs h-1.5 bg-white/[0.08] rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full relative overflow-hidden"
            style={{
              background: "linear-gradient(90deg, #0072ff, #E5B800)",
            }}
            animate={{ width: `${display}%` }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
          </motion.div>
        </div>

        {/* Segment ticks */}
        <div className="w-full max-w-xs flex justify-between mt-2 px-0.5">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <div
              key={i}
              className="w-1 h-1 rounded-full transition-colors duration-300"
              style={{
                background: progress >= (i + 1) * 12.5 ? "#E5B800" : "rgba(255,255,255,0.1)",
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;
