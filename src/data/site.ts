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
  'https://www.facebook.com/people/Team-Krono-FRC-10935/61577963204710/'

export function facebookEmbed(
  tabs: string,
  height = 500,
  options: { hideCover?: boolean; showFacepile?: boolean } = {},
) {
  const { hideCover = true, showFacepile = false } = options
  const params = new URLSearchParams({
    href: FACEBOOK_PAGE_URL,
    tabs,
    width: '500',
    height: String(height),
    small_header: 'true',
    adapt_container_width: 'true',
    hide_cover: String(hideCover),
    show_facepile: String(showFacepile),
  })
  return `https://www.facebook.com/plugins/page.php?${params}`
}

export const GAME_MANUAL_URL =
  'https://www.firstinspires.org/resources/library/frc/season-materials'

export const GAME_ANIMATION_URL = 'https://www.youtube.com/watch?v=_fybREErgyM'

export interface TeamMedia {
  src: string
  alt: string
  altHe: string
}

export const teamPhotos: TeamMedia[] = [
  {
    src: `${import.meta.env.BASE_URL}team/photo-1.jpg`,
    alt: 'Team Krono at an event',
    altHe: 'קבוצת Krono באירוע',
  },
  {
    src: `${import.meta.env.BASE_URL}team/photo-3.jpg`,
    alt: 'Team Krono robotics',
    altHe: 'רובוטיקה Krono',
  },
  {
    src: `${import.meta.env.BASE_URL}team/photo-4.jpg`,
    alt: 'Team Krono in action',
    altHe: 'קבוצת Krono בפעולה',
  },
]

export const teamVideos: TeamMedia[] = [
  {
    src: `${import.meta.env.BASE_URL}team/video-1.mp4`,
    alt: 'Team Krono video from Facebook',
    altHe: 'סרטון קבוצת Krono מפייסבוק',
  },
]
