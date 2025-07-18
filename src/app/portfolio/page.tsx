import React from 'react'

import Page1 from "./Page1/page";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: "Portfolio - Best Labz",
    template: "%s | Global SaaS & IT Services - Best Labz",
  },
  description:
    "Explore the diverse portfolio of Best Labz, featuring successful SaaS products, ERP platforms, POS systems, and custom software projects delivered to global clients.",
  keywords: [
    "Best Labz portfolio",
    "SaaS project showcase",
    "ERP development case studies",
    "POS system projects",
    "IT services portfolio",
    "Custom software examples",
    "Global tech solutions",
    "Best Labz client work",
  ].join(", "),
  openGraph: {
    title: "Our Work – Best Labz Portfolio",
    description:
      "See how Best Labz delivers powerful SaaS, ERP, POS, and mobile solutions to businesses worldwide. Real results. Real impact.",
    url: "https://bestlabz.vercel.app/portfolio",
    siteName: "Best Labz",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/src/assets/logo_svg.svg",
        width: 1200,
        height: 630,
        alt: "Best Labz Portfolio Showcase",
      },
    ],
  },
  alternates: {
    canonical: "https://bestlabz.vercel.app/portfolio",
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
