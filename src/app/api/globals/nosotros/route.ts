import { NextRequest, NextResponse } from "next/server";
import { getNosotros, updateNosotros } from "@/lib/data";
import { getSession } from "@/lib/auth";

// GET /api/globals/nosotros -> objeto directo (mismo shape que Payload)
export async function GET() {
  try {
    const nosotros = await getNosotros();
    return NextResponse.json(nosotros);
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}

// PUT /api/globals/nosotros -> actualizar (solo admin)
export async function PUT(req: NextRequest) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "No autorizado" }, { status: 401 });

  try {
    const body = await req.json();
    const nosotros = await updateNosotros(body);
    return NextResponse.json(nosotros);
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}
