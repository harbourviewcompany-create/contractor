import { PlaceholderPage } from "@/components/placeholder-page";

export const metadata = {
  title: "Project Request",
  description: "Vail Project Starter foundation route."
};

export default function ProjectRequestPage() {
  return (
    <PlaceholderPage
      eyebrow="Vail Project Starter"
      title="Tell Vail what you want fixed, changed or improved."
      body="This ticket creates the route only. Lead creation, validation, CRM routing, uploads and backend persistence are intentionally reserved for the backend implementation ticket."
      primaryHref="/book-call"
      primaryLabel="Book a Quick Call"
      secondaryHref="/callback"
      secondaryLabel="Request a Callback"
    />
  );
}
