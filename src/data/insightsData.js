export const insightCategories = [
  { key: "blog", label: "Blog", meta: "Long-form articles on engineering, AI, and digital transformation" },
  { key: "quick", label: "Quick Bits", meta: "Short engineering insights, snippets & behind-the-scenes" },
  { key: "resources", label: "Resources", meta: "Templates, frameworks & checklists used in real projects" }
];

export const insights = [
  {
    slug: "agentic-workflows-replacing-rpa",
    type: "blog",
    cat: "AI Strategy",
    date: "Apr 18, 2026",
    read: "8 min read",
    title: "Why agentic workflows are quietly replacing RPA",
    excerpt: "The hidden cost of legacy automation — and how LLM-mediated agents change the economics of back-office work.",
    image: "/assets/images/culture/culture-04.jpg",
    body: [
      "Legacy automation helped teams move faster, but it often struggles when the work includes exceptions, messy documents, and judgment calls.",
      "Agentic workflows change the economics by combining language reasoning with tools, guardrails, and human review where needed.",
      "The practical path is not to automate everything. Start with one high-volume workflow, define measurable success criteria, and ship with observability from day one."
    ]
  },
  {
    slug: "shipping-emr-systems-under-dgda-compliance",
    type: "blog",
    cat: "Engineering",
    date: "Apr 02, 2026",
    read: "12 min read",
    title: "Shipping EMR systems under DGDA compliance",
    excerpt: "What we learned delivering a national-scale electronic medical record system across 40+ facilities.",
    image: "/assets/images/culture/culture-02.jpg",
    body: ["Healthcare platforms need careful access control, audit trails, resilient integrations, and user flows that match clinical reality."]
  },
  {
    slug: "modernization-trap",
    type: "blog",
    cat: "Consulting",
    date: "Mar 19, 2026",
    read: "6 min read",
    title: "The modernization trap: when not to replatform",
    excerpt: "Sometimes the legacy system is fine. Three diagnostics we run before recommending a rebuild.",
    image: "/assets/images/culture/culture-03.jpg",
    body: ["Modernization should start with operational evidence, not a preference for new technology."]
  },
  { type: "quick", title: "The fastest digital transformation wins usually come from retiring duplicate spreadsheets.", excerpt: "Look for shadow systems before you buy a new platform.", date: "Apr 12, 2026" },
  { type: "quick", title: "Every AI automation needs a fallback path.", excerpt: "Human review is not a weakness in high-stakes workflows.", date: "Apr 08, 2026" },
  { type: "quick", title: "Dashboards are only useful when tied to an operating decision.", excerpt: "Otherwise they become expensive wallpaper.", date: "Mar 29, 2026" },
  { type: "resources", title: "Digital Transformation Roadmap", excerpt: "A practical planning structure for phased modernization.", href: "#" },
  { type: "resources", title: "Architecture Review Checklist", excerpt: "Questions we use before recommending a rebuild.", href: "#" },
  { type: "resources", title: "AI Workflow Candidate Scorecard", excerpt: "Rank automation candidates by ROI, risk, and feasibility.", href: "#" }
];

export const blogPosts = insights.filter((post) => post.type === "blog");
export const latestBlogPosts = blogPosts.slice(0, 3);
