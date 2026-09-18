import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";
import { AskRockyCaseStudyPage } from "../../askrocky-case-study";

export const metadata: Metadata = {
  title: "AskRocky Case Study — Guru Prasad",
  description: "A detailed product UX and UI engineering case study for the AskRocky enterprise HR assistant.",
};

export default function AskRockyPage() {
  return (
    <main className="case-route">
      <header className="case-route-header">
        <Link href="/#work"><ArrowLeft size={17} /> Back to selected work</Link>
        <Link className="case-route-brand" href="/" aria-label="Guru Prasad portfolio home"><span>GP</span><b>Guru Prasad</b></Link>
        <a href="mailto:prassadh1994@gmail.com?subject=AskRocky%20case%20study"><Mail size={16} /> Contact me</a>
      </header>
      <AskRockyCaseStudyPage />
      <footer className="case-route-footer">
        <p>AskRocky · Product UX and UI engineering case study</p>
        <Link href="/#work">Explore more work <ArrowLeft size={15} /></Link>
      </footer>
    </main>
  );
}
