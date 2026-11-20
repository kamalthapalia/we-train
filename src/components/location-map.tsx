import { ArrowUpRight, Asterisk } from "@/components/ui";
import { site } from "@/lib/site";

export function LocationMap({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-line bg-cloud ${className}`}
    >
      <div aria-hidden="true" className="map-grid absolute inset-0" />

      {/* Stylised streets */}
      <div
        aria-hidden="true"
        className="absolute left-[-10%] right-[-10%] top-[42%] h-4 -rotate-[4deg] bg-bone shadow-[0_0_0_1px_rgba(74,30,13,0.07)]"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[-10%] left-[58%] top-[-10%] w-4 rotate-[7deg] bg-bone shadow-[0_0_0_1px_rgba(74,30,13,0.07)]"
      />
      <div
        aria-hidden="true"
        className="absolute left-[16%] top-0 h-[42%] w-2.5 bg-bone/80"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-[12%] h-[26%] w-[22%] rounded-t-lg border border-brown/10 bg-bone/40"
      />
      <div
        aria-hidden="true"
        className="absolute right-[8%] top-[10%] h-[24%] w-[20%] rounded-lg border border-brown/10 bg-bone/40"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[22%] right-[10%] h-[14%] w-[16%] bg-brown/[0.05]"
      />

      {/* Pin */}
      <div className="absolute left-[54%] top-[46%] -translate-x-1/2 -translate-y-1/2">
        <div className="absolute left-1/2 top-1/2 -z-10 h-20 w-20 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-amber/20 [animation-duration:2.8s]" />
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-bone bg-brown text-bone shadow-lg shadow-brown/20">
          <Asterisk className="h-5 w-5" />
        </div>
        <div className="absolute left-1/2 top-[-4.4rem] w-max -translate-x-1/2 rounded-xl border border-line bg-bone/90 px-3 py-2 text-center backdrop-blur">
          <p className="text-[12px] font-semibold leading-none">We Train You</p>
          <p className="mt-1.5 font-mono text-[8.5px] uppercase tracking-[0.16em] text-ink/65">
            Near Nepal Bank
          </p>
        </div>
      </div>

      <div className="absolute bottom-4 left-4 rounded-full border border-line bg-bone/85 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-ink/70 backdrop-blur">
        26.63° N · 87.99° E
      </div>
      <a
        href={site.maps}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-bone/90 px-3.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-brown backdrop-blur transition-colors hover:bg-bone"
      >
        Open in Maps
        <ArrowUpRight className="h-3 w-3" />
      </a>
    </div>
  );
}
