"use client"
import { useState, useEffect } from "react";
import "./styles/home.css";
import Carousel from "./components/Carousel";

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
        UN ESPACIO PARA SOÑAR, APRENDER, CREAR E INNOVAR
Creemos en el poder de la tecnología y la creatividad para transformar realidades.

      </p>
    </section>
  );
}

// ---------------------------------------------------------------------------
// ImageCarousel
// Now uses the global Carousel component with auto-play and fetches images from Payload.
// ---------------------------------------------------------------------------
function ImageCarousel() {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const res = await fetch('/api/globals/home?depth=1');
        if (!res.ok) return;
        const data = await res.json();
        
        if (data.carouselImages && Array.isArray(data.carouselImages)) {
          const urls = data.carouselImages
            .map((img: any) => img.url)
            .filter((url: string | undefined) => !!url);
          setImages(urls);
        }
      } catch (error) {
        console.error("Error fetching carousel images:", error);
      }
    };

    fetchHomeData();
  }, []);

  if (images.length === 0) return null;

  return (
    <section className="nova-carousel">
      <Carousel
        images={images}
        altPrefix="Imagen carrusel"
        autoPlayMs={4000}
      />
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
      "Buscamos acercar la industria 4.0 y transmitir su impacto en la sociedad actual y futura dentro de la comunidad universitaria; como grupo somos un espacio para aprender, crear, y transmitir conocimiento acerca de la tecnología y la innovación. Fomentamos la generación de ideas, la construcción de aprendizajes, el trabajo en equipo y la creatividad llevada al ámbito tecnológico. Todo esto dentro de un espacio de integridad, conocimiento, pluralismo e inclusión.",
    vision:
      "Posicionarnos como un grupo de referencia y referente dentro de la Universidad de Guadalajara en materia de industria 4.0, tecnología e innovación, logrando tener un impacto positivo en la comunidad universitaria y en la sociedad.",
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
      <ImageCarousel />
      <MisionVision />
    </div>
  );
}