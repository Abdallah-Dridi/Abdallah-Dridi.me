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
      <div className="grid gap-10 xl:grid-cols-[minmax(0,1.18fr)_320px]">
        <div className="min-w-0 space-y-8">
          <Reveal>
            <p
              data-cursor="text"
              className="max-w-[26ch] font-serif text-[clamp(1.85rem,3vw,3.1rem)] italic leading-[1.06] text-paper"
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
                className="min-w-0 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5"
              >
                <p className="mono-label text-gold">{item.label}</p>
                <h3 className="mt-5 max-w-[12ch] font-display text-[1.85rem] uppercase leading-[0.9] tracking-[0.05em] text-paper">
                  {item.value}
                </h3>
                <p
                  data-cursor="text"
                  className="mt-5 max-w-[24ch] font-serif text-[1rem] leading-[1.72] text-paper/70"
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
                  className="max-w-[34rem] font-serif text-[1.08rem] leading-[1.82] text-paper/76"
                >
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal variant="soft" className="min-w-0 rounded-[1.75rem] border border-white/10 bg-noir-900/90 p-6">
          <div className="space-y-6">
            <div>
              <p className="mono-label text-paper/55">Certifications</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {identityData.certifications.map((certification) => (
                  <div
                    key={certification}
                    className="rounded-full border border-gold/25 bg-gold/[0.06] px-4 py-3"
                  >
                    <span className="font-display text-[1.45rem] uppercase tracking-[0.05em] text-paper">
                      {certification}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-white/10 pt-6">
              <p
                data-cursor="text"
                className="font-serif text-[1rem] leading-[1.72] text-paper/68"
              >
                Certifications matter to me as proof of discipline, not as a substitute for building and investigating real systems.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
