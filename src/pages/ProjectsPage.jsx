import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";
import { myProjects } from "../constants";

const filterCategories = [
  "All",
  "Web Apps",
  "Mobile",
  "Business Systems",
  "API",
  "Blockchain",
];

const filterKeywords = {
  "Web Apps": ["web", "react", "next", "frontend", "fullstack", "full-stack", "dashboard", "portfolio", "website", "app"],
  "Mobile": ["mobile", "android", "ios", "react native", "flutter"],
  "Business Systems": ["business", "system", "erp", "crm", "management", "inventory", "invoice", "billing", "pos", "hr"],
  "API": ["api", "rest", "graphql", "backend", "server", "endpoint"],
  "Blockchain": ["blockchain", "web3", "crypto", "defi", "smart contract", "nft"],
};

function matchesFilter(project, category) {
  if (category === "All") return true;
  const keywords = filterKeywords[category] || [];
  const text = `${project.title} ${project.description}`.toLowerCase();
  return keywords.some((kw) => text.includes(kw.toLowerCase()));
}

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
  exit: { opacity: 0, y: -20, scale: 0.95, transition: { duration: 0.3 } },
};

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = myProjects.filter((p) => matchesFilter(p, activeFilter));

  return (
    <main className="bg-[#0a1128] min-h-screen">
      {/* Page Header */}
      <section className="section-spacing pt-32 pb-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <ScrollReveal>
            <span className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 block">
              Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold dark:text-white text-neutral-800 mb-6">
              Featured Projects
            </h1>
            <p className="dark:text-neutral-400 text-neutral-500 max-w-2xl mx-auto text-lg">
              A selection of projects that demonstrate execution quality and technical breadth
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter Tags */}
      <section className="pb-12">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-3">
              {filterCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                    activeFilter === cat
                      ? "bg-gold text-[#0a1128]"
                      : "border border-white/10 text-neutral-400 hover:border-gold/40 hover:text-neutral-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="group bg-[#0f1a36] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-gold/30 hover:shadow-[0_0_30px_rgba(212,168,67,0.1)] transition-all duration-500 hover:-translate-y-1"
                >
                  {/* Image / Gradient Preview */}
                  <div
                    className="h-48 relative overflow-hidden"
                    style={{
                      background: project.gradient || "linear-gradient(135deg, #0f1a36, #1a2a50)",
                    }}
                  >
                    {project.image && (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f1a36] via-transparent to-transparent" />
                  </div>

                  {/* Card Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-semibold dark:text-white text-neutral-800 mb-2">
                      {project.title}
                    </h3>
                    <p className="dark:text-neutral-400 text-neutral-500 text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Tags */}
                    {project.tags && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tags.slice(0, 4).map((tag) => (
                          <span
                            key={tag.id || tag.name}
                            className="px-2 py-0.5 rounded text-xs bg-white/5 border border-white/10 dark:text-neutral-400 text-neutral-500"
                          >
                            {tag.name}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* View Live Link */}
                    {project.href && (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-gold text-sm font-medium hover:underline"
                      >
                        View Live
                        <svg
                          className="w-3.5 h-3.5 ml-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="dark:text-neutral-400 text-neutral-500 text-lg">
                No projects found for this filter.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-16 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { label: "Projects", value: "15+" },
                { label: "Technologies", value: "10+" },
                { label: "Clients", value: "15+" },
                { label: "Years", value: "4+" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl md:text-4xl font-bold text-gold mb-1">
                    {stat.value}
                  </div>
                  <div className="dark:text-neutral-400 text-neutral-500 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#060d1f]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold dark:text-white text-neutral-800 mb-4">
              Have a project in mind?
            </h2>
            <p className="dark:text-neutral-400 text-neutral-500 mb-8 max-w-lg mx-auto">
              Let&apos;s collaborate and build something exceptional together.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gold text-[#0a1128] px-8 py-3.5 rounded-full font-semibold hover:bg-gold/90 transition-colors duration-300"
            >
              Start a Conversation
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
