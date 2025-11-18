import { NextRequest, NextResponse } from "next/server";
import { sanitizeUser, users, UserStatus } from "../data";

const allowedStatuses: UserStatus[] = ["active", "inactive", "suspended"];

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const role = request.headers.get("x-user-role");
  if (role !== "admin") {
    return NextResponse.json(
      { message: "Solo los administradores pueden actualizar el estatus." },
      { status: 403 }
    );
  }

  const { status } = await request.json();

  if (!allowedStatuses.includes(status)) {
    return NextResponse.json(
      { message: "Estatus no válido." },
      { status: 400 }
    );
  }

  const user = users.find((u) => u.id === params.id);

  if (!user) {
    return NextResponse.json({ message: "Usuario no encontrado." }, { status: 404 });
  }

  user.status = status;

  return NextResponse.json(sanitizeUser(user));
}
