import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Guru Prasad | AI Engineer & AI Full Stack Engineer",
  description: "Guru Prasad builds AI applications with Python, FastAPI, React, Gemini and LangGraph. Explore CrimeBase, TripWeave and enterprise projects.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
