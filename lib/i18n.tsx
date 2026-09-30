"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type PropsWithChildren,
} from "react";

import type { Dictionary } from "@/data/en";
import { en } from "@/data/en";
import { fr } from "@/data/fr";

export type Locale = "en" | "fr";

type I18nContextValue = {
  locale: Locale;
  dictionary: Dictionary;
  setLocale: (locale: Locale) => void;
};

const STORAGE_KEY = "abdallah-dridi-locale";
const LOCALE_EVENT = "abdallah-dridi-locale-change";
const dictionaries: Record<Locale, Dictionary> = { en, fr };

const I18nContext = createContext<I18nContextValue | null>(null);

function getBrowserLocale(): Locale {
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved === "en" || saved === "fr") return saved;
  return window.navigator.language.toLowerCase().startsWith("fr") ? "fr" : "en";
}

function subscribeToLocale(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener(LOCALE_EVENT, onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(LOCALE_EVENT, onChange);
  };
}

function getServerLocale(): Locale {
  return "en";
}

export function I18nProvider({ children }: PropsWithChildren) {
  const locale = useSyncExternalStore<Locale>(
    subscribeToLocale,
    getBrowserLocale,
    getServerLocale,
  );

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((nextLocale: Locale) => {
    window.localStorage.setItem(STORAGE_KEY, nextLocale);
    window.dispatchEvent(new Event(LOCALE_EVENT));
  }, []);

  const value = useMemo(
    () => ({ locale, dictionary: dictionaries[locale], setLocale }),
    [locale, setLocale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error("useI18n must be used inside I18nProvider");
  }

  return context;
}
