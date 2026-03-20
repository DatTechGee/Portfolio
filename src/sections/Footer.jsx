import { mySocials } from "../constants";
import { trackEvent } from "../utils/analytics";
const Footer = () => {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space" role="contentinfo">
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      <div className="flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex gap-3">
        {mySocials.map((social, index) => (
          <a
            href={social.href}
            key={index}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${social.name}`}
            onClick={() => trackEvent("social_click", { platform: social.name, url: social.href })}
          >
            <img src={social.icon} className="w-5 h-5" alt={social.name} />
          </a>
        ))}
      </div>
      <p className="px-2 py-1 text-xs rounded-full bg-white/10 text-neutral-300">
        SEO Standard Ready
      </p>
      <p>Copyright © {new Date().getFullYear()} Isaac Emmanuel. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
