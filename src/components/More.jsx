import { useState } from 'react'
import { Reveal } from './Motion'
import Icon from './Icon'
import { testimonials, guides, faqs, images, BUSINESS, MAIN_SITE, VO_PRICE } from '../data/content'
import { PhoneLink } from './Navbar'

const initials = (n) => n.split(' ').map((p) => p[0]).slice(0, 2).join('')

export function Reviews() {
  const [i, setI] = useState(0)
  const t = testimonials[i]
  const go = (d) => setI((n) => (n + d + testimonials.length) % testimonials.length)
  return (
    <section className="reviews sec" id="reviews" aria-labelledby="rev-title">
      <div className="wrap rev-grid">
        <div className="rev-head">
          <p className="eyebrow">Member reviews</p>
          <h2 id="rev-title">Founders who chose an Addax Tower business address</h2>
          <p>Reviews as published on <a href={`${MAIN_SITE}/`}>aegiscoworking.ae</a>.</p>
          <div className="rev-nav">
            <button type="button" onClick={() => go(-1)} aria-label="Previous review"><Icon name="arrow" size={18} /></button>
            <span aria-live="polite">{String(i + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}</span>
            <button type="button" onClick={() => go(1)} aria-label="Next review"><Icon name="arrow" size={18} /></button>
          </div>
        </div>

        <div className="rev-stage">
          <figure className="rev-card" key={i} aria-hidden="true">
            <span className="rev-mark" aria-hidden="true">“</span>
            <blockquote><p>{t.quote}</p></blockquote>
            <figcaption>
              <span className="rev-av" aria-hidden="true">{initials(t.name)}</span>
              <span><b>{t.name}</b><small>{t.role}</small></span>
            </figcaption>
          </figure>
          <span className="rev-sheet rev-sheet-1" aria-hidden="true" />
          <span className="rev-sheet rev-sheet-2" aria-hidden="true" />
        </div>
      </div>

      {/* All reviews in the HTML for crawlers and no-JS readers */}
      <div className="wrap">
        <ul className="rev-all">
          {testimonials.map((r, n) => (
            <li key={r.name}>
              <button type="button" className={n === i ? 'on' : ''} onClick={() => setI(n)}>
                <span className="rev-av" aria-hidden="true">{initials(r.name)}</span><span className="sr-only">Show review by {r.name}</span>
              </button>
              <blockquote className="sr-only"><p>{r.quote}</p><footer>{r.name}, {r.role}</footer></blockquote>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function Guides() {
  return (
    <section className="guides sec" id="guides" aria-labelledby="guides-title">
      <div className="wrap">
        <div className="head head-row">
          <div>
            <p className="eyebrow">From the Aegis blog</p>
            <h2 id="guides-title">Virtual office and registered address guides</h2>
          </div>
          <p>Registration, FSRA rules, shared addresses and costs — read before you pick an ADGM office solution. <a href={`${MAIN_SITE}/blogs`}>All articles</a></p>
        </div>
        <ul className="g-grid">
          {guides.map((g, i) => (
            <Reveal as="li" key={g.slug} variant="flip" delay={(i % 4) * 80}>
              <a href={g.url}>
                <span className="g-n" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <span className="g-tag">{g.tag}</span>
                <span className="g-title">{g.title}</span>
                <span className="g-go" aria-hidden="true"><Icon name="arrow" size={16} /></span>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function FAQ() {
  return (
    <section className="faq sec" id="faq" aria-labelledby="faq-title">
      <div className="wrap faq-grid">
        <div className="faq-head">
          <p className="eyebrow">FAQ</p>
          <h2 id="faq-title">Virtual office ADGM questions, answered</h2>
          <p>Cost, ADGM registration, mail handling, FSRA rules and serviced offices. Still unsure? We usually reply on WhatsApp within the hour during business hours.</p>
          <a className="btn btn-ink" href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer">Ask on WhatsApp</a>
        </div>
        <div className="faq-list">
          {faqs.map((f, i) => (
            <details key={f.q} open={i === 0 ? true : undefined}>
              <summary><span className="fq-n" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span><h3>{f.q}</h3><span className="fq-ic" aria-hidden="true" /></summary>
              <div className="fq-body">
                <p>{f.a}</p>
                {f.link && <p><a href={f.link.url}>{f.link.text}</a></p>}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Location() {
  const [mapOn, setMapOn] = useState(false)
  return (
    <section className="location sec" id="location" aria-labelledby="loc-title">
      <div className="wrap loc-grid">
        <div className="map">
          {mapOn ? (
            <iframe title="Map of Aegis Coworking virtual office, Addax Tower, Al Reem Island, ADGM" src={BUSINESS.mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
          ) : (
            <button type="button" className="map-facade" onClick={() => setMapOn(true)}>
              <img src={images.meetingImg} alt="" width="900" height="675" loading="lazy" decoding="async" />
              <span className="map-pin" aria-hidden="true"><Icon name="pin" size={22} strokeWidth={1.8} /></span>
              <span className="map-tag"><b>Addax Tower, Office 3812</b><small>Al Reem Island, ADGM</small></span>
              <span className="map-load">Load interactive map</span>
            </button>
          )}
        </div>
        <div>
          <p className="eyebrow">Virtual office Al Reem Island</p>
          <h2 id="loc-title">Addax Tower virtual office, inside ADGM</h2>
          <p className="loc-sub">
            A virtual office in Al Reem Island at Addax Tower is a genuine ADGM business address — Al Reem
            Island is part of the ADGM jurisdiction.{' '}
            <a href={`${MAIN_SITE}/blog/is-al-reem-island-part-of-adgm`}>Is Al Reem Island part of ADGM?</a>
          </p>
          <p className="loc-sub">
            Comparing virtual office Abu Dhabi cost across providers? The virtual office Addax Tower address is an
            affordable virtual office Abu Dhabi startups can grow from and a corporate virtual office Abu Dhabi clients
            recognise. It serves as a registered office address Abu Dhabi licences and documents can carry, a business
            mailing address Abu Dhabi suppliers can post to and a professional business address Abu Dhabi customers trust.
            As a virtual office for ADGM company setups, it suits a virtual office for startups Abu Dhabi founders launch,
            a virtual office for SMEs Abu Dhabi teams run remotely and a professional virtual office Abu Dhabi consultants
            rely on. Our virtual office packages Abu Dhabi start at AED {VO_PRICE} — an affordable virtual office ADGM
            option with a registered business address Abu Dhabi companies can use for their ADGM licence.
          </p>
          <dl className="nap">
            <div><dt>Address</dt><dd>{BUSINESS.name}, {BUSINESS.street}, {BUSINESS.city}, {BUSINESS.country}</dd></div>
            <div><dt>Phone</dt><dd><PhoneLink>{BUSINESS.phoneDisplay}</PhoneLink></dd></div>
            <div><dt>Email</dt><dd><a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a></dd></div>
            <div><dt>Tours</dt><dd>Monday–Friday, 9 AM–6 PM · video walkthroughs on WhatsApp</dd></div>
          </dl>
          <a className="btn btn-ink" href={BUSINESS.mapsUrl} target="_blank" rel="noopener noreferrer">Get directions</a>
        </div>
      </div>
    </section>
  )
}

export function FinalCTA() {
  return (
    <section className="final" aria-labelledby="final-title">
      <div className="wrap">
        <Reveal className="final-card" variant="flip">
          <svg className="final-seal" viewBox="0 0 200 200" aria-hidden="true">
            <defs><path id="final-path" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" /></defs>
            <text><textPath href="#final-path">VIRTUAL OFFICE • SERVICED OFFICE • EXECUTIVE OFFICE •</textPath></text>
          </svg>
          <p className="eyebrow eyebrow-light">Virtual office ADGM price · from AED {VO_PRICE} / month</p>
          <h2 id="final-title">Put your company at Addax Tower this week</h2>
          <p>Message us for your ADGM registered address, or book a tour of our serviced offices on Al Reem Island.</p>
          <div className="final-actions">
            <a className="btn btn-brass" href={`${BUSINESS.whatsapp}?text=${encodeURIComponent('Hi Aegis, I would like to set up a virtual office in ADGM.')}`} target="_blank" rel="noopener noreferrer">Start on WhatsApp</a>
            <PhoneLink className="btn btn-line-light"><Icon name="phone" size={16} />{BUSINESS.phoneDisplay}</PhoneLink>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function WhatsAppFab() {
  return (
    <a className="wa-fab" href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Chat with Aegis Coworking on WhatsApp">
      <svg width="26" height="26" viewBox="0 0 32 32" aria-hidden="true">
        <path fill="currentColor" d="M16 3a13 13 0 0 0-11.2 19.6L3 29l6.6-1.7A13 13 0 1 0 16 3zm0 23.7c-2 0-4-.5-5.7-1.6l-.4-.2-3.9 1 1-3.8-.3-.4A10.7 10.7 0 1 1 16 26.7zm5.9-8c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2l-1 1.2c-.2.2-.4.2-.7.1a8.8 8.8 0 0 1-4.4-3.8c-.3-.6.3-.5.9-1.7.1-.2 0-.4 0-.5l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.7s1.2 3.2 1.3 3.4c.2.2 2.3 3.5 5.5 4.9 2 .9 2.8.9 3.8.8.6-.1 1.9-.8 2.2-1.5.3-.8.3-1.4.2-1.5-.1-.2-.3-.3-.6-.4z" />
      </svg>
    </a>
  )
}
