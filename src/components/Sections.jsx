import { useState } from 'react'
import { Reveal } from './Motion'
import Icon from './Icon'
import {
  sections, packages, mailSteps, offices, officePerks, compare, audiences, images,
  VO_PRICE, VO_REGULAR, OFFICE_PRICE, MAIN_SITE, BUSINESS,
} from '../data/content'

const wa = (text) => `${BUSINESS.whatsapp}?text=${encodeURIComponent(text)}`

export function Answer() {
  return (
    <section className="answer-sec sec" aria-labelledby="what-is">
      <div className="wrap answer-grid">
        <Reveal variant="tilt">
          <p className="eyebrow">In one paragraph</p>
          <h2 id="what-is">What is a virtual office in ADGM?</h2>
          <p className="answer">
            A virtual office in ADGM is a registered office address inside the Abu Dhabi Global Market
            jurisdiction that your company can use for ADGM company registration, licence renewals,
            letterheads and official mail — without renting a full-time office. Mail handling and
            on-demand meeting rooms are usually included.
          </p>
          <p>
            At <a href={`${MAIN_SITE}/virtual-office`}>Aegis Coworking</a>, your ADGM company address is
            Office 3812, Addax Tower, Al Reem Island: a virtual office near ADGM's main business district that sits inside
            the ADGM jurisdiction itself. It is a professional business address in Abu Dhabi from
            AED {VO_PRICE} a month, and a virtual office UAE founders can use from anywhere in the world.
          </p>
        </Reveal>
        <nav className="toc" aria-label="On this page">
          <p>On this page</p>
          <ol>{sections.map((s) => <li key={s.id}><a href={`#${s.id}`}>{s.label}</a></li>)}</ol>
        </nav>
      </div>
    </section>
  )
}

export function Packages() {
  return (
    <section className="packages sec" id="packages" aria-labelledby="pk-title">
      <div className="wrap">
        <div className="head head-center">
          <p className="eyebrow">Virtual office packages ADGM</p>
          <h2 id="pk-title">Virtual office Abu Dhabi price, plainly listed</h2>
          <p>Three virtual office packages in Abu Dhabi, each with an ADGM registered address at Addax Tower. Start on Basic and move up when you need a phone line or meeting rooms.</p>
        </div>
        <div className="pk-grid">
          {packages.map((p, i) => (
            <Reveal as="article" key={p.id} variant="flip" delay={i * 120} className={`pk ${p.featured ? 'pk-featured' : ''}`}>
              {p.featured && <span className="pk-flag">For growing teams</span>}
              <figure className="pk-img">
                <img src={images[p.img]} alt={`${p.name} at Aegis Coworking, Addax Tower, Abu Dhabi`} width={p.w} height={p.h} loading="lazy" decoding="async" />
              </figure>
              <div className="pk-body">
                <p className="pk-tier">{p.tier}</p>
                <h3>{p.name}</h3>
                <p className="pk-price">
                  {p.price ? (
                    <><s>AED {VO_REGULAR}</s> <b>AED {p.price}</b><span>/ month</span></>
                  ) : (
                    <><b className="pk-quote">On request</b><span>tailored quote</span></>
                  )}
                </p>
                <p className="pk-pitch">{p.pitch}</p>
                <ul className="pk-perks">
                  {p.perks.map((x) => <li key={x}><Icon name="check" size={15} strokeWidth={2.4} />{x}</li>)}
                </ul>
                <a className={`btn ${p.featured ? 'btn-brass' : 'btn-ink'}`} href={wa(`Hi Aegis, I'm interested in the ${p.name} package.`)} target="_blank" rel="noopener noreferrer">
                  {p.price ? 'Start for AED 292' : 'Request a quote'}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="fine center">
          An affordable virtual office in ADGM: the ADGM virtual office cost is AED {VO_PRICE} a month on Basic
          (regular AED {VO_REGULAR}). ADGM government fees are separate. See current offers on{' '}
          <a href={`${MAIN_SITE}/pricing`}>aegiscoworking.ae/pricing</a>.
        </p>
      </div>
    </section>
  )
}

const uses = [
  { id: 'reg', icon: 'doc', label: 'Company registration', title: 'ADGM company registration address', text: 'Use the Addax Tower address as the registered office on your ADGM application — a virtual office for company registration with an address inside the ADGM jurisdiction. We support you through the licence application.' },
  { id: 'renew', icon: 'shield', label: 'Licence renewals', title: 'Keep the same ADGM registered address', text: 'The same virtual office address carries you through every licence renewal, so your ADGM registered office address never changes when your team or plans do.' },
  { id: 'paper', icon: 'mail', label: 'Letterhead & invoices', title: 'A professional business address in Abu Dhabi', text: 'Print it on letterheads, invoices, contracts and business cards. Clients see a corporate Addax Tower business address, and official mail reaches a staffed reception.' },
  { id: 'web', icon: 'globe', label: 'Website & listings', title: 'One consistent business address everywhere', text: 'Use the same registered business address in Abu Dhabi on your website, LinkedIn and directory listings, so customers, banks and partners always find you in the same place.' },
]

export function AddressUses() {
  const [tab, setTab] = useState('reg')
  return (
    <section className="uses sec" id="address" aria-labelledby="uses-title">
      <div className="wrap uses-grid">
        <div>
          <p className="eyebrow">ADGM business address</p>
          <h2 id="uses-title">One ADGM office address, four jobs</h2>
          <p className="uses-sub">Your virtual business address does more than receive post. Here is where an ADGM company address actually gets used.</p>
          <div className="uses-tabs" role="tablist" aria-label="Uses of your ADGM address">
            {uses.map((u) => (
              <button key={u.id} type="button" role="tab" id={`tab-${u.id}`} aria-controls={`panel-${u.id}`} aria-selected={tab === u.id} tabIndex={tab === u.id ? 0 : -1} className={tab === u.id ? 'on' : ''} onClick={() => setTab(u.id)}>
                <Icon name={u.icon} size={18} strokeWidth={1.7} />{u.label}
              </button>
            ))}
          </div>
        </div>
        <div className="uses-stage">
          {uses.map((u) => (
            <div key={u.id} role="tabpanel" id={`panel-${u.id}`} aria-labelledby={`tab-${u.id}`} hidden={tab !== u.id} className="uses-card">
              <span className="uses-ic"><Icon name={u.icon} size={26} strokeWidth={1.5} /></span>
              <h3>{u.title}</h3>
              <p>{u.text}</p>
              <p className="uses-addr">Office 3812, Addax Tower, Al Reem Island, ADGM, Abu Dhabi</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Mail() {
  return (
    <section className="mailsec sec" id="mail" aria-labelledby="mail-title">
      <div className="wrap">
        <div className="head head-row">
          <div>
            <p className="eyebrow eyebrow-light">Virtual office with mail handling</p>
            <h2 id="mail-title">Your business mailing address in Abu Dhabi, handled</h2>
          </div>
          <p>Every package is a virtual office with mail handling. Premium and Enterprise make it a virtual office with meeting room access and a phone line answered in your company name.</p>
        </div>
        <ol className="mail-track">
          {mailSteps.map((s, i) => (
            <Reveal as="li" key={s.title} variant="spin" delay={i * 140}>
              <span className="mt-ic"><Icon name={s.icon} size={22} strokeWidth={1.6} /></span>
              <span className="mt-n" aria-hidden="true">0{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function Serviced() {
  return (
    <section className="serviced sec" id="serviced" aria-labelledby="sv-title">
      <div className="wrap sv-grid">
        <div className="sv-copy">
          <p className="eyebrow">Serviced office Al Reem Island</p>
          <h2 id="sv-title">Need a door that closes? Serviced and executive office in ADGM</h2>
          <p>
            When a virtual office isn't enough — a growing team, client meetings every day, or an
            FSRA-regulated licence — step up to a serviced office on Al Reem Island. Each executive office
            is fully furnished and lockable, with one all-in monthly price from <b>AED {OFFICE_PRICE.toLocaleString('en-US')}</b>.
          </p>
          <ul className="sv-perks">
            {officePerks.map((p) => <li key={p}><Icon name="check" size={15} strokeWidth={2.4} />{p}</li>)}
          </ul>
          <div className="sv-ctas">
            <a className="btn btn-ink" href={wa('Hi Aegis, I would like a serviced office in ADGM.')} target="_blank" rel="noopener noreferrer">Ask about a serviced office</a>
            <a className="link-arrow" href={`${MAIN_SITE}/private-office`}>Private office details <Icon name="arrow" size={15} /></a>
          </div>
        </div>
        <div className="sv-cards">
          {offices.map((o, i) => (
            <Reveal as="figure" key={o.name} variant="flip" delay={i * 130} className={`sv-card sv-${i}`}>
              <img src={images[o.img]} alt={`${o.name} for ${o.size} at Aegis Coworking, ADGM`} width={o.w} height={o.h} loading="lazy" decoding="async" />
              <figcaption><b>{o.name}</b><span>{o.size}</span></figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Compare() {
  const cell = (v) => (v === true ? <span className="yes"><Icon name="check" size={15} strokeWidth={2.6} /><span className="sr-only">Yes</span></span>
    : v === false ? <span className="no">—<span className="sr-only">No</span></span> : v)
  return (
    <section className="compare sec" id="compare" aria-labelledby="cmp-title">
      <div className="wrap">
        <div className="head head-center">
          <p className="eyebrow">ADGM office solution</p>
          <h2 id="cmp-title">Virtual office, desk or serviced office?</h2>
          <p>All three include an ADGM registered address at Addax Tower. The difference is how much physical space your licence and team need.</p>
        </div>
        <Reveal className="cmp-wrap" variant="tilt">
          <table className="cmp">
            <caption className="sr-only">Virtual office vs dedicated desk vs serviced office in ADGM</caption>
            <thead>
              <tr>
                <th scope="col"><span className="sr-only">Feature</span></th>
                <th scope="col" className="cmp-hl">Virtual office</th>
                <th scope="col">Dedicated desk</th>
                <th scope="col">Private office</th>
              </tr>
            </thead>
            <tbody>
              {compare.map((r) => (
                <tr key={r.label}>
                  <th scope="row">{r.label}</th>
                  <td className="cmp-hl" data-label="Virtual office">{cell(r.vo)}</td>
                  <td data-label="Dedicated desk">{cell(r.desk)}</td>
                  <td data-label="Private office">{cell(r.office)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
        <p className="fine center">
          Not sure which you need? Read <a href={`${MAIN_SITE}/blog/which-adgm-workspace-fits-you`}>which ADGM workspace fits you</a>, or
          see the <a href="https://dedicateddeskadgm.online/">dedicated desk in ADGM</a> guide.
        </p>
      </div>
    </section>
  )
}

export function Audiences() {
  return (
    <section className="aud sec" aria-labelledby="aud-title">
      <div className="wrap">
        <div className="head head-row">
          <div>
            <p className="eyebrow">Virtual office for every stage</p>
            <h2 id="aud-title">Who uses an ADGM virtual office</h2>
          </div>
          <p>From first licence to regional headquarters, a professional virtual office in Abu Dhabi grows with you — and converts to a desk or serviced office when it's time.</p>
        </div>
        <ul className="aud-grid">
          {audiences.map((a, i) => (
            <Reveal as="li" key={a.title} variant="flip" delay={i * 100}>
              <span className="aud-ic"><Icon name={a.icon} size={22} strokeWidth={1.6} /></span>
              <h3>{a.title}</h3>
              <p>{a.text}</p>
              <a href={`${MAIN_SITE}/blog/${a.link.slug}`}>{a.link.text}<Icon name="arrow" size={15} /></a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
