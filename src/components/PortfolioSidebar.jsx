import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { myProjects } from "../constants";

const PortfolioSidebar = ({ onProjectClick }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const observers = [];
    itemRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveIdx(i);
        },
        { rootMargin: "-30% 0px -50% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="portfolio-sidebar">
      <div className="sticky top-28 flex flex-col gap-4">
        {/* Header */}
        <div className="px-1">
          <p className="text-[10px] font-bold uppercase tracking-[0.35em] dark:text-neutral-500 text-neutral-400 mb-0.5">
            Portfolio
          </p>
          <p className="text-sm font-semibold dark:text-white text-neutral-800">
            {myProjects.length} Projects
          </p>
        </div>

        {/* Divider */}
        <div className="h-px dark:bg-white/[0.06] bg-black/[0.06]" />

        {/* Project list */}
        <div className="flex flex-col gap-2.5">
          {myProjects.map((project, i) => {
            const isActive = activeIdx === i;
            const isHovered = hoveredIdx === i;
            const show = isActive || isHovered;

            return (
              <div
                key={project.id}
                ref={(el) => (itemRefs.current[i] = el)}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                onClick={() => onProjectClick?.(i)}
                className="relative group cursor-pointer"
              >
                <div
                  className={`relative rounded-xl overflow-hidden transition-all duration-300 ${
                    isActive
                      ? "ring-1 ring-royal/40 shadow-lg shadow-royal/10 scale-[1.02]"
                      : "ring-1 ring-transparent scale-100"
                  } ${show ? "opacity-100" : "opacity-50"}`}
                >
                  {/* Gradient preview */}
                  <div
                    className={`relative h-[72px] bg-gradient-to-br ${
                      project.gradient || "from-royal/20 to-lavender/20"
                    } flex items-center justify-center overflow-hidden`}
                  >
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className={`w-full h-full object-cover transition-transform duration-500 ${
                          show ? "scale-110" : "scale-100"
                        }`}
                        loading="lazy"
                      />
                    ) : (
                      <span className="text-3xl font-black text-white/[0.07] select-none">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    )}

                    {/* Overlay gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent transition-opacity duration-300 ${
                        show ? "opacity-100" : "opacity-30"
                      }`}
                    />

                    {/* Number badge */}
                    <div className="absolute top-2 left-2">
                      <span
                        className={`inline-flex items-center justify-center w-5 h-5 rounded-md text-[10px] font-bold transition-all duration-300 ${
                          isActive
                            ? "bg-white text-royal shadow-md"
                            : "bg-white/15 text-white/70 backdrop-blur-sm"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Live indicator */}
                    {project.href && (
                      <div className="absolute top-2 right-2">
                        <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-mint/80 text-[9px] font-bold text-black backdrop-blur-sm">
                          <span className="w-1 h-1 rounded-full bg-black animate-pulse" />
                          LIVE
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Info bar */}
                  <div className="px-3 py-2.5 dark:bg-white/[0.02] bg-black/[0.02]">
                    <p
                      className={`text-xs font-semibold truncate transition-colors duration-300 ${
                        show ? "dark:text-white text-neutral-800" : "dark:text-neutral-400 text-neutral-500"
                      }`}
                    >
                      {project.title}
                    </p>
                    <div className="flex gap-1 mt-1.5 flex-wrap">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag.id}
                          className="text-[9px] px-1.5 py-0.5 rounded-md dark:bg-white/[0.06] bg-black/[0.04] dark:text-neutral-400 text-neutral-500"
                        >
                          {tag.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Active indicator line */}
                <div
                  className={`absolute left-0 top-1/2 -translate-y-1/2 w-[3px] rounded-full bg-gradient-to-b from-royal to-mint transition-all duration-300 ${
                    isActive ? "h-12 opacity-100" : "h-0 opacity-0"
                  }`}
                />
              </div>
            );
          })}
        </div>

        {/* Divider */}
        <div className="h-px dark:bg-white/[0.06] bg-black/[0.06]" />

        {/* Footer info */}
        <div className="px-1">
          <p className="text-[10px] dark:text-neutral-600 text-neutral-400 leading-relaxed">
            Click any project to jump to it
          </p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSidebar;
