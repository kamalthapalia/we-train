import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";
import { ArrowUpRight, Asterisk, Eyebrow, btn } from "@/components/ui";
import { site, skills } from "@/lib/site";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return skills.map((skill) => ({ slug: skill.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const skill = skills.find((item) => item.slug === slug);
  if (!skill) return { title: "Skill not found" };

  return {
    title: skill.name,
    description: skill.intro,
    openGraph: {
      title: `${skill.name} · We Train You`,
      description: skill.short,
      images: [{ url: skill.image }],
    },
  };
}

export default async function SkillPage({ params }: PageProps) {
  const { slug } = await params;
  const skill = skills.find((item) => item.slug === slug);
  if (!skill) notFound();

  const nextSkill =
    skills[(skills.findIndex((item) => item.slug === skill.slug) + 1) % skills.length];

  return (
    <>
      <section className="relative overflow-hidden pb-14 pt-28 sm:pt-32">
        <div aria-hidden="true" className="hero-grid absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ink/70"
            >
              <Link href="/" className="transition-colors hover:text-copper">
                Home
              </Link>
              <span aria-hidden="true">/</span>
              <Link
                href="/#skills"
                className="transition-colors hover:text-copper"
              >
                Skills
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-ink/75">{skill.shortName}</span>
            </nav>
          </Reveal>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-16">
            <div>
              <Reveal delay={60}>
                <Eyebrow>
                  {skill.index} · {skill.kicker}
                </Eyebrow>
                <h1 className="mt-6 max-w-[18ch] text-balance font-display text-[clamp(2.2rem,5.4vw,4.5rem)] leading-[0.95] tracking-[-0.03em]">
                  {skill.name}
                </h1>
              </Reveal>

              <Reveal delay={130}>
                <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-ink/75">
                  {skill.intro}
                </p>
              </Reveal>

              <Reveal delay={200}>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={site.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={btn.solid}
                  >
                    Enquire about this skill
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <Link href="#courses" className={btn.ghost}>
                    Courses &amp; fees
                  </Link>
                </div>
              </Reveal>
            </div>

            <Reveal delay={150}>
              <div className="relative aspect-[5/4] overflow-hidden rounded-[1.75rem] bg-cloud">
                <Image
                  src={skill.image}
                  alt={skill.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 44vw, 92vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Facts strip */}
      <section className="border-y border-line bg-cloud/45">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-7 px-5 py-8 sm:px-8 md:grid-cols-4">
          {[
            { label: "Duration", value: skill.duration },
            { label: "Courses", value: `${skill.courses.length} options` },
            { label: "Fees from", value: skill.from },
            { label: "Batch size", value: "Max 12" },
          ].map((fact, i) => (
            <div
              key={fact.label}
              className={`md:px-8 ${i > 0 ? "md:border-l md:border-line" : ""} ${
                i === 0 ? "md:pl-0" : ""
              }`}
            >
              <p className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-ink/70">
                {fact.label}
              </p>
              <p className="mt-2 font-display text-[clamp(1.05rem,1.6vw,1.35rem)] leading-none">
                {fact.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-6 md:grid-cols-[1fr_minmax(0,24rem)] md:items-end">
            <div>
              <Eyebrow>What you will learn</Eyebrow>
              <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.2rem)] leading-[1.02] tracking-[-0.02em]">
                The curriculum,
                <span className="block italic text-copper">in full.</span>
              </h2>
            </div>
            <ul className="space-y-2.5">
              {skill.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-ink/75"
                >
                  <Asterisk className="mt-0.5 h-3 w-3 shrink-0 text-amber" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {skill.modules.map((module, i) => (
              <Reveal key={module.title} delay={i * 80}>
                <div className="flex h-full flex-col rounded-3xl border border-line bg-bone-deep/40 p-7">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-copper">
                      0{i + 1}
                    </span>
                    <span className="h-px w-10 bg-line" />
                  </div>
                  <h3 className="mt-5 font-display text-[clamp(1.2rem,1.6vw,1.55rem)] leading-tight">
                    {module.title}
                  </h3>
                  <ul className="mt-5 space-y-3 border-t border-line pt-5">
                    {module.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-ink/70"
                      >
                        <span className="mt-[0.55em] h-1 w-1 shrink-0 rounded-full bg-copper/60" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section
        id="courses"
        className="scroll-mt-24 border-y border-line bg-cloud/40 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Eyebrow>Courses &amp; fees</Eyebrow>
              <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.2rem)] leading-[1.02] tracking-[-0.02em]">
                Choose your pace.
              </h2>
            </div>
            <p className="max-w-xs text-[13px] leading-relaxed text-ink/70">
              Fees include ingredients, machine time and certification. Pay in
              instalments if you need to.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            {skill.courses.map((course, i) => (
              <Reveal key={course.name} delay={i * 70}>
                <article className="rounded-3xl border border-line bg-bone p-6 sm:p-8">
                  <div className="grid gap-8 lg:grid-cols-[1fr_17rem]">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-cloud px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-ink/70">
                          {course.duration}
                        </span>
                        <span className="rounded-full border border-line px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-ink/65">
                          {course.level}
                        </span>
                      </div>

                      <h3 className="mt-4 text-balance font-display text-[clamp(1.5rem,2.6vw,2.1rem)] leading-[0.98] tracking-[-0.02em]">
                        {course.name}
                      </h3>
                      <p className="mt-4 max-w-xl text-[13.5px] leading-relaxed text-ink/70">
                        {course.summary}
                      </p>

                      <ul className="mt-6 grid gap-2 border-t border-line pt-5 sm:grid-cols-2">
                        {course.includes.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-[12.5px] leading-relaxed text-ink/70"
                          >
                            <span className="mt-[0.5em] h-1 w-1 shrink-0 rounded-full bg-amber" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col justify-between gap-5 border-t border-line pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                      <div>
                        <p className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-ink/70">
                          Course fee
                        </p>
                        <p className="mt-2 font-display text-[clamp(1.6rem,2.6vw,2.1rem)] leading-none text-brown">
                          {course.price}
                        </p>
                        <p className="mt-3 font-mono text-[9.5px] uppercase leading-relaxed tracking-[0.14em] text-ink/70">
                          {course.schedule}
                        </p>
                      </div>
                      <a
                        href={`https://wa.me/9779811347501?text=${encodeURIComponent(
                          `Namaste, I would like to join the ${course.name} course (${skill.shortName}) at We Train You.`,
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-brown px-5 text-[13px] font-medium text-bone transition-colors hover:bg-copper"
                      >
                        Enquire on WhatsApp
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <Eyebrow>Where this leads</Eyebrow>
              <h2 className="mt-5 max-w-sm font-display text-[clamp(2rem,4vw,3.2rem)] leading-[1.02] tracking-[-0.02em]">
                A skill that travels.
              </h2>
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink/70">
                Graduates from this programme work in cafés and hotels across
                eastern Nepal, and some have opened their own places. We keep a
                placement list and write references for students who complete
                the course.
              </p>
              <Link
                href="/#visit"
                className="mt-7 inline-flex items-center gap-2 border-b border-ink/20 pb-1 font-mono text-[10.5px] uppercase tracking-[0.18em] text-ink/75 transition-colors hover:border-copper hover:text-copper"
              >
                Talk to us in person
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {skill.outcomes.map((outcome, i) => (
                <Reveal key={outcome} delay={i * 60}>
                  <div className="flex h-full flex-col justify-between rounded-2xl border border-line bg-bone-deep/40 p-5">
                    <span className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-ink/50">
                      0{i + 1}
                    </span>
                    <p className="mt-8 text-[14px] leading-snug text-ink/75">
                      {outcome}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Next skill */}
      <section className="pb-20 sm:pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Link
            href={`/skills/${nextSkill.slug}`}
            className="group flex flex-col justify-between gap-6 rounded-3xl border border-line bg-cloud/50 p-7 transition-colors hover:bg-cloud/80 sm:flex-row sm:items-center sm:p-9"
          >
            <div className="flex items-center gap-5">
              <span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-cloud-deep">
                <Image
                  src={nextSkill.image}
                  alt=""
                  fill
                  sizes="64px"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </span>
              <div>
                <p className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-ink/70">
                  Next craft
                </p>
                <p className="mt-1.5 font-display text-[clamp(1.25rem,2vw,1.75rem)] leading-none">
                  {nextSkill.name}
                </p>
              </div>
            </div>
            <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-copper">
              Explore
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-copper/30 transition-colors group-hover:bg-brown group-hover:text-bone">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </span>
          </Link>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
