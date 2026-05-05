export const processSteps = [
  { t: "Discover", d: "Workflow shadowing, stakeholder interviews, and a written brief everyone signs." },
  { t: "Design", d: "Information architecture, system design, and a clickable prototype before code." },
  { t: "Develop", d: "Two-week sprints with working software at the end of every one. No surprises." },
  { t: "Deploy", d: "Phased rollout with a warm legacy system, observability, and a runbook." },
  { t: "Support", d: "A managed retainer for the long tail — bug fixes, evolution, and on-call." }
];

export const services = [
  {
    slug: "digital-transformation",
    num: "01",
    icon: "Transform",
    eyebrow: "Digital Transformation",
    title: ["Modernize the way", "your business runs."],
    cardTitle: "Digital Transformation",
    desc: "Modernize legacy stacks, unify data, and wire in measurable ROI across operations.",
    subtitle: "We help established organizations replace legacy systems, digitize manual workflows, and unify fragmented data — turning operational drag into measurable efficiency on the P&L.",
    heroStats: [{ v: "80+", l: "transformations led" }, { v: "40%", l: "avg. cost reduction" }],
    heroTags: ["Legacy modernization", "Process digitization", "Cloud migration", "Data unification", "Change management"],
    pulse: "Transformation in progress · Dhaka",
    aboutLead: "Digital transformation is not a software project. It is the patient, careful re-platforming of how your organization actually works — done right, it pays for itself before the rebrand goes live.",
    aboutBody: "We pair senior engineers with operations leads embedded inside your team. We map the workflows people actually run, retire the spreadsheets and shadow-IT, and stand up a unified platform — without the all-or-nothing rip-and-replace that derails most transformations.",
    features: [
      { t: "Workflow-first mapping", d: "We start with the work, not the technology. Every recommendation is grounded in observed reality." },
      { t: "Phased rollout", d: "Legacy and new run in parallel. Cut over function by function, never overnight." },
      { t: "Compliance-aware", d: "GDPR, HIPAA, PCI, DGDA — we have shipped under each, with auditable trails." },
      { t: "People + platform", d: "Training, change management, and runbooks ship with the software. Adoption is the deliverable." }
    ],
    impact: [
      { v: "40", s: "%", t: "Operating cost reduction", d: "Average savings against the legacy stack being retired." },
      { v: "9", s: "mo", t: "Average time to ROI", d: "From kickoff to the engagement paying for itself on the P&L." },
      { v: "0", s: "hr", t: "Unplanned downtime", d: "Across every cutover migration we have led to date." },
      { v: "92", s: "%", t: "User adoption", d: "Of intended end-users on the new platform within 90 days of cutover." }
    ],
    components: ["Discovery & Audit", "Unified Web Platform", "Legacy Integration", "Data Unification", "Cloud Migration", "Operator Tooling", "Executive Dashboards", "AI-Assisted Workflows", "Governance & Audit"],
    ctaIncludes: ["A 30-minute discovery call with a senior partner", "A written transformation roadmap within 10 business days", "Reference calls with 2–3 transformation clients in your sector", "A phased plan — no all-or-nothing commitment to start"]
  },
  {
    slug: "mvp-development",
    num: "02",
    icon: "Product",
    eyebrow: "MVP Development",
    title: ["From idea to shipping", "in twelve weeks."],
    cardTitle: "MVP Development",
    desc: "Go from concept to a validated, production-grade product in weeks — not quarters.",
    subtitle: "For founders and intrapreneurs who need a real product in users' hands — not a Figma prototype. We compress 12 months of build into 12 focused weeks, with the architecture to keep going after launch.",
    heroStats: [{ v: "12 wk", l: "idea to launch" }, { v: "30+", l: "MVPs shipped" }],
    heroTags: ["Founder-stage", "Web + Mobile", "PMF discovery", "Investor-ready", "Built to scale"],
    pulse: "Founder squad on standby · Dhaka",
    aboutLead: "An MVP engagement is a sprint with a finish line: a real product, in production, with real users, by week twelve. We build for learning velocity first — and structure the codebase so the next twelve months don't require a rewrite.",
    aboutBody: "We staff a small, senior squad — a tech lead, two engineers, a product designer — who own scoping, building, shipping, and iterating with you. No project managers. No handoffs. The same humans who write the code talk to your users on launch day.",
    features: [
      { t: "Twelve-week sprint", d: "A fixed scope, fixed timeline engagement. Real product live by week twelve." },
      { t: "PMF-first thinking", d: "Every feature traces to a hypothesis you are testing. We will say no to the rest." },
      { t: "Founder-friendly cadence", d: "Weekly demos, async updates, and a Slack channel that actually gets answered." },
      { t: "Investor-ready architecture", d: "Built so a Series A team can pick it up — not so they have to throw it away." }
    ],
    impact: [
      { v: "12", s: "wk", t: "Idea to live product", d: "From kickoff call to public launch with real users — fixed timeline." },
      { v: "30", s: "+", t: "MVPs shipped", d: "Live in production today — across SaaS, marketplaces, fintech, and health." },
      { v: "68", s: "%", t: "Raised follow-on capital", d: "Of MVP clients have closed a seed or Series A within 12 months of launch." },
      { v: "4.6", s: "★", t: "Founder satisfaction", d: "Median NPS-equivalent rating from MVP-stage engagements." }
    ],
    components: ["Scoping Workshop", "Web Application", "Mobile App", "Backend & API", "Founder Console", "Analytics & Funnels", "AI-Native Features", "Production Deploy", "Stripe & Auth"],
    ctaIncludes: ["A 30-minute founder call with our MVP lead", "A 1-week scoping sprint to lock the v1 hypothesis", "A fixed-price, fixed-timeline twelve-week proposal", "A reference call with a founder who shipped with us"]
  },
  {
    slug: "ai-automation",
    num: "03",
    icon: "Sparkle",
    eyebrow: "AI Automation & Integration",
    title: ["AI woven into", "the work itself."],
    cardTitle: "AI Integration & Automation",
    desc: "Embed LLMs, computer vision, and intelligent agents into your core workflows.",
    subtitle: "We embed LLMs, computer vision, and agentic workflows into your existing systems — quietly, accountably, and where they save real human time.",
    heroStats: [{ v: "12+", l: "AI systems live" }, { v: "68%", l: "avg. handle-time cut" }],
    heroTags: ["LLM apps", "RAG", "Agents", "Vision", "Automation"],
    pulse: "Models in production · Live",
    aboutLead: "AI integration is not a hackathon prototype. It is a production system with evals, guardrails, an on-call rotation, and a measurable line on your operating P&L.",
    aboutBody: "We work from prompt engineering through fine-tuned models in production. Every engagement starts with a single high-leverage workflow we agree to automate end-to-end.",
    features: [
      { t: "Production-grade by default", d: "Evals, observability, fallback paths, human-in-the-loop where stakes are high." },
      { t: "Agentic workflows", d: "Multi-step agents that orchestrate tools, not chatbots wearing a tie." },
      { t: "Responsible AI review", d: "PII handling, bias review, and a model card for every shipped system." },
      { t: "Model-agnostic", d: "OpenAI, Anthropic, open-source — we route by task, cost, and risk." }
    ],
    impact: [
      { v: "68", s: "%", t: "Avg. handle-time reduction", d: "Across deployed agentic workflows in customer support and ops." },
      { v: "3", s: "wk", t: "PoC to production", d: "Typical timeline for a scoped, single-workflow automation." },
      { v: "12", s: "+", t: "AI systems shipped", d: "Live in production, observed, and on a maintenance contract." },
      { v: "4.2", s: "x", t: "ROI on year one", d: "Median return on the first 12 months of a production AI engagement." }
    ],
    components: ["LLM Application", "RAG + Vector Search", "Intelligent Agents", "Workflow Automation", "Eval & Observability", "Conversational UI", "AI Gateway", "Human Review Console", "Governance & Compliance"],
    ctaIncludes: ["A scoping call with our AI engineering lead", "A shortlist of 3 candidate workflows ranked by ROI", "A 2-week PoC plan with success criteria", "No commitment to a long engagement to start"]
  },
  {
    slug: "consulting",
    num: "04",
    icon: "Consulting",
    eyebrow: "Technology Consulting",
    title: ["Strategic clarity,", "engineering depth."],
    cardTitle: "Technology Consulting",
    desc: "Architecture reviews, cloud strategy, and board-level advisory on what to build next.",
    subtitle: "Architecture reviews, cloud strategy, technical due diligence, and board-level advisory — delivered by senior engineers who have shipped the systems they advise on.",
    heroStats: [{ v: "50+", l: "engagements" }, { v: "$14M", l: "spend optimized" }],
    heroTags: ["Architecture", "Cloud strategy", "Due diligence", "Audits", "Roadmaps"],
    pulse: "Senior advisors available · Booking",
    aboutLead: "Consulting from people who still write code. No deck-only deliverables, no transformation roadmap that nobody asked for — just specific, technical, executable answers.",
    aboutBody: "Engagements range from a one-week architecture audit to a quarter-long fractional CTO partnership. We are happy to tell you not to rebuild — and frequently do.",
    features: [
      { t: "Engineer-led advisory", d: "Every consultant on the bench can still ship code. The advice reflects that." },
      { t: "Specific deliverables", d: "Architecture diagrams, decision records, and Notion-shaped output — not 80-slide decks." },
      { t: "Independent stance", d: "No reseller relationships. We name the vendors we recommend, and the ones we wouldn't." },
      { t: "Bias to action", d: "Most engagements end with us building a piece of what we recommended." }
    ],
    impact: [
      { v: "50", s: "+", t: "Engagements delivered", d: "From seed-stage startups to public-sector institutions." },
      { v: "14", s: "M", t: "$ spend optimized", d: "Cumulative client spend redirected from waste to working software." },
      { v: "90", s: "d", t: "Standard engagement", d: "Most consulting partnerships scope to a single quarter with clear deliverables." },
      { v: "85", s: "%", t: "Move to build", d: "Of consulting clients return to us for a build engagement within a year." }
    ],
    components: ["Architecture Review", "Cloud Strategy", "Technical Due Diligence", "Platform Audits", "Vendor Evaluation", "Roadmap Workshops", "AI Readiness Assessment", "Team & Org Design", "Fractional CTO"],
    ctaIncludes: ["A 30-minute discovery call (no fee)", "A scoped consulting proposal within 5 days", "Engagement options from one week to one quarter", "Optional handoff to our build team if the answer is yes, build it"]
  }
];
