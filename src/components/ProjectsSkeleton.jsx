import { motion } from "motion/react";

const shimmer = "animate-pulse dark:bg-white/[0.04] bg-black/[0.06]";

const ProjectSkeleton = ({ index = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
    className="relative"
  >
    <div className="relative rounded-2xl overflow-hidden mb-5">
      <div className={`relative h-52 sm:h-64 ${shimmer} rounded-2xl`} />
    </div>
    <div className="px-1">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 space-y-3">
          <div className={`h-6 w-3/5 rounded-lg ${shimmer}`} />
          <div className={`h-4 w-4/5 rounded-lg ${shimmer}`} />
          <div className={`h-4 w-2/5 rounded-lg ${shimmer}`} />
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mt-4">
        {[0, 1, 2].map((j) => (
          <div key={j} className={`h-7 w-16 rounded-lg ${shimmer}`} />
        ))}
      </div>
    </div>
  </motion.div>
);

const ProjectsSkeleton = ({ count = 4 }) => (
  <div className="flex-1 min-w-0">
    {Array.from({ length: count }).map((_, i) => (
      <div key={i}>
        <ProjectSkeleton index={i} />
        <div className="section-divider w-full my-2" />
      </div>
    ))}
  </div>
);

export { ProjectSkeleton, ProjectsSkeleton };
export default ProjectsSkeleton;
