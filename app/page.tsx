"use client";

import { SecurityCore } from "@/components/security-core";
import { configIds } from "@/data/content";
import { useI18n } from "@/lib/i18n";

export default function HomePage() {
  const { dictionary } = useI18n();
  const systemLayers = Object.values(dictionary.system.layers);

  return (
    <>
      <a className="skip-link" href="#main-content">
        {dictionary.common.skip}
      </a>
      <main id="main-content">
        <section className="launch" id="top" aria-labelledby="launch-title">
          <div className="launch__scanlines" aria-hidden="true" />
          <div className="launch__frame">
            <div className="launch__copy">
              <p className="eyebrow">{dictionary.intro.overline}</p>
              <h1 id="launch-title" className="launch__title">
                {dictionary.intro.title}
              </h1>
              <p className="launch__lead">{dictionary.intro.supporting}</p>
            </div>

            <SecurityCore
              ariaLabel={dictionary.system.aria}
              core={dictionary.system.core}
              status={dictionary.system.status}
              mark={dictionary.system.mark}
              edition={dictionary.system.edition}
              nodes={dictionary.system.nodes}
            />

            <div className="launch__meta">
              <p>{dictionary.intro.availability}</p>
              <a href="#reveal" data-cursor="link">
                <span>{dictionary.intro.scroll}</span>
                <i aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="system-rail" aria-label={dictionary.system.aria}>
            {systemLayers.map((layer, index) => (
              <div className="system-rail__item" key={layer}>
                <span>{layer}</span>
                {index < systemLayers.length - 1 ? <i aria-hidden="true" /> : null}
              </div>
            ))}
          </div>
        </section>

        <section className="story" id="reveal" aria-labelledby="story-title">
          <div className="story__intro">
            <p className="eyebrow">{dictionary.story.eyebrow}</p>
            <h2 id="story-title">{dictionary.story.title}</h2>
            <p>{dictionary.story.lead}</p>
          </div>

          <div className="story-sequence">
            <div className="story-sequence__line" aria-hidden="true" />
            {dictionary.story.stages.map((stage, index) => (
              <article className="story-stage" key={stage.label}>
                <header>
                  <span>0{index + 1}</span>
                  <i aria-hidden="true" />
                  <p>{stage.label}</p>
                </header>
                <h3>{stage.title}</h3>
                <p>{stage.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="modes" id="configure" aria-labelledby="modes-title">
          <div className="modes__heading">
            <p className="eyebrow">{dictionary.story.configurationEyebrow}</p>
            <h2 id="modes-title">{dictionary.story.configurationTitle}</h2>
          </div>
          <div className="mode-grid">
            {configIds.map((id, index) => (
              <article className={`mode-card mode-card--${id}`} key={id}>
                <div className="mode-card__topline">
                  <span>0{index + 1}</span>
                  <i aria-hidden="true" />
                </div>
                <h3>{dictionary.configurations[id].name}</h3>
                <p>{dictionary.configurations[id].description}</p>
                <div className="mode-card__glyph" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
              </article>
            ))}
          </div>
          <div className="future-anchor" id="specs" aria-hidden="true" />
          <div className="future-anchor" id="compare" aria-hidden="true" />
          <div className="future-anchor" id="contact" aria-hidden="true" />
        </section>
      </main>
    </>
  );
}
