import { useState } from 'react'
import {
  ArrowUpRight,
  EnvelopeSimple,
  FacebookLogo,
  GithubLogo,
} from '@phosphor-icons/react'
import Reveal from './Reveal'
import { profile } from '../data/content'

const links = [
  { icon: EnvelopeSimple, label: profile.email, href: `mailto:${profile.email}` },
  { icon: GithubLogo, label: 'github.com/Elydia04', href: profile.github },
  { icon: FacebookLogo, label: 'Adrian Ortega', href: profile.facebook },
  { icon: ArrowUpRight, label: 'LeetCode profile', href: profile.leetcode },
]

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const fieldClass = (hasError) =>
  `w-full rounded-xl border bg-white px-3.5 py-2.5 text-sm text-zinc-900 outline-none transition focus:ring-2 dark:bg-zinc-950 dark:text-zinc-100 ${
    hasError
      ? 'border-red-600 focus:ring-red-600/40 dark:border-red-400'
      : 'border-zinc-300 focus:ring-emerald-700/40 dark:border-zinc-700 dark:focus:ring-emerald-400/40'
  }`

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const update = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
    setSent(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const nextErrors = {}
    if (!form.name.trim()) nextErrors.name = 'Please enter your name.'
    if (!emailPattern.test(form.email)) nextErrors.email = 'Please enter a valid email address.'
    if (form.message.trim().length < 10)
      nextErrors.message = 'Please write at least 10 characters.'

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    const subject = encodeURIComponent(`Portfolio message from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-24">
        <Reveal>
          <h2 className="text-3xl font-medium tracking-tight md:text-4xl">Contact</h2>
          <p className="mt-4 max-w-[55ch] text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            Questions about a project, or just want to say hi? Reach me on any of these, or use the
            form.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-16">
          <Reveal delay={0.05}>
            <ul className="space-y-3">
              {links.map(({ icon: Icon, label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    target={href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-700 transition hover:-translate-y-0.5 hover:shadow-sm dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-300"
                  >
                    <Icon
                      size={18}
                      weight="regular"
                      className="shrink-0 text-emerald-700 dark:text-emerald-400"
                    />
                    <span className="truncate">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
              The LeetCode account is a bit quiet these days.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={update('name')}
                  aria-invalid={Boolean(errors.name)}
                  className={fieldClass(errors.name)}
                />
                {errors.name && (
                  <p className="text-sm text-red-600 dark:text-red-400">{errors.name}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={update('email')}
                  aria-invalid={Boolean(errors.email)}
                  className={fieldClass(errors.email)}
                />
                {errors.email && (
                  <p className="text-sm text-red-600 dark:text-red-400">{errors.email}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={update('message')}
                  aria-invalid={Boolean(errors.message)}
                  className={fieldClass(errors.message)}
                />
                {errors.message && (
                  <p className="text-sm text-red-600 dark:text-red-400">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-700 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-800 active:scale-[0.98] dark:bg-emerald-400 dark:text-zinc-950 dark:hover:bg-emerald-300"
              >
                Send message
              </button>

              {sent && (
                <p
                  role="status"
                  className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900 dark:border-emerald-900 dark:bg-emerald-950/50 dark:text-emerald-300"
                >
                  Your email app should be opening with the message ready to send.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
