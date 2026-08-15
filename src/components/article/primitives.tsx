import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="reveal mt-16 scroll-mt-36 first:mt-0">
      <div className="mb-5 flex items-center gap-3">
        <span className="h-8 w-1.5 rounded-full bg-[image:var(--gradient-primary)]" />
        <div>
          {eyebrow ? (
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
          ) : null}
          <h2 className="!mt-0 !mb-0">{title}</h2>
        </div>
      </div>
      {children}
    </section>
  );
}

export function Callout({
  children,
  tone = "default",
  label,
}: {
  children: ReactNode;
  tone?: "default" | "accent" | "warn";
  label?: string;
}) {
  const tones: Record<string, string> = {
    default: "border-l-border bg-muted/70",
    accent: "border-l-primary bg-primary/[0.06]",
    warn: "border-l-warning bg-warning/[0.09]",
  };
  return (
    <blockquote
      className={`my-6 border border-border/70 border-l-4 ${tones[tone]} rounded-xl px-5 py-4 text-[0.98rem] leading-relaxed shadow-[var(--shadow-soft)] backdrop-blur-sm`}
    >
      {label ? (
        <span className="mb-1 block font-mono text-[0.68rem] uppercase tracking-[0.16em] text-primary">
          {label}
        </span>
      ) : null}
      {children}
    </blockquote>
  );
}

export function DataTable({
  head,
  rows,
  caption,
  dense,
}: {
  head: string[];
  rows: ReactNode[][];
  caption?: string;
  dense?: boolean;
}) {
  return (
    <figure className="reveal my-7">
      <div className="card-lm overflow-x-auto">
        <table className="w-full border-collapse text-left text-[0.86rem]">
          <thead>
            <tr className="bg-[image:var(--gradient-primary)]">
              {head.map((h) => (
                <th
                  key={h}
                  className="whitespace-nowrap px-3 py-3 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-primary-foreground"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr
                key={i}
                className="align-top transition-colors odd:bg-card even:bg-secondary/50 hover:bg-primary/[0.05]"
              >
                {r.map((c, j) => (
                  <td
                    key={j}
                    className={`border-b border-border/70 px-3 ${dense ? "py-1.5" : "py-2.5"} ${
                      j === 0 ? "font-semibold text-ink" : "text-foreground/90"
                    }`}
                  >
                    {c}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {caption ? (
        <figcaption className="mt-2 text-[0.82rem] italic text-muted-foreground">{caption}</figcaption>
      ) : null}
    </figure>
  );
}

export function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/[0.07] px-2.5 py-0.5 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-primary">
      {children}
    </span>
  );
}

export function NoteCard({
  title,
  children,
  icon,
}: {
  title: string;
  children: ReactNode;
  icon?: ReactNode;
}) {
  return (
    <div className="card-lm reveal p-5">
      <div className="mb-2 flex items-center gap-2">
        {icon ? <span className="text-primary">{icon}</span> : null}
        <h4 className="!mt-0 !mb-0 text-[0.98rem] font-semibold text-ink">{title}</h4>
      </div>
      <div className="text-[0.92rem] leading-relaxed text-muted-foreground">{children}</div>
    </div>
  );
}

export function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="card-lm p-5 text-center">
      <p className="!my-0 font-display text-3xl font-bold gradient-text">{value}</p>
      <p className="!mt-1 !mb-0 text-[0.78rem] uppercase tracking-[0.12em] text-muted-foreground">{label}</p>
    </div>
  );
}