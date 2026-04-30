"use client";
import React from 'react';
import { Press_Start_2P, JetBrains_Mono } from 'next/font/google';
import Carousel from '../components/Carousel';

const pixelFont = Press_Start_2P({ weight: '400', subsets: ['latin'], display: 'swap' });
const jetBrainsFont = JetBrains_Mono({ subsets: ['latin'], display: 'swap' });

const fotos = [
  '/Fotos_grupo.jpg',
  '/Foto_assesment.JPG',
  '/Foto_integracion.JPG',
];

export default function NosotrosPage() {
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
        
        <Carousel images={fotos} altPrefix="Historia" autoPlayMs={5000} />
      </section>

      {/* 4. TEXTO ADICIONAL */}
      <section className="text-center py-[40px] px-5 flex flex-col items-center z-[2] relative mb-[40px]">
        <div className={`${jetBrainsFont.className} max-w-[650px] lg:max-w-[800px] text-slate-300 leading-relaxed text-sm md:text-base lg:text-lg px-4 flex flex-col gap-6`}>
          <p>
            <strong className="text-white font-bold">NOVA</strong> nació con la idea de crear un espacio donde estudiantes de diferentes carreras pudieran unirse para <strong className="text-white font-bold">innovar</strong> y construir soluciones juntos. Desde el inicio, buscamos formar una comunidad multidisciplinaria capaz de transformar ideas en <strong className="text-white font-bold">impacto real</strong>.
          </p>
          <p>
            Durante su creación recibimos el apoyo de estudiantes, profesores y directivos de la <strong className="text-white font-bold">Universidad EAFIT</strong>, así como la inspiración de líderes como <strong className="text-white font-bold">Claudia Restrepo</strong>, quien afirmó que <span className="text-white italic">&ldquo;el mundo no va hacia la estandarización, va hacia el algoritmo&rdquo;</span>.
          </p>
          <p>
            Después de este proceso, <strong className="text-white font-bold">NOVA</strong> fue aprobado como grupo estudiantil el <strong className="text-[#6600ff] font-bold">19 de octubre</strong>, marcando el inicio de una comunidad creada por estudiantes para impulsar la <strong className="text-white font-bold">innovación</strong> en el campus.
          </p>
        </div>
      </section>

    </div>
  );
}