"use client";

import { useState } from "react";

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
      <div className="nova-carousel__grid-bg" />

      <div className="nova-carousel__wrapper">
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
      <div className="nova-cards__grid-bg" />

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
// Estilos globales
// ---------------------------------------------------------------------------
const styles = `
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* == HERO == */

  .nova-hero {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 4rem 1.5rem 3rem;
    overflow: hidden;
    background: #120027;
  }

  .nova-hero__logo {
    position: relative;
    z-index: 1;
    margin-bottom: 1.5rem;
  }

  .nova-hero__logo img {
    height: 175px;
    width: auto;
    filter: drop-shadow(0 0 24px rgba(160, 60, 255, 0.7));
  }

  /* Halo difuminado detrás del logo */
  .nova-hero__logo::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 330px;
    height: 230px;
    transform: translate(-50%, -50%);
    background: radial-gradient(
      circle,
      rgba(170, 110, 255, 0.2) 0%,
      rgba(110, 50, 220, 0.35) 40%,
      rgba(40, 0, 100, 0.2) 65%,
      transparent 80%
    );
    filter: blur(20px);
    z-index: -1;
  }

  .nova-hero__tagline {
    position: relative;
    z-index: 1;
    font-size: 1.05rem;
    font-style: italic;
    font-weight: 600;
    color: #e8d8ff;
    margin-bottom: 1rem;
    max-width: 560px;
  }

  .nova-hero__desc {
    position: relative;
    z-index: 1;
    font-size: 0.88rem;
    color: #c0a8e0;
    line-height: 1.65;
    max-width: 560px;
  }

  /* == CARRUSEL == */

  .nova-carousel {
    position: relative;
    background: #120027;
    padding: 6rem 0;
    overflow: hidden;
  }

  /* Fondo decorativo SVG centrado */
  .nova-carousel__grid-bg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 950px;
    height: 600px;
    background-image: url('fondo-puntos.svg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    z-index: 0;
    pointer-events: none;
  }

  .nova-carousel__wrapper {
    position: relative;
    z-index: 5;
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    align-items: center;
  }

  .nova-carousel__track {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    flex: 1;
  }

  .nova-carousel__slot {
    aspect-ratio: 1 / 1;
    overflow: hidden;
    background: #1a0033;
  }

  .nova-carousel__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .nova-carousel__arrow {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    color: white;
    cursor: pointer;
    z-index: 10;
    margin: 0 10px;
  }

  /* == MISION / VISION == */

  .nova-mv {
    background: #120027;
    padding: 2rem 1.5rem 6rem;
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .nova-mv__tabs {
    display: flex;
    gap: 1.5rem;
    margin-bottom: 2rem;
    justify-content: center;
  }

  .nova-mv__tab {
    padding: 0.7rem 2.5rem;
    border-radius: 12px;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
    border: none;
    transition: transform 0.1s, box-shadow 0.2s;
    min-width: 140px;
  }

  .nova-mv__tab:hover {
    transform: scale(1.02);
  }

  .nova-mv__tab--inactive {
    background: #7c3aed;
    color: white;
    box-shadow: 0 4px 10px rgba(124, 58, 237, 0.3);
  }

  .nova-mv__tab--active {
    background: #ffffff;
    color: #7c3aed;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.6);
  }

  .nova-mv__text {
    font-size: 0.95rem;
    color: #c0a8e0;
    line-height: 1.7;
    max-width: 700px;
  }

  /* == TARJETAS == */

  .nova-cards {
    position: relative;
    background: #120027;
    padding: 3rem 1.5rem 4rem;
    overflow: hidden;
  }

  .nova-cards__grid-bg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 130%;
    height: 130%;
    background-image: url('/cuadricula-blanca.svg');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    pointer-events: none;
    z-index: 0;
  }

  .nova-cards__row {
    position: relative;
    z-index: 1;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1.5rem;
    max-width: 900px;
    margin: 0 auto;
  }

  .nova-card {
    background: rgba(40, 10, 70, 0.75);
    border: 1px solid rgba(160, 80, 255, 0.25);
    border-radius: 10px;
    overflow: hidden;
    backdrop-filter: blur(6px);
    transition: transform 0.2s, box-shadow 0.2s;
  }

  .nova-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 28px rgba(120, 40, 220, 0.35);
  }

  .nova-card__img {
    width: 100%;
    aspect-ratio: 16 / 9;
    background: rgba(60, 10, 100, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid rgba(160, 80, 255, 0.2);
  }

  .nova-card__img-icon {
    width: 48px;
    height: 36px;
    color: rgba(200, 160, 255, 0.35);
  }

  .nova-card__body {
    padding: 0.9rem 1rem 1rem;
  }

  .nova-card__title {
    font-size: 0.9rem;
    font-weight: 700;
    color: #f0e0ff;
    margin-bottom: 0.35rem;
  }

  .nova-card__sub {
    font-size: 0.78rem;
    color: #a07cc0;
    line-height: 1.5;
    margin-bottom: 0.8rem;
  }

  .nova-card__actions {
    display: flex;
    gap: 0.5rem;
  }

  .nova-card__btn {
    flex: 1;
    padding: 0.35rem 0.5rem;
    border-radius: 6px;
    font-size: 0.75rem;
    font-weight: 600;
    cursor: pointer;
    border: none;
    transition: opacity 0.15s, transform 0.1s;
  }

  .nova-card__btn:hover {
    opacity: 0.85;
    transform: scale(0.98);
  }

  .nova-card__btn--primary {
    background: #7c3aed;
    color: #fff;
  }

  .nova-card__btn--secondary {
    background: rgba(255, 255, 255, 0.1);
    color: #e0c8ff;
    border: 1px solid rgba(200, 160, 255, 0.3);
  }

  /* == RESPONSIVE == */

  @media (max-width: 640px) {
    .nova-carousel__track { grid-template-columns: 1fr; }
    .nova-cards__row      { grid-template-columns: 1fr; }
  }
`;

// ---------------------------------------------------------------------------
// Page
// Componente raíz que ensambla todas las secciones de la landing.
// ---------------------------------------------------------------------------
export default function Home() {
  return (
    <>
      <style>{styles}</style>
      <Hero />
      <ImageCarousel />
      <MisionVision />
      <Cards />
    </>
  );
}