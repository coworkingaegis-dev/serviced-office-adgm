import { useEffect, useRef, useState } from 'react'
import heroSmall from '../assets/virtual-office-adgm-addax-tower-640.webp'
import { images, rotatorWords, BUSINESS, VO_PRICE } from '../data/content'

// Cycles the rotator words with a 3D flip (paused for reduced-motion users)
function useRotator(length, ms = 2400) {
  const [i, setI] = useState(0)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = setInterval(() => setI((n) => (n + 1) % length), ms)
    return () => clearInterval(t)
  }, [length, ms])
  return i
}

// Pointer tilt for the letter (pointer devices only)
function useTilt() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !window.matchMedia('(hover: hover)').matches) return
    const stage = el.closest('.hero-stage')
    const move = (e) => {
      const r = stage.getBoundingClientRect()
      const x = (e.clientX - r.left) / r.width - 0.5
      const y = (e.clientY - r.top) / r.height - 0.5
      el.style.setProperty('--ry', `${(x * 16).toFixed(2)}deg`)
      el.style.setProperty('--rx', `${(-y * 12).toFixed(2)}deg`)
    }
    const leave = () => { el.style.setProperty('--ry', '0deg'); el.style.setProperty('--rx', '0deg') }
    stage.addEventListener('pointermove', move)
    stage.addEventListener('pointerleave', leave)
    return () => { stage.removeEventListener('pointermove', move); stage.removeEventListener('pointerleave', leave) }
  }, [])
  return ref
}

function Hero() {
  const idx = useRotator(rotatorWords.length)
  const letter = useTilt()

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-glow" aria-hidden="true" />
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="hero-kicker hl" style={{ '--d': 0 }}>
            <span className="kicker-line" aria-hidden="true" />Addax Tower · Al Reem Island · ADGM
          </p>
          <h1 id="hero-title" className="hero-title hl" style={{ '--d': 1 }}>
            Virtual office &amp; serviced office in ADGM, <em>for founders setting up from abroad</em>
          </h1>

          <p className="rotator hl" style={{ '--d': 2 }}>
            <span className="sr-only">Get your virtual office, registered address, serviced office or executive office at Addax Tower.</span>
            <span aria-hidden="true" className="rot-pre">Get your</span>
            <span aria-hidden="true" className="rot-box">
              {rotatorWords.map((w, n) => (
                <span key={w} className={`rot-word ${n === idx ? 'is-on' : ''} ${n === (idx - 1 + rotatorWords.length) % rotatorWords.length ? 'is-out' : ''}`}>{w}</span>
              ))}
            </span>
          </p>

          <p className="hero-lead hl" style={{ '--d': 3 }}>
            Setting up from outside the UAE? Get an ADGM registered office address at Office 3812, Addax Tower for
            company registration and licence renewals, with mail handling and meeting rooms for when you visit.
            Virtual office in Abu Dhabi from <strong>AED {VO_PRICE}/month</strong>; serviced and executive office from AED 4,500.
          </p>
          <div className="hero-ctas hl" style={{ '--d': 4 }}>
            <a className="btn btn-brass" href={`${BUSINESS.whatsapp}?text=${encodeURIComponent('Hi Aegis, I would like a virtual office in ADGM.')}`} target="_blank" rel="noopener noreferrer">Get my ADGM address</a>
            <a className="btn btn-line" href="#packages">Compare packages</a>
          </div>
        </div>

        <div className="hero-stage" role="group" aria-label="Your ADGM registered office address">
          <figure className="hero-arch">
            <img src={images.heroImg} srcSet={`${heroSmall} 640w, ${images.heroImg} 1200w`}
              sizes="(max-width: 600px) calc(100vw - 40px), (max-width: 1080px) 560px, 500px"
              alt="Virtual office ADGM reception at Aegis Coworking, Addax Tower, Al Reem Island, Abu Dhabi"
              width="1200" height="900" fetchPriority="high" decoding="async" />
          </figure>

          <svg className="seal" viewBox="0 0 200 200" aria-hidden="true">
            <defs><path id="seal-path" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" /></defs>
            <text><textPath href="#seal-path">ADGM REGISTERED ADDRESS • ADDAX TOWER • AL REEM ISLAND •</textPath></text>
          </svg>
          <span className="seal-core" aria-hidden="true">AED<b>{VO_PRICE}</b><small>/ month</small></span>

          <div className="letter-wrap">
            <div className="letter" ref={letter}>
              <div className="letter-top">
                <span className="letter-label">Registered office</span>
                <span className="stamp" aria-hidden="true"><b>ADGM</b><small>Abu Dhabi</small></span>
              </div>
              <address className="letter-addr">
                <span className="la-co">Your Company Ltd</span>
                <span>Office 3812, 38th Floor</span>
                <span>Addax Tower, Al Reem Island</span>
                <span>Abu Dhabi Global Market</span>
                <span>Abu Dhabi, UAE</span>
              </address>
              <div className="letter-foot">
                <span>Mail handling</span><span>Meeting rooms</span><span>Licence-ready</span>
              </div>
              <span className="postmark" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>

      <div className="wrap hero-band">
        <p>
          Aegis Coworking is an ADGM business address service and office solution on Al Reem Island: an
          affordable virtual office in ADGM, a business mailing address in Abu Dhabi, and serviced office
          space for when you need a door to close. Searching for the best coworking space in Abu Dhabi ADGM? Compare every option below.
        </p>
      </div>
    </section>
  )
}

export default Hero
