import type { ReactNode } from "react";

interface QuickActionCardProps {
  title: string;
  description: string;
  actionLabel: string;
  icon?: ReactNode;
  onClick?: () => void;
}

export function QuickActionCard({
  title,
  description,
  actionLabel,
  icon,
  onClick,
}: QuickActionCardProps) {
  return (
    <article className="flex flex-col justify-between rounded-2xl border border-white/5 bg-slate-900/60 p-5 text-left shadow-lg shadow-black/20">
      <div className="flex items-start gap-3">
        {icon && <span className="text-lg text-slate-300">{icon}</span>}
        <div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="mt-1 text-sm text-slate-400">{description}</p>
        </div>
      </div>
      <button
        type="button"
        onClick={onClick}
        className="mt-6 inline-flex items-center justify-center rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
      >
        {actionLabel}
      </button>
    </article>
  );
}
