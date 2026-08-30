import { Link } from "react-router-dom";
import Seo from "../components/Seo";

export default function NotFoundPage() {
  return (
    <main className="bg-[var(--bg-base)] min-h-screen flex items-center justify-center px-6">
      <Seo
        title="Page Not Found"
        description="The page you are looking for could not be found."
        path="/404"
      />
      <div className="text-center max-w-xl">
        <div
          className="text-[8rem] md:text-[12rem] font-bold leading-none bg-clip-text text-transparent select-none"
          style={{
            backgroundImage:
              "linear-gradient(135deg, #0072ff 0%, #7a57db 50%, #ea4884 100%)",
            WebkitBackgroundClip: "text",
          }}
        >
          404
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-[var(--tx-strong)] mt-2">
          Page not found
        </h1>
        <p className="text-[var(--tx-muted)] mt-4 mb-8 text-base md:text-lg leading-relaxed">
          The page you're looking for does not exist, or may have moved. Let's
          get you back on track with DatTechGee Technologies.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-gold text-[var(--bg-base)] px-7 py-3 rounded-full font-semibold text-sm hover:bg-gold/90 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10" />
            </svg>
            Back to Home
          </Link>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 border border-gold/40 text-gold px-7 py-3 rounded-full font-semibold text-sm hover:bg-gold/10 transition-colors"
          >
            View Projects
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 border border-[var(--border)] text-[var(--tx)] px-7 py-3 rounded-full font-semibold text-sm hover:text-gold transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}