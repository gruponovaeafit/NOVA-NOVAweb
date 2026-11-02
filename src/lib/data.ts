import { supabaseAdmin } from "./supabase/server";
import type { Evento, Proyecto, Home, Nosotros, MediaRef } from "./types";

/**
 * Capa de acceso a datos. Traduce entre las columnas snake_case de Postgres
 * y los campos camelCase que consume el frontend (mismo shape que daba Payload).
 */

// ---------- Mappers ----------
function mapEvento(row: any): Evento {
  return {
    id: row.id,
    eventTitle: row.event_title ?? "",
    eventDescription: row.event_description ?? "",
    eventImage: (row.event_image as MediaRef) ?? null,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

function mapProyecto(row: any): Proyecto {
  return {
    id: row.id,
    projectTitle: row.project_title ?? "",
    projectDescription: row.project_description ?? "",
    projectImage: (row.project_image as MediaRef) ?? null,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

// ======================= EVENTOS =======================
export async function listEventos(): Promise<Evento[]> {
  const { data, error } = await supabaseAdmin
    .from("eventos")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) throw new Error(error.message);
  return (data ?? []).map(mapEvento);
}

export async function getEvento(id: number): Promise<Evento | null> {
  const { data, error } = await supabaseAdmin.from("eventos").select("*").eq("id", id).single();
  if (error) return null;
  return mapEvento(data);
}

export async function createEvento(input: {
  eventTitle: string;
  eventDescription: string;
  eventImage: MediaRef | null;
}): Promise<Evento> {
  const { data, error } = await supabaseAdmin
    .from("eventos")
    .insert({
      event_title: input.eventTitle,
      event_description: input.eventDescription,
      event_image: input.eventImage,
    })
    .select("*")
    .single();
  if (error) throw new Error(error.message);
  return mapEvento(data);
}

export async function updateEvento(
  id: number,
  input: Partial<{ eventTitle: string; eventDescription: string; eventImage: MediaRef | null }>
): Promise<Evento> {
  const patch: Record<string, unknown> = { updated_at: new Date().toISOString() };
  if (input.eventTitle !== undefined) patch.event_title = input.eventTitle;
  if (input.eventDescription !== undefined) patch.event_description = input.eventDescription;
  if (input.eventImage !== undefined) patch.event_image = input.eventImage;

  const { data, error } = await supabaseAdmin
    .from("eventos")
    .update(patch)
    .eq("id", id)
    .select("*")
    .single();
  if (error) throw new Error(error.message);
  return mapEvento(data);
}

export async function deleteEvento(id: number): Promise<void> {
  const { error } = await supabaseAdmin.from("eventos").delete().eq("id", id);
  if (error) throw new Error(error.message);
}

// ======================= PROYECTOS =======================
export async function listProyectos(): Promise<Proyecto[]> {
  const { data, error } = await supabaseAdmin
    .from("proyectos")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) throw new Error(error.message);
  return (data ?? []).map(mapProyecto);
}

export async function getProyecto(id: number): Promise<Proyecto | null> {
  const { data, error } = await supabaseAdmin.from("proyectos").select("*").eq("id", id).single();
  if (error) return null;
  return mapProyecto(data);
}

export async function createProyecto(input: {
  projectTitle: string;
  projectDescription: string;
  projectImage: MediaRef | null;
}): Promise<Proyecto> {
  const { data, error } = await supabaseAdmin
    .from("proyectos")
    .insert({
      project_title: input.projectTitle,
      project_description: input.projectDescription,
      project_image: input.projectImage,
    })
    .select("*")
    .single();
  if (error) throw new Error(error.message);
  return mapProyecto(data);
}

export async function updateProyecto(
  id: number,
  input: Partial<{ projectTitle: string; projectDescription: string; projectImage: MediaRef | null }>
): Promise<Proyecto> {
  const patch: Record<string, unknown> = { updated_at: new Date().toISOString() };
  if (input.projectTitle !== undefined) patch.project_title = input.projectTitle;
  if (input.projectDescription !== undefined) patch.project_description = input.projectDescription;
  if (input.projectImage !== undefined) patch.project_image = input.projectImage;

  const { data, error } = await supabaseAdmin
    .from("proyectos")
    .update(patch)
    .eq("id", id)
    .select("*")
    .single();
  if (error) throw new Error(error.message);
  return mapProyecto(data);
}

export async function deleteProyecto(id: number): Promise<void> {
  const { error } = await supabaseAdmin.from("proyectos").delete().eq("id", id);
  if (error) throw new Error(error.message);
}

// ======================= HOME (global) =======================
export async function getHome(): Promise<Home> {
  const { data, error } = await supabaseAdmin.from("home").select("*").eq("id", 1).single();
  if (error || !data) {
    return { heroTitle: "", heroSubtitle: "", carouselImages: [] };
  }
  return {
    heroTitle: data.hero_title ?? "",
    heroSubtitle: data.hero_subtitle ?? "",
    carouselImages: (data.carousel_images as MediaRef[]) ?? [],
  };
}

export async function updateHome(input: Partial<Home>): Promise<Home> {
  const patch: Record<string, unknown> = { id: 1, updated_at: new Date().toISOString() };
  if (input.heroTitle !== undefined) patch.hero_title = input.heroTitle;
  if (input.heroSubtitle !== undefined) patch.hero_subtitle = input.heroSubtitle;
  if (input.carouselImages !== undefined) patch.carousel_images = input.carouselImages;

  const { error } = await supabaseAdmin.from("home").upsert(patch, { onConflict: "id" });
  if (error) throw new Error(error.message);
  return getHome();
}

// ======================= NOSOTROS (global) =======================
export async function getNosotros(): Promise<Nosotros> {
  const { data, error } = await supabaseAdmin.from("nosotros").select("*").eq("id", 1).single();
  if (error || !data) {
    return { aboutText: "", historyText: "", historyImages: [] };
  }
  return {
    aboutText: data.about_text ?? "",
    historyText: data.history_text ?? "",
    historyImages: (data.history_images as MediaRef[]) ?? [],
  };
}

export async function updateNosotros(input: Partial<Nosotros>): Promise<Nosotros> {
  const patch: Record<string, unknown> = { id: 1, updated_at: new Date().toISOString() };
  if (input.aboutText !== undefined) patch.about_text = input.aboutText;
  if (input.historyText !== undefined) patch.history_text = input.historyText;
  if (input.historyImages !== undefined) patch.history_images = input.historyImages;

  const { error } = await supabaseAdmin.from("nosotros").upsert(patch, { onConflict: "id" });
  if (error) throw new Error(error.message);
  return getNosotros();
}
