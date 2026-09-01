import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export const metadata: Metadata = {
  title: "Low M. - Rust + Python Performance",
  description: "Rewriting popular Python libraries in Rust for next-generation AI infrastructure. Contribution first, monetization later.",
  keywords: ["lowmiaq", "rust", "python", "performance", "fast-dotenv-rs", "fast-semver-rs"],
  authors: [{ name: "Low M.", url: "https://github.com/lowmiaq-gmail" }],
  openGraph: {
    title: "Low M. - Rust + Python Performance",
    description: "Rewriting popular Python libraries in Rust for next-generation AI infrastructure",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className="antialiased font-sans">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
