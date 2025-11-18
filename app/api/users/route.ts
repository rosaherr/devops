import { NextResponse } from "next/server";
import { sanitizeUser, users } from "./data";

export async function GET() {
  return NextResponse.json(users.map(sanitizeUser));
}
