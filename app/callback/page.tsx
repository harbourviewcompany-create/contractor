import { PlaceholderPage } from "@/components/placeholder-page";

export const metadata = {
  title: "Request a Callback",
  description: "Vail callback request foundation route."
};

export default function CallbackPage() {
  return (
    <PlaceholderPage
      eyebrow="Callback"
      title="Request a callback without filling out a long form."
      body="The callback route is now part of the platform foundation. Actual callback submission, CRM lead creation and notification logic are intentionally out of scope for this ticket."
      primaryHref="/project-request"
      primaryLabel="Start a Project Request"
      secondaryHref="/contact"
      secondaryLabel="Contact Vail"
    />
  );
}
