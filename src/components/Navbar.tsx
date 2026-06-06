import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

const navLinks = [
  { to: '/', key: 'home' as const },
  { to: '/about', key: 'about' as const },
  { to: '/first', key: 'first' as const },
  { to: '/sponsors', key: 'sponsors' as const },
  { to: '/challenge', key: 'challenge' as const },
]

export default function Navbar() {
  const { t, lang, toggleLang } = useLanguage()
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path)

  return (
    <header className="sticky top-0 z-50 border-b border-krono-red/20 bg-krono-black/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex shrink-0 items-center gap-3" onClick={() => setMenuOpen(false)}>
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Team Krono" className="h-12 w-12 object-contain sm:h-14 sm:w-14" />
          <span className="font-display hidden text-sm font-bold tracking-widest text-krono-red sm:block">
            FRC 10935
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map(({ to, key }) => (
            <Link
              key={to}
              to={to}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                isActive(to)
                  ? 'bg-krono-red/20 text-krono-red-glow'
                  : 'text-krono-silver hover:bg-white/5 hover:text-white'
              }`}
            >
              {t.nav[key]}
            </Link>
          ))}
          <button
            onClick={toggleLang}
            className="ms-3 rounded-lg border border-krono-red/40 px-4 py-2 text-sm font-semibold text-krono-red transition-colors hover:bg-krono-red/10"
          >
            {lang === 'en' ? t.nav.hebrew : t.nav.english}
          </button>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={toggleLang}
            className="rounded-lg border border-krono-red/40 px-3 py-1.5 text-xs font-semibold text-krono-red"
          >
            {lang === 'en' ? 'עב' : 'EN'}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg p-2 text-krono-silver hover:bg-white/5"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-krono-red/20 bg-krono-dark lg:hidden">
          <div className="flex flex-col px-4 py-3">
            {navLinks.map(({ to, key }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setMenuOpen(false)}
                className={`rounded-lg px-4 py-3 text-sm font-medium ${
                  isActive(to) ? 'bg-krono-red/20 text-krono-red-glow' : 'text-krono-silver'
                }`}
              >
                {t.nav[key]}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
