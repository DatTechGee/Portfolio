import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import ProjectDetails from "./ProjectDetails";

const Project = ({
  title,
  description,
  subDescription,
  href,
  image,
  gradient,
  tags,
  setPreview,
  index = 0,
}) => {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <>
      <motion.div
        className="group project-card relative"
        onMouseEnter={() => setPreview(image || null)}
        onMouseLeave={() => setPreview(null)}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{
          duration: 0.6,
          delay: index * 0.06,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      >
        {/* Gradient Preview Card */}
        <div className="relative rounded-2xl overflow-hidden mb-5 project-preview-card">
          <div
            className={`relative h-52 sm:h-64 bg-gradient-to-br ${
              gradient || "from-royal/20 to-lavender/20"
            } flex items-center justify-center overflow-hidden`}
          >
            {image ? (
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
            ) : (
              <div className="flex flex-col items-center gap-2">
                <span className="text-7xl sm:text-8xl font-black text-white/[0.06] select-none leading-none">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-xs font-medium text-white/20 uppercase tracking-widest">
                  {title.split(" ").slice(0, 2).join(" ")}
                </span>
              </div>
            )}

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Number badge — top left */}
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 backdrop-blur-md text-sm font-bold text-white border border-white/10 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            {/* Live badge — top right */}
            {href && (
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-mint/90 text-[11px] font-bold text-black backdrop-blur-sm shadow-lg shadow-mint/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
                  LIVE
                </span>
              </div>
            )}

            {/* Hover CTA buttons */}
            <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300">
              {href && (
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-white/15 backdrop-blur-md text-white border border-white/10 hover:bg-white/25 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  Live
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              )}
              <button
                onClick={() => setIsHidden(true)}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-white/15 backdrop-blur-md text-white border border-white/10 hover:bg-white/25 transition-colors cursor-pointer"
              >
                Details
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="px-1">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <h3 className="text-xl sm:text-2xl font-bold dark:text-white text-neutral-800 group-hover:text-lavender transition-colors duration-300">
                {title}
              </h3>
              <p className="text-sm dark:text-neutral-400 text-neutral-500 mt-2 leading-relaxed line-clamp-2">
                {description}
              </p>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag) => (
              <div
                key={tag.id}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg dark:bg-white/[0.04] bg-black/[0.03] dark:border-white/[0.06] border-black/[0.06] text-xs dark:text-neutral-400 text-neutral-500 transition-all duration-200 dark:hover:bg-white/[0.08] hover:bg-black/[0.06]"
              >
                {tag.path && (
                  <img
                    src={tag.path}
                    alt={tag.name}
                    title={tag.name}
                    className="w-3.5 h-3.5 shrink-0 object-contain"
                    loading="lazy"
                  />
                )}
                <span>{tag.name}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="section-divider w-full my-2" />

      <AnimatePresence>
        {isHidden && (
          <ProjectDetails
            title={title}
            description={description}
            subDescription={subDescription}
            image={image}
            tags={tags}
            href={href}
            closeModal={() => setIsHidden(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Project;
