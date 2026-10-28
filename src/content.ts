// All site text and contact details live here – edit this file to update the website.
// Images go in public/images/ – a missing image shows a soft placeholder until you add it.

export const contact = {
  phoneDisplay: '93422 68902',
  phoneIntl: '919342268902', // country code + number, no spaces or "+"
  city: 'Coimbatore',
  whatsappMessage: 'Hello Anbudan Thunnai, I would like to know more about your service for my parents.',
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
  { icon: 'video', text: 'Home visits and video calls for family' },
  { icon: 'activity', text: 'Trained physios and sports coaches' },
  { icon: 'chat', text: 'Tamil-speaking, patient and caring' },
]

export const services: { icon: IconName; accent: 'teal' | 'orange'; image: string; title: string; text: string; details: string[] }[] = [
  {
    icon: 'car',
    accent: 'teal',
    image: '/images/service-pickup.jpg',
    title: 'Pickup & Drop',
    text: 'Help getting to hospitals, clinics, family homes and back safely.',
    details: ['Doctor and hospital visits', 'Lab tests and pharmacy', 'Bank, post office and errands'],
  },
  {
    icon: 'pin',
    accent: 'orange',
    image: '/images/service-outings.jpg',
    title: 'Outings & Visits',
    text: 'Temples, parks, shopping, meet friends and family.',
    details: ['Temple visits and festivals', 'Parks, malls and markets', 'Weddings and family functions'],
  },
  {
    icon: 'people',
    accent: 'teal',
    image: '/images/service-companionship.jpg',
    title: 'Friendly Companionship',
    text: 'Conversations, walks and time together.',
    details: ['Morning and evening walks', 'Reading, music and a chat', 'Games, puzzles and hobbies'],
  },
  {
    icon: 'home',
    accent: 'orange',
    image: '/images/service-live-checks.jpg',
    title: 'In-Person Live Checks',
    text: 'A companion visits your parent at home and checks how they are.',
    details: ['Health and mood check', 'Food and medicines check', 'Photos and a note for family'],
  },
  {
    icon: 'video',
    accent: 'teal',
    image: '/images/service-video-calls.jpg',
    title: 'Video Calls with Family',
    text: 'We set up the call and sit with them, so you can talk face to face.',
    details: ['WhatsApp or Zoom video calls', 'Help with phones and tablets', 'Good for families abroad'],
  },
  {
    icon: 'activity',
    accent: 'orange',
    image: '/images/service-fitness.jpg',
    title: 'Physio & Fitness Sessions',
    text: 'Gentle, safe exercise with trained physios and sports coaches.',
    details: ['Stretching and balance', 'Exercises to prevent falls', 'Walks and light exercise'],
  },
]

export const whyUs = {
  image: '/images/why-us.jpg',
  title: 'What makes us different',
  intro: 'We pick people who are patient and kind, and we train them before they visit any home. We look after your parents the way we would look after our own.',
  points: [
    {
      icon: 'heart' as IconName,
      title: 'Patient, caring people',
      text: 'They walk at your parent’s pace and never rush them.',
    },
    {
      icon: 'activity' as IconName,
      title: 'Physios and sports coaches',
      text: 'Trained physiotherapists and sports coaches help your parents stay active and steady on their feet.',
    },
    {
      icon: 'video' as IconName,
      title: 'Home visits and video calls',
      text: 'See and talk to your parents yourself, even if you live far away.',
    },
    {
      icon: 'shield' as IconName,
      title: 'Verified and trained',
      text: 'We check every companion’s background and train them before they start.',
    },
    {
      icon: 'updates' as IconName,
      title: 'Regular updates',
      text: 'We send trip updates, visit notes and photos on WhatsApp.',
    },
    {
      icon: 'chat' as IconName,
      title: 'Local and Tamil-speaking',
      text: 'Our team is from Coimbatore, knows the city well and speaks Tamil.',
    },
  ],
}

export const familyConnect = {
  image: '/images/family-video-call.jpg',
  eyebrow: 'For families living away',
  title: 'See your parents, even from far away',
  text: 'Do you live in Chennai, Bengaluru, Dubai or the US? Our companion visits your parents at home and connects you on a video call, so you can see them and talk to them.',
  points: [
    'Home visits to check on your parents',
    'The companion sets up the video call for them',
    'A short update with photos after every visit',
    'We call you right away if something needs attention',
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
    tagline: 'For parents who manage well on their own',
    price: 'Call for price',
    priceNote: 'per month',
    features: [
      'One home visit every week',
      'Video call with family during the visit',
      'WhatsApp update with photos after each visit',
      'Time for a chat, a walk or a small errand',
    ],
  },
  {
    name: 'Companion Plus',
    tagline: 'For parents who like to go out',
    price: 'Call for price',
    priceNote: 'per month',
    features: [
      'Everything in Weekly Check-in',
      '2 to 3 visits every week',
      'Hospital and clinic pickup and drop',
      'Outings to temples, parks and shops',
      'One physio or fitness session a month',
    ],
  },
  {
    name: 'Ultimate Care',
    tagline: 'For parents who need more help',
    price: 'Call for price',
    priceNote: 'per month',
    featured: true,
    features: [
      'Everything in Companion Plus',
      'Visits on most days of the week',
      'Weekly physio or fitness session',
      'Video calls with family when you need them',
      'The same companion for every visit',
      'Priority booking',
      'Monthly summary for the family',
    ],
  },
]

export const plansNote = 'Need help just once? You can book a single visit, hospital trip or outing without a plan.'

export const steps: { title: string; text: string }[] = [
  { title: 'Call or WhatsApp us', text: 'Tell us about your parent and the help they need.' },
  { title: 'Meet your companion', text: 'We choose a companion for your parent and introduce them before the first visit.' },
  { title: 'Choose a plan', text: 'Pick a monthly plan, or book single visits when you need them.' },
  { title: 'Stay in touch', text: 'Get updates, photos and video calls, wherever you live.' },
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
    a: 'Our companions are from Coimbatore. We check their background and train them before they start. Physio and fitness sessions are taken by trained physiotherapists and sports coaches.',
  },
  {
    q: 'Do you provide medical or nursing care?',
    a: 'No, our companions are not nurses. We help with hospital visits, daily errands, company and light exercise. If your parent needs a doctor or nurse, we can take them there.',
  },
  {
    q: 'How do home visits and video calls work?',
    a: 'A companion visits your parent at home and sees how they are. During the visit, they call you on video so you can talk to your parent. After the visit, we send you a short update with photos on WhatsApp.',
  },
  {
    q: 'We live abroad. Can we still book?',
    a: 'Yes. You can book and talk to us on WhatsApp from anywhere. We will update you after every visit.',
  },
  {
    q: 'Can we change or pause a plan?',
    a: 'Yes. You can change your plan or pause it, for example when family is visiting. Just tell us on WhatsApp.',
  },
  {
    q: 'How soon can a companion come?',
    a: 'Plans usually start within a few days of your first call. For one-off trips, please book a day ahead. We always try our best to help with urgent requests too.',
  },
]

export const closingQuote = 'Because they deserve more than just help — they deserve company.'

export const audience = 'For parents living alone or families living away'
