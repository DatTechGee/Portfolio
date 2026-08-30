import { motion } from "motion/react";
import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";
import Seo from "../components/Seo";
import { reviews, getAvatarColors, portfolioStats } from "../constants";

const starRow = (key) => (
  <div className="flex gap-0.5 mt-4" aria-label="5 star rating">
    {[...Array(5)].map((_, si) => (
      <svg
        key={`${key}-${si}`}
        className="w-4 h-4 text-gold"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

export default function TestimonialsPage() {
  return (
    <main className="bg-[var(--bg-base)] min-h-screen">
      <Seo
        title="Testimonials | DatTechGee Technologies — Isaac Emmanuel"
        description="Read what clients say about DatTechGee Technologies — school portals, payroll systems, e-commerce, logistics apps, and custom business software built by Isaac Emmanuel."
        path="/testimonials"
        image="/assets/logo.png"
        type="website"
      />
      {/* Header */}
      <section className="section-spacing pt-32 pb-14">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <ScrollReveal>
            <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
              DatTechGee Technologies
            </span>
            <span className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 block">
              Client Stories
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              What Our Clients{" "}
              <span className="bg-gradient-to-r from-[var(--tx)] to-gold bg-clip-text text-transparent">
                Say
              </span>
            </h1>
            <p className="text-neutral-500 max-w-2xl mx-auto text-lg">
              Real outcomes from real engagements across schools, startups, e-commerce, logistics, and more.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Summary stats */}
      <section className="pb-14">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <div className="bg-[var(--bg-card)] border border-white/[0.08] rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: `${portfolioStats.projectsDelivered}+`, label: "Projects Delivered" },
                { value: `${portfolioStats.happyClients}+`, label: "Happy Clients" },
                { value: `${portfolioStats.clientSatisfaction}%`, label: "Client Satisfaction" },
                { value: "5.0", label: "Average Rating" },
              ].map((s) => (
                <div key={s.label}>
                  <span className="block text-3xl font-bold text-gold">{s.value}</span>
                  <span className="block text-neutral-400 text-sm mt-1">{s.label}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, i) => {
              const colors = getAvatarColors(review.colorIdx);
              return (
                <ScrollReveal key={review.name} delay={(i % 3) * 0.08}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="h-full bg-[var(--bg-card)] border border-white/[0.08] rounded-2xl p-6 hover:border-gold/25 hover:shadow-[0_8px_30px_rgba(0,114,255,0.06)] transition-all duration-400 flex flex-col"
                  >
                    <svg className="w-8 h-8 text-gold/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-neutral-300 text-sm leading-relaxed flex-1">
                      {review.body}
                    </p>
                    {starRow(review.name)}
                    <div className="flex items-center gap-3 mt-5 pt-5 border-t border-white/[0.06]">
                      <div
                        className="w-11 h-11 rounded-full flex items-center justify-center text-white text-sm font-bold"
                        style={{ background: `linear-gradient(135deg, ${colors[0]}, ${colors[1]})` }}
                      >
                        {review.initials}
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">{review.name}</p>
                        <p className="text-neutral-500 text-xs">{review.username}</p>
                      </div>
                    </div>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <div className="bg-[var(--bg-card)] border border-gold/20 rounded-3xl p-10 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to be our next success story?
              </h2>
              <p className="text-neutral-400 max-w-xl mx-auto mb-8">
                Let&apos;s build software that moves your business forward.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gold text-navy px-8 py-3.5 rounded-lg font-semibold text-sm hover:bg-gold/90 transition-colors duration-300"
                >
                  Start a Project
                </Link>
                <Link
                  to="/projects"
                  className="border border-gold/30 text-gold px-8 py-3.5 rounded-lg font-semibold text-sm hover:bg-gold/10 transition-colors duration-300"
                >
                  View Our Work
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
