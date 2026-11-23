import type { ReactNode } from 'react';
import { Callout } from 'fumadocs-ui/components/callout';
import { Card as FdCard, Cards } from 'fumadocs-ui/components/card';
import { Step as FdStep } from 'fumadocs-ui/components/steps';
import { Accordions } from 'fumadocs-ui/components/accordion';
import {
  ArrowRight, Bolt, Captions, Code, Gauge, Gauge as GaugeHigh, Key, Languages, Mail, MessageCircle,
  MessagesSquare, Mic, MousePointer2, PhoneCall, Plug, Rocket, Sparkles, SpellCheck, Terminal, FileText,
  User, Users, AudioLines,
} from 'lucide-react';

const icons: Record<string, ReactNode> = {
  'arrow-pointer': <MousePointer2 />, bolt: <Bolt />, 'closed-captioning': <Captions />, code: <Code />,
  comments: <MessagesSquare />, envelope: <Mail />, 'file-lines': <FileText />, gauge: <Gauge />,
  'gauge-high': <GaugeHigh />, key: <Key />, language: <Languages />, message: <MessageCircle />,
  'microphone-lines': <Mic />, 'phone-volume': <PhoneCall />, plug: <Plug />, rocket: <Rocket />,
  sparkles: <Sparkles />, 'spell-check': <SpellCheck />, terminal: <Terminal />, user: <User />,
  users: <Users />, 'waveform-lines': <AudioLines />,
};

export function CardGroup({ cols = 2, children }: { cols?: number; children: ReactNode }) {
  return <Cards className={cols >= 3 ? 'lg:grid-cols-3' : undefined}>{children}</Cards>;
}

export function Card({ title, icon, href, children }: { title: string; icon?: string; href?: string; children?: ReactNode }) {
  return (
    <FdCard title={title} icon={icon ? (icons[icon] ?? <ArrowRight />) : undefined} href={href} description={children} />
  );
}

export function Step({ title, children }: { title?: ReactNode; children?: ReactNode }) {
  return (
    <FdStep>
      {title ? <p className="pw-step-title">{title}</p> : null}
      {children}
    </FdStep>
  );
}

export const Note = (p: { children: ReactNode }) => <Callout type="info">{p.children}</Callout>;
export const Info = (p: { children: ReactNode }) => <Callout type="info">{p.children}</Callout>;
export const Tip = (p: { children: ReactNode }) => <Callout type="idea" title="Tip">{p.children}</Callout>;
export const Warning = (p: { children: ReactNode }) => <Callout type="warn">{p.children}</Callout>;

export function AccordionGroup({ children }: { children: ReactNode }) {
  return <Accordions multiple>{children}</Accordions>;
}

export function Frame({ caption, children }: { caption?: ReactNode; children: ReactNode }) {
  return (
    <figure className="pw-frame">
      {children}
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}

type FieldProps = {
  body?: string; query?: string; path?: string; header?: string; name?: string;
  type?: string; required?: boolean; default?: string; children?: ReactNode;
};

function Field({ name, where, type, required, def, children }: { name: string; where?: string; type?: string; required?: boolean; def?: string; children?: ReactNode }) {
  return (
    <div className="pw-field">
      <div className="pw-field-head">
        <code className="pw-field-name">{name}</code>
        {type ? <span className="pw-field-type">{type}</span> : null}
        {where ? <span className="pw-field-type">{where}</span> : null}
        {required ? <span className="pw-field-req">required</span> : null}
        {def !== undefined ? <span className="pw-field-type">default: <code>{def}</code></span> : null}
      </div>
      {children ? <div className="pw-field-body">{children}</div> : null}
    </div>
  );
}

export function ParamField(p: FieldProps) {
  const where = p.body !== undefined ? 'body' : p.query !== undefined ? 'query' : p.path !== undefined ? 'path' : p.header !== undefined ? 'header' : undefined;
  const name = p.body ?? p.query ?? p.path ?? p.header ?? p.name ?? '';
  return <Field name={name} where={where} type={p.type} required={p.required} def={p.default}>{p.children}</Field>;
}

export function ResponseField(p: FieldProps) {
  return <Field name={p.name ?? ''} type={p.type} required={p.required} def={p.default}>{p.children}</Field>;
}
