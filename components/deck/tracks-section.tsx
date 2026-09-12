import { Section, Tag } from '@/components/brand/section'

const tracks = [
  {
    id: '01',
    name: 'agent-ready government',
    blurb:
      'convertir datos, procesos y sistemas públicos legacy en infraestructura que los agentes puedan consultar, entender y operar.',
    examples:
      'agentes para sii, aduanas, permisos, beneficios públicos y acceso a datos estatales.',
  },
  {
    id: '02',
    name: 'agent-ready business',
    blurb:
      'llevar agentes y automatización a empresas reales, desde pymes hasta banca, retail, logística y manufactura, conectándolos con sus datos, herramientas y procesos existentes.',
    examples:
      'automatización para pymes, banca, retail, logística, manufactura y operaciones internas.',
  },
  {
    id: '03',
    name: 'agent infrastructure',
    blurb:
      'construir las herramientas, conectores e infraestructura necesarias para crear, desplegar, evaluar y operar agentes en el mundo real.',
    examples:
      'agent wallets, marketplaces de tools, shared memory, agent-to-agent, memoria persistente, identidad y permisos, pagos entre agentes, computer use y simuladores.',
  },
]

export function TracksSection() {
  return (
    <Section
      id="tracks"
      index="03"
      title="tracks"
      description="tres áreas propuestas; los desafíos específicos se definirán junto a los partners."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {tracks.map((t) => (
          <article
            key={t.id}
            className="flex flex-col gap-4 rounded-md border border-border bg-card p-6"
          >
            <div className="flex items-center gap-3 font-mono text-xs lowercase tracking-widest text-muted-foreground">
              <span className="text-primary">{t.id}</span>
              <span className="h-px w-8 bg-border" aria-hidden="true" />
              <span>track</span>
            </div>
            <h3 className="font-mono text-lg font-bold lowercase tracking-tight text-card-foreground">
              {t.name}
            </h3>
            <p className="text-pretty text-base leading-relaxed text-muted-foreground">
              {t.blurb}
            </p>
            <div className="mt-auto border-t border-border pt-4">
              <div className="mb-2">
                <Tag>por ejemplo</Tag>
              </div>
              <p className="font-mono text-xs lowercase leading-relaxed tracking-tight text-foreground/70">
                {t.examples}
              </p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
