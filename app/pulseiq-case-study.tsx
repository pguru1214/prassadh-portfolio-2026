import {
  Accessibility,
  BarChart3,
  BookOpenCheck,
  Check,
  Database,
  Eye,
  Gauge,
  Layers3,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const pillars = [
  { icon: Gauge, title: "Performance", copy: "Track chat volume, users, response length, CSAT, accuracy, intent detection and deflection." },
  { icon: Database, title: "Conversation evidence", copy: "Search and filter conversation records, then inspect satisfaction and quality flags in context." },
  { icon: BookOpenCheck, title: "Knowledge governance", copy: "Organize approved articles by collection, persona, product and publication state." },
  { icon: ShieldCheck, title: "Operational safety", copy: "Surface unanswered questions and abusive-word signals without mixing user or product boundaries." },
];

type PulseShotProps = {
  src: string;
  alt: string;
  number: string;
  title: string;
  copy: string;
  crop?: "browser" | "privacy";
  dark?: boolean;
};

function PulseShot({ src, alt, number, title, copy, crop, dark = false }: PulseShotProps) {
  return (
    <figure className={`pulse-shot${dark ? " dark" : ""}`}>
      <div className="pulse-shot-bar"><span><i /><i /><i /></span><b>PULSEIQ · AI OPERATIONS</b><small>Product evidence</small></div>
      <div className={`pulse-shot-media${crop ? ` crop-${crop}` : ""}`}>
        <img src={src} alt={alt} />
      </div>
      <figcaption><span>{number}</span><div><b>{title}</b><p>{copy}</p></div></figcaption>
    </figure>
  );
}

export function PulseIQCaseStudyPage() {
  return (
    <article className="case-page pulse-case" aria-labelledby="pulseiq-title" aria-describedby="pulseiq-description">
      <div className="case-scroll">
        <header className="case-hero pulse-hero">
          <div className="case-kicker"><span>CASE STUDY · AI OPERATIONS</span><b>ALLIANCEHCM</b></div>
          <div className="case-hero-grid">
            <div>
              <p className="case-eyebrow">PulseIQ · AskRocky administration</p>
              <h2 id="pulseiq-title" className="case-title">PulseIQ</h2>
              <p id="pulseiq-description" className="case-description">Designing and building an operational intelligence layer that helps product and support teams understand chatbot health, inspect conversation evidence and govern trusted knowledge.</p>
              <div className="case-role-row"><span>Product UX</span><span>UI engineering</span><span>React</span><span>Analytics UX</span><span>Design system</span><span>WCAG</span></div>
            </div>
            <div className="case-hero-stat pulse-stat"><small>MY CONTRIBUTION</small><div><strong>35%</strong><span>Information architecture,<br />flows &amp; validation</span></div><div><strong>65%</strong><span>UI system,<br />states &amp; frontend</span></div></div>
          </div>
        </header>

        <section className="case-section case-overview">
          <div className="case-section-label">01 · Overview</div>
          <div className="case-overview-copy">
            <h3>The assistant could answer questions. Operations teams needed to understand how well it was working.</h3>
            <p>PulseIQ brings analytics, conversation review and knowledge administration into one enterprise workspace. The design turns many operational signals into a clear hierarchy: scan overall health, investigate the evidence, then improve the content behind the experience.</p>
            <div className="case-brief-grid">
              <div><small>CHALLENGE</small><p>Unify performance, quality and content signals without overwhelming administrators.</p></div>
              <div><small>USERS</small><p>AI operations, support, implementation and knowledge-management teams.</p></div>
              <div><small>ROLE</small><p>UX structure, interaction patterns, visual design and production React UI.</p></div>
            </div>
          </div>
        </section>

        <section className="case-section pulse-system-section">
          <div className="case-section-label">02 · System view</div>
          <div className="case-section-body">
            <div className="case-heading-row"><div><p>ONE WORKSPACE, FOUR JOBS</p><h3>A progressive path from signal to action.</h3></div><BarChart3 size={30} /></div>
            <div className="pulse-pillar-grid">{pillars.map(({ icon: Icon, title, copy }, index) => <article key={title}><span>0{index + 1}</span><Icon size={21} /><h4>{title}</h4><p>{copy}</p></article>)}</div>
            <PulseShot src="/case-study/pulseiq/dashboard.png" alt="PulseIQ AskRocky dashboard with lifetime KPI cards for chat volume, users, satisfaction, accuracy and deflection" number="01" title="Executive scan, operational detail" copy="The first viewport combines period controls, timezone context and eight clearly grouped KPIs so teams can spot change before opening deeper analysis." />
          </div>
        </section>

        <section className="case-section dark-case-section pulse-states-section">
          <div className="case-section-label">03 · Feedback states</div>
          <div className="case-section-body">
            <div className="case-heading-row"><div><p>DESIGNING FOR REAL DATA</p><h3>Loading states preserve structure instead of creating layout shifts.</h3></div><Sparkles size={30} /></div>
            <p className="case-lead">Skeletons mirror the final card and table geometry, helping users understand what is loading while filters and navigation remain stable.</p>
            <div className="pulse-pair">
              <PulseShot src="/case-study/pulseiq/dashboard-loading.jpg" alt="PulseIQ dashboard loading state with KPI skeleton cards" number="02" title="Dashboard loading state" copy="Reserved card geometry keeps the analytics layout calm and predictable while KPI requests resolve." crop="browser" dark />
              <PulseShot src="/case-study/pulseiq/dashboard-insights.png" alt="PulseIQ dashboard charts for daily volume, hourly distribution, category distribution and satisfaction" number="03" title="From trend to explanation" copy="Monthly trends, hourly patterns, topic distribution and satisfaction help teams move beyond a single top-line metric." dark />
            </div>
          </div>
        </section>

        <section className="case-section pulse-evidence-section">
          <div className="case-section-label">04 · Conversation evidence</div>
          <div className="case-section-body">
            <div className="case-heading-row"><div><p>TRACE THE SIGNAL</p><h3>Every KPI can be grounded in searchable conversation evidence.</h3></div><Search size={30} /></div>
            <div className="pulse-pair pulse-evidence-grid">
              <PulseShot src="/case-study/pulseiq/data-room-loading.jpg" alt="PulseIQ Data Room loading state with search, filters and table skeleton rows" number="04" title="Predictable table loading" copy="Search and filters stay available while row-level content loads, reducing uncertainty during large result sets." crop="browser" />
              <PulseShot src="/case-study/pulseiq/data-room.png" alt="PulseIQ Data Room showing conversation duration, length, satisfaction and quality flags" number="05" title="Quality signals in context" copy="A focused evidence view keeps duration, message length, satisfaction and flags scannable while protecting personal details in the public case study." crop="privacy" />
            </div>
          </div>
        </section>

        <section className="case-section pulse-knowledge-section">
          <div className="case-section-label">05 · Knowledge governance</div>
          <div className="case-section-body">
            <div className="case-heading-row"><div><p>CONTROL THE SOURCE</p><h3>Collections turn AI content into a governed product surface.</h3></div><BookOpenCheck size={30} /></div>
            <p className="case-lead">The split workspace keeps collection navigation, article search and publishing metadata visible together. Persona, product and status make audience boundaries explicit before content reaches AskRocky.</p>
            <PulseShot src="/case-study/pulseiq/knowledge-base.png" alt="PulseIQ Knowledge Base dashboard with collections, article search, personas, products and published status" number="06" title="A reviewable knowledge system" copy="Collections create a stable information architecture while article-level metadata supports review, publishing and audit-friendly maintenance." />
          </div>
        </section>

        <section className="case-section pulse-delivery-section">
          <div className="case-section-label">06 · Delivery</div>
          <div className="case-section-body">
            <div className="case-heading-row"><div><p>DESIGN SYSTEM + FRONTEND</p><h3>Reusable patterns keep analytics dense without making the interface difficult.</h3></div><Layers3 size={30} /></div>
            <div className="pulse-rule-grid">
              <article><Accessibility size={21} /><div><b>Accessible by default</b><p>Semantic landmarks, labelled controls, visible focus, keyboard navigation and contrast-aware status colors.</p></div></article>
              <article><Eye size={21} /><div><b>Scannable hierarchy</b><p>Consistent headings, card anatomy, tags and table density make operational exceptions easier to spot.</p></div></article>
              <article><Check size={21} /><div><b>State completeness</b><p>Loading, populated, empty and filtered states follow the same component structure and spacing rhythm.</p></div></article>
            </div>
            <div className="case-testing"><b>Validation focus</b><span>Keyboard order</span><span>Screen-reader labels</span><span>200% text resize</span><span>Responsive tables</span><span>Loading stability</span><span>Color-independent statuses</span></div>
          </div>
        </section>

        <section className="case-final pulse-final"><span><BarChart3 size={22} /></span><div><small>DESIGN OUTCOME</small><h3>PulseIQ turns AI operations into a clear loop: observe, investigate, govern and improve.</h3></div></section>
      </div>
    </article>
  );
}
