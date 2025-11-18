export type UserStatus = "active" | "inactive" | "suspended";
export type UserRole = "admin" | "user";

export interface UserRecord {
  id: string;
  name: string;
  email: string;
  password: string;
  role: UserRole;
  status: UserStatus;
  title: string;
}

export const users: UserRecord[] = [
  {
    id: "1",
    name: "Rosa Herrera",
    email: "rosa@example.com",
    password: "rosa123",
    role: "admin",
    status: "active",
    title: "Gerente de TI",
  },
  {
    id: "2",
    name: "Luis García",
    email: "luis@example.com",
    password: "luis123",
    role: "user",
    status: "inactive",
    title: "Analista de Datos",
  },
  {
    id: "3",
    name: "Mónica Díaz",
    email: "monica@example.com",
    password: "monica123",
    role: "user",
    status: "active",
    title: "Diseñadora UX",
  },
  {
    id: "4",
    name: "Carlos Pérez",
    email: "carlos@example.com",
    password: "carlos123",
    role: "user",
    status: "suspended",
    title: "Soporte Técnico",
  },
];

export function sanitizeUser({ password, ...rest }: UserRecord) {
  return rest;
}
