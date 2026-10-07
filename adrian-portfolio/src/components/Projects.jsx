import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { ArrowUpRight, CaretDown } from '@phosphor-icons/react'
import Reveal from './Reveal'
import { filters, projects } from '../data/content'

// Each filter result tiles a 6-column grid with no empty cells.
function spanPattern(count) {
  if (count === 1) return ['md:col-span-6']
  if (count === 2) return ['md:col-span-3', 'md:col-span-3']
  if (count === 5) return ['md:col-span-3', 'md:col-span-3', 'md:col-span-2', 'md:col-span-2', 'md:col-span-2']
  return Array(count).fill('md:col-span-3')
}

function ProjectCard({ project, open, onToggle }) {
  const reduce = useReducedMotion()
  // A screenshot narrower or shorter than its frame would be scaled up into a
  // blur, so it drops onto a background at its own size instead. Anything
  // larger keeps object-cover and gets cropped from the bottom.
  const [tight, setTight] = useState(false)

  const fitImage = (event) => {
    const img = event.currentTarget
    setTight(img.naturalWidth < img.clientWidth || img.naturalHeight < img.clientHeight)
  }

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/60">
      <img
        src={project.image}
        onError={(event) => {
          event.currentTarget.onerror = null
          event.currentTarget.src = project.fallback
        }}
        onLoad={fitImage}
        alt={`Screenshot of ${project.title}`}
        loading="lazy"
        className={`aspect-[2/1] w-full border-b border-zinc-200 bg-zinc-100 object-top dark:border-zinc-800 dark:bg-zinc-950 ${
          tight ? 'object-contain p-4' : 'object-cover'
        }`}
      />
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-medium">{project.title}</h3>
          <span className="shrink-0 rounded-xl border border-zinc-200 bg-zinc-50 px-2 py-0.5 font-mono text-[11px] text-zinc-600 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-400">
            {project.language}
          </span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {project.summary}
        </p>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="details"
              initial={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
              animate={reduce ? { opacity: 1 } : { height: 'auto', opacity: 1 }}
              exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {project.details}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <li
                    key={item}
                    className="rounded-xl border border-zinc-200 px-2.5 py-1 font-mono text-[11px] text-zinc-600 dark:border-zinc-700 dark:text-zinc-400"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-4">
                <a
                  href={project.site}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-emerald-700 hover:underline dark:text-emerald-400"
                >
                  Live site <ArrowUpRight size={14} weight="regular" />
                </a>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-zinc-700 hover:underline dark:text-zinc-300"
                >
                  Source code <ArrowUpRight size={14} weight="regular" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          className="mt-5 inline-flex items-center gap-1.5 self-start rounded-xl border border-zinc-300 px-3.5 py-2 text-sm font-medium text-zinc-900 transition hover:bg-zinc-100 active:scale-[0.98] dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800"
        >
          {open ? 'View less' : 'View more'}
          <CaretDown
            size={14}
            weight="regular"
            className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          />
        </button>
      </div>
    </article>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const [openId, setOpenId] = useState(null)

  const visible = filter === 'All' ? projects : projects.filter((p) => p.category === filter)
  const spans = spanPattern(visible.length)

  return (
    <section id="projects" className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-24">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-400">
            Selected projects
          </p>
          <h2 className="mt-4 text-3xl font-medium tracking-tight md:text-4xl">
            Things I&apos;ve built
          </h2>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
            {filters.map((item) => {
              const active = item === filter
              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => {
                    setFilter(item)
                    setOpenId(null)
                  }}
                  aria-pressed={active}
                  className={`rounded-xl px-4 py-2 text-sm font-medium transition active:scale-[0.98] ${
                    active
                      ? 'bg-zinc-900 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-900'
                      : 'border border-zinc-300 text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-900'
                  }`}
                >
                  {item}
                </button>
              )
            })}
          </div>
        </Reveal>

        <motion.div
          key={filter}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 grid gap-4 md:grid-cols-6"
        >
          {visible.map((project, index) => (
            <div key={project.id} className={spans[index]}>
              <ProjectCard
                project={project}
                open={openId === project.id}
                onToggle={() => setOpenId((current) => (current === project.id ? null : project.id))}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
