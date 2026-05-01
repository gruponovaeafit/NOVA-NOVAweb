"use client";
import React, { useEffect, useState } from 'react';
import { Press_Start_2P, JetBrains_Mono } from 'next/font/google';
import "../styles/eventos.css";

const pixelFont = Press_Start_2P({ weight: '400', subsets: ['latin'], display: 'swap' });
const jetBrainsFont = JetBrains_Mono({ subsets: ['latin'], display: 'swap' });

interface Event {
  eventTitle: string;
  eventDescription: string;
  eventImage?: {
    url: string;
    alt: string;
  };
}

export default function EventosPage() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/api/eventos');
        const data = await response.json();
        if (data.docs) {
          setEvents(data.docs);
        }
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

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

      <section style={{ padding: '20px', position: 'relative', boxSizing: 'border-box', overflow: 'hidden' }}>
        {events.length > 0 ? (
          events.map((event, index) => (
            <div key={index} className="eventos-card-wrapper">
              <div className="eventos-card">
                <div className="eventos-image-container">
                  {event.eventImage?.url ? (
                    <img 
                      src={event.eventImage.url} 
                      alt={event.eventImage.alt || event.eventTitle} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  ) : (
                    <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#3f3f46" strokeWidth="1">
                      <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M21 15l-5-5L5 21"/>
                    </svg>
                  )}
                </div>
                <div className="eventos-text-container">
                  <h2 className={`${pixelFont.className} eventos-pixel-title`}>{event.eventTitle}</h2>
                  <p className={`${jetBrainsFont.className} eventos-description`}>
                    {event.eventDescription}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className={`${jetBrainsFont.className} text-center text-slate-400 mt-10`}>
            No hay eventos disponibles en este momento.
          </p>
        )}
      </section>
    </main>
  );
}
