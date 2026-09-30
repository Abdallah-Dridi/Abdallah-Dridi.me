"use client";

import { configIds } from "@/data/content";
import { useI18n } from "@/lib/i18n";

export default function HomePage() {
  const { dictionary } = useI18n();

  return (
    <>
      <a className="skip-link" href="#main-content">
        {dictionary.common.skip}
      </a>
      <main id="main-content">
      <section className="foundation-hero" id="top" aria-labelledby="intro-title">
        <div className="foundation-hero__grid" aria-hidden="true" />
        <div className="foundation-hero__content">
          <div className="foundation-hero__rule" aria-hidden="true" />
          <p className="eyebrow">{dictionary.intro.overline}</p>
          <h1 id="intro-title" className="display-title">
            {dictionary.intro.title}
          </h1>
          <div className="foundation-hero__footer">
            <p className="editorial-copy">{dictionary.intro.supporting}</p>
            <p className="mono-copy">{dictionary.intro.availability}</p>
          </div>
        </div>
      </section>

      <section className="foundation-preview" id="reveal" aria-labelledby="preview-title">
        <div className="section-shell">
          <div className="foundation-preview__header">
            <p className="eyebrow">{dictionary.intro.phaseLabel}</p>
            <h2 id="preview-title" className="display-subtitle">
              {dictionary.intro.phaseNote}
            </h2>
          </div>
          <div className="configuration-strip" id="configure">
            {configIds.map((id, index) => (
              <article className="configuration-teaser" key={id}>
                <span className="configuration-teaser__index" aria-hidden="true">
                  0{index + 1}
                </span>
                <h3>{dictionary.configurations[id].name}</h3>
                <p>{dictionary.configurations[id].description}</p>
              </article>
            ))}
          </div>
          <div className="future-anchor" id="specs" aria-hidden="true" />
          <div className="future-anchor" id="compare" aria-hidden="true" />
          <div className="future-anchor" id="contact" aria-hidden="true" />
        </div>
      </section>
      </main>
    </>
  );
}
