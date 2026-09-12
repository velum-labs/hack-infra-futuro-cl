import Image from 'next/image'
import { Mark } from '@/components/brand/logo'
import { Caret, Kbd, Grain } from '@/components/brand/hacker'

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[900px] flex-col overflow-hidden bg-background md:min-h-[980px]"
    >
      {/* Full-bleed dithered cordillera */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/brand/cordillera-hero.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-bottom"
          priority
        />
        <Grain opacity={0.1} />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, var(--background) 0%, var(--background) 32%, color-mix(in oklab, var(--background) 55%, transparent) 52%, transparent 66%)',
          }}
        />
      </div>

      <div className="absolute inset-0 grid-blueprint opacity-20" aria-hidden="true" />

      {/* zone 1: paper sky, dark text */}
      <div className="relative mx-auto w-full max-w-6xl flex-1 px-6 pt-5">
        <div className="flex items-center justify-between font-mono text-[11px] lowercase tracking-wider text-muted-foreground">
          <span>santiago de chile</span>
          <span>-33.45, -70.66</span>
        </div>

        <div className="mt-10 flex items-center gap-2 font-mono text-xs lowercase tracking-wider text-muted-foreground">
          <span>hif init hack-infra-futuro --deck=sponsors</span>
          <Caret />
        </div>

        <div className="mt-8 flex items-center gap-4">
          <Mark className="h-14 w-14 md:h-20 md:w-20" />
          <div className="font-mono text-xs lowercase leading-relaxed tracking-widest text-muted-foreground">
            <div>hackathon presencial de ia e infraestructura</div>
            <div className="text-foreground">hack infra futuro · edición 01</div>
          </div>
        </div>

        <h1 className="mt-8 max-w-4xl font-mono text-4xl font-bold lowercase leading-[1.05] tracking-tight text-balance md:text-6xl">
          el futuro se{' '}
          <span className="bg-primary px-2 text-primary-foreground">construye</span> desde
          latinoamérica
          <Caret className="h-[0.9em] w-[0.5ch]" />
        </h1>

        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-foreground/80">
          un hackathon para crear agentes de ia, modernizar industrias y construir las
          herramientas que harán posible lo que viene. 24 horas, equipos seleccionados,
          convocatoria a chile y latinoamérica.
        </p>
      </div>

      {/* zone 2: over the cordillera, light text */}
      <div className="relative mt-auto">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              'linear-gradient(to top, color-mix(in oklab, #17161d 80%, transparent), transparent)',
          }}
        />
        <div className="relative mx-auto w-full max-w-6xl px-6 pb-8 pt-24">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-xs lowercase tracking-wider text-[#f4f3ef]/70">
            <span>
              fecha <span className="text-[#f4f3ef]">7-8 nov 2026</span>
            </span>
            <span>
              duración <span className="text-[#f4f3ef]">24h</span>
            </span>
            <span>
              meta <span className="text-[#f4f3ef]">~500 participantes</span>
            </span>
            <span>
              status <span className="text-[#b3a4ff]">buscando sponsors</span>
            </span>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4 font-mono text-xs lowercase tracking-wider text-[#f4f3ef]/70">
            <span className="rounded-sm border border-[#f4f3ef]/25 px-3 py-2">
              gobierno <span className="text-[#b3a4ff]">·</span> empresa{' '}
              <span className="text-[#b3a4ff]">·</span> infraestructura de agentes
            </span>
            <span className="flex items-center gap-1.5">
              <Kbd className="border-[#f4f3ef]/30 bg-[#f4f3ef]/10 text-[#f4f3ef]">↵</Kbd> ver deck
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
