// components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-purple-700 text-white relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 relative">
          
          {/* Izquierda: Logo como Home link */}
          <div className="flex-shrink-0">
            <Link href="/">
              <img
                src="/nova-logo-blanco.svg"
                alt="NOVA"
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Centro: Menú de navegación (absolute centering) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-8 text-sm font-semibold">
            <Link href="/nosotros" className="hover:text-gray-200">
              Nosotros
            </Link>
            <Link href="/proyectos" className="hover:text-gray-200">
              Proyectos
            </Link>
            <Link href="/grupo" className="hover:text-gray-200">
              Grupo
            </Link>
            <Link href="/eventos" className="hover:text-gray-200">
              Eventos
            </Link>
          </div>

          {/* Derecha: espacio vacío para balancear */}
          <div className="w-12" />
        </div>
      </div>
    </nav>
  );
}
