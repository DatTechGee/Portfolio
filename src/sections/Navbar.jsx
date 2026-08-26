import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/services", label: "Services" },
  { path: "/projects", label: "Projects" },
  { path: "/contact", label: "Contact" },
];

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <motion.button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      whileHover={{ rotate: 8, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {theme === "dark" ? (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ) : (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )}
    </motion.button>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme } = useTheme();

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isLight = theme === "light";

  const navBg = scrolled
    ? isLight
      ? "backdrop-blur-2xl bg-[#f3f1f8]/75 border-b border-black/[0.06] shadow-xl shadow-black/[0.03]"
      : "backdrop-blur-2xl bg-[#0a1128]/80 border-b border-white/[0.06] shadow-xl shadow-black/30"
    : isLight
      ? "backdrop-blur-sm bg-[#f3f1f8]/20"
      : "backdrop-blur-sm bg-[#0a1128]/20";

  return (
    <div className={`fixed inset-x-0 z-20 w-full transition-all duration-500 ${navBg}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 sm:py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
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
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-gold rounded-full border-2 dark:border-[#0a1128] border-[#f3f1f8]" />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-[15px] font-bold leading-tight tracking-tight dark:text-white text-neutral-800 group-hover:text-gold transition-colors duration-300">
                DatTechGee
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] dark:text-neutral-500 text-neutral-400 leading-tight">
                Software Solutions
              </span>
            </div>
          </Link>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="flex cursor-pointer sm:hidden p-2 rounded-lg dark:text-neutral-400 text-neutral-600 hover:text-gold dark:hover:text-gold transition-colors"
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

          {/* Desktop nav */}
          <nav className="hidden sm:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 text-sm rounded-full transition-all duration-300 ${
                    isActive
                      ? "text-gold font-semibold"
                      : "dark:text-neutral-400 text-neutral-500 hover:text-gold dark:hover:text-gold"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-0 rounded-full bg-gold/10 border border-gold/20"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <Link
            to="/contact"
            className="hidden sm:flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-full bg-gold text-navy hover:bg-gold/90 transition-all duration-300 shadow-lg shadow-gold/20"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <div className="absolute inset-0 z-10 sm:hidden bg-black/40" onClick={() => setIsOpen(false)} />
            <motion.div
              className={`block overflow-hidden sm:hidden relative z-20 ${
                isLight
                  ? "bg-[#f3f1f8]/95 backdrop-blur-2xl border-t border-black/5"
                  : "bg-[#0a1128]/95 backdrop-blur-2xl border-t border-white/5"
              }`}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <nav className="py-4 px-5 flex flex-col gap-1" aria-label="Mobile navigation">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                        isActive
                          ? "bg-gold/10 text-gold border border-gold/20"
                          : "dark:text-neutral-400 text-neutral-600 hover:bg-white/5"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
                <Link
                  to="/contact"
                  className="mt-3 block py-3 text-sm font-semibold rounded-xl bg-gold text-navy text-center"
                >
                  Let&apos;s Talk
                </Link>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
