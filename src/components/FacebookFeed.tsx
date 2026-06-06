import { useEffect, useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { FACEBOOK_PAGE_URL, teamPhotos } from '../data/site'

declare global {
  interface Window {
    FB?: { XFBML: { parse: (node?: HTMLElement) => void } }
    fbAsyncInit?: () => void
  }
}

let sdkRequested = false

function loadFacebookSdk() {
  if (sdkRequested) return
  sdkRequested = true

  if (!document.getElementById('fb-root')) {
    const fbRoot = document.createElement('div')
    fbRoot.id = 'fb-root'
    document.body.prepend(fbRoot)
  }

  window.fbAsyncInit = () => {
    window.FB?.XFBML.parse()
  }

  if (document.getElementById('facebook-jssdk')) return

  const script = document.createElement('script')
  script.id = 'facebook-jssdk'
  script.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v21.0'
  script.async = true
  script.defer = true
  script.crossOrigin = 'anonymous'
  document.body.appendChild(script)
}

export default function FacebookFeed() {
  const { t, lang } = useLanguage()
  const widgetRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    loadFacebookSdk()
    const timer = window.setTimeout(() => {
      if (widgetRef.current) window.FB?.XFBML.parse(widgetRef.current)
    }, 100)
    return () => window.clearTimeout(timer)
  }, [lang])

  return (
    <div className="overflow-hidden rounded-xl bg-krono-card">
      <a
        href={FACEBOOK_PAGE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group block border-b border-krono-red/20"
      >
        <div className="grid grid-cols-3 gap-0.5">
          {teamPhotos.map((photo) => (
            <img
              key={photo.src}
              src={photo.src}
              alt={lang === 'he' ? photo.altHe : photo.alt}
              className="aspect-video w-full object-cover transition-opacity group-hover:opacity-90"
              loading="lazy"
            />
          ))}
        </div>
        <div className="px-4 py-5 text-center">
          <p className="font-display text-lg font-bold text-white">Team Krono · FRC 10935</p>
          <p className="mt-2 text-sm text-krono-silver">{t.home.facebookPreview}</p>
        </div>
      </a>

      <div ref={widgetRef} className="flex min-h-[420px] justify-center bg-[#242526] px-2 py-4">
        <div
          className="fb-page"
          data-href={FACEBOOK_PAGE_URL}
          data-tabs="timeline"
          data-width="500"
          data-height="420"
          data-small-header="false"
          data-adapt-container-width="true"
          data-hide-cover="false"
          data-show-facepile="true"
        />
      </div>

      <div className="border-t border-krono-red/20 p-4 text-center">
        <a
          href={FACEBOOK_PAGE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-block rounded-lg px-6 py-2.5 text-sm font-semibold text-white"
        >
          {t.home.facebookCta} →
        </a>
      </div>
    </div>
  )
}
