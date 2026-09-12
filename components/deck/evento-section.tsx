import { Section, Tag } from '@/components/brand/section'
import { Caret } from '@/components/brand/hacker'

const stats = [
  { value: '7-8 nov', label: '2026' },
  { value: '24h', label: 'duración' },
  { value: '~500', label: 'participantes' },
  { value: '2-4', label: 'por equipo' },
]

const facts = [
  'encuentro presencial en santiago, con convocatoria a chile y latinoamérica.',
  'equipos multidisciplinarios: desarrollo de software, diseño, negocios y conocimiento de industria.',
  'público objetivo entre 20 y 35 años: ingenieros de software, estudiantes de informática, fundadores y expertos con iniciativa.',
  'prototipos y demos con potencial de convertirse en productos y empresas.',
  'selección basada en postulación para filtrar a los candidatos con mayor potencial.',
]

export function EventoSection() {
  return (
    <Section
      id="evento"
      index="01"
      title="el evento"
      description="un fin de semana presencial para construir agentes reales, con equipos seleccionados y un jurado técnico."
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-md border border-border bg-card p-5"
          >
            <div className="font-mono text-3xl font-bold lowercase tracking-tight text-foreground">
              {s.value}
            </div>
            <div className="mt-1 font-mono text-xs lowercase tracking-wider text-muted-foreground">
              {s.label}
            </div>
          </div>
        ))}
      </div>

      <ul className="mt-10 grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-2">
        {facts.map((f, i) => (
          <li
            key={f}
            className="flex gap-4 bg-card p-5"
          >
            <span className="font-mono text-xs text-primary">
              {String(i + 1).padStart(2, '0')}
            </span>
            <p className="text-pretty text-base leading-relaxed text-foreground/80">
              {f}
            </p>
          </li>
        ))}
        <li className="flex items-center gap-2 bg-card p-5 font-mono text-xs lowercase tracking-wider text-muted-foreground">
          agenda completa por anunciar
          <Caret />
        </li>
      </ul>

      <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
        <Tag variant="primary">--sede=santiago</Tag>
        <Tag variant="primary">--modalidad=presencial</Tag>
        <Tag variant="primary">--acceso=por-postulación</Tag>
      </div>
    </Section>
  )
}
