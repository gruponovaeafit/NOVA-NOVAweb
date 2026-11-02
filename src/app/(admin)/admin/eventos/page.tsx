import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { listEventos } from "@/lib/data";
import EventosManager from "./EventosManager";

export default async function AdminEventosPage() {
  const session = await getSession();
  if (!session) redirect("/admin/login");

  const eventos = await listEventos();
  return <EventosManager initial={eventos} />;
}
