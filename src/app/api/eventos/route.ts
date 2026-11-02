import { NextRequest, NextResponse } from "next/server";
import { listEventos, createEvento } from "@/lib/data";
import { getSession } from "@/lib/auth";

// GET /api/eventos  -> lista pública (mismo shape que Payload: { docs: [...] })
export async function GET() {
  try {
    const docs = await listEventos();
    return NextResponse.json({ docs });
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}

// POST /api/eventos -> crear (solo admin)
export async function POST(req: NextRequest) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "No autorizado" }, { status: 401 });

  try {
    const body = await req.json();
    const doc = await createEvento({
      eventTitle: body.eventTitle ?? "",
      eventDescription: body.eventDescription ?? "",
      eventImage: body.eventImage ?? null,
    });
    return NextResponse.json({ doc }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}
