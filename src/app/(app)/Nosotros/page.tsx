import React from 'react';
import { Press_Start_2P } from 'next/font/google';

const pixelFont = Press_Start_2P({ weight: '400', subsets: ['latin'], display: 'swap' });

export default function NosotrosPage() {
  const styles = {
    wrapper: { 
      backgroundColor: '#020212', 
      minHeight: '100vh', 
      color: 'white', 
      margin: 0, 
      padding: 0,
      overflowX: 'hidden' as const
    },
    
    // --- 1. HERO (Nosotros) ---
    heroHeader: {
      padding: '80px 20px 40px',
      textAlign: 'center' as const,
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
      position: 'relative' as const,
      zIndex: 2,
    },
    headerLightBox: {
      position: 'absolute' as const,
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '450px',
      height: '180px',
      background: 'rgba(102, 0, 255, 0.85)',
      filter: 'blur(60px)',
      borderRadius: '50%',
      zIndex: 1,
    },

    // --- 2. QUIÉNES SOMOS ---
    quienesSomosSection: {
      textAlign: 'center' as const,
      padding: '40px 20px',
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
      zIndex: 2,
      position: 'relative' as const,
    },
    imagePlaceholder: {
      width: '300px',
      height: '300px',
      backgroundColor: '#1e1e2e',
      borderRadius: '20px',
      border: '2px solid rgba(255,255,255,0.1)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '30px'
    },

    // --- 3. CARRUSEL (Nuestra Historia) ---
    carouselSection: {
      position: 'relative' as const,
      padding: '60px 0 100px',
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
      zIndex: 2,
    },
    dotsGridContainer: {
      position: 'relative' as const,
      display: 'flex',
      gap: '20px',
      padding: '80px 100px',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundImage: 'radial-gradient(circle, #3b82f6 1.2px, transparent 1.2px)',
      backgroundSize: '24px 24px',
      WebkitMaskImage: 'radial-gradient(circle, black 40%, rgba(0,0,0,0.5) 70%, transparent 95%)',
      maskImage: 'radial-gradient(circle, black 40%, rgba(0,0,0,0.5) 70%, transparent 95%)',
    },
    purpleGlowOverlay: {
      position: 'absolute' as const,
      width: '600px',
      height: '350px',
      background: 'rgba(102, 0, 255, 0.5)',
      filter: 'blur(100px)',
      zIndex: -1,
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
    miniCard: {
      width: '260px',
      height: '340px',
      backgroundColor: '#ffffff',
      borderRadius: '2px',
      position: 'relative' as const,
      zIndex: 3,
      border: '1px solid #cbd5e1',
      backgroundImage: `
        linear-gradient(to top right, transparent calc(50% - 1px), #f1f5f9 50%, transparent calc(50% + 1px)),
        linear-gradient(to top left, transparent calc(50% - 1px), #f1f5f9 50%, transparent calc(50% + 1px))
      `,
    },
    arrowBtn: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      backgroundColor: 'white',
      border: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      position: 'absolute' as const,
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 10,
    }
  };

  return (
    <div style={styles.wrapper as any}>
      
      {/* 1. HERO: Nosotros */}
      <header style={styles.heroHeader as any}>
        <div style={styles.headerLightBox}></div>
        <img 
          src="/Nosotros.png" 
          alt="Nosotros Title" 
          style={{ maxWidth: '500px', position: 'relative', zIndex: 3 }} 
        />
      </header>

      {/* 2. SECCIÓN QUIÉNES SOMOS */}
      <section style={styles.quienesSomosSection as any}>
        <div style={styles.imagePlaceholder}>
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" opacity="0.5">
            <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M21 15l-5-5L5 21"/>
          </svg>
        </div>
        <h2 className={pixelFont.className} style={{ fontSize: '24px', marginBottom: '20px' }}>
          ¿Quienes somos?
        </h2>
        <p style={{ maxWidth: '650px', color: '#cbd5e1', lineHeight: '1.6', fontSize: '14px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </section>

      {/* 3. SECCIÓN NUESTRA HISTORIA Y CARRUSEL */}
      <section style={styles.carouselSection as any}>
        <h2 className={pixelFont.className} style={{ fontSize: '32px', marginBottom: '-20px', zIndex: 5 }}>
          NUESTRA HISTORIA
        </h2>
        
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center' }}>
          <button style={{ ...styles.arrowBtn, left: '10%' } as any}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
          </button>

          <div style={styles.dotsGridContainer as any}>
            <div style={styles.purpleGlowOverlay as any}></div>
            <div style={styles.miniCard as any}></div>
            <div style={styles.miniCard as any}></div>
            <div style={styles.miniCard as any}></div>
          </div>

          <button style={{ ...styles.arrowBtn, right: '10%' } as any}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
      </section>

    </div>
  );
}