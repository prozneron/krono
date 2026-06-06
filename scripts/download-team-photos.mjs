import { writeFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'

const PAGE = 'https://www.facebook.com/people/Team-Krono-FRC-10935/61577963204710/'
const headers = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/122',
  'Accept-Language': 'en-US,en;q=0.9',
  Accept: 'text/html',
}

async function fetchHtml(url) {
  const html = await fetch(url, { headers, redirect: 'follow' }).then((r) => r.text())
  return html.replace(/&amp;/g, '&').replace(/\\u0025/g, '%').replace(/\\\//g, '/')
}

function extractImageUrls(html) {
  const urls = new Set()
  for (const m of html.matchAll(/https:\/\/scontent[^"'\s\\<>]+\.(?:jpg|jpeg|png|webp)[^"'\s\\<>]*/g)) {
    urls.add(m[0])
  }
  for (const m of html.matchAll(/scontent[\w.-]+\/v\/[^"'\s\\]+\.(?:jpg|jpeg|png|webp)[^"'\s\\]*/g)) {
    urls.add('https://' + m[0])
  }
  return [...urls]
}

function extractVideoUrls(html) {
  const urls = new Set()
  for (const m of html.matchAll(/https:\/\/video[^"'\s\\<>]+\.mp4[^"'\s\\<>]*/g)) {
    urls.add(m[0])
  }
  return [...urls]
}

function isProfileOrLogo(url) {
  if (url.includes('/t39.30808-1/')) return true
  if (url.includes('/t1.30497-1/84628273_')) return true
  if (url.includes('/t39.30808-6/')) return true
  if (url.includes('s200x200') || url.includes('p130x130') || url.includes('_s320x')) return true
  if (url.includes('stp=c379.0.1290.1290')) return true
  return false
}

function scoreImage(url) {
  let score = 0
  if (url.includes('/t51.82787-10/')) score += 20
  if (url.includes('/t51.82787-15/')) score += 18
  if (url.includes('/t39.30808-6/')) score += 15
  if (url.includes('/t39.30808-16/')) score += 12
  if (url.includes('821x') || url.includes('960x') || url.includes('1080')) score += 8
  if (url.includes('720')) score += 5
  if (url.includes('stp=dst-jpg') || url.includes('stp=dst-png')) score += 6
  if (url.includes('_s320x') || url.includes('p320x320')) score -= 10
  if (isProfileOrLogo(url)) score -= 100
  return score
}

function scoreVideo(url) {
  let score = 0
  if (url.includes('720p')) score += 10
  if (url.includes('640')) score += 5
  if (url.includes('360p')) score += 2
  if (url.includes('bitrate=2243103')) score += 8
  return score
}

function uniqueByAssetId(urls) {
  const byId = new Map()
  for (const url of urls) {
    const id = url.match(/\/(\d+_\d+_\d+_n)/)?.[1] ?? url.split('?')[0]
    const prev = byId.get(id)
    if (!prev || scoreImage(url) > scoreImage(prev)) byId.set(id, url)
  }
  return [...byId.values()]
}

const sources = [PAGE, 'https://m.facebook.com/people/Team-Krono-FRC-10935/61577963204710/']
const allImages = new Set()
const allVideos = new Set()

for (const source of sources) {
  try {
    const html = await fetchHtml(source)
    for (const url of extractImageUrls(html)) allImages.add(url)
    for (const url of extractVideoUrls(html)) allVideos.add(url)
  } catch (e) {
    console.error('Failed', source, e.message)
  }
}

const images = uniqueByAssetId([...allImages])
  .filter((url) => !isProfileOrLogo(url))
  .sort((a, b) => scoreImage(b) - scoreImage(a))

const videos = [...allVideos].sort((a, b) => scoreVideo(b) - scoreVideo(a))

console.log('Raw images:', allImages.size, 'Filtered:', images.length)
images.slice(0, 6).forEach((u, i) => console.log(' img', i, scoreImage(u), u.slice(0, 100)))
console.log('Candidate videos:', videos.length)
videos.slice(0, 3).forEach((u, i) => console.log(' vid', i, u.slice(0, 100)))

mkdirSync('public/team', { recursive: true })

let savedImages = 0
for (const url of images) {
  if (savedImages >= 4) break
  const res = await fetch(url, { headers: { ...headers, Referer: 'https://www.facebook.com/' } })
  if (!res.ok) {
    console.log('skip image', res.status)
    continue
  }
  const buf = Buffer.from(await res.arrayBuffer())
  if (buf.length < 10000) {
    console.log('skip small image', buf.length)
    continue
  }
  savedImages++
  const ext = url.includes('.png') ? 'png' : 'jpg'
  writeFileSync(join('public/team', `photo-${savedImages}.${ext}`), buf)
  console.log('Saved photo-' + savedImages + '.' + ext, buf.length)
}

let savedVideos = 0
for (const url of videos) {
  if (savedVideos >= 1) break
  const res = await fetch(url, { headers: { ...headers, Referer: 'https://www.facebook.com/' } })
  if (!res.ok) {
    console.log('skip video', res.status)
    continue
  }
  const buf = Buffer.from(await res.arrayBuffer())
  if (buf.length < 50000) {
    console.log('skip small video', buf.length)
    continue
  }
  savedVideos++
  writeFileSync(join('public/team', `video-${savedVideos}.mp4`), buf)
  console.log('Saved video-' + savedVideos + '.mp4', buf.length)
}

console.log('Done.', savedImages, 'photos,', savedVideos, 'videos')
