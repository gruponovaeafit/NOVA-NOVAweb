import { NextRequest, NextResponse } from "next/server";
import { listProyectos, createProyecto } from "@/lib/data";
import { getSession } from "@/lib/auth";

// GET /api/proyectos -> lista pública (mismo shape que Payload: { docs: [...] })
export async function GET() {
  try {
    const docs = await listProyectos();
    return NextResponse.json({ docs });
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}

// POST /api/proyectos -> crear (solo admin)
export async function POST(req: NextRequest) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "No autorizado" }, { status: 401 });

  try {
    const body = await req.json();
    const doc = await createProyecto({
      projectTitle: body.projectTitle ?? "",
      projectDescription: body.projectDescription ?? "",
      projectImage: body.projectImage ?? null,
    });
    return NextResponse.json({ doc }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}
