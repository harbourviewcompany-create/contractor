import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/start-a-project",
        destination: "/project-request",
        permanent: true
      },
      {
        source: "/fix-list-builder",
        destination: "/scope-builder",
        permanent: true
      },
      {
        source: "/maintenance-plans",
        destination: "/services/repairs-refreshes",
        permanent: false
      },
      {
        source: "/inspection-report-repairs",
        destination: "/services/pre-sale-improvements",
        permanent: false
      },
      {
        source: "/renovations",
        destination: "/services",
        permanent: true
      },
      {
        source: "/thank-you",
        destination: "/contact",
        permanent: false
      }
    ];
  }
};

export default nextConfig;
