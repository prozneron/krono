import { writeFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'

const PAGE = 'https://www.facebook.com/people/Team-Krono-FRC-10935/61577963204710/'
const headers = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/122',
  'Accept-Language': 'en-US,en;q=0.9',
}

const html = (await fetch(PAGE, { headers }).then((r) => r.text())).replace(/&amp;/g, '&')

const matches = html.match(/scontent[\w.-]+\/v\/[^"'\s]+\.jpg[^"'\s]*/g) ?? []
const urls = [...new Set(matches.map((u) => 'https://' + u))]

console.log('Found', urls.length, 'images')

mkdirSync('public/team', { recursive: true })

let i = 0
for (const url of urls) {
  if (i >= 3) break
  const imgRes = await fetch(url, {
    headers: { ...headers, Referer: 'https://www.facebook.com/' },
  })
  if (!imgRes.ok) continue
  const buf = Buffer.from(await imgRes.arrayBuffer())
  if (buf.length < 8000) continue
  i++
  writeFileSync(join('public/team', `team-${i}.jpg`), buf)
  console.log('Saved team-' + i + '.jpg', buf.length)
}

console.log('Done. Saved', i, 'files')
