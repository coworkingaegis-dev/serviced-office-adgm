import { useEffect, useRef, useState } from 'react'
import aegisLogo from '../assets/aegis-logo-96.png'
import { MAIN_SITE, BUSINESS } from '../data/content'

// All links point to www.aegiscoworking.ae — this micro-site passes users
// (and link equity) back to the main Aegis website.
const workspaces = [
  { label: 'Office Space', note: 'Flexi desk & dedicated desk', to: `${MAIN_SITE}/office-space` },
  { label: 'Private Office', note: 'Furnished, lockable suites', to: `${MAIN_SITE}/private-office` },
  { label: 'Virtual Office', note: 'ADGM business address', to: `${MAIN_SITE}/virtual-office` },
  { label: 'Meeting Room', note: 'Book by the hour', to: `${MAIN_SITE}/meeting-room` },
  { label: 'Day Pass', note: 'From AED 100 a day', to: `${MAIN_SITE}/day-pass` },
  { label: 'Addax Tower Business Centre', note: 'Our building on Al Reem Island', to: `${MAIN_SITE}/addax-tower-al-reem-island` },
]
const audiences = [
  { label: 'Freelancers', note: 'Flexible desk for solo professionals', to: `${MAIN_SITE}/office-space` },
  { label: 'Startups', note: 'From one desk to a full team', to: `${MAIN_SITE}/office-space` },
  { label: 'Individuals', note: 'No long-term commitment', to: `${MAIN_SITE}/day-pass` },
  { label: 'Small Businesses', note: 'Private space to grow', to: `${MAIN_SITE}/private-office` },
]
const groups = [
  { id: 'workspaces', label: 'Workspaces', items: workspaces },
  { id: 'serve', label: 'Who We Serve', items: audiences },
]
const links = [
  { label: 'Hot Deals', to: `${MAIN_SITE}/pricing` },
  { label: 'Blog', to: `${MAIN_SITE}/blogs` },
  { label: 'About', to: `${MAIN_SITE}/about` },
  { label: 'Contact', to: `${MAIN_SITE}/contact` },
]

const trackPhone = () => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'phone_call_click', { phone_number: BUSINESS.phoneDisplay, source: 'servicedofficeadgm' })
  }
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [menu, setMenu] = useState(null)
  const [mGroup, setMGroup] = useState('workspaces')
  const ref = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('menu-locked', open)
    const onKey = (e) => { if (e.key === 'Escape') { setOpen(false); setMenu(null) } }
    const onClick = (e) => { if (ref.current && !ref.current.contains(e.target)) setMenu(null) }
    document.addEventListener('keydown', onKey)
    document.addEventListener('click', onClick)
    return () => { document.removeEventListener('keydown', onKey); document.removeEventListener('click', onClick) }
  }, [open])

  const close = () => { setOpen(false); setMenu(null) }
  const t = (on) => (on ? 0 : -1)

  return (
    <header className={`hd ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`} ref={ref}>
      <div className="hd-bar">
        <a href={`${MAIN_SITE}/`} className="hd-brand">
          <img src={aegisLogo} alt="" width="96" height="96" decoding="async" />
          <span>Aegis{' '}<b>Coworking</b></span>
        </a>

        <nav className="hd-nav" aria-label="Aegis Coworking">
          <ul>
            <li><a href={`${MAIN_SITE}/`}>Home</a></li>
            {groups.map((g) => (
              <li key={g.id} className={`hd-dd ${menu === g.id ? 'is-active' : ''}`}
                onMouseEnter={() => setMenu(g.id)} onMouseLeave={() => setMenu(null)}>
                <button type="button" aria-expanded={menu === g.id} aria-controls={`dd-${g.id}`}
                  onClick={() => setMenu(menu === g.id ? null : g.id)}>
                  {g.label}
                  <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><path d="M1.5 3.5 5 7l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>
                </button>
                <div className="hd-panel" id={`dd-${g.id}`}>
                  <ul>
                    {g.items.map((it) => (
                      <li key={it.label}><a href={it.to} onClick={close}><b>{it.label}</b><small>{it.note}</small></a></li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
            {links.map((l) => <li key={l.label}><a href={l.to}>{l.label}</a></li>)}
          </ul>
        </nav>

        <div className="hd-actions">
          <a className="hd-phone" href={BUSINESS.phoneTel} onClick={trackPhone}>{BUSINESS.phoneDisplay}</a>
          <a className="hd-cta" href={`${MAIN_SITE}/contact`}>Request a quote</a>
          <button type="button" className="hd-burger" aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open} aria-controls="hd-sheet" onClick={() => setOpen(!open)}>
            <span /><span /><span />
          </button>
        </div>
      </div>

      <div className="hd-sheet" id="hd-sheet" aria-hidden={!open}>
        <nav aria-label="Aegis Coworking mobile">
          <a className="hs-link" style={{ '--n': 0 }} href={`${MAIN_SITE}/`} onClick={close} tabIndex={t(open)}>Home</a>
          {groups.map((g, gi) => (
            <div key={g.id} className={`hs-group ${mGroup === g.id ? 'is-open' : ''}`} style={{ '--n': gi + 1 }}>
              <button type="button" className="hs-link hs-toggle" aria-expanded={mGroup === g.id}
                onClick={() => setMGroup(mGroup === g.id ? null : g.id)} tabIndex={t(open)}>
                {g.label}<span className="hs-chev" aria-hidden="true" />
              </button>
              <div className="hs-panel">
                <ul>
                  {g.items.map((it) => (
                    <li key={it.label}><a href={it.to} onClick={close} tabIndex={t(open && mGroup === g.id)}>{it.label}<small>{it.note}</small></a></li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          {links.map((l, i) => (
            <a key={l.label} className="hs-link" style={{ '--n': i + 3 }} href={l.to} onClick={close} tabIndex={t(open)}>{l.label}</a>
          ))}
        </nav>
        <div className="hs-foot">
          <a className="hs-btn hs-btn-solid" href={`${MAIN_SITE}/contact`} onClick={close} tabIndex={t(open)}>Request a quote</a>
          <div className="hs-row">
            <a className="hs-btn" href={BUSINESS.phoneTel} onClick={trackPhone} tabIndex={t(open)}>Call</a>
            <a className="hs-btn" href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer" tabIndex={t(open)}>WhatsApp</a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
