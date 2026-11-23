# Working on the PlotWeaver docs

This repository is the PlotWeaver documentation site (Fumadocs on Next.js, deployed on Vercel at docs.plotweaver.app).

## Commands

- `npm install`, then `npm run dev` to preview at http://localhost:3000
- `npm run build` must pass before you push: it checks every page, link target and type

## Content rules

- Pages are MDX in `content/docs/`. Every page needs `title` and `description` front matter. `sidebarTitle` gives a shorter sidebar name.
- Sidebar order lives in each folder's `meta.json`. A new page that is not listed there will not appear in the sidebar.
- Use the components in `components/compat.tsx` (`Card`, `CardGroup`, `Steps`, `Step`, `Tabs`, `Tab`, `Note`, `Tip`, `Warning`, `Info`, `ParamField`, `ResponseField`, `Accordion`, `AccordionGroup`, `Frame`). `Tabs` needs `items` that match each `Tab value`.
- Code tabs: fences next to each other with `tab="Name"`.
- Write Yoruba with full tone marks and underdots.
- No em dashes. Plain, direct English.
- Never describe what PlotWeaver's models are built on or trained from.

## API reference

- Endpoint pages come from `public/openapi.json`. Do not write endpoint pages by hand; update the spec.
- Endpoint URLs are `/api-reference/<tag>/<summary>`, lower case with hyphens.
