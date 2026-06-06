import { useLanguage } from '../context/LanguageContext'
import { sponsors } from '../data/site'

function SponsorInitials({ name }: { name: string }) {
  const initials = name
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()

  return (
    <div className="flex h-24 w-full items-center justify-center rounded-lg bg-krono-red/10">
      <span className="font-display text-2xl font-bold text-krono-red-glow">{initials}</span>
    </div>
  )
}

function SponsorLogo({ name, logo }: { name: string; logo?: string }) {
  if (!logo) return <SponsorInitials name={name} />

  return (
    <div className="flex h-24 w-full items-center justify-center rounded-lg bg-white/5 p-4">
      <img
        src={logo}
        alt={name}
        className="max-h-16 max-w-full object-contain"
        loading="lazy"
      />
    </div>
  )
}

export default function Sponsors() {
  const { t, lang } = useLanguage()

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-16 text-center">
        <h1 className="font-display glow-red text-4xl font-bold text-white sm:text-5xl">
          {t.sponsors.title}
        </h1>
        <p className="mt-4 text-krono-silver">{t.sponsors.subtitle}</p>
        <div className="section-divider mx-auto mt-6 w-24" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {sponsors.map((sponsor) => {
          const displayName = lang === 'he' && sponsor.nameHe ? sponsor.nameHe : sponsor.name
          return (
            <a
              key={sponsor.name}
              href={sponsor.link}
              target="_blank"
              rel="noopener noreferrer"
              className="card-glow group flex flex-col rounded-xl bg-krono-card p-6 transition-transform hover:scale-[1.02]"
            >
              <SponsorLogo name={displayName} logo={sponsor.logo} />
              <h3 className="mt-4 text-center font-semibold text-white group-hover:text-krono-red-glow">
                {displayName}
              </h3>
              <span className="mt-2 text-center text-xs text-krono-muted group-hover:text-krono-red">
                {t.sponsors.visit} →
              </span>
            </a>
          )
        })}
      </div>
    </div>
  )
}
