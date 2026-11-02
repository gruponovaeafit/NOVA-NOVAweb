import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { listProyectos } from "@/lib/data";
import ProyectosManager from "./ProyectosManager";

export default async function AdminProyectosPage() {
  const session = await getSession();
  if (!session) redirect("/admin/login");

  const proyectos = await listProyectos();
  return <ProyectosManager initial={proyectos} />;
}
