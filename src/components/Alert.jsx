import { motion, AnimatePresence } from "motion/react";

const Alert = ({ type, text }) => {
  const alertVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -30, scale: 0.9 },
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed z-50 flex items-center justify-center bottom-5 right-5"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={alertVariants}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div
          className={`flex items-center gap-3 px-5 py-3 rounded-xl backdrop-blur-xl shadow-2xl ${
            type === "danger"
              ? "bg-red-900/80 border border-red-500/30"
              : "bg-royal/80 border border-lavender/30"
          }`}
        >
          {type === "danger" ? (
            <svg className="w-5 h-5 text-red-300 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          ) : (
            <svg className="w-5 h-5 text-mint shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
          <p className="text-sm text-white font-medium">{text}</p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Alert;
