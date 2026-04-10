"use client";

import { useState } from "react";

// título "GRUPO" con efecto de máscara/fade en los bordes
function GrupoHero() {
  return (
    <section className="grupo-hero">
      <div className="grupo-hero__title-img">
        <img src="/grupo.svg" alt="GRUPO" />
      </div>
    </section>
  );
}

// sección Junta: texto a la izquierda, foto a la derecha
function GrupoJunta() {
  return (
    <section className="grupo-junta">
      <div className="grupo-junta__inner">
        <div className="grupo-junta__left">
          <h1 className="grupo-junta__heading">Junta</h1>
          <p className="grupo-junta__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className="grupo-junta__right">
          <div className="grupo-junta__photo-placeholder">
            <img
              src="/JuntaSilueta.svg"
              alt="Junta directiva"
              className="grupo-junta__photo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// data de cada año — para agregar uno nuevo solo
// hay que copiar un bloque y cambiar el año + rutas
// ─────────────────────────────────────────────
const AÑOS = [
  {
    año: "2023",
    imgAño: "/año-2023.png",
    departamentos: [
      { label: "Presidente",      img: "/dept-Presidente-2023.png" },
      { label: "Vice presidente", img: "/dept-VicePresidente-2023.png" },
      { label: "RRPP",            img: "/dept-rrpp-2023.png" },
      { label: "Gestión Humana",  img: "/dept-GH-2023.png" },
      { label: "Communities",     img: "/dept-Comms-2023.png" },
      { label: "Mercadeo",        img: "/dept-mercadeo-2023.png" },
    ],
  },
  {
    año: "2024",
    imgAño: "/año-2024.png",
    departamentos: [
      { label: "Presidente",      img: "/dept-Presidente-2024.png" },
      { label: "Vice presidente", img: "/dept-VicePresidente-2024.png" },
      { label: "RRPP",            img: "/dept-rrpp-2024.png" },
      { label: "Gestión Humana",  img: "/dept-GH-2024.png" },
      { label: "Communities",     img: "/dept-Comms-2024.png" },
      { label: "Mercadeo",        img: "/dept-mercadeo-2024.png" },
    ],
  },
  {
    año: "2025",
    imgAño: "/año-2025.png", // por si se quiere usar la imagen del año en vez del svg fijo
    departamentos: [
      { label: "Presidente",      img: "/dept-Presidente-2025.png" },
      { label: "Vice presidente", img: "/dept-VicePresidente-2025.png" },
      { label: "RRPP",            img: "/dept-rrpp-2025.png" },
      { label: "Gestión Humana",  img: "/dept-GH-2025.png" },
      { label: "Communities",     img: "/dept-Comms-2025.png" },
      { label: "Mercadeo",        img: "/dept-mercadeo-2025.png" },
    ],
  },
  {
    año: "2026",
    imgAño: "/año-2026.png",
    departamentos: [
      { label: "Presidente",      img: "/dept-Presidente-2026.png" },
      { label: "Vice presidente", img: "/dept-VicePresidente-2026.png" },
      { label: "RRPP",            img: "/dept-rrpp-2026.png" },
      { label: "Gestión Humana",  img: "/dept-GH-2026.png" },
      { label: "Communities",     img: "/dept-Comms-2026.png" },
      { label: "Mercadeo",        img: "/dept-mercadeo-2026.png" },
    ],
  },
];

// galería por año con fondo de malla, fotos de cada depto y navegación
function GrupoStats() {
  const [idx, setIdx] = useState(AÑOS.length - 1); // empieza en el más reciente
  const actual = AÑOS[idx];

  const prev = () => setIdx((i) => Math.max(0, i - 1));
  const next = () => setIdx((i) => Math.min(AÑOS.length - 1, i + 1));

  const fila1 = actual.departamentos.slice(0, 2); // presidente y vice (centrados arriba)
  const fila2 = actual.departamentos.slice(2, 6); // los 4 deptos restantes

  return (
    <section className="grupo-stats">
      {/* fondo de malla detrás del contenedor */}
      <div className="grupo-stats__malla" />

      <div className="grupo-stats__inner">

        {/* fila superior: 2 cuadros centrados */}
        <div className="grupo-stats__fila grupo-stats__fila--2">
          {fila1.map((dept, i) => (
            <div key={i} className="grupo-stats__dept">
              <span className="grupo-stats__dept-label">{dept.label}</span>
              <div className="grupo-stats__dept-img-wrap">
                <img src={dept.img} alt={dept.label} className="grupo-stats__dept-img" />
              </div>
            </div>
          ))}
        </div>

        {/* fila inferior: 4 cuadros */}
        <div className="grupo-stats__fila grupo-stats__fila--4">
          {fila2.map((dept, i) => (
            <div key={i} className="grupo-stats__dept">
              <span className="grupo-stats__dept-label">{dept.label}</span>
              <div className="grupo-stats__dept-img-wrap">
                <img src={dept.img} alt={dept.label} className="grupo-stats__dept-img" />
              </div>
            </div>
          ))}
        </div>

        {/* imagen del año en el estilo del grupo */}
        <div className="grupo-stats__año">
          {/* Se usa el año en texto para que sea 100% dinámico sin depender de imágenes extra */}
          <span className="grupo-stats__año-texto" style={{ fontSize: '4rem', fontWeight: 'bold', fontFamily: 'JetBrains Mono', fontStyle: 'italic', color: '#f0e0ff', letterSpacing: '4px' }}>{actual.año}</span>
        </div>

        {/* navegación: flecha izq — dots — flecha der */}
        <div className="grupo-stats__nav">
          <button
            className="grupo-stats__nav-btn"
            onClick={prev}
            disabled={idx === 0}
            aria-label="Año anterior"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div className="grupo-stats__dots">
            {AÑOS.map((_, i) => (
              <button
                key={i}
                className={`grupo-stats__dot${i === idx ? " grupo-stats__dot--active" : ""}`}
                onClick={() => setIdx(i)}
                aria-label={AÑOS[i].año}
              />
            ))}
          </div>

          <button
            className="grupo-stats__nav-btn"
            onClick={next}
            disabled={idx === AÑOS.length - 1}
            aria-label="Año siguiente"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}

// lista de áreas — el diseño visual está todo en el SVG
function GrupoAreas() {
  return (
    <section className="grupo-areas" style={{ width: "100%" }}>
      <div className="grupo-areas__inner" style={{ maxWidth: "1000px", margin: "0 auto", width: "100%" }}>
        <img
          src="/departamentos.svg"
          alt="Áreas del grupo"
          className="grupo-areas__img"
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// Estilos
// ─────────────────────────────────────────────
const styles = `
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* ── Hero ── */

  .grupo-hero {
    background: #120027;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem 3rem 2rem;
    overflow: visible;
  }

  .grupo-hero__title-img {
    display: flex;
    justify-content: center;
    overflow: visible;
  }

  .grupo-hero__title-img img {
    max-width: 550px;
    width: 100%;
    height: auto;
    mask-image: radial-gradient(ellipse 80% 80% at center, black 40%, transparent 100%);
    -webkit-mask-image: radial-gradient(ellipse 80% 80% at center, black 60%, transparent 100%);
  }

  /* fallback por si se usa texto en vez de imagen */
  .grupo-hero__title-text {
    font-size: clamp(3rem, 10vw, 7rem);
    font-weight: 900;
    color: #ffffff;
    text-shadow:
      0 0 30px rgba(160, 80, 255, 0.8),
      0 0 60px rgba(160, 80, 255, 0.4),
      4px 4px 0px #4a0080;
    letter-spacing: 0.15em;
    text-align: center;
  }

  /* ── Junta ── */

  .grupo-junta {
    background: #120027;
    padding: 2rem 1.5rem 3rem;
  }

  .grupo-junta__inner {
    max-width: 900px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
    align-items: center;
  }

  .grupo-junta__heading {
    font-size: 2.8rem;
    font-weight: 700;
    color: #f0e0ff;
    margin-bottom: 1rem;
    text-align: center;
  }

  .grupo-junta__text {
    font-size: 0.88rem;
    color: #c0a8e0;
    line-height: 1.7;
  }

  .grupo-junta__right {
    display: flex;
    justify-content: flex-end;
  }

  .grupo-junta__photo-placeholder {
    width: 100%;
    max-width: 340px;
    background: transparent;
    border: none;
    border-radius: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: visible;
  }

  .grupo-junta__photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  /* ── Stats ── */

  .grupo-stats {
    position: relative;
    background: #120027;
    padding: 4rem 1.5rem 4rem;
    overflow: visible;
  }

  .grupo-stats__malla {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 130%;
    height: 130%;
    background-image: url('/malla-fondo.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    pointer-events: none;
    z-index: 0;
  }

  .grupo-stats__inner {
    position: relative;
    z-index: 1;
    max-width: 860px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    border: 5px solid #F2F3FB;
    border-radius: 28px;
    padding: 2.5rem 2rem;
  }

  .grupo-stats__fila {
    width: 100%;
    display: grid;
    gap: 1.2rem;
  }

  .grupo-stats__fila--2 {
    grid-template-columns: repeat(2, 1fr);
    max-width: 380px;
    margin: 0 auto;
  }

  .grupo-stats__fila--4 {
    grid-template-columns: repeat(4, 1fr);
  }

  .grupo-stats__dept {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  .grupo-stats__dept-label {
    font-size: 0.85rem;
    font-weight: 1100;
    color: #f0e0ff;
    text-align: center;
    line-height: 2;
    font-family: 'JetBrains Mono', monospace;
  }

  /* marco de foto cuadrado con esquinas redondeadas */
  .grupo-stats__dept-img-wrap {
    width: 100%;
    aspect-ratio: 1 / 1;
    background: rgba(20, 5, 50, 0.6);
    border: 5px solid #F2F3FB;
    border-radius: 36px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .grupo-stats__dept-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .grupo-stats__año {
    display: flex;
    justify-content: center;
    margin-top: 0.5rem;
  }

  .grupo-stats__año-img {
    max-width: 280px;
    width: 100%;
    height: auto;
  }

  .grupo-stats__nav {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .grupo-stats__nav-btn {
    background: transparent;
    border: none;
    color: rgba(255, 255, 255, 0.6);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 0.15s;
    padding: 0;
  }

  .grupo-stats__nav-btn:disabled {
    opacity: 0.25;
    cursor: default;
  }

  .grupo-stats__nav-btn svg {
    width: 14px;
    height: 14px;
  }

  .grupo-stats__dots {
    display: flex;
    gap: 0.5rem;
  }

  .grupo-stats__dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: none;
    background: rgba(255, 255, 255, 0.35);
    cursor: pointer;
    padding: 0;
    transition: background 0.15s;
  }

  .grupo-stats__dot--active {
    background: #ffffff;
  }


  /* ── Áreas ── */

  .grupo-areas {
    background: #120027;
    padding: 2rem 1.5rem 4rem;
    width: 100%;
  }

  .grupo-areas__inner {
    max-width: 860px;
    width: 100%;
    margin: 0 auto;
  }

  .grupo-areas__img {
    width: 100%;
    height: auto;
    display: block;
  }

  /* ── Responsive ── */

  @media (max-width: 640px) {
    .grupo-junta__inner {
      grid-template-columns: 1fr;
    }

    .grupo-junta__right {
      justify-content: center;
    }

    .grupo-stats__grid {
      grid-template-columns: 1fr;
    }
  }
`;

// página principal — navbar y footer van en el layout global
export default function GrupoPage() {
  return (
    <>
      <style>{styles}</style>
      <GrupoHero />
      <GrupoJunta />
      <GrupoStats />
      <GrupoAreas />
    </>
  );
}