import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Guru Prasad — Product Designer & UI Engineer",
  description: "Product portfolio of Guru Prasad, a UI/UX designer and front-end engineer with 6.3 years of experience.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
