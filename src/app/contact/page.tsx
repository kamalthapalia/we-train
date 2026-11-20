import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { ContactForm } from "@/components/contact-form";
import { LocationMap } from "@/components/location-map";
import { Reveal } from "@/components/reveal";
import { ArrowUpRight, Eyebrow, btn } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Visit We Train You on Shanischare Road, Birtamode-5, near Nepal Bank. Call, message on WhatsApp or send an enquiry about a course.",
};

const rows = [
  { label: "Address", value: site.address },
  { label: "Class hours", value: `${site.hours} · ${site.hoursNote}` },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-12 pt-32 sm:pt-36">
        <div aria-hidden="true" className="hero-grid absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <Eyebrow>Contact · Birtamode-5</Eyebrow>
            <h1 className="mt-6 max-w-3xl text-balance font-display text-[clamp(2.4rem,6vw,4.8rem)] leading-[0.94] tracking-[-0.03em]">
              Come and see the{" "}
              <span className="italic text-copper">floor.</span>
            </h1>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-ink/75 sm:text-base">
              Two minutes from Nepal Bank on Shanischare Road. Walk in during
              class hours to watch a session, or send an enquiry and we will
              reply with the next start date, fees and what to bring.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <Reveal>
              <ContactForm />
            </Reveal>

            <Reveal delay={100}>
              <div>
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-ink/70">
                  The details
                </p>

                <dl className="mt-5 divide-y divide-line border-y border-line">
                  {rows.map((row) => (
                    <div
                      key={row.label}
                      className="grid gap-1 py-4 sm:grid-cols-[8rem_1fr] sm:gap-4"
                    >
                      <dt className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-ink/70">
                        {row.label}
                      </dt>
                      <dd className="text-[14.5px] leading-relaxed text-ink/75">
                        {row.value}
                      </dd>
                    </div>
                  ))}

                  <div className="grid gap-1 py-4 sm:grid-cols-[8rem_1fr] sm:gap-4">
                    <dt className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-ink/70">
                      Call
                    </dt>
                    <dd className="flex flex-wrap gap-x-4 gap-y-1 text-[14.5px] text-ink/75">
                      {site.phones.map((phone) => (
                        <a
                          key={phone}
                          href={`tel:+977${phone}`}
                          className="tabular-nums transition-colors hover:text-copper"
                        >
                          {phone}
                        </a>
                      ))}
                    </dd>
                  </div>

                  <div className="grid gap-1 py-4 sm:grid-cols-[8rem_1fr] sm:gap-4">
                    <dt className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-ink/70">
                      Online
                    </dt>
                    <dd className="flex flex-wrap gap-x-5 gap-y-2 text-[14.5px] text-ink/75">
                      <a
                        href={site.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 transition-colors hover:text-copper"
                      >
                        Facebook
                        <ArrowUpRight className="h-3 w-3" />
                      </a>
                      <a
                        href={site.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 transition-colors hover:text-copper"
                      >
                        WhatsApp
                        <ArrowUpRight className="h-3 w-3" />
                      </a>
                    </dd>
                  </div>
                </dl>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={site.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={btn.solid}
                  >
                    Get directions
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a
                    href={`tel:+977${site.phones[0]}`}
                    className={btn.ghost}
                  >
                    Call the studio
                  </a>
                </div>

                <div className="mt-10">
                  <LocationMap />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
