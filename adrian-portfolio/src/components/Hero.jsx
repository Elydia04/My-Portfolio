import { motion, useReducedMotion } from 'motion/react'
import { profile } from '../data/content'

export default function Hero() {
  const reduce = useReducedMotion()
  const rise = (delay) => ({
    initial: reduce ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
  })

  return (
    <section id="home">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pt-16 pb-14 md:grid-cols-[1.05fr_1fr] md:gap-14 md:px-6 md:pt-24 md:pb-20">
        <div>
          <motion.p
            {...rise(0)}
            className="font-mono text-xs uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-400"
          >
            IT student at CVSU Tanza
          </motion.p>
          <motion.h1
            {...rise(0.08)}
            className="mt-4 text-4xl leading-[1.05] font-medium tracking-tight md:text-5xl lg:text-6xl"
          >
            Welcome, I&apos;m Adrian Ortega
          </motion.h1>
          <motion.p
            {...rise(0.16)}
            className="mt-5 max-w-[55ch] text-base leading-relaxed text-zinc-600 md:text-lg dark:text-zinc-400"
          >
            Third-year IT student aiming to become a full-stack developer and data analyst. I learn
            by building and shipping projects.
          </motion.p>
          <motion.div {...rise(0.24)} className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-xl bg-emerald-700 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-800 active:scale-[0.98] dark:bg-emerald-400 dark:text-zinc-950 dark:hover:bg-emerald-300"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-900 transition hover:bg-zinc-100 active:scale-[0.98] dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-900"
            >
              Contact me
            </a>
          </motion.div>
        </div>

        <motion.figure {...rise(0.18)}>
          <a href={profile.github} target="_blank" rel="noreferrer" className="block">
            <img
              src={profile.githubCard}
              alt="GitHub profile card for Adrian Ortega (Elydia04)"
              width="1200"
              height="600"
              className="w-full rounded-xl border border-zinc-200 shadow-sm transition hover:-translate-y-0.5 dark:border-zinc-800"
            />
          </a>
          <figcaption className="mt-3 font-mono text-xs text-zinc-500 dark:text-zinc-400">
            <a href={profile.github} target="_blank" rel="noreferrer" className="hover:underline">
              github.com/Elydia04
            </a>
          </figcaption>
        </motion.figure>
      </div>
    </section>
  )
}
