# Jeet Jalu — Premium German Education Website

Production-ready website built with **Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS**, and shadcn/ui-convention components. Every page is statically generated for maximum performance and SEO.

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (verified passing)
npm start        # serve the production build
```

Deploy on Vercel (recommended, zero config) or any Node host.

## Project structure

```
src/
  app/                  Routes (App Router)
    page.tsx            Home
    programs/           Programs index + [slug] detail pages
    method/  about/  stories/  apply/
    sitemap.ts robots.ts not-found.tsx
  components/
    ui/                 Primitives (Button, Accordion, Section, Container)
    layout/             Header, Footer
    shared/             SectionHeading, GermanWord, CtaBand, PlaceholderImage,
                        ProgramCard, ApplicationForm
    home/               Homepage sections
  data/                 ALL CONTENT LIVES HERE
    programs.ts         Programs (add one object → new page auto-generated)
    stories.ts          Success stories
    method.ts           Teaching principles
  lib/
    site.ts             Site-wide config: name, domain, email, socials, nav
    utils.ts            cn() class helper
```

## How to extend (no component changes needed)

- **New program** → add an object to `src/data/programs.ts`. The page,
  sitemap entry, cards, and application dropdown update automatically.
- **New success story** → add an object to `src/data/stories.ts`.
- **New method principle** → add to `src/data/method.ts`.
- **Change brand colors/fonts** → edit tokens in `tailwind.config.ts` only.
- **Change contact/domain/socials** → edit `src/lib/site.ts` only.
- **Blog (phase 2)** → create `src/app/insights/` with the same pattern:
  a `src/data/posts.ts` (or MDX) + index and `[slug]` pages.

## Before launch — checklist

1. **Replace placeholder images.** Search the codebase for
   `PlaceholderImage` — each instance has a `label` telling you exactly
   which photo goes there. Replace with `next/image` `<Image />` for
   automatic optimization.
2. **Real details in `src/lib/site.ts`** — domain, email, social URLs.
3. **About page story** — fill the `[TODO: …]` brackets in
   `src/app/about/page.tsx` with real dates, cities, specifics.
4. **Real student stories** (with written consent) in `src/data/stories.ts`.
5. **Wire the application form.** It currently opens the visitor's email
   client (works today with zero infrastructure). For proper submissions,
   connect Formspree/Tally/Basin or add an API route — see the TODO in
   `src/components/shared/application-form.tsx`.
6. **Self-host fonts** with `next/font/local` (TODO noted in
   `src/app/layout.tsx`) to remove the Google Fonts request.
7. **Set the real production URL** in `src/lib/site.ts` so sitemap,
   robots.txt, and Open Graph tags are correct.

## Built-in quality

- **SEO**: per-page metadata, Open Graph, `sitemap.xml`, `robots.txt`,
  semantic HTML (`h1` per page, landmarks, `article`, `dl`, `ol`).
- **Accessibility**: skip link, visible focus rings everywhere, labelled
  form fields, `aria-current` nav state, `aria-expanded` mobile menu,
  Radix-powered keyboard-accessible accordion, reduced-motion respected.
- **Performance**: fully static output, ~96–110 kB first-load JS,
  no client JS on content pages except header/menu, form, and accordion.
- **Maintainability**: content as typed data, design tokens in one file,
  one Container width, one Section rhythm — no hardcoded values in pages.

  
