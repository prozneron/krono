import { useLanguage } from '../context/LanguageContext'
import { FACEBOOK_PAGE_URL, teamPhotos } from '../data/site'

function FacebookIcon() {
  return (
    <svg className="h-8 w-8 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

export default function FacebookFeed() {
  const { t, lang } = useLanguage()

  return (
    <div className="overflow-hidden rounded-xl bg-krono-card">
      <div className="grid grid-cols-3 gap-0.5">
        {teamPhotos.map((photo) => (
          <img
            key={photo.src}
            src={photo.src}
            alt={lang === 'he' ? photo.altHe : photo.alt}
            className="aspect-video w-full object-cover"
            loading="lazy"
          />
        ))}
      </div>

      <div className="px-6 py-8 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
          <FacebookIcon />
        </div>
        <p className="font-display text-xl font-bold text-white">Team Krono · FRC 10935</p>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-krono-silver">
          {t.home.facebookPreview}
        </p>
        <a
          href={FACEBOOK_PAGE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-6 inline-block rounded-lg px-8 py-3 text-sm font-semibold text-white"
        >
          {t.home.facebookCta} →
        </a>
      </div>
    </div>
  )
}
