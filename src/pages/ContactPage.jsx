import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import ScrollReveal from "../components/ScrollReveal";
import Seo from "../components/Seo";
import AvailabilityBadge from "../components/AvailabilityBadge";
import { mySocials } from "../constants";

const contactChannels = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: "Email",
    value: "dattechgee@gmail.com",
    href: "mailto:dattechgee@gmail.com",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    label: "WhatsApp",
    value: "0810 309 3734",
    href: "https://wa.me/2348103093734?text=Hello%20Isaac%2C%20I%27d%20like%20to%20discuss%20a%20project.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    label: "LinkedIn",
    value: "linkedin.com/in/dattechgee",
    href: "https://www.linkedin.com/in/dattechgee/",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
    label: "GitHub",
    value: "github.com/dattechgee",
    href: "https://github.com/dattechgee",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: "Location",
    value: "Abuja, Nigeria (Remote Worldwide)",
    href: null,
  },
];

const faqs = [
  {
    question: "What technologies do you work with?",
    answer: "Laravel, React, React Native, Node.js, MySQL, Tailwind CSS, and more.",
  },
  {
    question: "What is your typical project timeline?",
    answer: "Depending on scope, 2-12 weeks. Simple websites: 2-3 weeks. Complex systems: 6-12 weeks.",
  },
  {
    question: "Do you offer maintenance and support?",
    answer: "Yes, we offer ongoing maintenance, bug fixes, and feature additions after deployment.",
  },
  {
    question: "How do I get started?",
    answer: "Reach out via the form, WhatsApp, or email. We will discuss your needs, provide a quote, and begin.",
  },
  {
    question: "Do you work with clients outside Nigeria?",
    answer: "Yes. While DatTechGee Technologies is based in Abuja, Nigeria, we serve clients globally. Remote collaboration is our standard operating model, and we have delivered projects for clients across Africa, Europe, and North America.",
  },
  {
    question: "What is the typical project timeline?",
    answer: "Simple websites and landing pages take 2-3 weeks. Business management systems and full-stack applications typically take 4-8 weeks. Mobile apps with backend infrastructure take 6-12 weeks. We provide a detailed timeline after the discovery phase.",
  },
  {
    question: "Do you sign NDAs before starting work?",
    answer: "Absolutely. We understand the sensitivity of business information and are happy to sign Non-Disclosure Agreements before any project discussion. Your intellectual property and business data are treated with the utmost confidentiality.",
  },
  {
    question: "What happens after the project is delivered?",
    answer: "DatTechGee Technologies provides post-launch support including bug fixes, performance monitoring, feature additions, and system updates. We offer flexible maintenance plans � monthly, quarterly, or annual � to keep your system running at peak performance.",
  },
];

const projectTypes = ["Web App", "Mobile App", "Business System", "API Development", "Custom Website", "Other"];
const budgetRanges = ["Under \u20A6150k", "\u20A6150k - \u20A6300k", "\u20A6300k - \u20A6500k", "\u20A6500k - \u20A6750k", "\u20A6750k+"];
const timelines = ["ASAP", "1-2 weeks", "1 month", "2-3 months", "Flexible"];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budgetRange: "",
    timeline: "",
    projectSummary: "",
  });
  const [openFaq, setOpenFaq] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError(null);
    try {
      const emailjs = (await import("@emailjs/browser")).default;
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          project_type: formData.projectType,
          budget_range: formData.budgetRange,
          timeline: formData.timeline,
          message: formData.projectSummary,
          to_name: "Isaac Emmanuel",
          to_email: import.meta.env.VITE_EMAILJS_TO_EMAIL || "ei0413405@gmail.com",
        }
      );
      setSubmitted(true);
    } catch (err) {
      console.error("Email send failed:", err);
      setError("Failed to send message. Please try again or reach out via WhatsApp.");
    } finally {
      setSending(false);
    }
  };

  return (
    <main className="bg-[var(--bg-base)] min-h-screen">
      <Seo
        title="Contact | DatTechGee Technologies � Isaac Emmanuel"
        description="Contact Isaac Emmanuel at DatTechGee Technologies for web development, mobile apps, and custom software. WhatsApp 09112454166. Based in Abuja, Nigeria."
        path="/contact"
        image="/assets/logo.png"
        type="website"
      />
      {/* Page Header */}
      <section className="section-spacing pt-32 pb-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <ScrollReveal>
            <span className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-3 block">
              DatTechGee Technologies
            </span>
            <span className="text-gold/70 text-sm font-semibold tracking-widest uppercase mb-4 block">
              Contact
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get in Touch
            </h1>
            <div className="flex justify-center mb-6">
              <AvailabilityBadge />
            </div>
            <p className="text-neutral-500 max-w-2xl mx-auto text-lg">
              Have a project in mind? Let's build it. Reach out to Isaac and
              DatTechGee Technologies � freelancing, collaborations, and software
              development opportunities welcome.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="mt-10 max-w-3xl mx-auto">
              <div className="relative rounded-2xl overflow-hidden border border-white/[0.08]">
                <img src="/assets/softt.jpg" alt="DatTechGee Technologies � Contact us" className="w-full h-48 md:h-56 object-cover opacity-70" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-base)]/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center justify-between">
                  <div>
                    <p className="text-white text-sm font-semibold">Let's Build Something Great</p>
                    <p className="text-neutral-400 text-xs">Response within 2 business hours</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-medium">WhatsApp</span>
                    <span className="px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-medium">Email</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Channels */}
      <section className="section-spacing pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <span className="text-gold/60 text-xs font-semibold tracking-widest uppercase mb-4 block">
              Contact Channels
            </span>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {contactChannels.map((info, i) => (
              <ScrollReveal key={info.label} delay={i * 0.08}>
                {info.href ? (
                  <a
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="block bg-[var(--bg-card)] border border-white/[0.08] rounded-xl p-6 text-center hover:border-gold/25 hover:shadow-[0_8px_30px_rgba(0, 114, 255,0.06)] transition-all duration-400 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <p className="text-neutral-400 text-xs uppercase tracking-wider mb-1">
                      {info.label}
                    </p>
                    <p className="text-white font-medium text-sm">
                      {info.value}
                    </p>
                  </a>
                ) : (
                  <div className="bg-[var(--bg-card)] border border-white/[0.08] rounded-xl p-6 text-center">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold mx-auto mb-4">
                      {info.icon}
                    </div>
                    <p className="text-neutral-400 text-xs uppercase tracking-wider mb-1">
                      {info.label}
                    </p>
                    <p className="text-white font-medium text-sm">
                      {info.value}
                    </p>
                  </div>
                )}
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Action Bar */}
      <section className="pb-12">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="bg-[var(--bg-card)] border border-white/[0.08] rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <p className="text-white font-semibold mb-1">
                  Prefer a quick conversation?
                </p>
                <p className="text-neutral-500 text-sm">
                  Reach us directly on WhatsApp or LinkedIn. We respond within 2 business hours.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://wa.me/2348103093734?text=Hello%20Isaac%2C%20I%27d%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#20ba5a] transition-colors duration-300"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
                <a
                  href="https://www.linkedin.com/in/dattechgee/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#0A66C2] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#0958a8] transition-colors duration-300"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Response Time Commitment */}
      <section className="pb-12">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-3 py-4 px-6 bg-gold/5 border border-gold/10 rounded-xl">
              <svg className="w-5 h-5 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-neutral-600 text-sm text-center">
                All inquiries receive a response within 24 business hours. Emergency support available for existing clients.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Two Column Layout */}
      <section className="section-spacing">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Sticky */}
            <ScrollReveal direction="left">
              <div className="lg:sticky lg:top-32 lg:self-start">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Request a Quote
                </h2>
                <p className="text-neutral-500 mb-8 leading-relaxed">
                  Tell us about your project and DatTechGee Technologies will get back to you within 24 hours with a detailed proposal, timeline, and quote.
                </p>

                {/* FAQ Accordion */}
                <div className="space-y-3">
                  {faqs.map((faq, i) => (
                    <div
                      key={i}
                      className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                        openFaq === i
                          ? "border-gold/30 border-t-gold bg-[var(--bg-card)]"
                          : "border-white/[0.08] bg-[var(--bg-card)]"
                      }`}
                    >
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="w-full flex items-center justify-between px-6 py-4 text-left"
                      >
                        <span className="text-white font-medium text-sm pr-4">
                          {faq.question}
                        </span>
                        <motion.span
                          animate={{ rotate: openFaq === i ? 45 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="text-gold text-xl flex-shrink-0"
                        >
                          +
                        </motion.span>
                      </button>
                      <AnimatePresence>
                        {openFaq === i && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          >
                            <div className="px-6 pb-4">
                              <p className="text-neutral-500 text-sm leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Right Column - Form */}
            <ScrollReveal direction="right">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-[var(--bg-card)] border border-gold/30 rounded-xl p-12 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-neutral-500 mb-6">
                      Thanks for reaching out. DatTechGee Technologies will review your project details and get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          projectType: "",
                          budgetRange: "",
                          timeline: "",
                          projectSummary: "",
                        });
                      }}
                      className="text-gold font-medium hover:text-gold/80 transition-colors"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="bg-[var(--bg-card)] border border-white/[0.08] rounded-xl p-8 space-y-5"
                  >
                    {error && (
                      <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 mb-6">
                        <p className="text-red-400 text-sm">{error}</p>
                      </div>
                    )}

                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:border-gold/50 focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:border-gold/50 focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Project Type
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:border-gold/50 focus:ring-2 focus:ring-gold/20 outline-none transition-all appearance-none"
                      >
                        <option value="" disabled className="bg-[var(--bg-card)]">
                          Select project type
                        </option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type} className="bg-[var(--bg-card)]">
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">
                          Budget Range
                        </label>
                        <select
                          name="budgetRange"
                          value={formData.budgetRange}
                          onChange={handleChange}
                          required
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:border-gold/50 focus:ring-2 focus:ring-gold/20 outline-none transition-all appearance-none"
                        >
                          <option value="" disabled className="bg-[var(--bg-card)]">
                            Select budget
                          </option>
                          {budgetRanges.map((range) => (
                            <option key={range} value={range} className="bg-[var(--bg-card)]">
                              {range}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-white mb-2">
                          Timeline
                        </label>
                        <select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          required
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:border-gold/50 focus:ring-2 focus:ring-gold/20 outline-none transition-all appearance-none"
                        >
                          <option value="" disabled className="bg-[var(--bg-card)]">
                            Select timeline
                          </option>
                          {timelines.map((t) => (
                            <option key={t} value={t} className="bg-[var(--bg-card)]">
                              {t}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Project Summary
                      </label>
                      <textarea
                        name="projectSummary"
                        value={formData.projectSummary}
                        onChange={handleChange}
                        required
                        placeholder="Tell us about your project, goals, and any specific requirements..."
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:border-gold/50 focus:ring-2 focus:ring-gold/20 outline-none transition-all h-32 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={sending}
                      className="w-full py-3 bg-gold text-navy font-semibold rounded-xl hover:bg-gold/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {sending ? (
                        <>
                          <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="section-spacing pt-12 pb-0">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-4">
              {mySocials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-[var(--bg-card)] border border-white/[0.08] flex items-center justify-center text-neutral-400 hover:text-gold hover:border-gold/30 transition-all duration-300"
                >
                  <img src={social.icon} alt={social.name} className="w-5 h-5" />
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-spacing pt-12 pb-32">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="text-neutral-400 text-sm mb-2">
              dattechgee@gmail.com &middot; 0810 309 3734 &middot; 0911 245 4166
            </p>
            <p className="text-neutral-400 text-xs">
              Selective engagements. Disciplined execution. Measurable outcomes.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
