import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#050811",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://smartaegis.tech"),
  title: "SmartAegis Technologies | INVENT • BUILD • SCALE — Premier Digital Engineering Firm",
  description:
    "SmartAegis Technologies is a premier software development and digital engineering firm specializing in custom web applications, native & cross-platform mobile apps, and scalable enterprise software solutions.",
  keywords: [
    "SmartAegis",
    "SmartAegis Technologies",
    "Custom Software Development",
    "Next.js App Development",
    "Flutter Mobile Apps",
    "React Native Development",
    "Enterprise SaaS",
    "Cloud Architecture",
    "Defense-Grade Security",
  ],
  authors: [{ name: "SmartAegis Technologies" }],
  openGraph: {
    title: "SmartAegis Technologies | INVENT • BUILD • SCALE",
    description:
      "Engineering Mission-Critical Software, Web & Mobile Applications with defense-grade security and zero vendor lock-in.",
    url: "https://smartaegis.tech",
    siteName: "SmartAegis Technologies",
    images: [
      {
        url: "/smartaegis-logo.jpg",
        width: 1200,
        height: 630,
        alt: "SmartAegis Technologies Official Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/smartaegis-logo.jpg",
    apple: "/smartaegis-logo.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body>
        {children}
      </body>
    </html>
  );
}
