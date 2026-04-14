"use client";
import React, { useState, useEffect } from 'react';

interface CarouselProps {
  images: string[];
  autoPlayInterval?: number;
}

export default function Carousel({ images, autoPlayInterval = 3000 }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextFoto = React.useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  const prevFoto = React.useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  useEffect(() => {
    if (!autoPlayInterval) return;
    const interval = setInterval(() => {
      nextFoto();
    }, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlayInterval, nextFoto]);

  if (!images || images.length === 0) return null;

  const getIdx = (offset: number) => {
    return (currentIndex + offset + images.length) % images.length;
  };

  return (
    <div className="relative flex items-center w-full justify-center max-w-[1200px] lg:max-w-[1400px] mx-auto px-12 sm:px-16 md:px-24 lg:px-32">
      <button 
        className="absolute left-1 sm:left-4 md:left-6 lg:left-10 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full bg-white flex items-center justify-center cursor-pointer top-1/2 -translate-y-1/2 z-[10] shadow-[0_4px_15px_rgba(0,0,0,0.4)] transition-all hover:scale-110"
        onClick={prevFoto}
        aria-label="Previous image"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" className="w-5 h-5 md:w-6 md:h-6"><path d="M15 18l-6-6 6-6"/></svg>
      </button>

      <div 
        className="relative flex gap-4 sm:gap-6 md:gap-10 lg:gap-14 py-8 sm:py-12 md:py-16 lg:py-20 items-center justify-center w-full overflow-hidden"
      >
        <div 
          className="absolute w-[200px] h-[150px] sm:w-[350px] sm:h-[200px] md:w-[450px] md:h-[300px] lg:w-[600px] lg:h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1]"
          style={{ background: 'rgba(102, 0, 255, 0.4)', filter: 'blur(80px)' }}
        ></div>
        
        <div className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-center">
          {[-1, 0, 1].map((offset) => {
            const idx = getIdx(offset);
            const isCenter = offset === 0;

            return (
              <div 
                key={offset} 
                className={`
                  relative w-fit h-fit rounded-xl border border-white/10 overflow-hidden flex items-center justify-center transition-all duration-300 ease-in-out bg-[#1e1e2e]
                  ${isCenter 
                    ? 'scale-[1.05] md:scale-110 z-[4] shadow-[0_0_30px_rgba(102,0,255,0.4)] border-white/30' 
                    : 'opacity-60 scale-[0.85] md:scale-[0.8] cursor-pointer hidden sm:flex'
                  }
                `}
                onClick={() => {
                    if (offset === -1) prevFoto();
                    if (offset === 1) nextFoto();
                }}
              >
                <img 
                  src={images[idx]} 
                  alt={`Carrusel ${idx}`} 
                  className={`
                    transition-opacity duration-300 ease-in-out object-cover rounded-xl
                    ${isCenter
                      ? 'h-[200px] sm:h-[260px] md:h-[340px] lg:h-[420px] w-auto max-w-[80vw] sm:max-w-[55vw]'
                      : 'h-[140px] sm:h-[180px] md:h-[240px] lg:h-[300px] w-auto max-w-[25vw] md:max-w-[20vw]'
                    }
                  `}
                />
              </div>
            )
          })}
        </div>
      </div>

      <button 
        className="absolute right-1 sm:right-4 md:right-6 lg:right-10 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full bg-white flex items-center justify-center cursor-pointer top-1/2 -translate-y-1/2 z-[10] shadow-[0_4px_15px_rgba(0,0,0,0.4)] transition-all hover:scale-110"
        onClick={nextFoto}
        aria-label="Next image"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" className="w-5 h-5 md:w-6 md:h-6"><path d="M9 18l6-6-6-6"/></svg>
      </button>
    </div>
  );
}
