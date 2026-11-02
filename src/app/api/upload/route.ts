import { NextRequest, NextResponse } from "next/server";
import { uploadImage } from "@/lib/storage";
import { getSession } from "@/lib/auth";

// POST /api/upload (multipart/form-data con campo "file") -> { url }
export async function POST(req: NextRequest) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "No autorizado" }, { status: 401 });

  try {
    const form = await req.formData();
    const file = form.get("file");
    if (!(file instanceof File)) {
      return NextResponse.json({ error: "No se envió ningún archivo" }, { status: 400 });
    }
    const url = await uploadImage(file);
    return NextResponse.json({ url });
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}
