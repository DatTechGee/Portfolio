import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "motion/react";
import ScrollReveal from "../components/ScrollReveal";
import Seo from "../components/Seo";
import { allArticles, categoryColors } from "../constants/articles";

const toSlug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default function ArticlePage() {
  const { slug } = useParams();
  const article = allArticles.find((a) => toSlug(a.title) === slug || a.id === slug);

  if (!article) {
    return <Navigate to="/insights" replace />;
  }

  const related = allArticles
    .filter((a) => a.id !== article.id && a.category === article.category)
    .slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: `https://dattechgee.vercel.app${article.image}`,
    datePublished: article.date,
    author: {
      "@type": "Person",
      name: "Isaac Emmanuel",
    },
    publisher: {
      "@type": "Organization",
      name: "DatTechGee Technologies",
    },
  };

  return (
    <main className="bg-[var(--bg-base)] min-h-screen">
      <Seo
        title={article.title}
        description={article.description}
        path={`/insights/${slug}`}
        image={article.image}
        type="article"
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="section-spacing pt-32 pb-10">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 text-neutral-400 text-sm hover:text-gold transition-colors duration-300 mb-8"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Insights
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <div className="flex items-center gap-3 mb-6">
              <span
                className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${
                  categoryColors[article.category] ||
                  "bg-white/5 text-neutral-400 border-white/10"
                }`}
              >
                {article.category}
              </span>
              <span className="text-xs text-neutral-500">{article.date}</span>
              <span className="text-xs text-neutral-500">{article.readTime}</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
              {article.title}
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="text-neutral-500 text-base md:text-lg leading-relaxed">
              {article.description}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Hero Image */}
      <section className="pb-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] h-64 md:h-96">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-base)]/70 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-10">
            {article.body.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4 border-l-4 border-gold pl-4">
                  {section.heading}
                </h2>
                <div className="space-y-4">
                  {section.paragraphs.map((p, j) => (
                    <p key={j} className="text-neutral-400 leading-relaxed text-base">
                      {p}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Author */}
          <div className="mt-14 rounded-2xl bg-[var(--bg-card)] border border-white/[0.08] p-6 flex items-center gap-4">
            <div className="w-14 h-14 rounded-full overflow-hidden border border-white/10 shrink-0">
              <img src="/assets/PORTFILO.png" alt="Isaac Emmanuel" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-white font-semibold">Isaac Emmanuel</p>
              <p className="text-neutral-500 text-sm">
                Founder & Lead Developer, DatTechGee Technologies
              </p>
            </div>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div className="mt-14">
              <h3 className="text-lg font-bold text-white mb-5">Related Reading</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {related.map((a) => (
                  <Link
                    key={a.id}
                    to={`/insights/${toSlug(a.title)}`}
                    className="group bg-[var(--bg-card)] border border-white/[0.08] rounded-xl p-5 hover:border-gold/25 transition-all duration-300"
                  >
                    <span className="text-[11px] uppercase tracking-wider text-gold mb-2 block">
                      {a.category}
                    </span>
                    <h4 className="text-white font-semibold group-hover:text-gold transition-colors duration-300 leading-snug">
                      {a.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
