import { DashboardLayout, MetricCard, QuickActionCard } from "@/app/components/dashboard";

const adminMetrics = [
  {
    label: "Usuarios activos",
    value: "1,248",
    trendLabel: "Últimos 30 días",
    trendValue: "+6%",
    highlight: "up" as const,
  },
  {
    label: "Roles asignados",
    value: "327",
    trendLabel: "Cambios recientes",
    trendValue: "+12",
    highlight: "up" as const,
  },
  {
    label: "Solicitudes pendientes",
    value: "18",
    trendLabel: "Revisión requerida",
    trendValue: "+4",
    highlight: "down" as const,
  },
];

const quickAdminActions = [
  {
    title: "Sincronizar directorio",
    description: "Obtén los últimos usuarios del IdP empresarial.",
    actionLabel: "Sincronizar",
    icon: "🔄",
  },
  {
    title: "Generar reporte",
    description: "Descarga métricas y auditorías en CSV.",
    actionLabel: "Descargar",
    icon: "📊",
  },
];

const managementSections = [
  {
    title: "Crear Usuarios",
    description: "Configura accesos iniciales, credenciales y equipos asignados.",
    actionLabel: "Abrir formulario",
    icon: "➕",
  },
  {
    title: "Roles",
    description: "Define permisos avanzados, aprobaciones y jerarquías.",
    actionLabel: "Editar roles",
    icon: "🛡️",
  },
  {
    title: "Estatus",
    description: "Activa, pausa o revoca usuarios con historial de acciones.",
    actionLabel: "Administrar",
    icon: "⚙️",
  },
];

export default function AdminDashboardPage() {
  return (
    <DashboardLayout
      title="Dashboard Administrador"
      subtitle="Controla usuarios, roles y estatus en tiempo real"
    >
      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {adminMetrics.map((metric) => (
          <MetricCard key={metric.label} {...metric} />
        ))}
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {quickAdminActions.map((action) => (
          <QuickActionCard key={action.title} {...action} />
        ))}
      </section>

      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {managementSections.map((section) => (
          <QuickActionCard key={section.title} {...section} />
        ))}
      </section>
    </DashboardLayout>
  );
}
