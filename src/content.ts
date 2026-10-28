// All site text and contact details live here – edit this file to update the website.
// Images go in public/images/ – a missing image shows a soft placeholder until you add it.

export const contact = {
  phoneDisplay: '93422 68902',
  phoneIntl: '919342268902', // country code + number, no spaces or "+"
  city: 'Coimbatore',
  whatsappMessage: 'Hello Anbudan Thunnai, I would like to know more about your companion service for my parents.',
}

export const telLink = `tel:+${contact.phoneIntl}`
export const whatsappUrl = (message: string) => `https://wa.me/${contact.phoneIntl}?text=${encodeURIComponent(message)}`
export const whatsappLink = whatsappUrl(contact.whatsappMessage)

export const brand = {
  name: 'Anbudan Thunnai',
  tamilName: 'அன்புடன் துணை',
  tagline: 'Care. Companionship. Independence.',
}

export const hero = {
  titleLead: 'A trusted companion for your parents',
  titleCity: 'in Coimbatore.',
  subtitle: 'Helping seniors get out, stay connected and live life with confidence.',
  note: 'For a more active, connected and happier tomorrow.',
}

export type IconName =
  | 'car'
  | 'pin'
  | 'people'
  | 'shield'
  | 'updates'
  | 'chat'
  | 'heart'
  | 'video'
  | 'home'
  | 'activity'
  | 'clock'
  | 'calendar'

export const trustPoints: { icon: IconName; text: string }[] = [
  { icon: 'shield', text: 'Verified and trained companions' },
  { icon: 'video', text: 'Live checks & video calls for family' },
  { icon: 'activity', text: 'Trained physio & sports coaches' },
  { icon: 'chat', text: 'Tamil-speaking, patient and caring' },
]

export const services: { icon: IconName; accent: 'teal' | 'orange'; image: string; title: string; text: string; details: string[] }[] = [
  {
    icon: 'car',
    accent: 'teal',
    image: '/images/service-pickup.jpg',
    title: 'Pickup & Drop',
    text: 'Help getting to hospitals, clinics, family homes and back safely.',
    details: ['Doctor & hospital appointments', 'Lab tests and pharmacy runs', 'Bank, post office & errands'],
  },
  {
    icon: 'pin',
    accent: 'orange',
    image: '/images/service-outings.jpg',
    title: 'Outings & Visits',
    text: 'Temples, parks, shopping, meet friends and family.',
    details: ['Temple darshan & festivals', 'Parks, malls & markets', 'Weddings & family functions'],
  },
  {
    icon: 'people',
    accent: 'teal',
    image: '/images/service-companionship.jpg',
    title: 'Friendly Companionship',
    text: 'Conversations, walks and time together.',
    details: ['Morning & evening walks', 'Reading, music & conversation', 'Games, hobbies & small joys'],
  },
  {
    icon: 'home',
    accent: 'orange',
    image: '/images/service-live-checks.jpg',
    title: 'In-Person Live Checks',
    text: 'A companion visits home to see how your parent is really doing.',
    details: ['Wellbeing & mood check', 'Home, food & medicine stock look-over', 'Photo & note update to family'],
  },
  {
    icon: 'video',
    accent: 'teal',
    image: '/images/service-video-calls.jpg',
    title: 'Video Calls with Family',
    text: 'We set up the call and sit with them, so you can see them and talk face to face.',
    details: ['Scheduled calls on WhatsApp or Zoom', 'Help with phones & tablets', 'Perfect for families abroad'],
  },
  {
    icon: 'activity',
    accent: 'orange',
    image: '/images/service-fitness.jpg',
    title: 'Physio & Fitness Sessions',
    text: 'Gentle, safe movement guided by trained physiotherapists and sports coaches.',
    details: ['Mobility, balance & stretching', 'Strength to help prevent falls', 'Guided walks & light exercise'],
  },
]

export const whyUs = {
  image: '/images/why-us.jpg',
  title: 'What makes us different',
  intro:
    'We are not an agency sending whoever is free. We choose people with patience and warmth, train them, and treat your parents the way we would treat our own.',
  points: [
    {
      icon: 'heart' as IconName,
      title: 'Patient, caring people',
      text: 'Chosen for kindness first. They walk at your parent’s pace, listen to the same story twice, and never rush.',
    },
    {
      icon: 'activity' as IconName,
      title: 'Trained physio & sports coaches',
      text: 'Qualified physiotherapists and sports coaches help seniors stay strong, steady and mobile.',
    },
    {
      icon: 'video' as IconName,
      title: 'You can see them anytime',
      text: 'In-person live checks and video calls mean you know how they are, not just that they are “fine”.',
    },
    {
      icon: 'shield' as IconName,
      title: 'Verified & trained',
      text: 'Every companion is background-verified and trained in safe assistance and respectful elder care.',
    },
    {
      icon: 'updates' as IconName,
      title: 'Updates you can rely on',
      text: 'Trip updates, visit notes and photos on WhatsApp, so families far away stay in the loop.',
    },
    {
      icon: 'chat' as IconName,
      title: 'Local & Tamil-speaking',
      text: 'Coimbatore people who know the city, the temples, the hospitals, and speak your parent’s language.',
    },
  ],
}

export const familyConnect = {
  image: '/images/family-video-call.jpg',
  eyebrow: 'For families living away',
  title: 'See your parents, even from far away',
  text: 'Living in Chennai, Bengaluru, Dubai or the US? Our companions visit in person, check on your parents, and connect you on a video call so you can see their smile for yourself.',
  points: [
    'Live in-person check visits at home',
    'Video calls set up and held by the companion',
    'Short report with photos after every visit',
    'A call straight away if anything needs your attention',
  ],
}

export type Plan = {
  name: string
  tagline: string
  price: string
  priceNote: string
  featured?: boolean
  features: string[]
}

// Set `price` to an amount like '₹2,999' when you are ready to show pricing.
export const plans: Plan[] = [
  {
    name: 'Weekly Check-in',
    tagline: 'Peace of mind, every week',
    price: 'Call for price',
    priceNote: 'per month',
    features: [
      '1 in-person live check visit every week',
      'Video call with family during the visit',
      'WhatsApp update with photos after each visit',
      'Friendly chat, walk or small errand',
    ],
  },
  {
    name: 'Companion Plus',
    tagline: 'Out and about, regularly',
    price: 'Call for price',
    priceNote: 'per month',
    features: [
      'Everything in Weekly Check-in',
      '2–3 companion visits every week',
      'Hospital & clinic pickup and drop',
      'Outings: temples, parks, shopping',
      'Monthly physio or fitness session',
    ],
  },
  {
    name: 'Ultimate Care',
    tagline: 'Our most complete care',
    price: 'Call for price',
    priceNote: 'per month',
    featured: true,
    features: [
      'Everything in Companion Plus',
      'Visits on most days of the week',
      'Weekly physio / sports-coach sessions',
      'Scheduled video calls whenever you like',
      'Priority booking & one dedicated companion',
      'Monthly wellbeing summary for family',
    ],
  },
]

export const plansNote = 'Need something one-off? Single visits, hospital trips and outings can be booked anytime without a plan.'

export const steps: { title: string; text: string }[] = [
  { title: 'Call or WhatsApp us', text: 'Tell us about your parent, what they enjoy and what help they need.' },
  { title: 'Meet your companion', text: 'We match a verified, Tamil-speaking companion and introduce them first.' },
  { title: 'Choose a plan', text: 'Pick a weekly or monthly package, or book single visits as you need them.' },
  { title: 'Stay connected', text: 'Get live updates, photos and video calls, wherever you are.' },
]

export const areas = [
  'RS Puram',
  'Saibaba Colony',
  'Gandhipuram',
  'Peelamedu',
  'Race Course',
  'Ramanathapuram',
  'Singanallur',
  'Vadavalli',
  'Thudiyalur',
  'Saravanampatti',
  'Ganapathy',
  'Kovaipudur',
]

export const faqs: { q: string; a: string }[] = [
  {
    q: 'Who are your companions?',
    a: 'Patient, caring people from Coimbatore who are background-verified and trained in safe assistance and elder care. Our fitness sessions are run by trained physiotherapists and sports coaches.',
  },
  {
    q: 'Do you provide medical or nursing care?',
    a: 'Our companions are not nurses. We help with getting to doctors and hospitals, everyday support, companionship and guided exercise. For nursing needs, we can accompany your parent to the right professionals.',
  },
  {
    q: 'How do live checks and video calls work?',
    a: 'A companion visits your parent at home, checks how they are doing, and connects you on a video call from their phone. You also receive a short WhatsApp update with photos after every visit.',
  },
  {
    q: 'We live abroad. Can we book and pay from outside India?',
    a: 'Yes. Many of our families live outside Coimbatore or abroad. You can arrange everything on WhatsApp, and we will keep you updated after each visit.',
  },
  {
    q: 'Can we change or pause a subscription?',
    a: 'Yes. You can move between plans or pause when family is visiting. Just let us know on WhatsApp.',
  },
  {
    q: 'How soon can a companion come?',
    a: 'For plans we usually start within a few days after an introduction. For one-off trips, try to book a day ahead; we will always try to help with urgent requests.',
  },
]

export const closingQuote = 'Because they deserve more than just help — they deserve company.'

export const audience = 'For parents living alone or families living away'
