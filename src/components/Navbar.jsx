import { useEffect, useRef, useState } from 'react'
import aegisLogo from '../assets/aegis-logo-96.png'
import { BUSINESS } from '../data/content'

// Header and footer stay on this page: links jump to sections, "Book" opens WhatsApp,
// and the phone number opens WhatsApp on desktop or the dialer on mobile.
export const sections = [
  { label: 'Packages', to: '#packages' },
  { label: 'ADGM Address', to: '#address' },
  { label: 'Mail Handling', to: '#mail' },
  { label: 'Serviced Office', to: '#serviced' },
  { label: 'Compare', to: '#compare' },
  { label: 'FAQ', to: '#faq' }
]

export const BOOK_URL = `${BUSINESS.whatsapp}?text=${encodeURIComponent('Hi Aegis, I would like to book a visit.')}`

const track = (event) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', event, { phone_number: BUSINESS.phoneDisplay, source: 'servicedofficeadgm' })
  }
}

// Desktop (mouse/trackpad) → WhatsApp; phone/tablet (touch) → call
export function PhoneLink({ children, onClick, ...rest }) {
  const handle = (e) => {
    const desktop = typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (desktop) {
      e.preventDefault()
      track('whatsapp_click')
      window.open(BUSINESS.whatsapp, '_blank', 'noopener,noreferrer')
    } else {
      track('phone_call_click')
    }
    if (onClick) onClick(e)
  }
  return <a href={BUSINESS.phoneTel} onClick={handle} {...rest}>{children}</a>
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('menu-locked', open)
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  const close = () => setOpen(false)
  const t = open ? 0 : -1

  return (
    <header className={`hd ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`} ref={ref}>
      <div className="hd-bar">
        <a href="#top" className="hd-brand" onClick={close}>
          <img src={aegisLogo} alt="" width="96" height="96" decoding="async" />
          <span>Aegis{' '}<b>Coworking</b></span>
        </a>

        <nav className="hd-nav" aria-label="On this page">
          <ul>
            {sections.map((s) => <li key={s.to}><a href={s.to}>{s.label}</a></li>)}
          </ul>
        </nav>

        <div className="hd-actions">
          <PhoneLink className="hd-phone">{BUSINESS.phoneDisplay}</PhoneLink>
          <a className="hd-cta" href={BOOK_URL} target="_blank" rel="noopener noreferrer">Book a visit</a>
          <button type="button" className="hd-burger" aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open} aria-controls="hd-sheet" onClick={() => setOpen(!open)}>
            <span /><span /><span />
          </button>
        </div>
      </div>

      <div className="hd-sheet" id="hd-sheet" aria-hidden={!open}>
        <nav aria-label="On this page (mobile)">
          {sections.map((s, i) => (
            <a key={s.to} className="hs-link" style={{ '--n': i }} href={s.to} onClick={close} tabIndex={t}>{s.label}</a>
          ))}
        </nav>
        <div className="hs-foot">
          <a className="hs-btn hs-btn-solid" href={BOOK_URL} target="_blank" rel="noopener noreferrer" onClick={close} tabIndex={t}>Book a visit on WhatsApp</a>
          <div className="hs-row">
            <PhoneLink className="hs-btn" tabIndex={t}>Call</PhoneLink>
            <a className="hs-btn" href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer" tabIndex={t}>WhatsApp</a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
