import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kelvin Benzali — Portfolio",
  description: "Software Engineer portfolio built with Next.js, Tailwind CSS, and TypeScript.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Kelvin Benzali — Portfolio",
    description: "Software Engineer portfolio built with Next.js, Tailwind CSS, and TypeScript.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Kelvin Benzali — Portfolio",
    description: "Software Engineer portfolio built with Next.js, Tailwind CSS, and TypeScript."
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="container-max py-10">{children}</div>
      </body>
    </html>
  );
}
