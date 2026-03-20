import { ContactSection } from "@/components/contact-section";
import { HeroSection } from "@/components/hero-section";
import { IdentitySection } from "@/components/identity-section";
import { ManifestoSection } from "@/components/manifesto-section";
import { NotesSection } from "@/components/notes-section";
import { SystemsSection } from "@/components/systems-section";

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <HeroSection />
      <ManifestoSection />
      <IdentitySection />
      <SystemsSection />
      <NotesSection />
      <ContactSection />
    </main>
  );
}
