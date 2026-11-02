import { redirect } from "next/navigation";
import Link from "next/link";
import { getSession } from "@/lib/auth";
import { listEventos, listProyectos } from "@/lib/data";

export default async function AdminHomePage() {
  const session = await getSession();
  if (!session) redirect("/admin/login");

  const [eventos, proyectos] = await Promise.all([listEventos(), listProyectos()]);

  return (
    <div>
      <h2>Bienvenido</h2>
      <p className="admin-subtitle">Gestiona el contenido del sitio de NOVA.</p>

      <div className="admin-grid">
        <Link href="/admin/eventos" className="admin-card" style={{ textDecoration: "none", color: "inherit" }}>
          <strong style={{ fontSize: 28 }}>{eventos.length}</strong>
          <div className="admin-subtitle" style={{ margin: 0 }}>Eventos</div>
        </Link>
        <Link href="/admin/proyectos" className="admin-card" style={{ textDecoration: "none", color: "inherit" }}>
          <strong style={{ fontSize: 28 }}>{proyectos.length}</strong>
          <div className="admin-subtitle" style={{ margin: 0 }}>Proyectos</div>
        </Link>
        <Link href="/admin/home" className="admin-card" style={{ textDecoration: "none", color: "inherit" }}>
          <strong style={{ fontSize: 18 }}>Home</strong>
          <div className="admin-subtitle" style={{ margin: 0 }}>Hero y carrusel</div>
        </Link>
        <Link href="/admin/nosotros" className="admin-card" style={{ textDecoration: "none", color: "inherit" }}>
          <strong style={{ fontSize: 18 }}>Nosotros</strong>
          <div className="admin-subtitle" style={{ margin: 0 }}>Textos e historia</div>
        </Link>
      </div>
    </div>
  );
}
