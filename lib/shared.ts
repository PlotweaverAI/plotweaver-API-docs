import { createGetUrl } from 'fumadocs-core/source';

export const appName = 'PlotWeaver Docs';
export const docsRoute = '/';
export const docsImageRoute = '/og/docs';
export const siteUrl = 'https://docs.plotweaver.app';

export const gitConfig = {
  user: 'PlotweaverAI',
  repo: 'plotweaver-API-docs',
  branch: 'master',
};

const getImageUrl = createGetUrl(docsImageRoute);

export function getPageImageUrl(page: { slugs: string[]; locale?: string }) {
  const segments = [...page.slugs, 'image.png'];
  return { segments, url: getImageUrl(segments, page.locale) };
}
