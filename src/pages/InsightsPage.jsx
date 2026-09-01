import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";
import Seo from "../components/Seo";
import {
  featuredArticle,
  allArticles,
  moreArticles,
  categoryColors,
} from "../constants/articles";

const toSlug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const MotionLink = motion.create(Link);

function ArticleCard({ article, index, large = false }) {
  return (
    <MotionLink
      to={`/insights/${toSlug(article.title)}`}
      initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -4 }}
      className={`group bg-[var(--bg-card)] border border-white/[0.08] rounded-xl overflow-hidden cursor-pointer hover:border-gold/25 hover:shadow-[0_8px_30px_rgba(0, 114, 255,0.06)] transition-all duration-400 ${
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
          <span className="text-xs text-neutral-500 tabular-nums">
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
          className={`text-neutral-500 leading-relaxed mb-6 flex-1 ${
            large ? "text-sm md:text-base" : "text-sm"
          }`}
        >
          {article.description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-white/[0.08]">
          <span className="text-xs text-neutral-500">
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
    </MotionLink>
  );
}

export default function InsightsPage() {
  const [email, setEmail] = useState("");
  const [subscribing, setSubscribing] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [subscribeError, setSubscribeError] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");

  const categories = [
    "All",
    ...Array.from(new Set(allArticles.map((a) => a.category))),
  ];

  const filteredArticles = allArticles.filter((article) => {
    const matchesCategory =
      activeCategory === "All" || article.category === activeCategory;
    const q = query.trim().toLowerCase();
    const matchesQuery =
      q === "" ||
      `${article.title} ${article.description} ${article.category}`
        .toLowerCase()
        .includes(q);
    return matchesCategory && matchesQuery;
  });

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setSubscribing(true);
    setSubscribeError(null);
    try {
      const emailjs = (await import("@emailjs/browser")).default;
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: "Newsletter Subscriber",
          from_email: email,
          subject: "Newsletter subscription",
          message: `New newsletter subscriber: ${email}`,
          to_name: "Isaac Emmanuel",
          to_email: import.meta.env.VITE_EMAILJS_TO_EMAIL || "ei0413405@gmail.com",
        }
      );
      setSubscribed(true);
      setEmail("");
    } catch (err) {
      console.error("Subscribe failed:", err);
      setSubscribeError("Something went wrong. Please try again.");
    } finally {
      setSubscribing(false);
    }
  };

  return (
    <main className="bg-[var(--bg-base)] min-h-screen">
      <Seo
        title="Insights | DatTechGee Technologies — Our Perspective"
        description="Articles and guides on software architecture, API design, mobile development, security, and business systems from Isaac Emmanuel and DatTechGee Technologies."
        path="/insights"
        image="/assets/logo.png"
        type="website"
      />
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
            <p className="text-neutral-500 max-w-2xl mx-auto text-lg">
              Isaac Emmanuel and DatTechGee on modern web development, AI-powered
              automation, and building scalable digital solutions.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="mt-10 max-w-3xl mx-auto">
              <div className="relative rounded-2xl overflow-hidden border border-white/[0.08]">
                <img src="/assets/soft1.jpg" alt="DatTechGee Technologies — Insights" className="w-full h-48 md:h-56 object-cover opacity-70" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-base)]/80 via-transparent to-transparent" />
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
            <MotionLink
              to={`/insights/${toSlug(featuredArticle.title)}`}
              initial={{ opacity: 0, y: 35, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -4 }}
              className="group bg-[var(--bg-card)] border border-white/[0.08] rounded-xl overflow-hidden cursor-pointer hover:border-gold/25 hover:shadow-[0_8px_30px_rgba(0, 114, 255,0.06)] transition-all duration-400 relative"
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
                      <span className="text-xs text-neutral-500">
                        Featured
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight group-hover:text-gold transition-colors duration-300">
                      {featuredArticle.title}
                    </h2>

                    {/* Description */}
                    <p className="text-neutral-500 leading-relaxed text-sm md:text-base max-w-3xl">
                      {featuredArticle.description}
                    </p>
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-6 mt-6 border-t border-white/[0.08]">
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-neutral-500 tabular-nums">
                      {featuredArticle.date}
                    </span>
                    <span className="text-xs text-neutral-500">
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
            </MotionLink>
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

          {/* Category filter + Search */}
          <ScrollReveal delay={0.05}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all duration-300 cursor-pointer ${
                      activeCategory === cat
                        ? "bg-gold text-navy border-gold"
                        : "text-neutral-400 border-white/10 hover:text-gold hover:border-gold/30 bg-white/[0.02]"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <div className="relative w-full md:w-64">
                <svg
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m1.35-5.4a6.75 6.75 0 11-13.5 0 6.75 6.75 0 0113.5 0z" />
                </svg>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search articles—"
                  className="w-full bg-[var(--bg-card)] border border-white/[0.08] rounded-full pl-10 pr-4 py-2 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-gold/40 transition-all duration-300"
                />
              </div>
            </div>
          </ScrollReveal>

          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {filteredArticles.map((article, i) => (
                <ArticleCard key={article.title} article={article} index={i} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-[var(--bg-card)] border border-white/[0.08] rounded-xl">
              <p className="text-neutral-400 text-sm">
                No articles match your search. Try a different category or keyword.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* More Articles */}
      {activeCategory === "All" && query.trim() === "" && (
        <section className="py-16 bg-[var(--bg-deep)]">
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
      )}

      {/* Newsletter / CTA Section */}
      <section className="section-spacing">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="bg-[var(--bg-card)] border border-white/[0.08] rounded-xl p-8 md:p-12 text-center relative overflow-hidden">
              {/* Background accent */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold/[0.03] rounded-full blur-3xl pointer-events-none" />

              <span className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 block relative">
                Stay Updated
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative">
                Stay Updated
              </h2>
              <p className="text-neutral-500 mb-8 max-w-lg mx-auto relative">
                Join 500+ developers and business leaders who receive weekly insights on software
                architecture, development best practices, and technology strategy from DatTechGee Technologies.
              </p>

              {/* Email Form */}
              {subscribed ? (
                <div className="max-w-md mx-auto relative">
                  <div className="flex items-center justify-center gap-2 text-gold mb-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-semibold text-white">You&apos;re subscribed!</span>
                  </div>
                  <p className="text-sm text-neutral-400">
                    Thanks for joining. Weekly insights are on the way to your inbox.
                  </p>
                </div>
              ) : (
                <form
                  className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto relative"
                  onSubmit={handleSubscribe}
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full sm:flex-1 bg-[var(--bg-base)] border border-white/[0.08] rounded-full px-5 py-3.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-gold/40 focus:shadow-[0_0_20px_rgba(0, 114, 255,0.08)] transition-all duration-300"
                  />
                  <button
                    type="submit"
                    disabled={subscribing}
                    className="w-full sm:w-auto bg-gold text-[var(--bg-base)] px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-gold/90 transition-colors duration-300 whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {subscribing ? "Subscribing—" : "Subscribe"}
                  </button>
                </form>
              )}

              {subscribeError && (
                <p className="text-xs text-rose-400 mt-4 relative">{subscribeError}</p>
              )}
              {!subscribed && !subscribeError && (
                <p className="text-xs text-neutral-400 mt-4 relative">
                  No spam. Unsubscribe anytime.
                </p>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
