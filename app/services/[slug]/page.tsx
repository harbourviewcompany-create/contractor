import Link from "next/link";
import { notFound } from "next/navigation";
import { serviceRoutes } from "@/lib/routes";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

function getServiceBySlug(slug: string) {
  return serviceRoutes.find((route) => route.href.endsWith(`/${slug}`));
}

export function generateStaticParams() {
  return serviceRoutes.map((route) => {
    const slug = route.href.split("/").pop();

    if (!slug) {
      throw new Error(`Missing service slug for route: ${route.href}`);
    }

    return { slug };
  });
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {};
  }

  return {
    title: service.title,
    description: service.description
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="bg-oatmeal py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-5">
        <p className="text-sm font-bold uppercase tracking-wide text-brass">Vail service route</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink md:text-6xl">{service.title}</h1>
        <p className="mt-6 text-lg leading-8 text-ink/70">{service.description}</p>
        <div className="mt-8 rounded-3xl border border-ink/10 bg-white p-6 shadow-soft">
          <h2 className="text-2xl font-bold text-ink">Foundation placeholder</h2>
          <p className="mt-3 leading-7 text-ink/65">
            This route exists so the public site architecture is ready before the full content, Project Starter, Scope Builder and CRM tickets are implemented. No lead is created from this page in the foundation ticket.
          </p>
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/project-request" className="rounded-full bg-forest px-6 py-3 text-center font-bold text-white shadow-soft">
            Start a Project Request
          </Link>
          <Link href="/services" className="rounded-full border border-forest/20 px-6 py-3 text-center font-bold text-forest">
            Back to Services
          </Link>
        </div>
      </div>
    </main>
  );
}
