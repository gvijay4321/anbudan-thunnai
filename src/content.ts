// All site text and contact details live here – edit this file to update the website.

export const contact = {
  phoneDisplay: '93422 68902',
  phoneIntl: '919342268902', // country code + number, no spaces or "+"
  city: 'Coimbatore',
  whatsappMessage: 'Hello Anbudan Thunnai, I would like to know more about your companion service for my parents.',
}

export const telLink = `tel:+${contact.phoneIntl}`
export const whatsappLink = `https://wa.me/${contact.phoneIntl}?text=${encodeURIComponent(contact.whatsappMessage)}`

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

export type ServiceIcon = 'car' | 'pin' | 'people'

export const services: { icon: ServiceIcon; accent: 'teal' | 'orange'; title: string; text: string; details: string[] }[] = [
  {
    icon: 'car',
    accent: 'teal',
    title: 'Pickup & Drop',
    text: 'Help getting to hospitals, clinics, family homes and back safely.',
    details: ['Doctor & hospital appointments', 'Lab tests and pharmacy runs', 'Bank, post office & errands'],
  },
  {
    icon: 'pin',
    accent: 'orange',
    title: 'Outings & Visits',
    text: 'Temples, parks, shopping, meet friends and family.',
    details: ['Temple darshan & festivals', 'Parks, malls & markets', 'Weddings & family functions'],
  },
  {
    icon: 'people',
    accent: 'teal',
    title: 'Friendly Companionship',
    text: 'Conversations, walks and time together.',
    details: ['Morning & evening walks', 'Reading, music & conversation', 'Regular check-in visits'],
  },
]

export type TrustIcon = 'shield' | 'updates' | 'chat' | 'heart'

export const trustPoints: { icon: TrustIcon; text: string }[] = [
  { icon: 'shield', text: 'Verified and trained companions' },
  { icon: 'updates', text: 'Trip updates for family' },
  { icon: 'chat', text: 'Tamil-speaking support' },
  { icon: 'heart', text: 'Respectful, patient and caring service' },
]

export const steps: { title: string; text: string }[] = [
  { title: 'Call or WhatsApp us', text: 'Tell us about your parent, where they need to go and when.' },
  { title: 'We match a companion', text: 'A verified, Tamil-speaking companion is assigned and introduced.' },
  { title: 'Stay in the loop', text: 'Get trip updates while your parent is out, and a note when they are home safe.' },
]

export const closingQuote = 'Because they deserve more than just help — they deserve company.'

export const audience = 'For parents living alone or families living away'
