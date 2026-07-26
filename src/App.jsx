import { useCallback, useState } from "react";
import { motion } from "motion/react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Highlights from "./sections/Highlights";
import RecruiterFocus from "./sections/RecruiterFocus";
import Experiences from "./sections/Experiences";
import Projects from "./sections/Projects";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Preloader from "./components/Preloader";
import ScrollButtons from "./components/ScrollButtons";
import ErrorBoundary from "./components/ErrorBoundary";
import { StatsBar } from "./components/transitions";
import { TechMarquee } from "./components/transitions";
import { ProcessSteps } from "./components/transitions";
import { QuoteStrip } from "./components/transitions";
import { AvailabilityBanner } from "./components/transitions";
import SkillsBreakdown from "./sections/SkillsBreakdown";

const App = () => {
  const [showPreloader, setShowPreloader] = useState(true);

  const handlePreloaderComplete = useCallback(() => {
    setShowPreloader(false);
  }, []);

  return (
    <ErrorBoundary>
      <ThemeProvider>
        <div className="relative min-h-screen overflow-x-hidden">
          <div className="ambient-bg" />
          {showPreloader && <Preloader onComplete={handlePreloaderComplete} />}
          <div
            className={`transition-opacity duration-700 ${
              showPreloader ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            <Navbar />
            <motion.main
              id="main-content"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <Hero />
              <About />
              <StatsBar />
              <Services />
              <TechMarquee />
              <SkillsBreakdown />
              <Highlights />
              <QuoteStrip />
              <Experiences />
              <RecruiterFocus />
              <ProcessSteps />
              <Projects />
              <Testimonial />
              <AvailabilityBanner />
              <Contact />
            </motion.main>
            <Footer />
            <ScrollButtons />
          </div>
        </div>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;
