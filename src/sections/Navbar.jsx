import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/services", label: "Services" },
  { path: "/projects", label: "Projects" },
  { path: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBg = scrolled
    ? "backdrop-blur-2xl bg-[#0a1128]/80 border-b border-white/[0.06] shadow-xl shadow-black/30"
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
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-gold rounded-full border-2 border-[#0a1128]" />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-[15px] font-bold leading-tight tracking-tight text-white group-hover:text-gold transition-colors duration-300">
                DatTechGee
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-500 leading-tight">
                DatTechGee Technologies
              </span>
            </div>
          </Link>

          {/* Right controls */}
          <div className="flex items-center gap-2">
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
                      : "text-neutral-400 hover:text-gold"
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
              className="block overflow-hidden sm:hidden relative z-20 bg-[#0a1128]/95 backdrop-blur-2xl border-t border-white/5"
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
                          : "text-neutral-400 hover:bg-white/5"
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
