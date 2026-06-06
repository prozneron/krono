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

// June 28 — 12:00 Israel time (UTC+3). Update year when the next competition is scheduled.
export const CHAMPIONSHIP_DATE = '2026-06-28T09:00:00.000Z'

export const CONTACT_EMAIL = 'krono10935@gmail.com'

export const FACEBOOK_PAGE_URL =
  'https://www.facebook.com/p/Team-Krono-FRC-10935-61577963204710/'

export const GAME_MANUAL_URL =
  'https://www.firstinspires.org/resources/library/frc/season-materials'

export const GAME_ANIMATION_URL = 'https://www.youtube.com/watch?v=_fybREErgyM'

export interface TeamPhoto {
  src: string
  alt: string
  altHe: string
}

export const teamPhotos: TeamPhoto[] = [
  {
    src: `${import.meta.env.BASE_URL}team/team-1.jpg`,
    alt: 'Team Krono at competition',
    altHe: 'קבוצת Krono בתחרות',
  },
  {
    src: `${import.meta.env.BASE_URL}team/team-2.jpg`,
    alt: 'Team Krono building the robot',
    altHe: 'קבוצת Krono בונה את הרובוט',
  },
  {
    src: `${import.meta.env.BASE_URL}team/team-3.jpg`,
    alt: 'Team Krono at a community event',
    altHe: 'קבוצת Krono באירוע קהילתי',
  },
]
