import { Nav } from '@/components/deck/nav'
import { Hero } from '@/components/deck/hero'
import { EventoSection } from '@/components/deck/evento-section'
import { OrganizadoresSection } from '@/components/deck/organizadores-section'
import { TracksSection } from '@/components/deck/tracks-section'
import { EvaluacionSection } from '@/components/deck/evaluacion-section'
import { SponsorSection } from '@/components/deck/sponsor-section'
import { PerfilSection } from '@/components/deck/perfil-section'
import { ContactoSection } from '@/components/deck/contacto-section'
import { Footer } from '@/components/deck/footer'
import { StatusBar } from '@/components/brand/hacker'

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <EventoSection />
        <OrganizadoresSection />
        <TracksSection />
        <EvaluacionSection />
        <SponsorSection />
        <PerfilSection />
        <ContactoSection />
      </main>
      <Footer />
      <StatusBar />
    </div>
  )
}
