import { NextRequest, NextResponse } from "next/server";
import { sanitizeUser, users } from "../users/data";

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();

  const user = users.find((u) => u.email === email);

  if (!user || user.password !== password) {
    return NextResponse.json({ message: "Credenciales inválidas." }, { status: 401 });
  }

  if (user.status === "inactive") {
    return NextResponse.json(
      { message: "Tu cuenta está inactiva. Contacta al administrador." },
      { status: 403 }
    );
  }

  return NextResponse.json(sanitizeUser(user));
}
