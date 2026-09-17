import {
  Accessibility,
  ArrowRight,
  Bot,
  Check,
  FileText,
  Gauge,
  Languages,
  LayoutDashboard,
  Lightbulb,
  LockKeyhole,
  MessageSquareText,
  PanelRight,
  Sparkles,
  Upload,
  UsersRound,
} from "lucide-react";

const products = [
  { icon: UsersRound, title: "Classroom", copy: "Create classrooms, invite students, assign work, manage timelines, notifications and rubrics." },
  { icon: Gauge, title: "Grading", copy: "Review uploaded essays with AI-supported scoring, highlights, feedback and assignment analytics." },
  { icon: Lightbulb, title: "Brainstorm", copy: "Turn notes and prompts into keywords, outlines, mind maps and editable writing directions." },
  { icon: LockKeyhole, title: "SSO & billing", copy: "Provide a consistent entry point, access model and account experience across the product suite." },
];

const delivery = [
  ["30+", "reusable UI components"],
  ["25+", "email and PDF templates"],
  ["4", "connected product experiences"],
  ["WCAG", "accessible interaction patterns"],
];

type ShotProps = {
  src: string;
  alt: string;
  number: string;
  title: string;
  copy: string;
  tone?: string;
};

function EthiqlyShot({ src, alt, number, title, copy, tone = "teal" }: ShotProps) {
  return (
    <figure className={`ethiqly-shot ${tone}`}>
      <div className="ethiqly-shot-bar"><span><i /><i /><i /></span><b>ETHIQLY · PRODUCT UI</b><small>Open image ↗</small></div>
      <a href={src} target="_blank" rel="noreferrer" aria-label={`Open full-size image: ${title}`}><img src={src} alt={alt} /></a>
      <figcaption><span>{number}</span><div><b>{title}</b><p>{copy}</p></div></figcaption>
    </figure>
  );
}

export function EthiqlyCaseStudyPage() {
  return (
    <article className="case-page ethiqly-case" aria-labelledby="ethiqly-title" aria-describedby="ethiqly-description">
      <div className="case-scroll">
        <header className="case-hero ethiqly-hero">
          <div className="case-kicker"><span>CASE STUDY · AI-ASSISTED EDTECH</span><b>VALUE LABS</b></div>
          <div className="case-hero-grid">
            <div>
              <p className="case-eyebrow">Ethiqly · Classroom + Grading</p>
              <h2 id="ethiqly-title" className="case-title">Ethiqly</h2>
              <p id="ethiqly-description" className="case-description">Designing and building a cohesive learning suite that helps educators create assignments, review student writing and deliver useful AI-assisted feedback.</p>
              <div className="case-role-row"><span>UI engineering</span><span>Product UX</span><span>React</span><span>Redux</span><span>Figma</span><span>WCAG</span></div>
            </div>
            <div className="case-hero-stat ethiqly-stat"><small>MY CONTRIBUTION</small><div><strong>30+</strong><span>Reusable<br />components</span></div><div><strong>4</strong><span>Connected<br />product areas</span></div></div>
          </div>
        </header>

        <section className="case-section case-overview">
          <div className="case-section-label">01 · Overview</div>
          <div className="case-overview-copy">
            <h3>Teachers needed speed. Students needed feedback they could understand and act on.</h3>
            <p>Ethiqly brings classroom management, AI-assisted grading, idea generation and account workflows into one consistent experience. The design challenge was to make complex educator tasks feel predictable while presenting AI feedback with enough structure, context and control.</p>
            <div className="case-brief-grid">
              <div><small>USERS</small><p>Educators managing assignments and students reviewing actionable writing feedback.</p></div>
              <div><small>ROLE</small><p>UI development, design collaboration, reusable components and REST API integration.</p></div>
              <div><small>PRINCIPLE</small><p>Keep AI assistance visible, understandable and secondary to educator judgment.</p></div>
            </div>
          </div>
        </section>

        <section className="case-section ethiqly-suite">
          <div className="case-section-label">02 · Product suite</div>
          <div className="case-section-body">
            <div className="case-heading-row"><div><p>ONE DESIGN LANGUAGE</p><h3>Multiple education workflows, one coherent system.</h3></div><LayoutDashboard size={30} /></div>
            <div className="ethiqly-product-grid">{products.map(({ icon: Icon, title, copy }, index) => <article key={title}><span>0{index + 1}</span><Icon size={22} /><h4>{title}</h4><p>{copy}</p></article>)}</div>
            <EthiqlyShot src="/case-study/ethiqly/grading-dashboard.png" alt="Ethiqly Grading assignments dashboard showing search, assignment metrics and add assignment action" number="01" title="Assignment command centre" copy="A scannable educator dashboard keeps search, assignment status, essay volume, average scores and primary actions in one predictable workspace." />
          </div>
        </section>

        <section className="case-section dark-case-section ethiqly-flow-section">
          <div className="case-section-label">03 · Core journey</div>
          <div className="case-section-body">
            <div className="case-heading-row"><div><p>FROM SETUP TO ACTIONABLE FEEDBACK</p><h3>A guided flow reduces effort at every handoff.</h3></div><ArrowRight size={30} /></div>
            <div className="ethiqly-flow">
              <div><span><LockKeyhole size={18} /></span><b>Enter securely</b><small>Google, Microsoft, Clever or account login</small></div>
              <ArrowRight size={18} />
              <div><span><FileText size={18} /></span><b>Create assignment</b><small>Grade, title, instructions and rubric</small></div>
              <ArrowRight size={18} />
              <div><span><Upload size={18} /></span><b>Add essays</b><small>Files, Drive, pasted text or images</small></div>
              <ArrowRight size={18} />
              <div><span><Sparkles size={18} /></span><b>Generate insights</b><small>Highlights, feedback and scores</small></div>
            </div>
            <div className="ethiqly-pair compact-pair">
              <EthiqlyShot src="/case-study/ethiqly/login.png" alt="Ethiqly login page with Google, Microsoft, Clever and email login options" number="02" title="Flexible authentication" copy="A single entry point supports the sign-in methods schools and educators already use." tone="dark" />
              <EthiqlyShot src="/case-study/ethiqly/upload-essay.png" alt="Ethiqly modal for adding essays through file upload, Google Drive, pasted text or image upload" number="03" title="Multi-source upload" copy="The upload dialog makes supported formats, limits and alternate import paths explicit before submission." tone="dark" />
            </div>
          </div>
        </section>

        <section className="case-section ethiqly-feedback-section">
          <div className="case-section-label">04 · Feedback UX</div>
          <div className="case-section-body">
            <div className="case-heading-row"><div><p>AI OUTPUT WITH STRUCTURE</p><h3>Feedback connects each insight to the student’s writing.</h3></div><PanelRight size={30} /></div>
            <p className="case-lead">The three-panel workspace preserves assignment context, keeps the essay readable and groups AI feedback by rubric dimension. Colour-coded categories and highlight counts help educators move between evidence and explanation without losing place.</p>
            <EthiqlyShot src="/case-study/ethiqly/essay-feedback.png" alt="Ethiqly essay review workspace with student files, highlighted essay text and rubric-based AI feedback" number="04" title="Evidence-linked essay feedback" copy="Student submissions, in-text highlights and detailed rubric feedback remain visible together so review stays contextual." />
            <div className="ethiqly-pair">
              <EthiqlyShot src="/case-study/ethiqly/feedback-loading.png" alt="Ethiqly feedback panel using skeleton loading while translated feedback is generated" number="05" title="Honest loading state" copy="Skeletons preserve the feedback structure and communicate progress while translated insights are prepared." />
              <EthiqlyShot src="/case-study/ethiqly/multilingual-feedback.png" alt="Ethiqly essay feedback translated into Traditional Chinese with option to show English" number="06" title="Multilingual review" copy="Educators can translate feedback while retaining the original English view and the same rubric hierarchy." />
            </div>
          </div>
        </section>

        <section className="case-section ethiqly-ai-section">
          <div className="case-section-label">05 · AI assistance</div>
          <div className="case-section-body">
            <div className="case-heading-row"><div><p>ASSIST WITHOUT TAKING OVER</p><h3>AI appears where it can remove a specific moment of friction.</h3></div><Bot size={30} /></div>
            <div className="ethiqly-pair">
              <EthiqlyShot src="/case-study/ethiqly/ai-assistant.png" alt="Ethiqly assignment creation page with the Etti AI assistant suggesting essay titles" number="07" title="Contextual writing assistant" copy="Etti opens beside assignment creation and provides reusable title suggestions without hiding the form underneath." />
              <EthiqlyShot src="/case-study/ethiqly/user-guide.png" alt="Ethiqly guided onboarding tooltip explaining the assignment details step" number="08" title="Progressive product guidance" copy="A short, dismissible walkthrough explains the four-step assignment setup at the moment it becomes relevant." />
            </div>
            <div className="ethiqly-design-rules">
              <div><MessageSquareText size={19} /><b>Contextual</b><span>Suggestions relate to the active task.</span></div>
              <div><Check size={19} /><b>Editable</b><span>Educators stay in control of final content.</span></div>
              <div><Languages size={19} /><b>Inclusive</b><span>Feedback can cross language barriers.</span></div>
            </div>
          </div>
        </section>

        <section className="case-section delivery-section ethiqly-delivery">
          <div className="case-section-label">06 · Delivery</div>
          <div className="case-section-body">
            <div className="case-heading-row"><div><p>DESIGN SYSTEM + FRONTEND</p><h3>Reusable patterns kept the suite consistent as it expanded.</h3></div><Accessibility size={30} /></div>
            <div className="delivery-grid">
              <article><small>COMPONENT SYSTEM</small><h4>Build once, reuse across products</h4><p>React components and shared patterns supported forms, tables, modals, navigation, feedback panels and responsive states.</p></article>
              <article><small>ACCESSIBILITY</small><h4>WCAG-aware by default</h4><p>Semantic structure, keyboard interaction, visible focus, readable contrast and clear status communication shaped everyday implementation.</p></article>
              <article><small>RESPONSIVE UI</small><h4>Mobile-first foundations</h4><p>Layouts were designed to remain usable across desktop, tablet and mobile without losing task hierarchy.</p></article>
              <article><small>COLLABORATION</small><h4>Design-to-API delivery</h4><p>Worked with designers on product changes and backend engineers on REST API integration, loading, empty and error states.</p></article>
            </div>
            <div className="ethiqly-impact">{delivery.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>
          </div>
        </section>

        <section className="case-final ethiqly-final">
          <span><Sparkles size={18} /></span>
          <div><small>DESIGN PRINCIPLE</small><h3>AI is most useful in education when it saves teacher time and gives students feedback they can understand, trust and use.</h3></div>
        </section>
      </div>
    </article>
  );
}
