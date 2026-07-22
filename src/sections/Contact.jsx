import { useState, useMemo } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "motion/react";
import Alert from "../components/Alert";
import ScrollReveal from "../components/ScrollReveal";
import { Particles } from "../components/Particles";
import { trackEvent } from "../utils/analytics";
import { useTheme } from "../context/ThemeContext";
import { mySocials } from "../constants";

const projectTypes = [
  { id: "web", label: "Web App", icon: "🌐" },
  { id: "mobile", label: "Mobile App", icon: "📱" },
  { id: "business", label: "Business System", icon: "⚙️" },
  { id: "api", label: "API / Backend", icon: "🔗" },
  { id: "other", label: "Other", icon: "💡" },
];

const faqData = [
  {
    q: "How long does a typical project take?",
    a: "It depends on scope. A landing page takes 1–2 weeks. A full-stack web app takes 4–8 weeks. I'll give you a clear timeline after our first conversation.",
  },
  {
    q: "Do you work with clients outside Nigeria?",
    a: "Absolutely. I've worked with clients across Africa and beyond. Remote collaboration is my default — Slack, email, Zoom, whatever works for you.",
  },
  {
    q: "What's your pricing structure?",
    a: "I offer both fixed-price and hourly billing depending on the project. Small tasks start from ₦150K. I'll provide a detailed quote after understanding your requirements.",
  },
  {
    q: "Do you provide maintenance after launch?",
    a: "Yes. I offer ongoing support and maintenance packages to keep your application running smoothly — bug fixes, updates, feature additions, and hosting management.",
  },
];

const socialIcons = {
  WhatsApp: (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  ),
  Linkedin: (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  Instagram: (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  ),
};

const socialColors = {
  WhatsApp: "from-green-500/20 to-green-600/20 text-green-500",
  Linkedin: "from-blue-500/20 to-blue-600/20 text-blue-500",
  Instagram: "from-pink-500/20 to-purple-500/20 text-pink-500",
};

const Contact = () => {
  const { theme } = useTheme();
  const particleColor = useMemo(() => (theme === "light" ? "#5c33cc" : "#ffffff"), [theme]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleProjectType = (type) => {
    setFormData((prev) => ({
      ...prev,
      projectType: prev.projectType === type ? "" : type,
    }));
    trackEvent("contact_project_type_select", { type });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("dattechgee@gmail.com");
    setCopiedEmail(true);
    trackEvent("contact_email_copy");
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    trackEvent("contact_submit_attempt", { section: "contact", projectType: formData.projectType });

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_ck4r5lm";
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_auzpx2n";
      const userId = import.meta.env.VITE_EMAILJS_USER_ID || undefined;
      const toEmail = import.meta.env.VITE_EMAILJS_TO_EMAIL || "dattechgee@gmail.com";
      const toName = import.meta.env.VITE_EMAILJS_TO_NAME || "Isaac Emmanuel";

      const projectLabel = projectTypes.find((p) => p.id === formData.projectType)?.label || "Not specified";

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        to_name: toName,
        to_email: toEmail,
        project_type: projectLabel,
        message: formData.message,
      };

      await emailjs.send(serviceId, templateId, templateParams, userId);
      setIsLoading(false);
      setFormData({ name: "", email: "", projectType: "", message: "" });
      trackEvent("contact_submit_success", { section: "contact" });
      showAlertMessage("success", "Message sent successfully! I'll get back to you within 24 hours.");
    } catch (error) {
      setIsLoading(false);
      let detail = "Something went wrong. Please try again or email me directly.";
      try {
        if (error?.text) detail = error.text;
        else if (error?.message) detail = error.message;
      } catch { /* ignore */ }
      trackEvent("contact_submit_error", { section: "contact", detail });
      showAlertMessage("danger", detail);
    }
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="relative flex items-center c-space section-spacing">
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={particleColor}
        refresh
      />

      {showAlert && <Alert type={alertType} text={alertMessage} />}

      <div className="mx-auto w-full max-w-6xl">
        {/* Header */}
        <ScrollReveal distance={30}>
          <div className="mb-12 flex flex-col items-center text-center">
            <p className="section-kicker">Get In Touch</p>
            <h2 id="contact-heading" className="section-title">Let&apos;s Work Together</h2>
            <p className="section-copy">
              Have a project in mind or just want to chat? I&apos;d love to hear from you.
            </p>
          </div>
        </ScrollReveal>

        {/* Top Row: Status + Quick Connect */}
        <ScrollReveal distance={20} delay={0.1}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 glass-card p-4 sm:p-5">
            <div className="flex items-center gap-3">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-mint" />
              </div>
              <div>
                <p className="text-sm font-semibold dark:text-white text-neutral-800">Available for work</p>
                <p className="text-xs dark:text-neutral-400 text-neutral-500">Usually responds within 24 hours</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-lg dark:bg-white/[0.05] bg-black/[0.04] dark:border-white/[0.08] border-black/[0.08] dark:text-neutral-300 text-neutral-600 dark:hover:text-white hover:text-primary transition-all duration-200 cursor-pointer"
              >
                {copiedEmail ? (
                  <>
                    <svg className="w-3.5 h-3.5 text-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Copied!
                  </>
                ) : (
                  <>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    Copy Email
                  </>
                )}
              </button>

              {mySocials.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  className={`inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg bg-gradient-to-br border dark:border-white/[0.08] border-black/[0.08] dark:hover:border-white/20 hover:border-black/20 transition-all duration-200 ${socialColors[social.name] || "dark:text-neutral-300 text-neutral-600"}`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {socialIcons[social.name] || <img src={social.icon} className="w-4 h-4" alt="" />}
                  <span className="hidden sm:inline">{social.name}</span>
                </motion.a>
              ))}

              <motion.a
                href="mailto:dattechgee@gmail.com"
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg bg-gradient-to-br from-royal/20 to-lavender/20 text-lavender dark:border-white/[0.08] border-black/[0.08] dark:hover:border-royal/30 hover:border-royal/20 transition-all duration-200"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email
              </motion.a>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Left Column: Info + FAQ */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Contact Info */}
            <ScrollReveal direction="left" distance={30} duration={0.6}>
              <div className="glass-card p-5 md:p-6">
                <h3 className="text-sm font-semibold dark:text-white text-neutral-800 mb-4">Contact Info</h3>
                <div className="flex flex-col gap-4">
                  {[
                    {
                      icon: (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      ),
                      label: "Email",
                      value: "dattechgee@gmail.com",
                      action: copyEmail,
                      actionLabel: copiedEmail ? "Copied!" : "Copy",
                    },
                    {
                      icon: (
                        <>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </>
                      ),
                      label: "Location",
                      value: "Abuja, Nigeria",
                    },
                    {
                      icon: (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      ),
                      label: "Working Hours",
                      value: "Mon — Sat, 9AM — 6PM WAT",
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-royal/15 to-lavender/15 dark:border-white/[0.06] border-black/[0.06] flex items-center justify-center text-lavender shrink-0 mt-0.5">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          {item.icon}
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[11px] dark:text-neutral-500 text-neutral-400 uppercase tracking-wider">{item.label}</p>
                        <p className="text-sm dark:text-neutral-300 text-neutral-600 truncate">{item.value}</p>
                      </div>
                      {item.action && (
                        <button
                          onClick={item.action}
                          className="text-[11px] font-medium dark:text-lavender text-royal hover:underline cursor-pointer shrink-0"
                        >
                          {item.actionLabel}
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* FAQ */}
            <ScrollReveal direction="left" distance={30} delay={0.1} duration={0.6}>
              <div className="glass-card p-5 md:p-6">
                <h3 className="text-sm font-semibold dark:text-white text-neutral-800 mb-4">Frequently Asked</h3>
                <div className="flex flex-col gap-1">
                  {faqData.map((faq, i) => (
                    <div key={i} className="border-b dark:border-white/[0.05] border-black/[0.05] last:border-0">
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="flex items-center justify-between w-full py-3 text-left text-sm dark:text-neutral-300 text-neutral-600 hover:text-royal dark:hover:text-lavender transition-colors cursor-pointer"
                      >
                        <span className="pr-4 font-medium">{faq.q}</span>
                        <motion.svg
                          className="w-4 h-4 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          animate={{ rotate: openFaq === i ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </motion.svg>
                      </button>
                      <AnimatePresence>
                        {openFaq === i && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <p className="pb-3 text-xs dark:text-neutral-400 text-neutral-500 leading-relaxed">{faq.a}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Form */}
          <ScrollReveal direction="right" distance={30} delay={0.15} duration={0.7}>
            <div className="lg:col-span-3 glass-card p-6 md:p-8">
              <form className="w-full" onSubmit={handleSubmit}>
                {/* Project Type Chips */}
                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <label className="field-label dark:text-neutral-300 text-neutral-600 mb-2 block">
                    What do you need?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {projectTypes.map((type) => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => handleProjectType(type.id)}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border transition-all duration-200 cursor-pointer ${
                          formData.projectType === type.id
                            ? "bg-royal/15 border-royal/30 text-royal dark:text-lavender"
                            : "dark:bg-white/[0.03] bg-black/[0.03] dark:border-white/[0.06] border-black/[0.06] dark:text-neutral-400 text-neutral-500 dark:hover:bg-white/[0.06] hover:bg-black/[0.06]"
                        }`}
                      >
                        <span>{type.icon}</span>
                        {type.label}
                      </button>
                    ))}
                  </div>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <label htmlFor="name" className="field-label dark:text-neutral-300 text-neutral-600">
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="field-input"
                      placeholder="John Doe"
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.35, duration: 0.5 }}
                  >
                    <label htmlFor="email" className="field-label dark:text-neutral-300 text-neutral-600">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="field-input"
                      placeholder="john@example.com"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </motion.div>
                </div>
                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <label htmlFor="message" className="field-label dark:text-neutral-300 text-neutral-600">
                    Tell me about your project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className="field-input resize-none"
                    placeholder="Describe your project, goals, timeline, and budget..."
                    autoComplete="off"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </motion.div>
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3.5 text-sm font-medium text-center rounded-xl cursor-pointer bg-gradient-to-r from-royal to-lavender text-white hover:opacity-90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-royal/25"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      Send Message
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </span>
                  )}
                </motion.button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
