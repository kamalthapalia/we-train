import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";
import { GalleryGrid } from "@/components/gallery-grid";
import { ArrowUpRight, Eyebrow } from "@/components/ui";
import { gallery } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos from the We Train You studio in Birtamode — barista practice, bakery benches, bubble tea bars and hospitality drills.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-12 pt-32 sm:pt-36">
        <div aria-hidden="true" className="hero-grid absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ink/65 transition-colors hover:text-copper"
            >
              <span aria-hidden="true">←</span> Back home
            </Link>
          </Reveal>

          <div className="mt-8 grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-end">
            <Reveal delay={60}>
              <Eyebrow>Gallery · {gallery.length} frames</Eyebrow>
                              <h1 className="mt-6 text-balance font-display text-[clamp(2.4rem,6vw,4.8rem)] leading-[0.94] tracking-[-0.03em]">
                Inside the
                <span className="block italic text-copper">studio.</span>
              </h1>
            </Reveal>
            <Reveal delay={130}>
              <p className="max-w-sm text-sm leading-relaxed text-ink/70 md:pb-2">
                No stock rooms, no staged smiles. This is the floor you will
                train on — the machines, the flour, the cups and the people
                learning beside you.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <GalleryGrid items={gallery} />

          <div className="mt-14 flex flex-col items-start justify-between gap-4 rounded-3xl border border-line bg-cloud/50 p-7 sm:flex-row sm:items-center">
            <div>
              <p className="font-display text-[clamp(1.3rem,2vw,1.6rem)] leading-tight">
                Want to see it in person?
              </p>
              <p className="mt-1.5 text-sm text-ink/70">
                Walk in any day between 8 AM and 5 PM — or message us first.
              </p>
            </div>
            <Link
              href="/#visit"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-brown px-5 text-sm font-medium text-bone transition-colors hover:bg-copper"
            >
              Find the studio
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
