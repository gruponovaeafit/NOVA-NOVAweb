"use client";
import React, { useEffect, useState } from 'react';
import { Press_Start_2P, JetBrains_Mono } from 'next/font/google';

const pixelFont = Press_Start_2P({ weight: '400', subsets: ['latin'], display: 'swap' });
const jetBrainsFont = JetBrains_Mono({ subsets: ['latin'], display: 'swap' });

interface Project {
  projectTitle: string;
  projectDescription: string;
  projectImage?: {
    url: string;
    alt: string;
  };
}

export default function ProyectosPage() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/proyectos');
        const data = await response.json();
        if (data.docs) {
          setProjects(data.docs);
        }
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="bg-[#120027] min-h-screen text-white m-0 p-0 relative overflow-hidden flex flex-col">
      {/* Fondo de puntos para toda la vista */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.2) 1.5px, transparent 1.5px)',
          backgroundSize: '30px 30px',
          WebkitMaskImage: 'radial-gradient(circle at center 30%, black 20%, rgba(0,0,0,0.5) 60%, transparent 100%)',
          maskImage: 'radial-gradient(circle at center 30%, black 20%, rgba(0,0,0,0.5) 60%, transparent 100%)'
        }}
      ></div>

      {/* Header: Title */}
      <header className="pt-[100px] px-5 pb-[60px] text-center flex flex-col items-center relative z-10 shrink-0">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[120px] md:w-[450px] md:h-[180px] lg:w-[600px] lg:h-[240px] rounded-full z-[-1]"
          style={{ background: 'rgba(102, 0, 255, 0.85)', filter: 'blur(60px)' }}
        ></div>
        <img 
          src="/Proyectos.png" 
          alt="Proyectos Title" 
          className="w-full max-w-[300px] md:max-w-[450px] lg:max-w-[550px]"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            const fallback = document.getElementById('title-fallback');
            if (fallback) fallback.style.display = 'block';
          }}
        />
        <h1 
          id="title-fallback" 
          className={`${pixelFont.className} text-3xl md:text-5xl lg:text-6xl text-white hidden drop-shadow-[0_0_20px_rgba(102,0,255,1)]`}
        >
          Proyectos
        </h1>
      </header>

      {/* Seccion de Cards */}
      <section className="relative z-10 flex flex-col items-center px-4 pb-[100px] gap-12 lg:gap-16 max-w-[1200px] mx-auto w-full flex-grow">
        {projects.length > 0 ? (
          projects.map((proj, idx) => (
            <div 
              key={idx}
              className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} w-full max-w-[850px] rounded-[24px] border border-white/20 bg-[#0a001a]/80 overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.6)] backdrop-blur-sm transition-transform duration-300 hover:scale-[1.02]`}
            >
              {/* Contenido de Imagen */}
              <div className="w-full lg:w-[40%] bg-[#3f3f3f] flex items-center justify-center min-h-[250px] lg:min-h-full shrink-0">
                {proj.projectImage?.url ? (
                  <img 
                    src={proj.projectImage.url} 
                    alt={proj.projectImage.alt || proj.projectTitle} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="p-12">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                      <circle cx="8.5" cy="8.5" r="1.5"></circle>
                      <polyline points="21 15 16 10 5 21"></polyline>
                    </svg>
                  </div>
                )}
              </div>
              
              {/* Contenido de Texto */}
              <div className="w-full lg:w-[60%] p-8 md:p-10 lg:p-12 flex flex-col justify-center items-center text-center">
                <h2 className={`${pixelFont.className} text-lg md:text-xl text-white mb-6 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]`}>
                  {proj.projectTitle}
                </h2>
                <p className={`${jetBrainsFont.className} text-xs md:text-sm text-slate-300 leading-[1.8] max-w-[400px]`}>
                  {proj.projectDescription}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className={`${jetBrainsFont.className} text-center text-slate-400 mt-10`}>
            No hay proyectos disponibles en este momento.
          </p>
        )}
      </section>
    </div>
  );
}
