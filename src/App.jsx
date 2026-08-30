import { lazy, Suspense, useCallback, useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import Navbar from "./sections/Navbar";
import Footer from "./sections/Footer";
import Preloader from "./components/Preloader";
import ScrollButtons from "./components/ScrollButtons";
import ScrollProgress from "./components/ScrollProgress";
import WhatsAppButton from "./components/WhatsAppButton";
import ErrorBoundary from "./components/ErrorBoundary";
import CommandPalette from "./components/CommandPalette";

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const SolutionsPage = lazy(() => import("./pages/SolutionsPage"));
const InsightsPage = lazy(() => import("./pages/InsightsPage"));
const ArticlePage = lazy(() => import("./pages/ArticlePage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const TestimonialsPage = lazy(() => import("./pages/TestimonialsPage"));
const ProjectPage = lazy(() => import("./pages/ProjectPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -12 }}
    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

const App = () => {
  const [showPreloader, setShowPreloader] = useState(true);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const location = useLocation();

  const handlePreloaderComplete = useCallback(() => {
    setShowPreloader(false);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <ErrorBoundary>
        <div className="relative min-h-screen overflow-x-hidden">
          <div className="ambient-bg" />
          {showPreloader && <Preloader onComplete={handlePreloaderComplete} />}
          <div
            className={`transition-opacity duration-700 ${
              showPreloader ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            <Navbar />
            <ScrollProgress />
            <main id="main-content">
              <Suspense
                fallback={
                  <div className="flex min-h-[60vh] items-center justify-center">
                    <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
                  </div>
                }
              >
                <AnimatePresence mode="wait">
                  <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
                    <Route path="/about" element={<PageWrapper><AboutPage /></PageWrapper>} />
                    <Route path="/services" element={<PageWrapper><ServicesPage /></PageWrapper>} />
                    <Route path="/projects" element={<PageWrapper><ProjectsPage /></PageWrapper>} />
                    <Route path="/projects/:slug" element={<PageWrapper><ProjectPage /></PageWrapper>} />
                    <Route path="/solutions" element={<PageWrapper><SolutionsPage /></PageWrapper>} />
                    <Route path="/insights" element={<PageWrapper><InsightsPage /></PageWrapper>} />
                    <Route path="/insights/:slug" element={<PageWrapper><ArticlePage /></PageWrapper>} />
                    <Route path="/contact" element={<PageWrapper><ContactPage /></PageWrapper>} />
                    <Route path="/testimonials" element={<PageWrapper><TestimonialsPage /></PageWrapper>} />
                    <Route path="*" element={<PageWrapper><NotFoundPage /></PageWrapper>} />
                  </Routes>
                </AnimatePresence>
              </Suspense>
            </main>
            <Footer />
            <ScrollButtons />
            <WhatsAppButton />
          </div>
          <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />
        </div>
    </ErrorBoundary>
  );
};

export default App;
