import { writeFileSync } from 'node:fs'

const url =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/240px-Apple_logo_black.svg.png'

const res = await fetch(url, {
  headers: { 'User-Agent': 'KronoWebsite/1.0 (sponsor logo fetch)' },
})

if (!res.ok) throw new Error(`Apple logo fetch failed: ${res.status}`)

const buf = Buffer.from(await res.arrayBuffer())
if (buf[0] !== 0x89 || buf[1] !== 0x50) throw new Error('Apple logo is not a valid PNG')

writeFileSync('public/sponsors/apple.png', buf)
console.log('Saved apple.png', buf.length, 'bytes')
