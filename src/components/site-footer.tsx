import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@/components/ui";
import { site, skills } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-bone">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_0.9fr_1.1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="relative h-14 w-14 shrink-0">
                <Image
                  src="/images/logo.webp"
                  alt="We Train You"
                  fill
                  sizes="56px"
                  className="object-contain mix-blend-multiply"
                />
              </span>
              <div className="leading-none">
                <p className="text-sm font-semibold uppercase tracking-[0.16em]">
                  We Train You
                </p>
                <p className="mt-1.5 font-mono text-[9px] uppercase tracking-[0.24em] text-ink/70">
                  Coffee &amp; Skill Academy
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-ink/70">
              Practical, hands-on training in barista skills, bakery, bubble tea
              and hospitality — with placement support when you are ready.
            </p>
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.18em] text-copper transition-colors hover:text-brown"
            >
              Facebook
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/70">
              Explore
            </p>
            <ul className="mt-5 space-y-3 text-sm text-ink/75">
              <li>
                <Link href="/" className="transition-colors hover:text-copper">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#skills"
                  className="transition-colors hover:text-copper"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="transition-colors hover:text-copper"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="transition-colors hover:text-copper"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/#visit"
                  className="transition-colors hover:text-copper"
                >
                  Visit us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/70">
              Skills
            </p>
            <ul className="mt-5 space-y-3 text-sm text-ink/75">
              {skills.map((skill) => (
                <li key={skill.slug}>
                  <Link
                    href={`/skills/${skill.slug}`}
                    className="transition-colors hover:text-copper"
                  >
                    {skill.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/70">
              Visit
            </p>
            <address className="mt-5 space-y-1 text-sm not-italic leading-relaxed text-ink/75">
              <p>Birtamode-5, Shanischare Road</p>
              <p>Near Nepal Bank, Jhapa</p>
            </address>
            <div className="mt-4 space-y-1 text-sm text-ink/75">
              {site.phones.map((phone) => (
                <p key={phone}>
                  <a
                    href={`tel:+977${phone}`}
                    className="transition-colors hover:text-copper"
                  >
                    {phone}
                  </a>
                </p>
              ))}
            </div>
            <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-ink/70">
              {site.hours}
            </p>
          </div>
        </div>

        <div className="mt-16 overflow-hidden">
          <p
            aria-hidden="true"
            className="select-none whitespace-nowrap font-display text-[12vw] leading-[0.78] tracking-[-0.03em] text-brown/[0.09]"
          >
            We Train You
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-line pt-6 text-[11px] text-ink/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 We Train You. All rights reserved.</p>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em]">
            Empowering your potential
          </p>
        </div>
      </div>
    </footer>
  );
}
