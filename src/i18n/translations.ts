export type Lang = 'en' | 'he'

export interface Translations {
  nav: {
    home: string
    about: string
    first: string
    sponsors: string
    challenge: string
    hebrew: string
    english: string
  }
  footer: {
    rights: string
    followUs: string
  }
  home: {
    title: string
    location: string
    description: string
    badge: string
    gallery: string
    photos: string
    videos: string
    facebookFeed: string
  }
  about: {
    title: string
    ourStory: string
    storyP1: string
    storyP2: string
    storyP3: string
    teamPhotos: string
    videos: string
    viewOnFacebook: string
    contact: string
    name: string
    email: string
    message: string
    send: string
    sending: string
    success: string
    error: string
  }
  first: {
    title: string
    subtitle: string
    fllExplore: string
    fll: string
    ftc: string
    frc: string
    quote: string
    quoteAuthor: string
    aboutP1: string
    aboutP2: string
  }
  challenge: {
    title: string
    gameName: string
    gameDesc: string
    countdown: string
    days: string
    hours: string
    minutes: string
    seconds: string
    manual: string
    manualDesc: string
    upload: string
    download: string
    noFile: string
    watchAnimation: string
    eventStarted: string
    eventStartedSub: string
  }
  sponsors: {
    title: string
    subtitle: string
    visit: string
  }
}

export const en: Translations = {
  nav: {
    home: 'Home',
    about: 'About Us',
    first: 'FIRST',
    sponsors: 'Sponsors',
    challenge: 'Challenge',
    hebrew: 'עברית',
    english: 'English',
  },
  footer: {
    rights: '© 2026 Team Krono FRC 10935. All rights reserved.',
    followUs: 'Follow Us',
  },
  home: {
    title: 'KRONO',
    location: 'Kiryat Ono, Israel',
    description:
      'An amazing team from Kiryat Ono competing in the FIRST Robotics Competition — crowned the #1 Rookie Team in the World for 2025.',
    badge: '#1 Rookie Team — World 2025',
    gallery: 'Team Highlights',
    photos: 'Photos',
    videos: 'Videos',
    facebookFeed: 'Latest from Facebook',
  },
  about: {
    title: 'About Us',
    ourStory: 'Our Story',
    storyP1:
      'From the moment we joined FIRST Robotics Competition, Team Krono hit the ground running. We didn\'t wait for permission to be seen — we showed up everywhere.',
    storyP2:
      'Malls, schools, community events, and local tech fairs became our stage. We brought our robot, our passion, and our story to anyone who would listen — inspiring the next generation of engineers, programmers, and innovators in Kiryat Ono and beyond.',
    storyP3:
      'What started as a rookie team quickly became a force to be reckoned with. Our dedication, creativity, and relentless drive earned us the title of #1 Rookie Team in the World for 2025 — but for us, that\'s just the beginning.',
    teamPhotos: 'Photos',
    videos: 'Videos',
    viewOnFacebook: 'See more on Facebook',
    contact: 'Contact Us',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    send: 'Send Message',
    sending: 'Sending...',
    success: 'Message sent successfully! We\'ll get back to you soon.',
    error: 'Failed to send message. Please try again or email us directly.',
  },
  first: {
    title: 'FIRST',
    subtitle: 'For Inspiration and Recognition of Science and Technology',
    fllExplore:
      'FIRST® LEGO® League Explore challenges teams of children to explore a scientific concept, then build a model and code it to make it move using LEGO® Education WeDo 2.0.',
    fll: 'FIRST® LEGO® League gives students the chance to develop, design, build, and code LEGO® MINDSTORMS® robots to perform autonomous "missions" on a themed playing field and design innovative solutions to a real-world problem inspired by the theme.',
    ftc: 'Starting in September, FIRST® Tech Challenge teams of up to 15 students explore the possibilities of STEM through designing, building, programming, and operating robots to play a competition challenge in an alliance format.',
    frc: 'With limited time and resources, teams of students, supported by adult mentors, build and program robots to perform challenging tasks in alliance with other teams in the FIRST® Robotics Competition.',
    quote:
      '"To transform our culture by creating a world where science and technology are celebrated and where young people dream of becoming science and technology leaders."',
    quoteAuthor: 'Dean Kamen, Founder',
    aboutP1:
      'FIRST (For Inspiration and Recognition of Science and Technology) was founded in 1989 to inspire young people\'s interest and participation in science and technology. FIRST is a not-for-profit public charity that designs accessible, innovative programs that motivate young people to pursue education and career opportunities in science, technology, engineering, and math, while building self-confidence, knowledge, and life skills.',
    aboutP2:
      'FIRST is More Than Robots. FIRST participation is proven to encourage students to pursue education and careers in STEAM-related fields, inspire them to become leaders and innovators, and enhance their 21st century work-life skills.',
  },
  challenge: {
    title: '2026 Challenge',
    gameName: 'REBUILT™ presented by Haas',
    gameDesc:
      'The 2026 FIRST Robotics Competition game REBUILT challenges alliances to score by manipulating game pieces on a dynamic field. Teams must strategize across autonomous and teleoperated periods, working together to rebuild and dominate the competition.',
    countdown: 'Countdown to June 28, 2026',
    days: 'Days',
    hours: 'Hours',
    minutes: 'Minutes',
    seconds: 'Seconds',
    manual: 'Game Manual',
    manualDesc:
      'Download the official 2026 FRC Game Manual for REBUILT. Upload your team\'s annotated copy below.',
    upload: 'Upload Challenge Book',
    download: 'Download Manual',
    noFile: 'No file uploaded yet',
    watchAnimation: 'Watch Game Animation',
    eventStarted: 'Competition day is here!',
    eventStartedSub: 'Good luck to all teams competing today.',
  },
  sponsors: {
    title: 'Our Sponsors',
    subtitle: 'Team Krono is proud to be supported by these incredible partners',
    visit: 'Visit Website',
  },
}

export const he: Translations = {
  nav: {
    home: 'בית',
    about: 'אודותינו',
    first: 'FIRST',
    sponsors: 'נותני חסות',
    challenge: 'אתגר',
    hebrew: 'עברית',
    english: 'English',
  },
  footer: {
    rights: '© 2026 קבוצת Krono FRC 10935. כל הזכויות שמורות.',
    followUs: 'עקבו אחרינו',
  },
  home: {
    title: 'KRONO',
    location: 'קריית אונו, ישראל',
    description:
      'קבוצה מדהימה מקריית אונו המתחרה בתחרות FIRST Robotics — זכתה בתואר קבוצת Rookie מס\' 1 בעולם לשנת 2025.',
    badge: 'קבוצת Rookie מס\' 1 — עולם 2025',
    gallery: 'רגעים מהקבוצה',
    photos: 'תמונות',
    videos: 'סרטונים',
    facebookFeed: 'עדכונים מפייסבוק',
  },
  about: {
    title: 'אודותינו',
    ourStory: 'הסיפור שלנו',
    storyP1:
      'ברגע שהצטרפנו לתחרות FIRST Robotics, קבוצת Krono יצאה לדרך. לא חיכינו לרשות — הופענו בכל מקום.',
    storyP2:
      'קניונים, בתי ספר, אירועי קהילה וירידי טכנולוגיה הפכו לבמה שלנו. הבאנו את הרובוט, התשוקה והסיפור שלנו לכל מי שרצה לשמוע — והשראנו את דור המהנדסים, המתכנתים והחדשנים הבאים בקריית אונו ומעבר לה.',
    storyP3:
      'מה שהתחיל כקבוצת Rookie הפך במהירות לכוח שאי אפשר להתעלם ממנו. המסירות, היצירתיות והנחישות שלנו זיכו אותנו בתואר קבוצת Rookie מס\' 1 בעולם לשנת 2025 — אבל بالنسبה לנו, זו רק ההתחלה.',
    teamPhotos: 'תמונות',
    videos: 'סרטונים',
    viewOnFacebook: 'עוד תמונות בפייסבוק',
    contact: 'צור קשר',
    name: 'שם',
    email: 'אימייל',
    message: 'הודעה',
    send: 'שלח הודעה',
    sending: 'שולח...',
    success: 'ההודעה נשלחה בהצלחה! נחזור אליך בקרוב.',
    error: 'שליחת ההודעה נכשלה. נסה שוב או שלח אימייל ישירות.',
  },
  first: {
    title: 'FIRST',
    subtitle: 'For Inspiration and Recognition of Science and Technology',
    fllExplore:
      'FIRST® LEGO® League Explore מאתגר קבוצות של ילדים לחקור מושג מדעי, לבנות מודל ולתכנת אותו כך שיזוז באמצעות LEGO® Education WeDo 2.0.',
    fll: 'FIRST® LEGO® League נותן לתלמידים הזדמנות לפתח, לעצב, לבנות ולתכנת רובוטי LEGO® MINDSTORMS® לביצוע "משימות" אוטונומיות על מגרש משחק בעל נושא, ולעצב פתרונות חדשניים לבעיה מהעולם האמיתי.',
    ftc: 'מספטמבר, קבוצות FIRST® Tech Challenge של עד 15 תלמידים חוקרות את האפשרויות של STEM דרך עיצוב, בנייה, תכנות והפעלת רובוטים במשחק תחרותי בפורמט ברית.',
    frc: 'בזמן ומשאבים מוגבלים, קבוצות של תלמידים, בליווי מנטורים מבוגרים, בונות ומתכנתות רובוטים לביצוע משימות מאתגרות בברית עם קבוצות אחרות בתחרות FIRST® Robotics.',
    quote:
      '"לשנות את התרבות שלנו על ידי יצירת עולם שבו מדע וטכנולוגיה נחגגים, וצעירים חולמים להיות מנהיגי מדע וטכנולוגיה."',
    quoteAuthor: 'Dean Kamen, מייסד',
    aboutP1:
      'FIRST (For Inspiration and Recognition of Science and Technology) נוסד ב-1989 כדי לעורר עניין והשתתפות של צעירים במדע וטכנולוגיה. FIRST הוא ארגון צדקה ציבורי ללא מטרות רווח שמעצב תוכניות חדשניות ונגישות.',
    aboutP2:
      'FIRST הוא יותר מרובוטים. השתתפות ב-FIRST מעודדת תלמידים לרדוף אחרי השכלה וקריירות בתחומי STEAM, מעוררת השראה להיות מנהיגים וחדשנים, ומשפרת מיומנויות עבודה של המאה ה-21.',
  },
  challenge: {
    title: 'אתגר 2026',
    gameName: 'REBUILT™ presented by Haas',
    gameDesc:
      'משחק FIRST Robotics 2026 REBUILT מאתגר בריתות לצבור נקודות על ידי מנipulation של חלקי משחק על מגרש דינמי. הקבוצות חייבות לתכנן אסטרטגיה בתקופות אוטונומיות וטל-אופ, ולעבוד יחד כדי לנצח בתחרות.',
    countdown: 'ספירה לאחור ל-28 ביוני 2026',
    days: 'ימים',
    hours: 'שעות',
    minutes: 'דקות',
    seconds: 'שניות',
    manual: 'ספר משחק',
    manualDesc:
      'הורד את ספר המשחק הרשמי של FRC 2026 ל-REBUILT. העלה את העותק המסומן של הקבוצה למטה.',
    upload: 'העלאת ספר האתגר',
    download: 'הורדת ספר משחק',
    noFile: 'טרם הועלה קובץ',
    watchAnimation: 'צפייה באנימציית המשחק',
    eventStarted: 'יום התחרות הגיע!',
    eventStartedSub: 'בהצלחה לכל הקבוצות המתחרות היום.',
  },
  sponsors: {
    title: 'נותני החסות שלנו',
    subtitle: 'קבוצת Krono גאה להיות נתמכת על ידי השותפים המדהימים האלה',
    visit: 'לאתר',
  },
}

export const translations = { en, he }
