import { RootProvider } from 'fumadocs-ui/provider/next';
import type { Metadata } from 'next';
import { Bricolage_Grotesque, Outfit } from 'next/font/google';
import localFont from 'next/font/local';
import { siteUrl } from '@/lib/shared';
import './global.css';

const heading = Bricolage_Grotesque({ subsets: ['latin', 'latin-ext', 'vietnamese'], variable: '--font-heading' });
const body = Outfit({ subsets: ['latin', 'latin-ext'], variable: '--font-body' });
const sub = localFont({ src: '../public/fonts/PowerGrotesk-Medium.woff2', variable: '--font-sub', weight: '500' });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'PlotWeaver Docs', template: '%s | PlotWeaver Docs' },
  description:
    'Build with PlotWeaver: text to speech, speech to text, translation and voice cloning for Nigerian and African languages, through the developer API or the PlotWeaver MCP.',
  icons: { icon: '/favicon.svg' },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable} ${sub.variable}`} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
