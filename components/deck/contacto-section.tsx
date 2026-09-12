import Image from 'next/image'
import { Grain, Kbd, Caret } from '@/components/brand/hacker'
import { Tag } from '@/components/brand/section'

export function ContactoSection() {
  return (
    <section id="contacto" className="scroll-mt-20 border-t border-border">
      {/* full-bleed cordillera CTA banner */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="/brand/cordillera-banner.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <Grain opacity={0.12} />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to right, color-mix(in oklab, #17161d 88%, transparent), color-mix(in oklab, #17161d 55%, transparent))',
            }}
          />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="flex items-center gap-2 font-mono text-xs lowercase tracking-wider text-[#f4f3ef]/70">
            <span>hif contacto --sponsors</span>
            <Caret />
          </div>
          <h2 className="mt-6 max-w-3xl font-mono text-3xl font-bold lowercase leading-[1.1] tracking-tight text-balance text-[#f4f3ef] md:text-5xl">
            hablemos de cómo tu marca puede{' '}
            <span className="bg-primary px-2 text-primary-foreground">construir</span> con
            nosotros
          </h2>
          <p className="mt-5 max-w-xl text-pretty leading-relaxed text-[#f4f3ef]/80">
            si lideras una empresa, fondo o comunidad y quieres sumarte como sponsor o
            partner, conversemos. las decisiones finales del evento se definen junto a
            quienes se suman temprano.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="mailto:benjamin@velum-labs.com"
              className="inline-flex items-center gap-2 rounded-sm bg-primary px-4 py-2.5 font-mono text-sm font-bold lowercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90"
            >
              benjamin@velum-labs.com
              <Kbd className="border-primary-foreground/40 bg-primary-foreground/10 text-primary-foreground">
                ↵
              </Kbd>
            </a>
            <a
              href="https://www.linkedin.com/in/benjamzc/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-sm border border-[#f4f3ef]/30 px-4 py-2.5 font-mono text-sm lowercase tracking-wider text-[#f4f3ef] transition-colors hover:bg-[#f4f3ef]/10"
            >
              linkedin →
            </a>
          </div>
        </div>
      </div>

      {/* sponsors + comunidades */}
      <div className="mx-auto grid max-w-6xl gap-4 px-6 py-16 md:grid-cols-2 md:py-20">
        <div className="flex flex-col gap-4 rounded-md border border-border bg-card p-6">
          <Tag variant="primary">sponsors</Tag>
          <h3 className="font-mono text-xl font-bold lowercase tracking-tight text-card-foreground">
            por anunciar
          </h3>
          <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
            el muro de sponsors se irá completando a medida que se sumen los partners.
            este es el momento de reservar tu lugar en la primera edición.
          </p>
          <div className="mt-auto flex flex-wrap gap-x-4 gap-y-2 pt-2 font-mono text-xs lowercase tracking-wider text-muted-foreground/70">
            <span>[ tu marca ]</span>
            <span>[ tu marca ]</span>
            <span>[ tu marca ]</span>
          </div>
        </div>

        <div className="flex flex-col gap-4 rounded-md border border-border bg-card p-6">
          <Tag variant="primary">comunidades</Tag>
          <h3 className="font-mono text-xl font-bold lowercase tracking-tight text-card-foreground">
            ¿lideras una comunidad?
          </h3>
          <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
            conecta a tus builders con el encuentro. buscamos clubes universitarios,
            comunidades técnicas y redes de mujeres en tecnología para formar equipos más
            diversos.
          </p>
          <a
            href="mailto:benjamin@velum-labs.com"
            className="mt-auto inline-flex items-center gap-2 font-mono text-xs lowercase tracking-wider text-primary transition-opacity hover:opacity-80"
          >
            escríbenos →
          </a>
        </div>
      </div>
    </section>
  )
}
