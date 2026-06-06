import { useState, useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'
import Countdown from '../components/Countdown'
import {
  CHAMPIONSHIP_DATE,
  GAME_MANUAL_URL,
  GAME_ANIMATION_URL,
} from '../data/site'

export default function Challenge() {
  const { t } = useLanguage()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [uploadedFile, setUploadedFile] = useState<{ name: string; url: string } | null>(() => {
    const saved = localStorage.getItem('krono-challenge-book')
    return saved ? JSON.parse(saved) : null
  })

  function handleFileUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return

    const url = URL.createObjectURL(file)
    const data = { name: file.name, url }
    setUploadedFile(data)
    localStorage.setItem('krono-challenge-book', JSON.stringify({ name: file.name }))
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-16 text-center">
        <h1 className="font-display glow-red text-4xl font-bold text-white sm:text-5xl">
          {t.challenge.title}
        </h1>
        <p className="mt-4 font-display text-xl text-krono-red-glow">{t.challenge.gameName}</p>
        <div className="section-divider mx-auto mt-6 w-24" />
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <p className="leading-relaxed text-krono-silver">{t.challenge.gameDesc}</p>
          <a
            href={GAME_ANIMATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-6 inline-block rounded-lg px-6 py-3 text-sm font-semibold text-white"
          >
            {t.challenge.watchAnimation}
          </a>
          <div className="card-glow mt-8 overflow-hidden rounded-xl">
            <iframe
              src="https://www.youtube.com/embed/_fybREErgyM"
              title="REBUILT Game Animation"
              className="aspect-video w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        <div>
          <h2 className="font-display mb-6 text-xl font-bold text-white">
            {t.challenge.countdown}
          </h2>
          <Countdown targetDate={CHAMPIONSHIP_DATE} />
        </div>
      </div>

      <div className="section-divider my-16" />

      <div className="mx-auto max-w-2xl">
        <h2 className="font-display mb-4 text-2xl font-bold text-white">{t.challenge.manual}</h2>
        <p className="mb-6 text-krono-silver">{t.challenge.manualDesc}</p>

        <div className="card-glow rounded-xl bg-krono-card p-6 sm:p-8">
          <a
            href={GAME_MANUAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mb-6 inline-block rounded-lg px-6 py-3 text-sm font-semibold text-white"
          >
            {t.challenge.download}
          </a>

          <div className="border-t border-krono-red/20 pt-6">
            <p className="mb-4 text-sm font-medium text-krono-silver">{t.challenge.upload}</p>
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileUpload}
              className="hidden"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="rounded-lg border border-krono-red/40 px-6 py-3 text-sm font-semibold text-krono-red transition-colors hover:bg-krono-red/10"
            >
              {t.challenge.upload}
            </button>
            <p className="mt-4 text-sm text-krono-muted">
              {uploadedFile ? uploadedFile.name : t.challenge.noFile}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
