export interface Sponsor {
  name: string
  nameHe?: string
  link: string
  logo?: string
}

export const sponsors: Sponsor[] = [
  {
    name: 'Apple',
    link: 'https://www.apple.com',
    logo: `${import.meta.env.BASE_URL}sponsors/apple.svg`,
  },
  {
    name: 'Etro',
    link: 'https://www.etro.com',
    logo: `${import.meta.env.BASE_URL}sponsors/etro.svg`,
  },
  {
    name: 'Kiryat Ono Municipality',
    nameHe: 'עיריית קריית אונו',
    link: 'https://www.kiryat-ono.muni.il',
    logo: `${import.meta.env.BASE_URL}sponsors/kiryat-ono.svg`,
  },
  {
    name: 'Shivrug',
    nameHe: 'שיברוג',
    link: 'https://www.shivrug.co.il',
    logo: `${import.meta.env.BASE_URL}sponsors/shivrug.svg`,
  },
  {
    name: 'M.P. Tzameret Center Ltd.',
    nameHe: 'מ.פ מרכז הצנרת בע"מ',
    link: '#',
    logo: `${import.meta.env.BASE_URL}sponsors/tzameret.svg`,
  },
  {
    name: 'Ben Tzvi School',
    nameHe: 'בית הספר בן צביה',
    link: '#',
    logo: `${import.meta.env.BASE_URL}sponsors/ben-tzvi.svg`,
  },
  {
    name: 'Hatal & Technology Unit',
    nameHe: 'חט"ל והיחידה הטכנולוגית',
    link: '#',
    logo: `${import.meta.env.BASE_URL}sponsors/hatal.svg`,
  },
  {
    name: 'Katzir High School',
    nameHe: 'תיכון קציר',
    link: '#',
    logo: `${import.meta.env.BASE_URL}sponsors/katzir.svg`,
  },
]

export const CHAMPIONSHIP_DATE = '2026-04-29T16:00:00+03:00'

export const CONTACT_EMAIL = 'krono10935@gmail.com'

export const FACEBOOK_PAGE_URL =
  'https://www.facebook.com/p/Team-Krono-FRC-10935-61577963204710/'

export const GAME_MANUAL_URL =
  'https://www.firstinspires.org/resources/library/frc/season-materials'

export const GAME_ANIMATION_URL = 'https://www.youtube.com/watch?v=_fybREErgyM'
