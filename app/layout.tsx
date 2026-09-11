import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "TheSystem",
  description: "Heavy RPG fitness — forge attributes through iron.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <Providers>
          <header className="border-b border-zinc-800">
            <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4">
              <Link href="/" className="text-lg font-bold text-amber-400">
                The System
              </Link>
              <Nav />
            </div>
          </header>
          <main className="mx-auto max-w-4xl px-4 py-10">{children}</main>
          <footer className="mx-auto max-w-4xl px-4 py-10 text-sm text-zinc-500">
            Free &amp; open source · MIT
          </footer>
        </Providers>
      </body>
    </html>
  );
}
