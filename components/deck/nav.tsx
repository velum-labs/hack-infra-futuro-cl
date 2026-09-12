import { Mark } from '@/components/brand/logo'
import { Kbd } from '@/components/brand/hacker'

const links = [
  { href: '#evento', label: 'evento' },
  { href: '#organizadores', label: 'organizadores' },
  { href: '#tracks', label: 'tracks' },
  { href: '#evaluacion', label: 'evaluación' },
  { href: '#sponsors', label: 'sponsors' },
  { href: '#contacto', label: 'contacto' },
]

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#top" className="flex items-center gap-2.5">
          <Mark className="h-7 w-7" />
          <span className="font-mono text-sm font-bold lowercase tracking-tight text-foreground">
            hif<span className="text-muted-foreground">/deck</span>
          </span>
        </a>
        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-xs lowercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contacto"
          className="flex items-center gap-2 rounded-sm bg-primary px-3 py-1.5 font-mono text-xs font-bold lowercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90"
        >
          sé sponsor
          <Kbd className="border-primary-foreground/40 bg-primary-foreground/10 text-primary-foreground">
            ↵
          </Kbd>
        </a>
      </div>
    </header>
  )
}
