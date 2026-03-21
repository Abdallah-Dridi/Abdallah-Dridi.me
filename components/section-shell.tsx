import type { PropsWithChildren, ReactNode } from "react";

type SectionShellProps = PropsWithChildren<{
  id: string;
  index: string;
  kicker: string;
  title?: ReactNode;
  theme?: "dark" | "paper";
  className?: string;
}>;

export function SectionShell({
  children,
  className = "",
  id,
  index,
  kicker,
  title,
  theme = "dark"
}: SectionShellProps) {
  const surfaceClass =
    theme === "paper"
      ? "border-black/10 bg-paper text-black shadow-panel"
      : "border-white/10 bg-noir-850/70 text-paper shadow-panel";

  return (
    <section id={id} className={`section-spacing relative ${className}`}>
      <div className={`mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12`}>
        <div className={`overflow-hidden rounded-[2rem] border ${surfaceClass}`}>
          <div className="grid gap-10 p-6 sm:p-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:p-12 xl:grid-cols-[240px_minmax(0,1fr)]">
            <div className="flex min-w-0 flex-col justify-between gap-10">
              <div className="space-y-5">
                <span className="mono-label block">{index}</span>
                <div className="gold-rule origin-left" />
                <p className="max-w-[20ch] text-[10px] uppercase tracking-[0.32em] opacity-70">
                  {kicker}
                </p>
              </div>
              {title ? (
                <h2 className="display-subtitle max-w-[8ch] text-pretty">{title}</h2>
              ) : null}
            </div>
            <div className="min-w-0">{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
