import type { Metadata } from "next";
import { Archivo, DM_Mono, Karla } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: {
    default: "We Train You — Coffee & Skill Academy, Birtamode",
    template: "%s · We Train You",
  },
  description:
    "Practical barista, bakery, bubble tea and hospitality training in Birtamode-5, Jhapa. Small batches, real machines, job placement support.",
  keywords: [
    "barista course Birtamode",
    "barista training Jhapa",
    "bakery course Nepal",
    "bubble tea training",
    "hospitality course Birtamode",
    "We Train You",
  ],
  openGraph: {
    title: "We Train You — Coffee & Skill Academy",
    description:
      "Barista, bakery, bubble tea and hospitality training in Birtamode, Jhapa. Empowering your potential.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${karla.variable} ${dmMono.variable} ${archivo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bone text-ink">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
