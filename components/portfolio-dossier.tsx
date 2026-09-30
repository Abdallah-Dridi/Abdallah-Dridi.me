"use client";

import Image from "next/image";
import { useState, type CSSProperties } from "react";

import {
  certificationIds,
  content,
  type ProjectId,
} from "@/data/content";
import { useI18n } from "@/lib/i18n";

const featuredProjectIds = [
  "orchestryx",
  "latrodectus",
  "wirecat",
  "kooretna",
] as const satisfies readonly ProjectId[];

type FeaturedProjectId = (typeof featuredProjectIds)[number];

function FlowArrow() {
  return <span className="flow-arrow" aria-hidden="true" />;
}

function OrchestryxDiagram() {
  const diagram = content.projects.orchestryx.tools;
  const { dictionary } = useI18n();
  const labels = dictionary.dossier.projects.diagrams.orchestryx;

  return (
    <div className="architecture architecture--orchestryx" aria-hidden="true">
      <div className="architecture__request">
        <span>{diagram[2]}</span>
      </div>
      <FlowArrow />
      <div className="architecture__async">
        <span>{diagram[4]}</span>
        <i />
        <span>{diagram[5]}</span>
      </div>
      <FlowArrow />
      <div className="architecture__provisioner">
        <span>{diagram[1]}</span>
        <span>{diagram[10]}</span>
      </div>
      <FlowArrow />
      <div className="architecture__isolation">
        <span className="architecture__isolation-layer" />
        <span className="architecture__isolation-layer" />
        <strong>{labels.environment}</strong>
        <small>{diagram[0]}</small>
      </div>
    </div>
  );
}

function LatrodectusDiagram({ labels }: { labels: Record<string, string> }) {
  const diagram = content.projects.latrodectus;

  return (
    <div className="architecture architecture--latrodectus" aria-hidden="true">
      <div className="specimen-file">
        <span>{labels.sampleType}</span>
        <strong>{labels.specimen}</strong>
        <small>{diagram.tools[0]}</small>
      </div>
      <div className="analysis-lanes">
        <div>
          <strong>{labels.static}</strong>
          <span>{diagram.tools[4]} · {diagram.tools[5]}</span>
          <span>{diagram.tools[6]} · {diagram.tools[7]}</span>
        </div>
        <div>
          <strong>{labels.sandbox}</strong>
          <span>{diagram.tools[1]}</span>
          <span>{diagram.tools[2]} · {diagram.tools[3]}</span>
        </div>
      </div>
      <div className="forensic-gauge">
        <span>{labels.entropy}</span>
        <i style={{ "--signal": "82%" } as CSSProperties} />
        <strong>~{diagram.findings.estimatedPackingPercent}%</strong>
        <small>{labels.packing}</small>
      </div>
      <div className="evidence-output">
        <span>IOCs</span>
        <span>{diagram.tools[9]}</span>
        <span>{diagram.tools[8]}</span>
        <span>{labels.detection}</span>
      </div>
    </div>
  );
}

function WireCatDiagram({ labels }: { labels: Record<string, string> }) {
  const diagram = content.projects.wirecat;

  return (
    <div className="architecture architecture--wirecat" aria-hidden="true">
      <div className="packet-scope">
        <span className="packet-scope__line packet-scope__line--one" />
        <span className="packet-scope__line packet-scope__line--two" />
        <span className="packet-scope__line packet-scope__line--three" />
        <strong>{labels.capture}</strong>
        <small>{diagram.tools[2]}</small>
      </div>
      <FlowArrow />
      <div className="protocol-stack">
        <span>{labels.ethernet}</span>
        <span>{labels.ip}</span>
        <span>{labels.tcp}</span>
      </div>
      <FlowArrow />
      <div className="packet-filter">
        <span>{labels.filter}</span>
        <i />
        <i />
        <i />
      </div>
      <FlowArrow />
      <div className="export-stack">
        <strong>{labels.export}</strong>
        {diagram.exportFormats.map((format) => <span key={format}>{format}</span>)}
      </div>
    </div>
  );
}

function KooretnaDiagram({ labels }: { labels: Record<string, string> }) {
  const diagram = content.projects.kooretna.tools;

  return (
    <div className="architecture architecture--kooretna" aria-hidden="true">
      <div className="rag-sources">
        <span>{labels.apis}</span>
        <span>{diagram[2]}</span>
      </div>
      <FlowArrow />
      <div className="rag-retrieval">
        <i />
        <strong>{diagram[3]}</strong>
        <span>{diagram[1]}</span>
      </div>
      <FlowArrow />
      <div className="rag-model">
        <span>{labels.modelType}</span>
        <strong>{diagram[0]}</strong>
      </div>
      <FlowArrow />
      <div className="rag-answer">
        <strong>{labels.answer}</strong>
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

function ProjectVisual({
  id,
  name,
  ariaLabel,
  illustrationLabel,
}: {
  id: FeaturedProjectId;
  name: string;
  ariaLabel: string;
  illustrationLabel: string;
}) {
  const { dictionary } = useI18n();

  return (
    <figure
      className={`project-visual project-visual--${id}`}
      aria-label={`${ariaLabel}: ${name}`}
    >
      <div className="project-visual__telemetry" aria-hidden="true">
        <span>{name}</span>
        <span>● {illustrationLabel}</span>
      </div>
      {id === "orchestryx" && <OrchestryxDiagram />}
      {id === "latrodectus" && (
        <LatrodectusDiagram labels={dictionary.dossier.projects.diagrams.latrodectus} />
      )}
      {id === "wirecat" && (
        <WireCatDiagram labels={dictionary.dossier.projects.diagrams.wirecat} />
      )}
      {id === "kooretna" && (
        <KooretnaDiagram labels={dictionary.dossier.projects.diagrams.kooretna} />
      )}
      <figcaption>{illustrationLabel}</figcaption>
    </figure>
  );
}

export function PortfolioDossier() {
  const { dictionary, locale } = useI18n();
  const [selectedProject, setSelectedProject] =
    useState<FeaturedProjectId>("orchestryx");
  const project = content.projects[selectedProject];
  const projectCopy = dictionary.projects[selectedProject];

  return (
    <section className="dossier" id="dossier" aria-labelledby="dossier-title">
      <header className="dossier__header">
        <p className="hud-label">{dictionary.dossier.eyebrow}</p>
        <h2 id="dossier-title">{dictionary.dossier.title}</h2>
      </header>

      <div className="identity-transponder">
        <div className="identity-transponder__portrait">
          <Image
            src="/images/abdallah-portrait.jpg"
            alt={dictionary.dossier.portraitAlt}
            width={2680}
            height={2466}
            sizes="(min-width: 768px) 42vw, 100vw"
          />
          <span className="identity-transponder__reticle" aria-hidden="true" />
        </div>
        <div className="identity-transponder__data">
          <p className="hud-label">{dictionary.dossier.identity.label}</p>
          <h3>{dictionary.dossier.identity.name}</h3>
          <p>{dictionary.dossier.identity.role}</p>
          <dl>
            <div>
              <dt>↗</dt>
              <dd>{dictionary.dossier.identity.route}</dd>
            </div>
            <div>
              <dt aria-hidden="true"><i /></dt>
              <dd>{dictionary.dossier.identity.status}</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="project-console" aria-labelledby="projects-title">
        <header className="project-console__header">
          <p className="hud-label">{dictionary.dossier.projects.eyebrow}</p>
          <h3 id="projects-title">{dictionary.dossier.projects.title}</h3>
        </header>
        <div
          className="project-selector"
          aria-label={dictionary.dossier.projects.selectorAria}
        >
          {featuredProjectIds.map((id, index) => (
            <button
              type="button"
              aria-pressed={selectedProject === id}
              aria-controls="project-viewport"
              onClick={() => setSelectedProject(id)}
              key={id}
            >
              <span>0{index + 1}</span>
              <strong>{dictionary.projects[id].name}</strong>
              <small>{dictionary.dossier.projects.categories[id]}</small>
            </button>
          ))}
        </div>
        <div className="project-viewport" id="project-viewport" aria-live="polite">
          <ProjectVisual
            id={selectedProject}
            name={projectCopy.name}
            ariaLabel={dictionary.dossier.projects.visualAria}
            illustrationLabel={dictionary.common.illustration}
          />
          <div className="project-viewport__copy">
            <p className="hud-label">
              {dictionary.dossier.projects.categories[selectedProject]}
            </p>
            <h4>{projectCopy.name}</h4>
            <p>{projectCopy.description}</p>
            <div className="project-stack" aria-label={dictionary.dossier.projects.stack}>
              <span className="hud-label">{dictionary.dossier.projects.stack}</span>
              <ol>
                {project.tools.map((tool, index) => (
                  <li key={tool}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {tool}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div className="field-log" aria-labelledby="experience-title">
        <header>
          <p className="hud-label">{dictionary.dossier.experience.eyebrow}</p>
          <h3 id="experience-title">{dictionary.dossier.experience.title}</h3>
        </header>
        <div className="field-log__entries">
          {(["soar", "scanner"] as const).map((id, index) => (
            <article key={id}>
              <div className="field-log__meta">
                <span>0{index + 1}</span>
                <span>{dictionary.experience[id].period}</span>
              </div>
              <p className="hud-label">
                {content.experience[id].organization} · {content.experience[id].location}
              </p>
              <h4>{dictionary.experience[id].role}</h4>
              <ul>
                {dictionary.experience[id].bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>

      <div className="academic-route" aria-labelledby="academics-title">
        <header>
          <p className="hud-label">{dictionary.dossier.academics.eyebrow}</p>
          <h3 id="academics-title">{dictionary.dossier.academics.title}</h3>
        </header>
        <div className="academic-route__line" aria-hidden="true" />
        <div className="academic-route__stops">
          {content.education.map((entry, index) => (
            <article key={entry.id}>
              <span className="academic-route__marker">0{index + 1}</span>
              <p className="hud-label">{dictionary.education[entry.id].location}</p>
              <h4>{entry.institution}</h4>
              <time>{entry.period}</time>
              <p>{dictionary.education[entry.id].description}</p>
            </article>
          ))}
        </div>
        <aside className="academic-route__activities">
          <h4>{dictionary.dossier.academics.activitiesTitle}</h4>
          <ul>
            {dictionary.dossier.academics.activities.map((activity) => (
              <li key={activity}>{activity}</li>
            ))}
          </ul>
        </aside>
      </div>

      <div className="credentials" aria-labelledby="credentials-title">
        <header>
          <p className="hud-label">{dictionary.dossier.certifications.eyebrow}</p>
          <h3 id="credentials-title">{dictionary.dossier.certifications.title}</h3>
        </header>
        <ul>
          {certificationIds.map((id) => {
            const certification = content.certifications[id];
            const earned = certification.status === "earned";
            return (
              <li data-status={certification.status} key={id}>
                <span>{certification.name}</span>
                <small>{earned ? dictionary.common.earned : dictionary.common.inProgress}</small>
              </li>
            );
          })}
        </ul>
      </div>

      <footer className="contact-dock" id="contact">
        <div>
          <p className="hud-label">{dictionary.dossier.contact.eyebrow}</p>
          <h3>{dictionary.dossier.contact.title}</h3>
          <p>{dictionary.dossier.contact.body}</p>
        </div>
        <nav aria-label={dictionary.dossier.contact.eyebrow}>
          <a href={`mailto:${content.identity.email}`}>{dictionary.dossier.contact.email}</a>
          <a href={content.identity.linkedin} target="_blank" rel="noreferrer">
            {dictionary.dossier.contact.linkedin}
          </a>
          <a href={content.identity.github} target="_blank" rel="noreferrer">
            {dictionary.dossier.contact.github}
          </a>
          <a href={content.cv[locale]} download>
            {dictionary.dossier.contact.cv}
          </a>
        </nav>
      </footer>
    </section>
  );
}
