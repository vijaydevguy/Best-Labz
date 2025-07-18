import React from 'react'
import Page1 from "./Page1/page";

import { Metadata } from "next";


// seo
export const metadata: Metadata = {
  title: {
    default: "Blog - Best Labz",
    template: "%s | Insights & Updates - Best Labz",
  },
  description:
    "Read the latest insights, product updates, and industry trends from the Best Labz team. Stay informed on SaaS innovations, IT services, and global tech strategies.",
  keywords: [
    "Best Labz blog",
    "SaaS industry insights",
    "IT services articles",
    "Tech blog for startups",
    "ERP software trends",
    "POS system updates",
    "Cloud-based solution news",
    "Global IT strategy blog",
  ].join(", "),
  openGraph: {
    title: "Best Labz Blog – SaaS, IT & Tech Insights",
    description:
      "Explore expert articles, product news, and thought leadership from Best Labz. Get ahead with insights on SaaS, ERP, mobile apps, and cloud services.",
    url: "https://bestlabzglobal.com/blog",
    siteName: "Best Labz",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/src/assets/logo_svg.svg",
        width: 1200,
        height: 630,
        alt: "Best Labz Blog",
      },
    ],
  },
   alternates: {
    canonical: "https://bestlabzglobal.com/blog",
  },
};


const page = () => {
  return (
    <>
      <Page1/>
    </>
  )
}

export default page
