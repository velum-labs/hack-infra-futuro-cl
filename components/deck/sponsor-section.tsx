import { Section, Tag } from '@/components/brand/section'
import { Caret } from '@/components/brand/hacker'

const benefits = [
  {
    flag: '--talento',
    blurb: 'conexión directa con desarrolladores previamente seleccionados.',
  },
  {
    flag: '--producto',
    blurb: 'tus herramientas puestas a prueba por equipos reales.',
  },
  {
    flag: '--marca',
    blurb: 'tu nombre junto a los equipos que realmente construyen.',
  },
  {
    flag: '--pipeline',
    blurb: 'conócelos antes de que todos quieran contratarlos.',
  },
  {
    flag: '--casos',
    blurb: 'proyectos reales construidos con tu tecnología.',
  },
]

const tiers = [
  {
    name: 'bronce',
    blurb: 'presencia de marca y conexión con equipos y talento interesado.',
  },
  {
    name: 'plata',
    blurb:
      'todo lo anterior, más auspiciar un desafío o premio y una charla o workshop durante el evento.',
    featured: true,
  },
  {
    name: 'oro',
    blurb:
      'máxima visibilidad, protagonismo en desafíos y premios, y primer acceso al talento seleccionado.',
  },
]

const included = [
  'presencia de marca en el sitio y materiales del evento.',
  'posibilidad de auspiciar un desafío o premio.',
  'realizar una charla o workshop durante el evento.',
  'conexión con equipos y talento interesado.',
]

export function SponsorSection() {
  return (
    <Section
      id="sponsors"
      index="05"
      title="por qué ser sponsor"
      description="distintos niveles de sponsorship, según el nivel de participación que busques."
    >
      {/* the statement: ink panel, single violet number */}
      <div className="relative overflow-hidden rounded-md bg-accent p-8 md:p-10">
        <div
          className="absolute inset-0 grid-blueprint opacity-[0.07]"
          aria-hidden="true"
        />
        <div className="relative">
          <Tag
            variant="default"
            className="text-accent-foreground/60"
          >
            statement
          </Tag>
          <p className="mt-4 max-w-3xl font-mono text-2xl font-bold lowercase leading-[1.15] tracking-tight text-balance text-accent-foreground md:text-4xl">
            <span className="text-primary">150 ingenieros</span> construyendo sobre tu
            tecnología durante 24 horas seguidas.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs lowercase tracking-wider text-accent-foreground/60">
            <span>equipos seleccionados</span>
            <span className="text-primary" aria-hidden="true">·</span>
            <span>jurado técnico</span>
            <span className="text-primary" aria-hidden="true">·</span>
            <span>demos y prototipos reales</span>
          </div>
        </div>
      </div>

      {/* benefits */}
      <div className="mt-10 grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
        {benefits.map((b) => (
          <div key={b.flag} className="flex flex-col gap-2 bg-card p-6">
            <h3 className="font-mono text-base font-bold lowercase tracking-wider text-primary">
              {b.flag}
            </h3>
            <p className="text-pretty text-base leading-relaxed text-muted-foreground">
              {b.blurb}
            </p>
          </div>
        ))}
        <div className="flex items-center gap-2 bg-card p-6 font-mono text-xs lowercase tracking-wider text-muted-foreground">
          más beneficios por definir
          <Caret />
        </div>
      </div>

      {/* tiers */}
      <div className="mt-14">
        <div className="mb-6 flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="font-mono text-xl font-bold lowercase tracking-tight text-foreground">
            niveles
          </h3>
          <p className="font-mono text-xs lowercase tracking-wider text-muted-foreground">
            beneficios crecientes de visibilidad, charlas, desafíos y acceso.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {tiers.map((t) => (
            <article
              key={t.name}
              className={
                t.featured
                  ? 'flex flex-col gap-3 rounded-md border border-primary bg-card p-6'
                  : 'flex flex-col gap-3 rounded-md border border-border bg-card p-6'
              }
            >
              <div className="flex items-center justify-between">
                <h4 className="font-mono text-lg font-bold lowercase tracking-tight text-card-foreground">
                  {t.name}
                </h4>
                {t.featured ? <Tag variant="primary">recomendado</Tag> : null}
              </div>
              <p className="text-pretty text-base leading-relaxed text-muted-foreground">
                {t.blurb}
              </p>
            </article>
          ))}
        </div>
      </div>

      {/* included checklist */}
      <div className="mt-8 rounded-md border border-border bg-card p-6">
        <Tag variant="primary">incluye</Tag>
        <ul className="mt-4 grid gap-3 md:grid-cols-2">
          {included.map((item) => (
            <li
              key={item}
              className="flex gap-3 text-base leading-relaxed text-foreground/80"
            >
              <span className="mt-0.5 font-mono text-xs text-primary" aria-hidden="true">
                +
              </span>
              <span className="text-pretty">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
