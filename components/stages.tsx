"use client";

import { CutHeading } from "@/components/cut-heading";
import { Etching, EtchingDefs } from "@/components/etchings";
import { LangToggle } from "@/components/lang-toggle";
import { content, projectIds } from "@/data/content";
import { useI18n } from "@/lib/i18n";
import { scrollToTarget } from "@/lib/scroll";

function jumpTo(id: string) {
  return (event: React.MouseEvent<HTMLAnchorElement>) => {
    const element = document.getElementById(id);
    if (!element) return;
    event.preventDefault();
    scrollToTarget(element);
  };
}

const HILL =
  "M0 384 C 160 380, 300 352, 440 312 S 700 236, 860 190 S 1120 96, 1300 52 L 1440 36";

export function Foot() {
  const { dictionary } = useI18n();
  const t = dictionary.foot;

  return (
    <section id="foot" className="stage stage--foot" aria-labelledby="foot-title">
      <div className="foot__bar">
        <span className="foot__name">{content.identity.name}</span>
        <LangToggle />
      </div>

      <a className="tape" href="#summit" onClick={jumpTo("summit")}>
        {t.tape}
      </a>

      <div className="foot__copy">
        <p className="foot__kicker">{t.kicker}</p>
        <h1 id="foot-title" className="cut foot__title" data-cut="70">
          {t.title}
        </h1>
        <p className="foot__lead">{t.lead}</p>
      </div>

      <div className="foot__hill" aria-hidden="true">
        <svg viewBox="0 0 1440 400" preserveAspectRatio="none">
          <path className="foot__slope" d={`${HILL} L1440 400 L0 400Z`} />
          <path className="foot__ridge" d={HILL} />
        </svg>
        <span className="foot__stone" />
      </div>
    </section>
  );
}

export function Climb() {
  const { dictionary } = useI18n();
  const t = dictionary.climb;

  return (
    <section id="climb" className="stage stage--climb" aria-labelledby="climb-title">
      <header className="stage__head">
        <CutHeading id="climb-title" from="100" to="50" className="stage__title">
          {t.title}
        </CutHeading>
        <p className="stage__lead">{t.lead}</p>
      </header>

      <ol className="climb__list">
        {t.stations.map((station, index) => (
          <li
            className="station"
            key={station.when + station.title}
            style={{ "--step": index } as React.CSSProperties}
          >
            <h3 className="station__when cut" data-cut="50">
              {station.when}
            </h3>
            <div className="station__text">
              <p className="station__title">{station.title}</p>
              <p className="station__body">{station.body}</p>
              <p className="station__lesson">{station.lesson}</p>
            </div>
          </li>
        ))}
      </ol>

    </section>
  );
}

export function Works() {
  const { dictionary } = useI18n();
  const t = dictionary.works;

  return (
    <section id="works" className="stage stage--works" aria-labelledby="works-title">
      <EtchingDefs />
      <header className="stage__head">
        <CutHeading id="works-title" from="35" to="20" className="stage__title">
          {t.title}
        </CutHeading>
        <p className="stage__lead">{t.lead}</p>
      </header>

      {projectIds.map((id, index) => {
        const item = t.items[id];
        return (
          <article
            key={id}
            className={`wall ${index % 2 ? "wall--right" : "wall--left"}`}
            aria-labelledby={`work-${id}`}
          >
            <figure className="wall__work">
              <Etching project={id} labels={t.etch} />
            </figure>
            <div className="label">
              <h3 id={`work-${id}`} className="label__title">
                {item.title}
              </h3>
              <p className="label__category">{item.category}</p>
              <p className="label__medium">
                {dictionary.common.medium}: {content.projects[id].medium.join(", ")}
              </p>
              <p className="label__body">{item.body}</p>
            </div>
          </article>
        );
      })}

    </section>
  );
}

export function Tickets() {
  const { dictionary } = useI18n();
  const t = dictionary.tickets;

  return (
    <section id="tickets" className="stage stage--tickets" aria-labelledby="tickets-title">
      <div className="streetlight" aria-hidden="true" />
      <header className="stage__head">
        <CutHeading id="tickets-title" from="50" to="35" className="stage__title">
          {t.title}
        </CutHeading>
        <p className="stage__lead">{t.lead}</p>
      </header>

      <ul className="tickets">
        {t.items.map((ticket) => (
          <li className="ticket" key={ticket.title}>
            <div className="ticket__main">
              <h3 className="ticket__title">{ticket.title}</h3>
              <p className="ticket__body">{ticket.body}</p>
            </div>
            <p className="ticket__stub">{ticket.serial}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Summit() {
  const { dictionary, locale } = useI18n();
  const t = dictionary.summit;

  return (
    <section id="summit" className="stage stage--summit" aria-labelledby="summit-title">
      <div className="summit__grid">
        <div className="summit__copy">
          <CutHeading id="summit-title" from="10" to="clean" className="summit__title">
            {t.title}
          </CutHeading>
          <p className="summit__body">{t.body}</p>

          <ul className="summit__links">
            <li>
              <a href={`mailto:${content.identity.email}`}>{t.email}</a>
              <span className="summit__detail">{content.identity.email}</span>
            </li>
            <li>
              <a href={content.cv[locale]} download>
                {t.cv}
              </a>
              <span className="summit__detail">PDF</span>
            </li>
            <li>
              <a href={content.identity.linkedin} rel="noreferrer" target="_blank">
                {t.linkedin}
              </a>
            </li>
            <li>
              <a href={content.identity.github} rel="noreferrer" target="_blank">
                {t.github}
              </a>
            </li>
          </ul>

          <div className="summit__languages">
            <h3 className="summit__subhead">{t.languagesTitle}</h3>
            <dl>
              {t.languages.map((language) => (
                <div key={language.name}>
                  <dt>{language.name}</dt>
                  <dd>{language.level}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <figure className="portrait">
          {/* Static export: plain img keeps the build free of the image optimizer. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/abdallah-portrait.webp"
            alt={t.portraitAlt}
            width={1400}
            height={1288}
            loading="lazy"
            decoding="async"
          />
          <figcaption>{t.portraitCaption}</figcaption>
        </figure>
      </div>

      <footer className="summit__foot">
        <button
          type="button"
          className="roll-back"
          aria-describedby="roll-back-hint"
          onClick={() => {
            scrollToTarget(0, { duration: 2.2 });
            document.getElementById("main-content")?.focus({ preventScroll: true });
          }}
        >
          <span className="roll-back__stone" aria-hidden="true" />
          {t.rollBack}
        </button>
        <span id="roll-back-hint" className="sr-only">
          {t.rollBackHint}
        </span>
        <p className="colophon">{t.colophon}</p>
      </footer>
    </section>
  );
}
