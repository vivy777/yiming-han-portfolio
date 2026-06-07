"use client";

import { useCallback, useEffect, useState } from "react";

interface PhotoGalleryProps {
  photos: string[];
}

export default function PhotoGallery({ photos }: PhotoGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const prev = useCallback(
    () => setActiveIndex((i) => (i !== null ? (i - 1 + photos.length) % photos.length : null)),
    [photos.length]
  );
  const next = useCallback(
    () => setActiveIndex((i) => (i !== null ? (i + 1) % photos.length : null)),
    [photos.length]
  );

  useEffect(() => {
    if (activeIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [activeIndex, next, prev]);

  return (
    <>
      <div className="flex gap-2 overflow-x-auto mb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {photos.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            onClick={() => setActiveIndex(i)}
            className="h-36 w-auto rounded flex-shrink-0 object-cover border border-neutral-700 cursor-zoom-in hover:border-neutral-500 transition-colors"
          />
        ))}
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setActiveIndex(null)}
        >
          {/* Close */}
          <button
            className="absolute top-4 right-5 text-neutral-400 hover:text-neutral-100 text-2xl font-mono transition-colors"
            onClick={() => setActiveIndex(null)}
            aria-label="Close"
          >
            ✕
          </button>

          {/* Prev */}
          {photos.length > 1 && (
            <button
              className="absolute left-4 text-neutral-400 hover:text-neutral-100 text-3xl font-mono transition-colors px-2 py-4"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Previous"
            >
              ‹
            </button>
          )}

          {/* Image */}
          <img
            src={photos[activeIndex]}
            alt=""
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] max-w-[80vw] rounded-lg shadow-2xl border border-neutral-700 cursor-zoom-out"
          />

          {/* Next */}
          {photos.length > 1 && (
            <button
              className="absolute right-4 text-neutral-400 hover:text-neutral-100 text-3xl font-mono transition-colors px-2 py-4"
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Next"
            >
              ›
            </button>
          )}

          {/* Counter */}
          <p className="absolute bottom-4 text-neutral-500 text-xs font-mono">
            {activeIndex + 1} / {photos.length}
          </p>
        </div>
      )}
    </>
  );
}
