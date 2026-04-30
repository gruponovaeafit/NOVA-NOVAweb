"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";

/* ------------------------------------------------------------------ */
/*  Props                                                              */
/* ------------------------------------------------------------------ */
export interface CarouselProps {
  /** Array of image sources (URLs or paths from /public) */
  images: string[];
  /** Alt text prefix – each slide gets `${altPrefix} ${index}` */
  altPrefix?: string;
  /** Milliseconds between auto-advances (0 = disabled). Default 4000 */
  autoPlayMs?: number;
  /** Whether to show the purple dot-grid background. Default true */
  showDotGrid?: boolean;
  /** Whether to show the purple glow behind the cards. Default true */
  showGlow?: boolean;
  /** Extra Tailwind classes on the outermost wrapper */
  className?: string;
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */
export default function Carousel({
  images,
  altPrefix = "Slide",
  autoPlayMs = 4000,
  showDotGrid = true,
  showGlow = true,
  className = "",
}: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  /* helpers */
  const len = images.length;
  const getIdx = useCallback(
    (offset: number) => (current + offset + len) % len,
    [current, len],
  );

  const next = useCallback(() => setCurrent((p) => (p + 1) % len), [len]);
  const prev = useCallback(
    () => setCurrent((p) => (p - 1 + len) % len),
    [len],
  );

  /* ---- auto-play ---- */
  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (autoPlayMs > 0) {
      timerRef.current = setInterval(next, autoPlayMs);
    }
  }, [autoPlayMs, next]);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetTimer]);

  /* clicking arrows resets the timer so we don't skip instantly */
  const handlePrev = () => {
    prev();
    resetTimer();
  };
  const handleNext = () => {
    next();
    resetTimer();
  };

  /* nothing to show */
  if (len === 0) return null;

  /* ---- render ---- */
  return (
    <div
      className={`relative flex items-center w-full justify-center max-w-[1300px] lg:max-w-[1600px] mx-auto px-2 sm:px-8 ${className}`}
    >
      {/* ◀ prev */}
      <button
        className="absolute left-2 sm:left-4 md:left-8 w-10 h-10 md:w-[50px] md:h-[50px] lg:w-[64px] lg:h-[64px] rounded-full bg-white flex items-center justify-center cursor-pointer top-1/2 -translate-y-1/2 z-[10] shadow-[0_4px_15px_rgba(0,0,0,0.4)] transition-all hover:scale-110 border-none"
        onClick={handlePrev}
        aria-label="Anterior"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="black"
          strokeWidth="3"
          className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      {/* track area */}
      <div
        className={`relative flex gap-[20px] py-[20px] px-[10px] sm:py-[30px] sm:px-[30px] md:py-[40px] md:px-[50px] lg:gap-[40px] lg:py-[50px] lg:px-[60px] items-center justify-center w-full max-w-[1400px] lg:max-w-[1800px] overflow-hidden`}
        style={
          showDotGrid
            ? {
                WebkitMaskImage:
                  "radial-gradient(circle, black 40%, rgba(0,0,0,0.5) 70%, transparent 95%)",
                maskImage:
                  "radial-gradient(circle, black 40%, rgba(0,0,0,0.5) 70%, transparent 95%)",
              }
            : undefined
        }
      >
        {/* purple glow */}
        {showGlow && (
          <div
            className="absolute w-[200px] h-[150px] sm:w-[300px] sm:h-[200px] md:w-[400px] md:h-[250px] lg:w-[600px] lg:h-[350px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1]"
            style={{
              background: "rgba(102, 0, 255, 0.5)",
              filter: "blur(100px)",
            }}
          />
        )}

        {/* slides */}
        <div className="flex gap-4 sm:gap-6 md:gap-[40px] lg:gap-[60px] items-center">
          {[-1, 0, 1].map((offset) => {
            const idx = getIdx(offset);
            const isCenter = offset === 0;

            return (
              <div
                key={offset}
                className={`
                  relative bg-[#1e1e2e] rounded-xl border border-white/10 overflow-hidden flex items-center justify-center transition-all duration-400 ease-in-out
                  ${
                    isCenter
                      ? "w-[200px] h-[260px] sm:w-[240px] sm:h-[320px] md:w-[280px] md:h-[380px] lg:w-[360px] lg:h-[460px] scale-110 md:scale-115 z-[4] shadow-[0_0_40px_rgba(102,0,255,0.5)] border-white/30"
                      : "w-[140px] h-[180px] sm:w-[180px] sm:h-[240px] md:w-[240px] md:h-[320px] lg:w-[300px] lg:h-[380px] opacity-60 scale-[0.85] cursor-pointer hidden sm:flex"
                  }
                `}
                onClick={() => {
                  if (offset === -1) handlePrev();
                  if (offset === 1) handleNext();
                }}
              >
                <img
                  src={images[idx]}
                  alt={`${altPrefix} ${idx + 1}`}
                  className="w-full h-full object-cover transition-opacity duration-300 ease-in-out"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* ▶ next */}
      <button
        className="absolute right-2 sm:right-4 md:right-8 w-10 h-10 md:w-[50px] md:h-[50px] lg:w-[64px] lg:h-[64px] rounded-full bg-white flex items-center justify-center cursor-pointer top-1/2 -translate-y-1/2 z-[10] shadow-[0_4px_15px_rgba(0,0,0,0.4)] transition-all hover:scale-110 border-none"
        onClick={handleNext}
        aria-label="Siguiente"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="black"
          strokeWidth="3"
          className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </div>
  );
}
