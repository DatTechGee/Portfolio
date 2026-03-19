import { useState } from "react";
import Project from "../components/Project";
import { motion, useMotionValue, useSpring } from "motion/react";

const liveProjects = [
  {
    id: 1,
    title: "Estate Website",
    description:
      "A modern real estate platform with property-focused UI and clear user journeys.",
    subDescription: [
      "Built for responsive browsing across desktop and mobile devices.",
      "Focused on clean layouts, conversion-friendly sections, and smooth interactions.",
      "Live deployment on Vercel.",
    ],
    href: "https://dattechgee-react-estate.vercel.app/",
    image: "/assets/projects/elearning.jpg",
    tags: [
      { id: "estate-1", name: "React" },
      { id: "estate-2", name: "Real Estate" },
      { id: "estate-3", name: "Vercel" },
    ],
  },
  {
    id: 2,
    title: "Nike Landing Page",
    description:
      "A brand-focused Nike landing page with strong visuals and marketing-style sections.",
    subDescription: [
      "Designed as a modern landing page for product storytelling.",
      "Optimized for readable content hierarchy and mobile responsiveness.",
      "Live deployment on Vercel.",
    ],
    href: "https://dattechgee-nike-landing-page.vercel.app/",
    image: "/assets/projects/accessories.jpg",
    tags: [
      { id: "nike-1", name: "Landing Page" },
      { id: "nike-2", name: "UI Design" },
      { id: "nike-3", name: "Vercel" },
    ],
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A personal developer portfolio showcasing work, experience, and contact flow.",
    subDescription: [
      "Built to present projects, skills, and technical profile.",
      "Includes interactive sections and clear call-to-action paths.",
      "Live deployment on Vercel.",
    ],
    href: "https://dattechgee.vercel.app/",
    image: "/assets/projects/auth-system.jpg",
    tags: [
      { id: "portfolio-1", name: "Portfolio" },
      { id: "portfolio-2", name: "React" },
      { id: "portfolio-3", name: "Vercel" },
    ],
  },
  {
    id: 4,
    title: "Weather Website",
    description:
      "A weather-focused website with practical UI for quick forecast checking.",
    subDescription: [
      "Built for fast weather lookups and straightforward information display.",
      "Responsive interface for desktop and mobile viewing.",
      "Live deployment on Vercel.",
    ],
    href: "https://dattechgee.vercel.app/",
    image: "/assets/projects/weather.jpeg",
    tags: [
      { id: "weather-1", name: "Weather" },
      { id: "weather-2", name: "Web App" },
      { id: "weather-3", name: "Vercel" },
    ],
  },
];

const Projects = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });

  const handleMouseMove = (e) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };
  const [preview, setPreview] = useState(null);
  return (
    <section
      id="projects"
      onMouseMove={handleMouseMove}
      className="relative c-space section-spacing"
    >
      <h2 className="text-heading">My Live Projects</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />
      {liveProjects.map((project) => (
        <Project key={project.id} {...project} setPreview={setPreview} />
      ))}
      {preview && (
        <motion.img
          className="fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80"
          src={preview}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "/assets/projects/auth-system.jpg";
          }}
          style={{ x: springX, y: springY }}
        />
      )}
    </section>
  );
};

export default Projects;
