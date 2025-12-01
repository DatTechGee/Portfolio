import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Footer from './sections/Footer';
import Preloader from "./components/Preloader";
import { useEffect, useState } from "react";
import ScrollButtons from "./components/ScrollButtons";

const App = () => {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShowPreloader(false), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="container mx-auto max-w-7xl">
      {showPreloader && <Preloader />}
      <div className={showPreloader ? "opacity-0 pointer-events-none" : ""}>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Experiences />
        <Testimonial />
        <Contact />
        <Footer />
        <ScrollButtons />
      </div>
    </div>
  );
};

export default App;
