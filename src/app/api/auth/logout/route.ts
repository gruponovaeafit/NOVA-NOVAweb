import { NextResponse } from "next/server";
import { clearSessionCookie } from "@/lib/auth";

// POST /api/auth/logout -> cierra la sesión del admin
export async function POST() {
  await clearSessionCookie();
  return NextResponse.json({ ok: true });
}
