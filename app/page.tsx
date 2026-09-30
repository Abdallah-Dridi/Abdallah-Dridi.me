"use client";

import { CloudFallback } from "@/components/cloud-fallback";
import { PortfolioDossier } from "@/components/portfolio-dossier";
import { useI18n } from "@/lib/i18n";

export default function HomePage() {
  const { dictionary } = useI18n();

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

        <PortfolioDossier />
      </main>
    </>
  );
}
