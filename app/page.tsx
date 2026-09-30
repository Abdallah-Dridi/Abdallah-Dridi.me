"use client";

import { CloudFallback } from "@/components/cloud-fallback";
import { altitudeLayers } from "@/data/layers";
import { useI18n } from "@/lib/i18n";

export default function HomePage() {
  const { dictionary } = useI18n();
  const previewLayers = altitudeLayers.filter(({ id }) => id !== "ground");

  return (
    <>
      <a className="skip-link" href="#main-content">
        {dictionary.common.skip}
      </a>
      <main id="main-content">
        <section
          className="altitude-layer altitude-layer--ground takeoff"
          id="takeoff"
          aria-labelledby="takeoff-title"
        >
          <CloudFallback layer="ground" />
          <div className="takeoff__content">
            <p className="hud-label">{dictionary.hero.altitude}</p>
            <h1 id="takeoff-title">{dictionary.hero.title}</h1>
            <p className="takeoff__subtitle">{dictionary.hero.subtitle}</p>
            <div className="takeoff__hud">
              <span>{dictionary.hero.availability}</span>
              <span className="secure-state">
                <i aria-hidden="true" />
                {dictionary.hero.fallbackStatus}
              </span>
            </div>
          </div>
          <a className="climb-cue" href="#flight-plan">
            <span>{dictionary.hero.cue}</span>
            <i aria-hidden="true" />
          </a>
        </section>

        <section className="flight-plan" id="flight-plan" aria-labelledby="flight-plan-title">
          <div className="flight-plan__intro">
            <p className="hud-label">{dictionary.foundation.eyebrow}</p>
            <h2 id="flight-plan-title">{dictionary.foundation.title}</h2>
            <p>{dictionary.foundation.lead}</p>
          </div>
          <p className="flight-plan__mapping hud-label">
            {dictionary.foundation.mappingLabel}
          </p>
        </section>

        {previewLayers.map((layer, index) => {
          const copy = dictionary.layers[layer.id];

          return (
            <section
              className={`altitude-layer altitude-layer--${layer.id}`}
              id={layer.anchor}
              aria-labelledby={`${layer.anchor}-title`}
              key={layer.id}
            >
              <CloudFallback layer={layer.id} />
              <div className="layer-preview">
                <div className="layer-preview__telemetry">
                  <span>{copy.altitude}</span>
                  <span>0{index + 1}</span>
                  <span>{dictionary.common.illustration}</span>
                </div>
                <article className="instrument-panel">
                  <span className="instrument-panel__tick instrument-panel__tick--tl" />
                  <span className="instrument-panel__tick instrument-panel__tick--tr" />
                  <span className="instrument-panel__tick instrument-panel__tick--bl" />
                  <span className="instrument-panel__tick instrument-panel__tick--br" />
                  <p className="hud-label">{copy.label}</p>
                  <h2 id={`${layer.anchor}-title`}>{copy.title}</h2>
                  <p>{copy.body}</p>
                </article>
                <div className="layer-preview__altitude" aria-hidden="true">
                  <span />
                  <i />
                  <span />
                </div>
              </div>
            </section>
          );
        })}
      </main>
    </>
  );
}
