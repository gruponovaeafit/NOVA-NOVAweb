import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { createSessionToken, setSessionCookie } from "@/lib/auth";

// POST /api/auth/login  { email, password } -> inicia sesión del admin
export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    const adminEmail = process.env.ADMIN_EMAIL;
    const adminHash = process.env.ADMIN_PASSWORD_HASH;

    if (!adminEmail || !adminHash) {
      return NextResponse.json(
        { error: "El administrador no está configurado en el servidor" },
        { status: 500 }
      );
    }

    const emailOk = typeof email === "string" && email.toLowerCase() === adminEmail.toLowerCase();
    const passOk = typeof password === "string" && (await bcrypt.compare(password, adminHash));

    if (!emailOk || !passOk) {
      return NextResponse.json({ error: "Credenciales inválidas" }, { status: 401 });
    }

    const token = await createSessionToken(adminEmail);
    await setSessionCookie(token);
    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}
