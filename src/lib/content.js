import { getCollection, getEntry } from "astro:content";

const byOrder = (a, b) => (a.data.order ?? 999) - (b.data.order ?? 999);

const withSlug = (entry) => ({ slug: entry.slug, ...entry.data });

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

export async function getMomentItems() {
  const entries = await getCollection("moments");
  return entries.sort(byOrder).map((entry) => ({
    slug: entry.slug,
    ...entry.data,
    tag: entry.data.tags[0] ?? entry.data.title,
  }));
}

export async function getMomentsData() {
  const [entry, gallery] = await Promise.all([getEntry("pages", "moments"), getMomentItems()]);
  return { ...entry?.data, gallery };
}

export async function getCareersPageData() {
  const [entry, jobs] = await Promise.all([getEntry("pages", "careers"), getOpenPositions()]);
  return { ...entry?.data, jobs };
}
