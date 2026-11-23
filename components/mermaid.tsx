'use client';

import { use, useEffect, useId, useState } from 'react';
import { useTheme } from 'next-themes';

export function Mermaid({ chart }: { chart: string }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return <MermaidContent chart={chart} />;
}

const cache = new Map<string, Promise<unknown>>();
function cachePromise<T>(key: string, fn: () => Promise<T>): Promise<T> {
  const hit = cache.get(key);
  if (hit) return hit as Promise<T>;
  const p = fn();
  cache.set(key, p);
  return p;
}

function MermaidContent({ chart }: { chart: string }) {
  const id = useId();
  const { resolvedTheme } = useTheme();
  const dark = resolvedTheme === 'dark';
  const { default: mermaid } = use(cachePromise('mermaid', () => import('mermaid')));
  mermaid.initialize({
    startOnLoad: false,
    securityLevel: 'loose',
    fontFamily: 'var(--font-body), sans-serif',
    theme: 'base',
    themeVariables: dark
      ? { primaryColor: '#12292d', primaryTextColor: '#edf3f3', primaryBorderColor: '#c5ff00', lineColor: '#a6b9bc', secondaryColor: '#0e2226', tertiaryColor: '#0b1b1e', background: '#061113', mainBkg: '#12292d', fontSize: '15px' }
      : { primaryColor: '#f3f9e6', primaryTextColor: '#0b1b1e', primaryBorderColor: '#4a6600', lineColor: '#4b5b5e', secondaryColor: '#f5f7f7', tertiaryColor: '#ffffff', background: '#ffffff', mainBkg: '#f3f9e6', fontSize: '15px' },
  });
  const { svg, bindFunctions } = use(
    cachePromise(`${chart}-${resolvedTheme}`, () => mermaid.render(id.replace(/:/g, ''), chart.replaceAll('\\n', '\n'))),
  );
  return (
    <div
      className="my-6 flex justify-center overflow-x-auto [&_svg]:max-w-full"
      ref={(el) => { if (el) bindFunctions?.(el); }}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
