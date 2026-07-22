import { motion, useInView } from "motion/react";
import { useRef } from "react";

const TextReveal = ({
  children,
  className = "",
  delay = 0,
  once = true,
  amount = 0.3,
  stagger = 0.02,
  as = "span",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });
  const text = typeof children === "string" ? children : "";
  const chars = text.split("");

  return (
    <motion.span ref={ref} className={`inline-block ${className}`} aria-label={text}>
      {chars.map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0, y: 20, rotateX: -40 }}
          animate={
            isInView
              ? { opacity: 1, y: 0, rotateX: 0 }
              : { opacity: 0, y: 20, rotateX: -40 }
          }
          transition={{
            duration: 0.5,
            delay: delay + i * stagger,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{ whiteSpace: char === " " ? "pre" : "normal" }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default TextReveal;
