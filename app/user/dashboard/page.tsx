import { DashboardLayout, MetricCard, QuickActionCard } from "@/app/components/dashboard";

const metrics = [
  {
    label: "Proyectos activos",
    value: "12",
    trendLabel: "vs. mes anterior",
    trendValue: "+3",
    highlight: "up" as const,
  },
  {
    label: "Tareas completadas",
    value: "148",
    trendLabel: "Semana actual",
    trendValue: "+28",
    highlight: "up" as const,
  },
  {
    label: "Alertas",
    value: "4",
    trendLabel: "Pendientes",
    trendValue: "-2",
    highlight: "down" as const,
  },
];

const quickActions = [
  {
    title: "Nuevo proyecto",
    description: "Configura un nuevo flujo para el equipo.",
    actionLabel: "Crear",
    icon: "🚀",
  },
  {
    title: "Registrar avance",
    description: "Actualiza el estado de tus tareas prioritarias.",
    actionLabel: "Actualizar",
    icon: "📝",
  },
  {
    title: "Solicitar soporte",
    description: "Comunícate con el equipo de operaciones.",
    actionLabel: "Abrir ticket",
    icon: "💬",
  },
];

export default function UserDashboardPage() {
  return (
    <DashboardLayout
      title="Dashboard de Usuario"
      subtitle="Resumen personal y acciones rápidas"
    >
      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {metrics.map((metric) => (
          <MetricCard key={metric.label} {...metric} />
        ))}
      </section>

      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {quickActions.map((action) => (
          <QuickActionCard key={action.title} {...action} />
        ))}
      </section>
    </DashboardLayout>
  );
}
