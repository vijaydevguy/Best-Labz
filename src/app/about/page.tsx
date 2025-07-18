import React from "react";
import Page1 from "./Page1/page";
import { Metadata } from "next";

// seo
export const metadata: Metadata = {
  title: {
    default: "About Us - Best Labz",
    template: "%s | Global SaaS & IT Services - Best Labz",
  },
  description:
    "Discover Best Labz’s mission, values, and journey in delivering scalable SaaS and IT solutions globally. Learn how we empower startups and enterprises through cloud-native technologies.",
  keywords: [
    "About Best Labz",
    "Best Labz company profile",
    "Global SaaS company",
    "IT services provider",
    "Custom software development",
    "Best Labz team",
    "Cloud technology experts",
    "Enterprise software company",
  ].join(", "),
  openGraph: {
    title: "About Best Labz – Your Global SaaS & IT Partner",
    description:
      "Learn more about Best Labz, our mission, team, and commitment to building world-class SaaS and IT solutions for businesses across the globe.",
    url: "https://bestlabz.vercel.app/about",
    siteName: "Best Labz",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/src/assets/logo_svg.svg",
        width: 1200,
        height: 630,
        alt: "Best Labz About Page",
      },
    ],
  },
   alternates: {
    canonical: "https://bestlabz.vercel.app/about",
  },
};


const page = () => {
  return (
    <>
      <Page1 />
    </>
  );
};

export default page;
