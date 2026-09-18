import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Code2,
  PenTool,
  Layers3,
  MessageSquareText,
  MousePointer2,
  Sparkles,
  Workflow,
} from "lucide-react";

const capabilities = [
  { label: "Interface design", detail: "Design systems, responsive UI, accessibility", icon: Layers3 },
  { label: "UX direction", detail: "User flows, prototypes, usability decisions", icon: Workflow },
  { label: "UI engineering", detail: "Production-ready React component systems", icon: Code2 },
];

const projects = [
  {
    index: "01",
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
    index: "02",
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
    index: "03",
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
    index: "04",
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

const tools = [
  "Figma", "Adobe XD", "Adobe Photoshop", "HTML", "CSS", "Sass", "JavaScript",
  "React.js", "Redux", "Tailwind CSS", "Bootstrap", "Material UI", "Angular Material",
  "Node.js", "Express.js", "MongoDB", "PostgreSQL", "GitHub", "VS Code", "pgAdmin",
  "MongoDB Atlas", "Prototypes", "User flows",
];

function ProductPreview({ type }: { type: "assistant" | "pulseiq" | "learning" | "banking" }) {
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
          <p className="eyebrow"><span /> Product Designer × UI Engineer</p>
          <h1>I design interfaces that feel <em>clear</em> and ship beautifully.</h1>
          <p className="hero-body">I&apos;m Guru Prasad, a product-focused designer and front-end engineer with 6.3 years of experience turning complex workflows into useful, polished products.</p>
          <div className="hero-actions">
            <a className="button primary" href="#work">Explore selected work <ArrowDownRight size={18} /></a>
            <a className="text-link" href="#about">More about me <ArrowDownRight size={16} /></a>
          </div>
          <div className="hero-meta"><div><strong>6.3</strong><span>Years shaping<br />digital products</span></div><div><strong>65%</strong><span>UI craft &amp;<br />engineering</span></div><div><strong>35%</strong><span>UX thinking &amp;<br />validation</span></div></div>
        </div>

        <div className="hero-canvas reveal delay-1" aria-label="A collection of interface design artifacts">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="canvas-label"><span>SELECTED PROJECTS</span><b>04 CASE STUDIES</b></div>
          <div className="floating-card flow-card"><small>USER FLOW</small><div className="flow-row"><i /><span /><i /><span /><i /></div><b>From question to<br />confident answer</b></div>
          <div className="floating-card component-card"><small>COMPONENT</small><div className="toggle-row"><span>Confidence</span><i><b /></i></div><div className="color-row"><i /><i /><i /><i /></div></div>
          <div className="floating-card prototype-card"><div className="phone-head"><span /><i /></div><small>GOOD MORNING</small><h3>What can I help<br />you find?</h3><div className="fake-input">Ask a question <Sparkles size={14} /></div><div className="waveform"><i /><i /><i /><i /><i /><i /><i /></div></div>
          <div className="cursor-tag"><MousePointer2 size={20} fill="currentColor" /><span>Guru</span></div>
          <div className="canvas-footer"><span>Figma</span><span>React</span><span>Tailwind</span></div>
          <div className="canvas-project-nav" aria-label="Jump to a selected project">
            <a href="#project-01"><b>01</b><span>AskRocky</span></a>
            <a href="#project-02"><b>02</b><span>PulseIQ</span></a>
            <a href="#project-03"><b>03</b><span>Ethiqly</span></a>
            <a href="#project-04"><b>04</b><span>Banking</span></a>
          </div>
        </div>
      </section>

      <section className="logo-strip" aria-label="Core strengths"><p>DESIGN WITH INTENT</p><i /><p>BUILD WITH PRECISION</p><i /><p>SHIP WITH CONFIDENCE</p></section>

      <section className="about section-shell" id="about">
        <div className="section-intro"><p className="eyebrow"><span /> About me</p><h2>One mindset.<br /><em>Two disciplines.</em></h2></div>
        <div className="about-content">
          <p className="large-copy">I bridge the gap between thoughtful product design and production-ready UI—so ideas stay strong from the first flow to the final component.</p>
          <p>Currently at <strong>ValueLabs</strong>, I work across enterprise products, AI-assisted experiences and high-stakes workflows. My approach combines user context, systems thinking, visual clarity and clean front-end architecture.</p>
          <div className="capability-list">
            {capabilities.map(({ label, detail, icon: Icon }, i) => <div className="capability" key={label}><span>0{i + 1}</span><Icon size={22} /><div><b>{label}</b><small>{detail}</small></div><ArrowUpRight size={18} /></div>)}
          </div>
        </div>
      </section>

      <section className="work" id="work">
        <div className="section-shell work-heading"><div><p className="eyebrow light"><span /> Selected work</p><h2>Complex products,<br /><em>made effortless.</em></h2></div><p>A selection of enterprise products where research, interaction design and front-end craft work as one.</p></div>
        <div className="project-list section-shell">
          {projects.map((project) => (
            <article className={`project-card ${project.accent}`} id={`project-${project.index}`} key={project.title}>
              <div className="project-copy"><div className="project-number">{project.index}</div><p className="project-eyebrow">{project.eyebrow}</p><h3>{project.title}</h3><p>{project.description}</p><div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><div className="project-result"><Check size={16} /><span>{project.result}</span></div>{project.route ? <a className="project-case-trigger" href={project.route} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} case study in a new page`}>View case study <ArrowUpRight size={17} /></a> : <a href="#contact" aria-label={`Discuss ${project.title}`}>Discuss this project <ArrowUpRight size={17} /></a>}</div>
              <div className="project-visual"><ProductPreview type={project.preview} /></div>
            </article>
          ))}
        </div>
      </section>

      <section className="process section-shell">
        <div className="section-intro"><p className="eyebrow"><span /> How I work</p><h2>From ambiguity<br />to <em>adoption.</em></h2></div>
        <div className="process-grid">
          {[['01','Understand','Map the user, business goal and product constraints before choosing a solution.'],['02','Shape','Turn insights into user flows, wireframes and testable prototypes.'],['03','Craft','Build a durable visual language across states, screens and breakpoints.'],['04','Deliver','Partner with engineering or code the UI for a precise, accessible release.']].map(([num,title,copy]) => <div className="process-step" key={num}><span>{num}</span><h3>{title}</h3><p>{copy}</p></div>)}
        </div>
      </section>

      <section className="toolkit section-shell">
        <div className="toolkit-copy"><p className="eyebrow"><span /> Toolkit</p><h2>Design fluency meets<br /><em>front-end depth.</em></h2><p>I choose tools for the problem—not the trend—and move comfortably from concept to component.</p></div>
        <div className="tool-cloud">{tools.map((tool, i) => <span className={i < 2 ? "featured" : ""} key={tool}>{tool === "Figma" && <PenTool size={16} />}{tool}</span>)}</div>
      </section>

      <section className="contact" id="contact">
        <div className="section-shell contact-inner">
          <p className="eyebrow light"><span /> Contact</p>
          <h2>Have a complex product?<br /><em>Let&apos;s make it feel simple.</em></h2>
          <p>I&apos;m open to product design and UI engineering conversations with teams that care about useful, well-crafted experiences.</p>
          <a className="button contact-button" href="mailto:prassadh1994@gmail.com?subject=Portfolio%20enquiry%20for%20Guru%20Prasad">Start a conversation <ArrowUpRight size={20} /></a>
          <div className="contact-meta"><a href="mailto:prassadh1994@gmail.com">prassadh1994@gmail.com</a><span>Hyderabad, India</span><span>Currently at ValueLabs</span></div>
        </div>
      </section>

      <footer><a className="brand" href="#top"><span>GP</span><b>Guru Prasad</b></a><p>Designed with intent. Built with React.</p><a href="#top">Back to top <ArrowUpRight size={15} /></a></footer>
    </main>
  );
}
