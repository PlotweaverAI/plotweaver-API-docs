import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { gitConfig } from './shared';

export function Logo() {
  return (
    <>
      <img src="/logo/light.svg" alt="PlotWeaver" className="h-[22px] w-auto dark:hidden" />
      <img src="/logo/dark.svg" alt="PlotWeaver" className="hidden h-[22px] w-auto dark:block" />
      <span className="sr-only">PlotWeaver Docs</span>
    </>
  );
}

export function baseOptions(): BaseLayoutProps {
  return {
    nav: { title: <Logo />, url: '/' },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
    links: [
      { text: 'Pricing', url: 'https://plotweaver.app/pricing', external: true },
      { text: 'Support', url: 'mailto:info@plotweaver.app', external: true },
      { text: 'Dashboard', url: 'https://app.plotweaver.app', external: true },
    ],
  };
}
