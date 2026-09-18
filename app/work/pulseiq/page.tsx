import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { PulseIQCaseStudyPage } from "../../pulseiq-case-study";

export default function PulseIQCaseStudyRoute() {
  return (
    <main className="case-route pulse-route">
      <header className="case-route-header">
        <Link href="/#work"><ArrowLeft size={16} /> Selected work</Link>
        <Link className="case-route-brand" href="/" aria-label="Guru Prasad portfolio home"><span>GP</span><b>Guru Prasad</b></Link>
        <a href="mailto:prassadh1994@gmail.com?subject=PulseIQ%20case%20study">Discuss the project <ArrowUpRight size={16} /></a>
      </header>
      <PulseIQCaseStudyPage />
      <footer className="case-route-footer">
        <p>PulseIQ · AI operations case study</p>
        <Link href="/#work">Back to selected work <ArrowUpRight size={15} /></Link>
      </footer>
    </main>
  );
}
