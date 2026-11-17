import { ArrowLeft, ArrowRight, ArrowUpRight, BrainCircuit, Check, Database, ShieldCheck, Workflow } from "lucide-react";
import Link from "next/link";

const studies = {
  crimebase: {
    name: "CrimeBase", category: "CONVERSATIONAL ANALYTICS", status: "Implemented application",
    summary: "Natural-language questions. Validated SQL. Answers grounded in data.",
    description: "A full stack AI analyst for India and state/UT crime statistics. A React chat experience connects to a Python API that interprets questions, retrieves database results and returns comparisons with provenance and caveats.",
    stack: ["React", "TypeScript", "Python", "FastAPI", "Gemini", "PostgreSQL", "pgvector", "SQLGlot", "Docker"],
    flow: ["Question & recent context", "Catalog or model planning", "SQL AST validation", "Read-only PostgreSQL", "Grounded response"],
    decisions: [
      ["Data before narrative", "Answers are assembled from actual database rows. Numeric comparisons retain source context and quality caveats rather than relying on model recall."],
      ["A constrained SQL boundary", "SQLGlot inspects query structure, approved tables and functions. Queries bind a release identifier and a top-level result limit before read-only execution."],
      ["Use models where they help", "Supported catalog requests use local interpretation and parameterized templates. Gemini provides optional planning and interpretation fallbacks."],
      ["Context without hidden persistence", "The browser keeps the transcript in memory and sends the previous two turns for follow-up resolution. Reset, refresh or the one-hour session lifecycle clears the conversation."],
    ],
    validation: "The repository includes regression coverage for SQL and backend behavior, comparisons, conversation context, topic routing and abuse handling. The portfolio review inspected the architecture and implementation; it did not rerun the project's tests.",
    limitations: "The current implementation does not include authentication, role-based access control or request rate limiting. Historical registered-case counts require careful interpretation and are not equivalent to population-adjusted crime rates.",
    source: "https://github.com/pguru1214/crimebase", sourceLabel: "Source repository (private)",
    reference: "https://github.com/pguru1214/crimebase/blob/main/ARCHITECTURE.md",
  },
  tripweave: {
    name: "TripWeave", category: "AGENTIC TRAVEL PLANNING", status: "Working development foundation",
    summary: "A travel conversation that becomes a structured, resumable plan.",
    description: "An India-focused travel assistant with a React frontend and FastAPI backend. LangGraph coordinates research, connectivity and itinerary steps, while Gemini helps interpret preferences and generate structured plans grounded in retrieved evidence.",
    stack: ["React", "TypeScript", "Python", "FastAPI", "LangGraph", "LangChain", "Gemini", "PostgreSQL", "SSE"],
    flow: ["Collect trip preferences", "Research destination", "Plan connectivity", "Validate itinerary", "Save & resume"],
    decisions: [
      ["Durable conversations", "Graph checkpoints and conversation history persist with PostgreSQL, with SQLite available for development. Missing trip details pause the workflow and can be supplied on the same thread."],
      ["Structured plans over free text", "The backend prepares timed daily activities, meal windows and travel legs. Days that cannot be reconciled remain reviewable drafts with explicit notes."],
      ["Evidence and provider resilience", "Tourism sources, places and weather enrich the plan. Source identifiers are validated; provider failures and unavailable forecasts are disclosed instead of replaced with invented facts."],
      ["Visible progress and recovery", "Server-Sent Events expose workflow progress and completion. Checkpoint conflicts protect the single-worker workflow, and identical failed submissions can resume saved state."],
    ],
    validation: "Repository tests cover conversations, guardrails, itinerary planning, transport estimates and provider/model reliability. Documentation records prior test runs; those results were not rerun as part of this portfolio update.",
    limitations: "This is a development foundation with India-only planning. Authentication, per-user ownership and production migrations remain pending. Transport times and costs are estimates; live schedules and fares are not connected. Email and calendar integrations produce previews only.",
    source: "https://github.com/pguru1214/genAIChatbot", sourceLabel: "View source on GitHub",
    reference: "https://github.com/pguru1214/genAIChatbot/blob/main/IMPLEMENTED_FEATURES.md",
  },
};

export function EngineeringCaseStudy({ project }: { project: keyof typeof studies }) {
  const study = studies[project];
  return <main className={`case-route engineering-case-route ${project}`}>
    <header className="case-route-header"><Link href="/#work"><ArrowLeft size={16} /> Selected work</Link><Link href="/" className="case-route-brand"><span>GP</span><b>Guru Prasad</b></Link><a href="mailto:prassadh1994@gmail.com">Let&apos;s connect <ArrowUpRight size={16} /></a></header>
    <article className="case-page engineering-case">
      <section className="engineering-case-hero"><p className="eyebrow light"><span />{study.category}</p><span className="engineering-status">{study.status}</span><h1>{study.name}</h1><h2>{study.summary}</h2><p>{study.description}</p><div className="engineering-stack">{study.stack.map(tool => <span key={tool}>{tool}</span>)}</div><a className="text-link" href={study.source} target="_blank" rel="noopener noreferrer">{study.sourceLabel}<ArrowUpRight size={17} /></a></section>
      <section className="engineering-case-section"><p className="eyebrow"><span /> System flow</p><h2>From user intent to a useful result.</h2><div className="engineering-flow">{study.flow.map((step,i) => <div key={step}><small>0{i+1}</small><b>{step}</b>{i < study.flow.length-1 && <ArrowRight size={18} />}</div>)}</div></section>
      <section className="engineering-case-section engineering-decisions"><p className="eyebrow"><span /> Engineering decisions</p><h2>How the application works.</h2><div className="engineering-decision-grid">{study.decisions.map(([title,description],i) => { const Icon = [Database, ShieldCheck, BrainCircuit, Workflow][i]; return <section key={title}><Icon size={25} /><h3>{title}</h3><p>{description}</p></section>; })}</div></section>
      <section className="engineering-case-section"><p className="eyebrow"><span /> Validation & scope</p><h2>Clear about what is implemented.</h2><div className="engineering-scope"><div><Check size={22} /><h3>Validation evidence</h3><p>{study.validation}</p></div><div><ShieldCheck size={22} /><h3>Current boundaries</h3><p>{study.limitations}</p></div></div><a className="text-link" href={study.reference} target="_blank" rel="noopener noreferrer">Read the repository documentation <ArrowUpRight size={16} /></a></section>
      <section className="engineering-case-next"><p>Explore the other AI project</p><Link href={project === "crimebase" ? "/work/tripweave" : "/work/crimebase"}>{project === "crimebase" ? "TripWeave" : "CrimeBase"}<ArrowUpRight size={28} /></Link></section>
    </article><footer className="case-route-footer"><p>{study.name} · AI & full stack engineering</p><Link href="/#work">Back to selected work <ArrowLeft size={15} /></Link></footer>
  </main>;
}
