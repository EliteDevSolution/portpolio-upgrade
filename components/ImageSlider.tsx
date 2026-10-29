"use client";

import { useEffect, useRef, useState, type PointerEvent } from "react";
import { Fancybox } from "./Fancybox";

export function ImageSlider({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [paused, setPaused] = useState(false);
  const startX = useRef<number | null>(null);
  const count = images.length;

  useEffect(() => {
    if (count < 2 || open || paused) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % count);
    }, 4200);
    return () => window.clearInterval(id);
  }, [count, open, paused]);

  function go(next: number) {
    if (count < 2) return;
    setIndex((next + count) % count);
  }

  function onPointerDown(event: PointerEvent<HTMLDivElement>) {
    startX.current = event.clientX;
  }

  function onPointerUp(event: PointerEvent<HTMLDivElement>) {
    if (startX.current == null) return;
    const delta = event.clientX - startX.current;
    startX.current = null;
    if (delta > 40) go(index - 1);
    else if (delta < -40) go(index + 1);
    else setOpen(true);
  }

  if (count === 0) return null;

  return (
    <div
      className="relative mb-8"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="overflow-hidden rounded-2xl border border-[var(--line)] bg-white shadow-sm"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
      >
        <div
          className="slider-track flex"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((src, imageIndex) => (
            <button
              key={src}
              type="button"
              className="w-full shrink-0 cursor-zoom-in"
              tabIndex={imageIndex === index ? 0 : -1}
              aria-hidden={imageIndex === index ? undefined : true}
              aria-label={`Zoom ${title} figure ${imageIndex + 1}`}
              onClick={() => setOpen(true)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={`${title} figure ${imageIndex + 1}`}
                draggable={false}
                className="aspect-[16/10] w-full bg-white object-contain object-center"
              />
            </button>
          ))}
        </div>
      </div>

      {count > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous figure"
            onClick={() => go(index - 1)}
            className="absolute top-1/2 left-3 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-lg text-neutral-900 shadow"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Next figure"
            onClick={() => go(index + 1)}
            className="absolute top-1/2 right-3 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-lg text-neutral-900 shadow"
          >
            ›
          </button>
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5 rounded-full bg-black/35 px-2 py-1.5">
            {images.map((src, dotIndex) => (
              <button
                key={src}
                type="button"
                aria-label={`Show figure ${dotIndex + 1}`}
                onClick={() => setIndex(dotIndex)}
                className={`size-2 rounded-full ${
                  dotIndex === index ? "bg-white" : "bg-white/45"
                }`}
              />
            ))}
          </div>
        </>
      )}
      {open && (
        <Fancybox
          images={images}
          index={index}
          title={title}
          onClose={() => setOpen(false)}
          onIndex={setIndex}
        />
      )}
    </div>
  );
}
