# Happigo Travel · Explore · Be Happy

<p align="center">
  <img src="./public/preview.svg" alt="Happigo travel website preview" width="100%" />
</p>

<p align="center">
  <strong>A responsive travel-journal website for Happigo — curated group journeys, cooperative events and shared experiences by Laxmi Ventures.</strong>
</p>

<p align="center">
  <a href="https://satitech-official.github.io/happigo-travel-coop-experiences/">
    <img src="./public/live-website-button.svg" alt="Open Happigo live website" width="560" />
  </a>
</p>

<p align="center">
  <a href="https://github.com/satitech-official/happigo-travel-coop-experiences/actions/workflows/deploy-pages.yml">
    <img alt="Deployment status" src="https://github.com/satitech-official/happigo-travel-coop-experiences/actions/workflows/deploy-pages.yml/badge.svg" />
  </a>
  &nbsp;
  <a href="https://www.instagram.com/happigo.01">
    <img alt="Happigo Instagram" src="https://img.shields.io/badge/Instagram-@happigo.01-E4405F?logo=instagram&logoColor=white" />
  </a>
</p>

## Live Website

**Production URL:** https://satitech-official.github.io/happigo-travel-coop-experiences/

## Highlights

- Fully responsive desktop, tablet and mobile layout
- Animated travel-journal hero with GSAP and Framer Motion
- Curated experiences, destinations and cooperative-event sections
- Responsive gallery and story-led content layouts
- Happigo ↔ Venus Event & Suppliers sister-brand connection
- Direct WhatsApp, telephone, email, Instagram and Facebook contact routes
- Static Next.js export configured specifically for GitHub Pages
- SEO metadata, sitemap, robots configuration and social preview
- Automatic GitHub Actions validation and deployment

## Technology

- Next.js 16 App Router
- React 19
- Framer Motion
- GSAP + ScrollTrigger
- Tailwind CSS 4 / custom responsive CSS
- Lucide React icons
- GitHub Actions + GitHub Pages

## Local Development

```bash
corepack enable
pnpm install
pnpm dev
```

Then open `http://localhost:3000`.

## Production Build

```bash
pnpm build
```

The GitHub Pages workflow creates a static export and deploys the generated `out` directory automatically after changes reach `main`.

## Content Updates

Business content, contact details, cards, destinations, statistics, FAQs and image references are maintained in `data/site-config.js`.

The remote travel photographs are curated visual placeholders and should be replaced with approved Happigo photography whenever final client media is available.

## Sister Concern

Happigo is connected to **Venus Event & Suppliers**, also under Laxmi Ventures:

https://satitech-official.github.io/venus-event-decor-premium-website/

---

Developed by **Sati Technologies**.
