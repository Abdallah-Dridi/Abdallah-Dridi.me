import { Reveal } from "@/components/reveal";
import { SectionShell } from "@/components/section-shell";
import { notes } from "@/lib/site-data";

export function NotesSection() {
  return (
    <SectionShell
      id="notes"
      index="04"
      kicker="Observation Log / Fragments"
      title="Notes"
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {notes.map((note, index) => (
          <Reveal
            key={note.index}
            variant="soft"
            delay={index * 0.06}
            className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6"
          >
            <p className="mono-label text-gold">{note.index}</p>
            <p
              data-cursor="text"
              className="mt-5 max-w-[32ch] font-serif text-[1.45rem] italic leading-[1.35] text-paper"
            >
              {note.text}
            </p>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
