import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

/** Blinking terminal caret. Purely decorative. */
export function Caret({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'caret-blink ml-0.5 inline-block h-[1em] w-[0.55ch] translate-y-[0.12em] bg-primary align-baseline',
        className,
      )}
    />
  )
}

/** A physical keycap for shortcut hints. */
export function Kbd({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <kbd
      className={cn(
        'inline-flex min-w-[1.4rem] items-center justify-center rounded-[3px] border border-border border-b-2 bg-card px-1.5 py-0.5 font-mono text-[11px] font-medium leading-none text-foreground',
        className,
      )}
    >
      {children}
    </kbd>
  )
}

/**
 * Reusable film-grain / dither overlay. Drop inside any `relative` container
 * (over an image or a flat color) to add printed-manual texture.
 */
export function Grain({
  className,
  opacity = 0.16,
  blend = 'multiply',
}: {
  className?: string
  opacity?: number
  blend?: 'multiply' | 'overlay' | 'soft-light'
}) {
  return (
    <div
      aria-hidden="true"
      className={cn('pointer-events-none absolute inset-0', className)}
      style={{
        opacity,
        mixBlendMode: blend,
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E\")",
      }}
    />
  )
}

/** Editor-style status line pinned to the bottom of the viewport. */
export function StatusBar() {
  const items: { label: string; value?: string }[] = [
    { label: 'utf-8' },
    { label: 'santiago -33.45,-70.66' },
    { label: 'status', value: 'draft' },
    { label: 'region', value: 'latam' },
  ]
  return (
    <div className="sticky bottom-0 z-40 border-t border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-4 overflow-x-auto whitespace-nowrap px-6 py-1.5 font-mono text-[11px] lowercase tracking-wider text-muted-foreground">
        <span className="text-foreground">main*</span>
        {items.map((it) => (
          <span key={it.label} className="flex items-center gap-1.5">
            <span className="text-border" aria-hidden="true">
              ·
            </span>
            <span>
              {it.label}
              {it.value ? <span className="text-primary">: {it.value}</span> : null}
            </span>
          </span>
        ))}
        <span className="ml-auto hidden text-muted-foreground sm:inline">hif://brand-kit</span>
      </div>
    </div>
  )
}
