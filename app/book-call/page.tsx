import { PlaceholderPage } from "@/components/placeholder-page";

export const metadata = {
  title: "Book a Quick Call",
  description: "Vail quick call foundation route."
};

export default function BookCallPage() {
  return (
    <PlaceholderPage
      eyebrow="Quick call"
      title="Book a quick call when the scheduling path is connected."
      body="The foundation route is in place. This ticket does not add a native scheduling engine or lead creation. The next implementation can connect an external booking URL or callback fallback."
      primaryHref="/callback"
      primaryLabel="Request a Callback"
      secondaryHref="/project-request"
      secondaryLabel="Start a Project Request"
    />
  );
}
