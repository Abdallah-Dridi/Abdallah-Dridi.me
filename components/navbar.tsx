"use client";

import { useEffect, useState } from "react";

import { LangToggle } from "@/components/lang-toggle";
import { useI18n } from "@/lib/i18n";

export function Navbar() {
  const { dictionary } = useI18n();
  const [compact, setCompact] = useState(false);
  const [open, setOpen] = useState(false);
  const navItems = [
    { label: dictionary.nav.reveal, href: "#reveal" },
    { label: dictionary.nav.configure, href: "#configure" },
    { label: dictionary.nav.specs, href: "#specs" },
    { label: dictionary.nav.compare, href: "#compare" },
    { label: dictionary.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const update = () => setCompact(window.scrollY > 32);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header className={`site-nav ${compact ? "site-nav--compact" : ""}`}>
      <div className="site-nav__inner">
        <div className="site-nav__bar">
          <a
            href="#top"
            data-cursor="link"
            className="site-nav__brand"
            onClick={() => setOpen(false)}
          >
            <span aria-hidden="true" className="site-nav__brand-rule" />
            {dictionary.nav.home}
          </a>
          <nav className="site-nav__links" aria-label={dictionary.nav.aria}>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                data-cursor="link"
                className="editorial-link"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="site-nav__actions">
            <LangToggle />
            <button
              className="site-nav__menu"
              type="button"
              aria-label={dictionary.nav.menuAria}
              aria-expanded={open}
              onClick={() => setOpen((current) => !current)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
        <nav
          className={`site-nav__mobile ${open ? "site-nav__mobile--open" : ""}`}
          aria-label={dictionary.nav.aria}
          aria-hidden={!open}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
