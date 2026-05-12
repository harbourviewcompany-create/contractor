import Link from "next/link";

interface PlaceholderPageProps {
  eyebrow: string;
  title: string;
  body: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}

export function PlaceholderPage({
  eyebrow,
  title,
  body,
  primaryHref = "/project-request",
  primaryLabel = "Start a Project Request",
  secondaryHref = "/book-call",
  secondaryLabel = "Book a Quick Call"
}: PlaceholderPageProps) {
  return (
    <main>
      <section className="bg-oatmeal py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-5">
          <p className="text-sm font-bold uppercase tracking-wide text-brass">{eyebrow}</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink md:text-6xl">{title}</h1>
          <p className="mt-6 text-lg leading-8 text-ink/70">{body}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href={primaryHref} className="rounded-full bg-forest px-6 py-3 text-center font-bold text-white shadow-soft">
              {primaryLabel}
            </Link>
            <Link href={secondaryHref} className="rounded-full border border-forest/20 px-6 py-3 text-center font-bold text-forest">
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
