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
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-24">
        <Reveal>
          <h2 className="text-3xl font-medium tracking-tight md:text-4xl">About me</h2>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-6">
          <Reveal className={`${cellClass} md:col-span-4`} delay={0.05}>
            <p className="text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
              I&apos;m a third-year Information Technology student at Cavite State University, Tanza
              Campus.
            </p>
            <p className="mt-3 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              I&apos;m working toward two goals: full-stack development and data analysis. Classwork
              gives me the fundamentals, and personal projects put them to work.
            </p>
          </Reveal>

          <Reveal className="md:col-span-2" delay={0.1}>
            <img
              src="/projects/myprofile.jpg"
              alt="Photo of Adrian Ortega"
              loading="lazy"
              width="720"
              height="720"
              className="aspect-square w-full rounded-xl border border-zinc-200 object-cover dark:border-zinc-800"
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
              Growing the stack: Next.js and Tailwind on the front end, Python and MySQL for data
              work, Linux for everything around it.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
