import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Highlights from "./sections/Highlights";
import BrandStory from "./sections/BrandStory";
import Projects from "./sections/Projects";
import ImagePortfolio from "./sections/ImagePortfolio";
import RecruiterFocus from "./sections/RecruiterFocus";
import Experiences from "./sections/Experiences";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Preloader from "./components/Preloader";
import ScrollButtons from "./components/ScrollButtons";

const App = () => {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShowPreloader(false), 2200);
    return () => clearTimeout(t);
  }, []);

  return (
    <ThemeProvider>
      <div className="relative min-h-screen overflow-x-hidden">
        <div className="ambient-bg" />
        {showPreloader && <Preloader />}
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
            <Services />
            <Highlights />
            <BrandStory />
            <RecruiterFocus />
            <Projects />
            <ImagePortfolio />
            <Experiences />
            <Testimonial />
            <Contact />
          </motion.main>
          <Footer />
          <ScrollButtons />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
