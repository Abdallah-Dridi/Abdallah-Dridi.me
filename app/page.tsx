"use client";

import { Climb, Foot, Summit, Tickets, Works } from "@/components/stages";
import { StoneRail } from "@/components/stone-rail";
import { useI18n } from "@/lib/i18n";

export default function HomePage() {
  const { dictionary } = useI18n();

  return (
    <>
      <a className="skip-link" href="#main-content">
        {dictionary.common.skip}
      </a>
      <StoneRail />
      <main id="main-content" tabIndex={-1}>
        <Foot />
        <Climb />
        <Works />
        <Tickets />
        <Summit />
      </main>
    </>
  );
}
