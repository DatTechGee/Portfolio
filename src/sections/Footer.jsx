import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { mySocials } from "../constants";
import { trackEvent } from "../utils/analytics";
const Footer = () => {
  return (
    <footer className="relative bg-[var(--bg-deep)] border-t border-white/[0.08]" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Branding CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative mb-12 rounded-2xl overflow-hidden border border-gold/20 bg-[var(--bg-card)] p-8 md:p-12 text-center"
        >
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold text-sm uppercase tracking-[0.3em] font-semibold mb-3">
            Let&apos;s Build Something
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Have an idea, project or problem
            <br className="hidden md:block" /> you want to solve?
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto mb-6">
            Start a conversation with Isaac Emmanuel and DatTechGee Technologies today.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gold text-[var(--bg-base)] px-7 py-3 rounded-lg font-semibold text-sm hover:bg-gold/90 transition-colors duration-300"
          >
            Start a Conversation
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2"
          >
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <img src="/assets/logo.png" alt="DatTechGee" className="w-9 h-9 rounded-xl object-cover" />
              <span className="text-lg font-bold text-white">DatTechGee</span>
            </Link>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
              DatTechGee Technologies builds secure, scalable web applications,
              mobile apps, and business systems. Founded by Isaac Emmanuel.
            </p>
            <div className="flex gap-3 mt-5">
              {mySocials.map((social, index) => (
                <motion.a
                  href={social.href}
                  key={index}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${social.name}`}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center hover:bg-gold/20 hover:border-gold/30 transition-all duration-300"
                  onClick={() => trackEvent("social_click", { platform: social.name, url: social.href })}
                >
                  <img src={social.icon} className="w-4 h-4" alt={social.name} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Navigation</p>
            <div className="flex flex-col gap-2.5">
              {[
                { path: "/", label: "Home" },
                { path: "/about", label: "About" },
                { path: "/services", label: "Services" },
                { path: "/solutions", label: "Solutions" },
                { path: "/projects", label: "Projects" },
                { path: "/testimonials", label: "Testimonials" },
                { path: "/insights", label: "Insights" },
                { path: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-neutral-400 hover:text-gold transition-colors w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Services</p>
            <div className="flex flex-col gap-2.5">
              {["Web Applications", "Mobile Apps", "Business Systems", "API Development", "UI/UX Design"].map((service) => (
                <span key={service} className="text-sm text-neutral-400">
                  {service}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent mb-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-500">
            &copy; {new Date().getFullYear()} DatTechGee — Isaac Emmanuel. All rights reserved.
          </p>
          <p className="text-xs text-neutral-500">
            Built with React, Tailwind CSS &amp; Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
