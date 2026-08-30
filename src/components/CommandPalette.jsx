import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { myProjects } from "../constants";
import { allArticles } from "../constants/articles";
import toSlug from "../utils/slug";

const NAV_ITEMS = [
  { label: "Home", to: "/", group: "Pages" },
  { label: "About", to: "/about", group: "Pages" },
  { label: "Services", to: "/services", group: "Pages" },
  { label: "Projects", to: "/projects", group: "Pages" },
  { label: "Insights", to: "/insights", group: "Pages" },
  { label: "Testimonials", to: "/testimonials", group: "Pages" },
  { label: "Contact", to: "/contact", group: "Pages" },
];

export default function CommandPalette({ open, onClose }) {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const groups = [
    {
      name: "Pages",
      items: NAV_ITEMS.map((n) => ({
        label: n.label,
        hint: n.to,
        action: () => navigate(n.to),
        key: n.label.toLowerCase(),
      })),
    },
    {
      name: "Projects",
      items: myProjects.map((p) => ({
        label: p.title,
        hint: p.tags?.[0]?.name || "Project",
        action: () => navigate(`/projects/${toSlug(p.title)}`),
        key: `${p.title} ${(p.tags || []).map((t) => t.name).join(" ")}`.toLowerCase(),
      })),
    },
    {
      name: "Articles",
      items: allArticles.map((a) => ({
        label: a.title,
        hint: a.category,
        action: () => navigate(`/insights/${toSlug(a.title)}`),
        key: `${a.title} ${a.category}`.toLowerCase(),
      })),
    },
  ];

  const items = useMemo(() => {
    const q = query.trim().toLowerCase();
    const out = [];
    for (const group of groups) {
      const matches = group.items.filter((it) => it.key.includes(q));
      if (matches.length) out.push({ group: group.name, items: matches });
    }
    return out;
  }, [query, groups]);

  const flat = items.flatMap((g) => g.items);

  useEffect(() => {
    if (open) {
      setQuery("");
      setActiveIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const run = (item) => {
    item.action();
    onClose();
  };

  useEffect(() => {
    const onKey = (e) => {
      if (!open) return;
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((i) => Math.min(i + 1, flat.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((i) => Math.max(i - 1, 0));
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (flat[activeIndex]) run(flat[activeIndex]);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, flat, activeIndex]);

  useEffect(() => {
    if (!open) return undefined;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[9999]"
      role="dialog"
      aria-modal="true"
      aria-label="Search"
    >
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative max-w-xl mx-auto mt-[10vh] px-4">
        <div className="rounded-2xl bg-[var(--bg-card)] border border-white/10 shadow-2xl overflow-hidden">
          <div className="flex items-center gap-3 px-5 py-4 border-b border-white/[0.06]">
            <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects, articles, pages..."
              className="flex-1 bg-transparent text-white placeholder-neutral-500 text-sm focus:outline-none"
            />
            <kbd className="hidden sm:inline-block text-[10px] px-1.5 py-0.5 rounded border border-white/10 text-neutral-500">
              ESC
            </kbd>
          </div>

          <div className="max-h-[50vh] overflow-y-auto py-2">
            {items.length === 0 && (
              <p className="px-5 py-6 text-center text-sm text-neutral-500">
                No results for "{query}"
              </p>
            )}

            {items.map((group) => (
              <div key={group.group}>
                <p className="px-5 pt-3 pb-1 text-[11px] font-semibold uppercase tracking-wider text-neutral-500">
                  {group.group}
                </p>
                {group.items.map((item, idx) => {
                  const globalIndex = flat.indexOf(item);
                  return (
                    <button
                      key={`${group.group}-${item.label}`}
                      onClick={() => run(item)}
                      onMouseEnter={() =>
                        setActiveIndex(
                          globalIndex >= 0 ? globalIndex : idx
                        )
                      }
                      className={`w-full flex items-center justify-between gap-4 px-5 py-2.5 text-left cursor-pointer transition-colors ${
                        activeIndex === globalIndex
                          ? "bg-gold/10 text-white"
                          : "text-neutral-400"
                      }`}
                    >
                      <span className="text-sm truncate">{item.label}</span>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span className="text-[11px] text-neutral-500">
                          {item.hint}
                        </span>
                        {activeIndex === globalIndex && (
                          <svg className="w-3.5 h-3.5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4 px-5 py-3 border-t border-white/[0.06] text-[11px] text-neutral-500">
            <span>
              <kbd className="px-1 py-0.5 rounded border border-white/10">↑</kbd>{" "}
              <kbd className="px-1 py-0.5 rounded border border-white/10">↓</kbd> navigate
            </span>
            <span>
              <kbd className="px-1 py-0.5 rounded border border-white/10">↵</kbd> open
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}