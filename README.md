# Shiksha Play & Learn Pre-School — Website

A modern, colorful, premium website for **Shiksha Play & Learn Pre-School**
(Dugda, Bokaro, Jharkhand), built with **Next.js (App Router) + TypeScript +
Tailwind CSS v4**.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run lint    # ESLint
```

## Real content already wired in

The school's real logo (`public/images/logo.jpg`) and real event photography
(`public/images/photos/`) are already in place, sourced from photos supplied
directly for this project. The phone numbers, address and website domain in
`src/data/school.ts` come from the school's own promotional banner (visible
in `public/images/photos/teachers-day-group-1.jpg`) and are treated as
verified — not placeholders.

**One exception:** `public/images/photos/hero-illustration.png` (used in the
Hero section) is an AI-generated image, not a real photo — it depicts a
generic classroom, staff and a different logo/tagline than the school's
actual branding. It's used purely as stylized decorative art. If genuine hero
photography becomes available, prefer swapping it in — see `Hero.tsx`.

## Before launch — content still to confirm

A few values in `src/data/school.ts` are still placeholders and **must** be
replaced with verified information before going live:

| Field | What to update |
|---|---|
| `contact.whatsappNumber` | Confirm which of the two listed phone numbers is active on WhatsApp |
| `contact.email` | Currently guessed as `info@shikshapreschool.in` from the real domain — confirm the actual inbox |
| `location.postalCode` | Add the exact PIN code |
| `social.facebook`, `social.instagram`, `social.googleReviews` | Add once these profiles exist/are confirmed |

Other files to review:

| File | What to update |
|---|---|
| `src/data/testimonials.ts` | Replace placeholder testimonials with real, consented parent reviews (`isPlaceholder: false`) |
| `src/data/events.ts` | Confirm event dates each year (several are marked "TBA") |
| `src/data/facilities.ts` | Remove any facility that doesn't actually exist at the school |
| `src/data/youtube.ts` | Add real video IDs from the school's channel once selected |
| `src/app/layout.tsx` | Replace the Open Graph image with a dedicated 1200×630 banner once designed (currently reuses a real event photo) |

### Adding real photos

Photo slots (hero, about, activities, events, gallery) render a pastel
placeholder with a "Real school photo coming soon" label until a real photo
is supplied. To add one, drop the image under `public/images/...` and set
the corresponding `image`/`src` field in the relevant `src/data/*.ts` file
(e.g. `activities.ts`, `events.ts`, `gallery.ts`) or pass `src` directly to a
`<PhotoPlaceholder>` usage in a component. `next/image` handles
optimization, responsive sizing and WebP/AVIF automatically.

## Architecture

- `src/data/` — all school content (info, programs, activities, facilities,
  events, testimonials, gallery) as typed config.
- `src/components/` — one component per section (`Hero`, `Programs`,
  `Gallery`, `AdmissionContact`, etc.) plus shared UI primitives in
  `src/components/ui/`.
- `src/app/page.tsx` — composes all sections into the single-page site.

There is intentionally no admission enquiry form or backend right now —
`AdmissionContact` just shows the phone number and address with Call/WhatsApp/
Directions buttons. A form was tried but removed since there was no backend
to receive submissions (they would have gone nowhere). If a form is wanted
again later, it needs a real destination (email, WhatsApp notification,
Google Sheet, or a database) wired up at the same time — not logged to the
server console only.

## SEO

Metadata, Open Graph tags, and `EducationalOrganization`/`LocalBusiness`
JSON-LD structured data are defined in `src/app/layout.tsx`, sourced from
`src/data/school.ts`. `src/app/sitemap.ts` and `src/app/robots.ts` generate
`sitemap.xml` and `robots.txt`. Update the placeholder production domain in
`layout.tsx`, `sitemap.ts` and `robots.ts` once the site has a real domain.
