import {
  adminWorkflows,
  milestones,
  onboardingSteps,
  quickStats,
  resources,
} from "./data/courseContent";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-16">
        <header className="rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-[1px] shadow-2xl">
          <div className="rounded-3xl bg-slate-950 p-10">
            <p className="text-sm uppercase tracking-[0.4em] text-slate-400">22050688 · Rosa Herrera Trejo</p>
            <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
              Habilidades <span className="text-indigo-300">DevOps</span>
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-300">
              Sesión vespertina · 19:00 - 20:00 — Practicamos cómo versionar código, colaborar mediante pull requests y automatizar despliegues con Next.js 15.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {quickStats.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                  <p className="text-xs uppercase tracking-widest text-slate-400">{item.label}</p>
                  <p className="mt-2 text-2xl font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </header>

        <section className="grid gap-10 lg:grid-cols-[2fr_1fr]">
          <div className="rounded-3xl border border-white/5 bg-white/5 p-8 shadow-lg shadow-indigo-900/20">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-indigo-300">Ruta de Aprendizaje</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Cronograma del módulo</h2>
            <div className="mt-8 space-y-6">
              {milestones.map((milestone) => (
                <article key={milestone.title} className="rounded-2xl border border-white/5 bg-slate-900/40 p-6">
                  <p className="text-sm font-semibold text-indigo-300">{milestone.time}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">{milestone.title}</h3>
                  <p className="mt-2 text-slate-300">{milestone.description}</p>
                </article>
              ))}
            </div>
          </div>
          <aside className="rounded-3xl border border-white/5 bg-gradient-to-br from-slate-900 to-slate-800 p-8">
            <h2 className="text-2xl font-semibold text-white">Recursos rápidos</h2>
            <ul className="mt-6 space-y-4 text-slate-300">
              {resources.map((resource) => (
                <li key={resource.label} className="flex items-center justify-between rounded-xl border border-white/5 p-3">
                  <span>{resource.label}</span>
                  <a
                    href={resource.url}
                    className="text-sm font-semibold text-indigo-300 underline-offset-4 hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Abrir
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </section>

        <section className="rounded-3xl border border-white/5 bg-white/5 p-8">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-indigo-300">Pruebas Manuales</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Flujo del estudiante</h2>
              <ol className="mt-6 space-y-4 text-slate-200">
                {onboardingSteps.map((step, index) => (
                  <li key={step} className="flex items-start gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500/80 text-2xl font-semibold">
                      {index + 1}
                    </span>
                    <p className="pt-2 text-lg leading-relaxed">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
            <div className="rounded-2xl border border-white/5 bg-slate-900/60 p-6">
              <h3 className="text-2xl font-semibold text-white">Flujo del administrador</h3>
              <ul className="mt-6 space-y-6">
                {adminWorkflows.map((workflow) => (
                  <li key={workflow.action}>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-300">
                      {workflow.action}
                    </p>
                    <p className="mt-2 text-slate-300">{workflow.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-white/5 bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-pink-600/20 p-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold text-white">Checklist de laboratorio</h2>
              <p className="mt-4 text-slate-200">
                Antes de empujar cualquier rama ejecutamos las verificaciones locales, documentamos los cambios y abrimos un Pull Request detallado para revisión.
              </p>
              <ul className="mt-6 list-disc space-y-3 pl-6 text-slate-200">
                <li>Commits atómicos diferenciando UI, API y autenticación.</li>
                <li>Despliegue de previsualización con captura de pantalla.</li>
                <li>Notas de pruebas manuales adjuntas al PR.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/5 bg-slate-950/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-indigo-300">Objetivo del curso</p>
              <p className="mt-4 text-lg text-slate-200">
                Dominar Git y GitHub como plataforma de versionamiento y hospedaje de código, integrando prácticas DevOps modernas con Next.js 15 y automatizaciones CI/CD.
              </p>
              <p className="mt-4 text-sm text-slate-400">
                "Cada commit debe contar una historia clara; cada despliegue debe poder reproducirse." — Equipo docente
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
