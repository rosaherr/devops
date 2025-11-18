export const milestones = [
  {
    title: "Fundamentos de Git",
    description:
      "Configuración de repositorios, ramas colaborativas y buenas prácticas para commits descriptivos.",
    time: "Semana 1",
  },
  {
    title: "Flujos CI/CD",
    description:
      "De los pipelines básicos hasta despliegues automatizados usando pull requests controlados.",
    time: "Semana 3",
  },
  {
    title: "Observabilidad y operaciones",
    description:
      "Monitoreo, tableros y respuestas ante incidentes para mantener servicios saludables.",
    time: "Semana 5",
  },
];

export const onboardingSteps = [
  "Crear un usuario dentro del portal académico y verificar el correo recibido.",
  "Definir una contraseña segura usando el enlace enviado.",
  "Acceder al panel y completar el perfil antes de iniciar los laboratorios.",
];

export const adminWorkflows = [
  {
    action: "Cambio de rol",
    detail:
      "El administrador puede promover a mentores o degradar a estudiantes; la interfaz confirma el ajuste y fuerza un nuevo inicio de sesión.",
  },
  {
    action: "Actualización de estatus",
    detail:
      "Cuando el estado pasa a \"Suspendido\" el sistema redirige al formulario de soporte con instrucciones claras para reactivar la cuenta.",
  },
];

export const quickStats = [
  { label: "Duración", value: "6 semanas" },
  { label: "Modalidad", value: "Laboratorios guiados" },
  { label: "Entrega final", value: "Pipeline CI/CD" },
];

export const resources = [
  {
    label: "Documentación del curso",
    url: "https://nextjs.org/docs",
  },
  {
    label: "Repositorio de prácticas",
    url: "https://github.com",
  },
  {
    label: "Foro y dudas",
    url: "https://discord.com",
  },
];
