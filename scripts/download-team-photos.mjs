import { writeFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'

const PAGE = 'https://www.facebook.com/p/Team-Krono-FRC-10935-61577963204710/'
const headers = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/122',
  'Accept-Language': 'en-US,en;q=0.9',
}

async function fetchHtml(url) {
  const html = await fetch(url, { headers }).then((r) => r.text())
  return html.replace(/&amp;/g, '&')
}

function extractImageUrls(html) {
  const urls = new Set()

  for (const m of html.matchAll(/scontent[\w.-]+\/v\/[^"'\s\\]+\.(?:jpg|jpeg|png|webp)[^"'\s\\]*/g)) {
    urls.add('https://' + m[0])
  }

  for (const m of html.matchAll(/"(https:\\\/\\\/scontent[^"]+\.(?:jpg|jpeg|png|webp)[^"]*)"/g)) {
    urls.add(m[1].replace(/\\\//g, '/'))
  }

  return [...urls].sort((a, b) => scoreUrl(b) - scoreUrl(a))
}

function scoreUrl(url) {
  let score = 0
  if (url.includes('720') || url.includes('1080') || url.includes('960')) score += 5
  if (url.includes('480')) score += 2
  if (url.includes('200x200') || url.includes('s200x200') || url.includes('p130x130')) score -= 5
  if (url.includes('/t39.30808-6/') || url.includes('/t39.30808-16/')) score += 3
  if (url.includes('/t39.30808-1/')) score -= 1
  return score
}

function uniqueByImageId(urls) {
  const seen = new Set()
  const result = []
  for (const url of urls) {
    const id = url.match(/(\d+_\d+_\d+_n)/)?.[1] ?? url
    if (seen.has(id)) continue
    seen.add(id)
    result.push(url)
  }
  return result
}

const pages = [PAGE, PAGE + 'photos', PAGE + 'photos_albums']

const allUrls = new Set()
for (const page of pages) {
  try {
    const html = await fetchHtml(page)
    for (const url of extractImageUrls(html)) allUrls.add(url)
  } catch (e) {
    console.error('Failed', page, e.message)
  }
}

const urls = uniqueByImageId([...allUrls])
console.log('Found', urls.length, 'unique images')
urls.slice(0, 6).forEach((u, i) => console.log(i, u.slice(0, 100)))

mkdirSync('public/team', { recursive: true })

let i = 0
for (const url of urls) {
  if (i >= 3) break
  const imgRes = await fetch(url, {
    headers: { ...headers, Referer: 'https://www.facebook.com/' },
  })
  if (!imgRes.ok) {
    console.log('skip', imgRes.status)
    continue
  }
  const buf = Buffer.from(await imgRes.arrayBuffer())
  if (buf.length < 12000) {
    console.log('skip small', buf.length)
    continue
  }
  i++
  writeFileSync(join('public/team', `team-${i}.jpg`), buf)
  console.log('Saved team-' + i + '.jpg', buf.length)
}

console.log('Done. Saved', i, 'files')
