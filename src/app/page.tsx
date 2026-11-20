import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { Marquee } from "@/components/marquee";
import { CtaBand } from "@/components/cta-band";
import { ArrowUpRight, Asterisk, Eyebrow, btn } from "@/components/ui";
import { LocationMap } from "@/components/location-map";
import { gallery, site, skills, stats, testimonials } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pb-14 pt-28 sm:pt-32 lg:pb-20 lg:pt-36">
        <div aria-hidden="true" className="hero-grid absolute inset-0" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-24 h-[30rem] w-[30rem] rounded-full bg-cloud/80 blur-[90px]"
        />
        <div
          aria-hidden="true"
          className="noise pointer-events-none absolute inset-0 opacity-[0.35] mix-blend-multiply"
        />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid items-end gap-10 sm:gap-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-14 xl:gap-20">
            <div className="max-w-[44rem] text-center lg:text-left">
              <Reveal>
                <Eyebrow className="justify-center lg:justify-start">
                  Birtamode-5, Jhapa · Since 2019
                </Eyebrow>
              </Reveal>

              <Reveal delay={90}>
                <h1 className="mx-auto mt-6 max-w-[17ch] text-balance font-display text-[clamp(2.3rem,5.4vw,5rem)] leading-[0.95] tracking-[-0.035em] lg:mx-0">
                  A craft you can <em className="italic text-copper">hold</em> in
                  your hands.
                </h1>
              </Reveal>

              <Reveal delay={170}>
                <p className="mx-auto mt-6 max-w-[42ch] text-[0.95rem] leading-[1.7] text-ink/75 sm:text-base lg:mx-0 lg:text-[1.02rem]">
                  Hands-on training in barista, bakery, bubble tea and
                  hospitality — small batches, real equipment, job-ready skills.
                </p>
              </Reveal>

              <Reveal delay={240}>
                <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center lg:justify-start">
                  <a
                    href={site.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={btn.solid}
                  >
                    Reserve a seat
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <Link href="/#skills" className={btn.ghost}>
                    See the courses
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={310}>
                <div className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 border-t border-line pt-5 font-mono text-[10px] uppercase tracking-[0.18em] text-ink/70 lg:justify-start">
                  <span>Barista</span>
                  <Asterisk className="h-2.5 w-2.5 text-amber" />
                  <span>Bakery</span>
                  <Asterisk className="h-2.5 w-2.5 text-amber" />
                  <span>Bubble tea</span>
                  <Asterisk className="h-2.5 w-2.5 text-amber" />
                  <span>Hospitality</span>
                </div>
              </Reveal>
            </div>

            <Reveal
              delay={160}
              className="relative w-full lg:max-w-[30rem] lg:justify-self-end xl:max-w-[32rem]"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.75rem] bg-cloud sm:aspect-[5/6] lg:aspect-[4/5]">
                <Image
                  src="/images/hero-barista.jpg"
                  alt="Barista pouring latte art into a ceramic cup at the training bar"
                  fill
                  priority
                  sizes="(min-width: 1024px) 32rem, 92vw"
                  className="object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-brown/60 via-transparent to-transparent"
                />
                <div className="absolute inset-x-4 bottom-4 flex flex-wrap items-end justify-between gap-x-4 gap-y-1 text-bone">
                  <p className="font-mono text-[9.5px] font-semibold uppercase tracking-[0.18em]">
                    In session · Barista bar
                  </p>
                  <p className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-bone/75">
                    Dec 2026 intake · 12 seats
                  </p>
                </div>
              </div>

              <div className="absolute -left-5 top-8 hidden h-24 w-24 items-center justify-center rounded-full border border-brown/15 bg-bone/85 backdrop-blur sm:flex lg:-left-8">
                <svg
                  viewBox="0 0 100 100"
                  className="absolute inset-0 h-full w-full animate-[spin_28s_linear_infinite]"
                  aria-hidden="true"
                >
                  <defs>
                    <path
                      id="hero-badge"
                      d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0"
                    />
                  </defs>
                  <text className="fill-brown font-mono text-[8px] uppercase tracking-[0.3em]">
                    <textPath href="#hero-badge">
                      We Train You · Birtamode · Est. 2019 ·
                    </textPath>
                  </text>
                </svg>
                <Asterisk className="h-6 w-6 text-copper" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Marquee />

      {/* Stats */}
      <section className="relative border-b border-line bg-cloud/45">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-14">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <Eyebrow>By the numbers</Eyebrow>
            <p className="max-w-sm text-sm leading-relaxed text-ink/70 sm:text-right">
              Trained here, now working across Jhapa, Damak, Bhadrapur and
              beyond.
            </p>
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 70} className="bg-cloud/55">
                <div className="flex h-full min-w-0 flex-col justify-between gap-6 p-5 sm:p-6 lg:p-8">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink/65">
                    {stat.label}
                  </dt>
                  <dd className="font-display text-[clamp(2rem,7vw,3.75rem)] leading-[0.9] tracking-[-0.03em] tabular-nums">
                    {stat.value}
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div>
            <Eyebrow>Inside the studio</Eyebrow>
            <h2 className="mt-5 max-w-md font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.02] tracking-[-0.02em]">
              A working classroom,
              <span className="block italic text-copper">not a lecture hall.</span>
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {gallery.slice(0, 4).map((item, i) => (
              <Reveal key={item.src} delay={i * 60}>
                <Link
                  href="/gallery"
                  className="group relative block aspect-[3/4] overflow-hidden bg-cloud"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 24vw, 50vw"
                    className="object-cover transition-opacity duration-500 group-hover:opacity-90"
                  />
                  <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brown/75 to-transparent p-3 pt-12 font-mono text-[9.5px] uppercase tracking-[0.16em] text-bone opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    {item.caption}
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-6 flex justify-start sm:justify-end">
            <Link
              href="/gallery"
              className="group inline-flex items-center gap-2 border-b border-ink/20 pb-1 font-mono text-[10.5px] font-semibold uppercase tracking-[0.18em] text-ink/75 transition-colors hover:border-copper hover:text-copper"
            >
              View all images
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="scroll-mt-24 border-y border-line bg-cloud/40 py-20 sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-6 md:grid-cols-[1fr_minmax(0,26rem)] md:items-end">
            <div>
              <Eyebrow>What we teach</Eyebrow>
              <h2 className="mt-5 font-display text-[clamp(2rem,4.4vw,3.6rem)] leading-[1] tracking-[-0.02em]">
                Four crafts.
                <span className="block italic text-copper">One standard.</span>
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-ink/70">
              Every programme is hands-on from the first day. No long
              theoretical warm-ups — you are on the machine, at the bench or on
              the floor, with an instructor beside you.
            </p>
          </div>

          <div className="mt-12 border-t border-line">
            {skills.map((skill, i) => (
              <Reveal key={skill.slug} delay={i * 50}>
                <Link
                  href={`/skills/${skill.slug}`}
                  className="group grid grid-cols-[auto_auto_1fr_auto] items-center gap-4 border-b border-line py-5 transition-colors hover:bg-bone/60 sm:gap-6 sm:py-6"
                >
                  <span className="w-5 font-mono text-[10.5px] text-ink/70">
                    {skill.index}
                  </span>

                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-cloud-deep sm:h-20 sm:w-20">
                    <Image
                      src={skill.image}
                      alt=""
                      fill
                      sizes="80px"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                  </div>

                  <div className="min-w-0">
                    <h3 className="font-display text-[clamp(1.35rem,2.6vw,2.1rem)] leading-[0.95] tracking-[-0.02em]">
                      {skill.name}
                    </h3>
                    <p className="mt-2 hidden max-w-xl text-[13.5px] leading-relaxed text-ink/70 sm:block">
                      {skill.short}
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="hidden whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.16em] text-ink/70 md:inline">
                      {skill.duration}
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 transition-colors duration-300 group-hover:border-brown group-hover:bg-brown group-hover:text-bone sm:h-11 sm:w-11">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Eyebrow>Student voices</Eyebrow>
              <h2 className="mt-5 max-w-lg font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.02] tracking-[-0.02em]">
                They came for a skill.
                <span className="block italic text-copper">
                  They left with a job.
                </span>
              </h2>
            </div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink/70">
              5,000+ students since 2019
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {testimonials.map((item, i) => (
              <Reveal key={item.name} delay={i * 80}>
                <figure className="flex h-full flex-col justify-between rounded-3xl border border-line bg-bone-deep/50 p-7">
                  <div>
                    <Asterisk className="h-5 w-5 text-amber" />
                    <blockquote className="mt-6 font-display text-[clamp(1.15rem,1.5vw,1.4rem)] leading-[1.35] tracking-[-0.01em] text-ink/90">
                      “{item.quote}”
                    </blockquote>
                  </div>
                  <figcaption className="mt-8 flex items-center gap-3 border-t border-line pt-5">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brown font-mono text-[11px] text-bone">
                      {item.name
                        .split(" ")
                        .map((part) => part[0])
                        .join("")}
                    </span>
                    <span>
                      <span className="block text-[13px] font-medium">
                        {item.name}
                      </span>
                      <span className="mt-0.5 block text-[11.5px] text-ink/65">
                        {item.role}
                      </span>
                      <span className="mt-1 block font-mono text-[9px] uppercase tracking-[0.14em] text-copper/80">
                        {item.course}
                      </span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section
        id="visit"
        className="scroll-mt-24 border-t border-line bg-cloud/40 py-20 sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <div>
              <Eyebrow>Find us</Eyebrow>
              <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.4rem)] leading-[1.02] tracking-[-0.02em]">
                Shanischare Road,
                <span className="block italic text-copper">Birtamode-5.</span>
              </h2>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-ink/70">
                Two minutes from Nepal Bank. Walk in during class hours to see
                a session, meet an instructor and taste what the current batch
                is making.
              </p>

              <dl className="mt-10 divide-y divide-line border-y border-line">
                <div className="grid grid-cols-[7.5rem_1fr] gap-4 py-4">
                  <dt className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-ink/70">
                    Address
                  </dt>
                  <dd className="text-sm text-ink/75">{site.address}</dd>
                </div>
                <div className="grid grid-cols-[7.5rem_1fr] gap-4 py-4">
                  <dt className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-ink/70">
                    Class hours
                  </dt>
                  <dd className="text-sm text-ink/75">
                    {site.hours}
                    <span className="block text-[12px] text-ink/70">
                      {site.hoursNote}
                    </span>
                  </dd>
                </div>
                <div className="grid grid-cols-[7.5rem_1fr] gap-4 py-4">
                  <dt className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-ink/70">
                    Call / WhatsApp
                  </dt>
                  <dd className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-ink/75">
                    {site.phones.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:+977${phone}`}
                        className="transition-colors hover:text-copper"
                      >
                        {phone}
                      </a>
                    ))}
                  </dd>
                </div>
              </dl>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={btn.ghost}
                >
                  Message us
                </a>
              </div>
            </div>

            <Reveal>
              <LocationMap className="aspect-[5/4] sm:aspect-[4/3]" />
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
