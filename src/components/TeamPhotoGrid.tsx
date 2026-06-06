import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { teamPhotos, type TeamPhoto } from '../data/site'

function TeamPhoto({ photo, large }: { photo: TeamPhoto; large?: boolean }) {
  const { lang, t } = useLanguage()
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        className={`flex items-center justify-center bg-krono-black/60 p-4 text-center ${
          large ? 'h-48 sm:h-56' : 'h-36 sm:h-44'
        }`}
      >
        <p className="text-xs text-krono-muted">{t.about.photoMissing}</p>
      </div>
    )
  }

  return (
    <img
      src={photo.src}
      alt={lang === 'he' ? photo.altHe : photo.alt}
      className={`w-full object-cover ${large ? 'h-48 sm:h-56' : 'h-36 sm:h-44'}`}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  )
}

export default function TeamPhotoGrid() {
  const { t } = useLanguage()

  return (
    <div>
      <h2 className="font-display mb-4 text-lg font-bold text-white">{t.about.teamPhotos}</h2>
      <div className="grid grid-cols-2 gap-3">
        {teamPhotos.map((photo, i) => (
          <div
            key={photo.src}
            className={`card-glow overflow-hidden rounded-xl ${i === 0 ? 'col-span-2' : ''}`}
          >
            <TeamPhoto photo={photo} large={i === 0} />
          </div>
        ))}
      </div>
    </div>
  )
}
