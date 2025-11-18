import type { ReactNode } from "react";

interface DashboardLayoutProps {
  title: string;
  subtitle?: string;
  actions?: ReactNode;
  children: ReactNode;
}

export function DashboardLayout({
  title,
  subtitle,
  actions,
  children,
}: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-10 md:px-12 lg:py-14">
        <header className="flex flex-col gap-4 text-balance md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
              Panel
            </p>
            <h1 className="text-3xl font-semibold text-white md:text-4xl">{title}</h1>
            {subtitle && (
              <p className="mt-1 text-base text-slate-400 md:text-lg">{subtitle}</p>
            )}
          </div>
          {actions}
        </header>
        <div className="flex flex-col gap-10">{children}</div>
      </div>
    </div>
  );
}
