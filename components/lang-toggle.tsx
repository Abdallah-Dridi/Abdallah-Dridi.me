"use client";

import { useI18n, type Locale } from "@/lib/i18n";

const locales: readonly Locale[] = ["en", "fr"];

export function LangToggle() {
  const { dictionary, locale, setLocale } = useI18n();

  return (
    <div
      className="lang-toggle"
      role="group"
      aria-label={dictionary.nav.languageAria}
    >
      {locales.map((option, index) => (
        <span className="contents" key={option}>
          {index > 0 ? <span aria-hidden="true">/</span> : null}
          <button
            type="button"
            className="lang-toggle__button"
            aria-pressed={locale === option}
            onClick={() => setLocale(option)}
          >
            {option.toUpperCase()}
          </button>
        </span>
      ))}
    </div>
  );
}
