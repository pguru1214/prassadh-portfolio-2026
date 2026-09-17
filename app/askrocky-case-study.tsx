import {
  ArrowRight,
  Accessibility,
  Bot,
  Check,
  CircleAlert,
  Database,
  ExternalLink,
  FileText,
  Gauge,
  MessageSquareText,
  MonitorSmartphone,
  PanelsTopLeft,
  Radio,
  RefreshCw,
  Send,
  ShieldCheck,
  Sparkles,
  UserRound,
  UsersRound,
  Workflow,
} from "lucide-react";

const personas = [
  ["CSR", "Internal support", "Fast, policy-safe answers"],
  ["Implementation Specialist", "Internal onboarding", "Workflow-aware guidance"],
  ["Client Admin", "External client", "Company-specific support"],
  ["Customer", "External employee", "Clear self-service answers"],
];

const flow = [
  { icon: MessageSquareText, label: "Ask", detail: "User submits a question" },
  { icon: ShieldCheck, label: "Context guard", detail: "Product + persona isolation" },
  { icon: Database, label: "Retrieve", detail: "Approved, published knowledge" },
  { icon: Gauge, label: "Confidence", detail: "Risk-aware response gate" },
  { icon: FileText, label: "Resolve", detail: "Cited answer or escalation" },
];

function WelcomePrototype() {
  return (
    <div className="case-phone">
      <div className="case-phone-bar"><span>9:41</span><i /></div>
      <div className="case-phone-head"><span><Sparkles size={15} /></span><div><b>AskRocky</b><small>ClearPath assistant</small></div><i /></div>
      <div className="case-welcome-mark"><Bot size={26} /></div>
      <small className="case-overline">WELCOME BACK</small>
      <h4>What can I help you complete today?</h4>
      <div className="case-suggestion">Where can I find my payroll documents?<ArrowRight size={13} /></div>
      <div className="case-suggestion">How do I fix a submission error?<ArrowRight size={13} /></div>
      <div className="case-input">Ask a question…<Send size={14} /></div>
    </div>
  );
}

function AnswerPrototype() {
  return (
    <div className="case-phone answer-phone">
      <div className="case-phone-bar"><span>9:41</span><i /></div>
      <div className="case-phone-head"><span><Sparkles size={15} /></span><div><b>AskRocky</b><small>ClearPath · Client Admin</small></div><i /></div>
      <div className="case-user-message">How do I correct a missed deduction?</div>
      <div className="case-stream"><span><Sparkles size={13} /> AskRocky</span><p>Open the employee&apos;s payroll record, select the affected pay period, then choose <b>Adjust deduction</b>.</p><p>Review the updated total before submitting the correction.</p></div>
      <div className="case-sources"><b><FileText size={13} /> 2 approved sources</b><span>Payroll corrections · ClearPath</span><span>Deduction workflow · v4.2</span></div>
      <div className="case-confidence"><ShieldCheck size={13} /><span>High confidence</span><strong>0.94</strong></div>
      <div className="case-input">Ask a follow-up…<Send size={14} /></div>
    </div>
  );
}

function EscalationPrototype() {
  return (
    <div className="case-phone escalation-phone">
      <div className="case-phone-bar"><span>9:41</span><i /></div>
      <div className="case-phone-head"><span><Sparkles size={15} /></span><div><b>AskRocky</b><small>High-risk guidance</small></div><i /></div>
      <div className="case-user-message">Can I change this tax withholding?</div>
      <div className="case-warning"><CircleAlert size={18} /><div><b>I want to make sure you get the right guidance.</b><p>I couldn&apos;t verify this answer with enough confidence.</p></div></div>
      <div className="case-escalation-card"><span><UsersRound size={17} /></span><div><b>Specialist support</b><small>Your question and session context can be attached automatically.</small></div></div>
      <button type="button" className="case-escalate-button">Create support case <ExternalLink size={14} /></button>
      <div className="case-status"><i /><span>Case routed through Salesforce</span></div>
    </div>
  );
}

export function AskRockyCaseStudyPage() {
  return (
    <article className="case-page" aria-labelledby="askrocky-title" aria-describedby="askrocky-description">
        <div className="case-scroll">
          <header className="case-hero">
            <div className="case-kicker"><span>CASE STUDY · ENTERPRISE AI</span><b>2026</b></div>
            <div className="case-hero-grid">
              <div>
                <p className="case-eyebrow">AllianceHCM · ClearPath · ValueLabs</p>
                <h2 id="askrocky-title" className="case-title">AskRocky</h2>
                <p id="askrocky-description" className="case-description">
                  Designing and building a trustworthy AI assistant embedded inside ClearPath for complex sales, HR, payroll and onboarding workflows.
                </p>
                <div className="case-role-row"><span>Product UX</span><span>UI design</span><span>React</span><span>Redux</span><span>WCAG</span><span>Design system</span></div>
              </div>
              <div className="case-hero-stat"><small>MY CONTRIBUTION</small><div><strong>35%</strong><span>UX strategy,<br />flows &amp; validation</span></div><div><strong>65%</strong><span>UI system,<br />prototype &amp; frontend</span></div></div>
            </div>
          </header>

          <section className="case-section case-overview">
            <div className="case-section-label">01 · Overview</div>
            <div className="case-overview-copy">
              <h3>Support was fragmented. The answer needed to feel immediate—and still be safe.</h3>
              <p>HR teams and clients move between onboarding, payroll and analytics products. AskRocky brings relevant help into the active workflow while protecting product, persona and company boundaries.</p>
              <div className="case-brief-grid">
                <div><small>CHALLENGE</small><p>Reduce support dependency without exposing the wrong guidance.</p></div>
                <div><small>ROLE</small><p>UX direction, interaction design, visual system and React delivery.</p></div>
                <div><small>SUCCESS TARGET</small><p>Resolve ≥70% of supported questions without PM escalation.</p></div>
              </div>
            </div>
          </section>

          <section className="case-section clearpath-section">
            <div className="case-section-label">02 · ClearPath</div>
            <div className="case-section-body">
              <div className="case-heading-row"><div><p>PRODUCT CONTEXT</p><h3>AI support lives inside the workflow—not in another destination.</h3></div><PanelsTopLeft size={30} /></div>
              <p className="case-lead">ClearPath connects the journey from sales opportunity through client activation and the AllPay handoff. The experience includes a sales dashboard, proposal and onboarding workflows, a progressive client portal, and implementation visibility. AskRocky is embedded as the contextual support layer across that journey.</p>
              <div className="clearpath-stage-grid">
                <article><span>01</span><b>Documents</b><p>Guide users through upload, review, rejection and approval states.</p></article>
                <article><span>02</span><b>Payroll data sync</b><p>Support setup and explain payroll-related tasks in context.</p></article>
                <article><span>03</span><b>Go-live tracking</b><p>Surface milestones, progress and the next action for each role.</p></article>
              </div>
              <figure className="product-shot product-shot-wide">
                <div className="shot-toolbar"><span><i /><i /><i /></span><b>ClearPath · Sales Rep Dashboard</b><small>Launcher state</small></div>
                <img src="/case-study/clearpath-launcher.png" alt="ClearPath sales representative dashboard with the AskRocky launcher visible in the bottom-right corner" />
                <figcaption><span>01</span><div><b>Quiet until needed</b><p>The assistant begins as a persistent, low-interruption launcher so it remains available without competing with the primary dashboard task.</p></div></figcaption>
              </figure>
            </div>
          </section>

          <section className="case-section">
            <div className="case-section-label">03 · Users &amp; context</div>
            <div className="case-section-body">
              <div className="case-heading-row"><div><p>CONTEXT MODEL</p><h3>One assistant, four distinct experiences.</h3></div><UserRound size={30} /></div>
              <div className="persona-grid">{personas.map(([name,type,need]) => <article key={name}><span>{name.split(" ").map(word => word[0]).join("")}</span><div><h4>{name}</h4><small>{type}</small><p>{need}</p></div></article>)}</div>
              <div className="context-contracts">
                <div><b>ClearPath context</b><span>Role · Company ID · Workflow stage</span></div>
                <ArrowRight size={20} />
                <div><b>PulseIQ context</b><span>Dashboard · Metric · Filters · Date range</span></div>
                <ArrowRight size={20} />
                <div><b>AllPay context</b><span>Payroll task · Account · Risk tier</span></div>
              </div>
              <p className="case-note"><RefreshCw size={15} /> Switching product or persona intentionally starts a fresh session to prevent context leakage.</p>
            </div>
          </section>

          <section className="case-section dark-case-section">
            <div className="case-section-label">04 · User flow</div>
            <div className="case-section-body">
              <div className="case-heading-row"><div><p>TRUST-BY-DESIGN FLOW</p><h3>Every answer passes through context and confidence gates.</h3></div><Workflow size={30} /></div>
              <div className="case-flow">{flow.map(({icon: Icon,label,detail},index) => <div className="case-flow-item" key={label}><span><Icon size={19} /></span><b>{label}</b><small>{detail}</small>{index < flow.length - 1 && <ArrowRight className="case-flow-arrow" size={18} />}</div>)}</div>
              <div className="decision-grid">
                <div className="decision-card positive"><span><Check size={17} /></span><div><small>CONFIDENCE ≥ 0.90</small><h4>Stream the answer</h4><p>Show approved sources and allow a contextual follow-up.</p></div></div>
                <div className="decision-card warning"><span><CircleAlert size={17} /></span><div><small>LOW OR HIGH-RISK CONFIDENCE</small><h4>Explain and escalate</h4><p>Create a Salesforce case with transcript, user, product and session context.</p></div></div>
              </div>
              <div className="session-rule-row"><span><b>30 min</b> idle timeout</span><span><b>24 hr</b> hard limit</span><span><b>1</b> product + persona per session</span><span><b>SSE</b> response streaming</span></div>
            </div>
          </section>

          <section className="case-section prototype-section">
            <div className="case-section-label">05 · Interaction states</div>
            <div className="case-section-body">
              <div className="case-heading-row"><div><p>KEY INTERACTION STATES</p><h3>A complete path from welcome to resolution.</h3></div><Sparkles size={30} /></div>
              <div className="prototype-showcase">
                <div><span className="prototype-caption">01 · Welcome + suggested questions</span><WelcomePrototype /></div>
                <div><span className="prototype-caption">02 · Streaming answer + sources</span><AnswerPrototype /></div>
                <div><span className="prototype-caption">03 · Transparent escalation</span><EscalationPrototype /></div>
              </div>
            </div>
          </section>

          <section className="case-section evidence-section">
            <div className="case-section-label">06 · In product</div>
            <div className="case-section-body">
              <div className="case-heading-row"><div><p>REAL INTERFACE EVIDENCE</p><h3>One responsive assistant, presented in two integration modes.</h3></div><MonitorSmartphone size={30} /></div>
              <p className="case-lead">The same component system supports a focused iframe experience and a right-side embedded panel in ClearPath. Suggested questions adapt to product, persona and the active page, while the input remains available for open-ended support.</p>
              <div className="evidence-grid">
                <figure className="product-shot portrait-shot">
                  <div className="shot-toolbar"><span><i /><i /><i /></span><b>AskRocky iframe</b><small>Focused view</small></div>
                  <div className="shot-canvas"><img src="/case-study/askrocky-iframe.png" alt="Standalone AskRocky iframe showing a welcome message, suggested questions and question input" /></div>
                  <figcaption><span>02</span><div><b>Focused support surface</b><p>A clean standalone iframe for concentrated conversations and reusable integration.</p></div></figcaption>
                </figure>
                <figure className="product-shot landscape-shot">
                  <div className="shot-toolbar"><span><i /><i /><i /></span><b>ClearPath + AskRocky</b><small>Embedded panel</small></div>
                  <div className="shot-canvas"><img src="/case-study/askrocky-clearpath-embedded.png" alt="ClearPath sales dashboard with AskRocky open as an embedded right-side assistant panel" /></div>
                  <figcaption><span>03</span><div><b>Context without interruption</b><p>The side panel preserves dashboard visibility, keeps users oriented and supplies questions relevant to the sales workflow.</p></div></figcaption>
                </figure>
              </div>
              <div className="integration-note"><Radio size={18} /><div><b>Context passed with every conversation</b><span>User ID · Company ID · Persona · Product · Role · Current page · Workflow stage</span></div></div>
            </div>
          </section>

          <section className="case-section">
            <div className="case-section-label">07 · System thinking</div>
            <div className="case-section-body">
              <div className="case-heading-row"><div><p>DESIGNED BEYOND THE HAPPY PATH</p><h3>The UI makes system behavior visible.</h3></div><ShieldCheck size={30} /></div>
              <div className="system-grid">
                <article><span>01</span><h4>Approved knowledge only</h4><p>Retrieval filters published content by product, persona, audience and risk tier.</p></article>
                <article><span>02</span><h4>Confidence is actionable</h4><p>Thresholds control cited answers, fallback language and high-risk escalation.</p></article>
                <article><span>03</span><h4>Escalation keeps context</h4><p>Salesforce receives the transcript, question, confidence, timestamp and source app.</p></article>
                <article><span>04</span><h4>Failure stays useful</h4><p>A static FAQ fallback supports users if the conversational API is unavailable.</p></article>
              </div>
              <div className="validation-strip"><div><strong>909</strong><span>golden Q&amp;A items in the evaluation harness</span></div><div><strong>45</strong><span>knowledge-base categories represented</span></div><div><strong>0.89 / 0.90</strong><span>boundary states explicitly tested</span></div></div>
            </div>
          </section>

          <section className="case-section delivery-section">
            <div className="case-section-label">08 · Delivery</div>
            <div className="case-section-body">
              <div className="case-heading-row"><div><p>DESIGN TO PRODUCTION</p><h3>The interaction model and frontend architecture were designed together.</h3></div><Accessibility size={30} /></div>
              <div className="delivery-grid">
                <article><small>FRONTEND</small><h4>Reusable React UI</h4><p>React, Redux/Context, Tailwind and Material UI components support product and persona variants without duplicating the experience.</p></article>
                <article><small>REAL-TIME RESPONSE</small><h4>SSE streaming</h4><p>Incremental responses reduce perceived waiting time while markdown, long-form answers and citations remain readable.</p></article>
                <article><small>SESSION SAFETY</small><h4>Context isolation</h4><p>A session ID is retained for continuity, with a 30-minute idle timeout, 24-hour limit and reset on product or persona change.</p></article>
                <article><small>ACCESSIBILITY</small><h4>WCAG-aware interaction</h4><p>Keyboard navigation, visible focus, semantic controls, readable contrast and responsive layouts were considered across launcher, panel and conversation states.</p></article>
              </div>
              <div className="case-testing"><b>Validation coverage</b><span>Cross-product isolation</span><span>Cross-persona isolation</span><span>0.89 / 0.90 confidence boundary</span><span>Refresh persistence</span><span>XSS and special characters</span><span>Repeated-question consistency</span><span>Citation visibility</span><span>Low-confidence escalation</span></div>
            </div>
          </section>

          <section className="case-final">
            <span><Sparkles size={18} /></span>
            <div><small>DESIGN PRINCIPLE</small><h3>AI earns trust when the interface clearly shows what it knows, where it learned it and what happens next.</h3></div>
          </section>
        </div>
    </article>
  );
}
