import { useEffect, useRef, useState } from "react";
import { useInView, motion } from "motion/react";

const CountUp = ({
  from = 0,
  to,
  duration = 2,
  delay = 0,
  className = "",
  once = true,
  amount = 0.3,
  suffix = "",
  prefix = "",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!isInView) return;
    let start = null;
    let raf;

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(from + (to - from) * eased));
      if (progress < 1) raf = requestAnimationFrame(animate);
    };

    const timer = setTimeout(() => {
      raf = requestAnimationFrame(animate);
    }, delay * 1000);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, [isInView, from, to, duration, delay]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {prefix}{count}{suffix}
    </motion.span>
  );
};

export default CountUp;
