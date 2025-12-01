import React, { Suspense, lazy } from "react";
import HeroText from "../components/HeroText";
import { useMediaQuery } from "react-responsive";
const HeroCanvas = lazy(() => import("../components/HeroCanvas"));

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  return (
    <section id="home" className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space">
      <HeroText />
      {/* Tech background: grid overlay with coding image */}
      <div
        className="absolute inset-0 -z-50"
        style={{
          backgroundImage: "url(/assets/grid.png), url(/assets/coding-pov.png)",
          backgroundBlendMode: "overlay, normal",
          backgroundSize: "cover, cover",
          backgroundPosition: "center, center",
          opacity: 0.9,
        }}
      />
      <figure className="absolute inset-0" style={{ width: "100vw", height: "100vh" }}>
        <Suspense fallback={null}>
          <HeroCanvas />
        </Suspense>
      </figure>
    </section>
  );
};

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
  });
}

export default Hero;
