import { useLanguage } from '../context/LanguageContext'
import { FACEBOOK_PAGE_URL, facebookEmbed, teamPhotos } from '../data/site'

function FacebookEmbed({
  tabs,
  height,
  title,
}: {
  tabs: string
  height: number
  title: string
}) {
  return (
    <iframe
      src={facebookEmbed(tabs, height)}
      width="100%"
      height={height}
      style={{ border: 'none', overflow: 'hidden' }}
      scrolling="no"
      frameBorder="0"
      allowFullScreen
      title={title}
      className="w-full"
    />
  )
}

export default function Home() {
  const { t, lang } = useLanguage()

  return (
    <div>
      <section className="gradient-hero relative overflow-hidden px-4 py-20 sm:py-28 lg:py-36">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute start-1/4 top-1/4 h-64 w-64 rounded-full bg-krono-red blur-3xl" />
          <div className="absolute bottom-1/4 end-1/4 h-48 w-48 rounded-full bg-krono-red blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-4xl text-center">
          <img
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt="Krono"
            className="mx-auto mb-8 h-32 w-32 object-contain sm:h-40 sm:w-40"
          />
          <h1 className="font-display glow-red text-5xl font-black tracking-wider text-white sm:text-7xl lg:text-8xl">
            {t.home.title}
          </h1>
          <p className="mt-4 text-lg font-medium tracking-wide text-krono-red-glow sm:text-xl">
            {t.home.location}
          </p>
          <span className="mt-6 inline-block rounded-full border border-krono-red/50 bg-krono-red/10 px-5 py-2 text-sm font-bold text-krono-red-glow">
            {t.home.badge}
          </span>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-krono-silver sm:text-lg">
            {t.home.description}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-display mb-10 text-center text-2xl font-bold text-white sm:text-3xl">
          {t.home.gallery}
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {teamPhotos.map((photo, i) => (
            <div
              key={photo.src}
              className={`card-glow overflow-hidden rounded-xl ${i === 0 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
            >
              <img
                src={photo.src}
                alt={lang === 'he' ? photo.altHe : photo.alt}
                referrerPolicy="no-referrer"
                className="aspect-video w-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
          <div className="card-glow overflow-hidden rounded-xl sm:col-span-2 lg:col-span-3">
            <FacebookEmbed tabs="photos" height={420} title="Team Krono Facebook Photos" />
          </div>
          <div className="card-glow overflow-hidden rounded-xl sm:col-span-2 lg:col-span-3">
            <FacebookEmbed tabs="videos" height={420} title="Team Krono Facebook Videos" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <h2 className="font-display mb-8 text-center text-2xl font-bold text-white sm:text-3xl">
          {t.home.facebookFeed}
        </h2>
        <div className="card-glow mx-auto max-w-2xl overflow-hidden rounded-xl bg-krono-card">
          <FacebookEmbed tabs="timeline" height={600} title="Team Krono Facebook" />
          <div className="border-t border-krono-red/20 p-4 text-center">
            <a
              href={FACEBOOK_PAGE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block rounded-lg px-6 py-2.5 text-sm font-semibold text-white"
            >
              Facebook →
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
