import { useLanguage } from '../context/LanguageContext'
import ContactForm from '../components/ContactForm'
import TeamPhotoGrid from '../components/TeamPhotoGrid'

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

      <div className="grid items-center gap-12 lg:grid-cols-2">
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
        <TeamPhotoGrid />
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
