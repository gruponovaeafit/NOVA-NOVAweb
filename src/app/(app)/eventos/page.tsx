"use client";
import React, { useEffect, useState } from 'react';
import { Press_Start_2P, JetBrains_Mono } from 'next/font/google';
import "../styles/eventos.css";

const pixelFont = Press_Start_2P({ weight: '400', subsets: ['latin'], display: 'swap' });
const jetBrainsFont = JetBrains_Mono({ subsets: ['latin'], display: 'swap' });

export default function EventosPage() {

  // set events to empty before fetching data, load after fetching
  const [events, setEvents] = React.useState<{ docs: any[] }>({ docs: [] });

  // useEffect to fetch data from payload
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/api/eventos');
        const data = await response.json();
        setEvents(data);
        if (process.env.NODE_ENV === 'development') {
          console.log('Fetched events:', data);
        }
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []); // Empty dependency array means this runs once on mount




  return (
    <main className="eventos-main">
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
      <header className="eventos-hero">
        <div className="eventos-title-lightbox"></div>
        <img src="/Eventos.png" alt="Eventos" style={{ maxWidth: '600px', position: 'relative', zIndex: 2 }} />
      </header>

      {/* boxSizing asegura que el padding no "infle" el contenedor hacia los lados */}
      <section style={{ padding: '20px', position: 'relative' as const, boxSizing: 'border-box', overflow: 'hidden' }}>



      {/* LOOP FOR EVENTS FROM PAYLOAD */}

      {/* TODO: make event cards image/text col order intercalable */}
        
      {events?.docs && Array.isArray(events.docs) && events.docs.map((event, index) => (
        <div key={index} className="eventos-card-wrapper">
          <div className="eventos-card">
            <div className="eventos-image-container">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#3f3f46" strokeWidth="1">
                <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M21 15l-5-5L5 21"/>
              </svg>
            </div>
            <div className="eventos-text-container">
              <h2 className={`${pixelFont.className} eventos-pixel-title`}>{event.eventTitle}</h2>
              <p className="eventos-description">
                {event.eventDescription}
              </p>
            </div>
          </div>
        </div>
      ))}


        {/* Hard coded event cards */}

      

        <div className="eventos-card-wrapper">
          <div className="eventos-card">
            <div className="eventos-image-container">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#3f3f46" strokeWidth="1">
                <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M21 15l-5-5L5 21"/>
              </svg>
            </div>
            <div className="eventos-text-container">
              <h2 className={`${pixelFont.className} eventos-pixel-title`}>Omega Hack</h2>
              <p className={jetBrainsFont.className} style={{ fontSize: '15px', color: '#cbd5e1', lineHeight: '1.6', marginBottom: '20px' }}>
                Participa en el evento multidisciplinario más grande del Valle de Aburrá.
              </p>
              <a href="https://www.omegahack.com/" target="_blank" rel="noopener noreferrer" className={jetBrainsFont.className} style={{ padding: '12px 24px', backgroundColor: '#6600ff', color: 'white', borderRadius: '8px', textDecoration: 'none', display: 'inline-block', alignSelf: 'center', fontWeight: 'bold', border: '1px solid #7a1cff' }}>
                Conoce más
              </a>
            </div>
          </div>
        </div>

        <div className="eventos-card-wrapper">
          <div className="eventos-card">
            <div className="eventos-text-container">
              <h2 className={`${pixelFont.className} eventos-pixel-title`}>Next</h2>
              <p className={jetBrainsFont.className} style={{ fontSize: '15px', color: '#cbd5e1', lineHeight: '1.6', marginBottom: '20px' }}>
                Explora las fronteras de la tecnología en nuestro próximo evento.
              </p>
              <div className={jetBrainsFont.className} style={{ padding: '12px 24px', backgroundColor: 'rgba(255,255,255,0.05)', color: '#888', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', cursor: 'not-allowed', display: 'inline-block', alignSelf: 'center', fontWeight: 'bold' }}>
                Próximamente
              </div>
            </div>
            <div className="eventos-image-container">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#3f3f46" strokeWidth="1">
                <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M21 15l-5-5L5 21"/>
              </svg>
            </div>
          </div>
        </div>



      </section>
    </main>
  );
}