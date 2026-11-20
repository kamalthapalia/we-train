"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "@/components/ui";
import { site } from "@/lib/site";

const nav = [
  { href: "/#skills", label: "Skills" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hash, setHash] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const syncHash = () => setHash(window.location.hash);
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href.startsWith("/#")
      ? pathname === "/" && hash === href.slice(1)
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open
          ? "border-b border-line/80 bg-bone/85 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="relative z-50 mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="relative h-11 w-11 shrink-0">
            <Image
              src="/images/logo.webp"
              alt="We Train You"
              fill
              sizes="44px"
              priority
              className="object-contain mix-blend-multiply"
            />
          </span>
          <span className="hidden leading-none sm:block">
            <span className="block text-[12.5px] font-bold uppercase tracking-[0.16em]">
              We Train You
            </span>
            <span className="mt-1 block font-mono text-[9px] uppercase tracking-[0.24em] text-ink/65">
              Coffee &amp; Skill Academy
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {nav.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`group relative py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors ${
                  active ? "text-brown" : "text-ink/70 hover:text-ink"
                }`}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 bottom-0 h-[2px] origin-left bg-copper transition-transform duration-300 ${
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-10 items-center gap-2 rounded-full bg-brown px-5 text-[13px] font-semibold text-bone transition-colors hover:bg-copper sm:inline-flex"
          >
            Book a seat
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 md:hidden"
          >
            <span className="sr-only">Menu</span>
            <span
              className={`absolute h-px w-4 bg-ink transition-transform duration-300 ${
                open ? "rotate-45" : "-translate-y-1"
              }`}
            />
            <span
              className={`absolute h-px w-4 bg-ink transition-transform duration-300 ${
                open ? "-rotate-45" : "translate-y-1"
              }`}
            />
          </button>
        </div>
      </div>
      </header>

      {/* Sliding drawer from the right on small screens */}
      <div
        className={`fixed inset-0 z-40 md:hidden ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
        inert={!open}
      >
        <button
          type="button"
          tabIndex={-1}
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className={`absolute inset-0 cursor-default bg-ink/45 transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />

        <div
          style={{ transform: open ? "translateX(0)" : "translateX(100%)" }}
          className="absolute inset-y-0 right-0 flex w-[88%] max-w-sm flex-col border-l border-line bg-bone px-5 pb-8 pt-24 shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
        >
          <nav className="flex flex-col divide-y divide-line" aria-label="Mobile">
            {nav.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className="flex items-center justify-between py-4 font-display text-[clamp(1.4rem,5vw,1.9rem)] leading-none"
                >
                  <span className="flex items-center gap-3">
                    {item.label}
                    {active && (
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-copper" />
                    )}
                  </span>
                  <ArrowUpRight
                    className={`h-5 w-5 ${active ? "text-copper" : "text-ink/45"}`}
                  />
                </Link>
              );
            })}
          </nav>

          <p className="mt-8 font-mono text-[9.5px] uppercase tracking-[0.18em] text-ink/70">
            {site.address}
          </p>

          <div className="mt-auto flex flex-col gap-3 pt-8">
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brown text-sm font-semibold text-bone"
            >
              Book a seat
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={`tel:+977${site.phones[0]}`}
              onClick={() => setOpen(false)}
              className="inline-flex h-12 items-center justify-center rounded-full border border-ink/15 text-sm font-semibold"
            >
              Call {site.phones[0]}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
