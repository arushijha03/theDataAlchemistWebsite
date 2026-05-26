import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-portfolio",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arushi Jha — Data Alchemist",
  description:
    "Portfolio of Arushi Jha — AI/ML systems, data pipelines, and GenAI solutions across fintech and enterprise. Based in California, USA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${dmSans.variable} ${jetbrains.variable} font-body bg-paper text-ink min-h-screen antialiased`}
        style={
          {
            "--font-display": "var(--font-playfair)",
            "--font-body": "var(--font-dm-sans)",
            "--font-mono": "var(--font-jetbrains-portfolio)",
          } as React.CSSProperties
        }
      >
        <header className="fixed top-0 left-0 right-0 z-30 flex items-center justify-between px-6 sm:px-10 lg:px-16 py-4 bg-paper/80 backdrop-blur-md border-b border-ink/5">
          <a
            href="/"
            className="font-display text-lg text-ink hover:text-accent transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Data Alchemist
          </a>
          <nav className="hidden sm:flex items-center gap-6 font-body text-sm text-muted">
            <a href="#projects" className="hover:text-ink transition-colors">
              Projects
            </a>
            <a href="#experience" className="hover:text-ink transition-colors">
              Experience
            </a>
            <a href="#skills" className="hover:text-ink transition-colors">
              Skills
            </a>
            <a
              href="#contact"
              className="text-ink font-medium hover:text-accent transition-colors"
            >
              Contact
            </a>
          </nav>
        </header>
        <div className="pt-16">{children}</div>
      </body>
    </html>
  );
}
