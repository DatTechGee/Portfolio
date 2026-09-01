import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";

const DirMap = {
  up: { y: 48, x: 0 },
  down: { y: -48, x: 0 },
  left: { x: 48, y: 0 },
  right: { x: -48, y: 0 },
  none: { x: 0, y: 0 },
};

const ScrollReveal = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.75,
  distance,
  once = true,
  amount = 0.2,
  scale = 0.97,
  blur = 0,
  stagger = 0,
  repeat = 0,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: repeat > 0 ? false : once, amount });
  const reduceMotion = useReducedMotion();

  const dist = distance;
  const { x, y } = DirMap[direction] || DirMap.up;

  const hidden = reduceMotion
    ? { opacity: 0 }
    : { opacity: 0, x, y, scale, filter: blur ? `blur(${blur}px)` : "blur(0px)" };

  const shown = { opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={hidden}
      animate={isInView ? shown : hidden}
      transition={{
        duration: reduceMotion ? 0 : duration,
        delay: repeat > 0 ? delay : stagger || delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
