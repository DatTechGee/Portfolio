import { motion, useScroll, useTransform } from "motion/react";
import { Link } from "react-router-dom";
import { Particles } from "../components/Particles";
import { FlipWords } from "../components/FlipWords";
import ScrollReveal from "../components/ScrollReveal";
import { reviews, portfolioStats } from "../constants";

const partnerNames = [
  "Scholars Nudge",
  "Payroll System",
  "Student Filing",
  "Real Estate",
  "GPA Portal",
  "Climate Website",
];

const processSteps = [
  {
    num: "01",
    title: "Discovery",
    description:
      "Deep-dive into your business goals, user needs, and technical requirements to define a clear roadmap.",
  },
  {
    num: "02",
    title: "Design",
    description:
      "Craft intuitive wireframes and modern UI designs focused on usability, brand alignment, and conversion.",
  },
  {
    num: "03",
    title: "Develop",
    description:
      "Build robust, scalable solutions with clean architecture, iterative sprints, and transparent progress updates.",
  },
  {
    num: "04",
    title: "Deploy",
    description:
      "Launch your product with optimized performance, thorough testing, and ongoing support for seamless operations.",
  },
];

const capabilities = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: "Full-Stack Web Applications",
    description:
      "End-to-end web platforms with React frontends, Laravel/Node.js backends, authentication, dashboards, and reporting — built for scale.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    title: "Mobile App Development",
    description:
      "Cross-platform Android/iOS apps with React Native and Expo — GPS tracking, push notifications, biometric auth, and offline capabilities.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
      </svg>
    ),
    title: "Business Management Systems",
    description:
      "Custom ERP, CRM, payroll, inventory, and student management systems tailored to your organization's exact operational workflow.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
    title: "API Development & Integration",
    description:
      "Secure RESTful APIs with token authentication, third-party integrations, and seamless data flow between systems and platforms.",
  },
];

const techBadges = [
  { name: "React", position: "top-0 -left-16 md:-left-24" },
  { name: ".NET", position: "bottom-8 -left-20 md:-left-28" },
  { name: "Node.js", position: "top-1/4 -right-16 md:-right-24" },
];

const avatarColors = [
  ["#5c33cc", "#7a57db"],
  ["#33c2cc", "#57db96"],
  ["#ca2f8c", "#ea4884"],
  ["#cc6033", "#d6995c"],
  ["#57db96", "#33c2cc"],
  ["#7a57db", "#5c33cc"],
  ["#ea4884", "#ca2f8c"],
  ["#d6995c", "#cc6033"],
];

const getAvatarColors = (idx) => avatarColors[idx % avatarColors.length];

const HomePage = () => {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -80]);

  return (
    <div className="min-h-screen bg-[#0a1128]">
      {/* ===== HERO SECTION ===== */}
      <section className="section-spacing relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1128] to-[#060d1f]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />
        <Particles
          className="absolute inset-0"
          quantity={80}
          color="#d4a843"
          size={0.3}
          staticity={30}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="flex flex-col gap-6 text-center lg:text-left">
              <ScrollReveal direction="up" delay={0.1}>
                <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-2 w-fit mx-auto lg:mx-0">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gold" />
                  </span>
                  <span className="text-gold text-sm font-medium">
                    Available for new projects
                  </span>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.2}>
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                  <span className="text-white">Isaac</span>{" "}
                  <span className="bg-gradient-to-r from-white via-gold to-gold bg-clip-text text-transparent">
                    Emmanuel
                  </span>
                </h1>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.3}>
                <p className="text-lg sm:text-xl text-neutral-400 font-medium">
                  Founder &amp; Lead Developer at{" "}
                  <span className="text-gold">DatTechGee</span>
                </p>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.35}>
                <p className="text-base text-gold font-semibold tracking-wide">
                  Software. Innovation. Impact.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.4}>
                <p className="text-sm sm:text-base text-neutral-500 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                  We design and build the digital infrastructure businesses need
                  to scale — custom software, mobile apps, and operational
                  systems built for execution.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.45}>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-2">
                  <Link
                    to="/projects"
                    className="bg-gold text-navy px-7 py-3.5 rounded-lg font-semibold text-sm hover:bg-gold/90 transition-colors duration-300 inline-flex items-center gap-2"
                  >
                    View My Work
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                  <a
                    href="/Isaac_Emmanuel_CV.pdf"
                    download
                    className="border border-gold/30 text-gold px-7 py-3.5 rounded-lg font-semibold text-sm hover:bg-gold/10 transition-colors duration-300 inline-flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    Download CV
                  </a>
                  <Link
                    to="/contact"
                    className="border border-gold/30 text-gold px-7 py-3.5 rounded-lg font-semibold text-sm hover:bg-gold/10 transition-colors duration-300 inline-flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    Get In Touch
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Right - Profile Image */}
            <ScrollReveal direction="right" delay={0.3} className="relative hidden lg:flex justify-center">
              <motion.div style={{ y: heroY }} className="relative">
                {/* Glow ring */}
                <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-gold/30 via-gold/10 to-gold/30 blur-2xl opacity-60" />
                <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-gold/40 to-gold/10" />
                <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-gold/30">
                  <img
                    src="/assets/PORTFILO.png"
                    alt="Isaac Emmanuel"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating tech badges */}
                {techBadges.map((badge, i) => (
                  <motion.div
                    key={badge.name}
                    className={`absolute ${badge.position} bg-[#0f1a36] border border-white/[0.08] rounded-xl px-4 py-2.5 shadow-2xl`}
                    animate={{
                      y: [0, -8, 0],
                    }}
                    transition={{
                      duration: 3 + i * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <span className="text-gold text-xs font-semibold tracking-wide">
                      {badge.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </ScrollReveal>
          </div>

          {/* Mobile profile image */}
          <ScrollReveal direction="up" delay={0.5} className="lg:hidden flex justify-center mt-10">
            <div className="relative">
              <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-gold/20 via-gold/5 to-gold/20 blur-xl opacity-50" />
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-2 border-gold/30">
                <img
                  src="/assets/PORTFILO.png"
                  alt="Isaac Emmanuel"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2.5 bg-gold/60 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="section-spacing relative py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-[#0f1a36] border border-white/[0.06] rounded-2xl p-8 md:p-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                {[
                  {
                    value: `${portfolioStats.yearsExperience}+`,
                    label: "Years Experience",
                  },
                  {
                    value: `${portfolioStats.projectsDelivered}+`,
                    label: "Projects Delivered",
                  },
                  {
                    value: `${portfolioStats.happyClients}+`,
                    label: "Happy Clients",
                  },
                  {
                    value: `${portfolioStats.clientSatisfaction}%`,
                    label: "Client Satisfaction",
                  },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                  >
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gold block">
                      {stat.value}
                    </span>
                    <span className="text-neutral-400 text-sm mt-2 block">
                      {stat.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== TRUSTED PARTNERS / CLIENT LOGOS MARQUEE ===== */}
      <section className="section-spacing relative py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-10">
          <ScrollReveal>
            <p className="text-center text-neutral-500 text-sm uppercase tracking-[0.2em] font-medium">
              Trusted By Organizations Across Industries
            </p>
          </ScrollReveal>
        </div>
        <ScrollReveal>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a1128] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a1128] to-transparent z-10 pointer-events-none" />
            <div className="flex overflow-hidden">
              <div className="flex items-center gap-12 animate-marquee whitespace-nowrap">
                {[...partnerNames, ...partnerNames, ...partnerNames, ...partnerNames].map(
                  (name, i) => (
                    <div
                      key={`${name}-${i}`}
                      className="flex items-center gap-3 px-6 py-3 bg-[#0f1a36]/60 border border-white/[0.04] rounded-xl shrink-0"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center">
                        <span className="text-gold text-xs font-bold">
                          {name.charAt(0)}
                        </span>
                      </div>
                      <span className="text-neutral-400 text-sm font-medium whitespace-nowrap">
                        {name}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ===== WHAT I DO — CORE CAPABILITIES ===== */}
      <section className="section-spacing relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1128] via-[#0c1429] to-[#0a1128]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal>
              <p className="text-gold text-sm uppercase tracking-[0.2em] font-semibold mb-4">
                Core Capabilities
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold dark:text-white text-neutral-800 mb-4">
                What I{" "}
                <span className="bg-gradient-to-r from-white to-gold bg-clip-text text-transparent">
                  Do
                </span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-neutral-400 max-w-2xl mx-auto text-base">
                Building{" "}
                <FlipWords words={["Secure", "Modern", "Scalable"]} className="text-gold font-semibold" />{" "}
                digital solutions that power growth and efficiency.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, i) => (
              <ScrollReveal key={cap.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-[#0f1a36] border border-white/[0.06] rounded-2xl p-6 h-full flex flex-col hover:border-gold/20 transition-colors duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold mb-5 group-hover:bg-gold/15 transition-colors duration-300">
                    {cap.icon}
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-3">
                    {cap.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed flex-1">
                    {cap.description}
                  </p>
                  <div className="mt-5 pt-4 border-t border-white/[0.04]">
                    <span className="text-gold/60 text-[10px] font-bold tracking-[0.3em] uppercase">
                      DatTechGee
                    </span>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DEVELOPMENT PROCESS ===== */}
      <section className="section-spacing relative py-24 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal>
              <p className="text-gold text-sm uppercase tracking-[0.2em] font-semibold mb-4">
                How We Work
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold dark:text-white text-neutral-800">
                Development{" "}
                <span className="bg-gradient-to-r from-white to-gold bg-clip-text text-transparent">
                  Process
                </span>
              </h2>
            </ScrollReveal>
          </div>

          <div className="relative">
            {/* Connection line - desktop */}
            <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-[2px]">
              <div className="w-full h-full bg-gradient-to-r from-gold/0 via-gold/40 to-gold/0" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
              {processSteps.map((step, i) => (
                <ScrollReveal key={step.num} delay={i * 0.12}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="relative flex flex-col items-center text-center group"
                  >
                    {/* Step number circle */}
                    <div className="relative z-10 mb-6">
                      <div className="w-14 h-14 rounded-full bg-[#0f1a36] border-2 border-gold/30 flex items-center justify-center group-hover:border-gold/60 group-hover:bg-gold/10 transition-all duration-300">
                        <span className="text-gold font-bold text-lg">
                          {step.num}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-white font-semibold text-lg mb-3">
                      {step.title}
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed max-w-[260px]">
                      {step.description}
                    </p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section-spacing relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1128] via-[#0c1429] to-[#0a1128]" />
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
            <div className="text-center">
              <ScrollReveal>
                <p className="text-gold text-sm uppercase tracking-[0.2em] font-semibold mb-4">
                  Testimonials
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold dark:text-white text-neutral-800">
                  What Clients{" "}
                  <span className="bg-gradient-to-r from-white to-gold bg-clip-text text-transparent">
                    Say
                  </span>
                </h2>
              </ScrollReveal>
            </div>
          </div>

          {/* Testimonials marquee row 1 */}
          <div className="relative mb-4">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a1128] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a1128] to-transparent z-10 pointer-events-none" />
            <div className="flex overflow-hidden">
              <div className="flex gap-5 animate-marquee whitespace-nowrap">
                {[...reviews, ...reviews, ...reviews].map((review, i) => {
                  const colors = getAvatarColors(review.colorIdx);
                  return (
                    <div
                      key={`${review.name}-${i}`}
                      className="shrink-0 w-[360px] bg-[#0f1a36] border border-white/[0.06] rounded-2xl p-6 whitespace-normal hover:border-gold/20 transition-colors duration-300"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold"
                          style={{
                            background: `linear-gradient(135deg, ${colors[0]}, ${colors[1]})`,
                          }}
                        >
                          {review.initials}
                        </div>
                        <div>
                          <p className="text-white text-sm font-medium">
                            {review.name}
                          </p>
                          <p className="text-neutral-500 text-xs">
                            {review.username}
                          </p>
                        </div>
                      </div>
                      <p className="text-neutral-400 text-sm leading-relaxed">
                        {review.body}
                      </p>
                      <div className="flex gap-0.5 mt-4">
                        {[...Array(5)].map((_, si) => (
                          <svg
                            key={si}
                            className="w-4 h-4 text-gold"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Testimonials marquee row 2 (reversed) */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a1128] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a1128] to-transparent z-10 pointer-events-none" />
            <div className="flex overflow-hidden">
              <div className="flex gap-5 animate-marquee [animation-direction:reverse] whitespace-nowrap">
                {[...reviews, ...reviews, ...reviews]
                  .reverse()
                  .map((review, i) => {
                    const colors = getAvatarColors(review.colorIdx);
                    return (
                      <div
                        key={`${review.name}-rev-${i}`}
                        className="shrink-0 w-[360px] bg-[#0f1a36] border border-white/[0.06] rounded-2xl p-6 whitespace-normal hover:border-gold/20 transition-colors duration-300"
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div
                            className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold"
                            style={{
                              background: `linear-gradient(135deg, ${colors[0]}, ${colors[1]})`,
                            }}
                          >
                            {review.initials}
                          </div>
                          <div>
                            <p className="text-white text-sm font-medium">
                              {review.name}
                            </p>
                            <p className="text-neutral-500 text-xs">
                              {review.username}
                            </p>
                          </div>
                        </div>
                        <p className="text-neutral-400 text-sm leading-relaxed">
                          {review.body}
                        </p>
                        <div className="flex gap-0.5 mt-4">
                          {[...Array(5)].map((_, si) => (
                            <svg
                              key={si}
                              className="w-4 h-4 text-gold"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="section-spacing relative py-24">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative bg-[#0f1a36] border border-white/[0.06] rounded-3xl p-10 md:p-16 text-center overflow-hidden">
              {/* Ambient glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

              <p className="text-gold text-sm uppercase tracking-[0.2em] font-semibold mb-6 relative z-10">
                Let&apos;s Collaborate
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold dark:text-white text-neutral-800 mb-6 relative z-10 max-w-3xl mx-auto leading-tight">
                Ready to build something{" "}
                <span className="bg-gradient-to-r from-gold to-gold/70 bg-clip-text text-transparent">
                  great
                </span>
                ?
              </h2>
              <p className="text-neutral-400 max-w-xl mx-auto mb-10 text-base relative z-10">
                Let&apos;s turn your vision into a high-performance digital product.
                From concept to deployment, we&apos;ve got you covered.
              </p>
              <div className="flex flex-wrap gap-4 justify-center relative z-10">
                <Link
                  to="/contact"
                  className="bg-gold text-navy px-8 py-4 rounded-lg font-semibold text-sm hover:bg-gold/90 transition-colors duration-300 inline-flex items-center gap-2"
                >
                  Start a Project
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                <Link
                  to="/projects"
                  className="border border-gold/30 text-gold px-8 py-4 rounded-lg font-semibold text-sm hover:bg-gold/10 transition-colors duration-300"
                >
                  View Projects
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
