import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Code2,
  BrainCircuit,
  Database,
  ShieldCheck,
  Plane,
  Layers3,
  MessageSquareText,
  MousePointer2,
  Sparkles,
  Workflow,
} from "lucide-react";

const capabilities = [
  { label: "AI application engineering", detail: "Gemini, LangGraph workflows, grounded responses and guardrails", icon: BrainCircuit },
  { label: "Full stack development", detail: "React, TypeScript, Python, FastAPI and PostgreSQL", icon: Code2 },
  { label: "UX & product design", detail: "User flows, interaction design, prototypes, design systems and accessibility", icon: Layers3 },
  { label: "Reliable AI workflows", detail: "SQL validation, durable conversations and provider fallbacks", icon: ShieldCheck },
];

const projects = [
  { index: "01", title: "CrimeBase", eyebrow: "AI engineering · Conversational analytics",
    description: "A full stack AI analyst for India crime statistics. Natural-language questions become validated, read-only PostgreSQL queries, with grounded answers, comparisons and source context.",
    tags: ["React", "TypeScript", "Python", "FastAPI", "Gemini", "PostgreSQL"],
    result: "Database-grounded answers with SQL validation and deterministic fallbacks",
    accent: "crime", preview: "crimebase" as const, route: "/work/crimebase" },
  { index: "02", title: "TripWeave", eyebrow: "Agentic AI · Travel planning",
    description: "An India-focused travel assistant built with LangGraph and Gemini. Guided conversations collect preferences, research destinations and produce structured itineraries with saved plans and streamed progress.",
    tags: ["LangGraph", "LangChain", "Gemini", "FastAPI", "React", "SSE"],
    result: "Resumable planning conversations with checkpoints and validated daily schedules",
    accent: "travel", preview: "tripweave" as const, route: "/work/tripweave" },
  {
    index: "03",
    title: "AskRocky for ClearPath",
    eyebrow: "Embedded AI · Enterprise HR",
    description:
      "A contextual assistant embedded in ClearPath that gives sales, implementation and client teams reliable guidance without leaving their active workflow.",
    tags: ["Product UX", "React", "Redux", "AI interaction", "Design system"],
    result: "In-workflow answers with clear confidence, sources and escalation",
    accent: "blue",
    preview: "assistant" as const,
    route: "/work/askrocky",
  },
  {
    index: "04",
    title: "PulseIQ AI Operations",
    eyebrow: "AI analytics · Enterprise operations",
    description:
      "A unified operations workspace for monitoring AskRocky conversations, quality signals, unresolved questions and governed knowledge across enterprise products.",
    tags: ["Analytics UX", "React", "Data visualization", "Knowledge governance"],
    result: "One clear view of chatbot health, conversation evidence and content readiness",
    accent: "pulse",
    preview: "pulseiq" as const,
    route: "/work/pulseiq",
  },
  {
    index: "05",
    title: "Ethiqly Learning Platform",
    eyebrow: "EdTech · Classroom experience",
    description:
      "A cohesive learning suite for classroom conversations, grading, brainstorming and billing—applying WCAG accessibility knowledge through semantic structure, keyboard support, visible focus states and accessible contrast.",
    tags: ["Responsive UI", "Figma", "WCAG accessibility", "Reusable components"],
    result: "A consistent, inclusive experience across core educator workflows",
    accent: "coral",
    preview: "learning" as const,
    route: "/work/ethiqly",
  },
  {
    index: "06",
    title: "Banking Forms Platform",
    eyebrow: "FinTech · Workflow modernization",
    description:
      "A modular form experience for credit-card and personal-loan journeys, balancing compliance, completion speed and trust.",
    tags: ["User flows", "Angular Material", "Validation UX", "UI leadership"],
    result: "Reusable patterns for complex, high-intent applications",
    accent: "lime",
    preview: "banking" as const,
    route: null,
  },
];

const tools = ["RAG", "GenAI", "MCP", "Redux", "Python", "TypeScript", "LangGraph", "LangChain", "FastAPI", "React", "PostgreSQL", "pgvector", "Server-Sent Events", "REST APIs", "GitHub", "Vite", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Bootstrap", "Material UI", "Ant Design", "Angular Material", "Figma", "User flows", "Interaction design", "Prototyping", "Design systems", "Accessibility"];

function ProductPreview({ type }: { type: "assistant" | "pulseiq" | "learning" | "banking" | "crimebase" | "tripweave" }) {
  if (type === "crimebase" || type === "tripweave") {
    const crime = type === "crimebase";
    return <div className={`preview-window engineering-preview ${crime ? "crime-preview" : "travel-preview"}`} aria-hidden="true">
      <div className="window-bar"><i /><i /><i /><span>{crime ? "CrimeBase · AI analyst" : "TripWeave · Travel companion"}</span></div>
      <div className="engineering-preview-shell"><aside><span className="engineering-mark">{crime ? <Database size={20} /> : <Plane size={20} />}</span><b>{crime ? "CrimeBase" : "TripWeave"}</b><span>{crime ? "AI analyst" : "Plan a journey"}</span><span>{crime ? "Data coverage" : "Saved itineraries"}</span><small>{crime ? "GROUNDED ANALYTICS" : "LANGGRAPH WORKFLOW"}</small></aside>
      <div className="engineering-preview-main"><small>{crime ? "QUESTION → QUERY → EVIDENCE" : "RESEARCH → PLAN → VALIDATE"}</small><h3>{crime ? "Ask the data." : "A journey, thoughtfully planned."}</h3><div className="engineering-question">{crime ? "Compare crime trends across states" : "Help me plan a trip to Jaipur"}<Sparkles size={14} /></div><div className="engineering-answer"><b>{crime ? "Read-only SQL validation" : "Your planning workflow"}</b>{(crime ? ["Approved tables & bounded queries", "Database results & source context", "Comparisons with data caveats"] : ["Collect preferences & research sources", "Build a timed daily itinerary", "Validate, save & resume"]).map(line => <span key={line}><Check size={11} />{line}</span>)}</div><p className="preview-caption">Illustrative workflow preview</p></div></div></div>;
  }
  if (type === "assistant") {
    return (
      <div className="preview-window assistant-preview" aria-hidden="true">
        <div className="window-bar"><i /><i /><i /><span>AskRocky · ClearPath</span></div>
        <div className="assistant-shell">
          <div className="assistant-sidebar">
            <span className="mini-logo"><Sparkles size={15} /></span>
            <span /><span /><span />
          </div>
          <div className="assistant-chat">
            <small>PAYROLL ASSISTANT</small>
            <h3>How can I help today?</h3>
            <div className="prompt-row"><span>Review a payroll exception</span><ArrowUpRight size={14} /></div>
            <div className="chat-bubble">How do I correct a missed deduction?</div>
            <div className="ai-answer"><b><Sparkles size={13} /> Answer</b><span /><span /><span className="short" /></div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "pulseiq") {
    return (
      <div className="preview-window pulse-preview" aria-hidden="true">
        <div className="window-bar"><i /><i /><i /><span>PulseIQ · AI operations</span></div>
        <div className="pulse-preview-canvas">
          <img src="/case-study/pulseiq/dashboard.png" alt="" />
          <div className="pulse-preview-note"><small>LIVE SIGNALS</small><b>Chat quality at a glance</b></div>
        </div>
      </div>
    );
  }

  if (type === "learning") {
    return (
      <div className="preview-window learning-preview" aria-hidden="true">
        <div className="window-bar"><i /><i /><i /><span>Ethiqly · Classroom</span></div>
        <div className="learning-shell">
          <aside><b>ethiqly</b><span className="active" /><span /><span /><span /></aside>
          <div className="learning-main">
            <div className="course-head"><div><small>MY CLASSROOM</small><h3>Design foundations</h3></div><button>+ Activity</button></div>
            <div className="metric-grid"><div><b>24</b><small>Students</small></div><div><b>08</b><small>Activities</small></div><div><b>92%</b><small>Engagement</small></div></div>
            <div className="activity-card"><span className="activity-icon"><MessageSquareText size={18} /></span><div><b>Interface critique</b><small>Discussion · Open</small></div><strong>18/24</strong></div>
            <div className="activity-card"><span className="activity-icon purple"><MousePointer2 size={18} /></span><div><b>Prototype review</b><small>Workshop · Tomorrow</small></div><strong>12/24</strong></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="preview-window banking-preview" aria-hidden="true">
      <div className="window-bar"><i /><i /><i /><span>Application workspace</span></div>
      <div className="bank-shell">
        <div className="bank-top"><span>ACME BANK</span><small>Application #7842</small></div>
        <div className="progress-rail"><i className="done"><Check size={12} /></i><span /><i className="done"><Check size={12} /></i><span /><i>3</i><span /><i>4</i></div>
        <div className="form-card"><small>STEP 3 OF 4</small><h3>Employment details</h3><p>Tell us about your current employment.</p><div className="input-row"><label>Company name<span /></label><label>Employment type<span /></label></div><label>Annual income<span className="wide" /></label><button>Continue <ArrowUpRight size={14} /></button></div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Guru Prasad, home"><span>GP</span><b>Guru Prasad</b></a>
        <nav aria-label="Primary navigation">
          <a href="#about">About</a><a href="#work">Work</a><a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href="#contact">Let&apos;s talk <ArrowUpRight size={16} /></a>
      </header>

      <section className="hero section-shell" id="top">
        <div className="hero-copy reveal">
          <p className="eyebrow"><span /> AI Engineer / AI Full Stack Engineer</p>
          <h1>I build AI that connects <em>intelligence</em> to real products.</h1>
          <p className="hero-body">I&apos;m Guru Prasad, an AI Engineer and AI Full Stack Engineer with 6.3 years of experience building digital products. I connect LLMs, agent workflows, APIs and databases with clear, usable interfaces.</p>
          <div className="hero-actions">
            <a className="button primary" href="#work">Explore selected work <ArrowDownRight size={18} /></a>
            <a className="text-link" href="#about">More about me <ArrowDownRight size={16} /></a>
          </div>
          <div className="hero-meta"><div><strong>6.3</strong><span>Years shaping<br />digital products</span></div><div><strong>AI</strong><span>Grounded answers &amp;<br />agent workflows</span></div><div><strong>Full stack</strong><span>From interface<br />to database</span></div></div>
        </div>

        <div className="hero-canvas reveal delay-1" aria-label="AI workflows and full stack product engineering">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="canvas-label"><span>SELECTED PROJECTS</span><b>06 PROJECTS</b></div>
          <div className="floating-card flow-card"><small>AI WORKFLOW</small><div className="flow-row"><i /><span /><i /><span /><i /></div><b>From question to<br />confident answer</b></div>
          <div className="floating-card component-card"><small>GUARDRAILS</small><div className="toggle-row"><span>Confidence</span><i><b /></i></div><div className="color-row"><i /><i /><i /><i /></div></div>
          <div className="floating-card prototype-card"><div className="phone-head"><span /><i /></div><small>GOOD MORNING</small><h3>What can I help<br />you find?</h3><div className="fake-input">Ask a question <Sparkles size={14} /></div><div className="waveform"><i /><i /><i /><i /><i /><i /><i /></div></div>
          <div className="cursor-tag"><MousePointer2 size={20} fill="currentColor" /><span>Guru</span></div>
          <div className="canvas-footer"><span>Gemini</span><span>FastAPI</span><span>React</span></div>
          <div className="canvas-project-nav" aria-label="Jump to a selected project"><a href="#project-01"><b>01</b><span>CrimeBase</span></a><a href="#project-02"><b>02</b><span>TripWeave</span></a><a href="#project-03"><b>03</b><span>AskRocky</span></a><a href="#work"><b>06</b><span>All projects</span></a></div>
        </div>
      </section>

      <section className="logo-strip" aria-label="Core strengths"><p>GROUND AI IN DATA</p><i /><p>BUILD END TO END</p><i /><p>VALIDATE EVERY WORKFLOW</p></section>

      <section className="about section-shell" id="about">
        <div className="section-intro"><p className="eyebrow"><span /> About me</p><h2>AI intelligence.<br /><em>Full stack execution.</em></h2></div>
        <div className="about-content">
          <p className="large-copy">I bring AI engineering and UX thinking together, turning complex workflows into clear, accessible products from the first user flow to the working application.</p>
          <p>Currently at <strong>ValueLabs</strong>, I work across enterprise products, AI-assisted experiences and high-stakes workflows. My work combines hands-on Python APIs, conversational analytics and agent-based planning with UX skills in user flows, interaction design, prototyping and accessible design systems.</p>
        </div>
          <div className="capability-list">
            {capabilities.map(({ label, detail, icon: Icon }, i) => <div className="capability" key={label}><span>0{i + 1}</span><Icon size={22} /><div><b>{label}</b><small>{detail}</small></div><ArrowUpRight size={18} /></div>)}
          </div>

      </section>

      <section className="work" id="work">
        <div className="section-shell work-heading"><div><p className="eyebrow light"><span /> Selected work</p><h2>AI systems,<br /><em>built into products.</em></h2></div><p>Hands-on AI and full stack projects, alongside enterprise experience in embedded assistants, analytics and accessible interfaces.</p></div>
        <div className="project-list section-shell">
          {projects.map((project) => (
            <article className={`project-card ${project.accent}`} id={`project-${project.index}`} key={project.title}>
              <div className="project-copy"><div className="project-number">{project.index}</div><p className="project-eyebrow">{project.eyebrow}</p><h3>{project.title}</h3><p>{project.description}</p><div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>{project.route ? <a className="project-case-trigger" href={project.route} aria-label={`View the ${project.title} case study`}>View case study <ArrowUpRight size={17} /></a> : <a className="project-case-trigger" href="#contact" aria-label={`Discuss ${project.title}`}>Discuss this project <ArrowUpRight size={17} /></a>}<div className="project-result"><Check size={16} /><span>{project.result}</span></div></div>
              <div className="project-visual"><div className="project-preview-fit"><div className="project-preview-scale"><ProductPreview type={project.preview} /></div></div></div>
            </article>
          ))}
        </div>
      </section>

      <section className="process section-shell">
        <div className="section-intro"><p className="eyebrow"><span /> How I work</p><h2>From ambiguity<br />to <em>adoption.</em></h2></div>
        <div className="process-grid">
          {[['01','Define','Identify the task, available data, success criteria and where AI adds value.'],['02','Connect','Build typed APIs, data access and model or agent workflows around the problem.'],['03','Validate','Check structured outputs, SQL boundaries, source grounding and failure paths.'],['04','Deliver','Connect the frontend, test the workflow and make loading, errors and limitations clear.']].map(([num,title,copy]) => <div className="process-step" key={num}><span>{num}</span><h3>{title}</h3><p>{copy}</p></div>)}
        </div>
      </section>

      <section className="toolkit section-shell">
        <div className="toolkit-copy"><p className="eyebrow"><span /> Toolkit</p><h2>AI orchestration meets<br /><em>full stack engineering.</em></h2><p>AI and full stack engineering supported by UX craft: user flows, interaction design, prototyping, design systems and accessibility.</p></div>
        <div className="tool-cloud">{tools.map((tool) => <span key={tool}>{tool === "Python" && <Code2 size={16} />}{tool}</span>)}</div>
      </section>

      <section className="contact" id="contact">
        <div className="section-shell contact-inner">
          <p className="eyebrow light"><span /> Contact</p>
          <h2>Building an AI product?<br /><em>Let&apos;s bring it to life.</em></h2>
          <p>I&apos;m open to AI Engineer and AI Full Stack Engineer opportunities, building useful applications from model integration to production interfaces.</p>
          <a className="button contact-button" href="mailto:prassadh1994@gmail.com?subject=Portfolio%20enquiry%20for%20Guru%20Prasad">Start a conversation <ArrowUpRight size={20} /></a>
          <div className="contact-meta"><a href="mailto:prassadh1994@gmail.com">prassadh1994@gmail.com</a><span>Hyderabad, India</span><span>Currently at ValueLabs</span><a href="https://github.com/pguru1214" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={14} /></a></div>
        </div>
      </section>

      <footer><a className="brand" href="#top"><span>GP</span><b>Guru Prasad</b></a><p>AI engineering. Full stack craft.</p><a href="#top">Back to top <ArrowUpRight size={15} /></a></footer>
    </main>
  );
}
