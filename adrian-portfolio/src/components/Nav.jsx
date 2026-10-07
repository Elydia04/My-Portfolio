import { useState } from 'react'
import { List, Moon, Sun, X } from '@phosphor-icons/react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#resume', label: 'Resume' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/80 bg-zinc-50/85 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/85">
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6"
      >
        <a href="#home" className="flex items-center gap-2.5">
          <span className="grid size-8 place-items-center rounded-xl bg-zinc-900 font-mono text-xs font-medium text-zinc-50 dark:bg-zinc-100 dark:text-zinc-900">
            AO
          </span>
          <span className="hidden text-sm font-medium sm:inline">Adrian Ortega</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-xl px-3 py-2 text-sm text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-50"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="grid size-9 place-items-center rounded-xl text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-50"
          >
            {theme === 'dark' ? <Sun size={18} weight="regular" /> : <Moon size={18} weight="regular" />}
          </button>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="grid size-9 place-items-center rounded-xl text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-950 md:hidden dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-50"
          >
            {open ? <X size={20} weight="regular" /> : <List size={20} weight="regular" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-zinc-200 bg-zinc-50 px-4 py-2 md:hidden dark:border-zinc-800 dark:bg-zinc-950">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-3 py-2.5 text-sm text-zinc-700 transition hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-900"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
