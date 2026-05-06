import { getCollection } from "astro:content";

const byOrder = (a, b) => (a.data.order ?? 999) - (b.data.order ?? 999);

const withSlug = (entry) => ({ slug: entry.slug, ...entry.data });
const codeManagedCaseStudyTints = ["#e6e8f3", "#e8efe5", "#faf0e4", "#e0f0f8", "#ede4f8", "#faf5e0"];
const codeManagedMomentSizes = ["s-large", "s-tall", "s-tall", "s-small", "s-wide", "s-small"];
const servicePageIds = [
  "service-digital-transformation",
  "service-mvp-development",
  "service-ai-automation",
  "service-consulting",
];

function deepMerge(base = {}, overrides = {}) {
  const merged = { ...base };

  for (const [key, value] of Object.entries(overrides)) {
    if (value === undefined || value === null) continue;

    if (Array.isArray(value)) {
      merged[key] = value;
      continue;
    }

    if (typeof value === "object" && !Array.isArray(value)) {
      merged[key] = deepMerge(base[key], value);
      continue;
    }

    merged[key] = value;
  }

  return merged;
}

function findEntry(entries, pageId) {
  return entries.find((item) => [item.id, item.slug, item.id?.replace(/\.md$/, "")].includes(pageId));
}

export async function getPageSettings(pageId) {
  const [defaults, copy] = await Promise.all([getCollection("pages"), getCollection("page-copy")]);
  return deepMerge(findEntry(defaults, pageId)?.data ?? {}, findEntry(copy, pageId)?.data ?? {});
}

export async function getCaseStudies() {
  const entries = await getCollection("case-studies");
  return entries.sort(byOrder).map((entry, index) => ({
    ...withSlug(entry),
    colorTint: codeManagedCaseStudyTints[index % codeManagedCaseStudyTints.length],
  }));
}

export async function getIndustries() {
  const caseStudies = await getCaseStudies();
  return ["All", ...new Set(caseStudies.map((study) => study.industry))];
}

export async function getBlogPosts() {
  const entries = await getCollection("blogs");
  return entries.sort(byOrder).map((entry) => ({ type: "blog", slug: entry.slug, ...entry.data }));
}

export async function getQuickBites() {
  const entries = await getCollection("quick-bites");
  return entries.sort(byOrder).map((entry) => ({ slug: entry.slug, ...entry.data }));
}

export async function getResources() {
  const entries = await getCollection("resources");
  return entries.sort(byOrder).map((entry) => ({ slug: entry.slug, ...entry.data }));
}

export async function getOpenPositions() {
  const entries = await getCollection("careers", ({ data }) => data.active);
  return entries.sort(byOrder).map(withSlug);
}

export async function getServicesPageData() {
  return getPageSettings("services");
}

export async function getServices() {
  const [entries, copy] = await Promise.all([getCollection("pages"), getCollection("page-copy")]);
  return entries
    .filter((entry) => servicePageIds.includes(entry.id?.replace(/\.md$/, "") ?? entry.slug))
    .map((entry) => {
      const pageId = entry.id?.replace(/\.md$/, "") ?? entry.slug;
      const data = deepMerge(entry.data, findEntry(copy, pageId)?.data ?? {});
      return { pageId, ...data, slug: data.slug ?? pageId.replace(/^service-/, "") };
    })
    .sort((a, b) => Number(a.num ?? 999) - Number(b.num ?? 999));
}

export async function getHomePageData() {
  return getPageSettings("home");
}

export async function getAboutPageData() {
  return getPageSettings("about");
}

export async function getCaseStudiesPageData() {
  return getPageSettings("case-studies");
}

export async function getInsightsPageData() {
  return getPageSettings("insights");
}

export async function getContactPageData() {
  return getPageSettings("contact");
}

export async function getMomentItems() {
  const entries = await getCollection("moments");
  return entries.sort(byOrder).map((entry, index) => ({
    slug: entry.slug,
    ...entry.data,
    size: codeManagedMomentSizes[index % codeManagedMomentSizes.length],
    tag: entry.data.tags[0] ?? entry.data.title,
  }));
}

export async function getMomentsData() {
  const [page, gallery] = await Promise.all([getPageSettings("moments"), getMomentItems()]);
  return { ...page, gallery };
}

export async function getCareersPageData() {
  const [page, jobs] = await Promise.all([getPageSettings("careers"), getOpenPositions()]);
  return { ...page, jobs };
}
