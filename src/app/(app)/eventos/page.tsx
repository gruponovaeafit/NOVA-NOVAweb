"use client";
import React, { useEffect, useState } from 'react';
import { Press_Start_2P, JetBrains_Mono } from 'next/font/google';

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




  const styles = {
    // CAMBIO CLAVE: Eliminamos overflowX y minHeight forzado para que no compita con el body
    main: { 
      backgroundColor: '#120027', 
      width: '100%',
      margin: 0,
      padding: 0,
      display: 'block' // Asegura que se comporte como un contenedor normal
    },
    hero: { 
      position: 'relative' as const, 
      padding: '100px 20px', 
      textAlign: 'center' as const, 
      display: 'flex', 
      flexDirection: 'column' as const, 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '400px',
      overflow: 'hidden' // El recorte del brillo se queda solo en el hero
    },
    titleLightBox: { 
      position: 'absolute' as const, 
      top: '50%', 
      left: '50%', 
      transform: 'translate(-50%, -50%)', 
      width: '450px', 
      height: '180px', 
      background: 'rgba(102, 0, 255, 0.85)', 
      filter: 'blur(60px)', 
      borderRadius: '50%', 
      zIndex: 1 
    },
    cardWrapper: {
      position: 'relative' as const,
      margin: '100px auto',
      maxWidth: '1200px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    dotsOverlay: {
      position: 'absolute' as const,
      top: '-50%',
      left: '-20%',
      right: '-20%',
      bottom: '-50%',
      backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1.5px, transparent 1.5px)',
      backgroundSize: '25px 25px',
      WebkitMaskImage: 'radial-gradient(circle, black 30%, rgba(0,0,0,0.4) 50%, transparent 75%)',
      maskImage: 'radial-gradient(circle, black 30%, rgba(0,0,0,0.4) 50%, transparent 75%)',
      zIndex: 0,
    },
    card: { 
      display: 'flex', 
      flexWrap: 'wrap' as const, 
      borderRadius: '16px', 
      border: '1px solid rgba(255,255,255,0.15)', 
      backgroundColor: 'rgba(10,0,26,0.95)', 
      width: '950px', 
      position: 'relative' as const, 
      zIndex: 2, 
      boxShadow: '0 20px 50px rgba(0,0,0,0.8)', 
      overflow: 'hidden' 
    },
    pixelTitle: { 
      fontSize: '22px', 
      marginBottom: '20px', 
      color: 'white', 
      filter: 'drop-shadow(0 0 10px rgba(102, 0, 255, 1))' 
    },
    imageContainer: { 
      width: '100%', 
      maxWidth: '450px', 
      height: '350px', 
      backgroundColor: '#0f0f12', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center' 
    },
    textContainer: { 
      flex: 1, 
      padding: '50px', 
      textAlign: 'center' as const, 
      color: 'white', 
      display: 'flex', 
      flexDirection: 'column' as const, 
      justifyContent: 'center' 
    }
  };

  return (
    <main style={styles.main}>
      <header style={styles.hero as any}>
        <div style={styles.titleLightBox}></div>
        <img src="/Eventos.png" alt="Eventos" style={{ maxWidth: '600px', position: 'relative' as const, zIndex: 2 }} />
      </header>

      {/* boxSizing asegura que el padding no "infle" el contenedor hacia los lados */}
      <section style={{ padding: '20px', position: 'relative' as const, boxSizing: 'border-box', overflow: 'hidden' }}>



      {/* LOOP FOR EVENTS FROM PAYLOAD */}

      {/* TODO: make event cards image/text col order intercalable */}
        
      {events?.docs && Array.isArray(events.docs) && events.docs.map((event, index) => (
        <div key={index} style={styles.cardWrapper as any}>
          <div style={styles.dotsOverlay as any}></div>
          <div style={styles.card as any}>
            <div style={styles.imageContainer as any}>
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#3f3f46" strokeWidth="1">
                <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M21 15l-5-5L5 21"/>
              </svg>
            </div>
            <div style={styles.textContainer as any}>
              <h2 className={pixelFont.className} style={styles.pixelTitle as any}>{event.eventTitle}</h2>
              <p style={{ fontSize: '15px', color: '#cbd5e1', lineHeight: '1.6' }}>
                {event.eventDescription}
              </p>
            </div>
          </div>
        </div>
      ))}


        {/* Hard coded event cards */}

        {/*

        <div style={styles.cardWrapper as any}>
          <div style={styles.dotsOverlay as any}></div>
          <div style={styles.card as any}>
            <div style={styles.imageContainer as any}>
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#3f3f46" strokeWidth="1">
                <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M21 15l-5-5L5 21"/>
              </svg>
            </div>
            <div style={styles.textContainer as any}>
              <h2 className={pixelFont.className} style={styles.pixelTitle as any}>Omega Hack</h2>
              <p className={jetBrainsFont.className} style={{ fontSize: '15px', color: '#cbd5e1', lineHeight: '1.6', marginBottom: '20px' }}>
                Participa en el evento multidisciplinario más grande del Valle de Aburrá.
              </p>
              <a href="https://www.omegahack.com/" target="_blank" rel="noopener noreferrer" className={jetBrainsFont.className} style={{ padding: '12px 24px', backgroundColor: '#6600ff', color: 'white', borderRadius: '8px', textDecoration: 'none', display: 'inline-block', alignSelf: 'center', fontWeight: 'bold', border: '1px solid #7a1cff' }}>
                Conoce más
              </a>
            </div>
          </div>
        </div>

        <div style={styles.cardWrapper as any}>
          <div style={styles.dotsOverlay as any}></div>
          <div style={styles.card as any}>
            <div style={styles.textContainer as any}>
              <h2 className={pixelFont.className} style={styles.pixelTitle as any}>Next</h2>
              <p className={jetBrainsFont.className} style={{ fontSize: '15px', color: '#cbd5e1', lineHeight: '1.6', marginBottom: '20px' }}>
                Explora las fronteras de la tecnología en nuestro próximo evento.
              </p>
              <div className={jetBrainsFont.className} style={{ padding: '12px 24px', backgroundColor: 'rgba(255,255,255,0.05)', color: '#888', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', cursor: 'not-allowed', display: 'inline-block', alignSelf: 'center', fontWeight: 'bold' }}>
                Próximamente
              </div>
            </div>
            <div style={styles.imageContainer as any}>
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#3f3f46" strokeWidth="1">
                <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M21 15l-5-5L5 21"/>
              </svg>
            </div>
          </div>
        </div>
        */}


      </section>
    </main>
  );
}