import { motion } from "motion/react";
import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";

const featuredArticle = {
  category: "Architecture",
  title: "Building Scalable Full-Stack Applications: A Developer&apos;s Guide",
  description:
    "A deep dive into the architectural decisions that separate short-lived prototypes from production-grade applications. From monolith to modular design, database indexing strategies, caching layers, and horizontal scaling — this guide covers the foundational patterns every full-stack developer needs to understand before scaling beyond a single server. Based on real-world experience building systems that handle thousands of concurrent users.",
  date: "Jan 15, 2026",
  readTime: "12 min read",
  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop&auto=format",
};

const articles = [
  {
    category: "Business Strategy",
    title: "Why Every Business Needs a Custom Software Solution",
    description:
      "Off-the-shelf tools get you started, but custom software gives you a competitive edge. Explore how tailored systems reduce operational friction, eliminate license costs, and align perfectly with your unique workflows. We have seen businesses transform their operations within weeks of switching to custom-built solutions.",
    date: "Jan 11, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=300&fit=crop&auto=format",
  },
  {
    category: "Technology",
    title: "The Role of APIs in Modern Software Architecture",
    description:
      "APIs are the backbone of connected systems. Learn how RESTful design, versioning strategies, rate limiting, and documentation practices create interfaces that other developers actually want to use. This guide draws from our experience building APIs that serve multiple client applications simultaneously.",
    date: "Jan 8, 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=300&fit=crop&auto=format",
  },
  {
    category: "Development",
    title: "Mobile-First Development: Best Practices for 2026",
    description:
      "With mobile traffic surpassing desktop, designing mobile-first is no longer optional. Break down responsive breakpoints, touch targets, performance budgets, and progressive web app strategies that keep users engaged. These are battle-tested patterns from apps we have deployed for thousands of active users.",
    date: "Jan 5, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=300&fit=crop&auto=format",
  },
];

const moreArticles = [
  {
    category: "Architecture",
    title: "Database Design Patterns Every Developer Should Know",
    description:
      "From normalization to denormalization, composite indexes to partitioning — the database design decisions that determine whether your application performs at 100 rows or 100 million. We share the exact patterns we use when architecting databases for high-traffic applications.",
    date: "Dec 28, 2025",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&h=300&fit=crop&auto=format",
  },
  {
    category: "Security",
    title: "Securing Web Applications: From Authentication to Deployment",
    description:
      "A comprehensive walkthrough of modern web application security — covering JWT best practices, CORS configuration, SQL injection prevention, and infrastructure hardening for production environments. Every recommendation is based on real security audits and production deployments.",
    date: "Dec 20, 2025",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f2?w=600&h=300&fit=crop&auto=format",
  },
  {
    category: "Development",
    title: "React vs Next.js: Choosing the Right Framework",
    description:
      "Both are powerful, but they solve different problems. Compare rendering strategies, SEO capabilities, developer experience, and deployment models to make an informed architectural choice. We have built production applications with both and share our honest assessment.",
    date: "Dec 15, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=300&fit=crop&auto=format",
  },
];

const categoryColors = {
  Architecture: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "Business Strategy": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  Technology: "bg-violet-500/10 text-violet-400 border-violet-500/20",
  Development: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  Security: "bg-rose-500/10 text-rose-400 border-rose-500/20",
};

function ArticleCard({ article, index, large = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -4 }}
      className={`group bg-[#0f1a36] border border-white/[0.08] rounded-xl overflow-hidden cursor-default hover:border-gold/25 hover:shadow-[0_8px_30px_rgba(212,168,67,0.06)] transition-all duration-400 ${
        large ? "flex flex-col" : "flex flex-col"
      }`}
    >
      {article.image && (
        <div className={`${large ? "h-48 md:h-56" : "h-40"} overflow-hidden`}>
          <img src={article.image} alt={article.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500" />
        </div>
      )}
      {/* Gradient header bar */}
      <div className="h-1.5 bg-gradient-to-r from-gold/60 via-gold/30 to-transparent" />

      <div className={`p-6 ${large ? "md:p-8" : ""} flex flex-col flex-1`}>
        {/* Category & Meta */}
        <div className="flex items-center justify-between mb-4">
          <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${
              categoryColors[article.category] ||
              "bg-white/5 text-neutral-400 border-white/10"
            }`}
          >
            {article.category}
          </span>
          <span className="text-xs text-neutral-500 text-neutral-500 tabular-nums">
            {article.date}
          </span>
        </div>

        {/* Title */}
        <h3
          className={`font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300 leading-snug ${
            large ? "text-xl md:text-2xl" : "text-lg"
          }`}
        >
          {article.title}
        </h3>

        {/* Description */}
        <p
          className={`text-neutral-400 text-neutral-500 leading-relaxed mb-6 flex-1 ${
            large ? "text-sm md:text-base" : "text-sm"
          }`}
        >
          {article.description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-white/[0.08]">
          <span className="text-xs text-neutral-500 text-neutral-500">
            {article.readTime}
          </span>
          <span className="inline-flex items-center gap-1.5 text-gold text-sm font-semibold group-hover:gap-3 transition-all duration-300">
            Read Article
            <svg
              className="w-4 h-4"
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
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function InsightsPage() {
  return (
    <main className="bg-[#0a1128] min-h-screen">
      {/* Hero Section */}
      <section className="section-spacing pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-gold/50" />
              <span className="text-gold/90 text-xs font-semibold tracking-[0.25em] uppercase">
                DatTechGee Technologies
              </span>
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-gold/50" />
            </div>
            <span className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 block">
              Insights
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Insights
            </h1>
            <p className="text-neutral-400 text-neutral-500 max-w-2xl mx-auto text-lg">
              Thoughts on modern web development, AI-powered automation, and building scalable digital solutions.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="mt-10 max-w-3xl mx-auto">
              <div className="relative rounded-2xl overflow-hidden border border-white/[0.08]">
                <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1000&h=300&fit=crop&auto=format" alt="DatTechGee Technologies — Insights" className="w-full h-48 md:h-56 object-cover opacity-70" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128]/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white text-sm font-semibold">Engineering Insights</p>
                  <p className="text-neutral-400 text-xs">Real-world lessons from building production systems</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Article */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="mb-6">
              <span className="text-gold/70 text-xs font-semibold tracking-[0.2em] uppercase">
                Featured
              </span>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 35, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -4 }}
              className="group bg-[#0f1a36] border border-white/[0.08] rounded-xl overflow-hidden cursor-default hover:border-gold/25 hover:shadow-[0_8px_30px_rgba(212,168,67,0.06)] transition-all duration-400 relative"
            >
              {/* Gradient accent */}
              <div className="h-1.5 bg-gradient-to-r from-gold via-gold/60 to-transparent" />

              <div className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1">
                    {/* Category & Meta */}
                    <div className="flex items-center gap-3 mb-5">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${
                          categoryColors[featuredArticle.category] ||
                          "bg-white/5 text-neutral-400 border-white/10"
                        }`}
                      >
                        {featuredArticle.category}
                      </span>
                      <span className="text-xs text-neutral-500 text-neutral-500">
                        Featured
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight group-hover:text-gold transition-colors duration-300">
                      {featuredArticle.title}
                    </h2>

                    {/* Description */}
                    <p className="text-neutral-400 text-neutral-500 leading-relaxed text-sm md:text-base max-w-3xl">
                      {featuredArticle.description}
                    </p>
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-6 mt-6 border-t border-white/[0.08]">
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-neutral-500 text-neutral-500 tabular-nums">
                      {featuredArticle.date}
                    </span>
                    <span className="text-xs text-neutral-500 text-neutral-500">
                      {featuredArticle.readTime}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-gold text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                    Read Article
                    <svg
                      className="w-4 h-4"
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
                  </span>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="mb-10">
              <div className="flex items-center gap-2 mb-2">
                <div className="h-px w-6 bg-gradient-to-r from-transparent to-gold/40" />
                <span className="text-gold/60 text-xs font-semibold tracking-[0.2em] uppercase">
                  DatTechGee Technologies
                </span>
              </div>
              <h2 className="text-2xl font-bold text-white">
                Latest Articles
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {articles.map((article, i) => (
              <ArticleCard key={article.title} article={article} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* More Articles */}
      <section className="py-16 bg-[#060d1f]">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-white">
                More to Explore
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {moreArticles.map((article, i) => (
              <ArticleCard
                key={article.title}
                article={article}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA Section */}
      <section className="section-spacing">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="bg-[#0f1a36] border border-white/[0.08] rounded-xl p-8 md:p-12 text-center relative overflow-hidden">
              {/* Background accent */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold/[0.03] rounded-full blur-3xl pointer-events-none" />

              <span className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 block relative">
                Stay Updated
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative">
                Stay Updated
              </h2>
              <p className="text-neutral-400 text-neutral-500 mb-8 max-w-lg mx-auto relative">
                Join 500+ developers and business leaders who receive weekly insights on software
                architecture, development best practices, and technology strategy from DatTechGee Technologies.
              </p>

              {/* Email Form */}
              <form
                className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto relative"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full sm:flex-1 bg-[#0a1128] border border-white/[0.08] rounded-full px-5 py-3.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-gold/40 focus:shadow-[0_0_20px_rgba(212,168,67,0.08)] transition-all duration-300"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-gold text-[#0a1128] px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-gold/90 transition-colors duration-300 whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>

              <p className="text-xs text-neutral-600 text-neutral-400 mt-4 relative">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
