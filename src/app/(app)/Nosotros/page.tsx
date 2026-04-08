"use client";
import React, { useState } from 'react';
import { Press_Start_2P, JetBrains_Mono } from 'next/font/google';

const pixelFont = Press_Start_2P({ weight: '400', subsets: ['latin'], display: 'swap' });
const jetBrainsFont = JetBrains_Mono({ subsets: ['latin'], display: 'swap' });

const fotos = [
  '/Fotos_grupo.jpg',
  '/Foto_assesment.JPG',
  '/Foto_integracion.JPG',
];

export default function NosotrosPage() {
  const [currentFoto, setCurrentFoto] = useState(0);

  const nextFoto = () => {
    setCurrentFoto((prev) => (prev === fotos.length - 1 ? 0 : prev + 1));
  };
  const prevFoto = () => {
    setCurrentFoto((prev) => (prev === 0 ? fotos.length - 1 : prev - 1));
  };

  const getIdx = (offset: number) => {
    return (currentFoto + offset + fotos.length) % fotos.length;
  };

  return (
    <div className="bg-[#120027] min-h-screen text-white m-0 p-0 overflow-x-hidden">
      
      {/* 1. HERO: Nosotros */}
      <header className="pt-[80px] px-5 pb-[40px] text-center flex flex-col items-center relative z-[2]">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[120px] md:w-[450px] md:h-[180px] lg:w-[600px] lg:h-[240px] rounded-full z-[1]"
          style={{ background: 'rgba(102, 0, 255, 0.85)', filter: 'blur(60px)' }}
        ></div>
        <img 
          src="/Nosotros.png" 
          alt="Nosotros Title" 
          className="w-full max-w-[300px] md:max-w-[500px] lg:max-w-[650px] relative z-[3]"
        />
      </header>

      {/* 2. SECCIÓN QUIÉNES SOMOS */}
      <section className="text-center py-[40px] px-5 flex flex-col items-center z-[2] relative">
        <div className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] bg-[#1e1e2e] rounded-[20px] border-2 border-white/10 flex items-center justify-center mb-[40px] overflow-hidden">
          <img src={fotos[0]} alt="Quienes somos" className="w-full h-full object-cover" />
        </div>
        <h2 className={`${pixelFont.className} text-xl md:text-2xl lg:text-3xl mb-[20px]`}>
          ¿Quienes somos?
        </h2>
        <div className={`${jetBrainsFont.className} max-w-[650px] lg:max-w-[800px] text-slate-300 leading-relaxed text-sm md:text-base lg:text-lg px-4 flex flex-col gap-6`}>
          <p>
            <strong className="text-white font-bold">NOVA</strong> es un grupo estudiantil de la <strong className="text-white font-bold">Universidad EAFIT</strong> creado por y para estudiantes que creen en el poder de la tecnología, la creatividad y la innovación para transformar realidades.
          </p>
          <p>
            Somos una comunidad multidisciplinaria donde estudiantes de distintas carreras se encuentran para aprender, crear y desarrollar ideas que generen <strong className="text-white font-bold">impacto</strong>. Creemos que cuando diferentes perspectivas se unen, es posible construir soluciones que realmente transformen nuestro entorno.
          </p>
          <p>
            Nuestro propósito es traer el futuro al campus mediante la creación de espacios, proyectos y eventos que conecten a los estudiantes con el mundo de la <strong className="text-white font-bold">innovación</strong>.
          </p>
        </div>
      </section>

      {/* 3. SECCIÓN NUESTRA HISTORIA Y CARRUSEL */}
      <section className="relative py-[60px] md:pt-[60px] md:pb-[100px] flex flex-col items-center z-[2]">
        <h2 className={`${pixelFont.className} text-2xl md:text-[32px] lg:text-[40px] mb-[20px] z-[5] text-center px-4`}>
          NUESTRA HISTORIA
        </h2>
        
        <div className="relative flex items-center w-full justify-center max-w-[1300px] lg:max-w-[1600px] mx-auto px-2 sm:px-8">
          <button 
            className="absolute left-2 sm:left-4 md:left-8 w-10 h-10 md:w-[50px] md:h-[50px] lg:w-[64px] lg:h-[64px] rounded-full bg-white flex items-center justify-center cursor-pointer top-1/2 -translate-y-1/2 z-[10] shadow-[0_4px_15px_rgba(0,0,0,0.4)] transition-all hover:scale-110"
            onClick={prevFoto}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8"><path d="M15 18l-6-6 6-6"/></svg>
          </button>

          <div 
            className="relative flex gap-[20px] py-[40px] px-[20px] sm:py-[60px] sm:px-[60px] md:py-[80px] md:px-[100px] lg:gap-[40px] lg:py-[100px] lg:px-[120px] items-center justify-center w-full max-w-[1400px] lg:max-w-[1800px] overflow-hidden"
            style={{
              backgroundImage: 'radial-gradient(circle, #3b82f6 1.2px, transparent 1.2px)',
              backgroundSize: '24px 24px',
              WebkitMaskImage: 'radial-gradient(circle, black 40%, rgba(0,0,0,0.5) 70%, transparent 95%)',
              maskImage: 'radial-gradient(circle, black 40%, rgba(0,0,0,0.5) 70%, transparent 95%)'
            }}
          >
            <div 
              className="absolute w-[300px] h-[200px] sm:w-[500px] sm:h-[300px] md:w-[600px] md:h-[350px] lg:w-[800px] lg:h-[450px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1]"
              style={{ background: 'rgba(102, 0, 255, 0.5)', filter: 'blur(100px)' }}
            ></div>
            
            <div className="flex gap-4 sm:gap-6 md:gap-[40px] lg:gap-[60px] items-center">
              {[-1, 0, 1].map((offset) => {
                const idx = getIdx(offset);
                const isCenter = offset === 0;

                return (
                  <div 
                    key={offset} 
                    className={`
                      relative w-fit h-fit rounded-xl border border-white/10 overflow-hidden flex items-center justify-center transition-all duration-300 ease-in-out bg-[#1e1e2e]
                      ${isCenter 
                        ? 'scale-110 md:scale-115 z-[4] shadow-[0_0_40px_rgba(102,0,255,0.5)] border-white/30' 
                        : 'opacity-60 scale-[0.85] cursor-pointer hidden sm:flex'
                      }
                    `}
                    onClick={() => {
                        if (offset === -1) prevFoto();
                        if (offset === 1) nextFoto();
                    }}
                  >
                    <img 
                      src={fotos[idx]} 
                      alt={`Historia ${idx}`} 
                      className={`
                        transition-opacity duration-300 ease-in-out object-cover rounded-xl
                        ${isCenter
                          ? 'h-[250px] sm:h-[350px] md:h-[420px] lg:h-[500px] w-auto max-w-[85vw]'
                          : 'h-[160px] sm:h-[250px] md:h-[320px] lg:h-[400px] w-auto max-w-[30vw]'
                        }
                      `}
                    />
                  </div>
                )
              })}
            </div>
            
          </div>

          <button 
            className="absolute right-2 sm:right-4 md:right-8 w-10 h-10 md:w-[50px] md:h-[50px] lg:w-[64px] lg:h-[64px] rounded-full bg-white flex items-center justify-center cursor-pointer top-1/2 -translate-y-1/2 z-[10] shadow-[0_4px_15px_rgba(0,0,0,0.4)] transition-all hover:scale-110"
            onClick={nextFoto}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
      </section>

      {/* 4. TEXTO ADICIONAL */}
      <section className="text-center py-[40px] px-5 flex flex-col items-center z-[2] relative mb-[40px]">
        <div className={`${jetBrainsFont.className} max-w-[650px] lg:max-w-[800px] text-slate-300 leading-relaxed text-sm md:text-base lg:text-lg px-4 flex flex-col gap-6`}>
          <p>
            <strong className="text-white font-bold">NOVA</strong> nació con la idea de crear un espacio donde estudiantes de diferentes carreras pudieran unirse para <strong className="text-white font-bold">innovar</strong> y construir soluciones juntos. Desde el inicio, buscamos formar una comunidad multidisciplinaria capaz de transformar ideas en <strong className="text-white font-bold">impacto real</strong>.
          </p>
          <p>
            Durante su creación recibimos el apoyo de estudiantes, profesores y directivos de la <strong className="text-white font-bold">Universidad EAFIT</strong>, así como la inspiración de líderes como <strong className="text-white font-bold">Claudia Restrepo</strong>, quien afirmó que <span className="text-white italic">“el mundo no va hacia la estandarización, va hacia el algoritmo”</span>.
          </p>
          <p>
            Después de este proceso, <strong className="text-white font-bold">NOVA</strong> fue aprobado como grupo estudiantil el <strong className="text-[#6600ff] font-bold">19 de octubre</strong>, marcando el inicio de una comunidad creada por estudiantes para impulsar la <strong className="text-white font-bold">innovación</strong> en el campus.
          </p>
        </div>
      </section>

    </div>
  );
}