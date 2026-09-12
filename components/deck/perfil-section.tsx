import { Section, Tag } from '@/components/brand/section'

const ideales = [
  'empresas de ia, devtools, cloud, apis e infraestructura.',
  'empresas y gremios con problemas que puedan resolverse con ia.',
  'fondos, universidades y organizaciones que busquen talento y nuevos emprendimientos.',
]

const buscamos = [
  {
    title: 'financiamiento',
    blurb:
      'efectivo para operación, alimentación y premios. ya hemos levantado 10k usd.',
  },
  {
    title: 'créditos',
    blurb:
      'para los ~500 participantes, o para los 3 equipos ganadores (de 2-4 personas cada uno).',
  },
  {
    title: 'sede',
    blurb:
      'espacio con mesas, conectividad de internet y enchufes abundantes, adecuado al aforo.',
  },
]

export function PerfilSection() {
  return (
    <Section
      id="perfil"
      index="06"
      title="sponsors ideales"
      description="a quién buscamos y qué necesitamos para hacer posible el evento."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        {/* sponsors ideales */}
        <div className="flex flex-col gap-4 rounded-md border border-border bg-card p-6">
          <Tag variant="primary">--perfil=ideal</Tag>
          <ul className="flex flex-col gap-3">
            {ideales.map((item, i) => (
              <li
                key={item}
                className="flex gap-4 text-base leading-relaxed text-foreground/80"
              >
                <span className="font-mono text-xs text-primary">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-pretty">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* qué buscamos */}
        <div className="flex flex-col gap-4 rounded-md border border-border bg-card p-6">
          <Tag variant="primary">--buscamos</Tag>
          <ul className="flex flex-col gap-4">
            {buscamos.map((b) => (
              <li key={b.title} className="flex flex-col gap-1">
                <span className="font-mono text-sm font-bold lowercase tracking-tight text-card-foreground">
                  {b.title}
                </span>
                <span className="text-pretty text-base leading-relaxed text-muted-foreground">
                  {b.blurb}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
