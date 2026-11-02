import { NextRequest, NextResponse } from "next/server";
import { getHome, updateHome } from "@/lib/data";
import { getSession } from "@/lib/auth";

// GET /api/globals/home -> objeto directo (mismo shape que Payload)
export async function GET() {
  try {
    const home = await getHome();
    return NextResponse.json(home);
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}

// PUT /api/globals/home -> actualizar (solo admin)
export async function PUT(req: NextRequest) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "No autorizado" }, { status: 401 });

  try {
    const body = await req.json();
    const home = await updateHome(body);
    return NextResponse.json(home);
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}
