import { Reveal } from "@/components/reveal";
import { SectionShell } from "@/components/section-shell";
import { manifestoData } from "@/lib/site-data";

export function ManifestoSection() {
  return (
    <SectionShell id="manifesto" index="01" kicker="Method / Internal Logic" title="Manifesto" theme="paper">
      <div className="relative overflow-hidden rounded-[1.75rem] border border-black/10 bg-black px-6 py-8 text-paper sm:px-8 sm:py-10 lg:px-12 lg:py-14">
        <span className="pointer-events-none absolute right-6 top-4 hidden font-display text-[clamp(4rem,12vw,9rem)] uppercase leading-none tracking-[0.08em] text-white/[0.035] lg:block">
          Method
        </span>
        <Reveal>
          <p
            data-cursor="text"
            className="max-w-[16ch] font-serif text-[clamp(2.1rem,3.8vw,4rem)] italic leading-[0.98] text-paper"
          >
            {manifestoData.heading}
          </p>
        </Reveal>

        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_200px]">
          <div className="space-y-5 min-w-0">
            {manifestoData.body.map((paragraph, index) => (
              <Reveal key={paragraph} variant="soft" delay={index * 0.08}>
                <p
                  data-cursor="text"
                  className="max-w-[36rem] font-serif text-[1.1rem] leading-[1.78] text-paper/78 sm:text-[1.22rem]"
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
