import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/services", label: "Services" },
  { path: "/projects", label: "Projects" },
  { path: "/insights", label: "Insights" },
  { path: "/contact", label: "Contact" },
];

const resumeHref = "/Isaac_Emmanuel_Premium_ATS_Resume.docx";

const ResumeButton = ({ className = "" }) => (
  <a
    href={resumeHref}
    download="Isaac_Emmanuel_Resume.docx"
    title="Download resume"
    aria-label="Download resume"
    className={`inline-flex items-center justify-center gap-2 rounded-full border border-gold/40 text-gold hover:bg-gold hover:text-navy text-sm transition-colors duration-300 ${className}`}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-4 h-4"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V17H9V5.414L6.707 7.707a1 1 0 01-1.414 0z"
        clipRule="evenodd"
      />
    </svg>
    Resume
  </a>
);

const ThemeToggle = ({ className = "" }) => {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";
  return (
    <button
      onClick={toggleTheme}
      title={isLight ? "Switch to dark mode" : "Switch to light mode"}
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
      className={`inline-flex items-center justify-center p-2 rounded-full border border-[var(--border-soft)] text-neutral-400 hover:text-gold hover:border-gold/40 transition-colors cursor-pointer ${className}`}
    >
      {isLight ? (
        <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
      ) : (
        <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )}
    </button>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 w-full backdrop-blur-xl bg-[var(--bg-base)]/85 border-b border-[var(--border-soft)]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16 sm:h-[72px]">

          {/* Logo — left */}
          <Link to="/" className="flex items-center gap-2.5 group shrink-0 z-10">
            <motion.div
              className="relative"
              whileHover={{ y: -2, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 320, damping: 20 }}
            >
              <img
                src="/assets/logo.png"
                alt="DatTechGee"
                className="w-9 h-9 rounded-xl object-cover transition-all duration-300 group-hover:scale-110"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-gold rounded-full border-2 border-[var(--bg-base)]" />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-[15px] font-bold leading-tight tracking-tight text-tx-strong group-hover:text-gold transition-colors duration-300">
                DatTechGee
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-tx-muted leading-tight">
                DatTechGee Technologies
              </span>
            </div>
          </Link>

          {/* Desktop nav — centered */}
          <nav
            className="hidden sm:flex items-center h-full absolute left-1/2 -translate-x-1/2 gap-1 z-[5]"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative flex items-center h-full px-4 text-sm transition-colors duration-300 ${
                    isActive
                      ? "text-gold font-semibold"
                      : "text-tx-muted hover:text-gold"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-1 right-1 h-[2px] bg-gold rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right controls — CTA + theme + hamburger */}
          <div className="flex items-center gap-2 shrink-0 z-10">
            <ThemeToggle className="hidden sm:inline-flex" />
            <ResumeButton className="hidden sm:inline-flex px-4 py-2" />
            <Link
              to="/contact"
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-full bg-gold text-navy hover:bg-gold/90 transition-all duration-300 shadow-lg shadow-gold/20"
            >
              Let&apos;s Talk
            </Link>
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="flex cursor-pointer sm:hidden p-2 rounded-lg text-neutral-400 hover:text-gold transition-colors"
              whileHover={{ rotate: 8, scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
                loading="lazy"
                decoding="async"
                className="w-5 h-5"
                alt="toggle"
              />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <div
              className="absolute inset-0 z-10 sm:hidden bg-black/40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              className="block overflow-hidden sm:hidden relative z-20 bg-[var(--bg-base)]/95 backdrop-blur-2xl border-t border-[var(--border-soft)]"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <nav
                className="py-4 px-5 flex flex-col gap-1"
                aria-label="Mobile navigation"
              >
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <motion.div
                      key={link.path}
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                          isActive
                            ? "bg-gold/10 text-gold border border-gold/20"
                            : "text-tx-muted hover:bg-white/5"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="mt-3 block py-3 text-sm font-semibold rounded-xl bg-gold text-navy text-center"
                >
                  Let&apos;s Talk
                </Link>
                <ResumeButton className="mt-2 w-full py-3" />
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
