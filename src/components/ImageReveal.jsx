import { motion, useInView } from "motion/react";
import { useRef } from "react";

const ImageReveal = ({
  src,
  alt,
  className = "",
  delay = 0,
  once = true,
  amount = 0.2,
  clipFrom = "inset(0 0 100% 0)",
  clipTo = "inset(0 0 0% 0)",
  duration = 0.9,
  scale = 1.08,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        initial={{ clipPath: clipFrom, scale }}
        animate={
          isInView
            ? { clipPath: clipTo, scale: 1 }
            : { clipPath: clipFrom, scale }
        }
        transition={{
          duration,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
        loading="lazy"
      />
    </div>
  );
};

export default ImageReveal;
