"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";

export type UserStatus = "active" | "inactive" | "suspended";
export type UserRole = "admin" | "user";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  status: UserStatus;
  title: string;
}

const STATUS_LABELS: Record<UserStatus, string> = {
  active: "Activo",
  inactive: "Inactivo",
  suspended: "Suspendido",
};

const statusOptions: UserStatus[] = ["active", "inactive", "suspended"];

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [email, setEmail] = useState("rosa@example.com");
  const [password, setPassword] = useState("rosa123");
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const isAdmin = currentUser?.role === "admin";

  const fetchUsers = async () => {
    const res = await fetch("/api/users");
    const data = await res.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setMessage(null);
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const error = await res.json();
        setMessage(error.message || "No se pudo iniciar sesión.");
        setCurrentUser(null);
        setLoading(false);
        return;
      }

      const user = await res.json();
      setCurrentUser(user);
      setMessage("Sesión iniciada correctamente.");
      setLoading(false);
    } catch (error) {
      console.error(error);
      setMessage("No se pudo iniciar sesión.");
      setLoading(false);
    }
  };

  const handleStatusChange = async (userId: string, status: UserStatus) => {
    if (!isAdmin) {
      setMessage("Sólo un administrador puede cambiar el estatus.");
      return;
    }
    const previousUsers = [...users];
    setUsers((prev) => prev.map((u) => (u.id === userId ? { ...u, status } : u)));
    try {
      const res = await fetch(`/api/users/${userId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "x-user-role": currentUser?.role ?? "user",
        },
        body: JSON.stringify({ status }),
      });

      if (!res.ok) {
        const error = await res.json();
        setUsers(previousUsers);
        setMessage(error.message || "No se pudo actualizar el estatus.");
        return;
      }

      const updatedUser: User = await res.json();
      setUsers((prev) => prev.map((u) => (u.id === updatedUser.id ? updatedUser : u)));
      if (currentUser && currentUser.id === updatedUser.id) {
        setCurrentUser(updatedUser);
      }
      setMessage("Estatus actualizado");
    } catch (error) {
      console.error(error);
      setUsers(previousUsers);
      setMessage("No se pudo actualizar el estatus.");
    }
  };

  const profileUser = useMemo(() => currentUser ?? users[0] ?? null, [currentUser, users]);

  return (
    <main className="min-h-screen bg-slate-950 text-white px-4 py-10">
      <div className="max-w-6xl mx-auto space-y-10">
        <header className="space-y-3">
          <p className="text-blue-400 text-sm uppercase tracking-[0.4em]">Portal de usuarios</p>
          <h1 className="text-3xl font-bold">Panel de control</h1>
          <p className="text-slate-300 max-w-3xl">
            Administra a los usuarios del sistema, consulta su estatus y controla los accesos. El
            selector de estatus te permite poner a cada colaborador como Activo, Inactivo o
            Suspendido de acuerdo con las políticas internas.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-[2fr_1fr]">
          <div className="bg-slate-900 rounded-2xl p-6 shadow-lg border border-slate-800">
            <h2 className="text-xl font-semibold mb-4">Inicia sesión</h2>
            <form className="space-y-4" onSubmit={handleLogin}>
              <div>
                <label className="text-sm text-slate-400" htmlFor="email">
                  Correo electrónico
                </label>
                <input
                  id="email"
                  type="email"
                  className="mt-1 w-full rounded-lg bg-slate-800 border border-slate-700 px-3 py-2"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </div>
              <div>
                <label className="text-sm text-slate-400" htmlFor="password">
                  Contraseña
                </label>
                <input
                  id="password"
                  type="password"
                  className="mt-1 w-full rounded-lg bg-slate-800 border border-slate-700 px-3 py-2"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-blue-500 hover:bg-blue-400 px-4 py-2 font-semibold"
                disabled={loading}
              >
                {loading ? "Validando..." : "Ingresar"}
              </button>
            </form>
            {message && (
              <p className="mt-4 text-sm text-slate-300 bg-slate-800 px-3 py-2 rounded-lg">{message}</p>
            )}
          </div>

          <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
            <h2 className="text-xl font-semibold mb-4">Perfil</h2>
            {profileUser ? (
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-slate-400">Nombre</p>
                  <p className="text-lg font-semibold">{profileUser.name}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-400">Correo</p>
                  <p>{profileUser.email}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-400">Rol</p>
                  <p className="capitalize">{profileUser.role}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-400">Puesto</p>
                  <p>{profileUser.title}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-400">Estatus</p>
                  <StatusBadge status={profileUser.status} />
                </div>
              </div>
            ) : (
              <p className="text-slate-400">Sin información disponible.</p>
            )}
          </div>
        </section>

        <section className="bg-slate-900 rounded-2xl p-6 border border-slate-800 overflow-x-auto">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Usuarios</h2>
            <p className="text-sm text-slate-400">
              {isAdmin
                ? "Sesión de administrador: puedes cambiar el estatus desde el selector"
                : "Inicia sesión como admin para editar el estatus"}
            </p>
          </div>
          <table className="min-w-full text-left text-sm">
            <thead className="text-slate-400">
              <tr>
                <th className="py-2">Nombre</th>
                <th className="py-2">Correo</th>
                <th className="py-2">Rol</th>
                <th className="py-2">Estatus</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="py-3 font-medium">{user.name}</td>
                  <td className="py-3 text-slate-300">{user.email}</td>
                  <td className="py-3 capitalize">{user.role}</td>
                  <td className="py-3">
                    <div className="flex items-center gap-3">
                      <StatusBadge status={user.status} />
                      <select
                        className="rounded-md bg-slate-800 border border-slate-700 px-2 py-1 text-white"
                        value={user.status}
                        onChange={(event) =>
                          handleStatusChange(user.id, event.target.value as UserStatus)
                        }
                        disabled={!isAdmin}
                      >
                        {statusOptions.map((option) => (
                          <option key={option} value={option}>
                            {STATUS_LABELS[option]}
                          </option>
                        ))}
                      </select>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </main>
  );
}

function StatusBadge({ status }: { status: UserStatus }) {
  const colorClasses: Record<UserStatus, string> = {
    active: "bg-green-500/20 text-green-300 border-green-400/40",
    inactive: "bg-yellow-500/20 text-yellow-200 border-yellow-500/40",
    suspended: "bg-red-500/20 text-red-200 border-red-500/40",
  };

  return (
    <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${colorClasses[status]}`}>
      {STATUS_LABELS[status]}
    </span>
  );
}
