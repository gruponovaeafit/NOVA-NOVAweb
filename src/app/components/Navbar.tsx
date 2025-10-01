"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/nosotros", label: "Nosotros" },
    { href: "/proyectos", label: "Proyectos" },
    { href: "/grupo", label: "Grupo" },
    { href: "/eventos", label: "Eventos" },
  ];

  // Close the mobile menu on route change
  useEffect(() => setOpen(false), [pathname]);

  // Close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <nav className="bg-purple-700 text-white relative">
      <div className="mx-auto max-w-7xl px-4">
        <div className="relative flex h-16 items-center justify-between">
          {/* Left: Logo (home) */}
          <div className="flex-shrink-0">
            <Link href="/" aria-label="Inicio">
              <img src="/nova-logo-blanco.svg" alt="NOVA" className="h-8 w-auto" />
            </Link>
          </div>

          {/* Center: Desktop menu (hidden on mobile) */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 transform md:flex md:space-x-8 md:text-sm md:font-semibold">
            {links.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`pb-1 border-b-2 ${
                    isActive
                      ? "border-white text-white"
                      : "border-transparent hover:border-gray-200 hover:text-gray-200"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right: Hamburger (shown on mobile) */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center justify-center rounded-md p-2 hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-white/70"
              aria-controls="mobile-menu"
              aria-expanded={open}
              aria-label="Abrir menú"
            >
              {/* Icon: three lines / X */}
              <span className="sr-only">Abrir menú</span>
              <svg
                className={`h-6 w-6 transition-transform ${open ? "rotate-90 opacity-0" : "opacity-100"}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`-ml-6 h-6 w-6 transition-transform ${open ? "rotate-0 opacity-100" : "opacity-0"}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Spacer to balance layout */}
          <div className="hidden w-12 md:block" />
        </div>
      </div>

      {/* Mobile panel */}
      <div
        id="mobile-menu"
        className={`md:hidden transition-[max-height,opacity] duration-200 ease-out overflow-hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-1 px-4 pb-4 pt-2">
          {links.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`block rounded px-3 py-2 text-base font-medium ${
                  isActive
                    ? "bg-purple-800 text-white"
                    : "text-white hover:bg-purple-800/70"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
