"use client";

import { useState } from "react";
import { Fancybox } from "./Fancybox";

export function Gallery({ images, title }: { images: string[]; title: string }) {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const current = images[index];
  if (!current) return null;

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Zoom ${title}`}
        className="block w-full cursor-zoom-in overflow-hidden rounded-2xl border border-[var(--line)] bg-white"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={current}
          alt={`${title} screenshot ${index + 1}`}
          className="aspect-[16/9] w-full object-cover object-top"
        />
      </button>
      {images.length > 1 && (
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          {images.map((image, imageIndex) => (
            <button
              key={image}
              type="button"
              onClick={() => setIndex(imageIndex)}
              aria-label={`Show image ${imageIndex + 1}`}
              aria-pressed={imageIndex === index}
              className={`h-16 w-24 shrink-0 overflow-hidden rounded-lg border ${
                imageIndex === index
                  ? "border-[var(--fg)]"
                  : "border-[var(--line)] opacity-70"
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={image} alt="" className="size-full object-cover object-top" />
            </button>
          ))}
        </div>
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
