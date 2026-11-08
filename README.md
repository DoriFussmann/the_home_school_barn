# The Homeschool Barn

Public site for thehomeschoolbarn.com (Astro, static): a digital educational publishing brand offering printable learning resources (free and paid PDFs) and curated collections for curious children aged roughly 3 to 10. Articles are written and published into `site/src/content/articles/` by TNV.

- `npm install` then `npm run dev` (from the repo root)
- `npm run build` builds and runs the SEO audit
- Shared SEO/AEO infrastructure comes from `seo-core`, pinned in `site/package.json`. Do not edit or re-pin it here; versions are adopted through TNV.

## Content

| What | Where | Page |
| --- | --- | --- |
| Articles (TNV) | `site/src/content/articles/` | `/articles/<slug>/` |
| Resources | `site/src/content/resources/<slug>.md` | `/resources/<slug>/` |
| Collections | `site/src/content/collections/<slug>.md` | `/collections/<slug>/` |
| Article byline | `site/src/content/team/editorial.md` (`author: editorial`) | `/about/#editorial` |
| Topic hubs | `site/src/lib/topics.ts` (articles' `pillarKeyword` must match `name`) | `/topics/<slug>/` |

The library and collection pages are `noindex` until they have at least one item. Topic hubs are built once a topic has a published article. The resource and collection schema (including the required `seoTitle` 50–60 characters and `seoDescription` 140–160 characters) is in `site/src/content.config.ts`. Free resources are marked `free: true`; paid ones show `price` and link to `buyUrl` once a checkout exists.

Minimal resource file:

```md
---
title: Resource title
summary: One or two sentences for cards and the page intro.
seoTitle: 50 to 60 characters, ending with | The Homeschool Barn
seoDescription: 140 to 160 characters.
free: true
ages: Ages 5–7
subjects: ["science and the natural world"]
---
Full description.
```

## Forms

The email and commerce platforms are not chosen yet. Set these in Vercel when they are:

- `PUBLIC_NEWSLETTER_ENDPOINT`: newsletter signup form (posts `email`).
- `PUBLIC_FREE_DOWNLOAD_ENDPOINT`: free-download form (posts `email`, `resource`, `newsletter_consent`). A resource's own `downloadFormUrl` overrides it.

Without them, the site shows "opens soon" instead of the forms.

## Brand

The logo (`site/src/assets/brand/`), favicon, `public/logo.png`, `public/og-default.(png|svg)` and the byline image are a vector rebuild of the supplied logo: Figtree Bold wordmark, navy `#000E29`, cream `#FFF4EA`, lavender `#BDBEFE`. Site colors and fonts are still the inherited design system.
