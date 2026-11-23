# Writing PlotWeaver docs

Instructions for anyone, human or AI, editing this documentation.

## Sources of truth

- **Endpoints, fields and limits** come from the developer API itself. `api-reference/openapi.json` is generated from it; regenerate it rather than editing by hand when the API changes.
- **Languages and default voices** come from `GET https://api.plotweaver.app/v1/languages`. Update `languages.mdx` from it.
- **MCP tools** come from the MCP server's tool definitions. `mcp/tools.mdx` mirrors them.
- Never document a feature, limit or price you have not confirmed. Prices live on [plotweaver.app/pricing](https://plotweaver.app/pricing); link there rather than repeating figures that change.

## Style

- Plain, direct sentences. Say what to do, then why, in as few words as it takes.
- Use the second person ("you") and present tense.
- **No em dashes or en dashes.** Use a comma, a colon, a full stop or brackets.
- Every code example must run as written once `PLOTWEAVER_API_KEY` is set. No placeholders other than the key and ids the reader must supply.
- Show `curl` first, then Python, then Node.js.
- Product names: **PlotWeaver**, **STORM v1.5**, **STORM Gust 1.0**, **STORM Ensemble 3.0**, **STORM v3**, **STORM ASR 2.0**, **STORM MT**. Model ids in code style: `storm-v1`, `storm-gust`, `storm-ensemble`, `storm-v3`.
- Never name third-party models or infrastructure behind PlotWeaver.
- Do not describe plans or features that are not live yet.

## Languages in examples

- Yoruba is always written with full tone marks and underdots: `Ẹ kú àárọ̀`, `Adérónkẹ́`, never `E ku aaro`.
- Write Yoruba as it is spoken, joining syllables that are said together.
- Use real, natural sentences a Nigerian business would actually send: deliveries, appointments, banking, announcements.

## Components

Use Mintlify components where they help the reader: `<Steps>` for setup, `<CodeGroup>` for the same call in several languages, `<Tabs>` for alternative setups, `<AccordionGroup>` for troubleshooting, `<ParamField>` for request fields. Inside MDX, write `{` and `}` in plain text as `\{` and `\}`.

## Before you push

```bash
mint validate
mint broken-links
```

Then read the changed pages in `mint dev` on a phone-sized window as well as a desktop one.
