import { useLanguage } from '../context/LanguageContext'
import { FACEBOOK_PAGE_URL, facebookPosts } from '../data/site'

function FacebookIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg className={className} fill="#1877F2" viewBox="0 0 24 24" aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function PostCard({
  post,
  caption,
  labels,
}: {
  post: (typeof facebookPosts)[0]
  caption: string
  labels: { like: string; comment: string; share: string }
}) {
  return (
    <article className="border-b border-gray-200 bg-white pb-3">
      <div className="flex items-center gap-2 px-3 py-2.5">
        <img
          src={`${import.meta.env.BASE_URL}logo.png`}
          alt=""
          className="h-10 w-10 rounded-full border border-gray-200 object-contain bg-white p-0.5"
        />
        <div>
          <a
            href={FACEBOOK_PAGE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] font-semibold text-gray-900 hover:underline"
          >
            Team Krono FRC 10935
          </a>
          <p className="text-[11px] text-gray-500">🌐 · Recently</p>
        </div>
      </div>

      <p className="px-3 pb-2 text-[13px] leading-snug text-gray-900">{caption}</p>

      {post.type === 'photo' ? (
        <img src={post.src} alt="" className="w-full object-cover" loading="lazy" />
      ) : (
        <video src={post.src} controls playsInline preload="metadata" className="w-full bg-black" />
      )}

      <div className="mt-2 flex justify-around border-t border-gray-100 px-3 pt-2">
        {[labels.like, labels.comment, labels.share].map((label) => (
          <a
            key={label}
            href={FACEBOOK_PAGE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded px-4 py-1.5 text-[13px] font-semibold text-gray-600 hover:bg-gray-100"
          >
            {label}
          </a>
        ))}
      </div>
    </article>
  )
}

export default function FacebookFeed() {
  const { t, lang } = useLanguage()
  const cover = facebookPosts.find((p) => p.type === 'photo')?.src ?? `${import.meta.env.BASE_URL}team/photo-1.jpg`

  return (
    <div className="overflow-hidden rounded-xl border border-gray-300 bg-white shadow-2xl shadow-black/40">
      {/* Window title bar */}
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

      {/* Page header — like a real FB page */}
      <div className="border-b border-gray-200 bg-white">
        <img src={cover} alt="" className="h-28 w-full object-cover" />
        <div className="px-3 pb-3">
          <div className="-mt-8 mb-2 flex items-end gap-3">
            <img
              src={`${import.meta.env.BASE_URL}logo.png`}
              alt=""
              className="h-16 w-16 rounded-full border-4 border-white bg-white object-contain p-1 shadow-sm"
            />
            <div className="pb-1">
              <h3 className="text-lg font-bold text-gray-900">Team Krono FRC 10935</h3>
              <p className="text-[13px] text-gray-500">{t.home.facebookPageSubtitle}</p>
            </div>
          </div>
          <a
            href={FACEBOOK_PAGE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full rounded-md bg-[#1877F2] py-2 text-center text-sm font-semibold text-white hover:bg-[#166fe5]"
          >
            {t.home.facebookFollow}
          </a>
        </div>
      </div>

      {/* Scrollable feed */}
      <div className="max-h-[480px] overflow-y-auto bg-[#f0f2f5]">
        {facebookPosts.map((post, i) => (
          <PostCard
            key={i}
            post={post}
            caption={lang === 'he' ? post.captionHe : post.caption}
            labels={{
              like: t.home.facebookLike,
              comment: t.home.facebookComment,
              share: t.home.facebookShare,
            }}
          />
        ))}
      </div>

      {/* Footer */}
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
