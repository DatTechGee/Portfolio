import { useRef } from "react";
import { motion, useInView } from "motion/react";

interface AvailabilityBannerProps {
  onCtaClick?: () => void;
}

const AvailabilityBanner = ({ onCtaClick }: AvailabilityBannerProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
    onCtaClick?.();
  };

  return (
    <section className="c-space py-10 md:py-14" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative glass-card p-6 md:p-8 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-royal/5 via-transparent to-mint/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(92,51,204,0.08),_transparent_70%)]" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="relative flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint opacity-75" />
              <span className="relative inline-flex rounded-full h-4 w-4 bg-mint" />
            </div>
            
            <div>
              <h3 className="text-lg font-semibold dark:text-white text-neutral-800">
                Available for new projects
              </h3>
              <p className="text-sm dark:text-neutral-400 text-neutral-500">
                Currently accepting projects for Q3 2026 and beyond
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 text-sm dark:text-neutral-400 text-neutral-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Response within 24 hours</span>
            </div>

            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-6 py-3 rounded-xl bg-gradient-to-r from-royal to-lavender text-white text-sm font-semibold overflow-hidden cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-2">
                Let&apos;s Talk
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-lavender to-royal opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.button>
          </div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-royal/0 via-royal/50 to-royal/0 origin-center"
        />
      </motion.div>
    </section>
  );
};

export default AvailabilityBanner;
