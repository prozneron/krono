import { useLanguage } from '../context/LanguageContext'
import ContactForm from '../components/ContactForm'
import { FACEBOOK_PAGE_URL } from '../data/site'

export default function About() {
  const { t } = useLanguage()

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
          <div className="card-glow overflow-hidden rounded-xl bg-krono-card">
            <iframe
              src={`https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(FACEBOOK_PAGE_URL)}&tabs=photos&width=500&height=560&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId`}
              width="100%"
              height="560"
              style={{ border: 'none', overflow: 'hidden' }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen
              title="Team Krono Photos"
              className="w-full"
            />
          </div>
          <a
            href={FACEBOOK_PAGE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm text-krono-red-glow hover:underline"
          >
            {t.about.viewAllPhotos} →
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
