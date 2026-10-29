"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export function Fancybox({
  images,
  index,
  title,
  onClose,
  onIndex,
}: {
  images: string[];
  index: number;
  title: string;
  onClose: () => void;
  onIndex: (index: number) => void;
}) {
  const count = images.length;
  const src = images[index];
  const onCloseRef = useRef(onClose);
  const onIndexRef = useRef(onIndex);
  onCloseRef.current = onClose;
  onIndexRef.current = onIndex;

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") onCloseRef.current();
      if (event.key === "ArrowRight") onIndexRef.current((index + 1) % count);
      if (event.key === "ArrowLeft") onIndexRef.current((index - 1 + count) % count);
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [count, index]);

  if (!src || typeof document === "undefined") return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={`${title} figure ${index + 1}`}
      onClick={onClose}
    >
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute top-4 right-4 flex size-10 items-center justify-center rounded-full bg-white/15 text-2xl text-white"
      >
        ×
      </button>
      {count > 1 && (
        <button
          type="button"
          aria-label="Previous figure"
          onClick={(event) => {
            event.stopPropagation();
            onIndex((index - 1 + count) % count);
          }}
          className="absolute top-1/2 left-4 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-2xl text-white"
        >
          ‹
        </button>
      )}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={`${title} figure ${index + 1}`}
        onClick={(event) => event.stopPropagation()}
        className="max-h-[86vh] max-w-[92vw] rounded-lg object-contain shadow-2xl"
      />
      {count > 1 && (
        <button
          type="button"
          aria-label="Next figure"
          onClick={(event) => {
            event.stopPropagation();
            onIndex((index + 1) % count);
          }}
          className="absolute top-1/2 right-4 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-2xl text-white"
        >
          ›
        </button>
      )}
      <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-white/80">
        {index + 1} / {count}
      </p>
    </div>,
    document.body,
  );
}
