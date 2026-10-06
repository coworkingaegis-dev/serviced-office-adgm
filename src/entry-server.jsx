import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'

// Used only at build time by scripts/prerender.mjs to bake the full page
// (content + <head> tags + JSON-LD) into dist/index.html for crawlers.
export function render() {
  const helmetContext = {}
  const html = renderToString(
    <StrictMode>
      <HelmetProvider context={helmetContext}>
        <App />
      </HelmetProvider>
    </StrictMode>
  )
  return { html, helmet: helmetContext.helmet }
}
