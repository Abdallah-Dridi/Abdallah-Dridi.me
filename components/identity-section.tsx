import { Reveal } from "@/components/reveal";
import { SectionShell } from "@/components/section-shell";
import { identityData } from "@/lib/site-data";

export function IdentitySection() {
  return (
    <SectionShell
      id="identity"
      index="02"
      kicker="Present Coordinates / Recruiter Signal"
      title="Current State"
    >
      <div className="grid gap-10 xl:grid-cols-[minmax(0,1.25fr)_300px]">
        <div className="space-y-8">
          <Reveal>
            <p
              data-cursor="text"
              className="max-w-[28ch] text-balance font-serif text-[clamp(2rem,3.2vw,3.5rem)] italic leading-[1.02] text-paper"
            >
              {identityData.lead}
            </p>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-3">
            {identityData.callouts.map((item, index) => (
              <Reveal
                key={item.label}
                variant="soft"
                delay={index * 0.08}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5"
              >
                <p className="mono-label text-gold">{item.label}</p>
                <h3 className="mt-5 font-display text-3xl uppercase leading-none tracking-display text-paper">
                  {item.value}
                </h3>
                <p
                  data-cursor="text"
                  className="mt-5 max-w-[22ch] font-serif text-[1.05rem] leading-relaxed text-paper/70"
                >
                  {item.note}
                </p>
              </Reveal>
            ))}
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {identityData.paragraphs.map((paragraph, index) => (
              <Reveal key={paragraph} variant="soft" delay={index * 0.08}>
                <p
                  data-cursor="text"
                  className="font-serif text-[1.12rem] leading-[1.8] text-paper/76"
                >
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal variant="soft" className="rounded-[1.75rem] border border-white/10 bg-noir-900/90 p-6">
          <div className="space-y-6">
            <div>
              <p className="mono-label text-paper/55">Certifications</p>
              <div className="mt-6 space-y-4">
                {identityData.certifications.map((certification) => (
                  <div
                    key={certification}
                    className="rounded-full border border-gold/25 bg-gold/[0.06] px-5 py-3"
                  >
                    <span className="font-display text-2xl uppercase tracking-display text-paper">
                      {certification}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-white/10 pt-6">
              <p
                data-cursor="text"
                className="font-serif text-[1.05rem] leading-relaxed text-paper/68"
              >
                Technical signal is only useful when it stays legible. This section exists so the site remains memorable without obscuring what matters to hiring teams.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
