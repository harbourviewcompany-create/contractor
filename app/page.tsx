import Link from "next/link";
import { serviceRoutes } from "@/lib/routes";

const projectSteps = [
  "Tell Vail what you want fixed, changed or improved.",
  "Share photos or a budget only if you already have them.",
  "Vail reviews the request and gives you the next clear step."
];

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden bg-oatmeal py-16 md:py-24">
        <div className="absolute right-[-12rem] top-[-12rem] h-96 w-96 rounded-full bg-brass/20 blur-3xl" aria-hidden="true" />
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-brass">Vail Renovations</p>
            <h1 className="mt-4 text-5xl font-bold tracking-tight text-ink md:text-7xl">
              Renovation help without the runaround.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/70">
              Vail Renovations helps Ottawa homeowners handle repairs, updates and renovation projects with one clear point of contact, practical scope guidance and the right specialists brought in when needed.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-ink/65">
              Not sure what trade you need? Just tell us what you are trying to fix, change or improve.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/project-request" className="rounded-full bg-forest px-6 py-3 text-center font-bold text-white shadow-soft transition hover:bg-ink">
                Start a Project Request
              </Link>
              <Link href="/book-call" className="rounded-full border border-forest/20 px-6 py-3 text-center font-bold text-forest transition hover:border-forest/50">
                Book a Quick Call
              </Link>
            </div>
            <Link href="/scope-builder" className="mt-5 inline-flex text-sm font-bold text-forest underline underline-offset-4">
              Want to organize your ideas first? Try the Vail Scope Builder.
            </Link>
          </div>
          <aside className="rounded-[2rem] border border-ink/10 bg-white p-6 shadow-soft">
            <p className="text-sm font-bold uppercase tracking-wide text-brass">Project starter preview</p>
            <div className="mt-5 grid gap-3">
              {projectSteps.map((step, index) => (
                <div key={step} className="rounded-2xl bg-oatmeal p-4">
                  <p className="text-xs font-bold uppercase text-moss">Step {index + 1}</p>
                  <p className="mt-1 text-sm leading-6 text-ink/75">{step}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wide text-brass">Low friction by design</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-5xl">You do not need the whole project figured out.</h2>
            <p className="mt-5 text-lg leading-8 text-ink/70">
              The site is now a Next.js platform foundation ready for the future Project Starter, Scope Builder and CRM work. This ticket intentionally keeps forms, CRM, auth, database and uploads out of scope.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <div className="rounded-3xl border border-ink/10 bg-white p-6 shadow-soft">
              <h3 className="text-xl font-bold">Simple starting point</h3>
              <p className="mt-3 text-sm leading-6 text-ink/65">Homeowners should be able to start with plain-language notes, not contractor terminology.</p>
            </div>
            <div className="rounded-3xl border border-ink/10 bg-white p-6 shadow-soft">
              <h3 className="text-xl font-bold">Optional detail</h3>
              <p className="mt-3 text-sm leading-6 text-ink/65">Photos, budget and exact measurements belong as optional helpers, not barriers.</p>
            </div>
            <div className="rounded-3xl border border-ink/10 bg-white p-6 shadow-soft">
              <h3 className="text-xl font-bold">Clear next step</h3>
              <p className="mt-3 text-sm leading-6 text-ink/65">Every route should point back to a project request, callback or quick call.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stone/60 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-brass">Services</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-5xl">Repairs, updates and renovation work organized properly.</h2>
            </div>
            <Link href="/services" className="rounded-full border border-forest/20 px-6 py-3 text-center font-bold text-forest">
              View Services
            </Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {serviceRoutes.map((service) => (
              <Link key={service.href} href={service.href} className="rounded-3xl border border-ink/10 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-forest/25">
                <h3 className="text-xl font-bold text-ink">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/65">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest py-16 text-white md:py-24">
        <div className="mx-auto max-w-5xl px-5 text-center">
          <p className="text-sm font-bold uppercase tracking-wide text-stone">Shareable by design</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">Know someone trying to figure out a renovation or repair?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/75">
            Send them the Project Starter when the route is connected in the next implementation ticket. For now, this foundation preserves the Vail positioning and app structure without faking lead capture.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/project-request" className="rounded-full bg-white px-6 py-3 text-center font-bold text-forest">
              Start a Project Request
            </Link>
            <Link href="/scope-builder" className="rounded-full border border-white/25 px-6 py-3 text-center font-bold text-white">
              Build My Scope
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
