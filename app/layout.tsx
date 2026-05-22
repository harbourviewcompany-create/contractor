import type { Metadata } from "next";
import "./globals.css";
import { MobileCtaBar } from "@/components/mobile-cta-bar";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: {
    default: "Vail Renovations | Renovation Help Without the Runaround",
    template: "%s | Vail Renovations"
  },
  description:
    "Vail Renovations helps Ottawa homeowners start repairs, updates and renovation projects with one clear point of contact and practical scope guidance.",
  metadataBase: new URL("https://vail-renovations.netlify.app"),
  openGraph: {
    title: "Vail Renovations",
    description: "Renovation help without the runaround.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
        <MobileCtaBar />
      </body>
    </html>
  );
}
