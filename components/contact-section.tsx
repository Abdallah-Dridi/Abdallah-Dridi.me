import { Reveal } from "@/components/reveal";
import { contactData } from "@/lib/site-data";

export function ContactSection() {
  return (
    <section id="contact" className="section-spacing pb-10">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-black px-6 py-12 shadow-panel sm:px-8 lg:px-12 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[220px_minmax(0,1fr)]">
            <div className="space-y-5">
              <span className="mono-label block">05</span>
              <div className="gold-rule origin-left" />
              <p className="text-[10px] uppercase tracking-[0.32em] text-paper/60">
                Contact / Direct Channel
              </p>
            </div>

            <div className="grid gap-10 xl:grid-cols-[minmax(0,1fr)_280px]">
              <div className="min-w-0 space-y-8">
                <Reveal>
                  <h2 className="max-w-[11ch] font-serif text-[clamp(2.35rem,4.5vw,4.8rem)] italic leading-[0.98] text-paper">
                    {contactData.heading}
                  </h2>
                </Reveal>
                <Reveal variant="soft">
                  <p
                    data-cursor="text"
                    className="max-w-[34rem] font-serif text-[1.08rem] leading-[1.8] text-paper/74"
                  >
                    {contactData.body}
                  </p>
                </Reveal>
              </div>

              <Reveal variant="soft" className="min-w-0 rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-6">
                <div className="space-y-5">
                  <div>
                    <p className="mono-label text-gold">Email</p>
                    <a
                      href={`mailto:${contactData.email}`}
                      data-cursor="link"
                      className="mt-3 block font-serif text-xl text-paper transition-colors hover:text-gold"
                    >
                      {contactData.email}
                    </a>
                  </div>
                  <div className="border-t border-white/10 pt-5">
                    <p className="mono-label text-gold">GitHub</p>
                    <a
                      href={contactData.github}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor="link"
                      className="mt-3 block font-serif text-xl text-paper transition-colors hover:text-gold"
                    >
                      github.com/Abdallah-Dridi
                    </a>
                  </div>
                  <div className="border-t border-white/10 pt-5">
                    <p className="mono-label text-gold">LinkedIn</p>
                    <a
                      href={contactData.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor="link"
                      className="mt-3 block break-words font-serif text-xl text-paper transition-colors hover:text-gold"
                    >
                      linkedin.com/in/abdallah-dridi-93589a184
                    </a>
                  </div>
                  <div className="border-t border-white/10 pt-5">
                    <p className="mono-label text-paper/45">Domain</p>
                    <a
                      href={contactData.domain}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor="link"
                      className="mt-3 block font-serif text-lg text-paper/72 transition-colors hover:text-paper"
                    >
                      abdallah-dridi.me
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
