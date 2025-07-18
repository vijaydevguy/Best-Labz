import React from 'react'
import { Metadata } from "next";
import Page1 from "./Page1/page";

// seo
export const metadata: Metadata = {
  title: {
    default: "Contact Us - Best Labz",
    template: "%s | Global SaaS & IT Services - Best Labz",
  },
  description:
    "Get in touch with Best Labz for custom SaaS solutions, ERP development, POS systems, and IT consulting. We’re here to support your business globally.",
  keywords: [
    "Contact Best Labz",
    "Best Labz support",
    "Get in touch SaaS provider",
    "ERP consultation contact",
    "IT services inquiry",
    "POS software support",
    "Global SaaS partner contact",
    "Custom software contact",
  ].join(", "),
  openGraph: {
    title: "Contact Best Labz – Start Your IT Journey",
    description:
      "Connect with the Best Labz team for SaaS, ERP, and IT service inquiries. Let’s build something great together.",
    url: "https://bestlabzglobal.com/contact",
    siteName: "Best Labz",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/src/assets/logo_svg.svg",
        width: 1200,
        height: 630,
        alt: "Best Labz Contact Page",
      },
    ],
  },
   alternates: {
    canonical: "https://bestlabzglobal.com/contact",
  },
};
const page = () => {
  return (
    <>
      <Page1 />
    </>
  )
}

export default page
