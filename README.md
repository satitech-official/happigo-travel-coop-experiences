# Happigo travel journal

A responsive Next.js App Router website for Happigo — curated group travel and cooperative events.

## Run locally

```bash
pnpm install
pnpm dev
```

Then open `http://localhost:3000`.

## Production

```bash
pnpm build
pnpm start
```

Deploy directly to Vercel with the project root set to this folder. No environment variables are required for the demo. The contact form is intentionally front-end only; connect it to an email service or CRM before launching.

## Content updates

All business content, links, cards, images, statistics, FAQs and placeholder testimonials live in `data/site-config.js`. Update `VENUS_WEBSITE_URL` there when the sister brand URL is available.

The remote photo URLs are hand-picked editable visual placeholders. Replace them with approved Happigo photography before final publication.
