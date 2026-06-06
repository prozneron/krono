import { useLanguage } from '../context/LanguageContext'
import FacebookEmbed from './FacebookEmbed'
import { FACEBOOK_PAGE_URL } from '../data/site'

function FacebookIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg className={className} fill="#1877F2" viewBox="0 0 24 24" aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

export default function FacebookFeed() {
  const { t } = useLanguage()

  return (
    <div className="overflow-hidden rounded-xl border border-gray-300 bg-white shadow-2xl shadow-black/40">
      {/* Mini window title bar */}
      <div className="flex items-center gap-3 border-b border-gray-200 bg-[#f0f2f5] px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>
        <FacebookIcon />
        <span className="text-sm font-semibold text-gray-700">Facebook</span>
        <span className="ms-auto truncate text-xs text-gray-500">Team Krono · FRC 10935</span>
      </div>

      {/* Facebook page plugin — white background like real FB */}
      <div className="bg-white">
        <FacebookEmbed
          tabs="timeline"
          height={520}
          title="Team Krono Facebook"
          hideCover={false}
          showFacepile
          smallHeader={false}
        />
      </div>

      {/* Window footer */}
      <div className="border-t border-gray-200 bg-[#f0f2f5] px-4 py-3 text-center">
        <a
          href={FACEBOOK_PAGE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#1877F2] hover:underline"
        >
          <FacebookIcon className="h-4 w-4" />
          {t.home.facebookCta} →
        </a>
      </div>
    </div>
  )
}
