import { llms, loader } from 'fumadocs-core/source';
import { lucideIconsPlugin } from 'fumadocs-core/source/lucide-icons';
import { defineDocs } from 'fumadocs-mdx/macro';
import { applyMdxPreset } from 'fumadocs-mdx/config';
import { remarkMdxMermaid } from 'fumadocs-core/mdx-plugins';
import { metaSchema, pageSchema } from 'fumadocs-core/source/schema';
import { z } from 'zod';
import type { LoaderPlugin } from 'fumadocs-core/source';
import { docsRoute } from './shared';
import { openapi } from './openapi';

const docs = defineDocs({
  dir: 'content/docs',
  docs: {
    schema: pageSchema.extend({ sidebarTitle: z.string().optional() }),
    mdxOptions: applyMdxPreset({
      remarkPlugins: (v) => [...v, remarkMdxMermaid],
    }),
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

const slugify = (s: string) =>
  s.toLowerCase().replace(/['\u2019]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

// Shorter sidebar names, from the page's sidebarTitle
const sidebarTitle: LoaderPlugin = {
  name: 'sidebar-title',
  transformPageTree: {
    file(node, filePath) {
      if (!filePath) return node;
      const file = this.storage.read(filePath);
      const t = file?.format === 'page' ? (file.data as { sidebarTitle?: unknown }).sidebarTitle : undefined;
      if (typeof t === 'string') node.name = t;
      return node;
    },
  },
};

export const source = loader(
  {
    docs: docs.toFumadocsSource(),
    openapi: await openapi.staticSource({
      baseDir: 'api-reference',
      groupBy: 'tag',
      slugify,
      // Same URLs as before: /api-reference/<tag>/<operation summary>
      name(output: { info: { title: string } }) {
        return slugify(output.info.title);
      },
    }),
  },
  {
    baseUrl: docsRoute,
    plugins: [lucideIconsPlugin(), openapi.loaderPlugin(), sidebarTitle],
  },
);

export const docsLlms = llms(source, {
  renderPage: async (page) => {
    if (page.type !== 'docs') return `# ${page.data.title} (${page.url})\n`;
    return `# ${page.data.title} (${page.url})\n\n${await page.data.getText('processed')}`;
  },
});
