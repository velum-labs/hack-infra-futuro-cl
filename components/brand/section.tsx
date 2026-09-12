import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function Section({
  id,
  index,
  title,
  description,
  children,
  className,
}: {
  id: string
  index: string
  title: string
  description?: string
  children: ReactNode
  className?: string
}) {
  return (
    <section
      id={id}
      className={cn('scroll-mt-20 border-t border-border py-16 md:py-24', className)}
    >
      <div className="mx-auto max-w-6xl px-6">
        <header className="mb-10 flex flex-col gap-4 md:mb-14">
          <div className="flex items-center gap-3 font-mono text-xs lowercase tracking-widest text-muted-foreground">
            <span className="text-primary">{index}</span>
            <span className="h-px w-8 bg-border" aria-hidden="true" />
            <span>
              <span className="text-primary">~/brand/</span>
              {id}
            </span>
          </div>
          <h2 className="flex flex-wrap items-baseline gap-x-3 font-mono text-3xl font-bold lowercase tracking-tight text-balance md:text-4xl">
            <span className="text-muted-foreground" aria-hidden="true">
              $
            </span>
            {title}
          </h2>
          {description ? (
            <p className="max-w-2xl text-pretty leading-relaxed text-muted-foreground">
              {description}
            </p>
          ) : null}
        </header>
        {children}
      </div>
    </section>
  )
}

export function Tag({
  children,
  variant = 'default',
  className,
}: {
  children: ReactNode
  variant?: 'default' | 'primary' | 'accent' | 'outline'
  className?: string
}) {
  const tone = {
    default: 'text-muted-foreground',
    primary: 'text-primary',
    accent: 'text-foreground',
    outline: 'text-muted-foreground',
  }
  return (
    <span
      className={cn(
        'inline-flex items-center font-mono text-[11px] font-medium lowercase tracking-wider',
        tone[variant],
        className,
      )}
    >
      <span className="text-muted-foreground/50" aria-hidden="true">
        [
      </span>
      {children}
      <span className="text-muted-foreground/50" aria-hidden="true">
        ]
      </span>
    </span>
  )
}
