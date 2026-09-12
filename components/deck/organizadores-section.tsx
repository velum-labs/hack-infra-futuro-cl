import { Section, Tag } from '@/components/brand/section'

const orgs = [
  {
    name: 'velum labs',
    flag: '--rol=host',
    blurb:
      'startup basada en san francisco. fue la 18° startup chilena en pasar por y combinator en 2025.',
  },
  {
    name: 'indies',
    flag: '--rol=comunidad',
    blurb:
      'la comunidad abierta de emprendimiento en tecnología más grande de chile (~3000 miembros). organizó la hackathon de impacto social más grande de américa latina en 5 países, con apoyo de mistral ai, openrouter y otros (~50k usd en premios).',
  },
  {
    name: 'alianza emprende',
    flag: '--rol=red-universitaria',
    blurb:
      'la red interuniversitaria de innovación y emprendimiento más grande del país. representa a estudiantes founders de 12 universidades de chile; solo en eventos internos de 2026 reunió ~3000 inscritos y más de 1800 asistentes.',
  },
]

export function OrganizadoresSection() {
  return (
    <Section
      id="organizadores"
      index="02"
      title="quiénes somos"
      description="tres organizaciones con alcance real en el ecosistema técnico y universitario de chile y latinoamérica."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {orgs.map((o) => (
          <article
            key={o.name}
            className="flex flex-col gap-4 rounded-md border border-border bg-card p-6"
          >
            <Tag variant="primary">{o.flag}</Tag>
            <h3 className="font-mono text-xl font-bold lowercase tracking-tight text-card-foreground">
              {o.name}
            </h3>
            <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
              {o.blurb}
            </p>
          </article>
        ))}
      </div>
    </Section>
  )
}
