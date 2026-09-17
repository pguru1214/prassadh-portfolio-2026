import type { Metadata } from "next";
import { ArrowLeft, Mail } from "lucide-react";
import { EthiqlyCaseStudyPage } from "../../ethiqly-case-study";

export const metadata: Metadata = {
  title: "Ethiqly Case Study — Guru Prasad",
  description: "A detailed product UX and UI engineering case study for the Ethiqly Classroom and AI-assisted Grading platform.",
};

export default function EthiqlyPage() {
  return (
    <main className="case-route ethiqly-route">
      <header className="case-route-header">
        <a href="/#work"><ArrowLeft size={17} /> Back to selected work</a>
        <a className="case-route-brand" href="/" aria-label="Guru Prasad portfolio home"><span>GP</span><b>Guru Prasad</b></a>
        <a href="mailto:prassadh1994@gmail.com?subject=Ethiqly%20case%20study"><Mail size={16} /> Contact me</a>
      </header>
      <EthiqlyCaseStudyPage />
      <footer className="case-route-footer">
        <p>Ethiqly · Product UX and UI engineering case study</p>
        <a href="/#work">Explore more work <ArrowLeft size={15} /></a>
      </footer>
    </main>
  );
}
