# PlotWeaver Docs

The documentation for PlotWeaver at **[docs.plotweaver.app](https://docs.plotweaver.app)**: the developer API, the PlotWeaver MCP for AI agents, and the API reference with a live playground.

Built with [Fumadocs](https://fumadocs.dev) on Next.js. Deploys on Vercel with no settings to change.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. Pages reload as you edit them.

## Where things are

| Path | What it holds |
|---|---|
| `content/docs/(guides)/` | The Guides tab: getting started, text to speech, speech to text, translation, Build guides and account pages |
| `content/docs/mcp/` | The AI agents (MCP) tab |
| `content/docs/api-reference/` | The API reference tab. Endpoint pages are made from `public/openapi.json` |
| `meta.json` in each folder | Sidebar order and section names (`---Section---`) |
| `public/openapi.json` | The OpenAPI spec, also served at `/openapi.json` |
| `public/images`, `public/logo` | Pictures and logos |
| `components/compat.tsx` | Card, Steps, ParamField, Note, Tip, Frame and the other page components |
| `app/global.css` | Brand colours and fonts |

## Writing a page

1. Add an `.mdx` file in the right folder with a `title` and `description` at the top.
2. Add its name to that folder's `meta.json` where it should sit in the sidebar.
3. Link to other pages by their path, for example `[Voices](/voices)`.

Code blocks with `tab="curl"`, `tab="Python"` and so on next to each other become one tabbed block. A `title="file.json"` shows a file name above the block. Diagrams go in a `mermaid` block.

## Updating the API reference

Replace `public/openapi.json` with the new spec from the developer API. The endpoint pages and the playground update on the next build.

## Deploying on Vercel

1. In Vercel, **Add New > Project**, import `PlotweaverAI/plotweaver-API-docs`. Vercel detects Next.js; keep the defaults.
2. Deploy.
3. **Settings > Domains**, add `docs.plotweaver.app`, and add the DNS record Vercel shows.

Every push to `master` deploys again.

## Also served

- `/llms.txt` and `/llms-full.txt` for AI tools
- Any page as Markdown, by adding `.md` to its address (for example `/quickstart.md`)
- Search, with `Ctrl K`
