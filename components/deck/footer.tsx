import { LogoLockup } from '@/components/brand/logo'

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-end md:justify-between">
        <div className="flex flex-col gap-4">
          <LogoLockup />
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            hackathon presencial de agentes de ia e infraestructura, construido desde
            latinoamérica. un proyecto de velum labs, indies y alianza emprende.
          </p>
        </div>
        <div className="flex flex-col gap-2 font-mono text-xs lowercase tracking-wider">
          <a
            href="mailto:benjamin@velum-labs.com"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            benjamin@velum-labs.com →
          </a>
          <a
            href="https://www.linkedin.com/in/benjamzc/"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            linkedin/in/benjamzc →
          </a>
          <span className="mt-2 text-muted-foreground/60">
            hack infra futuro · santiago · edición 01 · draft
          </span>
        </div>
      </div>
    </footer>
  )
}
