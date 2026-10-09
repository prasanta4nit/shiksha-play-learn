import type { Metadata } from "next";
import { Baloo_2, Nunito } from "next/font/google";
import "./globals.css";
import { school } from "@/data/school";
import WhatsAppButton from "@/components/WhatsAppButton";

const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const siteUrl = school.contact.website;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: school.seo.titleDefault,
    template: school.seo.titleTemplate,
  },
  description: school.seo.description,
  keywords: school.seo.keywords,
  openGraph: {
    title: school.seo.titleDefault,
    description: school.seo.description,
    url: siteUrl,
    siteName: school.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        // TODO: swap for a dedicated 1200x630 OG banner once designed —
        // using a real school photo in the meantime rather than a
        // placeholder graphic.
        url: "/images/photos/teachers-day-group-1.jpg",
        width: 1200,
        height: 630,
        alt: school.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: school.seo.titleDefault,
    description: school.seo.description,
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: school.logo.image,
  },
  // Google Search Console "HTML tag" verification token, set in Vercel.
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        // Tells Google which names this site goes by (shown as the site
        // name in results and matched against brand searches).
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: school.name,
        alternateName: school.alternateNames,
        url: siteUrl,
        publisher: { "@id": `${siteUrl}/#school` },
      },
      {
        "@type": ["Preschool", "LocalBusiness"],
        "@id": `${siteUrl}/#school`,
        name: school.name,
        alternateName: school.alternateNames,
        description: school.seo.description,
        slogan: school.tagline,
        logo: `${siteUrl}${school.logo.image}`,
        image: `${siteUrl}/images/photos/teachers-day-group-1.jpg`,
        address: {
          "@type": "PostalAddress",
          addressLocality: school.location.area,
          addressRegion: school.location.state,
          addressCountry: school.location.country,
          streetAddress: school.location.fullAddress,
          postalCode: school.location.postalCode || undefined,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: school.location.geo.latitude,
          longitude: school.location.geo.longitude,
        },
        hasMap: school.location.googleBusinessProfileUrl,
        telephone: school.contact.phoneDial,
        email: school.contact.email || undefined,
        openingHours: school.contact.openingHours,
        sameAs: [
          school.location.googleBusinessProfileUrl,
          school.social.youtube,
          school.social.facebook,
          school.social.instagram,
        ].filter(Boolean),
        url: siteUrl,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${baloo.variable} ${nunito.variable} h-full antialiased`}
    >
      <head>
        <StructuredData />
      </head>
      <body className="min-h-full flex flex-col bg-cream text-ink">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
