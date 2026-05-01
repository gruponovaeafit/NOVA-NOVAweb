"use client";

import { useState } from "react";
import { JetBrains_Mono } from "next/font/google";

const jetMono = JetBrains_Mono({ subsets: ["latin"], display: "swap" });

// título "GRUPO" — mismo patrón que proyectos/page.tsx
function GrupoHero() {
  return (
    <header className="pt-[100px] px-5 pb-[60px] text-center flex flex-col items-center relative z-10 shrink-0">
      {/* Glow morado de fondo */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[120px] md:w-[450px] md:h-[180px] lg:w-[600px] lg:h-[240px] rounded-full z-[-1]"
        style={{ background: 'rgba(102, 0, 255, 0.85)', filter: 'blur(60px)' }}
      ></div>
      <img
        src="/grupoR.svg"
        alt="Grupo Title"
        className="w-full max-w-[300px] md:max-w-[500px] lg:max-w-[650px] relative z-[3]"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          const fallback = document.getElementById('title-fallback');
          if (fallback) fallback.style.display = 'block';
        }}
      />
      <h1
        id="title-fallback"
        className="text-3xl md:text-5xl lg:text-6xl text-white hidden drop-shadow-[0_0_20px_rgba(102,0,255,1)]"
      >
        Grupo
      </h1>
    </header>
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
            La junta es el órgano encargado de la administración y dirección del grupo, responsable de planificar, coordinar y supervisar las actividades de NOVA, asegurando el cumplimiento de sus objetivos y su alineación con la misión y visión, mientras promueve un trabajo organizado, estratégico y orientado al impacto.
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
      { label: "Presidente", img: "/dept-Presidente-2023.png" },
      { label: "Vice presidente", img: "/dept-VicePresidente-2023.png" },
      { label: "RRPP", img: "/dept-rrpp-2023.png" },
      { label: "Gestión Humana", img: "/dept-GH-2023.png" },
      { label: "Communities", img: "/dept-Comms-2023.png" },
      { label: "Mercadeo", img: "/dept-mercadeo-2023.png" },
    ],
  },
  {
    año: "2024",
    imgAño: "/año-2024.png",
    departamentos: [
      { label: "Presidente", img: "/dept-Presidente-2024.png" },
      { label: "Vice presidente", img: "/dept-VicePresidente-2024.png" },
      { label: "RRPP", img: "/dept-rrpp-2024.png" },
      { label: "Gestión Humana", img: "/dept-GH-2024.png" },
      { label: "Communities", img: "/dept-Comms-2024.png" },
      { label: "Mercadeo", img: "/dept-mercadeo-2024.png" },
    ],
  },
  {
    año: "2025",
    imgAño: "/año-2025.png", // por si se quiere usar la imagen del año en vez del svg fijo
    departamentos: [
      { label: "Presidente", img: "/dept-Presidente-2025.png" },
      { label: "Vice presidente", img: "/dept-VicePresidente-2025.png" },
      { label: "RRPP", img: "/dept-rrpp-2025.png" },
      { label: "Gestión Humana", img: "/dept-GH-2025.png" },
      { label: "Communities", img: "/dept-Comms-2025.png" },
      { label: "Mercadeo", img: "/dept-mercadeo-2025.png" },
    ],
  },
  {
    año: "2026",
    imgAño: "/año-2026.png",
    departamentos: [
      { label: "Presidente", img: "/dept-Presidente-2026.png" },
      { label: "Vice presidente", img: "/dept-VicePresidente-2026.png" },
      { label: "RRPP", img: "/dept-rrpp-2026.png" },
      { label: "Gestión Humana", img: "/dept-GH-2026.png" },
      { label: "Communities", img: "/dept-Comms-2026.png" },
      { label: "Mercadeo", img: "/dept-mercadeo-2026.png" },
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

// ─────────────────────────────────────────────
// Data de departamentos
// ─────────────────────────────────────────────
const DEPARTAMENTOS = [
  {
    titulo: "COMMS",
    descripcion: "El departamento distintivo de NOVA, creado para lograr conexiones con distintas comunidades y entidades enfocadas al aprendizaje y la enseñanza de las nuevas tecnologías. Aquí, estudiantes de cualquier carrera pueden aprender de forma práctica o guiada sobre el mundo digital, obteniendo los conocimientos y habilidades informáticas utilizadas en el ámbito laboral.",
    stickerSrc: "/Ajolote_COMM 1.svg",
    stickerPos: "top-left" as const,
  },
  {
    titulo: "RRPP",
    descripcion: "Un departamento enfocado en conectar a las personas, acercarnos al entorno y las organizaciones, planear grandes eventos y expandir la visión de NOVA. Su principal objetivo es acercar el mundo digital a la comunidad eafitense mediante alianzas con diversas instituciones y empresas.",
    stickerSrc: "/Tiburon_RRPP 1.svg",
    stickerPos: "top-right" as const,
  },
  {
    titulo: "MERCADEO",
    descripcion: "Un departamento para la creatividad, la innovación, la divulgación y la comunicación. Mercadeo es un equipo lleno de talento en constante aprendizaje que busca compartir el mensaje de NOVA con los eafitenses, por medio de las redes sociales y las estrategias de marketing.",
    stickerSrc: "/Pato_MERC (1).svg",
    stickerPos: "top-left" as const,
  },
  {
    titulo: "GH",
    descripcion: "Un departamento que se encarga de reafirmar nuestro propósito de ser grupo estudiantil: NOVA es de estudiantes para estudiantes. Desde Gestión Humana se desarrollan proyectos que buscan el bienestar de los integrantes del grupo, por medio de la comunicación, formación y desarrollo de las personas.",
    stickerSrc: "/Capi_GH 1.svg",
    stickerPos: "bottom-right" as const,
  },
];

// lista de áreas — diseño en código puro
function GrupoAreas() {
  return (
    <section className="grupo-areas" style={{ width: "100%" }}>
      <div className="grupo-areas__inner">
        {/* Contenedor principal con borde y dot-grid */}
        <div className="grupo-areas__box">
          {DEPARTAMENTOS.map((dept, i) => (
            <div
              key={i}
              className={`grupo-areas__row${i < DEPARTAMENTOS.length - 1 ? " grupo-areas__row--border" : ""}`}
            >
              {/* Sticker esquina superior izquierda */}
              {dept.stickerPos === "top-left" && (
                <img
                  src={dept.stickerSrc}
                  alt=""
                  className="grupo-areas__sticker grupo-areas__sticker--tl"
                  onError={(e) => { e.currentTarget.style.display = "none"; }}
                />
              )}
              {/* Sticker esquina superior derecha */}
              {dept.stickerPos === "top-right" && (
                <img
                  src={dept.stickerSrc}
                  alt=""
                  className="grupo-areas__sticker grupo-areas__sticker--tr"
                  onError={(e) => { e.currentTarget.style.display = "none"; }}
                />
              )}
              {/* Sticker esquina inferior derecha */}
              {dept.stickerPos === "bottom-right" && (
                <img
                  src={dept.stickerSrc}
                  alt=""
                  className="grupo-areas__sticker grupo-areas__sticker--br"
                  onError={(e) => { e.currentTarget.style.display = "none"; }}
                />
              )}

              <div className="grupo-areas__row-content">
                <h2 className="grupo-areas__titulo">{dept.titulo}</h2>
                <p className={`${jetMono.className} grupo-areas__desc`}>
                  {dept.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>
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

  /* ── Junta ── */

  .grupo-junta {
    background: transparent;
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
    background: transparent;
    padding: 4rem 1.5rem 4rem;
    overflow: visible;
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
    background: transparent;
    padding: 2rem 1.5rem 5rem;
    width: 100%;
  }

  .grupo-areas__inner {
    max-width: 680px;
    width: 100%;
    margin: 0 auto;
  }

  /* Caja con borde y fondo oscuro de puntos */
  .grupo-areas__box {
    border: 2px solid rgba(242, 243, 251, 0.5);
    border-radius: 24px;
    overflow: hidden;
    background-color: #120027;
    background-image: radial-gradient(circle, rgba(255,255,255,0.18) 1.5px, transparent 1.5px);
    background-size: 18px 18px;
  }

  /* Cada fila de departamento */
  .grupo-areas__row {
    position: relative;
    min-height: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem 7rem;
  }

  .grupo-areas__row--border {
    border-bottom: 2px solid rgba(242, 243, 251, 0.45);
  }

  /* Contenido centrado */
  .grupo-areas__row-content {
    text-align: center;
    z-index: 1;
  }

  .grupo-areas__titulo {
    font-size: clamp(1.4rem, 3.5vw, 2rem);
    font-weight: 800;
    color: #F2F3FB;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-bottom: 0.75rem;
  }

  .grupo-areas__desc {
    font-size: clamp(0.78rem, 1.6vw, 1rem);
    color: #b09ad0;
    line-height: 1.75;
    max-width: 420px;
    margin: 0 auto;
  }

  /* Stickers */
  .grupo-areas__sticker {
    position: absolute;
    width: clamp(110px, 18vw, 170px);
    height: auto;
    object-fit: contain;
    pointer-events: none;
    z-index: 2;
  }

  .grupo-areas__sticker--tl {
    top: -10px;
    left: -15px;
  }

  .grupo-areas__sticker--tr {
    top: -10px;
    right: -15px;
  }

  .grupo-areas__sticker--br {
    bottom: -10px;
    right: -15px;
  }

  @media (max-width: 640px) {
    .grupo-areas__row {
      padding: 1.5rem 5rem;
      min-height: 130px;
    }
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
      <style>{styles}</style>
      <GrupoHero />
      <GrupoJunta />
      <GrupoStats />
      <GrupoAreas />
    </div>
  );
}