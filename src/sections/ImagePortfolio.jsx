import { motion } from "motion/react";
import ScrollReveal from "../components/ScrollReveal";

const portfolioImages = [
  {
    src: "/assets/PORTFILO.png",
    alt: "DatTechGee Portfolio Branding",
    span: "col-span-2 row-span-2",
    gradient: "from-royal/30 to-lavender/30",
  },
  {
    src: "/assets/projects/estate.JPG",
    alt: "Real Estate Website",
    span: "col-span-1 row-span-1",
    gradient: "from-orange-600/30 to-rose-600/30",
  },
  {
    src: "/assets/projects/portfolio.JPG",
    alt: "Portfolio Website",
    span: "col-span-1 row-span-1",
    gradient: "from-violet-600/30 to-purple-600/30",
  },
  {
    src: "/assets/projects/weather.JPG",
    alt: "Climate Website",
    span: "col-span-1 row-span-2",
    gradient: "from-cyan-600/30 to-blue-600/30",
  },
  {
    src: "/assets/projects/nike-landing-page.JPG",
    alt: "Nike Landing Page",
    span: "col-span-1 row-span-1",
    gradient: "from-rose-600/30 to-pink-600/30",
  },
  {
    src: "/assets/coding-pov.png",
    alt: "Coding POV",
    span: "col-span-1 row-span-1",
    gradient: "from-emerald-600/30 to-teal-600/30",
  },
];

const stats = [
  { label: "Projects Completed", value: "8+" },
  { label: "Years Experience", value: "4+" },
  { label: "Happy Clients", value: "20+" },
  { label: "Technologies", value: "12+" },
];

const ImagePortfolio = () => {
  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-heading"
      className="relative c-space section-spacing"
    >
      <ScrollReveal distance={30}>
        <div className="mb-12 flex flex-col items-center text-center">
          <p className="section-kicker">Visual Work</p>
          <h2 id="portfolio-heading" className="section-title">
            Image Portfolio
          </h2>
          <p className="section-copy">
            A visual showcase of the brands, projects, and work I&apos;ve brought to life.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal distance={0} duration={1}>
        <div className="section-divider w-full mb-12" />
      </ScrollReveal>

      {/* Name + Details Card */}
      <ScrollReveal distance={20}>
        <div className="glass-card p-6 md:p-8 mb-10 flex flex-col md:flex-row items-center gap-8">
          {/* Profile image / logo */}
          <div className="shrink-0">
            <div className="w-28 h-28 md:w-36 md:h-36 rounded-2xl overflow-hidden ring-2 ring-royal/20 shadow-xl shadow-royal/10">
              <img
                src="/assets/logo.png"
                alt="DatTechGee"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Details */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-royal mb-1">
              DatTechGee
            </p>
            <h3 className="text-2xl md:text-3xl font-bold dark:text-white text-neutral-800">
              Isaac Emmanuel
            </h3>
            <p className="text-sm dark:text-neutral-400 text-neutral-500 mt-2 max-w-lg leading-relaxed">
              Full Stack Software Developer building secure, scalable, and
              intelligent web and mobile applications using Laravel, React, AI,
              and blockchain technologies.
            </p>

            {/* Quick info pills */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-4">
              {[
                { icon: "📍", text: "Abuja, Nigeria" },
                { icon: "💼", text: "Full Stack Developer" },
                { icon: "🎓", text: "Self-Employed" },
                { icon: "🌐", text: "dattechgee.vercel.app" },
              ].map((item) => (
                <span
                  key={item.text}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg dark:bg-white/[0.05] bg-black/[0.04] dark:text-neutral-300 text-neutral-600 dark:border-white/[0.06] border-black/[0.06]"
                >
                  <span>{item.icon}</span>
                  {item.text}
                </span>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 shrink-0">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center px-4 py-3 rounded-xl dark:bg-white/[0.03] bg-black/[0.02]"
              >
                <p className="text-2xl font-bold gradient-text-hero">
                  {stat.value}
                </p>
                <p className="text-[10px] font-medium uppercase tracking-wider dark:text-neutral-500 text-neutral-400 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px]">
        {portfolioImages.map((img, i) => (
          <motion.div
            key={img.alt}
            className={`relative group overflow-hidden rounded-2xl ${img.span} border dark:border-white/[0.06] border-black/[0.06]`}
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.6,
              delay: i * 0.08,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />

            {/* Gradient overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-t ${img.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
            />

            {/* Dark overlay on hover */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Label on hover */}
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <p className="text-sm font-semibold text-white">{img.alt}</p>
              <p className="text-xs text-white/60 mt-0.5">DatTechGee</p>
            </div>

            {/* Corner accent */}
            <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ImagePortfolio;
