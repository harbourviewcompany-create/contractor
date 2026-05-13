import { PlaceholderPage } from "@/components/placeholder-page";

export const metadata = {
  title: "Privacy",
  description: "Vail Renovations privacy placeholder."
};

export default function PrivacyPage() {
  return (
    <PlaceholderPage
      eyebrow="Privacy"
      title="Privacy content placeholder."
      body="This route exists for the platform foundation. The full privacy page will be completed when real intake, CRM, photo storage and consent workflows are implemented."
      primaryHref="/project-request"
      primaryLabel="Start a Project Request"
      secondaryHref="/contact"
      secondaryLabel="Contact Vail"
    />
  );
}
