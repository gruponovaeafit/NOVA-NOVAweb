import { useState } from "react";
import "../styles/home.css";

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
// ImageCarousel
// Muestra tres imágenes en cuadrícula con flechas de navegación.
// Las imágenes se cargan desde /imagen-ejemplo-{0,1,2}.jpg.
// ---------------------------------------------------------------------------
function ImageCarousel() {
  return (
    <section className="nova-carousel">
      <div className="nova-carousel__wrapper">
        <button
          className="nova-carousel__arrow nova-carousel__arrow--left"
          aria-label="Anterior"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <div className="nova-carousel__track">
          {["OMEGA-aula_2.jpeg", "OMEGA-aula.jpeg", "OMEGA-trabajo.jpeg"].map((img, i) => (
        <div key={i} className="nova-carousel__slot">
        <img
                src={`/${img}`}
                alt={`Imagen carrusel ${i}`}
                className="nova-carousel__img"
              />
            </div>
          ))}
        </div>

        <button
          className="nova-carousel__arrow nova-carousel__arrow--right"
          aria-label="Siguiente"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
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
// Cards
// Tres tarjetas de convocatoria, cada una con imagen placeholder,
// título, subtítulo y botones de acción.
// ---------------------------------------------------------------------------
// DESPUÉS
const CARDS = [
  { img: "pacho-morado.jpeg",  title: "¡Participa en Nova!", subtitle: "Nuestro hito..." },
  { img: "pose-pacho.jpeg",    title: "¡Participa en Nova!", subtitle: "Nuestro hito..." },
  { img: "selfie-pacho.jpeg",  title: "¡Participa en Nova!", subtitle: "Nuestro hito..." },
];

function Cards() {
  return (
    <section className="nova-cards">
      <div className="nova-cards__row">
        {CARDS.map((card, i) => (
          <div key={i} className="nova-card">
            {/* Reemplazar el área de imagen con: background: url('/tu-imagen.jpg') center/cover */}
            <div className="nova-card__img">
              <img src={`/${card.img}`} alt={card.title} style={{width:"100%", height:"100%", objectFit:"cover"}} />
            </div>

            <div className="nova-card__body">
              <h3 className="nova-card__title">{card.title}</h3>
              <p className="nova-card__sub">{card.subtitle}</p>

              <div className="nova-card__actions">
                <button className="nova-card__btn nova-card__btn--primary">
                  Ver más
                </button>
                <button className="nova-card__btn nova-card__btn--secondary">
                  Inscribirse
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
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
      <Cards />
    </div>
  );
}