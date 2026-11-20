import type { ReactNode } from "react";

export function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export function Asterisk({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 2.5v19" />
      <path d="M3.8 7.2l16.4 9.6" />
      <path d="M20.2 7.2 3.8 16.8" />
    </svg>
  );
}

export function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`flex items-center gap-2.5 font-mono text-[10.5px] uppercase tracking-[0.22em] text-copper ${className}`}
    >
      <span className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
      {children}
    </p>
  );
}

export const btn = {
  solid:
    "inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brown px-6 text-sm font-medium text-bone transition-colors duration-300 hover:bg-copper",
  ghost:
    "inline-flex h-12 items-center justify-center gap-2 rounded-full border border-ink/15 px-6 text-sm font-medium text-ink transition-colors duration-300 hover:border-ink/40 hover:bg-ink/[0.03]",
  bone: "inline-flex h-12 items-center justify-center gap-2 rounded-full bg-bone px-6 text-sm font-medium text-brown transition-colors duration-300 hover:bg-white",
  outlineLight:
    "inline-flex h-12 items-center justify-center gap-2 rounded-full border border-bone/25 px-6 text-sm font-medium text-bone transition-colors duration-300 hover:border-bone/60 hover:bg-bone/10",
};
