import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import { Answer, Packages, AddressUses, Mail, Serviced, Compare, Audiences } from '../components/Sections'
import { Reviews, Guides, FAQ, Location, FinalCTA, WhatsAppFab } from '../components/More'
import {
  SITE_URL, MAIN_SITE, PAGE_TITLE, PAGE_DESCRIPTION, DATE_PUBLISHED, DATE_MODIFIED,
  BUSINESS, VO_PRICE, OFFICE_PRICE, packages, faqs, guides, keywords,
} from '../data/content'

const OG_IMAGE = `${SITE_URL}/og-image.jpg`
const BUSINESS_ID = `${MAIN_SITE}/#business`
const priceValidUntil = `${new Date().getFullYear()}-12-31`

const offer = (name, url, description, price) => ({
  '@type': 'Offer', name, url, description,
  ...(price ? {
    price, priceCurrency: 'AED', priceValidUntil,
    priceSpecification: { '@type': 'UnitPriceSpecification', price, priceCurrency: 'AED', unitText: 'MONTH', unitCode: 'MON' },
  } : {}),
  availability: 'https://schema.org/InStock',
  seller: { '@id': BUSINESS_ID },
  itemOffered: { '@type': 'Service', name },
})

const schemaGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite', '@id': `${SITE_URL}/#website`, url: `${SITE_URL}/`,
      name: 'Virtual Office & Serviced Office in ADGM — Aegis Coworking', inLanguage: 'en-AE',
      publisher: { '@id': `${MAIN_SITE}/#organization` },
    },
    {
      '@type': 'WebPage', '@id': `${SITE_URL}/#webpage`, url: `${SITE_URL}/`,
      name: PAGE_TITLE, description: PAGE_DESCRIPTION, inLanguage: 'en-AE',
      isPartOf: { '@id': `${SITE_URL}/#website` }, about: { '@id': BUSINESS_ID },
      mainEntity: { '@id': `${SITE_URL}/#virtual-office` },
      primaryImageOfPage: OG_IMAGE, datePublished: DATE_PUBLISHED, dateModified: DATE_MODIFIED,
      breadcrumb: { '@id': `${SITE_URL}/#breadcrumb` },
      keywords: keywords.join(', '),
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['#hero-title', '.answer'] },
    },
    {
      '@type': 'BreadcrumbList', '@id': `${SITE_URL}/#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Aegis Coworking', item: `${MAIN_SITE}/` },
        { '@type': 'ListItem', position: 2, name: 'Virtual Office', item: `${MAIN_SITE}/virtual-office` },
        { '@type': 'ListItem', position: 3, name: 'Virtual Office & Serviced Office in ADGM', item: `${SITE_URL}/` },
      ],
    },
    {
      '@type': 'Organization', '@id': `${MAIN_SITE}/#organization`, name: BUSINESS.name,
      url: MAIN_SITE, logo: `${MAIN_SITE}/logo.png`, sameAs: BUSINESS.sameAs,
    },
    {
      '@type': 'LocalBusiness', '@id': BUSINESS_ID, name: BUSINESS.name, alternateName: 'Aegis Coworking',
      description: 'Virtual office, ADGM registered office address, serviced office and coworking space at Addax Tower, Al Reem Island, inside Abu Dhabi Global Market (ADGM).',
      url: MAIN_SITE, logo: `${MAIN_SITE}/logo.png`, image: [OG_IMAGE], telephone: '+971503926316',
      email: BUSINESS.email, priceRange: 'AED 100 – AED 4,500', currenciesAccepted: 'AED',
      address: { '@type': 'PostalAddress', streetAddress: BUSINESS.street, addressLocality: 'Abu Dhabi', addressRegion: 'Abu Dhabi', addressCountry: 'AE' },
      geo: { '@type': 'GeoCoordinates', latitude: BUSINESS.lat, longitude: BUSINESS.lng },
      hasMap: BUSINESS.mapsUrl,
      openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], opens: '00:00', closes: '23:59' }],
      areaServed: [{ '@type': 'Place', name: 'Abu Dhabi Global Market (ADGM)' }, { '@type': 'Place', name: 'Al Reem Island' }, { '@type': 'City', name: 'Abu Dhabi' }, { '@type': 'Country', name: 'United Arab Emirates' }],
      sameAs: BUSINESS.sameAs,
    },
    {
      '@type': 'Service', '@id': `${SITE_URL}/#virtual-office`, name: 'Virtual Office in ADGM',
      alternateName: ['ADGM virtual office', 'Virtual office Abu Dhabi', 'ADGM registered office address', 'ADGM business address'],
      serviceType: 'Virtual office / registered business address', provider: { '@id': BUSINESS_ID },
      areaServed: { '@type': 'Place', name: 'Abu Dhabi Global Market (ADGM), Abu Dhabi, UAE' },
      description: 'Registered ADGM business address at Office 3812, Addax Tower, Al Reem Island with mail handling, meeting room access and ADGM licence support.',
      offers: offer('Basic ADGM virtual office', `${SITE_URL}/#packages`, packages[0].pitch, VO_PRICE),
      hasOfferCatalog: {
        '@type': 'OfferCatalog', name: 'Virtual office packages ADGM',
        itemListElement: packages.map((p) => offer(p.name, `${SITE_URL}/#packages`, p.pitch, p.price)),
      },
    },
    {
      '@type': 'Service', '@id': `${SITE_URL}/#serviced-office`, name: 'Serviced Office on Al Reem Island, ADGM',
      alternateName: ['Executive office ADGM', 'Serviced office ADGM', 'Private office ADGM'],
      serviceType: 'Serviced office', provider: { '@id': BUSINESS_ID },
      areaServed: { '@type': 'Place', name: 'Al Reem Island, ADGM, Abu Dhabi' },
      description: 'Fully furnished, lockable serviced and executive offices for 1–20+ people with 24/7 access and a registered ADGM business address.',
      offers: offer('Serviced office', `${SITE_URL}/#serviced`, 'Private serviced office from AED 4,500 per month.', OFFICE_PRICE),
    },
    {
      '@type': 'FAQPage', '@id': `${SITE_URL}/#faq`,
      mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
    {
      '@type': 'ItemList', '@id': `${SITE_URL}/#guides`, name: 'ADGM virtual office and registered address guides',
      itemListElement: guides.map((g, i) => ({ '@type': 'ListItem', position: i + 1, name: g.title, url: g.url })),
    },
  ],
}

function VirtualOfficePage() {
  return (
    <>
      <Helmet>
        <html lang="en-AE" />
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <link rel="canonical" href={`${SITE_URL}/`} />
        <link rel="alternate" hrefLang="en-ae" href={`${SITE_URL}/`} />
        <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/`} />
        <meta name="geo.region" content="AE-AZ" />
        <meta name="geo.placename" content="Al Reem Island, Abu Dhabi" />
        <meta name="geo.position" content={`${BUSINESS.lat};${BUSINESS.lng}`} />
        <meta name="ICBM" content={`${BUSINESS.lat}, ${BUSINESS.lng}`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Aegis Coworking" />
        <meta property="og:locale" content="en_AE" />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESCRIPTION} />
        <meta property="og:url" content={`${SITE_URL}/`} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:alt" content="Virtual office in ADGM at Aegis Coworking, Addax Tower, Al Reem Island" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />
        <script type="application/ld+json">{JSON.stringify(schemaGraph)}</script>
      </Helmet>

      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <Answer />
        <Packages />
        <AddressUses />
        <Mail />
        <Serviced />
        <Compare />
        <Audiences />
        <Reviews />
        <Guides />
        <FAQ />
        <Location />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  )
}

export default VirtualOfficePage
