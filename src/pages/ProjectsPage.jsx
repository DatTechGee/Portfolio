import { useState, useEffect } from "react";
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
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = myProjects.filter((p) => matchesFilter(p, activeFilter));

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
    <main className="bg-[#0a1128] min-h-screen">
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-neutral-800 mb-6">
              Our Portfolio
            </h1>
            <p className="text-neutral-400 text-neutral-500 max-w-2xl mx-auto text-lg">
              A selection of projects that demonstrate execution quality and technical breadth
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter Tags */}
      <section className="pb-12">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
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
                  onClick={() => setSelectedProject(project)}
                  className="group bg-[#0f1a36] border border-white/[0.08] rounded-xl overflow-hidden hover:border-gold/25 hover:shadow-[0_8px_30px_rgba(212,168,67,0.06)] transition-all duration-400 hover:-translate-y-1 cursor-pointer"
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
                    {!project.href && (
                      <span className="absolute top-3 left-3 px-2 py-0.5 rounded text-[10px] font-semibold bg-white/10 backdrop-blur-sm text-neutral-300 border border-white/10">
                        Concept
                      </span>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-white text-neutral-800 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-neutral-400 text-neutral-500 text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Tags */}
                    {project.tags && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tags.slice(0, 4).map((tag) => (
                          <span
                            key={tag.id || tag.name}
                            className="px-2 py-0.5 rounded text-xs bg-white/5 border border-white/10 text-neutral-400 text-neutral-500"
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
              <p className="text-neutral-400 text-neutral-500 text-lg">
                No projects found for this filter.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-16 bg-[#060d1f]">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase block mb-3">
                Track Record
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white text-neutral-800">
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
                  <div className="text-neutral-400 text-neutral-500 text-sm">
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
            <h2 className="text-3xl md:text-4xl font-bold text-white text-neutral-800 mb-4">
              Ready to build something exceptional?
            </h2>
            <p className="text-neutral-400 text-neutral-500 mb-8 max-w-lg mx-auto">
              Let DatTechGee Technologies discuss your vision and bring it to life with expert execution.
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
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0f1a36] border border-white/[0.08] rounded-3xl"
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
                  background: selectedProject.gradient || "linear-gradient(135deg, #0f1a36, #1a2a50)",
                }}
              >
                {selectedProject.image && (
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1a36] via-transparent to-transparent" />
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <h2 className="text-2xl font-bold text-white text-neutral-800 mb-3">
                  {selectedProject.title}
                </h2>
                <p className="text-neutral-400 text-neutral-500 mb-6 leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Key Features */}
                {selectedProject.subDescription && selectedProject.subDescription.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-white text-neutral-800 mb-3">
                      Key Features
                    </h3>
                    <ul className="space-y-2">
                      {selectedProject.subDescription.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-neutral-400 text-neutral-500">
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
                    <h3 className="text-lg font-semibold text-white text-neutral-800 mb-3">
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <span
                          key={tag.id || tag.name}
                          className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-neutral-400 text-neutral-500"
                        >
                          {tag.name}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  {selectedProject.href && (
                    <a
                      href={selectedProject.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gold text-[#0a1128] px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-gold/90 transition-colors duration-300"
                    >
                      View Live
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  )}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="inline-flex items-center gap-2 border border-white/10 text-neutral-400 px-6 py-2.5 rounded-full font-semibold text-sm hover:border-white/30 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
