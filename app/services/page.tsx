import Link from "next/link";
import { serviceRoutes } from "@/lib/routes";

export const metadata = {
  title: "Services",
  description: "Vail Renovations service route placeholders for bathroom, basement, kitchen, repair, pre-sale and rental turnover work."
};

export default function ServicesPage() {
  return (
    <main className="bg-oatmeal py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-sm font-bold uppercase tracking-wide text-brass">Services</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink md:text-6xl">Renovation work organized around the next clear step.</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-ink/70">
          These routes establish the public-site foundation for Vail Renovations. They are placeholders for the next content and intake tickets, not live estimating or lead creation flows.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {serviceRoutes.map((service) => (
            <Link key={service.href} href={service.href} className="rounded-3xl border border-ink/10 bg-white p-6 shadow-soft transition hover:-translate-y-1">
              <h2 className="text-xl font-bold text-ink">{service.title}</h2>
              <p className="mt-3 text-sm leading-6 text-ink/65">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
