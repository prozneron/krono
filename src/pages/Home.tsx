import { useLanguage } from '../context/LanguageContext'
import { FACEBOOK_PAGE_URL } from '../data/site'

const galleryItems = [
  {
    type: 'image' as const,
    src: `${import.meta.env.BASE_URL}logo.png`,
    alt: 'Team Krono Logo',
  },
  {
    type: 'video' as const,
    src: 'https://www.youtube.com/embed/_fybREErgyM',
    alt: 'FRC 2026 REBUILT Game Animation',
  },
  {
    type: 'image' as const,
    src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
    alt: 'Robotics team at work',
  },
  {
    type: 'image' as const,
    src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
    alt: 'Technology and innovation',
  },
]

export default function Home() {
  const { t } = useLanguage()

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
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className="card-glow group overflow-hidden rounded-xl bg-krono-card transition-transform hover:scale-[1.02]"
            >
              {item.type === 'video' ? (
                <div className="aspect-video">
                  <iframe
                    src={item.src}
                    title={item.alt}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="aspect-video w-full object-cover transition-transform group-hover:scale-105"
                  loading="lazy"
                />
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <h2 className="font-display mb-8 text-center text-2xl font-bold text-white sm:text-3xl">
          {t.home.facebookFeed}
        </h2>
        <div className="card-glow mx-auto max-w-2xl overflow-hidden rounded-xl bg-krono-card">
          <iframe
            src={`https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(FACEBOOK_PAGE_URL)}&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId`}
            width="100%"
            height="600"
            style={{ border: 'none', overflow: 'hidden' }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen
            title="Team Krono Facebook"
            className="w-full"
          />
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
