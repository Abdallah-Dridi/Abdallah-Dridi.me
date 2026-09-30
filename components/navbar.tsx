"use client";

import { LangToggle } from "@/components/lang-toggle";
import { useI18n } from "@/lib/i18n";

export function Navbar() {
  const { dictionary } = useI18n();

  return (
    <header className="flight-header">
      <div className="flight-header__inner">
        <a className="flight-header__brand" href="#takeoff">
          <span aria-hidden="true" />
          {dictionary.nav.home}
        </a>
        <LangToggle />
      </div>
    </header>
  );
}
