import { copyFileSync } from 'node:fs'

// GitHub Pages serves 404.html for unknown routes. It must be the full app
// so React Router can handle paths like /krono/challenge.
copyFileSync('dist/index.html', 'dist/404.html')
console.log('Copied dist/index.html -> dist/404.html')
