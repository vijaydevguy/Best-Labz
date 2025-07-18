import type { Metadata } from "next";
import { Poppins, Jost, Urbanist, Prompt, Outfit } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const poppins = Poppins({
  weight: ["400", "700"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

const jost = Jost({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});

const urbanist = Urbanist({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-urbanist",
  display: "swap",
});

const outfit = Outfit({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const prompt = Prompt({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-prompt",
  display: "swap",
});

// const kayak = Kayak({
//   weight: ["400", "700"],
//   subsets: ["latin"],
//   variable: "--font-kayak",
//   display: "swap",
// });

// export const metadata: Metadata = {
//   title: "Best Labz",
//   description: "Your trusted IT services and SAAS solutions provider.",
// };

//SEO purpose
// export const metadata: Metadata = {
//   title: {
//     default: "Best Labz",
//     template: "%s - Best Labz",
//   },
//   description: "Your trusted IT services and SAAS solutions provider.",
//   twitter: {
//     card: "summary_large_image",
//   },
// };

export const metadata: Metadata = {
  // other: {
  //   "google-site-verification": "ZHJDB_0qd46WSvlU8Obzw66H7JWwNa8gz0pzGryXa9c",
  // },
  other: {
    "google-site-verification": "ypKMkQ2-DDAjDZxUqJXSCKJl4tpCIleVb5ZWWZlApao",
  },
  title: {
    default: "Best Labz",
    template: "%s | Global SaaS & IT Services - Best Labz",
  },
  description:
    "Best Labz is a global provider of cloud-based IT services and SaaS solutions for startups and enterprises. Explore our ERP software, POS systems, and mobile app development tailored for international businesses.",
  keywords: [
    "Global ERP software",
    "International POS system provider",
    "SaaS solutions for startups",
    "Cloud-based IT service for businesses worldwide",
    "Mobile app development",
    "Custom software solutions",
    "IT services for global companies",
  ].join(", "),
  openGraph: {
    title: "Best Labz - Global SaaS & IT Services Partner",
    description:
      "We provide enterprise-grade ERP, POS, and SaaS software solutions to clients across the globe. Cloud-native, scalable, and startup-friendly.",
    url: "https://bestlabz.vercel.app",
    siteName: "Best Labz",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/src/assets/logo_1.png",
        width: 1200,
        height: 630,
        alt: "Best Labz Logo",
      },
    ],
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Best Labz - Trusted Global SaaS Partner",
  //   description:
  //     "Empowering startups and enterprises worldwide with scalable cloud-based IT solutions.",
  //   images: ["/src/assets/New Logo.png"],
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <link rel="icon" type="image/png" href="/src/assets/New Logo.png" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Best Labz - Providing cutting-edge IT services and SAAS solutions to empower your business."
        />
        <meta
          name="keywords"
          content="IT services, SAAS, software solutions, technology, IT solutions, POS, ERP, Clinical app, website, static site, web technologies, Digital marketing, Mobile app development"
        />
        <meta name="author" content="Best Labz Team" />
        <meta
          property="og:title"
          content="Best Labz - IT Services & SAAS Solutions"
        />
        <meta
          property="og:description"
          content="Empowering businesses with innovative IT services and SAAS solutions."
        />
        <meta property="og:image" content="/src/assets/New Logo.png" />
        <meta property="og:url" content="https://bestlabz.vercel.app/" /> */}
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
                {
                  "@context": "https://schema.org",
                  "@type": "Organization",
                  "name": "Best Labz",
                  "url": "https://bestlabz.vercel.app",
                  "logo": "https://bestlabz.vercel.app/assets/logo.png"
                },
                 {
                    "@context": "https://schema.org",
                    "@type": "WebSite",
                    "url": "https://bestlabz.vercel.app",
                    "potentialAction": {
                      "@type": "SearchAction",
                      "target": "https://bestlabz.vercel.app/search?q={search_term_string}",
                      "query-input": "required name=search_term_string"
                    }
                  }
            `,
          }}
        />

        {/* google site map */}
        {/* <meta name="og:google-site-verification" content="W4h3GeKXY1Y0qtw95n7Ero8qcdBszrvCpPI-GOI9G3U" /> */}

        {/* <meta
          name="og:google-site-verification"
          content="ZHJDB_0qd46WSvlU8Obzw66H7JWwNa8gz0pzGryXa9c"
        /> */}

        {/* vercel site key */}
        <meta name="google-site-verification" content="ypKMkQ2-DDAjDZxUqJXSCKJl4tpCIleVb5ZWWZlApao" />

        <link rel="canonical" href="https://bestlabz.vercel.app" />
        {/* seo */}
        <link rel="icon" type="image/png" href="/src/assets/logo_1.png" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta
          name="description"
          content="Best Labz is a global provider of cloud-based IT services and SaaS solutions for startups and enterprises. Explore our ERP software, POS systems, and mobile app development tailored for international businesses."
        />
        <meta
          name="keywords"
          content="Global ERP software, International POS system provider, SaaS solutions for startups, Cloud-based IT service for businesses worldwide, Mobile app development, Custom software solutions, IT services for global companies"
        />
        <meta name="author" content="Best Labz Team" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="en" />

        <meta
          property="og:title"
          content="Best Labz - Global SaaS & IT Services Partner"
        />
        <meta
          property="og:description"
          content="We provide enterprise-grade ERP, POS, and SaaS software solutions to clients across the globe. Cloud-native, scalable, and startup-friendly."
        />
        <meta property="og:image" content="/src/assets/logo_1.png" />
        <meta property="og:url" content="https://bestlabz.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />

        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Best Labz - Trusted Global SaaS Partner"
        />
        <meta
          name="twitter:description"
          content="Empowering startups and enterprises worldwide with scalable cloud-based IT solutions."
        /> */}
        {/* <meta name="twitter:image" content="/src/assets/New Logo.png" /> */}
      </Head>

      <body
        className={`${poppins.variable} 
        ${jost.variable} 
        ${urbanist.variable} 
        ${outfit.variable} 
        ${prompt.variable}
        antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
