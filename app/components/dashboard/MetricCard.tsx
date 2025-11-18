interface MetricCardProps {
  label: string;
  value: string;
  trendLabel?: string;
  trendValue?: string;
  highlight?: "up" | "down";
}

export function MetricCard({
  label,
  value,
  trendLabel,
  trendValue,
  highlight = "up",
}: MetricCardProps) {
  const trendColor = highlight === "up" ? "text-emerald-400" : "text-rose-400";
  return (
    <article className="rounded-2xl border border-white/5 bg-gradient-to-b from-white/5 to-white/0 p-6 shadow-xl shadow-black/30">
      <p className="text-sm font-medium text-slate-400">{label}</p>
      <p className="mt-2 text-3xl font-semibold text-white md:text-4xl">{value}</p>
      {trendLabel && trendValue && (
        <p className={`mt-4 text-sm font-medium ${trendColor}`}>
          {trendLabel} · {trendValue}
        </p>
      )}
    </article>
  );
}
