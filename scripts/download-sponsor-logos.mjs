import { writeFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'

const headers = { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/122' }

async function save(url, name) {
  const res = await fetch(url, { headers, redirect: 'follow' })
  if (!res.ok) throw new Error(`${res.status}`)
  const buf = Buffer.from(await res.arrayBuffer())
  if (buf.length < 300) throw new Error(`small ${buf.length}`)
  const isPng = buf[0] === 0x89 && buf[1] === 0x50
  const isSvg = buf.slice(0, 4).toString().includes('svg') || buf.slice(0, 5).toString().includes('<?xml')
  if (url.includes('.png') && !isPng) throw new Error('not a png')
  if (url.includes('.svg') && !isSvg) throw new Error('not a svg')
  const ext = url.match(/\.(svg|png|jpe?g|webp)/i)?.[1]?.toLowerCase() ?? 'png'
  writeFileSync(join('public/sponsors', `${name}.${ext}`), buf)
  console.log('OK', name, buf.length)
}

mkdirSync('public/sponsors', { recursive: true })

const logos = [
  ['apple', 'https://upload.wikimedia.org/wikipedia/commons/3/31/Apple_logo_white.svg'],
  ['etro', 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Etro_logo.svg/320px-Etro_logo.svg.png'],
  ['kiryat-ono', 'https://k-ono.co.il/wp-content/uploads/2025/06/logo.png'],
  ['shivrug', 'https://shivrug.co.il/wp-content/uploads/2021/03/logo.png'],
  ['ben-tzvi', 'https://benzvijh.co.il/wp-content/uploads/2017/11/logoSite.png'],
  ['katzir', 'https://katzir.org.il/wp-content/uploads/2018/06/logoHigh.png'],
  ['hatal', 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Hatal.png'],
]

for (const [name, url] of logos) {
  try {
    await save(url, name)
  } catch (e) {
    console.log('FAIL', name, url, e.message)
  }
}

// Shivrug fallback — scrape site header
try {
  const html = await fetch('https://www.shivrug.co.il/', { headers }).then((r) => r.text())
  const m = html.match(/src="(https:\/\/shivrug\.co\.il\/wp-content\/uploads\/[^"]+\.(?:png|jpg|svg))"/i)
  if (m) await save(m[1], 'shivrug')
} catch (e) {
  console.log('shivrug scrape fail', e.message)
}

// Etro fallback — scrape homepage
try {
  const html = await fetch('https://www.etro.com/us-en/', { headers: { ...headers, Accept: 'text/html' } }).then((r) => r.text())
  const m = html.match(/src="([^"]*logo[^"]*\.(?:png|svg))"/i)
  if (m) {
    const url = m[1].startsWith('http') ? m[1] : `https://www.etro.com${m[1]}`
    await save(url, 'etro')
  }
} catch (e) {
  console.log('etro scrape fail', e.message)
}

console.log('done')
