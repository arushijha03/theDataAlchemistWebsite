"use client";

import { usePathname } from "next/navigation";
import { Sidebar } from "@/components/Sidebar";
import { ThemeProvider } from "@/components/ThemeProvider";

export function MainShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isPortfolio = pathname.startsWith("/portfolio");

  if (isPortfolio) {
    return <>{children}</>;
  }

  return (
    <>
      <Sidebar />
      <main className="ml-64 min-h-screen p-8 transition-all duration-300">
        {children}
      </main>
    </>
  );
}

export function AppProviders({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isPortfolio = pathname.startsWith("/portfolio");

  if (isPortfolio) {
    return <>{children}</>;
  }

  return <ThemeProvider>{children}</ThemeProvider>;
}
