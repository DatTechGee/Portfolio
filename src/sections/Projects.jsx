import { useState, useRef } from "react";
import Project from "../components/Project";
import PortfolioSidebar from "../components/PortfolioSidebar";
import ScrollReveal from "../components/ScrollReveal";
import { motion } from "motion/react";
import { myProjects } from "../constants";

const Projects = () => {
  const [preview, setPreview] = useState(null);
  const itemRefs = useRef([]);

  const handleSidebarClick = (idx) => {
    const el = itemRefs.current[idx];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative c-space section-spacing"
    >
      <ScrollReveal distance={30}>
        <div className="mb-12 flex flex-col items-center text-center">
          <p className="section-kicker">Portfolio</p>
          <h2 id="projects-heading" className="section-title">Featured Projects</h2>
          <p className="section-copy">
            A selection of projects I&apos;ve built for clients and personal use — spanning web apps, business systems, blockchain, and more.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal distance={0} duration={1}>
        <div className="section-divider w-full mb-12" />
      </ScrollReveal>

      <div className="flex gap-8 lg:gap-12">
        {/* Main project list */}
        <div className="flex-1 min-w-0">
          {myProjects.map((project, i) => (
            <div key={project.id} ref={(el) => (itemRefs.current[i] = el)}>
              <Project {...project} setPreview={setPreview} index={i} />
            </div>
          ))}
        </div>

        {/* Sidebar — desktop only */}
        <div className="hidden lg:block w-64 xl:w-72 shrink-0">
          <PortfolioSidebar onProjectClick={handleSidebarClick} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
