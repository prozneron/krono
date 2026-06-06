# Team Krono — FRC 10935

Official website for Team Krono, the #1 Rookie FRC team in the world (2025) from Kiryat Ono, Israel.

**Live site:** [prozneron.github.io/krono](https://prozneron.github.io/krono)

## Features

- Dark maroon theme matching team branding
- Orbitron + Montserrat typography
- Fully responsive layout
- English / Hebrew language toggle
- Pages: Home, About Us, FIRST, Sponsors, Challenge
- Facebook page embed
- FRC 2026 REBUILT challenge info with countdown
- Contact form (sends to krono10935@gmail.com)

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173/krono/](http://localhost:5173/krono/)

## Deploy to GitHub Pages

The site deploys automatically on every push to `main` via GitHub Actions.

1. Repo: [github.com/prozneron/krono](https://github.com/prozneron/krono)
2. Go to **Settings → Pages → Build and deployment**
3. Set **Source** to **GitHub Actions** (not "Deploy from branch")
4. Push to `main` — the workflow publishes the built site

Live URL: [prozneron.github.io/krono](https://prozneron.github.io/krono)

## Contact Form

The contact form uses [FormSubmit](https://formsubmit.co) to deliver messages to `krono10935@gmail.com`. On the **first submission**, FormSubmit sends a confirmation email to that address — click the link to activate the form.

## Customization

- **Sponsors:** Edit `src/data/site.ts`
- **Countdown date:** Change `CHAMPIONSHIP_DATE` in `src/data/site.ts`
- **Contact email:** Change `CONTACT_EMAIL` in `src/data/site.ts`
- **Translations:** Edit `src/i18n/translations.ts`
