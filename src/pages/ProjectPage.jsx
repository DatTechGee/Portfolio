import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "motion/react";
import ScrollReveal from "../components/ScrollReveal";
import Seo from "../components/Seo";
import { myProjects } from "../constants";
import toSlug from "../utils/slug";

const isGithub = (url = "") => url.includes("github.com");

export default function ProjectPage() {
  const { slug } = useParams();
  const project = myProjects.find(
    (p) => toSlug(p.title) === slug || String(p.id) === slug
  );

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const related = myProjects
    .filter((p) => p.id !== project.id)
    .sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: project.title,
    description: project.description,
    codeRepository: project.github || null,
    url: project.href || project.github || null,
    image: `https://dattechgee.vercel.app${project.image}`,
    author: {
      "@type": "Person",
      name: "Isaac Emmanuel",
    },
    offers: {
      "@type": "Offer",
      category: "Software Development",
    },
  };

  return (
    <main className="bg-[var(--bg-base)] min-h-screen">
      <Seo
        title={`${project.title} | DatTechGee Technologies`}
        description={project.description}
        path={`/projects/${slug}`}
        image={project.image}
        type="article"
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="section-spacing pt-32 pb-10">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-neutral-400 text-sm hover:text-gold transition-colors duration-300 mb-8"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Projects
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <div className="flex items-center gap-3 mb-6 flex-wrap">
              {project.featured && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide bg-gold text-[var(--bg-base)]">
                  Featured
                </span>
              )}
              {!project.href && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-neutral-300 border border-white/10">
                  Concept
                </span>
              )}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
              {project.title}
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="text-neutral-500 text-base md:text-lg leading-relaxed">
              {project.description}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="flex flex-wrap gap-3 mt-8">
              {project.href && !isGithub(project.href) && (
                <a
                  href={project.href}
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
              {project.github && (
                <a
                  href={project.github}
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
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Hero Image */}
      <section className="pb-14">
        <div className="max-w-4xl mx-auto px-6">
          <div
            className="relative rounded-2xl overflow-hidden border border-white/[0.08] h-64 md:h-96"
            style={{
              background:
                project.gradient || "linear-gradient(135deg, var(--bg-card), #1a2a50)",
            }}
          >
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-base)]/70 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Case Study */}
      {[project.problem, project.solution, project.result].some(Boolean) && (
        <section className="pb-14">
          <div className="max-w-4xl mx-auto px-6">
            <ScrollReveal>
              <h2 className="text-2xl font-bold text-white mb-8">Case Study</h2>
            </ScrollReveal>
            <div className="grid gap-5 md:grid-cols-3">
              {[
                { label: "Problem", value: project.problem },
                { label: "Solution", value: project.solution },
                { label: "Result", value: project.result },
              ].map(
                (cs) =>
                  cs.value && (
                    <ScrollReveal key={cs.label}>
                      <div className="h-full rounded-2xl bg-[var(--bg-card)] border border-white/[0.08] p-6">
                        <span className="block text-xs font-bold uppercase tracking-wider text-gold mb-3">
                          {cs.label}
                        </span>
                        <span className="block text-neutral-400 text-sm leading-relaxed">
                          {cs.value}
                        </span>
                      </div>
                    </ScrollReveal>
                  )
              )}
            </div>
          </div>
        </section>
      )}

      {/* Key Features */}
      {project.subDescription && project.subDescription.length > 0 && (
        <section className="pb-14">
          <div className="max-w-4xl mx-auto px-6">
            <ScrollReveal>
              <h2 className="text-2xl font-bold text-white mb-8">Key Features</h2>
            </ScrollReveal>
            <ul className="space-y-3">
              {project.subDescription.map((feature, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="flex items-start gap-3 rounded-xl bg-white/[0.03] border border-white/[0.06] px-4 py-3"
                >
                  <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-400 text-sm">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Tech Stack */}
      {project.tags && project.tags.length > 0 && (
        <section className="pb-20">
          <div className="max-w-4xl mx-auto px-6">
            <ScrollReveal>
              <h2 className="text-2xl font-bold text-white mb-8">Tech Stack</h2>
            </ScrollReveal>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag.id || tag.name}
                  className="px-3 py-1.5 rounded-full text-xs bg-white/5 border border-white/10 text-neutral-400"
                >
                  {tag.name}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related */}
      <section className="py-20 bg-[var(--bg-deep)]">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-white mb-8">More Projects</h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {related.map((p, i) => (
              <ScrollReveal key={p.id} delay={i * 0.06}>
                <Link
                  to={`/projects/${toSlug(p.title)}`}
                  className="group block bg-[var(--bg-card)] border border-white/[0.08] rounded-xl overflow-hidden hover:border-gold/25 hover:-translate-y-1 transition-all duration-300 h-full"
                >
                  <div
                    className="h-28 relative overflow-hidden"
                    style={{
                      background:
                        p.gradient || "linear-gradient(135deg, var(--bg-card), #1a2a50)",
                    }}
                  >
                    {p.image && (
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                      />
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-semibold text-white group-hover:text-gold transition-colors">
                      {p.title}
                    </h3>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}