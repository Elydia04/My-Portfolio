import { useEffect, useState } from 'react'
import { DownloadSimple } from '@phosphor-icons/react'
import Reveal from './Reveal'
import { profile, skillGroups } from '../data/content'

const buttonClass =
  'mt-8 inline-flex items-center gap-2 rounded-xl bg-emerald-700 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-800 active:scale-[0.98] print:hidden dark:bg-emerald-400 dark:text-zinc-950 dark:hover:bg-emerald-300'

export default function Resume() {
  // The finished CV is picked up automatically the moment the PDF lands in
  // /public under the name in content.js. Until then the button prints this
  // section to PDF, so Download CV is never a dead end while the CV is
  // still being written.
  const [pdfReady, setPdfReady] = useState(false)

  useEffect(() => {
    let alive = true
    fetch(profile.resumePath, { method: 'HEAD' })
      .then((res) => {
        const type = res.headers.get('content-type') || ''
        if (alive && res.ok && !type.includes('text/html')) setPdfReady(true)
      })
      .catch(() => {
        // Not there yet: keep the print-to-PDF fallback.
      })
    return () => {
      alive = false
    }
  }, [])

  return (
    <section id="resume" className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-24">
        {/* Print-only letterhead: appears only when saving as PDF */}
        <div className="mb-8 hidden print:block">
          <h1 className="text-2xl font-medium tracking-tight">Adrian Ortega</h1>
          <p className="mt-1 text-sm">
            {profile.email}, {profile.github}
          </p>
        </div>

        <Reveal>
          <h2 className="text-3xl font-medium tracking-tight print:hidden md:text-4xl">
            Resume
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-12 md:grid-cols-2 md:gap-16">
          <Reveal delay={0.05}>
            <h3 className="text-base font-medium">Education</h3>
            <div className="mt-4">
              <p className="font-medium">BS Information Technology</p>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                Cavite State University, Tanza Campus
              </p>
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-500">Currently 3rd year</p>
            </div>

            <h3 className="mt-10 text-base font-medium">Experience</h3>
            <div className="mt-4">
              <p className="font-medium">Self-directed project work</p>
              <p className="mt-1 max-w-[55ch] text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                No professional IT experience yet. Five shipped personal projects are where I have
                applied what class teaches: version control, frameworks, deployment, and working from
                a brief.
              </p>
            </div>

            {pdfReady ? (
              <a href={profile.resumePath} download className={buttonClass}>
                <DownloadSimple size={16} weight="regular" />
                Download CV
              </a>
            ) : (
              <button
                type="button"
                onClick={() => window.print()}
                title="No PDF yet — saves this resume section as a PDF instead"
                className={buttonClass}
              >
                <DownloadSimple size={16} weight="regular" />
                Download CV
              </button>
            )}
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className="text-base font-medium">Skills</h3>
            <div className="mt-4 space-y-6">
              {skillGroups.map((group) => (
                <div key={group.label}>
                  <h4 className="text-sm text-zinc-500 dark:text-zinc-400">{group.label}</h4>
                  <ul className="mt-2.5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-xl border border-zinc-200 bg-white px-3 py-1.5 text-sm text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-300"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
