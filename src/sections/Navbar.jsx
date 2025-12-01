import { useState, useEffect } from "react";
import { motion } from "motion/react";

function Navigation({ active, onLinkClick }) {
  const linkClass = (id) =>
    `nav-link ${active === id ? "text-white font-semibold" : "text-neutral-300"}`;

  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a className={linkClass("home")} href="#home" onClick={(e) => onLinkClick(e, "home")}>
          Home
        </a>
      </li>
      <li className="nav-li">
        <a className={linkClass("about")} href="#about" onClick={(e) => onLinkClick(e, "about")}>
          About
        </a>
      </li>
      <li className="nav-li">
        <a className={linkClass("projects")} href="#projects" onClick={(e) => onLinkClick(e, "projects")}>
          Projects
        </a>
      </li>
      <li className="nav-li">
        <a className={linkClass("contact")} href="#contact" onClick={(e) => onLinkClick(e, "contact")}>
          Contact
        </a>
      </li>
    </ul>
  );
}
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setActive(id);
  };

  useEffect(() => {
    const ids = ["home", "about", "projects", "contact"];
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
      { root: null, rootMargin: "0px", threshold: 0.5 }
    );

    sections.forEach((s) => observer.observe(s));

    return () => {
      sections.forEach((s) => observer.unobserve(s));
    };
  }, []);

  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href="/"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
           Dattechgee
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              loading="lazy"
              decoding="async"
              className="w-6 h-6"
              alt="toggle"
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation active={active} onLinkClick={handleNavClick} />
          </nav>
        </div>
      </div>
      {isOpen && (
        <>
          <div
            className="absolute inset-0 z-10 sm:hidden"
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            className="block overflow-hidden text-center sm:hidden relative z-20"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ maxHeight: "100vh" }}
            transition={{ duration: 1 }}
          >
            <nav className="pb-5">
              <Navigation active={active} onLinkClick={handleNavClick} />
            </nav>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default Navbar;
