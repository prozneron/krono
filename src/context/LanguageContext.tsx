import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import { translations, type Lang, type Translations } from '../i18n/translations'

interface LanguageContextType {
  lang: Lang
  t: Translations
  toggleLang: () => void
  dir: 'ltr' | 'rtl'
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem('krono-lang')
    return saved === 'he' ? 'he' : 'en'
  })

  useEffect(() => {
    localStorage.setItem('krono-lang', lang)
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr'
  }, [lang])

  const toggleLang = () => setLang((l) => (l === 'en' ? 'he' : 'en'))

  return (
    <LanguageContext.Provider
      value={{
        lang,
        t: translations[lang],
        toggleLang,
        dir: lang === 'he' ? 'rtl' : 'ltr',
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
