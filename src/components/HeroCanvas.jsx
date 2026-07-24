import { Globe } from "./globe";

const HeroCanvas = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center opacity-40">
      <Globe className="pointer-events-none" />
    </div>
  );
};

export default HeroCanvas;
