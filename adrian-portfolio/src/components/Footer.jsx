import { EnvelopeSimple, FacebookLogo, GithubLogo } from '@phosphor-icons/react'
import { profile } from '../data/content'

const socials = [
  { icon: GithubLogo, label: 'GitHub', href: profile.github },
  { icon: FacebookLogo, label: 'Facebook', href: profile.facebook },
  { icon: EnvelopeSimple, label: 'Email', href: `mailto:${profile.email}` },
]

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-4 py-8 sm:flex-row sm:items-center md:px-6">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          © {new Date().getFullYear()} Adrian Ortega
        </p>
        <div className="flex items-center gap-1">
          {socials.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noreferrer"
              aria-label={label}
              className="grid size-9 place-items-center rounded-xl text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-50"
            >
              <Icon size={18} weight="regular" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
