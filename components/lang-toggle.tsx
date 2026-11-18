"use client";

import { useI18n, type Locale } from "@/lib/i18n";

const locales: readonly { id: Locale; label: string }[] = [
  { id: "en", label: "English" },
  { id: "fr", label: "Français" },
];

export function LangToggle() {
  const { dictionary, locale, setLocale } = useI18n();

  return (
    <div className="lang-toggle" role="group" aria-label={dictionary.common.languageAria}>
      {locales.map((option) => (
        <button
          key={option.id}
          type="button"
          lang={option.id}
          className="lang-toggle__button"
          aria-pressed={locale === option.id}
          onClick={() => setLocale(option.id)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
