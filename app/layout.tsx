import type { Metadata } from "next";
import { AppProviders, MainShell } from "@/components/MainShell";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Data Alchemist",
  description: "A structured knowledge system for Data Science, Machine Learning, and Statistics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <AppProviders>
          <MainShell>{children}</MainShell>
        </AppProviders>
      </body>
    </html>
  );
}
