import Link from 'next/link';
import type { ReactNode } from 'react';
import {
  Activity, AudioLines, AudioWaveform, Captions, ChevronRight, FileAudio, FileText, KeyRound, Languages, Mic,
  Speech,
} from 'lucide-react';

function Art({ name, alt = '' }: { name: string; alt?: string }) {
  return (
    <>
      <img className="pw-doodle pw-doodle-light" src={`/illustrations/${name}-light.svg`} alt={alt} width={1024} height={768} />
      <img className="pw-doodle pw-doodle-dark" src={`/illustrations/${name}-dark.svg`} alt="" aria-hidden width={1024} height={768} />
    </>
  );
}

const products = [
  { title: 'Text to speech', href: '/text-to-speech', icon: AudioLines, text: '69 native Nigerian voices that speak all five Nigerian languages, plus voices for more than 80 African languages.' },
  { title: 'Streaming speech', href: '/streaming-speech', icon: AudioWaveform, text: 'First audio in about 0.1 seconds, for live calls and voice agents.' },
  { title: 'Voice cloning', href: '/voice-cloning', icon: Mic, text: 'A reusable voice from 5 to 10 seconds of one person, with consent built in.' },
  { title: 'Speech to text', href: '/speech-to-text', icon: FileAudio, text: 'STORM ASR 2.0: no language needed, code-mixed speech, full tone marks, subtitles.' },
  { title: 'Real-time transcription', href: '/realtime-transcription', icon: Captions, text: 'A WebSocket that hears when a caller starts and stops, built for phone lines.' },
  { title: 'Translation', href: '/translation', icon: Languages, text: 'Any pair of English, Yoruba, Hausa, Igbo and Nigerian Pidgin.' },
];

const models = [
  ['STORM v1.5', 'storm-v1', 'Flagship Nigerian voices with full tonal control.'],
  ['STORM Gust 1.0', 'storm-gust', 'Fast voice cloning and the lowest-latency streaming.'],
  ['STORM Ensemble 3.0', 'storm-ensemble', 'Built-in voices for 57 more African languages.'],
  ['STORM v3', 'storm-v3', '70 African languages, preset or cloned voices.'],
  ['STORM ASR 2.0', '', 'Speech to text for the five Nigerian languages and mixed speech.'],
  ['STORM MT', '', 'Translation between the five Nigerian languages.'],
];

const production = [
  { icon: Speech, title: 'Native speakers, real phonology', text: 'Every built-in Nigerian voice is a native speaker, and every language has its own tonal modelling.' },
  { icon: FileText, title: 'Text normalisation built in', text: 'Naira amounts, times, percentages and units become words before they are spoken.' },
  { icon: Activity, title: 'Clear limits, no surprises', text: 'Per-plan limits, honest 429 answers with Retry-After, and overflow when an engine is busy.' },
  { icon: KeyRound, title: 'One account for everything', text: 'The same keys, usage and billing for the API and the MCP, with per-key usage.' },
];

function Section({ title, text, children }: { title: string; text?: string; children: ReactNode }) {
  return (
    <section className="pw-section">
      <h2 className="pw-h2">{title}</h2>
      {text ? <p className="pw-lead">{text}</p> : null}
      {children}
    </section>
  );
}

export function Home() {
  return (
    <div className="pw-home">
      <section className="pw-hero">
        <div className="pw-hero-copy">
          <h1 className="pw-h1">
            Voice AI for <span>Africa&apos;s languages</span>
          </h1>
          <p className="pw-hero-text">
            Natural text to speech, voice cloning, speech to text and translation for Yoruba, Hausa, Igbo, Nigerian
            Pidgin, Nigerian English and more than 80 African languages. One API, or straight inside your AI assistant.
          </p>
          <div className="pw-actions">
            <Link href="/quickstart" className="pw-btn pw-btn-primary">
              Quickstart <ChevronRight size={16} />
            </Link>
            <Link href="/mcp/overview" className="pw-btn pw-btn-ghost">
              Connect your AI assistant
            </Link>
          </div>
          <dl className="pw-stats">
            <div><dt>86</dt><dd>languages spoken</dd></div>
            <div><dt>69</dt><dd>native Nigerian voices</dd></div>
            <div><dt>0.1s</dt><dd>to first audio</dd></div>
          </dl>
        </div>
        <div className="pw-hero-art">
          <Art name="sitting-reading" alt="Illustration of a person reading" />
        </div>
      </section>

      <Section title="Two ways to build" text="The same voices, models and account, whichever way you connect.">
        <div className="pw-ways">
          <Link href="/quickstart" className="pw-way">
            <div className="pw-art"><Art name="unboxing" /></div>
            <div className="pw-way-body">
              <h3>Developer API</h3>
              <p>A REST API with an API key in the <code>X-API-Key</code> header. Call it from Python, Node.js, Go, PHP or plain curl.</p>
              <pre className="pw-code"><code>POST https://api.plotweaver.app/v1/speech</code></pre>
              <span className="pw-more">Make your first request <ChevronRight size={16} /></span>
            </div>
          </Link>
          <Link href="/mcp/overview" className="pw-way">
            <div className="pw-art"><Art name="selfie" /></div>
            <div className="pw-way-body">
              <h3>PlotWeaver MCP</h3>
              <p>Add one address to Claude, ChatGPT, Cursor, VS Code or Claude Code, sign in, and ask in plain words.</p>
              <pre className="pw-code"><code>https://mcp.plotweaver.app/mcp</code></pre>
              <span className="pw-more">Connect your assistant <ChevronRight size={16} /></span>
            </div>
          </Link>
        </div>
      </Section>

      <Section title="What you can build">
        <div className="pw-grid3">
          {products.map((p) => (
            <Link key={p.href} href={p.href} className="pw-card">
              <span className="pw-icon"><p.icon size={28} strokeWidth={1.6} /></span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section
        title="The STORM models"
        text="You rarely pick a model yourself. Send a language and a voice, and the API routes the request to the right engine."
      >
        <div className="pw-models">
          {models.map(([name, id, text]) => (
            <div key={name} className="pw-model">
              <div className="pw-model-head"><strong>{name}</strong>{id ? <code>{id}</code> : null}</div>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Built for production">
        <div className="pw-split">
          <div className="pw-list">
            {production.map((p) => (
              <div key={p.title} className="pw-list-item">
                <span className="pw-icon"><p.icon size={28} strokeWidth={1.6} /></span>
                <div><h3>{p.title}</h3><p>{p.text}</p></div>
              </div>
            ))}
          </div>
          <div className="pw-art pw-art-tall"><Art name="meditating" /></div>
        </div>
      </Section>

      <section className="pw-help">
        <div className="pw-art pw-art-help"><Art name="coffee" /></div>
        <div>
          <h2 className="pw-h2">Talk to the team</h2>
          <p className="pw-lead">Questions about voices, languages, volume pricing or a custom voice? Send the request ID, the language and the voice, and we can usually answer in one reply.</p>
          <div className="pw-actions">
            <a href="mailto:info@plotweaver.app" className="pw-btn pw-btn-primary">Email info@plotweaver.app</a>
            <Link href="/support" className="pw-btn pw-btn-ghost">Support options</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
