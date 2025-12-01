import React, { useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense } from "react";
import { easing } from "maath";
import Loader from "../components/Loader";

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

const HeroCanvas = () => {
  // any side-effects or setup can go here
  useEffect(() => {
    // small optimization: reduce pixel ratio on small devices to save GPU
    if (typeof window !== "undefined" && window.devicePixelRatio > 1.5) {
      // nothing to set globally here; react-three-fiber can handle pixel ratio via props if needed
    }
  }, []);

  const dpr = typeof window !== "undefined" ? Math.min(window.devicePixelRatio || 1, 1.5) : 1;

  return (
    <Canvas dpr={dpr} camera={{ position: [0, 1, 3] }} style={{ width: "100%", height: "100%" }}>
      <Suspense fallback={<Loader />}>
        <Rig />
      </Suspense>
    </Canvas>
  );
};

export default HeroCanvas;
