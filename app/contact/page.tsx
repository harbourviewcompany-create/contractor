import { PlaceholderPage } from "@/components/placeholder-page";

export const metadata = {
  title: "Contact",
  description: "Contact Vail Renovations."
};

export default function ContactPage() {
  return (
    <PlaceholderPage
      eyebrow="Contact"
      title="Start with the next clear step."
      body="This foundation route avoids inventing phone numbers, emails or public addresses. The next ticket can connect verified contact details and the low-friction intake flows."
      primaryHref="/project-request"
      primaryLabel="Start a Project Request"
      secondaryHref="/book-call"
      secondaryLabel="Book a Quick Call"
    />
  );
}
