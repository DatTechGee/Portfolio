import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const ScrollButtons = () => {
  const [isBottom, setIsBottom] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      setShow(scrollY > 300);
      const bottom =
        window.innerHeight + scrollY >= document.body.offsetHeight - 50;
      setIsBottom(bottom);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToNext = () => {
    const sections = Array.from(document.querySelectorAll("section"));
    const currentY = window.scrollY;
    const next = sections.find((s) => {
      const rect = s.getBoundingClientRect();
      const top = rect.top + window.scrollY;
      return top > currentY + 10;
    });
    if (next) {
      next.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="fixed right-6 bottom-8 z-50"
        >
          <motion.button
            aria-label={isBottom ? "Scroll to top" : "Scroll to next section"}
            onClick={isBottom ? scrollToTop : scrollToNext}
            className="w-11 h-11 rounded-full dark:bg-white/5 bg-black/5 backdrop-blur-sm dark:border-white/10 border-black/10 flex items-center justify-center dark:text-neutral-400 text-neutral-500 dark:hover:text-white hover:text-primary dark:hover:bg-white/10 hover:bg-black/10 dark:hover:border-white/20 hover:border-black/20 transition-all duration-300 shadow-lg"
            title={isBottom ? "Back to top" : "Next section"}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isBottom ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 01.707.293l5 5a1 1 0 01-1.414 1.414L11 6.414V17a1 1 0 11-2 0V6.414L5.707 9.707A1 1 0 114.293 8.293l5-5A1 1 0 0110 3z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 17a1 1 0 01-.707-.293l-5-5a1 1 0 111.414-1.414L9 13.586V3a1 1 0 112 0v10.586l3.293-3.293a1 1 0 111.414 1.414l-5 5A1 1 0 0110 17z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollButtons;
