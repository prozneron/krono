import { copyFileSync, mkdirSync } from 'node:fs'

const routes = ['about', 'first', 'sponsors', 'challenge']

copyFileSync('dist/index.html', 'dist/404.html')
console.log('Copied dist/index.html -> dist/404.html')

for (const route of routes) {
  copyFileSync('dist/index.html', `dist/${route}.html`)
  console.log(`Copied dist/index.html -> dist/${route}.html`)

  const dir = `dist/${route}`
  mkdirSync(dir, { recursive: true })
  copyFileSync('dist/index.html', `${dir}/index.html`)
  console.log(`Copied dist/index.html -> ${dir}/index.html`)
}
