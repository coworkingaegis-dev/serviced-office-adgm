import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.jsx'

if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual'
}

const rootElement = document.getElementById('root')
const app = (
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>
)

// Prerendered HTML is hydrated; the dev server renders from scratch.
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app)
} else {
  createRoot(rootElement).render(app)
}

// Google Analytics (same GA4 property as aegiscoworking.ae), loaded after
// the page is idle so it never blocks first paint.
const loadAnalytics = () => {
  const s = document.createElement('script')
  s.async = true
  s.src = 'https://www.googletagmanager.com/gtag/js?id=G-8HBJXY181K'
  document.head.appendChild(s)
  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() { window.dataLayer.push(arguments) }
  window.gtag('js', new Date())
  window.gtag('config', 'G-8HBJXY181K')
}
if ('requestIdleCallback' in window) requestIdleCallback(loadAnalytics, { timeout: 4000 })
else setTimeout(loadAnalytics, 2500)
