import Link from "next/link";

export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-white/95 p-3 shadow-soft backdrop-blur lg:hidden">
      <div className="mx-auto grid max-w-md grid-cols-2 gap-3">
        <Link href="/project-request" className="rounded-2xl bg-forest px-4 py-3 text-center text-sm font-bold text-white">
          Start Project
        </Link>
        <Link href="/book-call" className="rounded-2xl border border-forest/25 px-4 py-3 text-center text-sm font-bold text-forest">
          Book Call
        </Link>
      </div>
    </div>
  );
}
