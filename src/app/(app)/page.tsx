"use client";
import { useState } from "react";
import "./styles/home.css";
import Carousel from "@/components/Carousel";

// ---------------------------------------------------------------------------
// Hero
// Sección principal con logo, tagline y descripción del grupo.
// ---------------------------------------------------------------------------
function Hero() {
  return (
    <section className="nova-hero">
      <div className="nova-hero__logo">
        <img src="/nova-logo-blanco-Grupo-Estudiantil.svg" alt="NOVA" />
      </div>

      <p className="nova-hero__tagline">
        "Grupo estudiantil de tecnología e innovación"
      </p>

      <p className="nova-hero__desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </section>
  );
}



// ---------------------------------------------------------------------------
// MisionVision
// Alterna entre el texto de Misión y Visión mediante dos botones.
// El botón activo se muestra en blanco; el inactivo, en morado.
// ---------------------------------------------------------------------------
function MisionVision() {
  const [active, setActive] = useState<"mision" | "vision">("mision");

  const content = {
    mision:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    vision:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.",
  };

  return (
    <section className="nova-mv">
      <div className="nova-mv__tabs">
        {(["mision", "vision"] as const).map((tab) => (
          <button
            key={tab}
            className={`nova-mv__tab ${
              active === tab ? "nova-mv__tab--active" : "nova-mv__tab--inactive"
            }`}
            onClick={() => setActive(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <p className="nova-mv__text">{content[active]}</p>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Page
// Componente raíz que ensambla todas las secciones de la landing.
// ---------------------------------------------------------------------------
export default function Home() {
  return (
    <div className="bg-[#120027] min-h-screen text-white m-0 p-0 overflow-x-hidden relative">
      {/* Fondo universal de proyecto */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.2) 1.5px, transparent 1.5px)',
          backgroundSize: '30px 30px',
          WebkitMaskImage: 'radial-gradient(circle at center 30%, black 20%, rgba(0,0,0,0.5) 60%, transparent 100%)',
          maskImage: 'radial-gradient(circle at center 30%, black 20%, rgba(0,0,0,0.5) 60%, transparent 100%)'
        }}
      ></div>
      <Hero />
      <Carousel images={["/OMEGA-aula_2.jpeg", "/OMEGA-aula.jpeg", "/Foto_OMega.jpg"]} />
      <MisionVision />
    </div>
  );
}