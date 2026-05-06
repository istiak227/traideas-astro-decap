import { defineCollection, z } from "astro:content";

const buttonSchema = z.object({
  label: z.string(),
  href: z.string(),
});

const caseStudies = defineCollection({
  schema: z.object({
    order: z.number().default(999),
    title: z.string(),
    shortTitle: z.string(),
    client: z.string(),
    clientShort: z.string(),
    industry: z.string(),
    location: z.string(),
    image: z.string().optional().default(""),
    overview: z.string(),
    summary: z.string(),
    duration: z.string().optional().default(""),
    techStack: z.array(z.string()).default([]),
    serviceComponents: z.array(z.string()).default([]),
    challenge: z.array(z.string()).default([]),
    solution: z.array(z.string()).default([]),
    screenshots: z.array(z.string()).default([]),
    impactStats: z.array(z.object({
      v: z.string(),
      s: z.string().optional().default(""),
      t: z.string(),
      d: z.string(),
    })).default([]),
    impactPoints: z.array(z.string()).default([]),
    cta: buttonSchema.default({ label: "Discuss a Similar Project", href: "/contact" }),
    colorTint: z.string().default("#e6e8f3"),
    accentColor: z.string().default("#8D99CE"),
  }),
});

const blogs = defineCollection({
  schema: z.object({
    order: z.number().default(999),
    cat: z.string(),
    date: z.string(),
    read: z.string().optional().default(""),
    title: z.string(),
    excerpt: z.string(),
    image: z.string(),
  }),
});

const quickBites = defineCollection({
  schema: z.object({
    order: z.number().default(999),
    kind: z.enum(["image", "text", "code"]),
    category: z.string(),
    title: z.string(),
    image: z.string().optional(),
    pinned: z.boolean().optional().default(false),
    body: z.string().optional().default(""),
    meta: z.string().optional().default(""),
    code: z.string().optional().default(""),
    href: z.string().optional().default("#"),
  }),
});

const resources = defineCollection({
  schema: z.object({
    order: z.number().default(999),
    icon: z.string(),
    tags: z.array(z.object({ style: z.string(), label: z.string() })).default([]),
    title: z.string(),
    description: z.string(),
    meta: z.array(z.string()).default([]),
    href: z.string().optional().default("#"),
  }),
});

const careers = defineCollection({
  schema: z.object({
    order: z.number().default(999),
    active: z.boolean().default(true),
    role: z.string(),
    loc: z.string(),
    type: z.string(),
    tags: z.array(z.string()).default([]),
    applyUrl: z.string(),
    skills: z.array(z.string()).default([]),
    benefits: z.array(z.string()).default([]),
    detail: z.string().optional().default(""),
  }),
});

const moments = defineCollection({
  schema: z.object({
    order: z.number().default(999),
    title: z.string(),
    src: z.string(),
    type: z.enum(["image", "video"]).default("image"),
    tags: z.array(z.string()).default([]),
    size: z.enum(["s-large", "s-tall", "s-small", "s-wide"]).default("s-small"),
    poster: z.string().optional(),
    controls: z.boolean().optional().default(true),
  }),
});

const pages = defineCollection({
  schema: z.object({}).passthrough(),
});

export const collections = {
  "case-studies": caseStudies,
  blogs,
  "quick-bites": quickBites,
  resources,
  careers,
  moments,
  pages,
};
