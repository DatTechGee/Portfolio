export default function AvailabilityBadge({ className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold border border-emerald-500/30 bg-emerald-500/10 text-emerald-500 ${className}`}
      title="Currently accepting new projects"
    >
      <span className="relative flex h-2 w-2">
        <span className="relative inline-flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
      </span>
      Available for new projects
    </span>
  );
}