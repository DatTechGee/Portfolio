import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";
import Seo from "../components/Seo";
import { myProjects } from "../constants";
import toSlug from "../utils/slug";

const filterCategories = [
  "All",
  "Web Apps",
  "Mobile",
  "Business Systems",
  "API",
  "Blockchain",
];

const filterKeywords = {
  "Web Apps": ["web", "react", "next", "frontend", "fullstack", "full-stack", "dashboard", "portfolio", "website", "landing", "estate", "climate"],
  "Mobile": ["mobile", "android", "ios", "react native", "flutter", "fitness", "food delivery"],
  "Business Systems": ["business", "system", "erp", "crm", "management", "inventory", "invoice", "billing", "pos", "hr", "payroll", "student", "hostel", "gpa", "school"],
  "API": ["api", "rest", "graphql", "backend", "server", "endpoint", "microservice", "payment gateway", "notification"],
  "Blockchain": ["blockchain", "web3", "crypto", "defi", "smart contract", "nft", "medical crowdfunding"],
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
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const [showPreview, setShowPreview] = useState(false);

  const filteredProjects = myProjects.filter(
    (p) =>
      matchesFilter(p, activeFilter) &&
      (searchTerm.trim() === "" ||
        `${p.title} ${p.description} ${p.tags?.map((t) => t.name).join(" ") || ""}`
          .toLowerCase()
          .includes(searchTerm.trim().toLowerCase()))
  );
  const sortedProjects = [...filteredProjects].sort(
    (a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0)
  );

  useEffect(() => {
    if (!selectedProject) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject]);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [selectedProject]);

  return (
    <main className="bg-[var(--bg-base)] min-h-screen">
      <Seo
        title="Projects | DatTechGee Technologies — Isaac Emmanuel"
        description="Explore 20+ projects built by Isaac Emmanuel and DatTechGee Technologies — school management systems, payroll, blockchain DApps, mobile apps, and business systems."
        path="/projects"
        image="/assets/logo.png"
        type="website"
      />
      {/* Page Header */}
      <section className="section-spacing pt-32 pb-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <ScrollReveal>
            <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
              DatTechGee Technologies
            </span>
            <span className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 block">
              Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our Portfolio
            </h1>
            <p className="text-neutral-500 max-w-2xl mx-auto text-lg">
              A selection of projects that demonstrate execution quality and technical breadth
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter Tags */}
      <section className="pb-12">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-xl mx-auto mb-8">
              <div className="relative">
                <svg
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m1.35-5.4a6.75 6.75 0 11-13.5 0 6.75 6.75 0 0113.5 0z" />
                </svg>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search projects by name, tech, or keyword…"
                  className="w-full bg-[var(--bg-card)] border border-white/[0.08] rounded-full pl-12 pr-4 py-3.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-gold/40 focus:shadow-[0_0_20px_rgba(0, 114, 255,0.08)] transition-all duration-300"
                />
              </div>
            </div>
            <div className="text-center mb-4">
              <span className="text-neutral-500 text-xs font-medium tracking-widest uppercase">
                Filter by Category
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {filterCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                    activeFilter === cat
                      ? "bg-gold text-[var(--bg-base)]"
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
              {sortedProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  onClick={() => {
                    setShowPreview(false);
                    setSelectedProject(project);
                  }}
                  className={`group bg-[var(--bg-card)] border rounded-xl overflow-hidden hover:border-gold/25 hover:shadow-[0_8px_30px_rgba(0, 114, 255,0.06)] transition-all duration-400 hover:-translate-y-1 cursor-pointer ${
                    project.featured
                      ? "md:col-span-2 lg:col-span-1 border-gold/20 lg:col-span-1"
                      : "border-white/[0.08]"
                  }`}
                >
                  {/* Image / Gradient Preview */}
                  <div
                    className={`relative overflow-hidden ${
                      project.featured ? "h-56" : "h-48"
                    }`}
                    style={{
                      background: project.gradient || "linear-gradient(135deg, var(--bg-card), #1a2a50)",
                    }}
                  >
                    {project.image && (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-transparent to-transparent" />
                    {!project.href && (
                      <span className="absolute top-3 left-3 px-2 py-0.5 rounded text-[10px] font-semibold bg-white/10 backdrop-blur-sm text-neutral-300 border border-white/10">
                        Concept
                      </span>
                    )}
                    {project.featured && (
                      <span className="absolute top-3 right-3 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide bg-gold text-[var(--bg-base)]">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-neutral-500 text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Case Study — Problem / Solution / Result */}
                    {[project.problem, project.solution, project.result].some(Boolean) && (
                      <div className="mb-4 space-y-2.5">
                        {[
                          { label: "Problem", value: project.problem },
                          { label: "Solution", value: project.solution },
                          { label: "Result", value: project.result },
                        ].map((cs) =>
                          cs.value ? (
                            <div key={cs.label} className="rounded-lg bg-white/[0.03] border border-white/[0.06] px-3 py-2">
                              <span className="block text-[10px] font-bold uppercase tracking-wider text-gold mb-0.5">
                                {cs.label}
                              </span>
                              <span className="block text-xs text-neutral-400 leading-relaxed">
                                {cs.value}
                              </span>
                            </div>
                          ) : null
                        )}
                      </div>
                    )}

                    {/* Tech Tags */}
                    {project.tags && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tags.slice(0, 4).map((tag) => (
                          <span
                            key={tag.id || tag.name}
                            className="px-2 py-0.5 rounded text-xs bg-white/5 border border-white/10 text-neutral-500"
                          >
                            {tag.name}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Links */}
                    <div className="flex flex-wrap items-center gap-3">
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
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-neutral-400 text-sm font-medium hover:text-gold transition-colors duration-300"
                        >
                          <svg
                            className="w-3.5 h-3.5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.29-1.69-1.29-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 015.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.77 1.05.77 2.12v3.14c0 .3.21.66.8.55A11.52 11.52 0 0023.5 12C23.5 5.73 18.27.5 12 .5z" />
                          </svg>
                          GitHub
                        </a>
                      )}
                      <Link
                        to={`/projects/${toSlug(project.title)}`}
                        className="inline-flex items-center gap-1 text-neutral-400 text-sm font-medium hover:text-gold transition-colors duration-300"
                      >
                        Case Study
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-neutral-500 text-lg">
                No projects found{searchTerm ? ` for "${searchTerm}"` : ""}. Try a different search or filter.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-16 bg-[var(--bg-deep)]">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase block mb-3">
                Track Record
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Proven Results
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { label: "Projects", value: "21+" },
                { label: "Technologies", value: "14+" },
                { label: "Clients", value: "18+" },
                { label: "Years", value: "4+" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl md:text-4xl font-bold text-gold mb-1">
                    {stat.value}
                  </div>
                  <div className="text-neutral-500 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[var(--bg-deep)]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to build something exceptional?
            </h2>
            <p className="text-neutral-500 mb-8 max-w-lg mx-auto">
              Let DatTechGee Technologies discuss your vision and bring it to life with expert execution.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gold text-[var(--bg-base)] px-8 py-3.5 rounded-full font-semibold hover:bg-gold/90 transition-colors duration-300"
            >
              Start a Conversation
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[var(--bg-card)] border border-white/[0.08] rounded-3xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/30 transition-colors cursor-pointer"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Project Image */}
              <div
                className="h-64 relative overflow-hidden"
                style={{
                  background: selectedProject.gradient || "linear-gradient(135deg, var(--bg-card), #1a2a50)",
                }}
              >
                {selectedProject.image && (
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-transparent to-transparent" />
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <h2 className="text-2xl font-bold text-white mb-3">
                  {selectedProject.title}
                </h2>
                <p className="text-neutral-500 mb-6 leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Case Study — Problem / Solution / Result */}
                {[selectedProject.problem, selectedProject.solution, selectedProject.result].some(Boolean) && (
                  <div className="mb-6 grid gap-4 md:grid-cols-3">
                    {[
                      { label: "Problem", value: selectedProject.problem },
                      { label: "Solution", value: selectedProject.solution },
                      { label: "Result", value: selectedProject.result },
                    ].map((cs) =>
                      cs.value ? (
                        <div
                          key={cs.label}
                          className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-4"
                        >
                          <span className="block text-[11px] font-bold uppercase tracking-wider text-gold mb-1.5">
                            {cs.label}
                          </span>
                          <span className="block text-sm text-neutral-400 leading-relaxed">
                            {cs.value}
                          </span>
                        </div>
                      ) : null
                    )}
                  </div>
                )}

                {/* Key Features */}
                {selectedProject.subDescription && selectedProject.subDescription.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Key Features
                    </h3>
                    <ul className="space-y-2">
                      {selectedProject.subDescription.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-neutral-500">
                          <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tech Stack Tags */}
                {selectedProject.tags && selectedProject.tags.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <span
                          key={tag.id || tag.name}
                          className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-neutral-500"
                        >
                          {tag.name}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Live Preview */}
                {showPreview &&
                  selectedProject.href &&
                  !selectedProject.href.includes("github.com") && (
                    <div className="mb-8">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-semibold text-white">
                          Live Preview
                        </h3>
                        <span className="flex items-center gap-1.5 text-[11px] text-neutral-500">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                          {selectedProject.href.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                        </span>
                      </div>
                      <div className="rounded-2xl overflow-hidden border border-white/10 bg-[var(--bg-base)]">
                        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/[0.06]">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                        </div>
                        <iframe
                          src={selectedProject.href}
                          title={`Live preview of ${selectedProject.title}`}
                          className="w-full h-[420px] block bg-white"
                          loading="lazy"
                          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                        />
                      </div>
                      <p className="text-xs text-neutral-500 mt-2">
                        Some sites may block embedded previews — use{" "}
                        <a
                          href={selectedProject.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gold hover:underline"
                        >
                          View Live
                        </a>{" "}
                        to open the full site.
                      </p>
                    </div>
                  )}

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  {selectedProject.href && (
                    <a
                      href={selectedProject.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gold text-[var(--bg-base)] px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-gold/90 transition-colors duration-300"
                    >
                      View Live
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  )}
                  {selectedProject.href && !selectedProject.href.includes("github.com") && (
                    <button
                      onClick={() => setShowPreview((v) => !v)}
                      className="inline-flex items-center gap-2 border border-gold/40 text-gold px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-gold/10 transition-colors duration-300 cursor-pointer"
                    >
                      {showPreview ? "Hide Preview" : "Preview Live"}
                    </button>
                  )}
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-white/10 text-neutral-300 px-6 py-2.5 rounded-full font-semibold text-sm hover:border-gold/40 hover:text-gold transition-colors duration-300"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.29-1.69-1.29-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 015.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.77 1.05.77 2.12v3.14c0 .3.21.66.8.55A11.52 11.52 0 0023.5 12C23.5 5.73 18.27.5 12 .5z" />
                      </svg>
                      GitHub
                    </a>
                  )}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="inline-flex items-center gap-2 border border-white/10 text-neutral-400 px-6 py-2.5 rounded-full font-semibold text-sm hover:border-white/30 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    Close
                  </button>
                  <Link
                    to={`/projects/${toSlug(selectedProject.title)}`}
                    className="inline-flex items-center gap-2 border border-gold/40 text-gold px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-gold/10 transition-colors duration-300"
                  >
                    Full Case Study
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
