import { motion } from "motion/react";

const Preloader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-[#02030a] to-[#050614]">
      <div className="flex flex-col items-center gap-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
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
          <div className="absolute inset-0 w-24 h-24 rounded-full bg-royal/20 blur-xl" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center"
        >
          <p className="text-lg font-semibold text-white">DatTechGee</p>
          <p className="text-sm text-neutral-400 mt-1">Preparing something great...</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="w-40 h-0.5 bg-white/10 rounded-full overflow-hidden"
        >
          <motion.div
            className="h-full bg-gradient-to-r from-royal to-lavender rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Preloader;
