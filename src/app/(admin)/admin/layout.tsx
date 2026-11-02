import type { Metadata } from "next";
import Link from "next/link";
import { getSession } from "@/lib/auth";
import LogoutButton from "./LogoutButton";
import "./admin.css";

export const metadata: Metadata = {
  title: "NOVA · Admin",
  robots: { index: false, follow: false },
};

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession();

  // Sin sesión: se renderiza solo el contenido (la página /admin/login).
  // El resto de páginas del panel redirigen a /admin/login por su cuenta.
  if (!session) {
    return (
      <html lang="es">
        <body>
          <div className="admin-root">{children}</div>
        </body>
      </html>
    );
  }

  return (
    <html lang="es">
      <body>
        <div className="admin-root">
          <div className="admin-shell">
            <aside className="admin-sidebar">
              <h1>NOVA ADMIN</h1>
              <Link className="admin-nav-link" href="/admin">
                Inicio
              </Link>
              <Link className="admin-nav-link" href="/admin/eventos">
                Eventos
              </Link>
              <Link className="admin-nav-link" href="/admin/proyectos">
                Proyectos
              </Link>
              <Link className="admin-nav-link" href="/admin/home">
                Home (Carrusel)
              </Link>
              <Link className="admin-nav-link" href="/admin/nosotros">
                Nosotros
              </Link>
              <LogoutButton />
            </aside>
            <main className="admin-main">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
