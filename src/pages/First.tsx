import { useLanguage } from '../context/LanguageContext'

const programs = [
  {
    key: 'fllExplore' as const,
    abbr: 'FLL Explore',
    color: 'from-orange-600/20 to-orange-900/10',
    border: 'border-orange-500/30',
  },
  {
    key: 'fll' as const,
    abbr: 'FLL',
    color: 'from-red-600/20 to-red-900/10',
    border: 'border-red-500/30',
  },
  {
    key: 'ftc' as const,
    abbr: 'FTC',
    color: 'from-blue-600/20 to-blue-900/10',
    border: 'border-blue-500/30',
  },
  {
    key: 'frc' as const,
    abbr: 'FRC',
    color: 'from-krono-red/30 to-krono-red/5',
    border: 'border-krono-red/50',
  },
]

export default function First() {
  const { t } = useLanguage()

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-16 text-center">
        <h1 className="font-display glow-red text-4xl font-bold text-white sm:text-5xl">
          {t.first.title}
        </h1>
        <p className="mt-4 text-krono-silver">{t.first.subtitle}</p>
        <div className="section-divider mx-auto mt-6 w-24" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {programs.map(({ key, abbr, color, border }) => (
          <div
            key={key}
            className={`card-glow rounded-xl border bg-gradient-to-br p-6 ${color} ${border}`}
          >
            <span className="font-display text-lg font-bold text-krono-red-glow">{abbr}</span>
            <p className="mt-3 text-sm leading-relaxed text-krono-silver">{t.first[key]}</p>
          </div>
        ))}
      </div>

      <blockquote className="card-glow mx-auto mt-16 max-w-3xl rounded-xl bg-krono-card p-8 text-center">
        <p className="text-lg italic leading-relaxed text-krono-silver">{t.first.quote}</p>
        <footer className="mt-4 font-display text-sm font-semibold text-krono-red-glow">
          — {t.first.quoteAuthor}
        </footer>
      </blockquote>

      <div className="mx-auto mt-12 max-w-3xl space-y-4 text-center leading-relaxed text-krono-silver">
        <p>{t.first.aboutP1}</p>
        <p className="font-medium text-white">{t.first.aboutP2}</p>
      </div>

      <p className="mt-8 text-center text-xs text-krono-muted">
        Content adapted from{' '}
        <a
          href="https://www.bumbleb3339.com/first"
          target="_blank"
          rel="noopener noreferrer"
          className="text-krono-red-glow underline"
        >
          BumbleB 3339 FIRST page
        </a>
      </p>
    </div>
  )
}
