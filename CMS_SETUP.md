# Decap CMS setup

The CMS admin is served at `/admin/` from `public/admin/index.html`.

## Local development

Run both Astro and the Decap local backend:

```bash
npm run dev:cms
```

Then open:

```text
http://localhost:4321/admin/
```

Local Decap editing uses `local_backend: true` and `decap-server`, so you do not need GitHub login for local content changes. Entries are written to local Markdown files and uploaded images are written to `public/assets/images/`.

## Production workflow

Production uses the GitHub backend in `public/admin/config.yml` with:

- repo: `istiak227/traideas-astro-decap`
- branch: `main`
- `publish_mode: editorial_workflow`
- `squash_merges: true`

Production editors will need GitHub/OAuth access to the repo.

## Content folders

- Blogs: `src/content/blogs/`
- Case studies: `src/content/case-studies/`
- Careers/open positions: `src/content/careers/`
- Quick bites: `src/content/quick-bites/`
- Resources: `src/content/resources/`
- Moments media entries with tags: `src/content/moments/`
- Editor-managed page copy: `src/content/page-copy/`
- Code-owned page defaults: `src/content/pages/`

## Hybrid CMS model

Decap follows a hybrid model so editors can update content without changing layout or behavior.

CMS manages:

- Blog, case study, quick bite, resource, moment, and career entries.
- Basic page copy such as hero titles, subtitles, section headings, and descriptions.
- SEO title and description.

Code manages:

- Layout, section structure, animations, grids, button styles, component logic, and responsive behavior.
- Code-owned page defaults in `src/content/pages/`.
- Copy overrides from `src/content/page-copy/` are merged over those defaults at build time.

This means editors should use the CMS `Page Settings` collection for copy updates, while developers should change `src/content/pages/`, Astro components, or CSS when the page structure/design needs to change.

## Media library

Decap uses one global media root so editors can browse the full site image library:

- Repository folder: `public/assets/images/`
- Public URL prefix: `/assets/images`

Keep one global image root unless you intentionally want a field-specific picker. This is the safest way to see existing images now and makes it easier to migrate later to a hosted image library/CDN because content paths consistently start with `/assets/images/...`.
