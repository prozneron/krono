import { useLanguage } from '../context/LanguageContext'
import ContactForm from '../components/ContactForm'
import { FACEBOOK_PAGE_URL, facebookEmbed, teamPhotos } from '../data/site'

export default function About() {
  const { t, lang } = useLanguage()

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-16 text-center">
        <h1 className="font-display glow-red text-4xl font-bold text-white sm:text-5xl">
          {t.about.title}
        </h1>
        <div className="section-divider mx-auto mt-6 w-24" />
      </div>

      <div className="grid items-start gap-12 lg:grid-cols-2">
        <div>
          <h2 className="font-display mb-6 text-2xl font-bold text-krono-red-glow">
            {t.about.ourStory}
          </h2>
          <div className="space-y-4 text-krono-silver leading-relaxed">
            <p>{t.about.storyP1}</p>
            <p>{t.about.storyP2}</p>
            <p>{t.about.storyP3}</p>
          </div>
        </div>

        <div>
          <h2 className="font-display mb-4 text-lg font-bold text-white">{t.about.teamPhotos}</h2>
          <div className="grid grid-cols-2 gap-3">
            {teamPhotos.map((photo, i) => (
              <div
                key={photo.src}
                className={`card-glow overflow-hidden rounded-xl ${i === 0 ? 'col-span-2' : ''}`}
              >
                <img
                  src={photo.src}
                  alt={lang === 'he' ? photo.altHe : photo.alt}
                  referrerPolicy="no-referrer"
                  className={`w-full object-cover ${i === 0 ? 'h-44 sm:h-52' : 'h-32 sm:h-36'}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <div className="card-glow mt-4 overflow-hidden rounded-xl">
            <iframe
              src={facebookEmbed('photos', 400)}
              width="100%"
              height="400"
              style={{ border: 'none', overflow: 'hidden' }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen
              title="Team Krono Facebook Photos"
              className="w-full"
            />
          </div>
          <div className="card-glow mt-4 overflow-hidden rounded-xl">
            <iframe
              src={facebookEmbed('videos', 320)}
              width="100%"
              height="320"
              style={{ border: 'none', overflow: 'hidden' }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen
              title="Team Krono Facebook Videos"
              className="w-full"
            />
          </div>
          <a
            href={FACEBOOK_PAGE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-sm text-krono-red-glow hover:underline"
          >
            {t.about.viewOnFacebook} →
          </a>
        </div>
      </div>

      <div className="section-divider my-16" />

      <div className="mx-auto max-w-xl">
        <h2 className="font-display mb-8 text-center text-2xl font-bold text-white">
          {t.about.contact}
        </h2>
        <div className="card-glow rounded-xl bg-krono-card p-6 sm:p-8">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
