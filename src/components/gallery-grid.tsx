"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ArrowUpRight } from "@/components/ui";

type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
};

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const step = useCallback(
    (direction: number) =>
      setOpenIndex((current) =>
        current === null
          ? current
          : (current + direction + items.length) % items.length,
      ),
    [items.length],
  );

  useEffect(() => {
    if (openIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [openIndex, close, step]);

  const current = openIndex === null ? null : items[openIndex];

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {items.map((item, i) => (
          <figure key={item.src}>
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              aria-label={`View ${item.caption} full screen`}
              className="relative block aspect-[4/5] w-full overflow-hidden bg-cloud focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper sm:aspect-[4/5]"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
              <span className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full border border-bone/40 bg-brown/45 text-bone backdrop-blur">
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </button>
            <figcaption className="mt-3 flex items-center justify-between gap-4 font-mono text-[9.5px] uppercase tracking-[0.16em] text-ink/70">
              <span>{item.caption}</span>
              <span>{String(i + 1).padStart(2, "0")}</span>
            </figcaption>
          </figure>
        ))}
      </div>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.caption}
          className="fixed inset-0 z-[70] flex flex-col bg-ink/97 backdrop-blur-sm"
        >
          <div className="flex items-center justify-between gap-4 px-4 py-3 text-bone sm:px-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-bone/60">
              {String((openIndex ?? 0) + 1).padStart(2, "0")} /{" "}
              {String(items.length).padStart(2, "0")} · {current.caption}
            </p>
            <button
              type="button"
              onClick={close}
              className="flex h-10 items-center gap-2 rounded-full border border-bone/25 px-4 font-mono text-[10px] uppercase tracking-[0.18em] text-bone transition-colors hover:bg-bone/10"
            >
              Close
            </button>
          </div>

          <div className="relative flex-1">
            <Image
              src={current.src}
              alt={current.alt}
              fill
              sizes="100vw"
              className="object-contain p-3 sm:p-6"
              priority
            />
          </div>

          <div className="flex items-center justify-center gap-3 pb-5">
            <button
              type="button"
              onClick={() => step(-1)}
              className="flex h-11 items-center rounded-full border border-bone/25 px-5 font-mono text-[10px] uppercase tracking-[0.18em] text-bone transition-colors hover:bg-bone/10"
            >
              ← Prev
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              className="flex h-11 items-center rounded-full border border-bone/25 px-5 font-mono text-[10px] uppercase tracking-[0.18em] text-bone transition-colors hover:bg-bone/10"
            >
              Next →
            </button>
          </div>
        </div>
      )}
    </>
  );
}
