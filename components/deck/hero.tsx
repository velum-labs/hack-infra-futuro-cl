import Image from 'next/image'
import { Caret, Grain } from '@/components/brand/hacker'

const meta = [
  { label: 'fecha', value: '7-8 nov 2026', accent: false },
  { label: 'duración', value: '24 horas', accent: false },
  { label: 'participantes', value: '~500', accent: false },
  { label: 'status', value: 'buscando sponsors', accent: true },
]

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

        <h1 className="mt-10 max-w-4xl font-mono text-4xl font-bold lowercase leading-[1.05] tracking-tight text-balance md:text-6xl">
          el futuro se{' '}
          <span className="bg-primary px-2 text-primary-foreground">construye</span> desde
          latinoamérica
          <Caret className="h-[0.9em] w-[0.5ch]" />
        </h1>

        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-foreground/80 md:text-xl">
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
              'linear-gradient(to top, color-mix(in oklab, #17161d 94%, transparent) 0%, color-mix(in oklab, #17161d 72%, transparent) 55%, transparent 100%)',
          }}
        />
        <div className="relative mx-auto w-full max-w-6xl px-6 pb-10 pt-28">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-md border border-[#f4f3ef]/25 bg-[#f4f3ef]/25 md:grid-cols-4">
            {meta.map((m) => (
              <div
                key={m.label}
                className="flex flex-col gap-1.5 bg-[#17161d]/85 px-5 py-4 backdrop-blur-sm"
              >
                <span className="font-mono text-[11px] lowercase tracking-widest text-[#b3a4ff]">
                  {m.label}
                </span>
                <span
                  className={
                    m.accent
                      ? 'font-mono text-lg font-bold lowercase leading-tight tracking-tight text-[#b3a4ff]'
                      : 'font-mono text-2xl font-bold lowercase leading-tight tracking-tight text-[#f4f3ef] md:text-3xl'
                  }
                >
                  {m.value}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-4 font-mono text-xs lowercase tracking-wider text-[#f4f3ef]/80">
            <span className="rounded-sm border border-[#f4f3ef]/30 px-3 py-2">
              gobierno <span className="text-[#b3a4ff]">·</span> empresa{' '}
              <span className="text-[#b3a4ff]">·</span> infraestructura de agentes
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
