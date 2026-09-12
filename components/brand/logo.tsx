import { cn } from '@/lib/utils'

type Tone = 'brand' | 'mono' | 'inverse'

/**
 * The mark: rising "infra" bricks that stack forward, capped by an Ink
 * block. Reads as infrastructure being built up toward the future.
 */
export function Mark({
  tone = 'brand',
  className,
}: {
  tone?: Tone
  className?: string
}) {
  // brick geometry on a 32-unit grid, baseline at y=30
  const bricks: { x: number; y: number; cap?: boolean }[] = [
    { x: 2, y: 22 },
    { x: 12, y: 22 },
    { x: 12, y: 12 },
    { x: 22, y: 22 },
    { x: 22, y: 12 },
    { x: 22, y: 2, cap: true },
  ]

  const baseFill =
    tone === 'mono' || tone === 'inverse' ? 'fill-current' : 'fill-primary'
  const capFill =
    tone === 'mono' || tone === 'inverse' ? 'fill-current' : 'fill-accent'

  return (
    <svg
      viewBox="0 0 32 32"
      className={cn('h-8 w-8', className)}
      role="img"
      aria-label="Hack Infra Futuro"
    >
      {bricks.map((b, i) => (
        <rect
          key={i}
          x={b.x}
          y={b.y}
          width={8}
          height={8}
          rx={1.25}
          className={cn(
            b.cap ? capFill : baseFill,
            b.cap && tone === 'mono' ? 'opacity-60' : undefined,
          )}
        />
      ))}
    </svg>
  )
}

/** The monogram used for compact contexts (favicons, badges, avatars). */
export function Monogram({
  className,
  tone = 'brand',
}: {
  className?: string
  tone?: 'brand' | 'solid'
}) {
  if (tone === 'solid') {
    return (
      <span
        className={cn(
          'inline-flex items-center justify-center font-mono font-bold tracking-tight',
          className,
        )}
      >
        HIF
      </span>
    )
  }
  return (
    <span
      className={cn(
        'inline-flex items-center justify-center font-mono font-bold tracking-tight',
        className,
      )}
    >
      <span className="text-foreground">H</span>
      <span className="text-primary">I</span>
      <span className="text-accent">F</span>
    </span>
  )
}

/** Wordmark set in JetBrains Mono, lowercase, with "infra" carrying the accent. */
export function Wordmark({
  className,
  block = false,
}: {
  className?: string
  block?: boolean
}) {
  return (
    <span
      className={cn(
        'font-mono font-bold lowercase tracking-tight leading-none',
        className,
      )}
    >
      <span>Hack </span>
      {block ? (
        <span className="bg-primary px-1 text-primary-foreground">Infra</span>
      ) : (
        <span className="text-primary">Infra</span>
      )}
      <span> Futuro</span>
    </span>
  )
}

/** Horizontal lockup: mark + stacked wordmark. Primary logo. */
export function LogoLockup({
  className,
  tone = 'brand',
}: {
  className?: string
  tone?: Tone
}) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <Mark tone={tone} className="h-10 w-10 shrink-0" />
      <span className="font-mono text-lg font-bold lowercase leading-[1.05] tracking-tight">
        <span className="block">Hack Infra</span>
        <span className="block text-muted-foreground">Futuro</span>
      </span>
    </div>
  )
}

/** Vertical lockup: mark over wordmark. For square/centered placements. */
export function LogoStacked({
  className,
  tone = 'brand',
}: {
  className?: string
  tone?: Tone
}) {
  return (
    <div className={cn('flex flex-col items-center gap-3 text-center', className)}>
      <Mark tone={tone} className="h-12 w-12" />
      <span className="font-mono text-sm font-bold lowercase leading-tight tracking-tight">
        <span className="block">Hack Infra</span>
        <span className="block text-muted-foreground">Futuro</span>
      </span>
    </div>
  )
}
