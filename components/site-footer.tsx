import Link from "next/link";
import { publicRoutes, serviceRoutes } from "@/lib/routes";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/10 bg-ink pb-24 pt-12 text-white lg:pb-12">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="text-lg font-bold">Vail Renovations</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-white/70">
            Renovation help without the runaround. Photos, budget and a complete scope are not required to start.
          </p>
          <p className="mt-4 text-sm text-white/60">Ottawa and surrounding areas.</p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-stone">Public routes</p>
          <div className="mt-4 grid gap-2 text-sm text-white/70">
            {publicRoutes.map((route) => (
              <Link key={route.href} href={route.href} className="hover:text-white">
                {route.label}
              </Link>
            ))}
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-stone">Service pages</p>
          <div className="mt-4 grid gap-2 text-sm text-white/70">
            {serviceRoutes.slice(0, 6).map((route) => (
              <Link key={route.href} href={route.href} className="hover:text-white">
                {route.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
