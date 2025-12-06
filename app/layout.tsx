import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Neuraforz | AI-Powered IT Solutions & Technology Services",
    template: "%s | Neuraforz",
  },
  description: "Professional IT services including Staff Augmentation, QA Testing, ERP/CRM Implementations, Managed Services, Data Analytics, and AI Automation for mid-sized businesses.",
  keywords: ["IT services", "AI solutions", "staff augmentation", "QA testing", "ERP implementation", "CRM implementation", "managed services", "data analytics", "AI automation", "neural network", "machine learning"],
  authors: [{ name: "Neuraforz" }],
  creator: "Neuraforz",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    title: "Neuraforz | AI-Powered IT Solutions & Technology Services",
    description: "Empowering businesses with intelligent technology solutions",
    siteName: "Neuraforz",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neuraforz",
    description: "Empowering businesses with intelligent technology solutions",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
