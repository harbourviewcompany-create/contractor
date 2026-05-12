import Link from "next/link";
import { publicRoutes } from "@/lib/routes";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-oatmeal/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4" aria-label="Primary navigation">
        <Link href="/" className="leading-tight">
          <span className="block text-base font-bold tracking-tight text-forest">Vail Renovations</span>
          <span className="block text-xs text-ink/60">Renovation help without the runaround.</span>
        </Link>

        <div className="hidden items-center gap-6 text-sm font-medium text-ink/75 lg:flex">
          {publicRoutes.map((route) => (
            <Link key={route.href} href={route.href} className="transition hover:text-forest">
              {route.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/project-request" className="rounded-full border border-forest/20 px-4 py-2 text-sm font-semibold text-forest transition hover:border-forest/50">
            Start Project
          </Link>
          <Link href="/book-call" className="rounded-full bg-forest px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-ink">
            Book a Quick Call
          </Link>
        </div>

        <details className="group relative lg:hidden">
          <summary className="list-none rounded-full border border-forest/25 px-4 py-2 text-sm font-semibold text-forest marker:hidden">
            Menu
          </summary>
          <div className="absolute right-0 mt-3 w-[min(88vw,22rem)] rounded-3xl border border-ink/10 bg-white p-4 shadow-soft">
            <div className="grid gap-2">
              {publicRoutes.map((route) => (
                <Link key={route.href} href={route.href} className="rounded-2xl px-4 py-3 text-sm font-semibold text-ink hover:bg-oatmeal">
                  {route.label}
                </Link>
              ))}
              <div className="mt-2 grid grid-cols-2 gap-2">
                <Link href="/project-request" className="rounded-2xl bg-forest px-4 py-3 text-center text-sm font-semibold text-white">
                  Start Project
                </Link>
                <Link href="/book-call" className="rounded-2xl border border-forest/25 px-4 py-3 text-center text-sm font-semibold text-forest">
                  Book Call
                </Link>
              </div>
            </div>
          </div>
        </details>
      </nav>
    </header>
  );
}
