import { motion } from "motion/react";
import { mySocials } from "../constants";
import { trackEvent } from "../utils/analytics";
import ScrollReveal from "../components/ScrollReveal";

const footerColVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const socialVariants = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      delay: 0.4 + i * 0.08,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const Footer = () => {
  return (
    <footer className="relative" role="contentinfo">
      <ScrollReveal distance={0} duration={1.2}>
        <div className="section-divider w-full" />
      </ScrollReveal>

      <div className="c-space px-4 py-12 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            custom={0}
            variants={footerColVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <motion.img
                src="/assets/logo.png"
                alt="DatTechGee"
                className="w-8 h-8 rounded-lg object-cover"
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              />
              <span className="text-lg font-bold dark:text-white text-neutral-800">DatTechGee</span>
            </div>
            <p className="text-sm dark:text-neutral-400 text-neutral-500 leading-relaxed max-w-xs">
              Full Stack Software Developer building secure, scalable, and intelligent web and mobile applications using Laravel, React, AI, and blockchain.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            custom={1}
            variants={footerColVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-sm font-semibold dark:text-white text-neutral-800 mb-3">Quick Links</p>
            <div className="flex flex-col gap-2">
              {["Home", "About", "Services", "Projects", "Contact"].map((link) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm dark:text-neutral-400 text-neutral-500 dark:hover:text-white hover:text-primary transition-colors w-fit"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
                  }}
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Socials */}
          <motion.div
            custom={2}
            variants={footerColVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-sm font-semibold dark:text-white text-neutral-800 mb-3">Connect</p>
            <div className="flex gap-3">
              {mySocials.map((social, index) => (
                <motion.a
                  href={social.href}
                  key={index}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${social.name}`}
                  custom={index}
                  variants={socialVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-lg dark:bg-white/5 bg-black/5 dark:border-white/8 border-black/8 flex items-center justify-center dark:hover:bg-royal/20 hover:bg-royal/10 dark:hover:border-royal/30 hover:border-royal/20 transition-all duration-300"
                  onClick={() => trackEvent("social_click", { platform: social.name, url: social.href })}
                >
                  <img src={social.icon} className="w-4 h-4" alt={social.name} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <ScrollReveal distance={0} duration={1}>
          <div className="section-divider w-full mb-6" />
        </ScrollReveal>

        <ScrollReveal delay={0.2} distance={15}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs dark:text-neutral-500 text-neutral-400">
              &copy; {new Date().getFullYear()} Isaac Emmanuel (DatTechGee). All rights reserved.
            </p>
            <p className="text-xs dark:text-neutral-500 text-neutral-400">
              Built with React, Three.js &amp; Tailwind CSS
            </p>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};

export default Footer;
