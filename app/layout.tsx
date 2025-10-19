import type { Metadata } from "next";
import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta", // optional custom var
});

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
    <html lang="en" className={jakarta.variable}>
      <body>
        <div className="container-max py-10">{children}</div>
        <Analytics />
      </body>
    </html>
  );
}
