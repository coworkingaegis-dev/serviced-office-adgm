// ---------------------------------------------------------------------------
// Single source of truth for the "Virtual Office & Serviced Office in ADGM"
// micro-site. Prices and facts come from www.aegiscoworking.ae
// (virtual-office, private-office and pricing pages).
// Edit this file — not the components — when prices, FAQs or blogs change.
// ---------------------------------------------------------------------------

import heroImg from '../assets/virtual-office-adgm-addax-tower.webp'
import basicImg from '../assets/virtual-office-basic-adgm.webp'
import premiumImg from '../assets/virtual-office-premium-adgm.webp'
import enterpriseImg from '../assets/virtual-office-enterprise-adgm.webp'
import servicedImg from '../assets/serviced-office-al-reem-island.webp'
import execSmallImg from '../assets/executive-office-small-adgm.webp'
import execMediumImg from '../assets/executive-office-medium-adgm.webp'
import meetingImg from '../assets/meeting-room-virtual-office-adgm.webp'

export const SITE_URL = 'https://servicedofficeadgm.online'
export const MAIN_SITE = 'https://www.aegiscoworking.ae'
export const PAGE_TITLE = 'Virtual Office ADGM from AED 292 & Serviced Office | Aegis'
export const PAGE_DESCRIPTION =
  'Virtual office in ADGM from AED 292/month: ADGM registered office address at Addax Tower, mail handling and meeting rooms. Serviced office from AED 4,500.'
export const DATE_PUBLISHED = '2026-10-06'
export const DATE_MODIFIED = '2026-10-06'

export const VO_PRICE = 292        // virtual office, AED / month (promotional)
export const VO_REGULAR = 350      // regular price shown struck through on aegiscoworking.ae/pricing
export const OFFICE_PRICE = 4500   // serviced / private office, from AED / month
export const DESK_PRICE = 1150     // dedicated desk, AED / month

export const BUSINESS = {
  name: 'Aegis Coworking - ADGM',
  phoneDisplay: '+971 50 392 6316',
  phoneTel: 'tel:+971503926316',
  whatsapp: 'https://wa.me/971503926316',
  email: 'contact@aegiscoworking.ae',
  street: 'Addax Tower, 3812, Al Reem Island, RT3',
  city: 'Abu Dhabi',
  country: 'United Arab Emirates',
  lat: 24.4989303,
  lng: 54.4031693,
  mapsUrl: 'https://www.google.com/maps/place/Aegis+Coworking+Space+ADGM/@24.4989303,54.4031693,17z',
  mapsEmbed: 'https://www.google.com/maps?q=Aegis+Coworking+Space+ADGM,+Addax+Tower,+Al+Reem+Island,+Abu+Dhabi&ll=24.4989303,54.4031693&z=16&output=embed',
  sameAs: [
    'https://www.linkedin.com/company/aegis-coworking/',
    'https://www.instagram.com/aegis.coworking/',
    'https://www.facebook.com/aegis.coworking',
  ],
}

export const images = { heroImg, basicImg, premiumImg, enterpriseImg, servicedImg, execSmallImg, execMediumImg, meetingImg }

export const sections = [
  { id: 'packages', label: 'Virtual office packages' },
  { id: 'address', label: 'Your ADGM address' },
  { id: 'mail', label: 'Mail handling' },
  { id: 'serviced', label: 'Serviced & executive office' },
  { id: 'compare', label: 'Compare options' },
  { id: 'faq', label: 'FAQ' },
]

// Words cycled in the hero rotator
export const rotatorWords = ['virtual office', 'registered address', 'Private office', 'executive office', 'mailing address']

// Full keyword set (structured data + llms files; visible copy works them in as sentences)
export const keywords = [
  'Virtual office', 'Virtual office Abu Dhabi', 'Virtual office ADGM', 'ADGM virtual office', 'Virtual office in ADGM',
  'Virtual office UAE', 'Virtual business address', 'ADGM business address', 'ADGM registered address',
  'ADGM registered office address', 'ADGM office address', 'ADGM company address', 'Virtual office for ADGM company',
  'ADGM company registration address', 'Business address Abu Dhabi', 'Registered business address Abu Dhabi',
  'Professional business address Abu Dhabi', 'Virtual office Al Reem Island', 'Virtual office in Al Reem Island',
  'Virtual office Addax Tower', 'Addax Tower virtual office', 'Addax Tower business address', 'Virtual office near ADGM',
  'Virtual office for company registration', 'Virtual office with mail handling', 'Virtual office with meeting room access',
  'Affordable virtual office Abu Dhabi', 'Affordable virtual office ADGM', 'Virtual office Abu Dhabi price',
  'Virtual office ADGM price', 'Virtual office Abu Dhabi cost', 'ADGM virtual office cost', 'Virtual office packages Abu Dhabi',
  'Virtual office packages ADGM', 'Virtual office for startups Abu Dhabi', 'Virtual office for SMEs Abu Dhabi',
  'Virtual office for international companies', 'ADGM business address service', 'ADGM office solution',
  'Professional virtual office Abu Dhabi', 'Corporate virtual office Abu Dhabi', 'Business mailing address Abu Dhabi',
  'Registered office address Abu Dhabi', 'Serviced office ADGM', 'Serviced office Al Reem Island', 'Executive office',
  'Executive office ADGM', 'Best coworking space in Abu Dhabi ADGM', 'Aegis Coworking',
]

// Virtual office packages (descriptions from aegiscoworking.ae/virtual-office)
export const packages = [
  {
    id: 'basic', tier: 'Basic', name: 'Basic ADGM virtual office', price: VO_PRICE, img: 'basicImg', w: 800, h: 449,
    pitch: 'An ADGM registered office address for founders, freelancers and international businesses.',
    perks: ['Registered ADGM business address at Addax Tower', 'Support for your ADGM licence application', 'Mail receiving & forwarding', 'Company name on the on-site directory'],
  },
  {
    id: 'premium', tier: 'Premium', name: 'Premium ADGM virtual office', price: null, img: 'premiumImg', w: 800, h: 533, featured: true,
    pitch: 'A professional virtual office in Abu Dhabi for growing companies that need more than an address.',
    perks: ['Everything in Basic', 'UAE business phone number with live call answering', 'Meeting room access', 'Priority mail handling'],
  },
  {
    id: 'enterprise', tier: 'Enterprise', name: 'Enterprise ADGM virtual office', price: null, img: 'enterpriseImg', w: 512, h: 512,
    pitch: 'A corporate virtual office in Abu Dhabi for established and international companies.',
    perks: ['Everything in Premium', 'Dedicated account manager', 'Priority administrative support', 'Flexible coworking access at Addax Tower'],
  },
]

// Mail handling flow
export const mailSteps = [
  { icon: 'inbox', title: 'Mail arrives at Addax Tower', text: 'Letters and parcels addressed to your company are received at our staffed reception on the 38th floor.' },
  { icon: 'mail', title: 'Held for you', text: 'Your mail stays with our reception team until you collect it or ask us to forward it.' },
  { icon: 'send', title: 'Forward or collect', text: 'Collect it in person, or have it forwarded — worldwide mail forwarding is available.' },
  { icon: 'headset', title: 'Calls answered too', text: 'Premium and Enterprise add live call answering in your company name on a UAE number.' },
]

// Serviced / executive office sizes (from aegiscoworking.ae/private-office)
export const offices = [
  { name: 'Small executive office', size: '1–4 people', img: 'execSmallImg', w: 474, h: 664 },
  { name: 'Medium serviced office', size: '5–10 people', img: 'execMediumImg', w: 700, h: 700 },
  { name: 'Large serviced office', size: '10–20+ people', img: 'servicedImg', w: 900, h: 675 },
]
export const officePerks = [
  'Fully furnished, lockable office', 'Ergonomic desks & chairs', 'Lockable storage', 'High-speed internet',
  '24/7 secure access', 'Registered ADGM business address', 'Reception, cleaning & utilities included', 'Meeting rooms & business lounge',
]

// Compare
export const compare = [
  { label: 'Price', vo: 'From AED 292 / month', desk: 'AED 1,150 / month', office: 'From AED 4,500 / month' },
  { label: 'Registered ADGM business address', vo: true, desk: true, office: true },
  { label: 'Mail handling', vo: true, desk: true, office: true },
  { label: 'Your own workspace', vo: false, desk: 'Your own desk', office: 'Private, lockable office' },
  { label: 'Meeting room access', vo: 'Premium & Enterprise', desk: true, office: true },
  { label: 'Best for', vo: 'Non-regulated companies, remote founders', desk: 'Licences that need a physical desk', office: 'Teams, FSRA-regulated firms' },
]

export const audiences = [
  { icon: 'arrows', title: 'Startups', text: 'A virtual office for startups in Abu Dhabi: register in ADGM and look established from day one, for a fraction of an office lease.', link: { text: 'Flexible workspace for ADGM startups', slug: 'flexible-workspace-adgm-startups' } },
  { icon: 'building', title: 'SMEs', text: 'A virtual office for SMEs in Abu Dhabi that keeps a professional business address while your team works where it is most productive.', link: { text: 'Which ADGM workspace fits you?', slug: 'which-adgm-workspace-fits-you' } },
  { icon: 'globe', title: 'International companies', text: 'A virtual office for international companies entering the UAE — an ADGM company registration address without relocating staff.', link: { text: 'Register an ADGM company remotely', slug: 'adgm-company-registration-remote-uae' } },
  { icon: 'people', title: 'Consultants & holding companies', text: 'A business mailing address in Abu Dhabi for consultants, SPVs and holding structures that need presence, not a desk.', link: { text: 'ADGM workspace for consultants', slug: 'adgm-workspace-consultants-right-setup' } },
]

// Genuine reviews published on aegiscoworking.ae (verbatim)
export const testimonials = [
  { quote: 'Very happy with the service from Aegis Coworking. We needed a professional business address in Abu Dhabi without committing to a large traditional office, and Aegis provided a practical solution. The team is responsive and professional.', name: 'Uzair Tahir', role: 'Tech Startup Founder' },
  { quote: 'Aegis coworking provide super professional services especially with the pricing, and the customer service, i needed the license and a space for one of my team member and they did all within a week time, my team member loved the space. I will highly suggest if any on is looking to get a license and a space in ADGM go for Aegis coworking.', name: 'Ubaid Zia', role: 'Startup Founder' },
  { quote: 'I was specifically looking for the cheapest coworking space in ADGM and wanted a privacy environment rather than just a desk. Aegis offered a good balance of price, location, and facilities.', name: 'Naveeda Haseeb', role: 'Startup Founder' },
  { quote: 'We were comparing affordable coworking space in ADGM and found Aegis to be a very practical choice. The workspace feels professional while keeping costs affordable.', name: 'John Paints', role: 'Software Analyst' },
  { quote: 'For businesses looking for a low cost office in ADGM, Aegis provides flexible office space and a professional seating. The team made the setup process very easy.', name: 'Haseeb Awan', role: 'Entrepreneur' },
  { quote: 'Aegis Coworking is a convenient workspace in Abu Dhabi for startups and growing companies. The flexible workspace options, meeting room and hot desk helped us avoid the commitment of a traditional office.', name: 'Kasim Malikkandy', role: 'Consultant' },
  { quote: 'Nice suitable area for coworking for Adam incorporation.', name: 'Ali Kutty Faizy', role: 'Entrepreneur' },
]

// Blog articles on aegiscoworking.ae connected to virtual office / registered address / serviced office
export const guides = [
  { slug: 'virtual-office-adgm-your-prestigious-business-address-minus-the-cost', title: 'Virtual Office ADGM: A Prestigious Business Address, Minus the Cost', tag: 'Virtual office' },
  { slug: 'adgm-company-registration-remote-uae', title: 'Can You Register an ADGM Company Remotely From Outside the UAE?', tag: 'Registration' },
  { slug: 'adgm-work-from-home-registered-address', title: 'Run Your ADGM Company From Home With a Registered Address', tag: 'Registered address' },
  { slug: 'adgm-shared-registered-address-multiple-companies', title: 'Can Two ADGM Companies Share the Same Registered Address?', tag: 'Registered address' },
  { slug: 'adgm-company-setup-cost-overseas-founders', title: 'ADGM Company Setup Costs for Overseas Founders', tag: 'Cost' },
  { slug: 'adgm-fsra-office-requirements', title: 'ADGM FSRA Office Requirements: When a Virtual Office Isn\'t Enough', tag: 'Compliance' },
  { slug: 'which-adgm-workspace-fits-you', title: 'Which ADGM Workspace Fits You? Virtual, Desk or Private Office', tag: 'Guide' },
  { slug: 'is-al-reem-island-part-of-adgm', title: 'Is Al Reem Island Part of ADGM?', tag: 'Location' },
  { slug: 'addax-tower-adgm-business-workspace', title: 'Addax Tower ADGM: A Business Address on Al Reem Island', tag: 'Location' },
  { slug: 'private-office-rent-adgm-cost-what-to-expect-in-2026', title: 'Private Office Rent in ADGM: What to Expect in 2026', tag: 'Serviced office' },
  { slug: 'adgm-license-workspace-questions-before-applying', title: 'Questions to Ask About Your ADGM Licence Workspace', tag: 'Licence' },
  { slug: 'adgm-vs-difc-workspace-cost', title: 'ADGM vs DIFC Workspace Cost Compared', tag: 'Cost' },
].map((g) => ({ ...g, url: `${MAIN_SITE}/blog/${g.slug}` }))

export const faqs = [
  {
    q: 'How much does a virtual office in ADGM cost?',
    a: 'A virtual office at Aegis Coworking in ADGM starts from AED 292 per month (regular price AED 350). That is the Basic package with a registered ADGM business address, mail handling and directory listing. Premium and Enterprise packages add a UAE phone line, call answering, meeting room access and account management — ask us for a quote.',
    link: { text: 'ADGM coworking and office cost guide 2026', url: `${MAIN_SITE}/blog/adgm-coworking-space-cost-2026` },
  },
  {
    q: 'What is a virtual office in ADGM?',
    a: 'A virtual office in ADGM gives your company a registered office address inside the Abu Dhabi Global Market jurisdiction, plus mail handling and on-demand meeting rooms, without renting a full-time office. At Aegis Coworking the address is Office 3812, Addax Tower, Al Reem Island.',
    link: { text: 'Virtual office ADGM explained', url: `${MAIN_SITE}/blog/virtual-office-adgm-your-prestigious-business-address-minus-the-cost` },
  },
  {
    q: 'Can I use the virtual office address for ADGM company registration?',
    a: 'Yes. The Aegis virtual office address can be used for initial ADGM company registration and for ongoing licence renewals, and we support you through the ADGM licence application.',
  },
  {
    q: 'Do I need a physical office, or is a virtual office enough in ADGM?',
    a: 'Many non-regulated ADGM companies can use a virtual office or flexi desk. FSRA-regulated firms usually need physical premises, such as a serviced private office. Check your licence type before choosing.',
    link: { text: 'ADGM FSRA office requirements', url: `${MAIN_SITE}/blog/adgm-fsra-office-requirements` },
  },
  {
    q: 'What is included in the virtual office packages?',
    a: 'Basic includes a registered ADGM business address, licence application support, mail receiving and forwarding and a company directory listing. Premium adds a UAE business phone number with live call answering, meeting room access and priority mail handling. Enterprise adds a dedicated account manager, priority administrative support and flexible coworking access.',
  },
  {
    q: 'Is mail handling included with the virtual office?',
    a: 'Yes. Every package includes mail receiving and forwarding at Addax Tower, with worldwide forwarding available. Premium includes priority mail handling.',
  },
  {
    q: 'Does the virtual office include meeting room access?',
    a: 'Meeting room access is included in the Premium and Enterprise packages. Basic members can book meeting rooms by the hour when they need to meet clients in Abu Dhabi.',
  },
  {
    q: 'Is Addax Tower on Al Reem Island inside ADGM?',
    a: 'Yes. Addax Tower on Al Reem Island is within the ADGM jurisdiction, so an Addax Tower business address is a genuine ADGM business address.',
    link: { text: 'Is Al Reem Island part of ADGM?', url: `${MAIN_SITE}/blog/is-al-reem-island-part-of-adgm` },
  },
  {
    q: 'Can I register an ADGM company from abroad with a virtual office?',
    a: 'Many international founders set up remotely and use a virtual office for the ADGM company address. See how remote registration works before you start.',
    link: { text: 'Registering an ADGM company remotely', url: `${MAIN_SITE}/blog/adgm-company-registration-remote-uae` },
  },
  {
    q: 'Can two companies share one virtual office address?',
    a: 'Each ADGM company needs its own registered address arrangement. Ask us about setups for more than one company.',
    link: { text: 'Can two ADGM companies share a registered address?', url: `${MAIN_SITE}/blog/adgm-shared-registered-address-multiple-companies` },
  },
  {
    q: 'What is a serviced office or executive office in ADGM?',
    a: 'A serviced office is a fully furnished private office with internet, cleaning, reception and utilities included in one monthly price. At Aegis, serviced and executive offices on Al Reem Island start from AED 4,500 per month for teams of 1 to 20+, with 24/7 access and a registered ADGM business address.',
    link: { text: 'Private office rent in ADGM: 2026 guide', url: `${MAIN_SITE}/blog/private-office-rent-adgm-cost-what-to-expect-in-2026` },
  },
  {
    q: 'Can I upgrade from a virtual office to a desk or serviced office later?',
    a: 'Yes. You can move from a virtual office to a dedicated desk or a private serviced office at Addax Tower at any time, at preferential rates.',
  },
  {
    q: 'Can I run my ADGM company from home with a virtual office?',
    a: 'Many founders keep the virtual office as their registered ADGM address and work from home. Your licence obligations still apply, so read our guide first.',
    link: { text: 'Running your ADGM company from home', url: `${MAIN_SITE}/blog/adgm-work-from-home-registered-address` },
  },
  {
    q: 'How do I get started?',
    a: 'Message us on WhatsApp or call +971 50 392 6316. Tours of Addax Tower run Monday to Friday, 9 AM–6 PM, and we can send a video walkthrough if you are abroad.',
  },
]
