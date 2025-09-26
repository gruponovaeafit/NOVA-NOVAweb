"use client"; // this component needs to run in the browser

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/nosotros", label: "Nosotros" },
    { href: "/proyectos", label: "Proyectos" },
    { href: "/grupo", label: "Grupo" },
    { href: "/eventos", label: "Eventos" },
  ];

  return (
    <nav className="bg-purple-700 text-white relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 relative">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <img
                src="/nova-logo-blanco.svg"
                alt="NOVA"
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Center menu */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-8 text-sm font-semibold">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`pb-1 border-b-2 ${isActive ? "border-white text-white" : "border-transparent hover:border-gray-200 hover:text-gray-200"
                    }`}
                >
                  {link.label}
                </Link>

              );
            })}
          </div>

          <div className="w-12" />
        </div>
      </div>
    </nav>
  );
}
