import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "../context/ThemeContext";

function Navigation({ active, onLinkClick, theme }) {
  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "projects", label: "Projects" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <ul className="nav-ul">
      {links.map((link) => (
        <li key={link.id} className="nav-li">
          <motion.a
            className={`nav-link ${active === link.id ? "font-semibold" : ""}`}
            href={`#${link.id}`}
            onClick={(e) => onLinkClick(e, link.id)}
            whileHover={{ y: -2, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 320, damping: 20 }}
          >
            {active === link.id && (
              <motion.span
                layoutId="nav-indicator"
                className="absolute inset-0 rounded-full dark:bg-white/[0.07] bg-black/[0.05]"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10">{link.label}</span>
          </motion.a>
        </li>
      ))}
    </ul>
  );
}

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
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setActive(id);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const ids = ["home", "about", "services", "projects", "portfolio", "contact"];
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => sections.forEach((s) => observer.unobserve(s));
  }, []);

  const isLight = theme === "light";

  const navBg = scrolled
    ? isLight
      ? "backdrop-blur-2xl bg-[#f3f1f8]/75 border-b border-black/[0.06] shadow-xl shadow-black/[0.03]"
      : "backdrop-blur-2xl bg-[#080a14]/75 border-b border-white/[0.06] shadow-xl shadow-black/30"
    : isLight
      ? "backdrop-blur-sm bg-[#f3f1f8]/20"
      : "backdrop-blur-sm bg-[#080a14]/20";

  const logoTextClass = isLight ? "text-neutral-700" : "text-white/80";
  const logoTextHoverClass = isLight
    ? "group-hover:text-royal"
    : "group-hover:text-white";
  const hamburgerClass = isLight
    ? "text-neutral-600 hover:text-primary hover:bg-black/5"
    : "text-neutral-400 hover:text-white hover:bg-white/5";

  const navMobileBg = isLight
    ? "bg-[#f3f1f8]/95 backdrop-blur-2xl border-t border-black/5"
    : "bg-[#080a14]/95 backdrop-blur-2xl border-t border-white/5";

  return (
    <div className={`fixed inset-x-0 z-20 w-full transition-all duration-500 ${navBg}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 sm:py-4">
          {/* Logo + brand */}
          <motion.a
            href="/"
            className="flex items-center gap-2.5 group"
            whileHover={{ y: -2, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 320, damping: 20 }}
          >
            <div className="relative">
              <img
                src="/assets/logo.png"
                alt="DatTechGee"
                className="w-9 h-9 rounded-xl object-cover transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-royal/20"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-mint rounded-full border-2 dark:border-[#080a14] border-[#f3f1f8]" />
            </div>
            <div className="flex flex-col">
              <span className={`text-[15px] font-bold leading-tight tracking-tight transition-colors duration-300 ${logoTextClass} ${logoTextHoverClass}`}>
                DatTechGee
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] dark:text-neutral-500 text-neutral-400 leading-tight">
                Full Stack Dev
              </span>
            </div>
          </motion.a>

          {/* Right side controls */}
          <div className="flex items-center gap-2">
            <ThemeToggle />

            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className={`flex cursor-pointer focus:outline-none sm:hidden p-2 rounded-lg transition-colors ${hamburgerClass}`}
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
          <nav className="hidden sm:flex" aria-label="Main navigation">
            <Navigation active={active} onLinkClick={handleNavClick} theme={theme} />
          </nav>

          {/* CTA */}
          <motion.a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-royal to-lavender text-white hover:opacity-90 transition-opacity duration-300 shadow-lg shadow-royal/20"
            whileHover={{ y: -2, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Let&apos;s Talk
          </motion.a>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <div
              className="absolute inset-0 z-10 sm:hidden bg-black/40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              className={`block overflow-hidden text-center sm:hidden relative z-20 ${navMobileBg}`}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <nav className="py-4 px-5" aria-label="Mobile navigation">
                <Navigation active={active} onLinkClick={handleNavClick} theme={theme} />
                <motion.a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "contact")}
                  className="mt-4 block w-full py-3 text-sm font-medium rounded-xl bg-gradient-to-r from-royal to-lavender text-center text-white"
                  whileHover={{ y: -2, scale: 1.01 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Let&apos;s Talk
                </motion.a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
