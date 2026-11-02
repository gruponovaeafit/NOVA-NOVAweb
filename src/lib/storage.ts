import { supabaseAdmin, SUPABASE_BUCKET } from "./supabase/server";

/**
 * Sube un archivo al bucket de Supabase Storage y devuelve su URL pública.
 * Reemplaza al plugin s3Storage de Payload.
 */
export async function uploadImage(file: File): Promise<string> {
  const ext = file.name.includes(".") ? file.name.split(".").pop() : "bin";
  const safeName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
  const path = `uploads/${safeName}`;

  const arrayBuffer = await file.arrayBuffer();

  const { error } = await supabaseAdmin.storage
    .from(SUPABASE_BUCKET)
    .upload(path, arrayBuffer, {
      contentType: file.type || "application/octet-stream",
      upsert: false,
    });

  if (error) {
    throw new Error(`Error subiendo imagen a Supabase Storage: ${error.message}`);
  }

  const { data } = supabaseAdmin.storage.from(SUPABASE_BUCKET).getPublicUrl(path);
  return data.publicUrl;
}

/** Borra una imagen del bucket a partir de su URL pública. */
export async function deleteImageByUrl(url: string): Promise<void> {
  const marker = `/object/public/${SUPABASE_BUCKET}/`;
  const idx = url.indexOf(marker);
  if (idx === -1) return;
  const path = url.slice(idx + marker.length);
  await supabaseAdmin.storage.from(SUPABASE_BUCKET).remove([path]);
}
