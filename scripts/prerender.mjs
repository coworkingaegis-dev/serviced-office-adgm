// ---------------------------------------------------------------------------
// Build-time prerender for the one-page micro-site.
// Same approach as aegiscoworking.ae/scripts/prerender.mjs:
//   1. Render <App /> to static HTML with the SSR bundle
//   2. Inject Helmet's <title>, meta, canonical and JSON-LD into <head>
//   3. Make the CSS non-render-blocking
//   4. Regenerate sitemap.xml, robots.txt and stamp llms files with the date
// Runs automatically on every `npm run build` (and therefore every Vercel deploy).
// ---------------------------------------------------------------------------
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distDir = path.resolve(__dirname, '../dist')
const SITE_URL = 'https://servicedofficeadgm.online'
const today = new Date().toISOString().split('T')[0]

// ---- 1. Template: inline the CSS (one page = one stylesheet, so inlining
// removes a render-blocking round trip) and preload fonts + hero image ----
const assetsDir = path.join(distDir, 'assets')
let template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8')
template = template.replace(/<link rel="stylesheet" crossorigin href="\/assets\/([^"]+\.css)">/, (_, file) => {
  const css = fs.readFileSync(path.join(assetsDir, file), 'utf-8')
  return `<style>${css}</style>`
})

const assetList = fs.readdirSync(assetsDir)
const fontPreloads = ['fraunces-latin-wght-normal', 'plus-jakarta-sans-latin-wght-normal']
  .map((stem) => assetList.find((f) => f.startsWith(stem) && f.endsWith('.woff2')))
  .filter(Boolean)
  .map((f) => `<link rel="preload" as="font" type="font/woff2" href="/assets/${f}" crossorigin>`)
  .join('\n')
template = template.replace('</head>', `${fontPreloads}\n</head>`)

// Hero image filename (React 19 adds the <link rel=preload> for it
// automatically because the <img> has fetchPriority="high").
const heroFile = assetList.find((f) => f.startsWith('virtual-office-adgm-addax-tower') && !f.includes('-640') && f.endsWith('.webp'))

// ---- 2. Render the page ----
const { render } = await import(path.join(distDir, 'server/entry-server.js'))
const { html, helmet } = render()

if (!helmet) {
  console.warn('Warning: helmet context empty — <head> tags were not server-rendered.')
}

const headTags = helmet
  ? [helmet.title.toString(), helmet.meta.toString(), helmet.link.toString(), helmet.script.toString()].join('\n')
  : ''

// Helmet manages <html lang>; copy its attributes onto the real <html> tag.
const htmlAttrs = helmet ? helmet.htmlAttributes.toString() : ''

let page = template
  .replace('</head>', `${headTags}\n</head>`)
  .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
if (htmlAttrs) page = page.replace(/<html[^>]*>/, `<html ${htmlAttrs} dir="ltr">`)

fs.writeFileSync(path.join(distDir, 'index.html'), page)
console.log(`Prerendered / -> dist/index.html (${(page.length / 1024).toFixed(1)} KB)`)

// ---- 3. Real 404 page (noindex), so unknown URLs don't duplicate the homepage ----
const notFound = template
  .replace('</head>', `<title>Page not found | Virtual Office ADGM</title>\n<meta name="robots" content="noindex, follow">\n<link rel="canonical" href="${SITE_URL}/">\n</head>`)
  .replace(/<script type="module"[^>]*><\/script>/, '')
  .replace(
    '<div id="root"></div>',
    `<div id="root"><main style="min-height:100vh;display:grid;place-items:center;text-align:center;padding:24px;font-family:system-ui,sans-serif;background:#f7f5f0">
      <div><p style="color:#d94f3d;font-weight:700;letter-spacing:.1em">404</p>
      <h1 style="font-size:2rem;margin:8px 0 12px;color:#14231d">This page doesn't exist</h1>
      <p style="color:#5c5c5c;margin-bottom:24px">Looking for a virtual office or serviced office in ADGM?</p>
      <a href="/" style="display:inline-block;padding:14px 24px;border-radius:999px;background:#141a3a;color:#fff;text-decoration:none;font-weight:600">Back to Virtual &amp; Serviced Office in ADGM</a></div></main></div>`
  )
fs.writeFileSync(path.join(distDir, '404.html'), notFound)
console.log('Wrote dist/404.html')

// ---- 4. sitemap.xml (single page, regenerated with today's date) ----
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${SITE_URL}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>${heroFile ? `
    <image:image>
      <image:loc>${SITE_URL}/assets/${heroFile}</image:loc>
    </image:image>` : ''}
  </url>
</urlset>
`
fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml)
console.log('Wrote dist/sitemap.xml')

// ---- 5. robots.txt (always points at this subdomain's sitemap) ----
const robots = `User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-SearchBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Bingbot
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`
fs.writeFileSync(path.join(distDir, 'robots.txt'), robots)
console.log('Wrote dist/robots.txt')

// ---- 6. Stamp llms.txt / llms-full.txt with the build date ----
for (const file of ['llms.txt', 'llms-full.txt']) {
  const p = path.join(distDir, file)
  if (!fs.existsSync(p)) continue
  const txt = fs.readFileSync(p, 'utf8').replace(/Last Updated:?\s*\d{4}-\d{2}-\d{2}/g, `Last Updated: ${today}`)
  fs.writeFileSync(p, txt)
  console.log(`${file} dated ${today}`)
}

// The SSR bundle is only needed at build time — keep it out of the deploy.
fs.rmSync(path.join(distDir, 'server'), { recursive: true, force: true })
console.log('\nPrerender complete.')
