import { Code, GameController, Lightning } from '@phosphor-icons/react'
import Reveal from './Reveal'

const interests = [
  { icon: Code, label: 'Coding' },
  { icon: Lightning, label: 'Technologies' },
  { icon: GameController, label: 'Games' },
]

const cellClass = 'rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60'

export default function About() {
  return (
    <section id="about" className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 pt-12 pb-20 md:px-6 md:pt-14 md:pb-24">
        <Reveal>
          <h2 className="text-3xl font-medium tracking-tight md:text-4xl">About me</h2>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-6">
          <Reveal className={`${cellClass} md:col-span-4`} delay={0.05}>
            <p className="text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
              I&apos;m a third-year Information Technology student at Cavite State University, Tanza
              Campus. Right now I&apos;m splitting my energy between two goals: becoming a
              full-stack developer and working with data as an analyst.
            </p>
            <p className="mt-3 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              Most of what I know came from building rather than reading. Coursework gave me the
              fundamentals: programming logic, databases, and the languages behind them. Personal
              projects are where those lessons stick, because a project breaks in ways a
              classroom never does.
            </p>
            <p className="mt-3 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              Five projects are live so far, from a Three.js first-person shooter to a resort
              website, each one deployed and reachable by anyone with the link. Every one of them
              taught me something new about React, TypeScript, or the work around the code, like
              setting up a build or fixing something after launch. I&apos;m still growing the stack
              and I plan to keep it that way.
            </p>
          </Reveal>

          <Reveal className="md:col-span-2" delay={0.1}>
            <img
              src="/projects/myprofile.jpg"
              alt="Photo of Adrian Ortega"
              loading="lazy"
              width="720"
              height="720"
              className="h-full w-full rounded-xl border border-zinc-200 object-cover dark:border-zinc-800"
            />
          </Reveal>

          <Reveal
            className="rounded-xl border border-emerald-200/70 bg-linear-to-br from-emerald-50 to-zinc-100 p-6 md:col-span-3 dark:border-emerald-900/60 dark:from-emerald-950/50 dark:to-zinc-900"
            delay={0.15}
          >
            <h3 className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Interests outside coursework
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {interests.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-2 rounded-xl border border-zinc-200/80 bg-white/80 px-3.5 py-2 text-sm font-medium text-zinc-800 dark:border-zinc-700/70 dark:bg-zinc-950/60 dark:text-zinc-200"
                >
                  <Icon size={16} weight="regular" className="text-emerald-700 dark:text-emerald-400" />
                  {label}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className={`${cellClass} md:col-span-3`} delay={0.2}>
            <h3 className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Right now</h3>
            <p className="mt-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              Next.js and Tailwind on the front end, Python and MySQL for data work, Linux for
              everything around it. This site is part of that practice too.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
