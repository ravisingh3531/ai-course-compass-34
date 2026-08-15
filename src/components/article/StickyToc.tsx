import { useEffect, useMemo, useState } from "react";
import { COURSES } from "./courses";

type Item = { id: string; label: string; group?: boolean; sub?: boolean };

export function useTocItems(): Item[] {
  return useMemo(() => {
    const reviews: Item[] = COURSES.map((c) => ({
      id: `review-${c.id}`,
      label: `${c.rank}. ${(c.name.split("—")[0] ?? c.name).trim()}`,
      sub: true,
    }));
    return [
      { id: "hero", label: "Top" },
      { id: "quick-answer", label: "Quick answer" },
      { id: "capability-ladder", label: "Capability ladder" },
      { id: "skill-stack", label: "7-layer AI skill stack" },
      { id: "top-10", label: "Top 10 at a glance" },
      { id: "review-logicmojo", label: "#1 LogicMojo deep dive" },
      { id: "reviews", label: "In-depth reviews", group: true },
      ...reviews,
      { id: "also-considered", label: "Also considered" },
      { id: "quiz", label: "Which course fits you? (quiz)" },
      { id: "roi", label: "Reality check — ROI & EMI" },
      { id: "roadmap", label: "12-month roadmap" },
      { id: "red-flags", label: "Red flags" },
      { id: "faqs", label: "FAQs" },
    ];
  }, []);
}

function useActiveId(ids: string[]) {
  const [active, setActive] = useState<string>(ids[0] ?? "");
  useEffect(() => {
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((e): e is HTMLElement => Boolean(e));
    if (!els.length) return;
    const onScroll = () => {
      let current = els[0]?.id ?? "";
      for (const el of els) {
        if (el.getBoundingClientRect().top <= 140) current = el.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [ids.join("|")]);
  return active;
}

function TocList({
  items,
  active,
  onNavigate,
}: {
  items: Item[];
  active: string;
  onNavigate?: () => void;
}) {
  return (
    <ol className="!m-0 !list-none !p-0 space-y-0.5">
      {items.map((t) => {
        const isActive = active === t.id;
        return (
          <li key={t.id} className="!my-0">
            <a
              href={`#${t.id}`}
              onClick={onNavigate}
              className={`!border-0 flex items-center gap-2 rounded-lg py-1.5 pr-2 text-[0.82rem] leading-snug transition-all ${
                t.sub ? "pl-6" : "pl-3"
              } ${
                isActive
                  ? "bg-primary/[0.09] font-semibold !text-primary"
                  : "!text-muted-foreground hover:bg-primary/[0.05] hover:!text-primary"
              }`}
            >
              <span
                className={`h-1.5 w-1.5 shrink-0 rounded-full transition-colors ${
                  isActive ? "bg-primary" : "bg-border"
                }`}
              />
              <span className={t.group ? "font-semibold text-ink" : ""}>{t.label}</span>
            </a>
          </li>
        );
      })}
    </ol>
  );
}

export function StickyToc() {
  const items = useTocItems();
  const active = useActiveId(items.map((i) => i.id));
  const [open, setOpen] = useState(false);
  const activeLabel = items.find((i) => i.id === active)?.label ?? "Contents";

  return (
    <>
      {/* Desktop rail */}
      <aside className="pointer-events-none fixed inset-y-0 left-0 z-40 hidden w-[17rem] items-center pl-5 min-[1500px]:flex">
        <nav
          aria-label="Table of contents"
          className="pointer-events-auto max-h-[78vh] w-full overflow-y-auto rounded-2xl border border-border bg-card/85 p-3 shadow-[var(--shadow-soft)] backdrop-blur-xl"
        >
          <p className="mb-2 px-3 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-primary">
            On this page
          </p>
          <TocList items={items} active={active} />
        </nav>
      </aside>

      {/* Mobile / tablet sticky bar */}
      <div className="sticky top-[57px] z-40 border-b border-border/70 bg-background/85 backdrop-blur-xl min-[1500px]:hidden">
        <div className="wrap py-2">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="flex w-full items-center justify-between gap-3 rounded-xl border border-border bg-card px-3 py-2 text-left text-[0.82rem] font-medium text-ink shadow-[var(--shadow-soft)]"
          >
            <span className="truncate">
              <span className="mr-2 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-primary">
                Contents
              </span>
              {activeLabel}
            </span>
            <span className={`text-primary transition-transform ${open ? "rotate-180" : ""}`}>▾</span>
          </button>
          {open ? (
            <nav
              aria-label="Table of contents"
              className="mt-2 max-h-[60vh] overflow-y-auto rounded-xl border border-border bg-card p-2 shadow-[var(--shadow-lift)]"
            >
              <TocList items={items} active={active} onNavigate={() => setOpen(false)} />
            </nav>
          ) : null}
        </div>
      </div>
    </>
  );
}
