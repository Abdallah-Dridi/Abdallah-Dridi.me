import { Reveal } from "@/components/reveal";
import { SectionShell } from "@/components/section-shell";
import { manifestoData } from "@/lib/site-data";

export function ManifestoSection() {
  return (
    <SectionShell id="manifesto" index="01" kicker="Method / Internal Logic" title="Manifesto" theme="paper">
      <div className="relative overflow-hidden rounded-[1.75rem] border border-black/10 bg-black px-6 py-8 text-paper sm:px-8 sm:py-10 lg:px-12 lg:py-14">
        <span className="pointer-events-none absolute right-4 top-2 font-display text-[clamp(4.5rem,14vw,12rem)] uppercase leading-none tracking-[0.08em] text-white/[0.04]">
          Method
        </span>
        <Reveal>
          <p
            data-cursor="text"
            className="max-w-[17ch] text-balance font-serif text-[clamp(2.4rem,4vw,4.5rem)] italic leading-[0.95] text-paper"
          >
            {manifestoData.heading}
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_220px]">
          <div className="space-y-6">
            {manifestoData.body.map((paragraph, index) => (
              <Reveal key={paragraph} variant="soft" delay={index * 0.08}>
                <p
                  data-cursor="text"
                  className="max-w-[38rem] text-balance font-serif text-[1.22rem] leading-[1.7] text-paper/80 sm:text-[1.35rem]"
                >
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal variant="soft" className="flex items-end">
            <div className="w-full border-t border-gold/45 pt-5">
              <p className="mono-label text-gold">{manifestoData.attribution}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </SectionShell>
  );
}
