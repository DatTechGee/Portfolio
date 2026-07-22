import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const ParallaxSection = ({
  children,
  className = "",
  speed = 0.3,
  direction = "y",
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const distance = speed * 100;
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "y" ? [distance, -distance] : [0, 0]
  );
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "x" ? [distance, -distance] : [0, 0]
  );

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={{ y: direction === "y" ? y : 0, x: direction === "x" ? x : 0 }}>
        {children}
      </motion.div>
    </div>
  );
};

export default ParallaxSection;
