export const publicRoutes = [
  { href: "/services", label: "Services" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/project-request", label: "Project Request" },
  { href: "/scope-builder", label: "Scope Builder" },
  { href: "/contact", label: "Contact" }
] as const;

export const serviceRoutes = [
  {
    href: "/services/bathroom-renovations",
    title: "Bathroom Renovations",
    description: "Bathroom updates, repairs and practical refreshes organized around the work that actually needs to happen."
  },
  {
    href: "/services/basement-renovations",
    title: "Basement Renovations",
    description: "Basement finishing, repair planning and multi-step interior projects with clear next steps."
  },
  {
    href: "/services/kitchen-updates",
    title: "Kitchen Updates",
    description: "Kitchen improvements, finish updates and functional fixes without forcing a full luxury remodel path."
  },
  {
    href: "/services/repairs-refreshes",
    title: "Repairs and Refreshes",
    description: "Drywall, trim, paint, flooring and home repair lists grouped into a manageable request."
  },
  {
    href: "/services/pre-sale-improvements",
    title: "Pre-Sale Improvements",
    description: "Focused improvements that help homeowners prepare a property for listing or turnover."
  },
  {
    href: "/services/rental-turnovers",
    title: "Rental Turnovers",
    description: "Repair and refresh planning for rental units, turnover lists and practical make-ready work."
  }
] as const;

export const placeholderRoutes = [
  "/project-request",
  "/scope-builder",
  "/book-call",
  "/callback",
  "/contact",
  "/privacy",
  "/terms"
] as const;
