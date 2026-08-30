import { useCallback, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import Navbar from "./sections/Navbar";
import Footer from "./sections/Footer";
import Preloader from "./components/Preloader";
import ScrollButtons from "./components/ScrollButtons";
import ScrollProgress from "./components/ScrollProgress";
import ErrorBoundary from "./components/ErrorBoundary";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ProjectsPage from "./pages/ProjectsPage";
import SolutionsPage from "./pages/SolutionsPage";
import InsightsPage from "./pages/InsightsPage";
import ArticlePage from "./pages/ArticlePage";
import ContactPage from "./pages/ContactPage";

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
  const location = useLocation();

  const handlePreloaderComplete = useCallback(() => {
    setShowPreloader(false);
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
              <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                  <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
                  <Route path="/about" element={<PageWrapper><AboutPage /></PageWrapper>} />
                  <Route path="/services" element={<PageWrapper><ServicesPage /></PageWrapper>} />
                  <Route path="/projects" element={<PageWrapper><ProjectsPage /></PageWrapper>} />
                  <Route path="/solutions" element={<PageWrapper><SolutionsPage /></PageWrapper>} />
                  <Route path="/insights" element={<PageWrapper><InsightsPage /></PageWrapper>} />
                  <Route path="/insights/:slug" element={<PageWrapper><ArticlePage /></PageWrapper>} />
                  <Route path="/contact" element={<PageWrapper><ContactPage /></PageWrapper>} />
                </Routes>
              </AnimatePresence>
            </main>
            <Footer />
            <ScrollButtons />
          </div>
        </div>
    </ErrorBoundary>
  );
};

export default App;
