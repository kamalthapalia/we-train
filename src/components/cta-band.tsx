import Link from "next/link";
import { ArrowUpRight, btn } from "@/components/ui";
import { site } from "@/lib/site";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-brown text-bone">
      <div
        aria-hidden="true"
        className="noise pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-soft-light"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-40 h-[32rem] w-[32rem] rounded-full bg-amber/25 blur-[110px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:items-end">
          <div>
            <p className="flex items-center gap-2.5 font-mono text-[10.5px] uppercase tracking-[0.22em] text-amber">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber" />
              Admissions open · new batch every month
            </p>
            <h2 className="mt-6 font-display text-[clamp(2.6rem,6vw,4.8rem)] leading-[0.95] tracking-[-0.02em]">
              Come learn the craft{" "}
              <em className="italic text-amber">properly.</em>
            </h2>
          </div>

          <div className="lg:pb-2">
            <p className="max-w-sm text-sm leading-relaxed text-bone/70">
              Seats are limited to keep the batches small. Message us on
              WhatsApp with the course you want and we will share the next
              start date, fees and what to bring.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className={btn.bone}
              >
                Reserve a seat
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <Link href="/#skills" className={btn.outlineLight}>
                Browse courses
              </Link>
            </div>
            <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.18em] text-bone/45">
              Or walk in · {site.hours}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
