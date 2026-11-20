import { Asterisk } from "@/components/ui";
import { marqueeWords } from "@/lib/site";

export function Marquee() {
  const row = [...marqueeWords, ...marqueeWords];

  return (
    <div className="marquee relative overflow-hidden border-y border-brown/30 bg-brown py-4 text-bone">
      <div className="marquee-track items-center gap-8 whitespace-nowrap">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            className="flex shrink-0 items-center gap-8"
            aria-hidden={copy === 1}
          >
            {row.map((word, i) => (
              <span key={`${copy}-${i}`} className="flex items-center gap-8">
                <span className="font-display text-[clamp(1.1rem,1.8vw,1.7rem)] leading-none tracking-tight">
                  {word}
                </span>
                <Asterisk className="h-3.5 w-3.5 shrink-0 text-amber" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
