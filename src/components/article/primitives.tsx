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
    <section id={id} className="rule-top pt-10 mt-14 first:mt-0">
      {eyebrow ? (
        <p className="mb-2 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-accent-foreground/70">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="!mt-0">{title}</h2>
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
    default: "border-l-border bg-muted",
    accent: "border-l-accent bg-accent/10",
    warn: "border-l-warning bg-warning/10",
  };
  return (
    <blockquote
      className={`my-6 border-l-4 ${tones[tone]} rounded-r-lg px-5 py-4 text-[0.98rem] leading-relaxed`}
    >
      {label ? (
        <span className="mb-1 block font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
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
    <figure className="my-7">
      <div className="overflow-x-auto rounded-xl border border-border bg-card shadow-[0_1px_0_0_var(--border)]">
        <table className="w-full border-collapse text-left text-[0.86rem]">
          <thead>
            <tr className="bg-secondary">
              {head.map((h) => (
                <th
                  key={h}
                  className="whitespace-nowrap border-b border-border px-3 py-2.5 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-secondary-foreground"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="odd:bg-background even:bg-muted/40 align-top">
                {r.map((c, j) => (
                  <td
                    key={j}
                    className={`border-b border-border/70 px-3 ${dense ? "py-1.5" : "py-2.5"} ${
                      j === 0 ? "font-medium text-ink" : "text-foreground/90"
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
    <span className="inline-flex items-center rounded-full border border-border bg-secondary px-2.5 py-0.5 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-secondary-foreground">
      {children}
    </span>
  );
}