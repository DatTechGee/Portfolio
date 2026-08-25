import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { mySocials } from "../constants";
import { trackEvent } from "../utils/analytics";
const Footer = () => {
  return (
    <footer className="relative bg-[#060d1f] border-t border-white/5" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
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
              Full Stack Software Developer building secure, scalable, and intelligent web and mobile applications.
              Specializing in Laravel, React, and modern frameworks.
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
                { path: "/projects", label: "Projects" },
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
            &copy; {new Date().getFullYear()} Isaac Emmanuel (DatTechGee). All rights reserved.
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
