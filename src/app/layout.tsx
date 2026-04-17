import type { Metadata } from "next";
import { Inter, DM_Serif_Display, Caveat } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const caveat = Caveat({ subsets: ["latin"], variable: "--font-handwriting" });

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
  style: ["normal", "italic"],
});

const BASE = "https://hariprasad.xyz";

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: "Hari Prasad Renganathan — Founder, AI Engineer, Builder",
    template: "%s | Hari Prasad Renganathan",
  },
  description:
    "Founder at Antler London building Flax, an autonomous AI chief-of-staff. Columbia-educated AI engineer. Previously Senior AI Engineer at a YC S24 fintech and Data Scientist at Take-Two Interactive.",
  keywords: [
    "Hari Prasad Renganathan",
    "Hari Prasad",
    "AI Engineer",
    "Founder",
    "Antler London",
    "Flax AI",
    "MyRealProduct",
    "Columbia University",
    "YC S24",
    "Take-Two Interactive",
    "LLMs",
    "RAG",
    "AI agents",
    "machine learning",
  ],
  authors: [{ name: "Hari Prasad Renganathan", url: BASE }],
  creator: "Hari Prasad Renganathan",
  openGraph: {
    type: "website",
    url: BASE,
    siteName: "Hari Prasad Renganathan",
    title: "Hari Prasad Renganathan — Founder, AI Engineer, Builder",
    description:
      "Founder at Antler London building Flax. Columbia-educated AI engineer. YC S24. Take-Two Interactive. Building AI systems that work in production.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hari Prasad Renganathan — Founder, AI Engineer, Builder",
    description:
      "Founder at Antler London building Flax. Columbia-educated AI engineer. YC S24. Take-Two Interactive.",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: "/images/profile/my_profile.png",
    apple: "/images/profile/my_profile.png",
  },
  alternates: {
    canonical: BASE,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Hari Prasad Renganathan",
  url: BASE,
  image: `${BASE}/images/profile/my_profile.png`,
  jobTitle: "Founder & AI Engineer",
  description:
    "Founder at Antler London building Flax, an autonomous AI chief-of-staff. Columbia-educated AI engineer with experience at YC S24 fintech and Take-Two Interactive.",
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Columbia University" },
    { "@type": "CollegeOrUniversity", name: "Kumaraguru College of Technology" },
  ],
  worksFor: { "@type": "Organization", name: "Antler London" },
  sameAs: [
    "https://linkedin.com/in/hariprasad20",
    "https://hariprasad00.substack.com",
    "https://hari-prasad.medium.com",
    "https://www.youtube.com/@hari.prasad_",
    "https://joinflax.com",
    "https://myrealproduct.com",
  ],
  knowsAbout: [
    "Artificial Intelligence",
    "Machine Learning",
    "Large Language Models",
    "RAG",
    "AI Agents",
    "Software Engineering",
    "Entrepreneurship",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSerif.variable} ${caveat.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#f5f5f3] text-[#1a1a1a] antialiased font-sans">
        <Nav />
        <main className="max-w-5xl mx-auto px-4 pt-24 md:pt-28 pb-16">
          {children}
        </main>
        <footer className="max-w-5xl mx-auto px-4 py-10 border-t border-[#e8e8e5] mt-4 flex items-center justify-between">
          <span className="text-[#ccc] text-xs uppercase tracking-widest">Hari Prasad Renganathan</span>
          <span style={{ fontFamily: "var(--font-handwriting)" }} className="text-[#999] text-2xl">One Life</span>
          <span className="text-[#ccc] text-xs uppercase tracking-widest">{new Date().getFullYear()}</span>
        </footer>
      </body>
    </html>
  );
}
