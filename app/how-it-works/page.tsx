import { PlaceholderPage } from "@/components/placeholder-page";

export const metadata = {
  title: "How It Works",
  description: "The Vail Project Path foundation route."
};

export default function HowItWorksPage() {
  return (
    <PlaceholderPage
      eyebrow="The Vail Project Path"
      title="A simpler way to move from idea to next step."
      body="This foundation route preserves the low-friction Vail project path before the full Project Starter, Scope Builder and CRM workflows are implemented."
      primaryHref="/project-request"
      primaryLabel="Start the Vail Project Path"
      secondaryHref="/scope-builder"
      secondaryLabel="Build My Scope"
    />
  );
}
