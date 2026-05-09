"use client";

import { useRef, useState, useCallback } from "react";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeLabel = "Vorher",
  afterLabel = "Nachher",
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(3, Math.min(97, pct)));
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = () => {
    isDragging.current = false;
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden rounded-2xl select-none touch-none cursor-ew-resize"
      style={{ aspectRatio: "3 / 4" }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      {/* Nachher-Bild (Hintergrund, vollständig) */}
      <img
        src={afterSrc}
        alt={afterLabel}
        className="absolute inset-0 w-full h-full object-cover object-top"
        draggable={false}
      />

      {/* Vorher-Bild (links, geclippt) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img
          src={beforeSrc}
          alt={beforeLabel}
          className="absolute inset-0 w-full h-full object-cover object-top"
          draggable={false}
        />
      </div>

      {/* Trennlinie */}
      <div
        className="absolute top-0 bottom-0 w-px bg-white/90 shadow-[0_0_12px_rgba(255,255,255,0.5)] pointer-events-none"
        style={{ left: `${position}%` }}
      />

      {/* Drag-Handle */}
      <div
        className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20"
        style={{ left: `${position}%` }}
      >
        <div className="w-11 h-11 rounded-full bg-white shadow-2xl flex items-center justify-center">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
            <path d="M7 11H15" stroke="#1a1a1a" strokeWidth="1.75" strokeLinecap="round" />
            <path d="M4 11L7 8M4 11L7 14" stroke="#1a1a1a" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18 11L15 8M18 11L15 14" stroke="#1a1a1a" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Label links (Vorher) */}
      <div className="absolute bottom-4 left-4 pointer-events-none z-10">
        <span className="text-xs font-semibold text-white bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
          {beforeLabel}
        </span>
      </div>

      {/* Label rechts (Nachher) */}
      <div className="absolute bottom-4 right-4 pointer-events-none z-10">
        <span className="text-xs font-semibold text-white bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
          {afterLabel}
        </span>
      </div>
    </div>
  );
}
