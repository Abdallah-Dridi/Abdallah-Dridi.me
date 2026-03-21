import { navItems } from "@/lib/site-data";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-6 px-5 py-4 sm:px-8 lg:px-12">
        <div className="nav-shell ml-auto flex w-full max-w-[980px] items-center justify-between gap-6">
          <a
            href="#top"
            data-cursor="link"
            className="group inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.32em] text-paper/72 transition-colors hover:text-paper"
          >
            <span className="h-px w-8 bg-gold transition-all duration-500 group-hover:w-12" />
            Abdallah Dridi
          </a>
          <nav className="hidden items-center gap-5 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                data-cursor="link"
                className="editorial-link text-[10px] uppercase tracking-[0.3em] text-paper/70"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
