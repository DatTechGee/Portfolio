import { useRef } from "react";
import { motion, useInView } from "motion/react";

interface QuoteStripProps {
  quote?: string;
  author?: string;
}

const QuoteStrip = ({
  quote = "Crafting code that ships products, not just commits.",
  author = "Isaac Emmanuel",
}: QuoteStripProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="c-space py-12 md:py-16" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative max-w-4xl mx-auto text-center"
      >
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-6xl dark:text-royal/20 text-royal/10 select-none">
          &ldquo;
        </div>

        <motion.blockquote
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10"
        >
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold dark:text-white text-neutral-800 leading-tight">
            {quote}
          </p>
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 flex items-center justify-center gap-3"
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-royal/50" />
          <span className="text-sm font-medium dark:text-neutral-400 text-neutral-500">
            {author}
          </span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-royal/50" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 h-[2px] bg-gradient-to-r from-transparent via-royal/40 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default QuoteStrip;
