# York Media Solutions — Website

Production-ready marketing website for **York Media Solutions** ("Promotion in Motion"), built with React 19, Vite, Tailwind CSS and Framer Motion.

## Tech Stack

- React 19 + Vite
- Tailwind CSS (custom brand token system)
- React Router (client-side routing)
- Framer Motion (scroll reveals, hero and page-transition animation)
- lucide-react (icon set)

## Pages

- `/` — Home (hero, services, featured campaigns, why-us, process, office gallery, leadership, CTA)
- `/about` — Company story, mission & vision, leadership, process, office gallery
- `/services` — All 18 services with description + benefits
- `/work` — Campaign gallery with lightbox, client names, case study & testimonial placeholders
- `/contact` — Contact form, embedded map, office info, business hours

## Getting Started

```bash
npm install
npm run dev       # local dev server, http://localhost:5173
npm run build     # production build to /dist
npm run preview   # preview the production build locally
```

## Deployment

`npm run build` outputs a static site to `/dist`, deployable to any static host:

- **Vercel / Netlify**: connect the repo, build command `npm run build`, output directory `dist`
- **Any static server / cPanel**: upload the contents of `dist/` to the web root
- Point the domain `yorkmediasolution.com` at the hosting provider once deployed

## Assets

All photography used is real York Media Solutions material:

- `src/assets/office/` — office entrance and team photos
- `src/assets/campaigns/` — real branding creative from auto rickshaw, cab and transit campaigns
- `src/assets/logo/` — logo crops extracted from real signage/creative, used in the nav, footer and favicon

No stock photography or fabricated testimonials/stats are used anywhere. Testimonials and detailed case studies are left as elegant placeholders on the Work page, ready to be filled in with real client content.

## Contact Form

The contact form opens the visitor's email client via a `mailto:` link pre-filled with their submission (no backend required). To wire it to a real backend or form service, update `handleSubmit` in `src/pages/Contact.jsx`.

## Handover Notes

- Brand colors, fonts and animation tokens live in `tailwind.config.js` — edit there to re-theme site-wide.
- The Google Map on the Contact page uses an embed query for the Mayapuri office address; swap in a Place ID for a pinned marker if preferred.
- Replace the placeholder client logos / testimonials on `/work` once real client-approved material is available.
