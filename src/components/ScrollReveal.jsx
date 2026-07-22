import { motion, useInView } from "motion/react";
import { useRef } from "react";

const ScrollReveal = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.7,
  distance = 50,
  once = true,
  amount = 0.15,
  scale = 0.97,
  blur = 4,
  stagger = 0,
  as = "div",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });

  const dirMap = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    none: { x: 0, y: 0 },
  };

  const { x, y } = dirMap[direction] || dirMap.up;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x, y, scale, filter: `blur(${blur}px)` }}
      animate={
        isInView
          ? { opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" }
          : { opacity: 0, x, y, scale, filter: `blur(${blur}px)` }
      }
      transition={{
        duration,
        delay: stagger || delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
