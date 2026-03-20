import { Reveal } from "@/components/reveal";
import { SectionShell } from "@/components/section-shell";
import { investigations } from "@/lib/site-data";

export function SystemsSection() {
  return (
    <SectionShell
      id="systems"
      index="03"
      kicker="Systems Explored / Questions Pursued"
      title="Work"
      theme="paper"
    >
      <div className="grid gap-5 xl:grid-cols-3">
        {investigations.map((item, index) => (
          <Reveal
            key={item.title}
            delay={index * 0.08}
            className="group relative flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-black/10 bg-black px-6 py-7 text-paper transition-transform duration-500 hover:-translate-y-1"
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-gold/[0.08] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative flex h-full flex-col">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="mono-label text-gold">{item.index}</p>
                  <h3 className="mt-5 font-display text-[2.4rem] uppercase leading-[0.9] tracking-display text-paper">
                    {item.title}
                  </h3>
                </div>
                <div className="space-y-2 text-right">
                  <p className="mono-label text-paper/45">{item.format}</p>
                  <p className="text-[11px] uppercase tracking-[0.24em] text-paper/45">{item.year}</p>
                </div>
              </div>

              <p
                data-cursor="text"
                className="mt-8 font-serif text-[1.08rem] leading-[1.75] text-paper/76"
              >
                {item.summary}
              </p>

              <div className="mt-8 space-y-5 border-t border-white/10 pt-6">
                <div>
                  <p className="mono-label text-paper/42">Why it mattered</p>
                  <p
                    data-cursor="text"
                    className="mt-3 font-serif text-[1rem] leading-[1.75] text-paper/74"
                  >
                    {item.motive}
                  </p>
                </div>
                <div>
                  <p className="mono-label text-paper/42">What I was trying to understand</p>
                  <p
                    data-cursor="text"
                    className="mt-3 font-serif text-[1rem] leading-[1.75] text-paper/74"
                  >
                    {item.inquiry}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="stack-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
