const urls = {
  home: 'https://prozneron.github.io/krono/',
  challenge: 'https://prozneron.github.io/krono/challenge.html',
  rawHome: 'https://raw.githubusercontent.com/prozneron/krono/gh-pages/index.html',
  rawChallenge: 'https://raw.githubusercontent.com/prozneron/krono/gh-pages/challenge.html',
}

for (const [name, url] of Object.entries(urls)) {
  const res = await fetch(url)
  const text = await res.text()
  const jsMatch = text.match(/index-[A-Za-z0-9_-]+\.js/)
  console.log(name, res.status, jsMatch?.[0] ?? 'no-js', text.includes('sessionStorage'))
}
