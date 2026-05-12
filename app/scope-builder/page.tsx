import { PlaceholderPage } from "@/components/placeholder-page";

export const metadata = {
  title: "Scope Builder",
  description: "Vail Scope Builder foundation route."
};

export default function ScopeBuilderPage() {
  return (
    <PlaceholderPage
      eyebrow="Vail Scope Builder"
      title="Organize the project before the first call."
      body="This route is ready for the future optional planning flow. It is not a final estimate, inspection, engineering review or permit assessment."
      primaryHref="/project-request"
      primaryLabel="Start a Project Request"
      secondaryHref="/book-call"
      secondaryLabel="Book a Quick Call"
    />
  );
}
