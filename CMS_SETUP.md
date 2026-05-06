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

Local Decap editing uses `local_backend: true` and `decap-server`, so you do not need GitHub login for local content changes. Entries are written to local Markdown files and uploaded images are written to `public/uploads/`.

## Production workflow

Production uses the GitHub backend in `public/admin/config.yml` with:

- repo: `traideas/traideas-website-astro`
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
- Page settings: `src/content/pages/`
