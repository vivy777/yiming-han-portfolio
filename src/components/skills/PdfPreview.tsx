"use client";

import { useEffect, useState } from "react";

interface PdfPreviewProps {
  title: string;
  pdfPath: string;
}

export default function PdfPreview({ title, pdfPath }: PdfPreviewProps) {
  const [imgUrl, setImgUrl] = useState<string | null>(null);
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function render() {
      const pdfjsLib = await import("pdfjs-dist");
      pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

      const pdf = await pdfjsLib.getDocument(pdfPath).promise;
      const page = await pdf.getPage(1);
      if (cancelled) return;

      const canvas = document.createElement("canvas");
      const vp = page.getViewport({ scale: 1.5 });
      canvas.width = vp.width;
      canvas.height = vp.height;
      await page.render({ canvasContext: canvas.getContext("2d")!, viewport: vp }).promise;

      if (!cancelled) setImgUrl(canvas.toDataURL());
    }

    render();
    return () => { cancelled = true; };
  }, [pdfPath]);

  useEffect(() => {
    if (!zoomed) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setZoomed(false); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [zoomed]);

  return (
    <>
      {imgUrl ? (
        <img
          src={imgUrl}
          alt={title}
          onClick={() => setZoomed(true)}
          className="w-full rounded cursor-zoom-in hover:opacity-90 transition-opacity"
        />
      ) : (
        <div className="h-48 flex items-center justify-center text-neutral-500 text-sm animate-pulse">
          Loading…
        </div>
      )}

      {zoomed && imgUrl && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setZoomed(false)}
        >
          <button
            className="absolute top-4 right-5 text-neutral-400 hover:text-neutral-100 text-2xl font-mono transition-colors"
            onClick={() => setZoomed(false)}
            aria-label="Close"
          >
            ✕
          </button>
          <img
            src={imgUrl}
            alt={title}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl border border-neutral-700 cursor-zoom-out"
          />
        </div>
      )}
    </>
  );
}
