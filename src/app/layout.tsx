import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export const metadata: Metadata = {
  title: "邓明翥 - Rust + Python 性能优化",
  description: "重写热门 Python 库，构建下一代 AI 基础设施。贡献优先,变现随后。",
  keywords: ["邓明翥", "lowmiaq", "rust", "python", "performance", "fast-dotenv-rs", "fast-semver-rs"],
  authors: [{ name: "邓明翥", url: "https://github.com/lowmiaq-gmail" }],
  openGraph: {
    title: "邓明翥 - Rust + Python 性能优化",
    description: "重写热门 Python 库，构建下一代 AI 基础设施",
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
