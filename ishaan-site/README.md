# Ishaan Karan - research portfolio

A heavily interactive, **static** research-portfolio site, built from Ishaan's real resume and GitHub.

**Stack:** Next.js 16 (App Router, RSC) · React 19 · TypeScript (strict) · Tailwind CSS v4 · Motion · Canvas/SVG

The home route is **statically prerendered** (`○` in the build output) - fast, CDN-friendly, and deployable
to GitHub Pages or Vercel. Mobile-first, with reduced-motion and keyboard support throughout.

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # green build; route marked ○ (Static)
npm start
```

## What's interactive

- **Embedding-field hero** - an ambient canvas k-NN graph that reacts to the cursor.
- **⌘K / Ctrl-K command palette** - keyboard navigation to every section + quick links.
- **Interactive Lab** - a *Token Atlas* embedding explorer and an *attention-pattern playground*
  (type a sentence, switch between four causal-attention head patterns, hover any row).
- **BAM-PQ retrieval chart** - drag the dimension budget to see per-query routing hold retrieval quality.
- **Expandable project cards** linking to each repo, **filterable skills**, **filterable research areas**,
  scroll reveals, and dark/light theme with no flash.

> The Lab demos and the BAM-PQ chart are clearly labelled **illustrative** - hand-defined for intuition,
> not live models.

## Sections

`Hero → Credibility → Research (with Publications nested in it) → Experience → Projects → Lab → Skills →
Timeline → About → Contact`

Projects link directly to their repositories:
- The Cross-Modal Safety Gap → `modality-safety-gap`
- Distributed Document Collaboration System → `distributed-file-system`
- Sparse Mixture-of-Experts for Extreme Summarization → `moe-xsum`
- Custom C Shell → `custom-unix-shell`

## Deploy

Static, so either works:

- **GitHub Pages** (restores your `ishaank1805.github.io` setup): add `output: "export"` to
  `next.config.mjs`, run `npm run build`, and publish the generated `out/` folder.
- **Vercel:** push to GitHub and import - zero config.

> Want live/server data later (e.g. pulling GitHub stars at request time)? Add
> `export const dynamic = "force-dynamic";` to `app/page.tsx` and fetch in a server component - but then
> it needs a Node host (Vercel), not GitHub Pages.

## Editing content

Everything lives in **`content/site.ts`** - profile, publications, experience, projects, skills,
timeline, research areas. The UI is generated from it.

- **Photo:** uses the GitHub avatar via `profile.avatar` - change the URL to swap it.
- **Résumé:** drop `resume.pdf` into `/public` (the Contact/Résumé links point to `/resume.pdf`).

All content is real - sourced from the resume and GitHub. No fabricated papers, metrics, or awards.
