import { getCollection } from "astro:content";

const byOrder = (a, b) => (a.data.order ?? 999) - (b.data.order ?? 999);

const withSlug = (entry) => ({ slug: entry.slug, ...entry.data });
const servicePageIds = [
  "service-digital-transformation",
  "service-mvp-development",
  "service-ai-automation",
  "service-consulting",
];

export async function getPageSettings(pageId) {
  const entries = await getCollection("pages");
  const entry = entries.find((item) => [item.id, item.slug, item.id?.replace(/\.md$/, "")].includes(pageId));
  return entry?.data ?? {};
}

export async function getCaseStudies() {
  const entries = await getCollection("case-studies");
  return entries.sort(byOrder).map(withSlug);
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
  const entries = await getCollection("pages");
  return entries
    .filter((entry) => servicePageIds.includes(entry.id?.replace(/\.md$/, "") ?? entry.slug))
    .map((entry) => {
      const pageId = entry.id?.replace(/\.md$/, "") ?? entry.slug;
      return { pageId, ...entry.data, slug: entry.data.slug ?? pageId.replace(/^service-/, "") };
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
  return entries.sort(byOrder).map((entry) => ({
    slug: entry.slug,
    ...entry.data,
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
