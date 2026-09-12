import { Section } from '@/components/brand/section'
import { Caret } from '@/components/brand/hacker'

const criteria = [
  {
    flag: '--ambición',
    blurb: 'relevancia y magnitud del desafío abordado.',
  },
  {
    flag: '--ejecución',
    blurb: 'qué tan sólido y funcional es el prototipo.',
  },
  {
    flag: '--técnica',
    blurb: 'uso creativo y no trivial de ia, agentes e infraestructura.',
  },
  {
    flag: '--impacto',
    blurb: 'valor potencial para usuarios, organizaciones o sistemas.',
  },
  {
    flag: '--continuidad',
    blurb:
      'posibilidad de convertirse en producto, infraestructura o proyecto más allá de la hackathon.',
  },
]

export function EvaluacionSection() {
  return (
    <Section
      id="evaluacion"
      index="04"
      title="evaluación"
      description="cinco criterios. la ponderación se adapta a cada track."
    >
      <ul className="grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-2">
        {criteria.map((c) => (
          <li key={c.flag} className="flex flex-col gap-2 bg-card p-6">
            <h3 className="font-mono text-base font-bold lowercase tracking-wider text-primary">
              {c.flag}
            </h3>
            <p className="text-pretty text-base leading-relaxed text-muted-foreground">
              {c.blurb}
            </p>
          </li>
        ))}
        <li className="flex items-center gap-2 bg-card p-6 font-mono text-xs lowercase tracking-wider text-muted-foreground">
          ponderación por track
          <Caret />
        </li>
      </ul>
    </Section>
  )
}
