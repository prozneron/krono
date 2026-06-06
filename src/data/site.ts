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
    logo: `${import.meta.env.BASE_URL}sponsors/kiryat-ono.png`,
  },
  {
    name: 'Shivrug',
    nameHe: 'שיברוג',
    link: 'https://www.shivrug.co.il',
    logo: `${import.meta.env.BASE_URL}sponsors/shivrug.png`,
  },
  {
    name: 'M.P. Tzameret Center Ltd.',
    nameHe: 'מ.פ מרכז הצנרת בע"מ',
    link: '#',
  },
  {
    name: 'Ben Tzvi School',
    nameHe: 'בית הספר בן צביה',
    link: 'https://benzvijh.co.il/',
    logo: `${import.meta.env.BASE_URL}sponsors/ben-tzvi.png`,
  },
  {
    name: 'Hatal & Technology Unit',
    nameHe: 'חט"ל והיחידה הטכנולוגית',
    link: 'https://he.wikipedia.org/wiki/%D7%97%D7%98%D7%99%D7%91%D7%94_%D7%98%D7%9B%D7%9C%D7%95%D7%92%D7%99%D7%AA_%D7%9C%D7%99%D7%91%D7%A9%D7%94',
    logo: `${import.meta.env.BASE_URL}sponsors/hatal.png`,
  },
  {
    name: 'Katzir High School',
    nameHe: 'תיכון קציר',
    link: 'https://katzir.org.il/',
    logo: `${import.meta.env.BASE_URL}sponsors/katzir.png`,
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
  options: { hideCover?: boolean; showFacepile?: boolean; smallHeader?: boolean } = {},
) {
  const { hideCover = true, showFacepile = false, smallHeader = true } = options
  const params = new URLSearchParams({
    href: FACEBOOK_PAGE_URL,
    tabs,
    width: '500',
    height: String(height),
    small_header: String(smallHeader),
    adapt_container_width: 'true',
    hide_cover: String(hideCover),
    show_facepile: String(showFacepile),
    locale: 'en_US',
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

export interface FacebookPost {
  type: 'photo' | 'video'
  src: string
  caption: string
  captionHe: string
}

export const facebookPosts: FacebookPost[] = [
  {
    type: 'photo',
    src: `${import.meta.env.BASE_URL}team/photo-1.jpg`,
    caption: 'Team Krono out in the community — inspiring the next generation of engineers! 🤖',
    captionHe: 'קבוצת Krono בקהילה — מעוררים השראה בדור המהנדסים הבא! 🤖',
  },
  {
    type: 'video',
    src: `${import.meta.env.BASE_URL}team/video-1.mp4`,
    caption: 'Check out our latest video from the season!',
    captionHe: 'צפו בסרטון האחרון שלנו מהעונה!',
  },
  {
    type: 'photo',
    src: `${import.meta.env.BASE_URL}team/photo-3.jpg`,
    caption: 'Building, coding, and competing — this is Krono. #FRC10935',
    captionHe: 'בונים, מתכנתים ומתחרים — זה Krono. #FRC10935',
  },
  {
    type: 'photo',
    src: `${import.meta.env.BASE_URL}team/photo-4.jpg`,
    caption: '#1 Rookie Team in the World 2025. The journey continues!',
    captionHe: 'קבוצת Rookie מס\' 1 בעולם 2025. המסע ממשיך!',
  },
]
