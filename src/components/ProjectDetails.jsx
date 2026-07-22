import { motion } from "motion/react";
import { trackEvent } from "../utils/analytics";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden modal-overlay"
      onClick={closeModal}
    >
      <motion.div
        className="relative max-w-2xl w-[90%] max-h-[90vh] overflow-y-auto shadow-2xl rounded-2xl modal-content"
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 20 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeModal}
          aria-label="Close project details"
          className="absolute z-10 p-2 rounded-lg top-4 right-4 dark:bg-black/40 bg-white/80 backdrop-blur-sm dark:border-white/10 border-black/10 dark:hover:bg-white/10 hover:bg-black/10 transition-colors"
        >
          <svg className="w-5 h-5 dark:text-white text-neutral-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {image ? (
          <div className="relative h-56 overflow-hidden rounded-t-2xl">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        ) : (
          <div className="relative h-56 bg-gradient-to-br from-royal to-lavender flex items-center justify-center rounded-t-2xl">
            <span className="text-7xl font-black text-white/15">{title.charAt(0)}</span>
          </div>
        )}

        <div className="p-6">
          <h5 className="mb-3 text-2xl font-bold dark:text-white text-neutral-800">{title}</h5>
          <p className="mb-5 font-normal dark:text-neutral-400 text-neutral-500 leading-relaxed">{description}</p>

          <div className="space-y-3 mb-6">
            {subDescription.map((subDesc, index) => (
              <div key={`${title}-desc-${index}`} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-royal to-lavender mt-2 shrink-0" />
                <p className="font-normal dark:text-neutral-400 text-neutral-500 text-sm leading-relaxed">{subDesc}</p>
              </div>
            ))}
          </div>

          <div className="section-divider w-full mb-5" />

          <div className="mb-5">
            <p className="text-xs font-medium dark:text-neutral-500 text-neutral-400 uppercase tracking-wider mb-3">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <div
                  key={tag.id}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg dark:bg-white/[0.04] bg-black/[0.03] dark:border-white/[0.08] border-black/[0.06]"
                >
                  {tag.path && (
                    <img
                      src={tag.path}
                      alt={tag.name}
                      className="w-4 h-4"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  )}
                  <span className="text-xs font-medium dark:text-neutral-300 text-neutral-600">{tag.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            {href && (
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackEvent("project_click", { project: title, url: href })}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-xl bg-gradient-to-r from-royal to-lavender text-white hover:opacity-90 transition-opacity"
              >
                View Live Project
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            )}
            <button
              onClick={closeModal}
              className="px-5 py-2.5 text-sm font-medium rounded-xl dark:border-white/10 border-black/10 dark:text-neutral-400 text-neutral-500 dark:hover:text-white hover:text-primary dark:hover:bg-white/5 hover:bg-black/5 transition-all cursor-pointer border"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
