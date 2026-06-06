import { copyFileSync, mkdirSync } from 'node:fs'

const routes = ['', 'about', 'first', 'sponsors', 'challenge']

for (const route of routes) {
  if (route === '') {
    copyFileSync('dist/index.html', 'dist/404.html')
    console.log('Copied dist/index.html -> dist/404.html')
    continue
  }

  const dir = `dist/${route}`
  mkdirSync(dir, { recursive: true })
  copyFileSync('dist/index.html', `${dir}/index.html`)
  console.log(`Copied dist/index.html -> ${dir}/index.html`)
}
